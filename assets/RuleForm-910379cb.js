var v=(o,e,a)=>new Promise((g,c)=>{var E=t=>{try{i(a.next(t))}catch(p){c(p)}},l=t=>{try{i(a.throw(t))}catch(p){c(p)}},i=t=>t.done?g(t.value):Promise.resolve(t.value).then(E,l);i((a=a.apply(o,e)).next())});import{B as P}from"./index-a82db265.js";import{C as V}from"./index-bf00342a.js";import{K as _,_ as B}from"./index-795cdaa0.js";import{i as q}from"./system-58567010.js";import{C as w}from"./index-e91b177b.js";import{n as $}from"./elementui-66980f2a.js";import{u as I}from"./useForm-af19a7b1.js";import{E as y,ac as f,p as A,I as k,J as s,t as D,S as u,P as C}from"./vue-d691a816.js";import"./index-6ee1af83.js";import"./index-e82f403d.js";import"./index-9c67be75.js";import"./tsxHelper-f44f22cd.js";import"./useWindowSizeFn-f51aba85.js";import"./index-22989de9.js";import"./index-d5a424e4.js";import"./index-02c8116c.js";const N=y({components:{ElButton:$,BasicForm:P,CollapseContainer:V,CountdownInput:w},setup(){const{createMessage:o}=_(),e=[{field:"field1",component:"ElInput",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"ElInput",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"ElInputNumber",show:!1},{field:"field3",component:"ElDatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"ElDatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"ElInput",label:"验证码",slot:"countdown",colProps:{span:8},required:!0},{field:"field4",component:"ElSelect",label:"字段4",colProps:{span:8},componentProps:{multiple:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"请选择",type:"array"}]},{field:"field441",component:"ElInput",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(n,d,m)=>(d||m(new Error("值不能为空")),d==="1"&&m(new Error("值不能为1")),m()),trigger:"change"}]},{field:"field5",component:"ElCheckboxGroup",defaultValue:[],label:"字段5",colProps:{span:8},required:!0,componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"ElRadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息",type:"string"}]},{field:"field8",component:"ElInput",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator(n,d,m){q(d).then(()=>m()).catch(F=>{m(new Error(F.message||"验证失败"))})}}]}],[a,{validateField:g,clearValidate:c,getFieldsValue:E,reset:l,setFieldsValue:i}]=I({labelWidth:140,schemas:e,actionColProps:{span:24}});function t(){return v(this,null,function*(){try{yield g(["field1","field2"])}catch(n){}})}function p(){return v(this,null,function*(){c()})}function b(){const n=E();o.success(`values:${JSON.stringify(n)}`)}function r(){i({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:a,schemas:e,handleSubmit:n=>{o.success(`click search,values:${JSON.stringify(n)}`)},getFormValues:b,setFormValues:r,validateForm:t,resetValidate:p,reset:l}}}),M={class:"mb-4"};function S(o,e,a,g,c,E){const l=f("el-button"),i=f("CountdownInput"),t=f("BasicForm"),p=f("CollapseContainer"),b=f("PageWrapper");return A(),k(b,{title:"表单校验示例"},{default:s(()=>[D("div",M,[u(l,{onClick:e[0]||(e[0]=r=>o.validateForm())},{default:s(()=>[C("手动校验表单")]),_:1}),u(l,{onClick:e[1]||(e[1]=r=>o.resetValidate())},{default:s(()=>[C("清空校验信息")]),_:1}),u(l,{onClick:e[2]||(e[2]=r=>o.getFormValues())},{default:s(()=>[C("获取表单值")]),_:1}),u(l,{onClick:e[3]||(e[3]=r=>o.setFormValues())},{default:s(()=>[C("设置表单值")]),_:1}),u(l,{onClick:e[4]||(e[4]=r=>o.reset())},{default:s(()=>[C("重置")]),_:1})]),u(p,{title:"表单校验"},{default:s(()=>[u(t,{onRegister:o.register},{countdown:s(({model:r,field:n})=>[u(i,{modelValue:r[n],"onUpdate:modelValue":d=>r[n]=d},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister"])]),_:1})]),_:1})}const Z=B(N,[["render",S]]);export{Z as default};
