(ns app.errors.events
  (:require [re-frame.core :refer [reg-event-db]]
            [app.spec :refer [check-spec-interceptor]]))

(def errors-interceptors [check-spec-interceptor])

(reg-event-db
  :has-value?
  errors-interceptors
  (fn [db [_ id]]
    (assoc-in db [:errors id] "Can't be blank")))

(reg-event-db
  :clear-error
  errors-interceptors
  (fn [db [_ id]]
    (update-in db [:errors] dissoc id)))
