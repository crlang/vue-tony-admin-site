import{B as g}from"./index.7264ffb9.js";import{C as b}from"./index.397c2134.js";import{_ as v,d as P,z as V,p as _,e as a,o as D,k as q,i as r,g as w,h as l,j as p}from"./index.a812ffa9.js";import{i as $}from"./system.6ca597c5.js";import{C as k}from"./index.07862fa3.js";import{u as y}from"./useForm.e1145b7d.js";import"./index.80078828.js";import"./index.fbd5cbb3.js";import"./index.1a2dfbe3.js";import"./index.48be7fd2.js";import"./index.f3e99c90.js";import"./index.68f69cb3.js";import"./strings.2b325842.js";import"./isEqual.f6c0098b.js";import"./_baseIsEqual.bce9394a.js";import"./drawer.55be0fb4.js";import"./form-item.7fe87d07.js";import"./col.93f66016.js";import"./card.bf554046.js";import"./dropdown.01d4c192.js";import"./description.cf55f5f3.js";import"./index.6c72c066.js";import"./tsxHelper.25cd2f92.js";import"./useWindowSizeFn.1725b147.js";import"./index.ba82fa59.js";import"./index.00e0b22a.js";import"./index.fb19ae5d.js";import"./refs.7c70278f.js";import"./use-dialog.8523a096.js";import"./index.c76667f6.js";import"./index.b98834c9.js";import"./index.6808290a.js";import"./index.a7c381f2.js";import"./index.2b992e0e.js";import"./index.09c51ff0.js";import"./index.510e3cb5.js";import"./index.c6940f23.js";import"./index.18abe04a.js";import"./index.92c9b7b5.js";const I=P({components:{ElButton:V,BasicForm:g,CollapseContainer:b,CountdownInput:k},setup(){const{createMessage:u}=_(),e=[{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"ElInputNumber",show:!1},{field:"field3",component:"ElDatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"ElDatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"ElInput",label:"\u9A8C\u8BC1\u7801",slot:"countdown",colProps:{span:8},required:!0},{field:"field4",component:"ElSelect",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{multiple:!0,options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8BF7\u9009\u62E9",type:"array"}]},{field:"field441",component:"ElInput",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(t,i,s)=>(i||s(new Error("\u503C\u4E0D\u80FD\u4E3A\u7A7A")),i==="1"&&s(new Error("\u503C\u4E0D\u80FD\u4E3A1")),s()),trigger:"change"}]},{field:"field5",component:"ElCheckboxGroup",defaultValue:[],label:"\u5B57\u6BB55",colProps:{span:8},required:!0,componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"ElRadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F",type:"string"}]},{field:"field8",component:"ElInput",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(t,i,s){$(i).then(()=>s()).catch(A=>{s(new Error(A.message||"\u9A8C\u8BC1\u5931\u8D25"))})}}]}],[B,{validateField:C,clearValidate:F,getFieldsValue:E,reset:n,setFieldsValue:m}]=y({labelWidth:140,schemas:e,actionColProps:{span:24}});async function d(){try{await C(["field1","field2"])}catch(t){}}async function c(){F()}function f(){const t=E();u.success(`values:${JSON.stringify(t)}`)}function o(){m({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:B,schemas:e,handleSubmit:t=>{u.success(`click search,values:${JSON.stringify(t)}`)},getFormValues:f,setFormValues:o,validateForm:d,resetValidate:c,reset:n}}}),N={class:"mb-4"};function h(u,e,B,C,F,E){const n=a("el-button"),m=a("CountdownInput"),d=a("BasicForm"),c=a("CollapseContainer"),f=a("PageWrapper");return D(),q(f,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:r(()=>[w("div",N,[l(n,{onClick:e[0]||(e[0]=o=>u.validateForm())},{default:r(()=>[p("\u624B\u52A8\u6821\u9A8C\u8868\u5355")]),_:1}),l(n,{onClick:e[1]||(e[1]=o=>u.resetValidate())},{default:r(()=>[p("\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F")]),_:1}),l(n,{onClick:e[2]||(e[2]=o=>u.getFormValues())},{default:r(()=>[p("\u83B7\u53D6\u8868\u5355\u503C")]),_:1}),l(n,{onClick:e[3]||(e[3]=o=>u.setFormValues())},{default:r(()=>[p("\u8BBE\u7F6E\u8868\u5355\u503C")]),_:1}),l(n,{onClick:e[4]||(e[4]=o=>u.reset())},{default:r(()=>[p("\u91CD\u7F6E")]),_:1})]),l(c,{title:"\u8868\u5355\u6821\u9A8C"},{default:r(()=>[l(d,{onRegister:u.register},{countdown:r(({model:o,field:t})=>[l(m,{modelValue:o[t],"onUpdate:modelValue":i=>o[t]=i},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["onRegister"])]),_:1})]),_:1})}const ge=v(I,[["render",h]]);export{ge as default};
