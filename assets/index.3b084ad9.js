import{C as k}from"./index.2d8c6aac.js";import{u as y}from"./domUtils.0dce6f1a.js";import{r as w,a as W}from"./index.00e0b22a.js";import{cS as v,r as x,b as i,al as b,U as $,_ as B,d as I,z as R,e as g,o as S,j as z,i as d,h as u,m as C}from"./index.61be89a1.js";import"./index.63927a8f.js";import"./tsxHelper.e74009f7.js";import"./index.0526f740.js";import"./index.91f8c4ba.js";import"./index.f6236697.js";const E=Symbol("watermark-dom");function M(n=x(document.body)){const r=y(function(){const e=i(n);if(!e)return;const{clientHeight:t,clientWidth:o}=e;s({height:t,width:o})}),c=E.toString(),l=v(),f=()=>{const e=i(l);l.value=void 0;const t=i(n);!t||(e&&t.removeChild(e),w(t,r))};function _(e){const t=document.createElement("canvas"),o=300,m=240;Object.assign(t,{width:o,height:m});const a=t.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(e,o/20,m)),t.toDataURL("image/png")}function s(e={}){const t=i(l);!t||(e!=null&&e.width&&(t.style.width=`${e.width}px`),e!=null&&e.height&&(t.style.height=`${e.height}px`),e!=null&&e.str&&(t.style.background=`url(${_(e.str)}) left top repeat`))}const h=e=>{if(i(l))return s({str:e}),c;const t=document.createElement("div");l.value=t,t.id=c,t.style.pointerEvents="none",t.style.top="0px",t.style.left="0px",t.style.position="absolute",t.style.zIndex="100000";const o=i(n);if(!o)return c;const{clientHeight:m,clientWidth:a}=o;return s({str:e,width:a,height:m}),o.appendChild(t),c};function p(e){h(e),W(document.documentElement,r),$()&&b(()=>{f()})}return{setWatermark:p,clear:f}}const L=I({components:{ElButton:R,CollapseContainer:k},setup(){const{setWatermark:n,clear:r}=M();return{setWatermark:n,clear:r}}}),N=C("Create"),P=C("Clear"),T=C("Reset");function U(n,r,c,l,f,_){const s=g("el-button"),h=g("CollapseContainer"),p=g("PageWrapper");return S(),z(p,{title:"\u6C34\u5370\u793A\u4F8B"},{default:d(()=>[u(h,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:d(()=>[u(s,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=e=>n.setWatermark("WaterMark Info"))},{default:d(()=>[N]),_:1}),u(s,{type:"danger",class:"mr-2",onClick:n.clear},{default:d(()=>[P]),_:1},8,["onClick"]),u(s,{type:"warning",class:"mr-2",onClick:r[1]||(r[1]=e=>n.setWatermark("WaterMark Info New"))},{default:d(()=>[T]),_:1})]),_:1})]),_:1})}var J=B(L,[["render",U]]);export{J as default};
