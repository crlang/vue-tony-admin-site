import{aZ as k,a_ as b,a$ as y,b0 as C,Q as $,d as m,C as w,c as I,o as l,f as a,g as p,F as i,b as s,k as S,n,H as h,l as c,t as f,I as B,J as E}from"./index.a812ffa9.js";const t={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[t.success]:k,[t.warning]:b,[t.error]:y,[t.info]:C},N=$({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),R=m({name:"ElResult"}),T=m({...R,props:N,setup(v){const _=v,o=w("result"),r=I(()=>{const e=_.icon,u=e&&t[e]?t[e]:"icon-info",g=d[u]||d["icon-info"];return{class:u,component:g}});return(e,u)=>(l(),a("div",{class:n(s(o).b())},[p("div",{class:n(s(o).e("icon"))},[i(e.$slots,"icon",{},()=>[s(r).component?(l(),S(h(s(r).component),{key:0,class:n(s(r).class)},null,8,["class"])):c("v-if",!0)])],2),e.title||e.$slots.title?(l(),a("div",{key:0,class:n(s(o).e("title"))},[i(e.$slots,"title",{},()=>[p("p",null,f(e.title),1)])],2)):c("v-if",!0),e.subTitle||e.$slots["sub-title"]?(l(),a("div",{key:1,class:n(s(o).e("subtitle"))},[i(e.$slots,"sub-title",{},()=>[p("p",null,f(e.subTitle),1)])],2)):c("v-if",!0),e.$slots.extra?(l(),a("div",{key:2,class:n(s(o).e("extra"))},[i(e.$slots,"extra")],2)):c("v-if",!0)],2))}});var D=B(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const P=E(D);export{P as E};
