var h=Object.defineProperty;var l=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var f=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,j=(e,t)=>{for(var o in t||(t={}))C.call(t,o)&&f(e,o,t[o]);if(l)for(var o of l(t))B.call(t,o)&&f(e,o,t[o]);return e};import{y as N,a as E,_ as P,a7 as y,Z as p,z as r,G as a,H as S,K as _,R as n,I as u,J as i,O as x}from"./ex-pkg-@vue.dfd8e273.js";import A from"./Step1.7513e094.js";import R from"./Step2.551405c4.js";import w from"./Step3.3cca52fb.js";import{P as D}from"./index.2db0f4ce.js";import{_ as W}from"./index.b3c9ad7f.js";import{aq as $,ar as z}from"./ex-pkg-element-plus.1726aa79.js";import"./BasicForm.e23a97e1.js";import"./index.a1d19e61.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./index.ec087bd6.js";import"./index.46c5c8ac.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./index.4cd5987a.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./useTimeout.be9115ef.js";import"./propTypes.a1efa9e6.js";import"./download.37b1865e.js";import"./base64Conver.bb012c73.js";import"./index.bca35d58.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./index.b685e481.js";import"./useCopyToClipboard.b484edcb.js";import"./useForm.48835dfb.js";import"./data.eb443a4f.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const T=N({name:"FormStepPage",components:{ElSteps:$,ElStep:z,Step1:A,Step2:R,Step3:w,PageWrapper:D},setup(){const e=E(0),t=P({initSetp2:!1,initSetp3:!1});function o(s){e.value++,t.initSetp2=!0,console.log(s)}function d(){e.value--}function c(s){e.value++,t.initSetp3=!0,console.log(s)}function m(){e.value=0,t.initSetp2=!1,t.initSetp3=!1}return j({current:e,handleStep1Next:o,handleStep2Next:c,handleRedo:m,handleStepPrev:d},y(t))}}),V={class:"step-form-form"},H={class:"mt-5"};function I(e,t,o,d,c,m){const s=p("el-step"),v=p("el-steps"),b=p("Step1"),g=p("Step2"),F=p("Step3"),k=p("PageWrapper");return r(),a(k,{title:"\u5206\u6B65\u8868\u5355",contentBackground:"",description:" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002"},{default:S(()=>[_("div",V,[n(v,{current:e.current},{default:S(()=>[n(s,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),n(s,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),n(s,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),_("div",H,[u(n(b,{onNext:e.handleStep1Next},null,8,["onNext"]),[[i,e.current===0]]),e.initSetp2?u((r(),a(g,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[i,e.current===1]]):x("",!0),e.initSetp3?u((r(),a(F,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[i,e.current===2]]):x("",!0)])]),_:1})}var Fe=W(T,[["render",I],["__scopeId","data-v-3a9a0435"]]);export{Fe as default};
