import{_ as u,u as m}from"./index.a180eed7.js";import{b as f}from"./index.1e7b31d0.js";import{x as _,br as b,bs as g,y as v,X as i,z as t,A as r,D as y,F as j,$ as C,a2 as S,a7 as h,ao as V,Y as x,a0 as B,G as E}from"./vendor.5e678e09.js";import"./index.1f4c4186.js";import"./useAttrs.f893c8ed.js";import"./index.7865af84.js";import"./index.0377b249.js";import"./useWindowSizeFn.c212c501.js";import"./propTypes.13e00d90.js";import"./clickOutside.d6da8543.js";import"./lock.5cda1607.js";const k=_({name:"SelectItem",components:{ElSelect:b,ElOption:g},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:a}=m("setting-select-item"),s=v(()=>e.def?{modelValue:e.def,defaultValue:e.initValue||e.def}:{});function n(l){e.event&&f(e.event,l)}return{prefixCls:a,handleChange:n,getBindValue:s}}});function $(e,a,s,n,l,N){const d=i("ElOption"),p=i("ElSelect");return t(),r("div",{class:E(e.prefixCls)},[y("span",null,j(e.title),1),C(p,B(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small"}),{default:S(()=>[(t(!0),r(h,null,V(e.options,(o,c)=>(t(),x(d,{label:o.label,value:o.value,key:c},null,8,["label","value"]))),128))]),_:1},16,["class","onChange","disabled"])],2)}var T=u(k,[["render",$],["__scopeId","data-v-6e2650cf"]]);export{T as default};
