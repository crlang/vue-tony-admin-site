import{P as c}from"./index-daa1bcd9.js";import{de as i}from"./ex-pkg-vendor-69b4619e.js";import{_ as l}from"./index-94a7e7e0.js";import{x as d}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as g,a as u,Z as r,z as f,G as _,H as n,R as p,P as s}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-abb76a9d.js";const b=g({name:"AppLogo",components:{ElButton:d,PageWrapper:c},setup(){const e=u(!1);function t(){i({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function a(){i({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;",onLoadingStart:function(){e.value=!0},onLoadingEnd:function(){e.value=!1}})}return{jsonPrint:t,imagePrint:a,printLoading:e}}}),h=s("Json Print"),k=s("Image Print");function P(e,t,a,j,x,v){const o=r("el-button"),m=r("PageWrapper");return f(),_(m,{title:"\u6253\u5370\u793A\u4F8B"},{default:n(()=>[p(o,{type:"primary",onClick:e.jsonPrint},{default:n(()=>[h]),_:1},8,["onClick"]),p(o,{type:"primary",class:"mt-5",loading:e.printLoading,onClick:e.imagePrint},{default:n(()=>[k]),_:1},8,["loading","onClick"])]),_:1})}var S=l(b,[["render",P]]);export{S as default};
