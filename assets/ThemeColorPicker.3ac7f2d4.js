import{_ as l,u as p}from"./index.dea57c76.js";import{b as d}from"./index.4fe3df76.js";import{x as f,bB as u,X as _,z as r,A as o,a7 as C,ao as k,G as a,S as v,$ as b}from"./vendor.6c1ff918.js";import"./index.2c44dcb3.js";import"./useAttrs.1cff00fd.js";import"./index.a0b3636e.js";import"./index.3bf74d71.js";import"./useWindowSizeFn.b326ae88.js";import"./propTypes.13e00d90.js";import"./lock.6fb40cb7.js";const h=f({name:"ThemeColorPicker",components:{Check:u},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:t}=p("setting-theme-picker");function i(s){e.event&&d(e.event,s)}return{prefixCls:t,getItemCls:s=>[`${t}__item`,{[`${t}__item--active`]:e.def===s}],handleClick:i}}}),j=["onClick"];function y(e,t,i,c,s,g){const m=_("Check");return r(),o("div",{class:a(e.prefixCls)},[(r(!0),o(C,null,k(e.colorList||[],n=>(r(),o("span",{key:n,onClick:x=>e.handleClick(n),class:a(e.getItemCls(n)),style:v({background:n})},[b(m)],14,j))),128))],2)}var N=l(h,[["render",y]]);export{N as default};
