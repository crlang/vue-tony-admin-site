import{B as l}from"./index.3e4f3c3c.js";import{_ as c,f as d}from"./index.a180eed7.js";import{P as m}from"./index.2f4e0ba4.js";import{u as f}from"./upload.44835ec4.js";import{x as g,c0 as j,M as F,X as a,z as _,Y as C,a2 as h,$ as u}from"./vendor.5e678e09.js";import"./index.2a498586.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";const x=g({components:{ElAlert:j,BasicUpload:l,PageWrapper:m},setup(){const{createMessage:e}=d(),s=F();function t(o){e.info(`\u79FB\u9664\u6587\u4EF6${JSON.stringify(o)}`)}function n(o){e.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(o)}`)}return{uploadList:s,handleChange:n,handleDelete:t,uploadApi:f}}});function A(e,s,t,n,o,D){const r=a("BasicUpload"),p=a("el-alert"),i=a("PageWrapper");return _(),C(i,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:h(()=>[u(r,{onChange:e.handleChange,api:e.uploadApi,modelValue:e.uploadList,maxSize:5,maxNumber:3,onDelete:e.handleDelete,accept:["png","jpg","jpeg","webp","svg","xlsx"]},null,8,["onChange","api","modelValue","onDelete"]),u(p,{type:"error",class:"my-4",title:"\u5982\u679C\u9700\u8981\u6F14\u793A\u4E0A\u4F20\u529F\u80FD,\u9700\u8981\u5728test/server\u4E2D\u8FD0\u884Ctest\u670D\u52A1\u5668"})]),_:1})}var M=c(x,[["render",A]]);export{M as default};
