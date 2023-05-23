var F=Object.defineProperty;var C=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var V=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,$=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&V(t,a,e[a]);if(C)for(var a of C(e))w.call(e,a)&&V(t,a,e[a]);return t};import{_ as B,I,K as P}from"./index-795cdaa0.js";import{aG as x,aH as M,n as A}from"./elementui-66980f2a.js";import{E as S,r as h,f as R,u as W,b as q,w as z,o as D,p as b,q as H,Q as J,Z as K,ac as i,I as Q,J as l,S as s,P as Z}from"./vue-d691a816.js";import{C as j,a as L}from"./index-8a197278.js";const O={startVal:{type:Number,default:0},endVal:{type:Number,default:100},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimal:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},U=S({name:"CountTo",props:O,emits:["started","finished"],setup(t,{emit:e,expose:a}){const n=h(t.startVal),f=h(!1);let d=x(n);const u=R(()=>m(W(d)));function o(){p(),n.value=t.endVal}function p(){d=x(n,$({disabled:f,duration:t.duration,onFinished:()=>e("finished"),onStarted:()=>e("started")},t.useEasing?{transition:M[t.transition]}:{}))}function m(r){if(!r&&r!==0)return"";const{decimals:E,decimal:G,separator:_,suffix:N,prefix:T}=t;r=Number(r).toFixed(E),r+="";const y=r.split(".");let c=y[0];const v=y.length>1?G+y[1]:"",g=/(\d+)(\d{3})/;if(_&&typeof _!="number")for(;g.test(c);)c=c.replace(g,`$1${_}$2`);return T+c+v+N}return q(()=>{n.value=t.startVal}),z([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&o()}),D(()=>{t.autoplay&&o()}),a({start:o}),{value:u,start:o}}});function X(t,e,a,n,f,d){return b(),H("span",{style:K({color:t.color})},J(t.value),5)}const Y=B(U,[["render",X]]),tt=I(Y),et=S({components:{ElButton:A,CountTo:tt,CardGrid:j,CardGridItem:L},setup(){const t=h(),{createMessage:e}=P();function a(){e.success("done")}function n(){t.value.start()}return{countRef:t,handleStart:n,handleFinished:a}}});function at(t,e,a,n,f,d){const u=i("CountTo"),o=i("CardGridItem"),p=i("ElButton"),m=i("CardGrid"),r=i("PageWrapper");return b(),Q(r,{title:"数字动画示例",contentBackground:""},{default:l(()=>[s(m,{class:"m-20",center:""},{default:l(()=>[s(o,null,{default:l(()=>[s(u,{suffix:"$",color:"red",startVal:1,endVal:3e5,decimals:2,duration:6e3})]),_:1}),s(o,null,{default:l(()=>[s(u,{ref:"countRef",autoplay:!1,onFinished:t.handleFinished},null,8,["onFinished"]),s(p,{onClick:t.handleStart},{default:l(()=>[Z("Go")]),_:1},8,["onClick"])]),_:1}),s(o,null,{default:l(()=>[s(u,{separator:"-",color:"rgba(138,43,226,.6)",startVal:1e4,endVal:5e5,duration:8e3})]),_:1})]),_:1})]),_:1})}const ut=B(et,[["render",at]]);export{ut as default};
