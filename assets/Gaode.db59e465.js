var c=(e,o,t)=>new Promise((a,s)=>{var i=p=>{try{r(t.next(p))}catch(n){s(n)}},d=p=>{try{r(t.throw(p))}catch(n){s(n)}},r=p=>p.done?a(p.value):Promise.resolve(p.value).then(i,d);r((t=t.apply(e,o)).next())});import{u as m}from"./useScript.1fd040be.js";import{_ as f}from"./index.b3c9ad7f.js";import{y as u,a as l,q as g,z as k,A as w,Y as h,U as j,u as x}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-element-plus.1726aa79.js";import"./ex-pkg-@element-plus.3c8245e2.js";import"./ex-pkg-vendor.002cab22.js";import"./ex-pkg-mockjs.d050e972.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";const b="https://webapi.amap.com/maps?v=2.0&key=738ebb785e3983d30f4b1949e31b400a",_=u({name:"AMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=l(null),{toPromise:o}=m({src:b});function t(){return c(this,null,function*(){yield o(),yield j();const a=x(e);if(!a)return;const s=window.AMap;new s.Map(a,{zoom:11,center:[116.404,39.915],viewMode:"3D"})})}return g(()=>{t()}),{wrapRef:e}}});function v(e,o,t,a,s,i){return k(),w("div",{ref:"wrapRef",style:h({height:e.height,width:e.width})},null,4)}var q=f(_,[["render",v]]);export{q as default};
