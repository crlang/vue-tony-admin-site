var _=(t,i,e)=>new Promise((r,s)=>{var d=n=>{try{c(e.next(n))}catch(u){s(u)}},f=n=>{try{c(e.throw(n))}catch(u){s(u)}},c=n=>n.done?r(n.value):Promise.resolve(n.value).then(d,f);c((e=e.apply(t,i)).next())});import{u as v}from"./useWindowSizeFn.732207ab.js";import{p as y}from"./propTypes.6bd760c6.js";import{K as x,u as S,_ as R}from"./index.16f9732e.js";import{a as o,l as H,u as a,y as z,a2 as C,I as b,z as j,A as k,K as F,L as w,Y as L}from"./ex-pkg-@vue.dfd8e273.js";const B=Symbol();function D(t){return x(t,B,{native:!0})}const m=o(0),p=o(0);function P(){function t(e){m.value=e}function i(e){p.value=e}return{headerHeightRef:m,footerHeightRef:p,setHeaderHeight:t,setFooterHeight:i}}function M(){const t=o(window.innerHeight),i=o(window.innerHeight),e=H(()=>a(t)-a(m)-a(p)||0);v(()=>{t.value=window.innerHeight},100,{immediate:!0});function r(s){return _(this,null,function*(){i.value=s})}D({contentHeight:e,setPageHeight:r,pageHeight:i})}const T=["src"],V=z({props:{frameSrc:y.string.def("")},setup(t){const i=o(!0),e=o(50),r=o(window.innerHeight),s=o(),{headerHeightRef:d}=P(),{prefixCls:f}=S("iframe-page");v(n,150,{immediate:!0});const c=H(()=>({height:`${a(r)}px`}));function n(){const g=a(s);if(!g)return;const l=d.value;e.value=l,r.value=window.innerHeight-l;const h=document.documentElement.clientHeight-l;g.style.height=`${h}px`}function u(){i.value=!1,n()}return(g,l)=>{const h=C("loading");return b((j(),k("div",{class:w(a(f)),style:L(a(c))},[F("iframe",{src:t.frameSrc,class:w(`${a(f)}__main`),ref_key:"frameRef",ref:s,onLoad:u},null,42,T)],6)),[[h,i.value]])}}});var W=R(V,[["__scopeId","data-v-3a022d43"]]),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{W as F,P as a,N as i,M as u};
