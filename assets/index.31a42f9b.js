var V=Object.defineProperty,W=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var O=(t,s,n)=>s in t?V(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,o=(t,s)=>{for(var n in s||(s={}))R.call(s,n)&&O(t,n,s[n]);if(b)for(var n of b(s))$.call(s,n)&&O(t,n,s[n]);return t},x=(t,s)=>W(t,N(s));import{a9 as B,u as H,i as P,w as U}from"./index.b3c9ad7f.js";import{C as q}from"./index.4cd5987a.js";import{g as z}from"./tsxHelper.88158ea5.js";import{u as F}from"./useAttrs.e78ff19a.js";import{U as G,V as J}from"./ex-pkg-element-plus.1726aa79.js";import{g as K}from"./ex-pkg-vendor.002cab22.js";import{y as L,a as Q,l as c,u as e,R as u,k as T,D as X}from"./ex-pkg-@vue.dfd8e273.js";const Y=x(o({},B),{useCollapse:{type:Boolean,default:!0},collapseOptions:{type:Object,default:null},schema:{type:Array,default:()=>[]},data:{type:Object}});function Z(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!T(t)}var tt=L({name:"Description",props:Y,emits:["register"],setup(t,{slots:s,emit:n}){const f=Q(null),{prefixCls:E}=H("basic-description"),v=F(),d=c(()=>o(o({},t),e(f))),p=c(()=>x(o({},e(d)),{title:""})),_=c(()=>!!e(d).title),k=c(()=>o({canExpand:!1},e(p).collapseOptions)),w=c(()=>o(o({},e(v)),e(p)));function A(r){f.value=o(o({},e(f)),r)}function I(){const{schema:r,data:g}=e(p);return e(r).map(a=>{const{field:S,show:j,render:D,minWidth:h}=a;if(j&&P(j)&&!j(g))return null;const y=()=>{var C;const i=(C=e(p))==null?void 0:C.data;if(!i)return null;const l=K(i,S);return P(D)?D(l,i):l!=null?l:""};return u(G,e(a),{default:()=>{if(!h)return y();const i={minWidth:`${h}px`};return u("div",{style:i},[y()])}})}).filter(a=>!!a)}const m=()=>{let r;return u(J,X({class:`${E}`},e(w)),Z(r=I())?r:{default:()=>[r]})},M=()=>{if(!t.useCollapse)return m();const{canExpand:r,helpMessage:g}=e(k),{title:a}=e(d);return u(q,{title:a,canExpan:r,helpMessage:g},{default:()=>m(),action:()=>z(s,"action")})};return n("register",{setDescProps:A}),()=>e(_)?M():m()}});const lt=U(tt);export{lt as D};
