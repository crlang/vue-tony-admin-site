import{I,_ as x}from"./index.c38c7de5.js";import{articleList as y,actions as $}from"./data.00dec475.js";import{b as k,L as b,a as g}from"./index.15707ee8.js";import{x as j,b_ as B,Y as n,z as s,Z as i,a3 as l,A as _,ao as p,a8 as d,G as a,a0 as N,D as r,F as c,ab as m,aa as V}from"./vendor.041d4bc7.js";const h=j({components:{ElTag:B,List:k,ListItem:b,ListItemMeta:g,Icon:I},setup(){return{prefixCls:"account-center-article",list:y,actions:$}}}),z={class:"mt-2"};function A(e,M,D,E,F,T){const u=n("el-tag"),f=n("ListItemMeta"),C=n("Icon"),L=n("ListItem"),v=n("List");return s(),i(v,{class:a(e.prefixCls)},{default:l(()=>[(s(!0),_(d,null,p(e.list,o=>(s(),i(L,{key:o.title,style:{display:"block"}},{default:l(()=>[N(f,null,{description:l(()=>[r("div",{class:a(`${e.prefixCls}__content`)},c(o.content),3)]),title:l(()=>[r("p",{class:a(`${e.prefixCls}__title`)},c(o.title),3),r("div",null,[(s(!0),_(d,null,p(o.description,t=>(s(),i(u,{key:t,class:"mb-2 mr-2",size:"small"},{default:l(()=>[m(c(t),1)]),_:2},1024))),128))])]),_:2},1024),r("div",z,[(s(!0),_(d,null,p(e.actions,t=>(s(),_("div",{key:t.text,class:a(`${e.prefixCls}__action`)},[t.icon?(s(),i(C,{key:0,class:a(`${e.prefixCls}__action-icon`),icon:t.icon,color:t.color},null,8,["class","icon","color"])):V("",!0),m(" "+c(t.text),1)],2))),128)),r("span",{class:a(`${e.prefixCls}__time`)},c(o.time),3)])]),_:2},1024))),128))]),_:1},8,["class"])}var Z=x(h,[["render",A],["__scopeId","data-v-db1c504e"]]);export{Z as default};
