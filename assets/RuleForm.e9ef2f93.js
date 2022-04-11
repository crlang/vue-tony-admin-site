var f=(e,s,u)=>new Promise((p,d)=>{var m=o=>{try{r(u.next(o))}catch(l){d(l)}},t=o=>{try{r(u.throw(o))}catch(l){d(l)}},r=o=>o.done?p(o.value):Promise.resolve(o.value).then(m,t);r((u=u.apply(e,s)).next())});import{B as b}from"./BasicForm.e23a97e1.js";import{u as g}from"./useForm.48835dfb.js";import{C as E}from"./index.4cd5987a.js";import{_ as j,f as _}from"./index.b3c9ad7f.js";import{P as A}from"./index.2db0f4ce.js";import{i as k}from"./system.42e21398.js";import{u as v}from"./ex-pkg-element-plus.1726aa79.js";import{y as x,Z as B,z as P,G as h,H as n,K as y,R as a,P as c}from"./ex-pkg-@vue.dfd8e273.js";import"./index.a1d19e61.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./index.ec087bd6.js";import"./index.46c5c8ac.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./index.cd4e42f7.js";import"./tsxHelper.88158ea5.js";import"./useTimeout.be9115ef.js";import"./propTypes.a1efa9e6.js";import"./download.37b1865e.js";import"./base64Conver.bb012c73.js";import"./index.bca35d58.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./index.b685e481.js";import"./useCopyToClipboard.b484edcb.js";import"./index.755f7294.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const C=[{field:"field1",component:"ElInput",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"ElInput",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"ElInputNumber",show:!1},{field:"field3",component:"ElDatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"ElDatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"ElSelect",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{multiple:!0,options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"ElInput",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,s,u)=>f(void 0,null,function*(){return s||u(new Error("\u503C\u4E0D\u80FD\u4E3A\u7A7A")),s==="1"&&u(new Error("\u503C\u4E0D\u80FD\u4E3A1")),u()}),trigger:"change"}]},{field:"field5",component:"ElCheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},required:!0,componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"ElRadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"ElInput",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,s,u){k(s).then(()=>u()).catch(p=>{u(new Error(p.message||"\u9A8C\u8BC1\u5931\u8D25"))})}}]}],D=x({components:{ElButton:v,BasicForm:b,CollapseContainer:E,PageWrapper:A},setup(){const{createMessage:e}=_(),[s,{validateField:u,clearValidate:p,getFieldsValue:d,resetFields:m,setFieldsValue:t}]=g({labelWidth:140,schemas:C,actionColOptions:{span:24}});function r(){return f(this,null,function*(){try{const i=yield u(["field1","field2"]);console.log("passing",i)}catch(i){console.log("not passing",i)}})}function o(){return f(this,null,function*(){p()})}function l(){const i=d();e.success("values:"+JSON.stringify(i))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:s,schemas:C,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},getFormValues:l,setFormValues:F,validateForm:r,resetValidate:o,resetFields:m}}}),V={class:"mb-4"},q=c("\u624B\u52A8\u6821\u9A8C\u8868\u5355"),w=c("\u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F"),S=c("\u83B7\u53D6\u8868\u5355\u503C"),I=c("\u8BBE\u7F6E\u8868\u5355\u503C"),N=c("\u91CD\u7F6E");function M(e,s,u,p,d,m){const t=B("el-button"),r=B("BasicForm"),o=B("CollapseContainer"),l=B("PageWrapper");return P(),h(l,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[y("div",V,[a(t,{onClick:e.validateForm},{default:n(()=>[q]),_:1},8,["onClick"]),a(t,{onClick:e.resetValidate},{default:n(()=>[w]),_:1},8,["onClick"]),a(t,{onClick:e.getFormValues},{default:n(()=>[S]),_:1},8,["onClick"]),a(t,{onClick:e.setFormValues},{default:n(()=>[I]),_:1},8,["onClick"]),a(t,{onClick:e.resetFields},{default:n(()=>[N]),_:1},8,["onClick"])]),a(o,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[a(r,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Be=j(D,[["render",M]]);export{Be as default};
