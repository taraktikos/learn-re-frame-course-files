(ns app.nav.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx reg-fx path]]
            [app.router :as router]
            [app.helpers :as h]))

(def nav-interceptors [(path :nav)])

(reg-fx
  :navigate-to
  (fn [{:keys [path]}]
    (router/set-token! path)))

(reg-event-fx
  :route-changed
  nav-interceptors
  (fn [{nav :db} [_ {:keys [handler route-params]}]]
    (let [nav (assoc nav :active-page handler)
          _   (js/console.log "route-changed event")]
      (case handler
        :recipes {:db       nav
                  :dispatch [:get-recipes]}
        :recipe  {:db       (assoc nav :active-recipe (keyword (:recipe-id route-params)))
                  :dispatch [:get-recipes]}
        :inbox   {:db (assoc nav :active-inbox (keyword (:inbox-id route-params)))}
        {:db (dissoc nav :active-recipe :active-inbox)}))))

(reg-event-db
  :set-active-nav
  nav-interceptors
  (fn [nav [_ active-nav]]
    (assoc nav :active-nav active-nav)))

(reg-event-db
  :set-active-page
  nav-interceptors
  (fn [nav [_ active-page]]
    (assoc nav :active-page active-page)))

(reg-event-db
  :close-modal
  (fn [db _]
    (h/close-modal db)))

(reg-event-db
  :open-modal
  nav-interceptors
  (fn [nav [_ modal-name]]
    (assoc nav :active-modal modal-name)))
