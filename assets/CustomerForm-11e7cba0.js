import{B as E}from"./index-a82db265.js";import{C as h}from"./index-bf00342a.js";import{K as B,_ as b}from"./index-795cdaa0.js";import{Z as m}from"./elementui-66980f2a.js";import{u as g}from"./useForm-af19a7b1.js";import{E as A,ab as F,ac as t,p as S,I,J as n,S as s}from"./vue-d691a816.js";import"./index-6ee1af83.js";import"./index-e82f403d.js";import"./index-9c67be75.js";import"./tsxHelper-f44f22cd.js";import"./useWindowSizeFn-f51aba85.js";import"./index-22989de9.js";import"./index-d5a424e4.js";import"./index-02c8116c.js";const P=A({components:{ElInput:m,CollapseContainer:h,BasicForm:E},setup(){const{createMessage:o}=B(),a=[{field:"field1",component:"ElInput",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:r})=>F(m,{placeholder:"请输入",modelValue:e[r],onInput:l=>{e[r]=l}})},{field:"field2",component:"ElInput",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({append:()=>"append"})},{field:"field3",component:"ElInput",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],[p]=g({labelWidth:120,schemas:a,actionColProps:{span:24}});return{register:p,handleSubmit:e=>{o.success(`click search,values:${JSON.stringify(e)}`)}}}});function V(o,a,p,e,r,l){const c=t("el-input"),d=t("BasicForm"),f=t("CollapseContainer"),_=t("PageWrapper");return S(),I(_,{title:"自定义组件示例"},{default:n(()=>[s(f,{title:"自定义表单"},{default:n(()=>[s(d,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:n(({model:u,field:i})=>[s(c,{modelValue:u[i],"onUpdate:modelValue":C=>u[i]=C,placeholder:"自定义slot"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const O=b(P,[["render",V]]);export{O as default};
