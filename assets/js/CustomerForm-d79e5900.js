import{B as x}from"./BasicForm-8c6c9953.js";import{u as C}from"./useForm-a69bdb0d.js";import{C as g}from"./index-c26878d4.js";import{_,f as E}from"./index-c76c27a8.js";import{P as F}from"./index-df532586.js";import{C as m}from"./ex-pkg-element-plus-387a9e67.js";import{y as B,Z as s,z as k,G as h,H as t,R as p,a4 as A}from"./ex-pkg-@vue-6f720869.js";import"./index-0a4c95ac.js";import"./ex-pkg-@vueuse-7c1f2694.js";import"./ex-pkg-vendor-ad21d406.js";import"./ex-pkg-mockjs-d5ed3ada.js";import"./ex-pkg-@element-plus-8be47ecc.js";import"./index-17b9734e.js";import"./index-b5118db3.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-e2bb9137.js";import"./index-5b1d7164.js";import"./tsxHelper-6b2f4741.js";import"./useTimeout-a639f925.js";import"./propTypes-7529eeb4.js";import"./download-00b02bb0.js";import"./base64Conver-6d09fa87.js";import"./index-7788d2aa.js";import"./ex-pkg-@zxcvbn-ts-4e0726c1.js";import"./index-c48e4c62.js";import"./useCopyToClipboard-ec23ff2f.js";import"./index-b5c2dac5.js";import"./ex-pkg-@iconify-9ec765d0.js";import"./ex-pkg-@popperjs-d61e97fc.js";const v=B({components:{ElInput:m,CollapseContainer:g,PageWrapper:F,BasicForm:x},setup(){const{createMessage:o}=E(),n=[{field:"field1",component:"ElInput",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:r})=>A(m,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e[r],onInput:i=>{e[r]=i}})},{field:"field2",component:"ElInput",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({append:()=>"append"})},{field:"field3",component:"ElInput",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],[a]=C({labelWidth:120,schemas:n,actionColOptions:{span:24}});return{register:a,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))}}}});function P(o,n,a,e,r,i){const c=s("el-input"),d=s("BasicForm"),f=s("CollapseContainer"),j=s("PageWrapper");return k(),h(j,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[p(f,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:t(()=>[p(d,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:t(({model:u,field:l})=>[p(c,{modelValue:u[l],"onUpdate:modelValue":b=>u[l]=b,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var te=_(v,[["render",P]]);export{te as default};
