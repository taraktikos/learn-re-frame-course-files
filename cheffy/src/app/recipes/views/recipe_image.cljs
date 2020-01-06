(ns app.recipes.views.recipe-image
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.form-group :refer [form-group]]
            [app.components.modal :refer [modal]]
            ["@smooth-ui/core-sc" :refer [Box Button]]))

(defn recipe-image
  []
  (let [initial-values     {:img ""}
        values             (r/atom initial-values)
        {:keys [img name]} @(rf/subscribe [:recipe])
        author?            @(rf/subscribe [:author?])
        open-modal         (fn [{:keys [modal-name recipe]}]
                             (rf/dispatch [:open-modal modal-name])
                             (reset! values recipe))
        save               (fn [img]
                             (rf/dispatch [:upsert-image img])
                             (reset! values initial-values))]
    (fn []
      [:<>
       [:> Box {:class            (when author? "editable")
                :background-image (str "url(" (or img "/img/placeholder.jpg") ")")
                :background-size  "cover"
                :min-height       "400px"
                :border-radius    10
                :alt              name
                :on-click         (when author? #(open-modal {:modal-name :image-editor
                                                              :recipe     {:img img}}))}]
       (when author?
         [modal {:modal-name :image-editor
                 :header     "Image"
                 :body       [form-group {:id     :img
                                          :label  "URL"
                                          :type   "text"
                                          :values values}]
                 :footer     [:<>
                              [:> Button {:on-click #(rf/dispatch [:close-modal])
                                          :variant  "light"}
                               "Cancel"]
                              [:> Button {:on-click #(save @values)}
                               "Save"]]}])])))
