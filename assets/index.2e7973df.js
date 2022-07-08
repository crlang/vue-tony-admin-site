import{d as C,D as F,cE as O,ap as A,F as K,c3 as k,C as W,e as L,o as n,f as p,g as v,am as b,bm as D,j as _,h as z,cF as P,M as T,af as U,c as q,n as $,I,m as V,t as B,k as G,L as H,ac as J}from"./index.b263d89e.js";const E="elDescriptions";var R=C({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String},type:{type:String}},setup(){return{descriptions:F(E,{})}},render(){var e,m,S,f,g,h;const s=O(this.cell),{border:r,direction:t}=this.descriptions,a=t==="vertical",i=((S=(m=(e=this.cell)==null?void 0:e.children)==null?void 0:m.label)==null?void 0:S.call(m))||s.label,l=(h=(g=(f=this.cell)==null?void 0:f.children)==null?void 0:g.default)==null?void 0:h.call(g),c=s.span,w=s.align?`is-${s.align}`:"",d=s.labelAlign?`is-${s.labelAlign}`:w,y=s.className,N=s.labelClassName,u={width:A(s.width),minWidth:A(s.minWidth)},o=K("descriptions");switch(this.type){case"label":return k(this.tag,{style:u,class:[o.e("cell"),o.e("label"),o.is("bordered-label",r),o.is("vertical-label",a),d,N],colSpan:a?c:1},i);case"content":return k(this.tag,{style:u,class:[o.e("cell"),o.e("content"),o.is("bordered-content",r),o.is("vertical-content",a),w,y],colSpan:a?c:c*2-1},l);default:return k("td",{style:u,class:[o.e("cell"),w],colSpan:c},[k("span",{class:[o.e("label"),N]},i),k("span",{class:[o.e("content"),y]},l)])}}});const Q=C({name:"ElDescriptionsRow",components:{[R.name]:R},props:{row:{type:Array}},setup(){return{descriptions:F(E,{})}}}),X={key:1};function Y(e,m,S,f,g,h){const s=L("el-descriptions-cell");return e.descriptions.direction==="vertical"?(n(),p(b,{key:0},[v("tr",null,[(n(!0),p(b,null,D(e.row,(r,t)=>(n(),_(s,{key:`tr1-${t}`,cell:r,tag:"th",type:"label"},null,8,["cell"]))),128))]),v("tr",null,[(n(!0),p(b,null,D(e.row,(r,t)=>(n(),_(s,{key:`tr2-${t}`,cell:r,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(n(),p("tr",X,[(n(!0),p(b,null,D(e.row,(r,t)=>(n(),p(b,{key:`tr3-${t}`},[e.descriptions.border?(n(),p(b,{key:0},[z(s,{cell:r,tag:"td",type:"label"},null,8,["cell"]),z(s,{cell:r,tag:"td",type:"content"},null,8,["cell"])],64)):(n(),_(s,{key:1,cell:r,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}var j=W(Q,[["render",Y],["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);const Z=C({name:"ElDescriptions",components:{[j.name]:j},props:{border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,default:"horizontal"},size:{type:String,validator:P},title:{type:String,default:""},extra:{type:String,default:""}},setup(e,{slots:m}){T(E,e);const S=U(),f=K("descriptions"),g=q(()=>[f.b(),f.m(S.value)]),h=t=>{const a=Array.isArray(t)?t:[t],i=[];return a.forEach(l=>{Array.isArray(l.children)?i.push(...h(l.children)):i.push(l)}),i},s=(t,a,i,l=!1)=>(t.props||(t.props={}),a>i&&(t.props.span=i),l&&(t.props.span=a),t);return{descriptionKls:g,getRows:()=>{var t;const a=h((t=m.default)==null?void 0:t.call(m)).filter(d=>{var y;return((y=d==null?void 0:d.type)==null?void 0:y.name)==="ElDescriptionsItem"}),i=[];let l=[],c=e.column,w=0;return a.forEach((d,y)=>{var N;const u=((N=d.props)==null?void 0:N.span)||1;if(y<a.length-1&&(w+=u>c?c:u),y===a.length-1){const o=e.column-w%e.column;l.push(s(d,o,c,!0)),i.push(l);return}u<c?(c-=u,l.push(d)):(l.push(s(d,u,c)),i.push(l),c=e.column,l=[])}),i},ns:f}}});function x(e,m,S,f,g,h){const s=L("el-descriptions-row");return n(),p("div",{class:$(e.descriptionKls)},[e.title||e.extra||e.$slots.title||e.$slots.extra?(n(),p("div",{key:0,class:$(e.ns.e("header"))},[v("div",{class:$(e.ns.e("title"))},[I(e.$slots,"title",{},()=>[V(B(e.title),1)])],2),v("div",{class:$(e.ns.e("extra"))},[I(e.$slots,"extra",{},()=>[V(B(e.extra),1)])],2)],2)):G("v-if",!0),v("div",{class:$(e.ns.e("body"))},[v("table",{class:$([e.ns.e("table"),e.ns.is("bordered",e.border)])},[v("tbody",null,[(n(!0),p(b,null,D(e.getRows(),(r,t)=>(n(),_(s,{key:t,row:r},null,8,["row"]))),128))])],2)],2)],2)}var ee=W(Z,[["render",x],["__file","/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/index.vue"]]),M=C({name:"ElDescriptionsItem",props:{label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}});const se=H(ee,{DescriptionsItem:M}),le=J(M);export{le as E,se as a};
