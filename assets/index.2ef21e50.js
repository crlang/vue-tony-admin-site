<<<<<<<< HEAD:assets/index.d26671cc.js
var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var O=(t,n,e)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,r=(t,n)=>{for(var e in n||(n={}))A.call(n,e)&&O(t,e,n[e]);if(y)for(var e of y(n))N.call(n,e)&&O(t,e,n[e]);return t};import{d as k,r as R,c as u,b as o,cA as W,h as m,aB as $,cB as q,l as z,b0 as G,aC as H}from"./index.12e2b36d.js";import{C as J}from"./index.62d37c24.js";import{g as h}from"./tsxHelper.a491e40f.js";import{E as K}from"./index.69a95a3c.js";import{E as L,a as Q}from"./index.da731fe2.js";const D={schema:{type:Array,default:()=>[]},data:{type:Object},useCollapse:{type:Boolean,default:!0},collapseOptions:{type:Object,default:null}},T=r(r({},K),D);function U(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!q(t)}var X=k({name:"BasicDescription",props:T,emits:["register"],setup(t,{attrs:n,slots:e,emit:E,expose:B}){const f=R(null),{prefixCls:j}=z("basic-description"),i=u(()=>r(r({},t),o(f))),P=u(()=>!!o(i).title),x=u(()=>{const{collapseOptions:s={}}=o(i);return r({canExpand:!1},s)}),S=u(()=>{const s=r(r({},n),o(i)),a=Object.keys(D);return W(s,a)});function _(s){f.value=r(r({},o(f)),s)}function I(){const{schema:s,data:a}=o(i);return o(s).map(c=>{const{field:l,show:C,isSlot:V,render:b}=c;if(typeof C=="function"&&!C(a))return null;const v=()=>{if(!a)return null;const p=G(a,l);return V?h(e,l,p):typeof b=="function"?b(p,a):p!=null?p:""};return m(Q,o(c),{default:()=>v()})}).filter(c=>!!c)}const d=()=>{let s;return m(L,$({class:`${j}`},o(S)),U(s=I())?s:{default:()=>[s]})},M=()=>{const{title:s,useCollapse:a}=o(i);if(!a)return d();const{canExpand:c,helpMessage:l}=o(x);return m(J,{title:s,canExpan:c,helpMessage:l},{default:()=>d(),action:()=>h(e,"action")})},g={setDescProps:_};return B(g),E("register",g),()=>o(P)?M():d()}});const nt=H(X);export{nt as B};
========
var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var O=(t,n,e)=>n in t?w(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,r=(t,n)=>{for(var e in n||(n={}))A.call(n,e)&&O(t,e,n[e]);if(y)for(var e of y(n))N.call(n,e)&&O(t,e,n[e]);return t};import{d as k,r as z,c as u,b as o,cz as R,h as m,aB as W,cA as $,l as q,b0 as G,aC as H}from"./index.61be89a1.js";import{C as J}from"./index.2d8c6aac.js";import{g as h}from"./tsxHelper.e74009f7.js";import{E as K}from"./index.8337b38c.js";import{E as L,a as Q}from"./index.414c2bd6.js";const D={schema:{type:Array,default:()=>[]},data:{type:Object},useCollapse:{type:Boolean,default:!0},collapseOptions:{type:Object,default:null}},T=r(r({},K),D);function U(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!$(t)}var X=k({name:"BasicDescription",props:T,emits:["register"],setup(t,{attrs:n,slots:e,emit:E,expose:j}){const f=z(null),{prefixCls:B}=q("basic-description"),i=u(()=>r(r({},t),o(f))),P=u(()=>!!o(i).title),x=u(()=>{const{collapseOptions:s={}}=o(i);return r({canExpand:!1},s)}),S=u(()=>{const s=r(r({},n),o(i)),a=Object.keys(D);return R(s,a)});function _(s){f.value=r(r({},o(f)),s)}function I(){const{schema:s,data:a}=o(i);return o(s).map(c=>{const{field:l,show:C,isSlot:V,render:b}=c;if(typeof C=="function"&&!C(a))return null;const v=()=>{if(!a)return null;const p=G(a,l);return V?h(e,l,p):typeof b=="function"?b(p,a):p!=null?p:""};return m(Q,o(c),{default:()=>v()})}).filter(c=>!!c)}const d=()=>{let s;return m(L,W({class:`${B}`},o(S)),U(s=I())?s:{default:()=>[s]})},M=()=>{const{title:s,useCollapse:a}=o(i);if(!a)return d();const{canExpand:c,helpMessage:l}=o(x);return m(J,{title:s,canExpan:c,helpMessage:l},{default:()=>d(),action:()=>h(e,"action")})},g={setDescProps:_};return j(g),E("register",g),()=>o(P)?M():d()}});const nt=H(X);export{nt as B};
>>>>>>>> 8639c16ee1bdf131236610745881512f6ca8b8ca:assets/index.2ef21e50.js
