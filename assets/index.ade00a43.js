import{D as T}from"./index.1f3b4296.js";import{B as j}from"./TableImg.cb20c750.js";import{u as l}from"./useTable.13dff6e9.js";import{P as g}from"./index.238d148c.js";import{refundTableData as c,refundTimeTableData as p,refundSchema as _,refundData as h,personSchema as B,personData as D,refundTableSchema as F,refundTimeTableSchema as S}from"./data.c4eec5ab.js";import{_ as v}from"./index.dea57c76.js";import{x,I as f,X as o,z as y,Y as R,a2 as C,$ as t,a0 as b}from"./vendor.6c1ff918.js";import"./useAttrs.1cff00fd.js";import"./BasicForm.e762b6e5.js";import"./index.8d342d10.js";import"./index.8eeddf42.js";import"./index.14049971.js";import"./useWindowSizeFn.b326ae88.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.765012d5.js";import"./base64Conver.bb012c73.js";import"./index.87273d76.js";import"./useForm.51dec503.js";import"./onMountedOrActivated.3712f3d2.js";const w=x({components:{Description:T,BasicTable:j,PageWrapper:g},setup(){const e=f({title:"\u9000\u8D27\u5546\u54C1",dataSource:c,columns:F,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryMethod:d}),[n]=l(),i=f({title:"\u9000\u8D27\u8FDB\u5EA6",columns:S,dataSource:p,scroll:{y:300}}),[u]=l();function d(m){let a=0,r=0;return m.forEach(s=>{a+=s.t5,r+=s.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:r}]}return{refundTableData:c,registerRefundTableFields:e,refundTimeTableData:p,registerRefundTable:n,registerTimeTableFields:i,registerTimeTable:u,refundSchema:_,refundData:h,personSchema:B,personData:D}}});function A(e,n,i,u,d,m){const a=o("Description"),r=o("BasicTable"),s=o("PageWrapper");return y(),R(s,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:C(()=>[t(a,{title:"\u9000\u6B3E\u7533\u8BF7",size:"small",border:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),t(a,{title:"\u7528\u6237\u4FE1\u606F",size:"small",class:"mt-4",border:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),t(r,b(e.registerRefundTableFields,{onRegister:e.registerRefundTable}),null,16,["onRegister"]),t(r,b(e.registerTimeTableFields,{onRegister:e.registerTimeTable}),null,16,["onRegister"])]),_:1})}var U=v(w,[["render",A],["__scopeId","data-v-fc8d6590"]]);export{U as default};
