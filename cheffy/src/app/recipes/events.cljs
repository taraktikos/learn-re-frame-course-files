(ns app.recipes.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx]]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]))

(def recipes-endpoint "https://gist.githubusercontent.com/jacekschae/50ffe6e8851a5dfe35e932682ca32d85/raw/06e8041d0abf86e2c5d809a334cf8f18d3d6303b/recipes.json")

(defn keywordize-id
  [coll]
  (map (fn [v]
         [(keyword (:id v)) (update v :id #(keyword (:id v)))]) coll))

(reg-event-fx
  :get-recipes
  (fn [{:keys [db]} _]
    {:db         (assoc-in db [:loading :recipes] true)
     :http-xhrio {:method          :get
                  :uri             recipes-endpoint
                  :response-format (ajax/json-response-format {:keyword? true})
                  :on-success      [:get-recipes-success]
                  :on-failure      [:endpoint-request-error :get-recipes]}}))

(reg-event-db
  :get-recipes-success
  (fn [db [_ recipes]]
    (js/console.log recipes)
    (js/console.log (keywordize-id recipes))
    (-> db
        (assoc-in [:loading :recipes] false)
        (assoc-in [:recipes] (keywordize-id recipes)))))

(reg-event-db
  :endpoint-request-error
  (fn [db [_ request-type response]]
    (-> db
        (assoc-in [:errors request-type] (get response :status-text))
        (assoc-in [:loading request-type] false))))

(reg-event-db
  :save-recipe
  (fn [db [_ recipe-id]]
    (let [uid (get-in db [:auth :uid])]
      (-> db
          (update-in [:users uid :saved] conj recipe-id)
          (update-in [:recipes recipe-id :saved-count] inc)))))

(reg-event-fx
  :delete-ingredient
  (fn [{:keys [db]} [_ ingredient-id]]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db       (update-in db [:recipes recipe-id :ingredients] dissoc ingredient-id)
       :dispatch [:close-modal]})))

(reg-event-fx
  :delete-step
  (fn [{:keys [db]} [_ step-id]]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db       (update-in db [:recipes recipe-id :steps] dissoc step-id)
       :dispatch [:close-modal]})))

(reg-event-fx
  :upsert-ingredient
  (fn [{:keys [db]} [_ {:keys [id name amount measure]}]]
    (let [recipe-id   (get-in db [:nav :active-recipe])
          ingredients (get-in db [:recipes recipe-id :ingredients])
          order       (or (get-in ingredients [id :order])
                          (inc (count ingredients)))]
      {:db       (assoc-in db [:recipes recipe-id :ingredients id] {:id      id
                                                                    :order   order
                                                                    :name    name
                                                                    :amount  amount
                                                                    :measure measure})
       :dispatch [:close-modal]})))

(reg-event-fx
  :upsert-step
  (fn [{:keys [db]} [_ {:keys [id desc]}]]
    (let [recipe-id (get-in db [:nav :active-recipe])
          steps     (get-in db [:recipes recipe-id :steps])
          order     (or (get-in steps [id :order])
                        (inc (count steps)))]
      {:db       (assoc-in db [:recipes recipe-id :steps id] {:id    id
                                                              :order order
                                                              :desc  desc})
       :dispatch [:close-modal]})))

(reg-event-fx
  :upsert-recipe
  (fn [{:keys [db]} [_ {:keys [name prep-time]}]]
    (let [recipe-id (get-in db [:nav :active-recipe])
          id        (or recipe-id (keyword (str "recipe-" (random-uuid))))
          uid       (get-in db [:auth :uid])]
      {:db       (update-in db [:recipes id] merge {:id        id
                                                    :name      name
                                                    :prep-time prep-time
                                                    :cook      uid
                                                    :public?   false})
       :dispatch [:close-modal]})))

(reg-event-fx
  :delete-recipe
  (fn [{:keys [db]} _]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db          (update-in db [:recipes] dissoc recipe-id)
       :dispatch-n  [[:set-active-nav :recipes]
                     [:set-active-page :recipes]]
       :navigate-to {:path "/recipes/"}})))

(reg-event-fx
  :publish-recipe
  (fn [{:keys [db]} [_ {:keys [price]}]]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db       (update-in db [:recipes recipe-id] merge {:price   price
                                                           :public? true})
       :dispatch [:close-modal]})))

(reg-event-fx
  :unpublish-recipe
  (fn [{:keys [db]} _]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db       (assoc-in db [:recipes recipe-id :public?] false)
       :dispatch [:close-modal]})))

(reg-event-fx
  :upsert-image
  (fn [{:keys [db]} [_ {:keys [img]}]]
    (let [recipe-id (get-in db [:nav :active-recipe])]
      {:db       (assoc-in db [:recipes recipe-id :img] img)
       :dispatch [:close-modal]})))
