var _=(t,i,e)=>new Promise((r,s)=>{var l=n=>{try{c(e.next(n))}catch(u){s(u)}},d=n=>{try{c(e.throw(n))}catch(u){s(u)}},c=n=>n.done?r(n.value):Promise.resolve(n.value).then(l,d);c((e=e.apply(t,i)).next())});import{u as v}from"./useWindowSizeFn.c212c501.js";import{p as y}from"./propTypes.13e00d90.js";import{K as x,u as S,_ as R}from"./index.a180eed7.js";import{M as o,y as H,u as a,x as z,bd as C,B as b,z as j,A as F,D as k,G as w,S as B}from"./vendor.5e678e09.js";const D=Symbol();function L(t){return x(t,D,{native:!0})}const m=o(0),p=o(0);function P(){function t(e){m.value=e}function i(e){p.value=e}return{headerHeightRef:m,footerHeightRef:p,setHeaderHeight:t,setFooterHeight:i}}function I(){const t=o(window.innerHeight),i=o(window.innerHeight),e=H(()=>a(t)-a(m)-a(p)||0);v(()=>{t.value=window.innerHeight},100,{immediate:!0});function r(s){return _(this,null,function*(){i.value=s})}L({contentHeight:e,setPageHeight:r,pageHeight:i})}const T=["src"],V=z({props:{frameSrc:y.string.def("")},setup(t){const i=o(!0),e=o(50),r=o(window.innerHeight),s=o(),{headerHeightRef:l}=P(),{prefixCls:d}=S("iframe-page");v(n,150,{immediate:!0});const c=H(()=>({height:`${a(r)}px`}));function n(){const g=a(s);if(!g)return;const f=l.value;e.value=f,r.value=window.innerHeight-f;const h=document.documentElement.clientHeight-f;g.style.height=`${h}px`}function u(){i.value=!1,n()}return(g,f)=>{const h=C("loading");return b((j(),F("div",{class:w(a(d)),style:B(a(c))},[k("iframe",{src:t.frameSrc,class:w(`${a(d)}__main`),ref_key:"frameRef",ref:s,onLoad:u},null,42,T)],6)),[[h,i.value]])}}});var W=R(V,[["__scopeId","data-v-1ecf3bd1"]]),K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{W as F,P as a,K as i,I as u};
