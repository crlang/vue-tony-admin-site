import{bX as c}from"./ex-pkg-vendor-ad21d406.js";import{y as n,u as d,z as i,A as m}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-d5ed3ada.js";const k=n({setup(u){const{currentRoute:s,replace:a}=c(),{params:e,query:o}=d(s),{path:r,_redirect_type:p="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(p==="name"?{name:t,query:o,params:e}:{path:t.startsWith("/")?t:"/"+t,query:o}),(_,f)=>(i(),m("div"))}});export{k as default};
