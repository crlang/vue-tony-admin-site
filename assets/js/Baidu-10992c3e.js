var u=(e,s,t)=>new Promise((o,n)=>{var r=a=>{try{i(t.next(a))}catch(c){n(c)}},p=a=>{try{i(t.throw(a))}catch(c){n(c)}},i=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,p);i((t=t.apply(e,s)).next())});import{u as d}from"./useScript-eb1c97c6.js";import{_ as f}from"./index-034694ef.js";import{y as m,a as l,q as h,z as w,A as g,Y as k,U as _,u as x}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-element-plus-fdfdae45.js";import"./ex-pkg-vendor-a94c680b.js";import"./ex-pkg-mockjs-2c72399a.js";const y="https://api.map.baidu.com/getscript?v=3.0&ak=I5quyrrIkhGGo0d2np6rDyGEc9uXieNL&services=&s=1",j=m({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=l(null),{toPromise:s}=d({src:y});function t(){return u(this,null,function*(){yield s(),yield _();const o=x(e);if(!o)return;const n=window.BMap,r=new n.Map(o),p=new n.Point(116.404,39.915);r.centerAndZoom(p,15),r.enableScrollWheelZoom(!0)})}return h(()=>{t()}),{wrapRef:e}}});function v(e,s,t,o,n,r){return w(),g("div",{ref:"wrapRef",style:k({height:e.height,width:e.width})},null,4)}var G=f(j,[["render",v]]);export{G as default};
