(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.db]
            [app.nav.views.nav :refer [nav]]
            [app.nav.events]
            [app.nav.subs]
            [app.recipes.views.recipes :refer [recipes]]
            [app.become-a-chef.views.become-a-chef :refer [become-a-chef]]
            [app.inbox.views.inboxes :refer [inboxes]]
            [app.auth.views.profile :refer [profile]]
            [app.theme :refer [cheffy-theme]]
            ["@smooth-ui/core-sc" :refer [ThemeProvider Normalize Grid Row Col]]))

(defn pages
  [page-name]
  (case page-name
    :profile       [profile]
    :become-a-chef [become-a-chef]
    :inbox         [inboxes]
    :recipes       [recipes]
    [recipes]))

(defn app
  []
  (let [active-nav @(rf/subscribe [:active-nav])]
    [:<>
     [:> Normalize]
     [:> ThemeProvider {:theme cheffy-theme}
      [:> Grid {:fluid false}
       [:> Row
        [:> Col
         [nav]
         [pages active-nav]]]]]]))

(defn ^:dev/after-load start
  []
  (rf/dispatch-sync [:initialize-db])
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))

(js/console.log {:test 2})
