import{d as r,t as o,u}from"./ex-pkg-@vueuse.e5d644bd.js";function c(d,i=150,n){let e=()=>{d()};e=u(e,i);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},s=()=>{window.removeEventListener("resize",e)};return r(()=>{t()}),o(()=>{s()}),[t,s]}export{c as u};
