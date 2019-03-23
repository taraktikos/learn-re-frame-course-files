goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.fx.kind) : mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21714 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21715 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21715;

try{try{var seq__21716 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21717 = null;
var count__21718 = (0);
var i__21719 = (0);
while(true){
if((i__21719 < count__21718)){
var vec__21726 = chunk__21717.cljs$core$IIndexed$_nth$arity$2(null,i__21719);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21726,(1),null);
var temp__5455__auto___21800 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21800)){
var effect_fn_21801 = temp__5455__auto___21800;
(effect_fn_21801.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21801.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21801.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21802 = seq__21716;
var G__21803 = chunk__21717;
var G__21804 = count__21718;
var G__21805 = (i__21719 + (1));
seq__21716 = G__21802;
chunk__21717 = G__21803;
count__21718 = G__21804;
i__21719 = G__21805;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21716);
if(temp__5457__auto__){
var seq__21716__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21716__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21716__$1);
var G__21806 = cljs.core.chunk_rest(seq__21716__$1);
var G__21807 = c__4550__auto__;
var G__21808 = cljs.core.count(c__4550__auto__);
var G__21809 = (0);
seq__21716 = G__21806;
chunk__21717 = G__21807;
count__21718 = G__21808;
i__21719 = G__21809;
continue;
} else {
var vec__21729 = cljs.core.first(seq__21716__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21729,(1),null);
var temp__5455__auto___21810 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21810)){
var effect_fn_21811 = temp__5455__auto___21810;
(effect_fn_21811.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21811.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21811.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21812 = cljs.core.next(seq__21716__$1);
var G__21813 = null;
var G__21814 = (0);
var G__21815 = (0);
seq__21716 = G__21812;
chunk__21717 = G__21813;
count__21718 = G__21814;
i__21719 = G__21815;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_()){
var end__21429__auto___21816 = mranderson048.re_frame.v0v10v6.re_frame.interop.now();
var duration__21430__auto___21817 = (end__21429__auto___21816 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21430__auto___21817,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now()], 0)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_(end__21429__auto___21816);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21714;
}} else {
var seq__21732 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21733 = null;
var count__21734 = (0);
var i__21735 = (0);
while(true){
if((i__21735 < count__21734)){
var vec__21743 = chunk__21733.cljs$core$IIndexed$_nth$arity$2(null,i__21735);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21743,(1),null);
var temp__5455__auto___21818 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21818)){
var effect_fn_21819 = temp__5455__auto___21818;
(effect_fn_21819.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21819.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21819.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21820 = seq__21732;
var G__21821 = chunk__21733;
var G__21822 = count__21734;
var G__21823 = (i__21735 + (1));
seq__21732 = G__21820;
chunk__21733 = G__21821;
count__21734 = G__21822;
i__21735 = G__21823;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21732);
if(temp__5457__auto__){
var seq__21732__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21732__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21732__$1);
var G__21824 = cljs.core.chunk_rest(seq__21732__$1);
var G__21825 = c__4550__auto__;
var G__21826 = cljs.core.count(c__4550__auto__);
var G__21827 = (0);
seq__21732 = G__21824;
chunk__21733 = G__21825;
count__21734 = G__21826;
i__21735 = G__21827;
continue;
} else {
var vec__21746 = cljs.core.first(seq__21732__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21746,(1),null);
var temp__5455__auto___21828 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___21828)){
var effect_fn_21829 = temp__5455__auto___21828;
(effect_fn_21829.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21829.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21829.call(null,effect_value));
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21830 = cljs.core.next(seq__21732__$1);
var G__21831 = null;
var G__21832 = (0);
var G__21833 = (0);
seq__21732 = G__21830;
chunk__21733 = G__21831;
count__21734 = G__21832;
i__21735 = G__21833;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__21751 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21752 = null;
var count__21753 = (0);
var i__21754 = (0);
while(true){
if((i__21754 < count__21753)){
var map__21760 = chunk__21752.cljs$core$IIndexed$_nth$arity$2(null,i__21754);
var map__21760__$1 = (((((!((map__21760 == null))))?(((((map__21760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21760):map__21760);
var effect = map__21760__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21760__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21760__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__21751,chunk__21752,count__21753,i__21754,map__21760,map__21760__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__21751,chunk__21752,count__21753,i__21754,map__21760,map__21760__$1,effect,ms,dispatch))
,ms);
}


var G__21834 = seq__21751;
var G__21835 = chunk__21752;
var G__21836 = count__21753;
var G__21837 = (i__21754 + (1));
seq__21751 = G__21834;
chunk__21752 = G__21835;
count__21753 = G__21836;
i__21754 = G__21837;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21751);
if(temp__5457__auto__){
var seq__21751__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21751__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21751__$1);
var G__21838 = cljs.core.chunk_rest(seq__21751__$1);
var G__21839 = c__4550__auto__;
var G__21840 = cljs.core.count(c__4550__auto__);
var G__21841 = (0);
seq__21751 = G__21838;
chunk__21752 = G__21839;
count__21753 = G__21840;
i__21754 = G__21841;
continue;
} else {
var map__21766 = cljs.core.first(seq__21751__$1);
var map__21766__$1 = (((((!((map__21766 == null))))?(((((map__21766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21766):map__21766);
var effect = map__21766__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_(((function (seq__21751,chunk__21752,count__21753,i__21754,map__21766,map__21766__$1,effect,ms,dispatch,seq__21751__$1,temp__5457__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(dispatch);
});})(seq__21751,chunk__21752,count__21753,i__21754,map__21766,map__21766__$1,effect,ms,dispatch,seq__21751__$1,temp__5457__auto__))
,ms);
}


var G__21842 = cljs.core.next(seq__21751__$1);
var G__21843 = null;
var G__21844 = (0);
var G__21845 = (0);
seq__21751 = G__21842;
chunk__21752 = G__21843;
count__21753 = G__21844;
i__21754 = G__21845;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__21773 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21774 = null;
var count__21775 = (0);
var i__21776 = (0);
while(true){
if((i__21776 < count__21775)){
var event = chunk__21774.cljs$core$IIndexed$_nth$arity$2(null,i__21776);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__21846 = seq__21773;
var G__21847 = chunk__21774;
var G__21848 = count__21775;
var G__21849 = (i__21776 + (1));
seq__21773 = G__21846;
chunk__21774 = G__21847;
count__21775 = G__21848;
i__21776 = G__21849;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21773);
if(temp__5457__auto__){
var seq__21773__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21773__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21773__$1);
var G__21850 = cljs.core.chunk_rest(seq__21773__$1);
var G__21851 = c__4550__auto__;
var G__21852 = cljs.core.count(c__4550__auto__);
var G__21853 = (0);
seq__21773 = G__21850;
chunk__21774 = G__21851;
count__21775 = G__21852;
i__21776 = G__21853;
continue;
} else {
var event = cljs.core.first(seq__21773__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch(event);


var G__21854 = cljs.core.next(seq__21773__$1);
var G__21855 = null;
var G__21856 = (0);
var G__21857 = (0);
seq__21773 = G__21854;
chunk__21774 = G__21855;
count__21775 = G__21856;
i__21776 = G__21857;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21781 = cljs.core.seq(value);
var chunk__21782 = null;
var count__21783 = (0);
var i__21784 = (0);
while(true){
if((i__21784 < count__21783)){
var event = chunk__21782.cljs$core$IIndexed$_nth$arity$2(null,i__21784);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21858 = seq__21781;
var G__21859 = chunk__21782;
var G__21860 = count__21783;
var G__21861 = (i__21784 + (1));
seq__21781 = G__21858;
chunk__21782 = G__21859;
count__21783 = G__21860;
i__21784 = G__21861;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__21781);
if(temp__5457__auto__){
var seq__21781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21781__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__21781__$1);
var G__21863 = cljs.core.chunk_rest(seq__21781__$1);
var G__21864 = c__4550__auto__;
var G__21865 = cljs.core.count(c__4550__auto__);
var G__21866 = (0);
seq__21781 = G__21863;
chunk__21782 = G__21864;
count__21783 = G__21865;
i__21784 = G__21866;
continue;
} else {
var event = cljs.core.first(seq__21781__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__21868 = cljs.core.next(seq__21781__$1);
var G__21869 = null;
var G__21870 = (0);
var G__21871 = (0);
seq__21781 = G__21868;
chunk__21782 = G__21869;
count__21783 = G__21870;
i__21784 = G__21871;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson048.re_frame.v0v10v6.re_frame.fx.js.map