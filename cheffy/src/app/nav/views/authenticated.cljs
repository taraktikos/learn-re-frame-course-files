(ns app.nav.views.authenticated
  (:require ["@smooth-ui/core-sc" :refer [Box]]
            [re-frame.core :as rf]
            [app.nav.views.nav-item :refer [nav-item]]))

(defn authenticated []
  (let [nav-items [{:id       :saved
                    :name     "Saved"
                    :href     "#saved"
                    :dispatch #(rf/dispatch [:set-active-nav :saved])}
                   {:id       :recipes
                    :name     "Recipes"
                    :href     "#recipes"
                    :dispatch #(rf/dispatch [:set-active-nav :recipes])}
                   {:id       :inbox
                    :name     "Inbox"
                    :href     "#inbox"
                    :dispatch #(rf/dispatch [:set-active-nav :inbox])}
                   {:id       :become-a-chef
                    :name     "Chef"
                    :href     "#become-a-chef"
                    :dispatch #(rf/dispatch [:set-active-nav :become-a-chef])}
                   {:id       :profile
                    :name     "Profile"
                    :href     "#profile"
                    :dispatch #(rf/dispatch [:set-active-nav :profile])}]]
    [:> Box {:display         "flex"
             :justify-content "flex-end"
             :py              1}
     (for [item nav-items]
       (nav-item item))]))
