var x=Object.defineProperty;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))N.call(t,o)&&f(e,o,t[o]);if(m)for(var o of m(t))E.call(t,o)&&f(e,o,t[o]);return e};import{x as P,cr as g,cs as A,M as R,I as k,R as w,X as s,z as u,Y as p,a2 as _,D as v,$ as r,B as a,C as i,a9 as j}from"./vendor.5e678e09.js";import y from"./Step1.74b45ef7.js";import D from"./Step2.35a74a10.js";import $ from"./Step3.55ee6c3a.js";import{P as W}from"./index.2f4e0ba4.js";import{_ as V}from"./index.a180eed7.js";import"./BasicForm.b7b18809.js";import"./index.24c16315.js";import"./index.3e4f3c3c.js";import"./index.2a498586.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";import"./index.056c9b24.js";import"./useForm.5f193a64.js";import"./data.eb443a4f.js";const z=P({name:"FormStepPage",components:{ElSteps:g,ElStep:A,Step1:y,Step2:D,Step3:$,PageWrapper:W},setup(){const e=R(0),t=k({initSetp2:!1,initSetp3:!1});function o(n){e.value++,t.initSetp2=!0,console.log(n)}function c(){e.value--}function d(n){e.value++,t.initSetp3=!0,console.log(n)}function l(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return S({current:e,handleStep1Next:o,handleStep2Next:d,handleRedo:l,handleStepPrev:c},w(t))}}),I={class:"step-form-form"},M={class:"mt-5"};function T(e,t,o,c,d,l){const n=s("el-step"),F=s("el-steps"),h=s("Step1"),B=s("Step2"),C=s("Step3"),b=s("PageWrapper");return u(),p(b,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",description:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002"},{default:_(()=>[v("div",I,[r(F,{current:e.current},{default:_(()=>[r(n,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),r(n,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),v("div",M,[a(r(h,{onNext:e.handleStep1Next},null,8,["onNext"]),[[i,e.current===0]]),e.initSetp2?a((u(),p(B,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[i,e.current===1]]):j("",!0),e.initSetp3?a((u(),p(C,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[i,e.current===2]]):j("",!0)])]),_:1})}var ae=V(z,[["render",T],["__scopeId","data-v-60b1f67a"]]);export{ae as default};
