import{B as C}from"./BasicForm.5b4e187b.js";import{u as E}from"./useForm.d6410a30.js";import{_ as j,ab as F,f as B}from"./index.c38c7de5.js";import{P as g}from"./index.14ff926d.js";import{x as h,am as c,Y as t,z as A,Z as x,a3 as r,a0 as s,k as S}from"./vendor.041d4bc7.js";import"./index.8a676b72.js";import"./index.a0c3ab5a.js";import"./index.724f1992.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.0159c5b0.js";import"./base64Conver.bb012c73.js";import"./index.eae7ea3e.js";import"./useMenuSetting.8bd75ac6.js";const P=h({components:{ElInput:c,CollapseContainer:F,PageWrapper:g,BasicForm:C},setup(){const{createMessage:o}=B(),a=[{field:"field1",component:"ElInput",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:n})=>S(c,{placeholder:"\u8BF7\u8F93\u5165",modelValue:e[n],onInput:p=>{e[n]=p}})},{field:"field2",component:"ElInput",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({append:()=>"append"})},{field:"field3",component:"ElInput",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],[u]=E({labelWidth:120,schemas:a,actionColOptions:{span:24}});return{register:u,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))}}}});function V(o,a,u,e,n,p){const m=t("el-input"),d=t("BasicForm"),f=t("CollapseContainer"),b=t("PageWrapper");return A(),x(b,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[s(f,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:r(()=>[s(d,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:r(({model:i,field:l})=>[s(m,{modelValue:i[l],"onUpdate:modelValue":_=>i[l]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Y=j(P,[["render",V]]);export{Y as default};
