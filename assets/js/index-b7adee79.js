var d=(s,u,e)=>new Promise((a,n)=>{var i=o=>{try{r(e.next(o))}catch(p){n(p)}},t=o=>{try{r(e.throw(o))}catch(p){n(p)}},r=o=>o.done?a(o.value):Promise.resolve(o.value).then(i,t);r((e=e.apply(s,u)).next())});import{P as f}from"./index-46033b04.js";import{B as b}from"./BasicForm-4389fd93.js";import{u as F}from"./useForm-944717e0.js";import{C as j}from"./index-9b3b57b7.js";import{_ as B,f as C}from"./index-8e69729b.js";import{y as x,Z as m,z as g,G as w,H as c,R as l}from"./ex-pkg-@vue-6f720869.js";import"./index-bcceac7a.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-element-plus-6a2cfc13.js";import"./ex-pkg-mockjs-abb76a9d.js";import"./index-3ab93494.js";import"./index-29499780.js";import"./useAttrs-fe96f36e.js";import"./useWindowSizeFn-414339e6.js";import"./index-e74afd53.js";import"./tsxHelper-fbe4f683.js";import"./useTimeout-e48d95f5.js";import"./propTypes-fbd6d81b.js";import"./download-aa6ecb89.js";import"./base64Conver-6d09fa87.js";import"./index-b55369a6.js";import"./index-9bb5d20f.js";import"./useCopyToClipboard-3734008b.js";import"./index-583c82b1.js";const E=[{field:"passwordOld",label:"\u5F53\u524D\u5BC6\u7801",component:"ElInput",componentProps:{showPassword:!0},required:!0},{field:"passwordNew",label:"\u65B0\u5BC6\u7801",component:"StrengthMeter",componentProps:{placeholder:"\u65B0\u5BC6\u7801"},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"}]},{field:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",component:"ElInput",componentProps:{showPassword:!0},dynamicRules:({values:s})=>[{required:!0,validator:(u,e)=>e?e!==s.passwordNew?Promise.reject("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4!"):Promise.resolve():Promise.reject("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A")}]}],P=x({name:"ChangePassword",components:{BasicForm:b,PageWrapper:f,CollapseContainer:j},setup(){const{createMessage:s}=C(),[u,{validate:e,resetFields:a,getFieldsValue:n}]=F({size:"large",labelWidth:100,colProps:{span:16},schemas:E,submitButtonOptions:{text:"\u786E\u8BA4"},resetButtonOptions:{text:"\u91CD\u7F6E"}});function i(){return d(this,null,function*(){try{yield e();const{passwordOld:t,passwordNew:r}=n();console.table(t,r),s.success("\u91CD\u7F6E\u6210\u529F")}catch(t){}})}return{register:u,resetFields:a,handleSubmit:i}}});function _(s,u,e,a,n,i){const t=m("BasicForm"),r=m("CollapseContainer"),o=m("PageWrapper");return g(),w(o,{title:"\u4FEE\u6539\u5F53\u524D\u7528\u6237\u5BC6\u7801",description:"\u4FEE\u6539\u6210\u529F\u540E\u4F1A\u81EA\u52A8\u9000\u51FA\u5F53\u524D\u767B\u5F55\uFF01"},{default:c(()=>[l(r,{title:"\u57FA\u7840\u793A\u4F8B",canExpan:!1},{default:c(()=>[l(t,{onRegister:s.register,onSubmit:s.handleSubmit,onReset:s.resetFields},null,8,["onRegister","onSubmit","onReset"])]),_:1})]),_:1})}var U=B(P,[["render",_]]);export{U as default};
