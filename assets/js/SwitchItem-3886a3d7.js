import{_ as p,u as r,e as d}from"./index-c76c27a8.js";import{b as m}from"./index-eecfdc26.js";import{a6 as c}from"./ex-pkg-element-plus-387a9e67.js";import{y as l,l as u,Z as f,z as j,A as g,K as x,Q as v,R as b,D as _,L as h}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-vendor-ad21d406.js";import"./ex-pkg-mockjs-d5ed3ada.js";import"./ex-pkg-@element-plus-8be47ecc.js";import"./ex-pkg-@vueuse-7c1f2694.js";import"./ex-pkg-@iconify-9ec765d0.js";import"./ex-pkg-@popperjs-d61e97fc.js";import"./index-fd0c91ad.js";import"./index-5b1d7164.js";import"./tsxHelper-6b2f4741.js";import"./index-c26878d4.js";import"./index-b5c2dac5.js";import"./useTimeout-a639f925.js";import"./useAttrs-fe96f36e.js";import"./index-6f12a559.js";import"./index-a4e3f2c2.js";import"./useWindowSizeFn-e2bb9137.js";import"./propTypes-7529eeb4.js";import"./lock-b8e33340.js";const k=l({name:"SwitchItem",components:{ElSwitch:c},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=r("setting-switch-item"),{t:s}=d(),i=u(()=>e.def?{modelValue:e.def}:{});function n(o){e.event&&m(e.event,o)}return{prefixCls:t,t:s,handleChange:n,getBindValue:i}}});function y(e,t,s,i,n,o){const a=f("ElSwitch");return j(),g("div",{class:h(e.prefixCls)},[x("span",null,v(e.title),1),b(a,_(e.getBindValue,{onChange:e.handleChange,"inline-prompt":"",disabled:e.disabled,"active-text":e.t("layout.setting.on"),"inactive-text":e.t("layout.setting.off")}),null,16,["onChange","disabled","active-text","inactive-text"])],2)}var q=p(k,[["render",y],["__scopeId","data-v-ebd31246"]]);export{q as default};
