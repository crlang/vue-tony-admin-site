import{B as d}from"./index-2684c8ee.js";import{g as _,b as g}from"./data-d65ea251.js";import{d as b}from"./table-d77ffdea.js";import{K as B,_ as V}from"./index-795cdaa0.js";import{n as C,Z as T}from"./elementui-66980f2a.js";import{u as F}from"./useTable-390ae7f5.js";import{E,ac as o,p as h,I as k,J as t,S as r,P as y}from"./vue-d691a816.js";import"./index-a82db265.js";import"./index-6ee1af83.js";import"./index-e82f403d.js";import"./index-9c67be75.js";import"./tsxHelper-f44f22cd.js";import"./useWindowSizeFn-f51aba85.js";import"./index-22989de9.js";import"./index-d5a424e4.js";import"./domUtils-3a96435f.js";import"./index-a2d8523e.js";import"./useForm-af19a7b1.js";const $=E({components:{ElButton:C,ElInput:T,BasicTable:d},setup(){const[e,{getFormRef:a}]=F({title:"开启搜索区域",api:b,columns:_(),pagination:{},useSearchForm:!0,formConfig:g(),rowKey:"id"}),{createInfoModal:n}=B();function s(){n({title:"温馨提示",message:JSON.stringify(a().getFieldsValue())})}return{registerTable:e,getFormValues:s}}});function x(e,a,n,s,A,I){const p=o("el-button"),l=o("el-input"),u=o("BasicTable"),c=o("PageWrapper");return h(),k(c,null,{default:t(()=>[r(u,{onRegister:e.registerTable},{toolbar:t(()=>[r(p,{type:"primary",onClick:e.getFormValues},{default:t(()=>[y("获取表单数据")]),_:1},8,["onClick"])]),"form-field10":t(({model:i,field:m})=>[r(l,{modelValue:i[m],"onUpdate:modelValue":f=>i[m]=f,placeholder:"自定义slot"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister"])]),_:1})}const G=V($,[["render",x]]);export{G as default};
