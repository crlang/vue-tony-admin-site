import{D as u}from"./index.31a42f9b.js";import{P as p}from"./index.2db0f4ce.js";import{_ as m}from"./index.b3c9ad7f.js";import{u as c}from"./useDescription.31f4d37b.js";import{y as d,Z as r,z as l,G as f,H as x,R as s}from"./ex-pkg-@vue.dfd8e273.js";import"./index.4cd5987a.js";import"./index.755f7294.js";import"./tsxHelper.88158ea5.js";import"./index.cd4e42f7.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-element-plus.1726aa79.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./useTimeout.be9115ef.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./useAttrs.e78ff19a.js";import"./ex-pkg-@iconify.345c6dc9.js";const o={username:"tony",nickName:"Tony Water",age:101,phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},i=[{field:"username",label:"\u7528\u6237\u540D"},{field:"tag",label:"\u6807\u7B7E",show:e=>e.age>99},{field:"nickName",label:"\u6635\u79F0",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],g=d({components:{Description:u,PageWrapper:p},setup(){const[e]=c({title:"useDescription",data:o,schema:i});return{demoData:o,schema:i,register:e}}});function j(e,t,b,h,D,k){const a=r("Description"),n=r("PageWrapper");return l(),f(n,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:x(()=>[s(a,{title:"\u57FA\u7840\u793A\u4F8B",column:3,border:"",data:e.demoData,schema:e.schema},null,8,["data","schema"]),s(a,{class:"my-4",title:"\u5782\u76F4\u793A\u4F8B",direction:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,border:"",data:e.demoData,schema:e.schema},null,8,["data","schema"]),s(a,{onRegister:e.register},null,8,["onRegister"])]),_:1})}var G=m(g,[["render",j]]);export{G as default};
