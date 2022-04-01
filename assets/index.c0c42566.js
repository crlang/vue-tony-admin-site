import{t as C}from"./data.9d8655ec.js";import{P as h}from"./index.79d904a0.js";import{_ as E}from"./index.ec0491db.js";import{D as g,F as x,X as D,ao as v,z as B}from"./ex-pkg-element-plus.7627c250.js";import{y as T,a as r,_ as k,Z as d,a2 as j,z as A,G as b,H as t,R as a,K as F,I as w,U as P,b5 as R,b4 as z,P as I}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const L=T({components:{ElRow:g,ElCol:x,ElCard:D,ElTree:v,ElButton:B,PageWrapper:h},setup(){const e=r(null),m=r(null),c=r([]),p=r(!1),i=r(!1),y=k({children:"children",label:"title"}),n=k([{title:"parent ",key:"0-0"}]);function l(u,o){console.log("onChecked",u,o)}function s(){p.value=!0,setTimeout(()=>{c.value=JSON.parse(JSON.stringify(C)),p.value=!1,P(()=>{i.value=!0})},2e3)}function f(u,o){if(u.level===0)return o(n);if(u.level>1)return u.data.leaf||u.level>5?o([]):o([{title:"zone"+u.data.key,key:u.data.key+"-1"}]);setTimeout(()=>{const _=k([{title:"leaf",key:"1-1",leaf:!0},{title:"zone",key:"2-2"}]);o(_)},500)}return{treeData:C,ajaxProps:y,ajaxTree:n,handleCheck:l,onLoadData:f,asyncTreeRef:e,asyncExpandTreeRef:m,asyncTreeData:c,asyncTreeExpand:i,loadTreeData:s,treeLoading:p}}}),N=e=>(R("data-v-183125ba"),e=e(),z(),e),S=N(()=>F("span",null,"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00",-1)),$=I("\u52A0\u8F7D\u6570\u636E");function V(e,m,c,p,i,y){const n=d("el-tree"),l=d("el-card"),s=d("el-col"),f=d("el-button"),u=d("el-row"),o=d("PageWrapper"),_=j("loading");return A(),b(o,{title:"Tree \u57FA\u7840\u793A\u4F8B",description:"\u672A\u505A\u5C01\u88C5\uFF0C\u4EC5\u5BF9 Element ElTree \u5B98\u65B9\u7EC4\u4EF6\u8FDB\u884C\u6F14\u793A"},{default:t(()=>[a(u,{gutter:16},{default:t(()=>[a(s,{span:8},{default:t(()=>[a(l,{header:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42"},{default:t(()=>[a(n,{data:e.treeData,"node-key":"key","default-expanded-keys":["0-0","1-1","2-2"]},null,8,["data"])]),_:1})]),_:1}),a(s,{span:8},{default:t(()=>[a(l,{header:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00"},{default:t(()=>[a(n,{data:e.treeData,"node-key":"key","show-checkbox":"",defaultExpandAll:"",onCheckChange:e.handleCheck},null,8,["data","onCheckChange"])]),_:1})]),_:1}),a(s,{span:8},{default:t(()=>[a(l,{header:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B"},{default:t(()=>[a(n,{data:e.treeData,"node-key":"key","show-checkbox":"","default-expanded-keys":["0-0"],"default-checked-keys":["0-0"]},null,8,["data"])]),_:1})]),_:1}),a(s,{span:8,class:"mt-4"},{default:t(()=>[a(l,{header:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811"},{default:t(()=>[a(n,{ref:"asyncTreeRef",data:e.ajaxTree,props:e.ajaxProps,"node-key":"key",lazy:"",load:e.onLoadData},null,8,["data","props","load"])]),_:1})]),_:1}),a(s,{span:16,class:"mt-4"},{default:t(()=>[a(l,null,{header:t(()=>[F("div",null,[S,a(f,{onClick:e.loadTreeData,class:"ml-6",loading:e.treeLoading},{default:t(()=>[$]),_:1},8,["onClick","loading"])])]),default:t(()=>[w(a(n,{ref:"asyncExpandTreeRef","default-expand-all":e.asyncTreeExpand,data:e.asyncTreeData},null,8,["default-expand-all","data"]),[[_,e.treeLoading]])]),_:1})]),_:1})]),_:1})]),_:1})}var Y=E(L,[["render",V],["__scopeId","data-v-183125ba"]]);export{Y as default};
