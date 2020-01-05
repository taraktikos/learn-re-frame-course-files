(ns app.nav.views.nav
  (:require [re-frame.core :as rf]
            [app.nav.views.authenticated :refer [authenticated]]
            [app.nav.views.public :refer [public]]))

(defn nav []
  (let [logged-in? @(rf/subscribe [:logged-in?])]
    [:<>
     (if logged-in?
       [authenticated]
       [public])
     ;; [:pre (with-out-str (cljs.pprint/pprint (get-in @re-frame.db/app-db [:nav])))]
     ]))
