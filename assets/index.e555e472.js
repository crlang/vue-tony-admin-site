import{d as M,r as V,c as i,b as e,cF as w,h as u,aD as N,P as k,m as v,cf as A,aE as R}from"./index.a812ffa9.js";import{C as W}from"./index.397c2134.js";import{g as y}from"./tsxHelper.25cd2f92.js";import{E as $}from"./index.fbd5cbb3.js";import{E as q,a as z}from"./index.de2b0d5e.js";const C={schema:{type:Array,default:()=>[]},data:{type:Object},useCollapse:{type:Boolean,default:!0},collapseOptions:{type:Object,default:null}},F={...$,...C};function G(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!k(o)}const H=M({name:"BasicDescription",props:F,emits:["register"],setup(o,{attrs:b,slots:f,emit:D,expose:E}){const p=V(null),{prefixCls:O}=v("basic-description"),r=i(()=>({...o,...e(p)})),h=i(()=>!!e(r).title),P=i(()=>{const{collapseOptions:t={}}=e(r);return{canExpand:!1,...t}}),j=i(()=>{const t={...b,...e(r)},s=Object.keys(C);return w(t,s)});function x(t){p.value={...e(p),...t}}function B(){const{schema:t,data:s}=e(r);return e(t).map(n=>{const{field:c,show:d,isSlot:_,render:g}=n;if(typeof d=="function"&&!d(s))return null;const I=()=>{if(!s)return null;const a=A(s,c);return _?y(f,c,a):typeof g=="function"?g(a,s):a!=null?a:""};return u(z,e(n),{default:()=>I()})}).filter(n=>!!n)}const l=()=>{let t;return u(q,N({class:`${O}`},e(j)),G(t=B())?t:{default:()=>[t]})},S=()=>{const{title:t,useCollapse:s}=e(r);if(!s)return l();const{canExpand:n,helpMessage:c}=e(P);return u(W,{title:t,canExpan:n,helpMessage:c},{default:()=>l(),action:()=>y(f,"action")})},m={setDescProps:x};return E(m),D("register",m),()=>e(h)?S():l()}}),U=R(H);export{U as B};
