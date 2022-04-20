import{C as _}from"./index-d0007c65.js";import{_ as F,$ as E,f as k}from"./index-034694ef.js";import{P as B}from"./index-fe480704.js";import{C as D,ah as h,u as g}from"./ex-pkg-element-plus-fdfdae45.js";import{y as b,a as j,Z as l,z as T,G as x,H as o,R as u,K as A,P as t}from"./ex-pkg-@vue-6f720869.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./useTimeout-deb974d8.js";const v=b({name:"TabsDemo",components:{ElInput:D,ElAlert:h,ElButton:g,CollapseContainer:_,PageWrapper:B},setup(){const e=j(""),{closeAll:a,closeLeft:c,closeRight:p,closeOther:d,closeCurrent:m,refreshPage:i,setTitle:s}=E(),{createMessage:r}=k();function n(){e.value?s(e.value):r.error("\u8BF7\u8F93\u5165\u8981\u8BBE\u7F6E\u7684Tab\u6807\u9898\uFF01")}return{closeAll:a,closeLeft:c,closeRight:p,closeOther:d,closeCurrent:m,refreshPage:i,setTabTitle:n,title:e}}}),P={class:"mt-2 flex flex-grow-0"},V=t("\u8BBE\u7F6ETab\u6807\u9898"),$=t("\u5173\u95ED\u6240\u6709"),w=t("\u5173\u95ED\u5DE6\u4FA7"),y=t("\u5173\u95ED\u53F3\u4FA7"),N=t("\u5173\u95ED\u5176\u4ED6"),R=t("\u5173\u95ED\u5F53\u524D"),W=t("\u5237\u65B0\u5F53\u524D");function H(e,a,c,p,d,m){const i=l("el-alert"),s=l("el-button"),r=l("el-input"),n=l("CollapseContainer"),f=l("PageWrapper");return T(),x(f,{title:"\u6807\u7B7E\u9875\u64CD\u4F5C\u793A\u4F8B"},{default:o(()=>[u(n,{title:"\u5728\u4E0B\u9762\u8F93\u5165\u6846\u8F93\u5165\u6587\u672C,\u5207\u6362\u540E\u56DE\u6765\u5185\u5BB9\u4F1A\u4FDD\u5B58"},{default:o(()=>[u(i,{"show-icon":"",type:"info",title:"\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u6807\u9898\uFF0C\u4EC5\u4FEE\u6539Tab\u6807\u9898"}),A("div",P,[u(s,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:o(()=>[V]),_:1},8,["onClick"]),u(r,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e.title,"onUpdate:modelValue":a[0]||(a[0]=C=>e.title=C),class:"mr-4 w-12"},null,8,["modelValue"])])]),_:1}),u(n,{class:"mt-4",title:"\u6807\u7B7E\u9875\u64CD\u4F5C"},{default:o(()=>[u(s,{plain:"",class:"mr-2",onClick:e.closeAll},{default:o(()=>[$]),_:1},8,["onClick"]),u(s,{plain:"",class:"mr-2",onClick:e.closeLeft},{default:o(()=>[w]),_:1},8,["onClick"]),u(s,{plain:"",class:"mr-2",onClick:e.closeRight},{default:o(()=>[y]),_:1},8,["onClick"]),u(s,{plain:"",class:"mr-2",onClick:e.closeOther},{default:o(()=>[N]),_:1},8,["onClick"]),u(s,{plain:"",class:"mr-2",onClick:e.closeCurrent},{default:o(()=>[R]),_:1},8,["onClick"]),u(s,{plain:"",class:"mr-2",onClick:e.refreshPage},{default:o(()=>[W]),_:1},8,["onClick"])]),_:1})]),_:1})}var Q=F(v,[["render",H]]);export{Q as default};
