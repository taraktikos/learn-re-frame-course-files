goog.provide('app.nav.views.public$');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.router');
goog.require('app.nav.views.nav_item');
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
app.nav.views.public$.public$ = (function app$nav$views$public$public(){
var active_page = cljs.core.deref((function (){var G__25983 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-page","active-page",370357330)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__25983) : re_frame.core.subscribe.call(null,G__25983));
})());
var nav_items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"recipes","recipes",-325236209),new cljs.core.Keyword(null,"name","name",1843675177),"Recipes",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__25984 = new cljs.core.Keyword(null,"recipes","recipes",-325236209);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__25984) : app.router.path_for.call(null,G__25984));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__25985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"recipes","recipes",-325236209)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25985) : re_frame.core.dispatch.call(null,G__25985));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810),new cljs.core.Keyword(null,"name","name",1843675177),"Chef",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__25986 = new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__25986) : app.router.path_for.call(null,G__25986));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__25987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"become-a-chef","become-a-chef",1113742810)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25987) : re_frame.core.dispatch.call(null,G__25987));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688),new cljs.core.Keyword(null,"name","name",1843675177),"Sign up",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__25988 = new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__25988) : app.router.path_for.call(null,G__25988));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__25989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25989) : re_frame.core.dispatch.call(null,G__25989));
});})(active_page))
], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"log-in","log-in",526627385),new cljs.core.Keyword(null,"name","name",1843675177),"Log in",new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__25990 = new cljs.core.Keyword(null,"log-in","log-in",526627385);
return (app.router.path_for.cljs$core$IFn$_invoke$arity$1 ? app.router.path_for.cljs$core$IFn$_invoke$arity$1(G__25990) : app.router.path_for.call(null,G__25990));
})(),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),((function (active_page){
return (function (){
var G__25991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-nav","set-active-nav",-1041462259),new cljs.core.Keyword(null,"log-in","log-in",526627385)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__25991) : re_frame.core.dispatch.call(null,G__25991));
});})(active_page))
], null)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"py","py",1397985916),(1)], null),(function (){var iter__4523__auto__ = ((function (active_page,nav_items){
return (function app$nav$views$public$public_$_iter__25992(s__25993){
return (new cljs.core.LazySeq(null,((function (active_page,nav_items){
return (function (){
var s__25993__$1 = s__25993;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__25993__$1);
if(temp__5457__auto__){
var s__25993__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25993__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__25993__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__25995 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__25994 = (0);
while(true){
if((i__25994 < size__4522__auto__)){
var map__25996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__25994);
var map__25996__$1 = (((((!((map__25996 == null))))?(((((map__25996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25996):map__25996);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25996__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
cljs.core.chunk_append(b__25995,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null));

var G__26021 = (i__25994 + (1));
i__25994 = G__26021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25995),app$nav$views$public$public_$_iter__25992(cljs.core.chunk_rest(s__25993__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25995),null);
}
} else {
var map__25998 = cljs.core.first(s__25993__$2);
var map__25998__$1 = (((((!((map__25998 == null))))?(((((map__25998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25998):map__25998);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25998__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.nav.views.nav_item.nav_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"href","href",-793805698),href,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),dispatch,new cljs.core.Keyword(null,"active-page","active-page",370357330),active_page], null)], null),app$nav$views$public$public_$_iter__25992(cljs.core.rest(s__25993__$2)));
}
} else {
return null;
}
break;
}
});})(active_page,nav_items))
,null,null));
});})(active_page,nav_items))
;
return iter__4523__auto__(nav_items);
})()], null);
});

//# sourceMappingURL=app.nav.views.public.js.map