var c=(e,r,t)=>new Promise((n,o)=>{var i=a=>{try{s(t.next(a))}catch(p){o(p)}},f=a=>{try{s(t.throw(a))}catch(p){o(p)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(i,f);s((t=t.apply(e,r)).next())});import{u as m}from"./useScript-33e77a8f.js";import{E as u,r as d,o as l,n as w,u as h,p as _,q as M,Z as y}from"./vue-d691a816.js";import{_ as b}from"./index-795cdaa0.js";import"./elementui-66980f2a.js";const g="https://webapi.amap.com/maps?v=2.0&key=738ebb785e3983d30f4b1949e31b400a",A=u({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=d(null),{toPromise:r}=m({src:g});function t(){return c(this,null,function*(){yield r(),yield w();const n=h(e);if(!n)return;const o=window.AMap;new o.Map(n,{zoom:11,center:[116.404,39.915],viewMode:"3D"})})}return l(()=>{t()}),{wrapRef:e}}});function k(e,r,t,n,o,i){return _(),M("div",{ref:"wrapRef",style:y({height:e.height,width:e.width})},null,4)}const R=b(A,[["render",k]]);export{R as default};
