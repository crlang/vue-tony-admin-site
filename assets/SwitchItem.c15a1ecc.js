import{_ as r,u as d,e as c}from"./index.c38c7de5.js";import{b as l}from"./index.f32fe603.js";import{x as p,bQ as m,y as u,Y as f,z as g,A as v,D as _,F as h,a0 as b,a1 as j,G as y}from"./vendor.041d4bc7.js";import"./index.f2934f3f.js";import"./useAttrs.374c949f.js";import"./index.c73a1ef7.js";import"./index.e706a9f5.js";import"./useWindowSizeFn.b4a2eb84.js";import"./useMenuSetting.8bd75ac6.js";import"./clickOutside.2de8acc0.js";import"./lock.94ee0fce.js";const S=p({name:"SwitchItem",components:{ElSwitch:m},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=d("setting-switch-item"),{t:n}=c(),s=u(()=>e.def?{modelValue:e.def}:{});function a(i){e.event&&l(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:s}}});function x(e,t,n,s,a,i){const o=f("ElSwitch");return g(),v("div",{class:y(e.prefixCls)},[_("span",null,h(e.title),1),b(o,j(e.getBindValue,{onChange:e.handleChange,"inline-prompt":"",disabled:e.disabled,"active-text":e.t("layout.setting.on"),"inactive-text":e.t("layout.setting.off")}),null,16,["onChange","disabled","active-text","inactive-text"])],2)}var A=r(S,[["render",x],["__scopeId","data-v-ebd31246"]]);export{A as default};
