(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.db]
            [app.router :as router]
            ;; auth
            [app.auth.events]
            [app.auth.subs]
            [app.auth.views.profile :refer [profile]]
            [app.auth.views.log-in :refer [log-in]]
            [app.auth.views.sign-up :refer [sign-up]]
            ;; become-a-chef
            [app.become-a-chef.views.become-a-chef :refer [become-a-chef]]
            ;; inbox
            [app.inbox.views.inboxes :refer [inboxes]]
            ;; nav
            [app.nav.views.nav :refer [nav]]
            [app.nav.events]
            [app.nav.subs]
            ;; recipes
            [app.recipes.views.recipes-page :refer [recipes-page]]
            [app.recipes.views.recipe-page :refer [recipe-page]]
            [app.recipes.subs]
            [app.theme :refer [cheffy-theme]]
            ["@smooth-ui/core-sc" :refer [ThemeProvider Normalize Grid Row Col]]))

(defn pages
  [page-name]
  (case page-name
    :profile       [profile]
    :become-a-chef [become-a-chef]
    :inbox         [inboxes]
    :log-in        [log-in]
    :sign-up       [sign-up]
    :recipes       [recipes-page]
    :recipe        [recipe-page]
    [recipes-page]))

(defn app
  []
  (let [active-page @(rf/subscribe [:active-page])]
    [:<>
     [:> Normalize]
     [:> ThemeProvider {:theme cheffy-theme}
      [:> Grid {:fluid false}
       [:> Row
        [:> Col
         [nav]
         [pages active-page]]]]]]))

(defn ^:dev/after-load start
  []
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (router/start!)
  (rf/dispatch-sync [:initialize-db])
  (start))
