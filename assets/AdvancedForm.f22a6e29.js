import{B as m}from"./BasicForm.e762b6e5.js";import{u as p}from"./useForm.51dec503.js";import{_ as l,aa as f}from"./index.dea57c76.js";import{P as F}from"./index.238d148c.js";import{U as d}from"./data.fb25ad62.js";import{x as B,X as r,z as j,Y as C,a2 as a,$ as s}from"./vendor.6c1ff918.js";import"./index.8d342d10.js";import"./index.8eeddf42.js";import"./index.14049971.js";import"./useAttrs.1cff00fd.js";import"./useWindowSizeFn.b326ae88.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.765012d5.js";import"./base64Conver.bb012c73.js";import"./index.87273d76.js";const _=B({components:{BasicForm:m,CollapseContainer:f,PageWrapper:F},setup(){const[o]=p({labelWidth:120,schemas:d,actionColOptions:{span:24},showAdvancedButton:!0}),t=[];for(let e=14;e<30;e++)t.push({field:"field"+e,component:"ElInput",label:"\u5B57\u6BB5"+e,colProps:{span:8}});const[n]=p({labelWidth:120,schemas:[...d,{field:"",component:"ElDivider",label:"\u66F4\u591A\u5B57\u6BB5"},...t],actionColOptions:{span:24},showAdvancedButton:!0,alwaysShowLines:1});return{register:o,register1:n}}});function h(o,t,n,e,b,g){const i=r("BasicForm"),u=r("CollapseContainer"),c=r("PageWrapper");return j(),C(c,{title:"\u53EF\u6298\u53E0\u8868\u5355\u793A\u4F8B"},{default:a(()=>[s(u,{title:"\u57FA\u7840\u6536\u7F29\u793A\u4F8B"},{default:a(()=>[s(i,{onRegister:o.register},null,8,["onRegister"])]),_:1}),s(u,{title:"\u8D85\u8FC73\u884C\u81EA\u52A8\u6536\u8D77\uFF0C\u6298\u53E0\u65F6\u4FDD\u75592\u884C",class:"mt-4"},{default:a(()=>[s(i,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}var I=l(_,[["render",h]]);export{I as default};
