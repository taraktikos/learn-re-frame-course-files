(ns app.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.db]
            [app.nav.views.nav :refer [nav]]
            [app.theme :refer [cheffy-theme]]
            ["@smooth-ui/core-sc" :refer [ThemeProvider Normalize Button]]))

(defn app
  []
  [:<>
   [:> Normalize]
   [:> ThemeProvider {:theme cheffy-theme}
    [nav]]])

(defn ^:dev/after-load start
  []
  (rf/dispatch [:initialize-db])
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))

(js/console.log {:test 2})
