import{bX as c}from"./ex-pkg-vendor.ab2d902e.js";import{y as n,u as i,z as m,A as u}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-mockjs.0bec78f1.js";const k=n({setup(d){const{currentRoute:s,replace:a}=c(),{params:e,query:o}=i(s),{path:r,_redirect_type:p="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(p==="name"?{name:t,query:o,params:e}:{path:t.startsWith("/")?t:"/"+t,query:o}),(f,_)=>(m(),u("div"))}});export{k as default};
