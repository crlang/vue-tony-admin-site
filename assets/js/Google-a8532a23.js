var l=(e,r,t)=>new Promise((n,s)=>{var a=o=>{try{i(t.next(o))}catch(c){s(c)}},p=o=>{try{i(t.throw(o))}catch(c){s(c)}},i=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,p);i((t=t.apply(e,r)).next())});import{u as m}from"./useScript-eb1c97c6.js";import{_ as f}from"./index-034694ef.js";import{y as u,a as g,q as d,z as h,A as w,Y as k,U as y,u as _}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-element-plus-fdfdae45.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";const j="https://maps.googleapis.com/maps/api/js?key=yourkey&signed_in=true",x=u({name:"GoogleMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=g(null),{toPromise:r}=m({src:j});function t(){return l(this,null,function*(){yield r(),yield y();const n=_(e);if(!n)return;const s=window.google,a={lat:116.404,lng:39.915},p=new s.maps.Map(n,{zoom:4,center:a});new s.maps.Marker({position:a,map:p,title:"Hi Tony!"})})}return d(()=>{t()}),{wrapRef:e}}});function M(e,r,t,n,s,a){return h(),w("div",{ref:"wrapRef",style:k({height:e.height,width:e.width})},null,4)}var B=f(x,[["render",M]]);export{B as default};
