(ns app.nav.views.nav-item
  (:require ["@smooth-ui/core-sc" :refer [Box]]
            [reagent.core :as r]))

(defn nav-item [{:keys [id href name]}]
  [(r/adapt-react-class Box) {:key  id
                              :as   "a"
                              :href href
                              :ml   2
                              :pb   10} name])
