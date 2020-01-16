(ns app.nav.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
  :nav
  (fn [db _]
    (:nav db)))

(reg-sub
  :active-nav
  :<- [:nav]
  (fn [nav _]
    (:active-nav nav)))

(reg-sub
  :active-page
  :<- [:nav]
  (fn [nav _]
    (:active-page nav)))

(reg-sub
  :active-modal
  :<- [:nav]
  (fn [nav _]
    (:active-modal nav)))

(reg-sub
  :active-inbox
  :<- [:nav]
  (fn [nav _]
    (:active-inbox nav)))

(reg-sub
  :active-recipe
  :<- [:nav]
  (fn [nav _]
    (:active-recipe nav)))
