import{y as k,a as d,Z as o,z as l,G as r,H as t,R as i,A as E,a3 as h,F as y,M as R,I as p,J as _,K as m,P as X}from"./ex-pkg-@vue-feb543c0.js";import{P as g}from"./index-103ae9c6.js";import{F as j,S as B,a as F,b as Y,c as w,d as C,e as A,f as V,g as P,h as $,i as L,E as N,j as W}from"./index-8ceb82bc.js";import{_ as D}from"./index-26bedde3.js";import{X as H,Y as I,u as z}from"./ex-pkg-element-plus-f609432a.js";import"./tsxHelper-ab68d96a.js";import"./ex-pkg-vendor-bb3f8859.js";import"./ex-pkg-mockjs-ec7a233b.js";const G=k({components:{ElSelect:H,ElOption:I,ElButton:z,PageWrapper:g,FadeTransition:j,ScaleTransition:B,SlideYTransition:F,ScrollYTransition:Y,SlideYReverseTransition:w,ScrollYReverseTransition:C,SlideXTransition:A,ScrollXTransition:V,SlideXReverseTransition:P,ScrollXReverseTransition:$,ScaleRotateTransition:L,ExpandXTransition:N,ExpandTransition:W},setup(){const e=d("Fade"),a=d(!0),c=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map(n=>({label:n,value:n,key:n}));function u(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:c,value:e,start:u,show:a}}}),J=X("start"),K={class:"box"},M={class:"box my-4"};function O(e,a,v,c,u,n){const S=o("el-option"),f=o("el-select"),T=o("el-button"),b=o("ScaleTransition"),x=o("PageWrapper");return l(),r(x,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[i(f,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=s=>e.value=s),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},{default:t(()=>[(l(!0),E(y,null,h(e.options,s=>(l(),r(S,{key:s.key,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),i(T,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[J]),_:1},8,["onClick"]),(l(),r(R(`${e.value}Transition`),null,{default:t(()=>[p(m("div",K,null,512),[[_,e.show]])]),_:1})),i(b,null,{default:t(()=>[p(m("div",M,"\u5355\u4E2A\u793A\u4F8B",512),[[_,e.show]])]),_:1})]),_:1})}var te=D(G,[["render",O],["__scopeId","data-v-4d6faa58"]]);export{te as default};
