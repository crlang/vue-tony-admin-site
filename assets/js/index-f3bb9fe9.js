import{cv as c}from"./ex-pkg-vendor-a94c680b.js";import{y as n,u as i,z as m,A as u}from"./ex-pkg-@vue-6f720869.js";import"./ex-pkg-mockjs-2c72399a.js";const k=n({setup(_){const{currentRoute:s,replace:a}=c(),{params:e,query:o}=i(s),{path:r,_redirect_type:p="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(p==="name"?{name:t,query:o,params:e}:{path:t.startsWith("/")?t:"/"+t,query:o}),(f,l)=>(m(),u("div"))}});export{k as default};
