import{B as p}from"./TableImg-244764d7.js";import{u as c}from"./useTable-a6392c55.js";import{getBasicColumns as u,getFormConfig as d}from"./tableData-558aa509.js";import{d as f}from"./table-d642a3ce.js";import{_ as l,f as j}from"./index-034694ef.js";import{u as b}from"./ex-pkg-element-plus-fdfdae45.js";import{y as g,Z as i,z as x,G as _,H as o,R as T,P as a}from"./ex-pkg-@vue-6f720869.js";import"./BasicForm-7e56ab34.js";import"./index-504d29a3.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";import"./useForm-9a91b2d5.js";import"./index-fe480704.js";const F=g({components:{ElButton:b,BasicTable:p},setup(){const[e,{getFormRef:s}]=c({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:f,columns:u(),useSearchForm:!0,formConfig:d(),showTableSetting:!0,rowKey:"id"}),{createMessage:t}=j();function r(){t.success(JSON.stringify(s().getFieldsValue()))}return{registerTable:e,getFormValues:r}}}),C=a("custom-slot"),B=a("\u83B7\u53D6\u8868\u5355\u6570\u636E");function k(e,s,t,r,y,h){const m=i("el-button"),n=i("BasicTable");return x(),_(n,{onRegister:e.registerTable},{"form-custom":o(()=>[C]),toolbar:o(()=>[T(m,{type:"primary",onClick:e.getFormValues},{default:o(()=>[B]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var oe=l(F,[["render",k]]);export{oe as default};
