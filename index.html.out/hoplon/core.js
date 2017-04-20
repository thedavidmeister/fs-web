// Compiled by ClojureScript 1.9.293 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__8872_SHARP_,p2__8873_SHARP_){
return cljs.core.assoc.call(null,p1__8872_SHARP_,p2__8873_SHARP_.getAttribute("static-id"),p2__8873_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args8874 = [];
var len__7950__auto___8877 = arguments.length;
var i__7951__auto___8878 = (0);
while(true){
if((i__7951__auto___8878 < len__7950__auto___8877)){
args8874.push((arguments[i__7951__auto___8878]));

var G__8879 = (i__7951__auto___8878 + (1));
i__7951__auto___8878 = G__8879;
continue;
} else {
}
break;
}

var G__8876 = args8874.length;
switch (G__8876) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8874.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__8887 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__8888 = cljs.core.seq.call(null,vec__8887);
var first__8889 = cljs.core.first.call(null,seq__8888);
var seq__8888__$1 = cljs.core.next.call(null,seq__8888);
var f = first__8889;
var more = seq__8888__$1;
var vec__8890 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__8890,(0),null);
var f2 = cljs.core.nth.call(null,vec__8890,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("d7fda397338b462985ee7edcb5f4eea8")].join(''),f2], null)))));
});
/**
 * Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__8893_SHARP_){
return cljs.core.zipmap.call(null,p1__8893_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__6842__auto__ = (function (){var and__6830__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__6830__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
var G__8894 = (i + (1));
var G__8895 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__8894;
ret = G__8895;
continue;
}
break;
}
});

/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core.node[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$);
} else {
var m__7506__auto____$1 = (hoplon.core.node["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

(hoplon.core.INode["string"] = true);

(hoplon.core.node["string"] = (function (this$){
return hoplon.core.$text.call(null,this$);
}));
(hoplon.core.INode["number"] = true);

(hoplon.core.node["number"] = (function (this$){
return hoplon.core.$text.call(null,[cljs.core.str(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.map.call(null,hoplon.core.__GT_node,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__8924 = new$__$1;
var vec__8926 = G__8924;
var seq__8927 = cljs.core.seq.call(null,vec__8926);
var first__8928 = cljs.core.first.call(null,seq__8927);
var seq__8927__$1 = cljs.core.next.call(null,seq__8927);
var x = first__8928;
var xs = seq__8927__$1;
var G__8925 = hoplon.core.child_vec.call(null,this$);
var vec__8929 = G__8925;
var seq__8930 = cljs.core.seq.call(null,vec__8929);
var first__8931 = cljs.core.first.call(null,seq__8930);
var seq__8930__$1 = cljs.core.next.call(null,seq__8930);
var k = first__8931;
var ks = seq__8930__$1;
var kids = vec__8929;
var G__8924__$1 = G__8924;
var G__8925__$1 = G__8925;
while(true){
var vec__8932 = G__8924__$1;
var seq__8933 = cljs.core.seq.call(null,vec__8932);
var first__8934 = cljs.core.first.call(null,seq__8933);
var seq__8933__$1 = cljs.core.next.call(null,seq__8933);
var x__$1 = first__8934;
var xs__$1 = seq__8933__$1;
var vec__8935 = G__8925__$1;
var seq__8936 = cljs.core.seq.call(null,vec__8935);
var first__8937 = cljs.core.first.call(null,seq__8936);
var seq__8936__$1 = cljs.core.next.call(null,seq__8936);
var k__$1 = first__8937;
var ks__$1 = seq__8936__$1;
var kids__$1 = vec__8935;
if(cljs.core.truth_((function (){var or__6842__auto__ = x__$1;
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return k__$1;
}
})())){
var G__8938 = xs__$1;
var G__8939 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__8924__$1 = G__8938;
G__8925__$1 = G__8939;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_8940 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_8940;

hoplon.core.do_watch.call(null,kids_8940,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

var kids_8943 = kidfn.call(null,this$__$1);
var i_8944 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_8943));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,x__$1))){
hoplon.core.do_watch.call(null,x__$1,((function (kids_8943,i_8944,x__$1,this$__$1){
return (function (p1__8942_SHARP_,p2__8941_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_8943,cljs.core.assoc,i_8944,p2__8941_SHARP_);
});})(kids_8943,i_8944,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_8943,cljs.core.assoc,i_8944,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8945_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__8945_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__8946_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__8946_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__8947_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__8947_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_8948 = cljs.core.keyword.call(null,k);
var attr_8949 = attrfn.call(null,this$__$1);
var has_QMARK__8950 = (function (){var and__6830__auto__ = attr_8949;
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_8949),kk_8948);
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__8950)){
cljs.core.swap_BANG_.call(null,attr_8949,cljs.core.assoc,kk_8948,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__8951_SHARP_){
return p1__8951_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__8952_SHARP_){
return p1__8952_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__8953_SHARP_){
return p1__8953_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__8954_SHARP_){
return p1__8954_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,kvs);
} else {
var m__7506__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,kvs);
} else {
var m__7506__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,child);
} else {
var m__7506__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,child);
} else {
var m__7506__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,new$,existing);
} else {
var m__7506__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,new$,existing);
} else {
var m__7506__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args8955 = [];
var len__7950__auto___8962 = arguments.length;
var i__7951__auto___8963 = (0);
while(true){
if((i__7951__auto___8963 < len__7950__auto___8962)){
args8955.push((arguments[i__7951__auto___8963]));

var G__8964 = (i__7951__auto___8963 + (1));
i__7951__auto___8963 = G__8964;
continue;
} else {
}
break;
}

var G__8961 = args8955.length;
switch (G__8961) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8955.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq8956){
var G__8957 = cljs.core.first.call(null,seq8956);
var seq8956__$1 = cljs.core.next.call(null,seq8956);
var G__8958 = cljs.core.first.call(null,seq8956__$1);
var seq8956__$2 = cljs.core.next.call(null,seq8956__$1);
var G__8959 = cljs.core.first.call(null,seq8956__$2);
var seq8956__$3 = cljs.core.next.call(null,seq8956__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8957,G__8958,G__8959,seq8956__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args8966 = [];
var len__7950__auto___8973 = arguments.length;
var i__7951__auto___8974 = (0);
while(true){
if((i__7951__auto___8974 < len__7950__auto___8973)){
args8966.push((arguments[i__7951__auto___8974]));

var G__8975 = (i__7951__auto___8974 + (1));
i__7951__auto___8974 = G__8975;
continue;
} else {
}
break;
}

var G__8972 = args8966.length;
switch (G__8972) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args8966.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq8967){
var G__8968 = cljs.core.first.call(null,seq8967);
var seq8967__$1 = cljs.core.next.call(null,seq8967);
var G__8969 = cljs.core.first.call(null,seq8967__$1);
var seq8967__$2 = cljs.core.next.call(null,seq8967__$1);
var G__8970 = cljs.core.first.call(null,seq8967__$2);
var seq8967__$3 = cljs.core.next.call(null,seq8967__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8968,G__8969,G__8970,seq8967__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__7505__auto__ = (((this$ == null))?null:this$);
var m__7506__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__7505__auto__)]);
if(!((m__7506__auto__ == null))){
return m__7506__auto__.call(null,this$,elem,value);
} else {
var m__7506__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__7506__auto____$1 == null))){
return m__7506__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__8980_SHARP_,p2__8979_SHARP_){
return hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__8979_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core.on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core.do_BANG_.call(null,elem,this$__$1,value);

}
}
});
hoplon.core.is_ie8 = cljs.core.not.call(null,goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?(function (p1__8981_SHARP_){
return p1__8981_SHARP_.head;
}):(function (p1__8982_SHARP_){
return p1__8982_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8983_SHARP_){
try{return cljs.core.vector_QMARK_.call(null,p1__8983_SHARP_);
}catch (e8984){if((e8984 instanceof Error)){
var _ = e8984;
return null;
} else {
throw e8984;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not.call(null,hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8985_SHARP_){
try{return cljs.core.seq_QMARK_.call(null,p1__8985_SHARP_);
}catch (e8986){if((e8986 instanceof Error)){
var _ = e8986;
return null;
} else {
throw e8986;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args8987 = [];
var len__7950__auto___8991 = arguments.length;
var i__7951__auto___8992 = (0);
while(true){
if((i__7951__auto___8992 < len__7950__auto___8991)){
args8987.push((arguments[i__7951__auto___8992]));

var G__8993 = (i__7951__auto___8992 + (1));
i__7951__auto___8992 = G__8993;
continue;
} else {
}
break;
}

var G__8989 = args8987.length;
switch (G__8989) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8987.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.call(null,coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8990){if((e8990 instanceof Error)){
var _ = e8990;
return not_found;
} else {
throw e8990;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args8995 = [];
var len__7950__auto___8998 = arguments.length;
var i__7951__auto___8999 = (0);
while(true){
if((i__7951__auto___8999 < len__7950__auto___8998)){
args8995.push((arguments[i__7951__auto___8999]));

var G__9000 = (i__7951__auto___8999 + (1));
i__7951__auto___8999 = G__9000;
continue;
} else {
}
break;
}

var G__8997 = args8995.length;
switch (G__8997) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8995.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,(function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return f.call(null);
} else {
return hoplon.core.timeout.call(null,hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__9018 = args;
var vec__9019 = G__9018;
var seq__9020 = cljs.core.seq.call(null,vec__9019);
var first__9021 = cljs.core.first.call(null,seq__9020);
var seq__9020__$1 = cljs.core.next.call(null,seq__9020);
var arg = first__9021;
var args__$1 = seq__9020__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__9018__$1 = G__9018;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__9022 = G__9018__$1;
var seq__9023 = cljs.core.seq.call(null,vec__9022);
var first__9024 = cljs.core.first.call(null,seq__9023);
var seq__9023__$1 = cljs.core.next.call(null,seq__9023);
var arg__$1 = first__9024;
var args__$2 = seq__9023__$1;
if(cljs.core.not.call(null,arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__9025 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__9018__$1,attr__$2,kids__$2,vec__9022,seq__9023,first__9024,seq__9023__$1,arg__$1,args__$2,attr,kids,G__9018,vec__9019,seq__9020,first__9021,seq__9020__$1,arg,args__$1){
return (function (p1__9002_SHARP_,p2__9003_SHARP_,p3__9004_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__9002_SHARP_,p2__9003_SHARP_,p3__9004_SHARP_);
});})(attr__$1,kids__$1,G__9018__$1,attr__$2,kids__$2,vec__9022,seq__9023,first__9024,seq__9023__$1,arg__$1,args__$2,attr,kids,G__9018,vec__9019,seq__9020,first__9021,seq__9020__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__9026 = kids__$2;
var G__9027 = args__$2;
attr__$1 = G__9025;
kids__$1 = G__9026;
G__9018__$1 = G__9027;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__9028 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__9029 = kids__$2;
var G__9030 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__9028;
kids__$1 = G__9029;
G__9018__$1 = G__9030;
continue;
} else {
if(cljs.core.truth_(hoplon.core.seq_QMARK__STAR_.call(null,arg__$1))){
var G__9031 = attr__$2;
var G__9032 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__9033 = args__$2;
attr__$1 = G__9031;
kids__$1 = G__9032;
G__9018__$1 = G__9033;
continue;
} else {
if(cljs.core.truth_(hoplon.core.vector_QMARK__STAR_.call(null,arg__$1))){
var G__9034 = attr__$2;
var G__9035 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,cljs.core.flatten.call(null,arg__$1));
var G__9036 = args__$2;
attr__$1 = G__9034;
kids__$1 = G__9035;
G__9018__$1 = G__9036;
continue;
} else {
var G__9037 = attr__$2;
var G__9038 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__9039 = args__$2;
attr__$1 = G__9037;
kids__$1 = G__9038;
G__9018__$1 = G__9039;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv.call(null,(function (p1__9041_SHARP_,p2__9040_SHARP_,p3__9042_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__9040_SHARP_,p1__9041_SHARP_,p3__9042_SHARP_);

return p1__9041_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__9043){
var vec__9051 = p__9043;
var seq__9052 = cljs.core.seq.call(null,vec__9051);
var first__9053 = cljs.core.first.call(null,seq__9052);
var seq__9052__$1 = cljs.core.next.call(null,seq__9052);
var child_cell = first__9053;
var _ = seq__9052__$1;
var kids = vec__9051;
var this$__$1 = this$;
var seq__9054_9058 = cljs.core.seq.call(null,cljs.core.flatten.call(null,kids));
var chunk__9055_9059 = null;
var count__9056_9060 = (0);
var i__9057_9061 = (0);
while(true){
if((i__9057_9061 < count__9056_9060)){
var x_9062 = cljs.core._nth.call(null,chunk__9055_9059,i__9057_9061);
var temp__4657__auto___9063 = hoplon.core.__GT_node.call(null,x_9062);
if(cljs.core.truth_(temp__4657__auto___9063)){
var x_9064__$1 = temp__4657__auto___9063;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9064__$1);
} else {
}

var G__9065 = seq__9054_9058;
var G__9066 = chunk__9055_9059;
var G__9067 = count__9056_9060;
var G__9068 = (i__9057_9061 + (1));
seq__9054_9058 = G__9065;
chunk__9055_9059 = G__9066;
count__9056_9060 = G__9067;
i__9057_9061 = G__9068;
continue;
} else {
var temp__4657__auto___9069 = cljs.core.seq.call(null,seq__9054_9058);
if(temp__4657__auto___9069){
var seq__9054_9070__$1 = temp__4657__auto___9069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9054_9070__$1)){
var c__7656__auto___9071 = cljs.core.chunk_first.call(null,seq__9054_9070__$1);
var G__9072 = cljs.core.chunk_rest.call(null,seq__9054_9070__$1);
var G__9073 = c__7656__auto___9071;
var G__9074 = cljs.core.count.call(null,c__7656__auto___9071);
var G__9075 = (0);
seq__9054_9058 = G__9072;
chunk__9055_9059 = G__9073;
count__9056_9060 = G__9074;
i__9057_9061 = G__9075;
continue;
} else {
var x_9076 = cljs.core.first.call(null,seq__9054_9070__$1);
var temp__4657__auto___9077__$1 = hoplon.core.__GT_node.call(null,x_9076);
if(cljs.core.truth_(temp__4657__auto___9077__$1)){
var x_9078__$1 = temp__4657__auto___9077__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_9078__$1);
} else {
}

var G__9079 = cljs.core.next.call(null,seq__9054_9070__$1);
var G__9080 = null;
var G__9081 = (0);
var G__9082 = (0);
seq__9054_9058 = G__9079;
chunk__9055_9059 = G__9080;
count__9056_9060 = G__9081;
i__9057_9061 = G__9082;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__9115__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__9084 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9084,(0),null);
var kids = cljs.core.nth.call(null,vec__9084,(1),null);
var G__9087 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9087,attr);

hoplon.core.add_children_BANG_.call(null,G__9087,kids);

return G__9087;
};
var G__9115 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__9116__i = 0, G__9116__a = new Array(arguments.length -  1);
while (G__9116__i < G__9116__a.length) {G__9116__a[G__9116__i] = arguments[G__9116__i + 1]; ++G__9116__i;}
  args = new cljs.core.IndexedSeq(G__9116__a,0);
} 
return G__9115__delegate.call(this,self__,args);};
G__9115.cljs$lang$maxFixedArity = 1;
G__9115.cljs$lang$applyTo = (function (arglist__9117){
var self__ = cljs.core.first(arglist__9117);
var args = cljs.core.rest(arglist__9117);
return G__9115__delegate(self__,args);
});
G__9115.cljs$core$IFn$_invoke$arity$variadic = G__9115__delegate;
return G__9115;
})()
;

Element.prototype.apply = (function (self__,args9083){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9083)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9118__delegate = function (args){
var this$ = this;
var vec__9088 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__9088,(0),null);
var kids = cljs.core.nth.call(null,vec__9088,(1),null);
var G__9091 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__9091,attr);

hoplon.core.add_children_BANG_.call(null,G__9091,kids);

return G__9091;
};
var G__9118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9119__i = 0, G__9119__a = new Array(arguments.length -  0);
while (G__9119__i < G__9119__a.length) {G__9119__a[G__9119__i] = arguments[G__9119__i + 0]; ++G__9119__i;}
  args = new cljs.core.IndexedSeq(G__9119__a,0);
} 
return G__9118__delegate.call(this,args);};
G__9118.cljs$lang$maxFixedArity = 0;
G__9118.cljs$lang$applyTo = (function (arglist__9120){
var args = cljs.core.seq(arglist__9120);
return G__9118__delegate(args);
});
G__9118.cljs$core$IFn$_invoke$arity$variadic = G__9118__delegate;
return G__9118;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9092 = cljs.core.seq.call(null,kvs);
var chunk__9094 = null;
var count__9095 = (0);
var i__9096 = (0);
while(true){
if((i__9096 < count__9095)){
var vec__9098 = cljs.core._nth.call(null,chunk__9094,i__9096);
var k = cljs.core.nth.call(null,vec__9098,(0),null);
var v = cljs.core.nth.call(null,vec__9098,(1),null);
var k_9121__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9121__$1);
} else {
e.setAttribute(k_9121__$1,((cljs.core._EQ_.call(null,true,v))?k_9121__$1:v));
}

var G__9122 = seq__9092;
var G__9123 = chunk__9094;
var G__9124 = count__9095;
var G__9125 = (i__9096 + (1));
seq__9092 = G__9122;
chunk__9094 = G__9123;
count__9095 = G__9124;
i__9096 = G__9125;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9092);
if(temp__4657__auto__){
var seq__9092__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9092__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9092__$1);
var G__9126 = cljs.core.chunk_rest.call(null,seq__9092__$1);
var G__9127 = c__7656__auto__;
var G__9128 = cljs.core.count.call(null,c__7656__auto__);
var G__9129 = (0);
seq__9092 = G__9126;
chunk__9094 = G__9127;
count__9095 = G__9128;
i__9096 = G__9129;
continue;
} else {
var vec__9101 = cljs.core.first.call(null,seq__9092__$1);
var k = cljs.core.nth.call(null,vec__9101,(0),null);
var v = cljs.core.nth.call(null,vec__9101,(1),null);
var k_9130__$1 = cljs.core.name.call(null,k);
if(cljs.core._EQ_.call(null,false,v)){
e.removeAttribute(k_9130__$1);
} else {
e.setAttribute(k_9130__$1,((cljs.core._EQ_.call(null,true,v))?k_9130__$1:v));
}

var G__9131 = cljs.core.next.call(null,seq__9092__$1);
var G__9132 = null;
var G__9133 = (0);
var G__9134 = (0);
seq__9092 = G__9131;
chunk__9094 = G__9132;
count__9095 = G__9133;
i__9096 = G__9134;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__9104 = cljs.core.seq.call(null,kvs);
var chunk__9105 = null;
var count__9106 = (0);
var i__9107 = (0);
while(true){
if((i__9107 < count__9106)){
var vec__9108 = cljs.core._nth.call(null,chunk__9105,i__9107);
var k = cljs.core.nth.call(null,vec__9108,(0),null);
var v = cljs.core.nth.call(null,vec__9108,(1),null);
goog.object.set(e,"style",cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9135 = seq__9104;
var G__9136 = chunk__9105;
var G__9137 = count__9106;
var G__9138 = (i__9107 + (1));
seq__9104 = G__9135;
chunk__9105 = G__9136;
count__9106 = G__9137;
i__9107 = G__9138;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9104);
if(temp__4657__auto__){
var seq__9104__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9104__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9104__$1);
var G__9139 = cljs.core.chunk_rest.call(null,seq__9104__$1);
var G__9140 = c__7656__auto__;
var G__9141 = cljs.core.count.call(null,c__7656__auto__);
var G__9142 = (0);
seq__9104 = G__9139;
chunk__9105 = G__9140;
count__9106 = G__9141;
i__9107 = G__9142;
continue;
} else {
var vec__9111 = cljs.core.first.call(null,seq__9104__$1);
var k = cljs.core.nth.call(null,vec__9111,(0),null);
var v = cljs.core.nth.call(null,vec__9111,(1),null);
goog.object.set(e,"style",cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));

var G__9143 = cljs.core.next.call(null,seq__9104__$1);
var G__9144 = null;
var G__9145 = (0);
var G__9146 = (0);
seq__9104 = G__9143;
chunk__9105 = G__9144;
count__9106 = G__9145;
i__9107 = G__9146;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e9114){if((e9114 instanceof Error)){
var _ = e9114;
return null;
} else {
throw e9114;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__9153__delegate = function (args){
var vec__9150 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__9150,(0),null);
var kids = cljs.core.nth.call(null,vec__9150,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__9153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9154__i = 0, G__9154__a = new Array(arguments.length -  0);
while (G__9154__i < G__9154__a.length) {G__9154__a[G__9154__i] = arguments[G__9154__i + 0]; ++G__9154__i;}
  args = new cljs.core.IndexedSeq(G__9154__a,0);
} 
return G__9153__delegate.call(this,args);};
G__9153.cljs$lang$maxFixedArity = 0;
G__9153.cljs$lang$applyTo = (function (arglist__9155){
var args = cljs.core.seq(arglist__9155);
return G__9153__delegate(args);
});
G__9153.cljs$core$IFn$_invoke$arity$variadic = G__9153__delegate;
return G__9153;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__9159__delegate = function (rest__9156_SHARP_){
return cljs.core.apply.call(null,hoplon.core.ensure_kids_BANG_.call(null,document.createElement(tag)),rest__9156_SHARP_);
};
var G__9159 = function (var_args){
var rest__9156_SHARP_ = null;
if (arguments.length > 0) {
var G__9160__i = 0, G__9160__a = new Array(arguments.length -  0);
while (G__9160__i < G__9160__a.length) {G__9160__a[G__9160__i] = arguments[G__9160__i + 0]; ++G__9160__i;}
  rest__9156_SHARP_ = new cljs.core.IndexedSeq(G__9160__a,0);
} 
return G__9159__delegate.call(this,rest__9156_SHARP_);};
G__9159.cljs$lang$maxFixedArity = 0;
G__9159.cljs$lang$applyTo = (function (arglist__9161){
var rest__9156_SHARP_ = cljs.core.seq(arglist__9161);
return G__9159__delegate(rest__9156_SHARP_);
});
G__9159.cljs$core$IFn$_invoke$arity$variadic = G__9159__delegate;
return G__9159;
})()
;
if(cljs.core.not.call(null,hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__9162__delegate = function (args){
try{return cljs.core.apply.call(null,mkelem,args);
}catch (e9158){if((e9158 instanceof Error)){
var _ = e9158;
return cljs.core.apply.call(null,hoplon.core.make_elem_ctor.call(null,"div"),args);
} else {
throw e9158;

}
}};
var G__9162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9163__i = 0, G__9163__a = new Array(arguments.length -  0);
while (G__9163__i < G__9163__a.length) {G__9163__a[G__9163__i] = arguments[G__9163__i + 0]; ++G__9163__i;}
  args = new cljs.core.IndexedSeq(G__9163__a,0);
} 
return G__9162__delegate.call(this,args);};
G__9162.cljs$lang$maxFixedArity = 0;
G__9162.cljs$lang$applyTo = (function (arglist__9164){
var args = cljs.core.seq(arglist__9164);
return G__9162__delegate(args);
});
G__9162.cljs$core$IFn$_invoke$arity$variadic = G__9162__delegate;
return G__9162;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9166 = arguments.length;
var i__7951__auto___9167 = (0);
while(true){
if((i__7951__auto___9167 < len__7950__auto___9166)){
args__7957__auto__.push((arguments[i__7951__auto___9167]));

var G__9168 = (i__7951__auto___9167 + (1));
i__7951__auto___9167 = G__9168;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.nth.call(null,hoplon.core.parse_args.call(null,args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq9165){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9165));
});

hoplon.core.body = hoplon.core.make_singleton_ctor.call(null,document.body);
hoplon.core.head = hoplon.core.make_singleton_ctor.call(null,hoplon.core._head_STAR_.call(null,document));
hoplon.core.a = hoplon.core.make_elem_ctor.call(null,"a");
hoplon.core.abbr = hoplon.core.make_elem_ctor.call(null,"abbr");
hoplon.core.address = hoplon.core.make_elem_ctor.call(null,"address");
hoplon.core.area = hoplon.core.make_elem_ctor.call(null,"area");
hoplon.core.article = hoplon.core.make_elem_ctor.call(null,"article");
hoplon.core.aside = hoplon.core.make_elem_ctor.call(null,"aside");
hoplon.core.audio = hoplon.core.make_elem_ctor.call(null,"audio");
hoplon.core.b = hoplon.core.make_elem_ctor.call(null,"b");
hoplon.core.base = hoplon.core.make_elem_ctor.call(null,"base");
hoplon.core.bdi = hoplon.core.make_elem_ctor.call(null,"bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor.call(null,"blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor.call(null,"br");
hoplon.core.button = hoplon.core.make_elem_ctor.call(null,"button");
hoplon.core.canvas = hoplon.core.make_elem_ctor.call(null,"canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor.call(null,"caption");
hoplon.core.cite = hoplon.core.make_elem_ctor.call(null,"cite");
hoplon.core.code = hoplon.core.make_elem_ctor.call(null,"code");
hoplon.core.col = hoplon.core.make_elem_ctor.call(null,"col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor.call(null,"colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor.call(null,"data");
hoplon.core.datalist = hoplon.core.make_elem_ctor.call(null,"datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor.call(null,"dd");
hoplon.core.del = hoplon.core.make_elem_ctor.call(null,"del");
hoplon.core.details = hoplon.core.make_elem_ctor.call(null,"details");
hoplon.core.dfn = hoplon.core.make_elem_ctor.call(null,"dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor.call(null,"dialog");
hoplon.core.div = hoplon.core.make_elem_ctor.call(null,"div");
hoplon.core.dl = hoplon.core.make_elem_ctor.call(null,"dl");
hoplon.core.dt = hoplon.core.make_elem_ctor.call(null,"dt");
hoplon.core.em = hoplon.core.make_elem_ctor.call(null,"em");
hoplon.core.embed = hoplon.core.make_elem_ctor.call(null,"embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor.call(null,"figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor.call(null,"figure");
hoplon.core.footer = hoplon.core.make_elem_ctor.call(null,"footer");
hoplon.core.form = hoplon.core.make_elem_ctor.call(null,"form");
hoplon.core.h1 = hoplon.core.make_elem_ctor.call(null,"h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor.call(null,"h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor.call(null,"h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor.call(null,"h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor.call(null,"h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor.call(null,"h6");
hoplon.core.header = hoplon.core.make_elem_ctor.call(null,"header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor.call(null,"hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor.call(null,"hr");
hoplon.core.i = hoplon.core.make_elem_ctor.call(null,"i");
hoplon.core.iframe = hoplon.core.make_elem_ctor.call(null,"iframe");
hoplon.core.img = hoplon.core.make_elem_ctor.call(null,"img");
hoplon.core.input = hoplon.core.make_elem_ctor.call(null,"input");
hoplon.core.ins = hoplon.core.make_elem_ctor.call(null,"ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor.call(null,"kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor.call(null,"keygen");
hoplon.core.label = hoplon.core.make_elem_ctor.call(null,"label");
hoplon.core.legend = hoplon.core.make_elem_ctor.call(null,"legend");
hoplon.core.li = hoplon.core.make_elem_ctor.call(null,"li");
hoplon.core.link = hoplon.core.make_elem_ctor.call(null,"link");
hoplon.core.main = hoplon.core.make_elem_ctor.call(null,"main");
hoplon.core.html_map = hoplon.core.make_elem_ctor.call(null,"map");
hoplon.core.mark = hoplon.core.make_elem_ctor.call(null,"mark");
hoplon.core.menu = hoplon.core.make_elem_ctor.call(null,"menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor.call(null,"meta");
hoplon.core.meter = hoplon.core.make_elem_ctor.call(null,"meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor.call(null,"multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor.call(null,"nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor.call(null,"noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor.call(null,"noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor.call(null,"object");
hoplon.core.ol = hoplon.core.make_elem_ctor.call(null,"ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor.call(null,"optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor.call(null,"option");
hoplon.core.output = hoplon.core.make_elem_ctor.call(null,"output");
hoplon.core.p = hoplon.core.make_elem_ctor.call(null,"p");
hoplon.core.param = hoplon.core.make_elem_ctor.call(null,"param");
hoplon.core.picture = hoplon.core.make_elem_ctor.call(null,"picture");
hoplon.core.pre = hoplon.core.make_elem_ctor.call(null,"pre");
hoplon.core.progress = hoplon.core.make_elem_ctor.call(null,"progress");
hoplon.core.q = hoplon.core.make_elem_ctor.call(null,"q");
hoplon.core.rp = hoplon.core.make_elem_ctor.call(null,"rp");
hoplon.core.rt = hoplon.core.make_elem_ctor.call(null,"rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor.call(null,"rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor.call(null,"ruby");
hoplon.core.s = hoplon.core.make_elem_ctor.call(null,"s");
hoplon.core.samp = hoplon.core.make_elem_ctor.call(null,"samp");
hoplon.core.script = hoplon.core.make_elem_ctor.call(null,"script");
hoplon.core.section = hoplon.core.make_elem_ctor.call(null,"section");
hoplon.core.select = hoplon.core.make_elem_ctor.call(null,"select");
hoplon.core.shadow = hoplon.core.make_elem_ctor.call(null,"shadow");
hoplon.core.small = hoplon.core.make_elem_ctor.call(null,"small");
hoplon.core.source = hoplon.core.make_elem_ctor.call(null,"source");
hoplon.core.span = hoplon.core.make_elem_ctor.call(null,"span");
hoplon.core.strong = hoplon.core.make_elem_ctor.call(null,"strong");
hoplon.core.style = hoplon.core.make_elem_ctor.call(null,"style");
hoplon.core.sub = hoplon.core.make_elem_ctor.call(null,"sub");
hoplon.core.summary = hoplon.core.make_elem_ctor.call(null,"summary");
hoplon.core.sup = hoplon.core.make_elem_ctor.call(null,"sup");
hoplon.core.table = hoplon.core.make_elem_ctor.call(null,"table");
hoplon.core.tbody = hoplon.core.make_elem_ctor.call(null,"tbody");
hoplon.core.td = hoplon.core.make_elem_ctor.call(null,"td");
hoplon.core.template = hoplon.core.make_elem_ctor.call(null,"template");
hoplon.core.textarea = hoplon.core.make_elem_ctor.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor.call(null,"tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor.call(null,"th");
hoplon.core.thead = hoplon.core.make_elem_ctor.call(null,"thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor.call(null,"time");
hoplon.core.title = hoplon.core.make_elem_ctor.call(null,"title");
hoplon.core.tr = hoplon.core.make_elem_ctor.call(null,"tr");
hoplon.core.track = hoplon.core.make_elem_ctor.call(null,"track");
hoplon.core.u = hoplon.core.make_elem_ctor.call(null,"u");
hoplon.core.ul = hoplon.core.make_elem_ctor.call(null,"ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor.call(null,"var");
hoplon.core.video = hoplon.core.make_elem_ctor.call(null,"video");
hoplon.core.wbr = hoplon.core.make_elem_ctor.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__9169_SHARP_){
return document.createTextNode(p1__9169_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__9170_SHARP_){
return document.createComment(p1__9170_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__9171_SHARP_){
var e = p1__9171_SHARP_.target;
if(cljs.core.truth_((function (){var or__6842__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__9171_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7774__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,key,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7770__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7771__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7772__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7773__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7774__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__,hierarchy__7774__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__7774__auto__,method_table__7770__auto__,prefer_table__7771__auto__,method_cache__7772__auto__,cached_hierarchy__7773__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__9183,G__9184){
return G__9183.call(null,G__9184);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__9172_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__9187,G__9186,G__9185){
return G__9185.call(null,G__9186,G__9187);
});})(on_deck,items_seq))
).call(null,p1__9172_SHARP_,items_seq,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__9173_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__9173_SHARP_));
cljs.core.swap_BANG_.call(null,p1__9173_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__9188 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__9189 = null;
var count__9190 = (0);
var i__9191 = (0);
while(true){
if((i__9191 < count__9190)){
var i = cljs.core._nth.call(null,chunk__9189,i__9191);
var e_9192 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9192);

var G__9193 = seq__9188;
var G__9194 = chunk__9189;
var G__9195 = count__9190;
var G__9196 = (i__9191 + (1));
seq__9188 = G__9193;
chunk__9189 = G__9194;
count__9190 = G__9195;
i__9191 = G__9196;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9188);
if(temp__4657__auto__){
var seq__9188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9188__$1)){
var c__7656__auto__ = cljs.core.chunk_first.call(null,seq__9188__$1);
var G__9197 = cljs.core.chunk_rest.call(null,seq__9188__$1);
var G__9198 = c__7656__auto__;
var G__9199 = cljs.core.count.call(null,c__7656__auto__);
var G__9200 = (0);
seq__9188 = G__9197;
chunk__9189 = G__9198;
count__9190 = G__9199;
i__9191 = G__9200;
continue;
} else {
var i = cljs.core.first.call(null,seq__9188__$1);
var e_9201 = (function (){var or__6842__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_9201);

var G__9202 = cljs.core.next.call(null,seq__9188__$1);
var G__9203 = null;
var G__9204 = (0);
var G__9205 = (0);
seq__9188 = G__9202;
chunk__9189 = G__9203;
count__9190 = G__9204;
i__9191 = G__9205;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7760__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7760__auto__)){
var e_9206 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_9206);

var G__9207 = (_ + (1));
_ = G__9207;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7957__auto__ = [];
var len__7950__auto___9216 = arguments.length;
var i__7951__auto___9217 = (0);
while(true){
if((i__7951__auto___9217 < len__7950__auto___9216)){
args__7957__auto__.push((arguments[i__7951__auto___9217]));

var G__9218 = (i__7951__auto___9217 + (1));
i__7951__auto___9217 = G__9218;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__9209){
var vec__9210 = p__9209;
var default$ = cljs.core.nth.call(null,vec__9210,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__9210,default$){
return (function (G__9213,G__9215,G__9214){
var or__6842__auto__ = (function (){var and__6830__auto__ = G__9213.call(null,G__9214);
if(cljs.core.truth_(and__6830__auto__)){
return G__9214;
} else {
return and__6830__auto__;
}
})();
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return G__9215;
}
});})(c,vec__9210,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__9210,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__9210,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq9208){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9208));
});


//# sourceMappingURL=core.js.map