import{m as i,s as E,_ as d,w as x}from"./ex-pkg-@vue.dfd8e273.js";const p=["class","style"],K=/^on[A-Z]/;function L(e){return Object.keys(e).map(t=>[t,e[t]])}function m(e={}){const t=i();if(!t)return{};const{excludeListeners:c=!1,excludeKeys:a=[],excludeDefaultKeys:u=!0}=e,n=E({}),l=a.concat(u?p:[]);return t.attrs=d(t.attrs),x(()=>{const o=L(t.attrs).reduce((r,[s,f])=>(!l.includes(s)&&!(c&&K.test(s))&&(r[s]=f),r),{});n.value=o}),n}export{m as u};
