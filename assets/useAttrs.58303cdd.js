import{ae as i,bo as E,I as d,aj as x}from"./vendor.1ced56aa.js";const I=["class","style"],K=/^on[A-Z]/;function L(e){return Object.keys(e).map(t=>[t,e[t]])}function v(e={}){const t=i();if(!t)return{};const{excludeListeners:a=!1,excludeKeys:c=[],excludeDefaultKeys:u=!0}=e,n=E({}),o=c.concat(u?I:[]);return t.attrs=d(t.attrs),x(()=>{const l=L(t.attrs).reduce((r,[s,f])=>(!o.includes(s)&&!(a&&K.test(s))&&(r[s]=f),r),{});n.value=l}),n}export{v as u};
