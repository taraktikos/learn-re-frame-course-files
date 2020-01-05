(ns app.nav.views.nav-item
  (:require ["@smooth-ui/core-sc" :refer [Box]]
            [reagent.core :as r]))

(defn nav-item [{:keys [id href name dispatch active-page]}]
  [(r/adapt-react-class Box) {:key           id
                              :as            "a"
                              :href          href
                              :on-click      dispatch
                              :ml            2
                              :pb            10
                              :border-bottom (when (= active-page id) "2px solid black")} name])
