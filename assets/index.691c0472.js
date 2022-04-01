import{aX as C,aY as y,aZ as b,a_ as h,_ as v,aa as W}from"./index.ec0491db.js";import{a as j,s as w,u as l,t as $,m as B,y as R,Z as k,z as I,G as P,H as d,R as p,P as x}from"./ex-pkg-@vue.dfd8e273.js";import{P as z}from"./index.79d904a0.js";import{z as E}from"./ex-pkg-element-plus.7627c250.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const M=Symbol("watermark-dom");function S(n=j(document.body)){const a=b(function(){const t=l(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;r({height:e,width:o})}),c=M.toString(),i=w(),u=()=>{const t=l(i);i.value=void 0;const e=l(n);!e||(t&&e.removeChild(t),C(e,a))};function _(t){const e=document.createElement("canvas"),o=300,m=240;Object.assign(e,{width:o,height:m});const s=e.getContext("2d");return s&&(s.rotate(-20*Math.PI/120),s.font="15px Vedana",s.fillStyle="rgba(0, 0, 0, 0.15)",s.textAlign="left",s.textBaseline="middle",s.fillText(t,o/20,m)),e.toDataURL("image/png")}function r(t={}){const e=l(i);!e||(h(t.width)&&(e.style.width=`${t.width}px`),h(t.height)&&(e.style.height=`${t.height}px`),h(t.str)&&(e.style.background=`url(${_(t.str)}) left top repeat`))}const f=t=>{if(l(i))return r({str:t}),c;const e=document.createElement("div");i.value=e,e.id=c,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=l(n);if(!o)return c;const{clientHeight:m,clientWidth:s}=o;return r({str:t,width:s,height:m}),o.appendChild(e),c};function g(t){f(t),y(document.documentElement,a),B()&&$(()=>{u()})}return{setWatermark:g,clear:u}}const H=R({components:{ElButton:E,CollapseContainer:W,PageWrapper:z},setup(){const{setWatermark:n,clear:a}=S();return{setWatermark:n,clear:a}}}),L=x("Create"),N=x("Clear"),T=x("Reset");function V(n,a,c,i,u,_){const r=k("el-button"),f=k("CollapseContainer"),g=k("PageWrapper");return I(),P(g,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[p(f,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[p(r,{type:"primary",class:"mr-2",onClick:a[0]||(a[0]=t=>n.setWatermark("WaterMark Info"))},{default:d(()=>[L]),_:1}),p(r,{type:"danger",class:"mr-2",onClick:n.clear},{default:d(()=>[N]),_:1},8,["onClick"]),p(r,{type:"warning",class:"mr-2",onClick:a[1]||(a[1]=t=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[T]),_:1})]),_:1})]),_:1})}var K=v(H,[["render",V]]);export{K as default};
