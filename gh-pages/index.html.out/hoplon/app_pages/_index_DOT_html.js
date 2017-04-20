// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('scrollto.lib');
goog.require('hoplon.jquery');
goog.require('javelin.core');
goog.require('hoplon.core');
hoplon.core.html.call(null,hoplon.core.body.call(null,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"5000px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null),(function (){var xs = cljs.core.range.call(null,(100));
var ys = cljs.core.shuffle.call(null,xs);
var i = javelin.core.cell.call(null,(0));
return hoplon.core.loop_tpl_STAR_.call(null,xs,((function (xs,ys,i){
return (function (item__8756__auto__){
var vec__9332 = javelin.core.cell_map.call(null,cljs.core.identity,javelin.core.formula.call(null,((function (xs,ys,i){
return (function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
});})(xs,ys,i))
).call(null,item__8756__auto__));
var x = cljs.core.nth.call(null,vec__9332,(0),null);
var el = hoplon.core.img.call(null,x,new cljs.core.Keyword(null,"src","src",-1651076051),"/gif.gif",new cljs.core.Keyword(null,"click","click",1912301393),((function (vec__9332,x,xs,ys,i){
return (function (){
return cljs.core.reset_BANG_.call(null,i,cljs.core.get.call(null,ys,cljs.core.deref.call(null,x),(0)));
});})(vec__9332,x,xs,ys,i))
,new cljs.core.Keyword(null,"css","css",1135045163),javelin.core.formula.call(null,((function (vec__9332,x,xs,ys,i){
return (function (){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"664px",new cljs.core.Keyword(null,"height","height",1025178622),"473px",new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"float","float",-1732389368),"left",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
});})(vec__9332,x,xs,ys,i))
).call(null));
hoplon.core.do_watch.call(null,javelin.core.formula.call(null,((function (el,vec__9332,x,xs,ys,i){
return (function (G__9337,G__9335,G__9336){
return G__9335.call(null,G__9336,G__9337);
});})(el,vec__9332,x,xs,ys,i))
).call(null,x,cljs.core._EQ_,i),((function (el,vec__9332,x,xs,ys,i){
return (function (_,n){
if(cljs.core.truth_(n)){
return jQuery.scrollTo(el,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null)));
} else {
return null;
}
});})(el,vec__9332,x,xs,ys,i))
);

return el;
});})(xs,ys,i))
);
})()));

//# sourceMappingURL=_index_DOT_html.js.map