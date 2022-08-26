import O from"./OrderAnalysis.a6233b8f.js";import V from"./OrderAnalysisBar.b54855cc.js";import{d as k,r as p,w as A,b as g,_ as T,e as a,o as d,j as y,i as t,h as o,g as s,f as D,bB as C,am as S,c$ as $,d0 as F}from"./index.61be89a1.js";import{E as I,a as q}from"./index.e035b73c.js";import{E as N}from"./index.bc10a37a.js";import{a as U,E as j}from"./index.88f08dee.js";import{E as L}from"./index.a1a61c87.js";import"./useECharts.30319909.js";import"./useTimeout.0d66b90d.js";import"./props.0e83686c.js";import"./data.f24fc52d.js";import"./index.904f788a.js";import"./row.2741a82e.js";import"./card.dd13a1ef.js";import"./index.91f8c4ba.js";import"./index.3df10ae2.js";import"./index.7fce1749.js";import"./isEqual.755d4a14.js";import"./_baseIsEqual.3f9a7929.js";import"./index.761cf9b9.js";const M=k({components:{ElRow:I,ElCol:q,ElCard:N,ElSelect:U,ElOption:j,ElDatePicker:L,OrderAnalysis:O,OrderAnalysisBar:V},props:{loading:{type:Boolean}},emits:["dateType"],setup(e,{emit:r}){const i=p([new Date,new Date]),n=p("quarter"),_=p([{value:"day",label:"Day"},{value:"week",label:"Week"},{value:"month",label:"Month"},{value:"quarter",label:"Quarter"},{value:"year",label:"Year"}]);return A(()=>g(n),u=>{r("dateType",u)}),{dateType:n,dateVal:i,dateOptions:_}}}),f=e=>($("data-v-2e7a2048"),e=e(),F(),e),P={class:"dashboard-analysis__title ana-site__title"},Q=f(()=>s("span",null,"\u8BA2\u5355\u8D8B\u52BF",-1)),R={class:"ana-site__extra"},W=f(()=>s("div",{class:"dashboard-analysis__title"},"\u4EFB\u52A1\u8FDB\u5EA6",-1));function Y(e,r,i,n,_,u){const v=a("el-date-picker"),h=a("el-option"),w=a("el-select"),B=a("OrderAnalysisBar"),c=a("el-card"),m=a("el-col"),E=a("OrderAnalysis"),b=a("el-row");return d(),y(b,{class:"ana-site",gutter:32},{default:t(()=>[o(m,{span:16},{default:t(()=>[o(c,{shadow:"always"},{header:t(()=>[s("div",P,[Q,s("div",R,[o(v,{modelValue:e.dateVal,"onUpdate:modelValue":r[0]||(r[0]=l=>e.dateVal=l),type:"daterange","range-separator":"~"},null,8,["modelValue"]),o(w,{modelValue:e.dateType,"onUpdate:modelValue":r[1]||(r[1]=l=>e.dateType=l),placeholder:"Select"},{default:t(()=>[(d(!0),D(S,null,C(e.dateOptions,l=>(d(),y(h,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])]),default:t(()=>[o(B,{type:e.dateType},null,8,["type"])]),_:1})]),_:1}),o(m,{span:8},{default:t(()=>[o(c,{shadow:"always"},{header:t(()=>[W]),default:t(()=>[o(E,{type:e.dateType},null,8,["type"])]),_:1})]),_:1})]),_:1})}var ue=T(M,[["render",Y],["__scopeId","data-v-2e7a2048"]]);export{ue as default};
