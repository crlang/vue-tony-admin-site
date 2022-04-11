var d=(e,n,o)=>new Promise((t,s)=>{var l=u=>{try{r(o.next(u))}catch(p){s(p)}},i=u=>{try{r(o.throw(u))}catch(p){s(p)}},r=u=>u.done?t(u.value):Promise.resolve(u.value).then(l,i);r((o=o.apply(e,n)).next())});import{B as F}from"./BasicForm.e23a97e1.js";import{u as f}from"./useForm.48835dfb.js";import{_ as E,f as b}from"./index.b3c9ad7f.js";import{P as B}from"./index.2db0f4ce.js";import{y as C,z as x}from"./ex-pkg-element-plus.1726aa79.js";import{y as _,Z as a,z as j,G as g,H as c,R as m}from"./ex-pkg-@vue.dfd8e273.js";import"./index.a1d19e61.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./index.ec087bd6.js";import"./index.46c5c8ac.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./index.4cd5987a.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./useTimeout.be9115ef.js";import"./propTypes.a1efa9e6.js";import"./download.37b1865e.js";import"./base64Conver.bb012c73.js";import"./index.bca35d58.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./index.b685e481.js";import"./useCopyToClipboard.b484edcb.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const A=[{field:"title",component:"ElInput",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"ElDatePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0,componentProps:{type:"daterange"}},{field:"target",component:"ElInput",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",type:"textarea",rows:4},required:!0},{field:"metrics",component:"ElInput",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",type:"textarea",rows:4},required:!0},{field:"client",component:"ElInput",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"ElInput",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"ElInputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"ElRadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"ElSelect",label:" ",show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const D=_({name:"FormBasicPage",components:{ElRow:C,ElCol:x,BasicForm:F,PageWrapper:B},setup(){const{createMessage:e}=b(),[n,{validate:o,setProps:t}]=f({labelWidth:160,schemas:A,actionColOptions:{offset:8,span:12},submitButtonOptions:{text:"\u63D0\u4EA4"},submitFunc:s});function s(){return d(this,null,function*(){try{yield o(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),e.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(l){}})}return{register:n}}});function v(e,n,o,t,s,l){const i=a("BasicForm"),r=a("el-col"),u=a("el-row"),p=a("PageWrapper");return j(),g(p,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",description:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002"},{default:c(()=>[m(u,null,{default:c(()=>[m(r,{xl:{span:10,offset:7},lg:{span:12,offset:6},md:{span:16,offset:4},sm:{span:24,offset:0}},{default:c(()=>[m(i,{onRegister:e.register},null,8,["onRegister"])]),_:1})]),_:1})]),_:1})}var te=E(D,[["render",v],["__scopeId","data-v-344e5750"]]);export{te as default};
