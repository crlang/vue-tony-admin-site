var $=Object.defineProperty,I=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var g=(e,s,o)=>s in e?$(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,C=(e,s)=>{for(var o in s||(s={}))V.call(s,o)&&g(e,o,s[o]);if(k)for(var o of k(s))J.call(s,o)&&g(e,o,s[o]);return e},b=(e,s)=>I(e,M(s));import{N as P,aD as j,C as D,d as F,af as L,F as q,c as A,o as c,f as G,g as i,I as h,n as t,b as n,j as r,i as u,h as y,a2 as v,bJ as S,$ as _,k as B,J as E,as as H,L as K}from"./index.b263d89e.js";const O=P({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:j,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Q={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},R={name:"ElTag"},U=F(b(C({},R),{props:O,emits:Q,setup(e,{emit:s}){const o=e,z=L(),l=q("tag"),p=A(()=>{const{type:a,hit:m,effect:T,closable:w,round:N}=o;return[l.b(),l.is("closable",w),l.m(a),l.m(z.value),l.m(T),l.is("hit",m),l.is("round",N)]}),d=a=>{s("close",a)},f=a=>{s("click",a)};return(a,m)=>a.disableTransitions?(c(),G("span",{key:0,class:t(n(p)),style:E({backgroundColor:a.color}),onClick:f},[i("span",{class:t(n(l).e("content"))},[h(a.$slots,"default")],2),a.closable?(c(),r(n(_),{key:0,class:t(n(l).e("close")),onClick:S(d,["stop"])},{default:u(()=>[y(n(v))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)):(c(),r(H,{key:1,name:`${n(l).namespace.value}-zoom-in-center`,appear:""},{default:u(()=>[i("span",{class:t(n(p)),style:E({backgroundColor:a.color}),onClick:f},[i("span",{class:t(n(l).e("content"))},[h(a.$slots,"default")],2),a.closable?(c(),r(n(_),{key:0,class:t(n(l).e("close")),onClick:S(d,["stop"])},{default:u(()=>[y(n(v))]),_:1},8,["class","onClick"])):B("v-if",!0)],6)]),_:3},8,["name"]))}}));var W=D(U,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const Z=K(W);export{Z as E,O as t};
