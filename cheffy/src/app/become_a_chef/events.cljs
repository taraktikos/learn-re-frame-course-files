(ns app.become-a-chef.events
  (:require [re-frame.core :refer [reg-event-fx]]
            [app.spec :refer [check-spec-interceptor]]))

(reg-event-fx
  :agree-to-cook
  [check-spec-interceptor]
  (fn [{:keys [db]} _]
    (let [uid (get-in db [:auth :uid])]
      {:db          (assoc-in db [:users uid :role] :chef)
       :dispatch-n  [[:close-modal]
                     [:set-active-page :recipes]
                     [:set-active-nav :recipes]]
       :navigate-to {:path "/recipes"}})))
