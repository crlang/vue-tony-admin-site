var w=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var C=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,V=(e,t)=>{for(var a in t||(t={}))T.call(t,a)&&C(e,a,t[a]);if(E)for(var a of E(t))I.call(t,a)&&C(e,a,t[a]);return e},y=(e,t)=>F(e,N(t));import{P as O}from"./index.14ff926d.js";import{x as A,aQ as L,aR as S,am as P,bo as R,aI as W,b_ as j,I as $,cm as M,ak as G,y as g,R as U,Y as u,z as h,Z as z,a3 as s,a0 as o,D as n,ab as f,F as _,A as B,ao as J,a8 as Q}from"./vendor.041d4bc7.js";import{_ as Y,aO as Z}from"./index.c38c7de5.js";import"./useMenuSetting.8bd75ac6.js";const q=A({components:{ElRow:L,ElCol:S,ElInput:P,ElCard:R,ElButton:W,ElTag:j,PageWrapper:O},setup(){const e=$({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:a,send:v,close:D,open:b}=M(e.server,{autoReconnect:!1,heartbeat:!0});G(()=>{if(a.value)try{const m=JSON.parse(a.value);e.recordList.push(m)}catch(m){e.recordList.push({res:a.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const r=g(()=>t.value==="OPEN"),i=g(()=>r.value?"success":"danger"),c=g(()=>[...e.recordList].reverse());function d(){v(e.sendValue),e.sendValue=""}function p(){r.value?D():b()}return y(V({status:t,formatToDateTime:Z},U(e)),{handlerSend:d,getList:c,toggle:p,getIsOpen:r,getTagColor:i})}}),H={class:"flex items-center"},K=n("span",{class:"text-lg font-medium mr-4"},"\u8FDE\u63A5\u72B6\u6001:",-1),X=f("\u670D\u52A1\u5730\u5740"),x=f("\u53D1\u9001"),ee={class:"min-h-85 overflow-auto"},te={class:"flex items-center"},ae=n("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function se(e,t,a,v,D,b){const r=u("el-tag"),i=u("el-button"),c=u("el-input"),d=u("el-card"),p=u("el-col"),m=u("el-row"),k=u("PageWrapper");return h(),z(k,{title:"WebSocket \u793A\u4F8B"},{default:s(()=>[o(m,{gutter:24,class:"pb-4"},{default:s(()=>[o(p,{span:8},{default:s(()=>[o(d,{class:"mb-4"},{header:s(()=>[n("div",H,[K,o(r,{type:e.getTagColor},{default:s(()=>[f(_(e.status),1)]),_:1},8,["type"])])]),default:s(()=>[o(c,{modelValue:e.server,"onUpdate:modelValue":t[0]||(t[0]=l=>e.server=l),placeholder:"Please input",class:"input-with-select"},{prepend:s(()=>[X]),append:s(()=>[o(i,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle,loading:e.status==="CONNECTING"},{default:s(()=>[f(_(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":e.status==="CONNECTING"?"\u8FDE\u63A5\u4E2D...":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick","loading"])]),_:1},8,["modelValue"])]),_:1}),o(d,{header:"\u6D4B\u8BD5"},{default:s(()=>[o(c,{maxlength:"30",placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,modelValue:e.sendValue,"onUpdate:modelValue":t[1]||(t[1]=l=>e.sendValue=l),"show-word-limit":"",rows:5,type:"textarea"},null,8,["disabled","modelValue"]),o(i,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:s(()=>[x]),_:1},8,["disabled","onClick"])]),_:1})]),_:1}),o(p,{span:16},{default:s(()=>[o(d,{header:"\u6D88\u606F\u8BB0\u5F55"},{default:s(()=>[n("div",ee,[n("ul",null,[(h(!0),B(Q,null,J(e.getList,l=>(h(),B("li",{class:"mt-2",key:l.time},[n("div",te,[ae,n("span",null,_(e.formatToDateTime(l.time)),1)]),n("div",null,_(l.res),1)]))),128))])])]),_:1})]),_:1})]),_:1})]),_:1})}var de=Y(q,[["render",se]]);export{de as default};
