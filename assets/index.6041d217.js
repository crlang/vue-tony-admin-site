<<<<<<<< HEAD:assets/index.f5a2cd13.js
var F=(u,l,o)=>new Promise((t,r)=>{var a=e=>{try{p(o.next(e))}catch(n){r(n)}},i=e=>{try{p(o.throw(e))}catch(n){r(n)}},p=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,i);p((o=o.apply(u,l)).next())});import{B as E}from"./index.4ad4c889.js";import{_ as d,d as B,e as s,o as f,j as C,i as m,h as c,z as _}from"./index.12e2b36d.js";import{E as b,a as A}from"./index.02016e21.js";import{u as D}from"./useForm.e1560826.js";import"./index.f6b9c428.js";import"./index.69a95a3c.js";import"./row.8fd2210e.js";import"./drawer.06fffbf8.js";import"./card.a2e976ce.js";import"./index.6adb7f1a.js";import"./index.fb2559fd.js";import"./index.77e99735.js";import"./index.b028bbcd.js";import"./isEqual.1822c1b9.js";import"./_baseIsEqual.df6af5a3.js";import"./form-item.c3bc9277.js";import"./dropdown.28433873.js";import"./index.f2256943.js";import"./tsxHelper.a491e40f.js";import"./useWindowSizeFn.5d430d85.js";import"./index.e79189fa.js";import"./index.00e0b22a.js";import"./index.9cb3f094.js";import"./refs.b779a62e.js";import"./use-dialog.24721d6a.js";import"./index.7980a1b4.js";import"./index.a5c4e050.js";import"./_baseUniq.bcd65e0c.js";import"./index.9dc62547.js";import"./index.a88b8150.js";import"./index.76a9ee93.js";import"./index.ec8e6641.js";import"./index.a2a3be95.js";const g=[{field:"title",component:"ElInput",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"ElDatePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0,componentProps:{type:"daterange"}},{field:"target",component:"ElInput",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",type:"textarea",rows:4},required:!0},{field:"metrics",component:"ElInput",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",type:"textarea",rows:4},required:!0},{field:"client",component:"ElInput",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"ElInput",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"ElInputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"ElRadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"ElSelect",label:" ",show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const P=B({name:"FormBasicPage",components:{ElRow:b,ElCol:A,BasicForm:E},setup(){const{createMessage:u}=_(),[l,{validate:o,setFormProps:t}]=D({labelWidth:160,colProps:{span:24},schemas:g,actionColProps:{offset:8,span:12},submitButtonOptions:{btnText:"\u63D0\u4EA4"},submitFn:r});function r(){return F(this,null,function*(){try{yield o(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(a){}})}return{register:l}}});function h(u,l,o,t,r,a){const i=s("BasicForm"),p=s("el-col"),e=s("el-row"),n=s("PageWrapper");return f(),C(n,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",description:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002"},{default:m(()=>[c(e,null,{default:m(()=>[c(p,{xl:{span:10,offset:7},lg:{span:12,offset:6},md:{span:16,offset:4},sm:{span:24,offset:0}},{default:m(()=>[c(i,{onRegister:u.register},null,8,["onRegister"])]),_:1})]),_:1})]),_:1})}var nu=d(P,[["render",h],["__scopeId","data-v-5047a05e"]]);export{nu as default};
========
var F=(u,l,o)=>new Promise((t,r)=>{var a=e=>{try{p(o.next(e))}catch(n){r(n)}},i=e=>{try{p(o.throw(e))}catch(n){r(n)}},p=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,i);p((o=o.apply(u,l)).next())});import{B as d}from"./index.bd827693.js";import{_ as E,d as B,p as f,e as s,o as C,j as _,i as m,h as c}from"./index.61be89a1.js";import{E as b,a as A}from"./index.e035b73c.js";import{u as D}from"./useForm.34aa1f9e.js";import"./index.24db9bec.js";import"./index.8337b38c.js";import"./row.2741a82e.js";import"./drawer.0f38de7e.js";import"./card.dd13a1ef.js";import"./index.7fce1749.js";import"./index.88f08dee.js";import"./index.91f8c4ba.js";import"./index.3df10ae2.js";import"./isEqual.755d4a14.js";import"./_baseIsEqual.3f9a7929.js";import"./form-item.3a95dedf.js";import"./dropdown.7e7b7d81.js";import"./index.0526f740.js";import"./tsxHelper.e74009f7.js";import"./useWindowSizeFn.a3ba0925.js";import"./index.9574a6b4.js";import"./index.00e0b22a.js";import"./index.37ecb140.js";import"./refs.a78f8491.js";import"./use-dialog.8207f305.js";import"./index.a1a61c87.js";import"./index.761cf9b9.js";import"./_baseUniq.8c6df5cb.js";import"./index.8a2b5e67.js";import"./index.bdf9eec6.js";import"./index.87191bef.js";import"./index.625e9d3f.js";import"./index.1c463f4e.js";const g=[{field:"title",component:"ElInput",label:"\u6807\u9898",componentProps:{placeholder:"\u7ED9\u76EE\u6807\u8D77\u4E2A\u540D\u5B57"},required:!0},{field:"time",component:"ElDatePicker",label:"\u8D77\u6B62\u65E5\u671F",required:!0,componentProps:{type:"daterange"}},{field:"target",component:"ElInput",label:"\u76EE\u6807\u63CF\u8FF0",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u9636\u6BB5\u6027\u5DE5\u4F5C\u76EE\u6807",type:"textarea",rows:4},required:!0},{field:"metrics",component:"ElInput",label:"\u8861\u91CF\u6807\u51C6",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u8861\u91CF\u6807\u51C6",type:"textarea",rows:4},required:!0},{field:"client",component:"ElInput",label:"\u5BA2\u6237",helpMessage:"\u76EE\u6807\u7684\u670D\u52A1\u5BF9\u8C61",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u63CF\u8FF0\u4F60\u670D\u52A1\u7684\u5BA2\u6237\uFF0C\u5185\u90E8\u5BA2\u6237\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7"}},{field:"inviteer",component:"ElInput",label:"\u9080\u8BC4\u4EBA",subLabel:"( \u9009\u586B )",componentProps:{placeholder:"\u8BF7\u76F4\u63A5 @\u59D3\u540D\uFF0F\u5DE5\u53F7\uFF0C\u6700\u591A\u53EF\u9080\u8BF7 5 \u4EBA"}},{field:"weights",component:"ElInputNumber",label:"\u6743\u91CD",subLabel:"( \u9009\u586B )",componentProps:{formatter:u=>u?`${u}%`:"",parser:u=>u.replace("%",""),placeholder:"\u8BF7\u8F93\u5165"}},{field:"disclosure",component:"ElRadioGroup",label:"\u76EE\u6807\u516C\u5F00",itemProps:{extra:"\u5BA2\u6237\u3001\u9080\u8BC4\u4EBA\u9ED8\u8BA4\u88AB\u5206\u4EAB"},componentProps:{options:[{label:"\u516C\u5F00",value:"1"},{label:"\u90E8\u5206\u516C\u5F00",value:"2"},{label:"\u4E0D\u516C\u5F00",value:"3"}]}},{field:"disclosurer",component:"ElSelect",label:" ",show:({model:u})=>u.disclosure==="2",componentProps:{placeholder:"\u516C\u5F00\u7ED9",mode:"multiple",options:[{label:"\u540C\u4E8B1",value:"1"},{label:"\u540C\u4E8B2",value:"2"},{label:"\u540C\u4E8B3",value:"3"}]}}];const P=B({name:"FormBasicPage",components:{ElRow:b,ElCol:A,BasicForm:d},setup(){const{createMessage:u}=f(),[l,{validate:o,setFormProps:t}]=D({labelWidth:160,colProps:{span:24},schemas:g,actionColProps:{offset:8,span:12},submitButtonOptions:{btnText:"\u63D0\u4EA4"},submitFn:r});function r(){return F(this,null,function*(){try{yield o(),t({submitButtonOptions:{loading:!0}}),setTimeout(()=>{t({submitButtonOptions:{loading:!1}}),u.success("\u63D0\u4EA4\u6210\u529F\uFF01")},2e3)}catch(a){}})}return{register:l}}});function h(u,l,o,t,r,a){const i=s("BasicForm"),p=s("el-col"),e=s("el-row"),n=s("PageWrapper");return C(),_(n,{title:"\u57FA\u7840\u8868\u5355",contentBackground:"",description:"\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002"},{default:m(()=>[c(e,null,{default:m(()=>[c(p,{xl:{span:10,offset:7},lg:{span:12,offset:6},md:{span:16,offset:4},sm:{span:24,offset:0}},{default:m(()=>[c(i,{onRegister:u.register},null,8,["onRegister"])]),_:1})]),_:1})]),_:1})}var nu=E(P,[["render",h],["__scopeId","data-v-6e932d62"]]);export{nu as default};
>>>>>>>> 8639c16ee1bdf131236610745881512f6ca8b8ca:assets/index.6041d217.js
