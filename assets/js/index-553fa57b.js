var F=(e,n,t)=>new Promise((a,p)=>{var m=u=>{try{o(t.next(u))}catch(i){p(i)}},r=u=>{try{o(t.throw(u))}catch(i){p(i)}},o=u=>u.done?a(u.value):Promise.resolve(u.value).then(m,r);o((t=t.apply(e,n)).next())});import{P as _}from"./index-99fe7abb.js";import{_ as f,h as E}from"./index-91eee367.js";import{t as C}from"./account-0bf88f5c.js";import{Y as k,x as D}from"./ex-pkg-element-plus-6a2cfc13.js";import{y as x,Z as l,z as A,G as y,H as s,R as d,K as B,P as c}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-vendor-69b4619e.js";import"./ex-pkg-mockjs-abb76a9d.js";const b=x({name:"TestSessionTimeout",components:{ElCard:k,ElButton:D,PageWrapper:_},setup(){const e=E();function n(){return F(this,null,function*(){e.setToken(void 0),e.setSessionTimeout(!0)})}function t(){return F(this,null,function*(){try{yield C()}catch(a){console.error("\u63A5\u53E3\u8BBF\u95EE\u9519\u8BEF\uFF1A",a.message||"\u9519\u8BEF")}})}return{test1:n,test2:t}}}),g=B("div",null,[c("\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3("),B("span",{style:{"font-size":"60%",color:"#666"}},"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"),c(")")],-1),h=c("HttpStatus == 401"),j=c("Response.code == 401");function v(e,n,t,a,p,m){const r=l("el-button"),o=l("el-card"),u=l("PageWrapper");return A(),y(u,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",description:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:s(()=>[d(o,null,{header:s(()=>[g]),default:s(()=>[d(r,{type:"primary",plain:"",onClick:e.test1},{default:s(()=>[h]),_:1},8,["onClick"]),d(r,{class:"ml-4",type:"primary",onClick:e.test2},{default:s(()=>[j]),_:1},8,["onClick"])]),_:1})]),_:1})}var z=f(b,[["render",v]]);export{z as default};
