import{B as a}from"./TableImg-244764d7.js";import{u as p}from"./useTable-a6392c55.js";import{d as n}from"./table-d642a3ce.js";import{_ as u}from"./index-034694ef.js";import{y as l,Z as m,z as c,A as d,R as f}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-7e56ab34.js";import"./index-504d29a3.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./ex-pkg-element-plus-fdfdae45.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";import"./useForm-9a91b2d5.js";import"./index-fe480704.js";const b=l({components:{BasicTable:a},setup(){const o=[{label:"ID",prop:"id",fixed:"left"},{label:"\u59D3\u540D",prop:"name"},{label:"\u5730\u5740",prop:"address"},{label:"\u7F16\u53F7",prop:"no"},{label:"\u5F00\u59CB\u65F6\u95F4",prop:"beginTime"},{label:"\u7ED3\u675F\u65F6\u95F4",prop:"endTime"},{actions:[{text:"\u542F\u7528",callback:t},{text:"\u5220\u9664",callback:s}]}],[r]=p({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:n,columns:o,showCheckboxColumn:!0,border:!0});function s(e){console.table("\u70B9\u51FB\u4E86\u5220\u9664",e)}function t(e){console.table("\u70B9\u51FB\u4E86\u542F\u7528",e)}return{registerTable:r,handleDelete:s,handleOpen:t}}}),j={class:"p-4"};function x(o,r,s,t,e,F){const i=m("BasicTable");return c(),d("div",j,[f(i,{onRegister:o.registerTable},null,8,["onRegister"])])}var J=u(b,[["render",x]]);export{J as default};
