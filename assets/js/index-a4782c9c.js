import{P as c}from"./index-99fe7abb.js";import{de as i}from"./ex-pkg-vendor-69b4619e.js";import{_ as l}from"./index-91eee367.js";import{x as g}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as u,a as d,Z as r,z as f,G as _,H as n,R as p,P as s}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-abb76a9d.js";const b=u({name:"AppLogo",components:{ElButton:g,PageWrapper:c},setup(){const e=d(!1);function t(){i({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function o(){i({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;",onLoadingStart:function(){e.value=!0},onLoadingEnd:function(){e.value=!1}})}return{jsonPrint:t,imagePrint:o,printLoading:e}}}),h=s("Json Print"),k=s("Image Print");function P(e,t,o,j,x,v){const a=r("el-button"),m=r("PageWrapper");return f(),_(m,{title:"\u6253\u5370\u793A\u4F8B"},{default:n(()=>[p(a,{type:"primary",onClick:e.jsonPrint},{default:n(()=>[h]),_:1},8,["onClick"]),p(a,{type:"primary",class:"mt-5",loading:e.printLoading,onClick:e.imagePrint},{default:n(()=>[k]),_:1},8,["loading","onClick"])]),_:1})}var S=l(b,[["render",P]]);export{S as default};
