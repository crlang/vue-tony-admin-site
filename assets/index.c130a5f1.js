var p=(e,n,t)=>new Promise((a,F)=>{var B=u=>{try{o(t.next(u))}catch(i){F(i)}},r=u=>{try{o(t.throw(u))}catch(i){F(i)}},o=u=>u.done?a(u.value):Promise.resolve(u.value).then(B,r);o((t=t.apply(e,n)).next())});import{P as m}from"./index.14ff926d.js";import{_ as f,h as E}from"./index.c38c7de5.js";import{t as C}from"./account.c4d8fdc1.js";import{x as D,bo as A,aI as k,Y as d,z as h,Z as x,a3 as s,a0 as l,D as _,ab as c}from"./vendor.041d4bc7.js";import"./useMenuSetting.8bd75ac6.js";const y=D({name:"TestSessionTimeout",components:{ElCard:A,ElButton:k,PageWrapper:m},setup(){const e=E();function n(){return p(this,null,function*(){e.setToken(void 0),e.setSessionTimeout(!0)})}function t(){return p(this,null,function*(){try{yield C()}catch(a){console.log("\u63A5\u53E3\u8BBF\u95EE\u9519\u8BEF\uFF1A",a.message||"\u9519\u8BEF")}})}return{test1:n,test2:t}}}),b=_("div",null,[c("\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3("),_("span",{style:{"font-size":"60%",color:"#666"}},"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"),c(")")],-1),g=c("HttpStatus == 401"),S=c("Response.code == 401");function T(e,n,t,a,F,B){const r=d("el-button"),o=d("el-card"),u=d("PageWrapper");return h(),x(u,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:s(()=>[l(o,null,{header:s(()=>[b]),default:s(()=>[l(r,{type:"primary",plain:"",onClick:e.test1},{default:s(()=>[g]),_:1},8,["onClick"]),l(r,{class:"ml-4",type:"primary",onClick:e.test2},{default:s(()=>[S]),_:1},8,["onClick"])]),_:1})]),_:1})}var W=f(y,[["render",T]]);export{W as default};
