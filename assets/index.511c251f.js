var K=Object.defineProperty,M=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var j=(e,n,t)=>n in e?K(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))W.call(n,t)&&j(e,t,n[t]);if(x)for(var t of x(n))X.call(n,t)&&j(e,t,n[t]);return e},L=(e,n)=>M(e,Q(n));var q=(e,n,t)=>new Promise((d,i)=>{var c=r=>{try{o(t.next(r))}catch(u){i(u)}},a=r=>{try{o(t.throw(r))}catch(u){i(u)}},o=r=>r.done?d(r.value):Promise.resolve(r.value).then(c,a);o((t=t.apply(e,n)).next())});import{d as Y,y as Z,bS as ee,r as h,c as $,b as l,cA as oe,w as A,R as U,_ as te,l as ne,U as I,e as B,bT as re,o as f,j as O,i as v,g as ae,f as k,h as N,n as C,k as g,m as S,t as F,am as z,I as w,s as se,aB as R,q as G,cC as T,az as H,cD as le,bl as P,aA as ie,aC as de}from"./index.b263d89e.js";import{S as ue}from"./index.b816e23f.js";import{B as ce}from"./index.b8d50620.js";import{g as pe}from"./index.1c7c0cd7.js";import{E as fe}from"./index.151e0821.js";import{E as me}from"./index.53cddd5b.js";import{i as ge}from"./isEqual.2e3b6ef4.js";const J={modelValue:{type:Boolean},title:{type:String},isDetail:Boolean,loading:Boolean,loadingText:String,closeFn:{type:Function,default:null},showFooter:Boolean,showConfirmBtn:{type:Boolean,default:!0},confirmOptions:{type:Object,default:{btnText:"\u786E\u8BA4",type:"primary"}},showCancelBtn:{type:Boolean,default:!0},cancelOptions:{type:Object,default:{btnText:"\u53D6\u6D88",type:"default"}}},we=p(L(p({},pe),{appendToBody:{type:Boolean,default:!0},modelValue:{type:Boolean}}),J);const he=Y({name:"BasicDrawer",components:{ElDrawer:fe,ElButton:Z,ScrollContainer:ue,BasicTitle:ce,SvgIcon:ee},directives:{loading:me.directive},inheritAttrs:!1,props:we,emits:["update:modelValue","visible-change","confirm","cancel","register"],setup(e,{attrs:n,emit:t}){const d=h(!1),i=h(null),{prefixCls:c}=ne("basic-drawer"),a=I(),o=$(()=>{const s=p(p({},e),l(i));return s.customClass=`${c} ${(s==null?void 0:s.customClass)||""} ${c}-${a==null?void 0:a.uid}`,s}),r=$(()=>{const s=p(p({},n),l(o)),b=Object.keys(J);return oe(s,b)}),u=$(()=>{var s;return!!((s=l(o))!=null&&s.loading)});function y(s){i.value=p(p({},l(i)),s),Reflect.has(s,"modelValue")&&(d.value=!!s.modelValue)}function E(){return q(this,null,function*(){const{closeFn:s}=l(o);if(typeof s=="function"){const b=yield s();d.value=!b;return}else d.value=!1;t("cancel")})}function m(){t("confirm")}const V={setDrawerProps:y,emitVisible:void 0};return a&&t("register",V),A(()=>e.modelValue,s=>{d.value=!!s},{deep:!0}),A(()=>d.value,s=>{U(()=>{var b;t("visible-change",s),t("update:modelValue",s),a&&((b=V.emitVisible)==null||b.call(V,s,a.uid))})}),{handleClose:E,prefixCls:c,visibleRef:d,getProps:o,getLoading:u,getBindValues:r,handleOk:m}}});function ye(e,n,t,d,i,c){const a=B("SvgIcon"),o=B("BasicTitle"),r=B("ScrollContainer"),u=B("ElButton"),y=B("ElDrawer"),E=re("loading");return f(),O(y,R({onClose:n[1]||(n[1]=m=>e.handleClose())},e.getBindValues,{modelValue:e.visibleRef,"onUpdate:modelValue":n[2]||(n[2]=m=>e.visibleRef=m)}),{header:v(()=>[ae("div",{class:C(`${e.prefixCls}-header`)},[e.isDetail?(f(),k("span",{key:0,class:C(`${e.prefixCls}-header__back`),onClick:n[0]||(n[0]=m=>e.handleClose())},[N(a,{name:"arrow-right",size:16,rotate:"180deg"})],2)):g("",!0),N(o,{class:C(`${e.prefixCls}-header__title`)},{default:v(()=>[e.title?(f(),k(z,{key:0},[S(F(e.title||""),1)],64)):w(e.$slots,"header",{key:1})]),_:3},8,["class"]),e.$slots.toolbar?(f(),k("span",{key:1,class:C(`${e.prefixCls}-header__toolbar`)},[w(e.$slots,"toolbar")],2)):g("",!0)],2)]),default:v(()=>{var m;return[se((f(),O(r,{class:C(`${e.prefixCls}-body`),"element-loading-text":e.loadingText},{default:v(()=>[w(e.$slots,"default")]),_:3},8,["class","element-loading-text"])),[[E,e.getLoading]]),e.showFooter?(f(),k("div",{key:0,class:C(`${e.prefixCls}-footer`)},[e.$slots.footer?w(e.$slots,"footer",{key:0}):(f(),k(z,{key:1},[e.$slots.prependFooter?w(e.$slots,"prependFooter",{key:0}):g("",!0),e.showCancelBtn?(f(),O(u,R({key:1,onClick:e.handleClose},e.cancelOptions),{default:v(()=>[S(F(e.cancelOptions.btnText||"Cancel"),1)]),_:1},16,["onClick"])):g("",!0),e.$slots.centerFooter?w(e.$slots,"centerFooter",{key:2}):g("",!0),e.showConfirmBtn?(f(),O(u,R({key:3,onClick:e.handleOk},e.confirmOptions,{loading:(m=e.getProps.confirmOptions)==null?void 0:m.loading}),{default:v(()=>[S(F(e.confirmOptions.btnText||"Ok"),1)]),_:1},16,["onClick","loading"])):g("",!0),e.$slots.appendFooter?w(e.$slots,"appendFooter",{key:4}):g("",!0)],64))],2)):g("",!0)]}),_:3},16,["modelValue"])}var be=te(he,[["render",ye]]);const D=G({}),_=G({});function Pe(){I()||T("useDrawer() can only be used inside setup() or functional components!");const e=h(null),n=h(!1),t=h("");function d(a,o){H(()=>{e.value=null,n.value=null,D[l(t)]=null}),!(l(n)&&le()&&a===l(e))&&(t.value=o,e.value=a,n.value=!0,a.emitVisible=(r,u)=>{_[u]=r})}const i=()=>{const a=l(e);return a||T("The drawer instance has not been obtained, please make sure the instance is rendered when performing the instance operation!"),a},c={setDrawerProps:a=>{var o;(o=i())==null||o.setDrawerProps(a)},getVisible:$(()=>_[~~l(t)]),openDrawer:(a=!0,o,r=!0)=>{var y;if((y=i())==null||y.setDrawerProps({modelValue:a}),!o)return;if(r){D[l(t)]=null,D[l(t)]=P(o);return}ge(P(D[l(t)]),P(o))||(D[l(t)]=P(o))},closeDrawer:()=>{var a;(a=i())==null||a.setDrawerProps({modelValue:!1})}};return[d,c]}const Te=e=>{const n=h(null),t=I(),d=h("");t||T("useDrawerInner() can only be used inside setup() or functional components!");const i=()=>{const o=l(n);if(!o){T("useDrawerInner instance is undefined!");return}return o},c=(o,r)=>{H(()=>{n.value=null}),d.value=r,n.value=o,t==null||t.emit("register",o,r)},a={getVisible:$(()=>_[~~l(d)]),changeLoading:(o=!0)=>{var r;(r=i())==null||r.setDrawerProps({loading:o})},changeConfirmLoading:(o=!0)=>{var r;(r=i())==null||r.setDrawerProps({confirmOptions:{loading:o}})},closeDrawer:()=>{var o;(o=i())==null||o.setDrawerProps({modelValue:!1})},setDrawerProps:o=>{var r;(r=i())==null||r.setDrawerProps(o)}};return ie(()=>{const o=D[l(d)];!o||!e||typeof e!="function"||U(()=>{e(o)})}),[c,a]},Ee=de(be);export{Ee as B,Te as a,Pe as u};
