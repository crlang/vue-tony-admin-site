var N=Object.defineProperty;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,S=(e,t)=>{for(var o in t||(t={}))b.call(t,o)&&f(e,o,t[o]);if(m)for(var o of m(t))E.call(t,o)&&f(e,o,t[o]);return e};import{x as P,cu as g,cv as A,M as R,I as k,R as w,X as s,z as r,Y as p,a2 as _,D as v,$ as u,B as a,C as i,a9 as j}from"./vendor.6c1ff918.js";import y from"./Step1.981a2ae0.js";import D from"./Step2.2863b5cb.js";import $ from"./Step3.dea3462e.js";import{P as W}from"./index.238d148c.js";import{_ as V}from"./index.dea57c76.js";import"./BasicForm.e762b6e5.js";import"./index.8d342d10.js";import"./index.8eeddf42.js";import"./index.14049971.js";import"./useAttrs.1cff00fd.js";import"./useWindowSizeFn.b326ae88.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.765012d5.js";import"./base64Conver.bb012c73.js";import"./index.87273d76.js";import"./useForm.51dec503.js";import"./data.eb443a4f.js";const z=P({name:"FormStepPage",components:{ElSteps:g,ElStep:A,Step1:y,Step2:D,Step3:$,PageWrapper:W},setup(){const e=R(0),t=k({initSetp2:!1,initSetp3:!1});function o(n){e.value++,t.initSetp2=!0,console.log(n)}function d(){e.value--}function c(n){e.value++,t.initSetp3=!0,console.log(n)}function l(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return S({current:e,handleStep1Next:o,handleStep2Next:c,handleRedo:l,handleStepPrev:d},w(t))}}),I={class:"step-form-form"},M={class:"mt-5"};function T(e,t,o,d,c,l){const n=s("el-step"),F=s("el-steps"),h=s("Step1"),B=s("Step2"),C=s("Step3"),x=s("PageWrapper");return r(),p(x,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",description:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002"},{default:_(()=>[v("div",I,[u(F,{current:e.current},{default:_(()=>[u(n,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),u(n,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),u(n,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),v("div",M,[a(u(h,{onNext:e.handleStep1Next},null,8,["onNext"]),[[i,e.current===0]]),e.initSetp2?a((r(),p(B,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[i,e.current===1]]):j("",!0),e.initSetp3?a((r(),p(C,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[i,e.current===2]]):j("",!0)])]),_:1})}var ae=V(z,[["render",T],["__scopeId","data-v-60b1f67a"]]);export{ae as default};
