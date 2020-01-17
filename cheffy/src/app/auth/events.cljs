(ns app.auth.events
  (:require [re-frame.core :refer [reg-event-db reg-event-fx reg-cofx after]]
            [cljs.reader :refer [read-string]]
            [app.spec :refer [check-spec-interceptor]]))

(def cheffy-user-key "cheffy-user")

(defn set-user-ls! [{:keys [auth]}]
  (when (:uid auth) (.setItem js/localStorage cheffy-user-key (str auth))))

(defn remove-user-ls! []
  (.removeItem js/localStorage cheffy-user-key))

(def set-user-interceptors [(after set-user-ls!)
                            check-spec-interceptor])
(def remove-user-interceptors [(after remove-user-ls!)
                               check-spec-interceptor])

(reg-cofx
  :local-store-user
  (fn [cofx _]
    (assoc cofx :local-store-user (read-string (.getItem js/localStorage cheffy-user-key)))))

(reg-event-fx
  :sign-up
  set-user-interceptors
  (fn [{:keys [db]} [_ {:keys [first-name last-name email password]}]]
    {:db          (-> db
                      (assoc-in [:auth :uid] email)
                      (assoc-in [:users email] {:uid     email
                                                :profile {:first-name first-name
                                                          :last-name  last-name
                                                          :email      email
                                                          :password   password}
                                                :saved   #{}
                                                :inboxes {}}))
     :dispatch    [:set-active-page :saved]
     :navigate-to {:path "/saved"}}))

(reg-event-fx
  :log-in
  set-user-interceptors
  (fn [{:keys [db]} [_ {:keys [email password]}]]
    (let [user              (get-in db [:users email])
          correct-password? (= (get-in user [:profile :password]) password)]
      (cond
        (not user)              {:db (assoc-in db [:errors :email] "User not found")}
        (not correct-password?) {:db (assoc-in db [:errors :email] "Wrong password")}
        correct-password?       {:db          (-> db
                                                  (assoc-in [:auth :uid] email)
                                                  (update-in [:errors] dissoc :email))
                                 :dispatch    [:set-active-page :saved]
                                 :navigate-to {:path "/saved"}}))))

(reg-event-fx
  :log-out
  remove-user-interceptors
  (fn [{:keys [db]} _]
    {:db          (assoc-in db [:auth :uid] nil)
     :dispatch    [:set-active-page :recipes]
     :navigate-to {:path "/recipes"}}))

(reg-event-db
  :update-profile
  (fn [db [_ profile]]
    (let [uid (get-in db [:auth :uid])]
      (update-in db [:users uid :profile] merge (select-keys profile [:first-name :last-name])))))

(reg-event-fx
  :delete-account
  remove-user-interceptors
  (fn [{:keys [db]} _]
    (let [uid (get-in db [:auth :uid])]
      {:db          (-> db
                        (assoc-in [:auth :uid] nil)
                        (update-in [:users] dissoc uid))
       :dispatch    [:set-active-page :recipes]
       :navigate-to {:path "/recipes"}})))
