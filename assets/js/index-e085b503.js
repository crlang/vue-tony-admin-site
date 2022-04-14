var B=Object.defineProperty,F=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var C=(e,t,s)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))T.call(t,s)&&C(e,s,t[s]);if(k)for(var s of k(t))O.call(t,s)&&C(e,s,t[s]);return e},V=(e,t)=>F(e,N(t));import{P as A}from"./index-fe480704.js";import{dw as I}from"./ex-pkg-vendor-a94c680b.js";import{_ as j,aw as L}from"./index-034694ef.js";import{y as P,z as S,C as W,V as R,u as $,af as G}from"./ex-pkg-element-plus-fdfdae45.js";import{y as x,_ as z,w as M,l as _,a7 as U,Z as u,z as h,G as H,H as a,R as o,K as l,P as f,Q as g,A as y,a3 as J,F as K}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-2c72399a.js";const Q=x({components:{ElRow:P,ElCol:S,ElInput:W,ElCard:R,ElButton:$,ElTag:G,PageWrapper:A},setup(){const e=z({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),{status:t,data:s,send:v,close:D,open:E}=I(e.server,{autoReconnect:!1,heartbeat:!0});M(()=>{if(s.value)try{const m=JSON.parse(s.value);e.recordList.push(m)}catch(m){e.recordList.push({res:s.value,id:Math.ceil(Math.random()*1e3),time:new Date().getTime()})}});const r=_(()=>t.value==="OPEN"),p=_(()=>r.value?"success":"danger"),i=_(()=>[...e.recordList].reverse());function d(){v(e.sendValue),e.sendValue=""}function c(){r.value?D():E()}return V(w({status:t,formatToDateTime:L},U(e)),{handlerSend:d,getList:i,toggle:c,getIsOpen:r,getTagColor:p})}}),Z={class:"flex items-center"},q=l("span",{class:"text-lg font-medium mr-4"},"\u8FDE\u63A5\u72B6\u6001:",-1),X=f("\u670D\u52A1\u5730\u5740"),Y=f("\u53D1\u9001"),ee={class:"min-h-85 overflow-auto"},te={class:"flex items-center"},se=l("span",{class:"mr-2 text-primary font-medium"},"\u6536\u5230\u6D88\u606F:",-1);function ae(e,t,s,v,D,E){const r=u("el-tag"),p=u("el-button"),i=u("el-input"),d=u("el-card"),c=u("el-col"),m=u("el-row"),b=u("PageWrapper");return h(),H(b,{title:"WebSocket \u793A\u4F8B"},{default:a(()=>[o(m,{gutter:24,class:"pb-4"},{default:a(()=>[o(c,{span:8},{default:a(()=>[o(d,{class:"mb-4"},{header:a(()=>[l("div",Z,[q,o(r,{type:e.getTagColor},{default:a(()=>[f(g(e.status),1)]),_:1},8,["type"])])]),default:a(()=>[o(i,{modelValue:e.server,"onUpdate:modelValue":t[0]||(t[0]=n=>e.server=n),placeholder:"Please input",class:"input-with-select"},{prepend:a(()=>[X]),append:a(()=>[o(p,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle,loading:e.status==="CONNECTING"},{default:a(()=>[f(g(e.getIsOpen?"\u5173\u95ED\u8FDE\u63A5":e.status==="CONNECTING"?"\u8FDE\u63A5\u4E2D...":"\u5F00\u542F\u8FDE\u63A5"),1)]),_:1},8,["type","onClick","loading"])]),_:1},8,["modelValue"])]),_:1}),o(d,{header:"\u6D4B\u8BD5"},{default:a(()=>[o(i,{maxlength:"30",placeholder:"\u9700\u8981\u53D1\u9001\u5230\u670D\u52A1\u5668\u7684\u5185\u5BB9",disabled:!e.getIsOpen,modelValue:e.sendValue,"onUpdate:modelValue":t[1]||(t[1]=n=>e.sendValue=n),"show-word-limit":"",rows:5,type:"textarea"},null,8,["disabled","modelValue"]),o(p,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:a(()=>[Y]),_:1},8,["disabled","onClick"])]),_:1})]),_:1}),o(c,{span:16},{default:a(()=>[o(d,{header:"\u6D88\u606F\u8BB0\u5F55"},{default:a(()=>[l("div",ee,[l("ul",null,[(h(!0),y(K,null,J(e.getList,n=>(h(),y("li",{class:"mt-2",key:n.time},[l("div",te,[se,l("span",null,g(e.formatToDateTime(n.time)),1)]),l("div",null,g(n.res),1)]))),128))])])]),_:1})]),_:1})]),_:1})]),_:1})}var ie=j(Q,[["render",ae]]);export{ie as default};
