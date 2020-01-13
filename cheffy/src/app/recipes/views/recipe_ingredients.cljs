(ns app.recipes.views.recipe-ingredients
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [app.components.modal :refer [modal]]
            [app.components.form-group :refer [form-group]]
            ["@smooth-ui/core-sc" :refer [Box Typography Row Col Button]]
            ["styled-icons/fa-solid/Plus" :refer [Plus]]))

(defn recipe-ingredients
  []
  (let [initial-values {:id nil :amount "" :measure "" :name ""}
        values         (r/atom initial-values)
        open-modal     (fn [{:keys [modal-name ingredient]}]
                         (rf/dispatch [:open-modal modal-name])
                         (reset! values ingredient))
        save           (fn [event {:keys [id amount measure name]}]
                         (.preventDefault event)
                         (rf/dispatch [:upsert-ingredient {:id      (or id (keyword (str "ingredient-" (random-uuid))))
                                                           :name    (str/trim name)
                                                           :amount  (js/parseInt amount)
                                                           :measure (str/trim measure)}])
                         (reset! values initial-values))]
    (fn []
      (let [ingredients @(rf/subscribe [:ingredients])
            author?     @(rf/subscribe [:author?])]
        [:> Box {:background-color "white"
                 :border-radius    10
                 :p                2
                 :pt               0}
         [:> Box {:display         "flex"
                  :justify-content "flex-start"}
          [:> Box
           [:> Typography {:variant "h5"
                           :py      15
                           :m       0}
            "Ingredients"]]
          [:> Box {:my 15
                   :pl 10}
           [:> Button {:variant  "light"
                       :size     "sm"
                       :on-click #(open-modal {:modal-name :ingredient-editor
                                               :ingredient initial-values})}
            [:> Plus {:size 12}]]]]
         [:> Box
          (for [{:keys [id amount measure name] :as ingredient} ingredients]
            ^{:key id}
            [:> Box {:py 10}
             [:> Row (when author? {:class    "editable"
                                    :on-click #(open-modal {:modal-name :ingredient-editor
                                                            :ingredient ingredient})})
              [:> Col {:xs 3} amount " " measure]
              [:> Col name]]])
          (when author?
            [modal {:modal-name :ingredient-editor
                    :header     "Ingredient"
                    :body       [:form {:on-submit #(save % @values)}
                                 [:> Row
                                  [:> Col
                                   [form-group {:id     :amount
                                                :label  "Amount"
                                                :type   "number"
                                                :values values}]]
                                  [:> Col
                                   [form-group {:id     :measure
                                                :label  "Measure"
                                                :type   "text"
                                                :values values}]]]
                                 [form-group {:id          :name
                                              :label       "Name"
                                              :type        "text"
                                              :values      values
                                              :on-key-down #(when (= (.-which %) 13)
                                                              (save % @values))}]]
                    :footer     [:<>
                                 (when-let [ingredient-id (:id @values)]
                                   [:a {:href     "#"
                                        :on-click #(when (js/confirm "Are you sure?")
                                                     (rf/dispatch [:delete-ingredient ingredient-id]))}
                                    "Delete"])
                                 [:> Button {:variant  "light"
                                             :mx       10
                                             :on-click #(rf/dispatch [:close-modal])}
                                  "Cancel"]
                                 [:> Button {:on-click #(save % @values)}
                                  "Save"]]}])]]))))
