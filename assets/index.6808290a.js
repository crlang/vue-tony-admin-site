import{Q as c,R as p,d as n,C as u,c as m,o as s,f as o,n as i,b as r,F as v,l as f,G as y,I as S,J as _}from"./index.a812ffa9.js";const b=c({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:p(String),default:"solid"}}),h=n({name:"ElDivider"}),g=n({...h,props:b,setup(a){const l=a,e=u("divider"),d=m(()=>e.cssVar({"border-style":l.borderStyle}));return(t,P)=>(s(),o("div",{class:i([r(e).b(),r(e).m(t.direction)]),style:y(r(d)),role:"separator"},[t.$slots.default&&t.direction!=="vertical"?(s(),o("div",{key:0,class:i([r(e).e("text"),r(e).is(t.contentPosition)])},[v(t.$slots,"default")],2)):f("v-if",!0)],6))}});var k=S(g,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]);const C=_(k);export{C as E};
