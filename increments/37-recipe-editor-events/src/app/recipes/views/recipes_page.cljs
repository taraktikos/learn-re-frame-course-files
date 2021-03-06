(ns app.recipes.views.recipes-page
  (:require [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            [app.recipes.views.recipe-list :refer [recipe-list]]
            ["@smooth-ui/core-sc" :refer [Typography]]))

(defn recipes-page
  []
  (let [public @(rf/subscribe [:public])
        drafts @(rf/subscribe [:drafts])
        logged-in? @(rf/subscribe [:logged-in?])]
    [:<>
     [page-nav {:center "Recipes"}]
     (when (seq drafts)
       [:<>
        [:> Typography {:variant "h4"
                        :py 20
                        :font-weight 700}
         "Drafts"]
        [recipe-list drafts]])
     (when logged-in?
       [:> Typography {:variant "h4"
                       :py 20
                       :font-weight 700}
        "Public"])
     [recipe-list public]]))
