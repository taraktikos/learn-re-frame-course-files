(ns app.components.form-group
  (:require ["@smooth-ui/core-sc" :refer [FormGroup Label Input Textarea]]))

(defn form-group [{:keys [id label type values textarea]}]
  [:> FormGroup
   [:> Label {:html-for id} label]
   (if textarea
     [:> Textarea {:id        id
                   :control   true
                   :rows      6
                   :type      type
                   :value     (id @values)
                   :on-change #(swap! values assoc id (.. % -target -value))}]
     [:> Input {:id        id
                :control   true
                :type      type
                :value     (id @values)
                :on-change #(swap! values assoc id (.. % -target -value))}])])
