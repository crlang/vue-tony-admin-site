import{B as c}from"./TableImg.f1872a7a.js";import{u}from"./useTable.9ede0ccb.js";import{getBasicColumns as d,getFormConfig as p}from"./tableData.6c6a5019.js";import{d as l}from"./table.7f6ad5dd.js";import{_ as b,f}from"./index.b7d256c2.js";import{x as j,aJ as _,X as a,z as g,Y as F,a2 as o,$ as T,aa as i}from"./vendor.1ced56aa.js";import"./BasicForm.3025383c.js";import"./index.d43b6350.js";import"./index.deee9844.js";import"./index.ff9a9226.js";import"./useAttrs.58303cdd.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.00691155.js";import"./base64Conver.bb012c73.js";import"./index.9b0d1666.js";import"./useForm.c868803e.js";import"./index.7b145182.js";import"./onMountedOrActivated.f6bae218.js";import"./select.32d9436d.js";const x=j({components:{ElButton:_,BasicTable:c},setup(){const[e,{getFormRef:s}]=u({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:l,columns:d(),useSearchForm:!0,formConfig:p(),showTableSetting:!0,rowKey:"id"}),{createMessage:t}=f();function r(){t.success(JSON.stringify(s().getFieldsValue()))}return{registerTable:e,getFormValues:r}}}),B=i("custom-slot"),C=i("\u83B7\u53D6\u8868\u5355\u6570\u636E");function h(e,s,t,r,v,w){const n=a("el-button"),m=a("BasicTable");return g(),F(m,{onRegister:e.registerTable},{"form-custom":o(()=>[B]),toolbar:o(()=>[T(n,{type:"primary",onClick:e.getFormValues},{default:o(()=>[C]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var G=b(x,[["render",h]]);export{G as default};
