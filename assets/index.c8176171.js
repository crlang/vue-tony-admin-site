import{D as i}from"./index.06a1fff3.js";import{P as p}from"./index.04776c9c.js";import{_ as m}from"./index.16f9732e.js";import{u as c}from"./useDescription.dff608d6.js";import{y as l,Z as r,z as d,G as f,H as x,R as s}from"./ex-pkg-@vue.dfd8e273.js";import"./useAttrs.e78ff19a.js";import"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";const o={username:"tony",nickName:"Tony Water",age:101,phone:"15695909xxx",email:"190848757@qq.com",addr:"\u53A6\u95E8\u5E02\u601D\u660E\u533A",sex:"\u7537",certy:"3504256199xxxxxxxxx",tag:"orange"},n=[{field:"username",label:"\u7528\u6237\u540D"},{field:"tag",label:"\u6807\u7B7E",show:e=>e.age>99},{field:"nickName",label:"\u6635\u79F0",render:(e,t)=>`${t.username}-${e}`},{field:"phone",label:"\u8054\u7CFB\u7535\u8BDD"},{field:"email",label:"\u90AE\u7BB1"},{field:"addr",label:"\u5730\u5740"}],g=l({components:{Description:i,PageWrapper:p},setup(){const[e]=c({title:"useDescription",data:o,schema:n});return{demoData:o,schema:n,register:e}}});function j(e,t,h,D,k,b){const a=r("Description"),u=r("PageWrapper");return d(),f(u,{title:"\u8BE6\u60C5\u7EC4\u4EF6\u793A\u4F8B"},{default:x(()=>[s(a,{title:"\u57FA\u7840\u793A\u4F8B",column:3,border:"",data:e.demoData,schema:e.schema},null,8,["data","schema"]),s(a,{class:"my-4",title:"\u5782\u76F4\u793A\u4F8B",direction:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,border:"",data:e.demoData,schema:e.schema},null,8,["data","schema"]),s(a,{onRegister:e.register},null,8,["onRegister"])]),_:1})}var q=m(g,[["render",j]]);export{q as default};
