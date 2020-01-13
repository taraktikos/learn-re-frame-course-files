(ns app.inbox.views.inbox-page
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.components.page-nav :refer [page-nav]]
            ["@smooth-ui/core-sc" :refer [Row Col Box Button Input]]))

(defn inbox-page
  []
  (let [initial-values {:message ""}
        values         (r/atom initial-values)
        save           (fn [message]
                         (rf/dispatch [:insert-message message])
                         (reset! values initial-values))]
    (fn []
      (let [inbox-messages    @(rf/subscribe [:inbox-messages])
            conversation-with @(rf/subscribe [:conversation-with])]
        [:> Box
         [page-nav {:left   :inboxes
                    :center conversation-with}]
         [:> Row {:justify-content "center"}
          [:> Col {:xs 12 :md 6}
           [:> Box {:display "flex"}
            [:> Input {:control   true
                       :value     (:message @values)
                       :on-change #(swap! values assoc :message (.. % -target -value))}]
            [:> Box
             [:> Button {:size     "sm"
                         :mt       "6px"
                         :ml       -50
                         :on-click #(save @values)}
              "Send"]]]
           [:> Box {:background    "white"
                    :border-radius 10
                    :mt            10}
            (for [message inbox-messages]
              ^{:key (:created-at message)}
              [:div (:message message)])]]]]))))
