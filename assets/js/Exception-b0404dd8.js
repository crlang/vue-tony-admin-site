import{E as t,e as x,f as y,u as N,P as g}from"./index-26bedde3.js";import{cI as O}from"./ex-pkg-vendor-bb3f8859.js";import{u as R,F as A}from"./ex-pkg-element-plus-f609432a.js";import{y as S,a as k,l as m,u as e,R as o}from"./ex-pkg-@vue-feb543c0.js";import"./ex-pkg-mockjs-ec7a233b.js";var G="/vue-tony-admin-site/assets/no-data.15c5ccd1.svg",P="/vue-tony-admin-site/assets/net-error.23d314b7.svg",C="/vue-tony-admin-site/assets/403.a67ce326.svg",h="/vue-tony-admin-site/assets/404.f3a2336a.svg",j="/vue-tony-admin-site/assets/500.9ac4cbde.svg",M=S({name:"ErrorPage",props:{status:{type:Number,default:t.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(s){const a=k(new Map),{query:b}=O(),n=x(),r=y(),{prefixCls:v}=N("app-exception-page"),_=m(()=>{const{status:l}=b,{status:i}=s;return Number(l)||i}),T=m(()=>e(a).get(e(_))),c="\u8FD4\u56DE\u767B\u5F55",u="\u8FD4\u56DE\u9996\u9875";return e(a).set(t.PAGE_NOT_ACCESS,{title:"403",status:`${t.PAGE_NOT_ACCESS}`,subTitle:"\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u6B64\u9875\u9762",btnText:s.full?c:u,handler:()=>s.full?n(g.BASE_LOGIN):n(),icon:C}),e(a).set(t.PAGE_NOT_FOUND,{title:"404",status:`${t.PAGE_NOT_FOUND}`,subTitle:"\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728",btnText:s.full?c:u,handler:()=>s.full?n(g.BASE_LOGIN):n(),icon:h}),e(a).set(t.ERROR,{title:"500",status:`${t.ERROR}`,subTitle:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u62A5\u544A\u9519\u8BEF",btnText:u,handler:()=>n(),icon:j}),e(a).set(t.PAGE_NOT_DATA,{title:"\u5F53\u524D\u9875\u65E0\u6570\u636E",subTitle:"",btnText:"\u5237\u65B0",handler:()=>r(),icon:G}),e(a).set(t.NET_WORK_ERROR,{title:"\u7F51\u7EDC\u9519\u8BEF",subTitle:"\u62B1\u6B49\uFF0C\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\uFF01",btnText:"\u5237\u65B0",handler:()=>r(),icon:P}),()=>{const{title:l,subTitle:i,btnText:d,icon:f,handler:E,status:p}=e(T)||{};return o(A,{class:v,status:p,title:s.title||l,"sub-title":s.subTitle||i},{icon:()=>f?o("img",{src:f},null):null,extra:()=>d&&o(R,{type:"primary",onClick:E},{default:()=>d})})}}});export{M as default};
