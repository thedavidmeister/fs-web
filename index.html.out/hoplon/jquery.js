// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('cljsjs.jquery');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args9221 = [];
var len__7950__auto___9240 = arguments.length;
var i__7951__auto___9241 = (0);
while(true){
if((i__7951__auto___9241 < len__7950__auto___9240)){
args9221.push((arguments[i__7951__auto___9241]));

var G__9242 = (i__7951__auto___9241 + (1));
i__7951__auto___9241 = G__9242;
continue;
} else {
}
break;
}

var G__9227 = args9221.length;
switch (G__9227) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9221.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9228 = cljs.core.seq.call(null,kvs);
var chunk__9230 = null;
var count__9231 = (0);
var i__9232 = (0);
while(true){
if((i__9232 < count__9231)){
var vec__9234 = cljs.core._nth.call(null,chunk__9230,i__9232);
var k = cljs.core.nth.call(null,vec__9234,(0),null);
var v = cljs.core.nth.call(null,vec__9234,(1),null);
var k_9244__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9244__$1);
} else {
e.attr(k_9244__$1,((cljs.core._EQ_.call(null,true,v))?k_9244__$1:v));
}

var G__9245 = seq__9228;
var G__9246 = chunk__9230;
var G__9247 = count__9231;
var G__9248 = (i__9232 + (1));
seq__9228 = G__9245;
chunk__9230 = G__9246;
count__9231 = G__9247;
i__9232 = G__9248;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9228);
if(temp__4657__auto__){
var seq__9228__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9228__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9228__$1);
var G__9249 = cljs.core.chunk_rest.call(null,seq__9228__$1);
var G__9250 = c__7656__auto__;
var G__9251 = cljs.core.count.call(null,c__7656__auto__);
var G__9252 = (0);
seq__9228 = G__9249;
chunk__9230 = G__9250;
count__9231 = G__9251;
i__9232 = G__9252;
continue;
} else {
var vec__9237 = cljs.core.first.call(null,seq__9228__$1);
var k = cljs.core.nth.call(null,vec__9237,(0),null);
var v = cljs.core.nth.call(null,vec__9237,(1),null);
var k_9253__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttr(k_9253__$1);
} else {
e.attr(k_9253__$1,((cljs.core._EQ_.call(null,true,v))?k_9253__$1:v));
}

var G__9254 = cljs.core.next.call(null,seq__9228__$1);
var G__9255 = null;
var G__9256 = (0);
var G__9257 = (0);
seq__9228 = G__9254;
chunk__9230 = G__9255;
count__9231 = G__9256;
i__9232 = G__9257;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq9222){
var G__9223 = cljs.core.first.call(null,seq9222);
var seq9222__$1 = cljs.core.next.call(null,seq9222);
var G__9224 = cljs.core.first.call(null,seq9222__$1);
var seq9222__$2 = cljs.core.next.call(null,seq9222__$1);
var G__9225 = cljs.core.first.call(null,seq9222__$2);
var seq9222__$3 = cljs.core.next.call(null,seq9222__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9223,G__9224,G__9225,seq9222__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args9258 = [];
var len__7950__auto___9275 = arguments.length;
var i__7951__auto___9276 = (0);
while(true){
if((i__7951__auto___9276 < len__7950__auto___9275)){
args9258.push((arguments[i__7951__auto___9276]));

var G__9277 = (i__7951__auto___9276 + (1));
i__7951__auto___9276 = G__9277;
continue;
} else {
}
break;
}

var G__9264 = args9258.length;
switch (G__9264) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args9258.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__9265 = cljs.core.seq.call(null,kvs);
var chunk__9266 = null;
var count__9267 = (0);
var i__9268 = (0);
while(true){
if((i__9268 < count__9267)){
var vec__9269 = cljs.core._nth.call(null,chunk__9266,i__9268);
var k = cljs.core.nth.call(null,vec__9269,(0),null);
var v = cljs.core.nth.call(null,vec__9269,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9279 = seq__9265;
var G__9280 = chunk__9266;
var G__9281 = count__9267;
var G__9282 = (i__9268 + (1));
seq__9265 = G__9279;
chunk__9266 = G__9280;
count__9267 = G__9281;
i__9268 = G__9282;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9265);
if(temp__4657__auto__){
var seq__9265__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9265__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9265__$1);
var G__9283 = cljs.core.chunk_rest.call(null,seq__9265__$1);
var G__9284 = c__7656__auto__;
var G__9285 = cljs.core.count.call(null,c__7656__auto__);
var G__9286 = (0);
seq__9265 = G__9283;
chunk__9266 = G__9284;
count__9267 = G__9285;
i__9268 = G__9286;
continue;
} else {
var vec__9272 = cljs.core.first.call(null,seq__9265__$1);
var k = cljs.core.nth.call(null,vec__9272,(0),null);
var v = cljs.core.nth.call(null,vec__9272,(1),null);
e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9287 = cljs.core.next.call(null,seq__9265__$1);
var G__9288 = null;
var G__9289 = (0);
var G__9290 = (0);
seq__9265 = G__9287;
chunk__9266 = G__9288;
count__9267 = G__9289;
i__9268 = G__9290;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq9259){
var G__9260 = cljs.core.first.call(null,seq9259);
var seq9259__$1 = cljs.core.next.call(null,seq9259);
var G__9261 = cljs.core.first.call(null,seq9259__$1);
var seq9259__$2 = cljs.core.next.call(null,seq9259__$1);
var G__9262 = cljs.core.first.call(null,seq9259__$2);
var seq9259__$3 = cljs.core.next.call(null,seq9259__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9260,G__9261,G__9262,seq9259__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args9291 = [];
var len__7950__auto___9294 = arguments.length;
var i__7951__auto___9295 = (0);
while(true){
if((i__7951__auto___9295 < len__7950__auto___9294)){
args9291.push((arguments[i__7951__auto___9295]));

var G__9296 = (i__7951__auto___9295 + (1));
i__7951__auto___9295 = G__9296;
continue;
} else {
}
break;
}

var G__9293 = args9291.length;
switch (G__9293) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9291.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.call(null,v__$1,hoplon.jquery.text_val_BANG_.call(null,e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args9298 = [];
var len__7950__auto___9301 = arguments.length;
var i__7951__auto___9302 = (0);
while(true){
if((i__7951__auto___9302 < len__7950__auto___9301)){
args9298.push((arguments[i__7951__auto___9302]));

var G__9303 = (i__7951__auto___9302 + (1));
i__7951__auto___9302 = G__9303;
continue;
} else {
}
break;
}

var G__9300 = args9298.length;
switch (G__9300) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9298.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$.call(null,v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("attr","*","attr/*",-1283077225),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("prop","*","prop/*",-1283942139),(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("data","*","data/*",-1283013312),(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name.call(null,key),val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"value","value",305978217),(function() { 
var G__9305__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__9305 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__9306__i = 0, G__9306__a = new Array(arguments.length -  2);
while (G__9306__i < G__9306__a.length) {G__9306__a[G__9306__i] = arguments[G__9306__i + 2]; ++G__9306__i;}
  args = new cljs.core.IndexedSeq(G__9306__a,0);
} 
return G__9305__delegate.call(this,elem,_,args);};
G__9305.cljs$lang$maxFixedArity = 2;
G__9305.cljs$lang$applyTo = (function (arglist__9307){
var elem = cljs.core.first(arglist__9307);
arglist__9307 = cljs.core.next(arglist__9307);
var _ = cljs.core.first(arglist__9307);
var args = cljs.core.rest(arglist__9307);
return G__9305__delegate(elem,_,args);
});
G__9305.cljs$core$IFn$_invoke$arity$variadic = G__9305__delegate;
return G__9305;
})()
);
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"class","class",-2030961996),(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class.call(null,kvs);
var seq__9308 = cljs.core.seq.call(null,clmap);
var chunk__9309 = null;
var count__9310 = (0);
var i__9311 = (0);
while(true){
if((i__9311 < count__9310)){
var vec__9312 = cljs.core._nth.call(null,chunk__9309,i__9311);
var c = cljs.core.nth.call(null,vec__9312,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9312,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9318 = seq__9308;
var G__9319 = chunk__9309;
var G__9320 = count__9310;
var G__9321 = (i__9311 + (1));
seq__9308 = G__9318;
chunk__9309 = G__9319;
count__9310 = G__9320;
i__9311 = G__9321;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9308);
if(temp__4657__auto__){
var seq__9308__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9308__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9308__$1);
var G__9322 = cljs.core.chunk_rest.call(null,seq__9308__$1);
var G__9323 = c__7656__auto__;
var G__9324 = cljs.core.count.call(null,c__7656__auto__);
var G__9325 = (0);
seq__9308 = G__9322;
chunk__9309 = G__9323;
count__9310 = G__9324;
i__9311 = G__9325;
continue;
} else {
var vec__9315 = cljs.core.first.call(null,seq__9308__$1);
var c = cljs.core.nth.call(null,vec__9315,(0),null);
var p_QMARK_ = cljs.core.nth.call(null,vec__9315,(1),null);
elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));

var G__9326 = cljs.core.next.call(null,seq__9308__$1);
var G__9327 = null;
var G__9328 = (0);
var G__9329 = (0);
seq__9308 = G__9326;
chunk__9309 = G__9327;
count__9310 = G__9328;
i__9311 = G__9329;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",1291842030),(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",968641513),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",-1468421852),(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus","focus",234677911),(function (elem,_,v){
return setTimeout((function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
}),(0));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"select","select",1147833503),(function (elem,_,___$1){
return jQuery(elem).select();
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",1107982934),(function (elem,_,v){
if(cljs.core.truth_(v)){
hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",234677911),v);

return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",1147833503),v);
} else {
return null;
}
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"html","html",-998796897),(function (elem,_,v){
return jQuery(elem).html(v);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",-34957602),(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",-1143661921),elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return jQuery(this$__$1.target).val();
});
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
}));

//# sourceMappingURL=jquery.js.map