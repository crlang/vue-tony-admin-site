import{r as f,aA as w,d as I,Y as $,_ as C,l as z,b5 as y,e as E,o as u,j as g,i as S,f as h,I as k,aB as T,cO as x,aC as L}from"./index.b263d89e.js";import{E as O}from"./index.2540fdd7.js";function B({target:e,root:i,onIntersect:a,rootMargin:n="0px",threshold:s=.1}){let o=()=>{};const t=f(null),r=w(()=>{o(),t.value=new IntersectionObserver(a,{root:i?i.value:null,rootMargin:n,threshold:s});const l=e.value;l&&t.value.observe(l),o=()=>{t.value&&(t.value.disconnect(),e.value&&t.value.unobserve(e.value))}});return{observer:t,stop:()=>{o(),r()}}}const N=I({name:"LazyContainer",components:{ElSkeleton:O},inheritAttrs:!1,props:{timeout:{type:Number},viewport:{type:typeof window!="undefined"?window.HTMLElement:Object,default:()=>null},threshold:{type:String,default:"0px"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},tag:{type:String,default:"div"},maxWaitingTime:{type:Number,default:120},transitionName:{type:String,default:"lazy-container"}},emits:["init"],setup(e,{emit:i}){const a=f(),n=f(!1),s=f(!1),{prefixCls:o}=z("lazy-container");function t(){const{timeout:c}=e;c&&setTimeout(()=>{r()},c)}function r(){s.value=!0,setTimeout(()=>{n.value||(n.value=!0,i("init"))},e.maxWaitingTime||120)}function l(){const{timeout:c,direction:_,threshold:p}=e;if(c)return;let d="0px";switch(_){case"vertical":d=`${p} 0px`;break;case"horizontal":d=`0px ${p}`;break}try{const{stop:v,observer:b}=B({rootMargin:d,target:y(a.value,"$el"),onIntersect:m=>{(m[0].isIntersecting||m[0].intersectionRatio)&&(r(),b&&v())},root:y(e,"viewport")})}catch(v){r()}}return $(()=>{t(),l()}),{prefixCls:o,elRef:a,isInit:n,loading:s}}}),R={key:"component"},M={key:"skeleton"};function j(e,i,a,n,s,o){const t=E("ElSkeleton");return u(),g(x,T({class:e.prefixCls},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:S(()=>[e.isInit?(u(),h("div",R,[k(e.$slots,"default",{loading:e.loading})])):(u(),h("div",M,[e.$slots.skeleton?k(e.$slots,"skeleton",{key:0}):(u(),g(t,{key:1}))]))]),_:3},16,["class","name","tag"])}var A=C(N,[["render",j]]);const H=L(A);export{H as L};
