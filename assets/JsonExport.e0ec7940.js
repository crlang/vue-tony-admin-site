import{B as m}from"./TableImg.85b7f65c.js";import"./index.7cf1fc6a.js";import{P as p}from"./index.2f4e0ba4.js";import{c as l,d as o,j as r}from"./data.7a1ef98d.js";import{_ as F}from"./index.a180eed7.js";import{x as f,aI as j,X as a,z as _,Y as B,a2 as u,$ as s,aa as i}from"./vendor.5e678e09.js";import"./BasicForm.b7b18809.js";import"./index.24c16315.js";import"./index.3e4f3c3c.js";import"./index.2a498586.js";import"./useAttrs.f893c8ed.js";import"./useWindowSizeFn.c212c501.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.86b751ed.js";import"./base64Conver.bb012c73.js";import"./index.056c9b24.js";import"./useForm.5f193a64.js";import"./clickOutside.d6da8543.js";const b=f({components:{ElButton:j,BasicTable:m,PageWrapper:p},setup(){function e(){r({data:o,filename:"\u4F7F\u7528key\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u90E8.xlsx"})}function t(){r({data:o,header:{id:"ID",name:"\u59D3\u540D",age:"\u5E74\u9F84",no:"\u7F16\u53F7",address:"\u5730\u5740",beginTime:"\u5F00\u59CB\u65F6\u95F4",endTime:"\u7ED3\u675F\u65F6\u95F4"},filename:"\u81EA\u5B9A\u4E49\u5934\u90E8.xlsx",json2sheetOpts:{header:["name","id"]}})}return{columns:l,data:o,defaultHeader:e,customHeader:t}}}),C=i(" \u5BFC\u51FA\uFF1A\u9ED8\u8BA4\u5934\u90E8 "),E=i(" \u5BFC\u51FA\uFF1A\u81EA\u5B9A\u4E49\u5934\u90E8 ");function A(e,t,x,T,h,k){const n=a("el-button"),c=a("BasicTable"),d=a("PageWrapper");return _(),B(d,{title:"\u5BFC\u51FA\u793A\u4F8B",description:"\u6839\u636EJSON\u683C\u5F0F\u7684\u6570\u636E\u8FDB\u884C\u5BFC\u51FA"},{default:u(()=>[s(c,{title:"\u57FA\u7840\u8868\u683C",columns:e.columns,dataSource:e.data},{toolbar:u(()=>[s(n,{onClick:e.defaultHeader},{default:u(()=>[C]),_:1},8,["onClick"]),s(n,{onClick:e.customHeader},{default:u(()=>[E]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}var G=F(b,[["render",A]]);export{G as default};
