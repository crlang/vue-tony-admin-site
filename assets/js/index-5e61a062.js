var d=(u,a,o)=>new Promise((t,s)=>{var l=e=>{try{r(o.next(e))}catch(n){s(n)}},i=e=>{try{r(o.throw(e))}catch(n){s(n)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(l,i);r((o=o.apply(u,a)).next())});import{B as F}from"./BasicForm-7e56ab34.js";import{u as f}from"./useForm-9a91b2d5.js";import{_ as E,f as B}from"./index-034694ef.js";import{P as b}from"./index-fe480704.js";import{y as C,z as _}from"./ex-pkg-element-plus-fdfdae45.js";import{y as x,Z as p,z as j,G as g,H as c,R as m}from"./ex-pkg-@vue-6f720869.js";import"./index-504d29a3.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";import"./index-ccc912f1.js";import"./index-ff107243.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-f8d8829f.js";import"./index-d0007c65.js";import"./index-4566a42e.js";import"./tsxHelper-97245be0.js";import"./index-c7b8aefc.js";import"./useTimeout-deb974d8.js";import"./propTypes-7bd4f998.js";import"./download-1f1abd5f.js";import"./base64Conver-6d09fa87.js";import"./index-7fc3c83a.js";import"./index-c7eaf852.js";import"./useCopyToClipboard-963b5f35.js";const A=[{field:"title",component:"ElInput",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"ElDatePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0,componentProps:{type:"daterange"}},{field:"target",component:"ElInput",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",type:"textarea",rows:4},required:!0},{field:"metrics",component:"ElInput",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",type:"textarea",rows:4},required:!0},{field:"client",component:"ElInput",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"ElInput",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"ElInputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"ElRadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"ElSelect",label:" ",show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const D=x({name:"FormBasicPage",components:{ElRow:C,ElCol:_,BasicForm:F,PageWrapper:b},setup(){const{createMessage:u}=B(),[a,{validate:o,setProps:t}]=f({labelWidth:160,schemas:A,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:s});function s(){return d(this,null,function*(){try{yield o(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(l){}})}return{register:a}}});function P(u,a,o,t,s,l){const i=p("BasicForm"),r=p("el-col"),e=p("el-row"),n=p("PageWrapper");return j(),g(n,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",description:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002"},{default:c(()=>[m(e,null,{default:c(()=>[m(r,{xl:{span:10,offset:7},lg:{span:12,offset:6},md:{span:16,offset:4},sm:{span:24,offset:0}},{default:c(()=>[m(i,{onRegister:u.register},null,8,["onRegister"])]),_:1})]),_:1})]),_:1})}var X=E(D,[["render",P],["__scopeId","data-v-344e5750"]]);export{X as default};
