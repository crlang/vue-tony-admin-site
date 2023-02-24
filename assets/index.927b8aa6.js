var M=Object.defineProperty,V=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=Math.pow,T=(t,o,e)=>o in t?M(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,E=(t,o)=>{for(var e in o||(o={}))H.call(o,e)&&T(t,e,o[e]);if(h)for(var e of h(o))R.call(o,e)&&T(t,e,o[e]);return t},w=(t,o)=>V(t,q(o));import{d as D,F as U,cS as B,r as z,c as f,cy as Q,Y as j,Q as J,o as l,j as _,i as L,f as N,I as W,h as k,b as s,en as X,n as C,$ as Y,J as G,bI as K,k as g,as as Z,C as tt,bq as et,L as ot,_ as nt,bM as I,bp as st,eo as rt,bQ as $,e as u,am as at}from"./index.61be89a1.js";import{c as F,u as it}from"./index.e14673d0.js";import ct from"./SessionTimeoutLogin.fdaf73e1.js";import"./lock.63bbbced.js";import"./index.ee8c97d5.js";import"./index.21f47639.js";import"./index.e5719e3f.js";import"./index.91f8c4ba.js";import"./useTimeout.0d66b90d.js";import"./_baseUniq.8c6df5cb.js";import"./_baseIsEqual.3f9a7929.js";import"./index.a6a2ff86.js";import"./dropdown.7e7b7d81.js";import"./index.9574a6b4.js";import"./index.00e0b22a.js";import"./index.c00c0978.js";import"./useWindowSizeFn.a3ba0925.js";import"./index.37ecb140.js";import"./index.5e1ef5ac.js";import"./drawer.0f38de7e.js";import"./use-dialog.8207f305.js";import"./index.3df10ae2.js";import"./refs.a78f8491.js";import"./index.4e3bc3e4.js";import"./Login.2083121c.js";import"./LoginForm.c6b3801d.js";import"./useLogin.25f7dae0.js";import"./index.1c463f4e.js";import"./form-item.3a95dedf.js";import"./isEqual.755d4a14.js";import"./index.e035b73c.js";import"./row.2741a82e.js";import"./index.bdf9eec6.js";import"./ForgetPasswordForm.3b098dfd.js";import"./index.f7f1a62a.js";import"./RegisterForm.440f8889.js";import"./index.12f428c0.js";import"./MobileForm.c58d09ca.js";const P=t=>y(t,3),pt=t=>t<.5?P(t*2)/2:1-P((1-t)*2)/2,lt={visibilityHeight:{type:Number,default:200},target:{type:String,default:""},right:{type:Number,default:40},bottom:{type:Number,default:40}},mt={click:t=>t instanceof MouseEvent},ut=["onClick"],_t={name:"ElBacktop"},gt=D(w(E({},_t),{props:lt,emits:mt,setup(t,{emit:o}){const e=t,m="ElBacktop",i=U("backtop"),n=B(),a=B(),c=z(!1),p=f(()=>({right:`${e.right}px`,bottom:`${e.bottom}px`})),d=()=>{if(!n.value)return;const r=Date.now(),v=n.value.scrollTop,S=()=>{if(!n.value)return;const b=(Date.now()-r)/500;b<1?(n.value.scrollTop=v*(1-pt(b)),requestAnimationFrame(S)):n.value.scrollTop=0};requestAnimationFrame(S)},O=()=>{n.value&&(c.value=n.value.scrollTop>=e.visibilityHeight)},x=r=>{d(),o("click",r)},A=et(O,300);return Q(a,"scroll",A),j(()=>{var r;a.value=document,n.value=document.documentElement,e.target&&(n.value=(r=document.querySelector(e.target))!=null?r:void 0,n.value||J(m,`target is not existed: ${e.target}`),a.value=n.value)}),(r,v)=>(l(),_(Z,{name:`${s(i).namespace.value}-fade-in`},{default:L(()=>[c.value?(l(),N("div",{key:0,style:G(s(p)),class:C(s(i).b()),onClick:K(x,["stop"])},[W(r.$slots,"default",{},()=>[k(s(Y),{class:C(s(i).e("icon"))},{default:L(()=>[k(s(X))]),_:1},8,["class"])])],14,ut)):g("v-if",!0)]),_:3},8,["name"]))}}));var dt=tt(gt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);const ft=ot(dt),kt=D({name:"LayoutFeatures",components:{ElBacktop:ft,LayoutLockPage:F(()=>I(()=>import("./index.b14937c8.js"),["assets/index.b14937c8.js","assets/index.61be89a1.js","assets/LockPage.9733b4f9.js","assets/lock.63bbbced.js","assets/header.7c507bcf.js","assets/index.91f8c4ba.js"])),SettingDrawer:F(()=>I(()=>import("./index.83975300.js").then(function(t){return t.i}),["assets/index.83975300.js","assets/index.61be89a1.js","assets/index.f07a7338.js","assets/index.9574a6b4.js","assets/index.00e0b22a.js","assets/index.0526f740.js","assets/tsxHelper.e74009f7.js","assets/index.91f8c4ba.js","assets/index.8337b38c.js","assets/row.2741a82e.js","assets/drawer.0f38de7e.js","assets/card.dd13a1ef.js","assets/index.7fce1749.js","assets/index.88f08dee.js","assets/index.3df10ae2.js","assets/isEqual.755d4a14.js","assets/_baseIsEqual.3f9a7929.js","assets/form-item.3a95dedf.js","assets/dropdown.7e7b7d81.js","assets/index.5e1ef5ac.js","assets/use-dialog.8207f305.js","assets/index.37ecb140.js","assets/index.e14673d0.js","assets/lock.63bbbced.js","assets/index.ee8c97d5.js","assets/index.21f47639.js","assets/index.e5719e3f.js","assets/useTimeout.0d66b90d.js","assets/_baseUniq.8c6df5cb.js","assets/index.a6a2ff86.js","assets/index.c00c0978.js","assets/useWindowSizeFn.a3ba0925.js","assets/refs.a78f8491.js","assets/index.4e3bc3e4.js","assets/index.8a2b5e67.js"])),SessionTimeoutLogin:ct},setup(){const{getUseOpenBackTop:t,getShowSettingButton:o,getSettingButtonPosition:e,getFullContent:m}=st(),i=rt(),{getShowHeader:n}=it(),a=f(()=>i.getSessionTimeout),c=f(()=>{if(!s(o))return!1;const p=s(e);return p===$.AUTO?!s(n)||s(m):p===$.FIXED});return{getUseOpenBackTop:t,getIsFixedSettingDrawer:c,getIsSessionTimeout:a}}});function vt(t,o,e,m,i,n){const a=u("LayoutLockPage"),c=u("ElBacktop"),p=u("SettingDrawer"),d=u("SessionTimeoutLogin");return l(),N(at,null,[k(a),t.getUseOpenBackTop?(l(),_(c,{key:0})):g("",!0),t.getIsFixedSettingDrawer?(l(),_(p,{key:1})):g("",!0),t.getIsSessionTimeout?(l(),_(d,{key:2})):g("",!0)],64)}var se=nt(kt,[["render",vt]]);export{se as default};
