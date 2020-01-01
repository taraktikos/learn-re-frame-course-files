(ns app.auth.views.log-in
  (:require [reagent.core :as r]
            [app.components.page-nav :refer [page-nav]]
            [app.components.form-group :refer [form-group]]
            [re-frame.core :as rf]
            ["@smooth-ui/core-sc" :refer [Box Button Row Col FormGroup Label Input]]))

(defn log-in []
  (let [initial-values {:email "" :password ""}
        values         (r/atom initial-values)]
    (fn []
      [:> Row {:justify-content "center"}
       [:> Col {:xs 12 :sm 6}
        [page-nav {:center "Log in"}]
        [form-group {:id     :email
                     :label  "Email"
                     :type   "email"
                     :values values}]
        [form-group {:id     :password
                     :label  "Password"
                     :type   "password"
                     :values values}]
        [:> Box {:display         "flex"
                 :justify-content "space-between"}
         [:> Box {:py 1
                  :pr 2}
          [:a {:href     "#sign-up"
               :on-click #(rf/dispatch [:set-active-nav :sign-up])} "Create an account"]]
         [:> Box
          [:> Button {:on-click #(js/console.log "log in")} "Log in"]]]]])))
