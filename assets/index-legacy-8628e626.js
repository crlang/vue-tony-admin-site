System.register(["./data-legacy-2ab42c6e.js","./index-legacy-db4b469e.js","./index-legacy-f8005efa.js","./index-legacy-4e360dfa.js","./index-legacy-895eabb7.js","./index-legacy-5cf1a1e0.js","./col-legacy-e475f9fd.js","./card-legacy-16f6168d.js","./index-legacy-b68ce57c.js","./index-legacy-7aa1523d.js","./isEqual-legacy-514a4f4d.js","./_baseIsEqual-legacy-2c6e4922.js"],(function(e){"use strict";var a,n,t,l,d,u,r,c,o,f,i,s,y,p,k,g,x,h,v,E,j,T,_;return{setters:[function(e){a=e.t},function(e){n=e._,t=e.d,l=e.z,d=e.r,u=e.s,r=e.e,c=e.bO,o=e.o,f=e.k,i=e.i,s=e.h,y=e.g,p=e.j,k=e.v,g=e.U,x=e.dt,h=e.ds},function(e){v=e.E,E=e.a},function(e){j=e.E},function(e){T=e.E},function(e){_=e.E},function(e,a){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var b=t({components:{ElRow:v,ElCol:E,ElCard:j,ElTree:T,ElButton:l},directives:{loading:_.directive},setup:function(){var e=d(null),n=d(null),t=d([]),l=d(!1),r=d(!1),c=u({children:"children",label:"title"}),o=u([{title:"parent ",key:"0-0"}]);return{treeData:a,ajaxProps:c,ajaxTree:o,handleCheck:function(){},onLoadData:function(e,a){return 0===e.level?a(o):e.level>1?e.data.leaf||e.level>5?a([]):a([{title:"zone".concat(e.data.key),key:"".concat(e.data.key,"-1")}]):void setTimeout((function(){var e=u([{title:"leaf",key:"1-1",leaf:!0},{title:"zone",key:"2-2"}]);a(e)}),500)},asyncTreeRef:e,asyncExpandTreeRef:n,asyncTreeData:t,asyncTreeExpand:r,loadTreeData:function(){l.value=!0,setTimeout((function(){t.value=JSON.parse(JSON.stringify(a)),l.value=!1,g((function(){r.value=!0}))}),2e3)},treeLoading:l}}}),C=function(e){return x("data-v-f9efd146"),e=e(),h(),e}((function(){return y("span",null,"异步数据，默认展开",-1)}));e("default",n(b,[["render",function(e,a,n,t,l,d){var u=r("el-tree"),g=r("el-card"),x=r("el-col"),h=r("el-button"),v=r("el-row"),E=r("PageWrapper"),j=c("loading");return o(),f(E,{title:"Tree 基础示例",description:"未做封装，仅对 Element ElTree 官方组件进行演示"},{default:i((function(){return[s(v,{gutter:16},{default:i((function(){return[s(x,{span:8},{default:i((function(){return[s(g,{header:"基础示例，默认展开第一层"},{default:i((function(){return[s(u,{data:e.treeData,"node-key":"key","default-expanded-keys":["0-0","1-1","2-2"]},null,8,["data"])]})),_:1})]})),_:1}),s(x,{span:8},{default:i((function(){return[s(g,{header:"可勾选，默认全部展开"},{default:i((function(){return[s(u,{data:e.treeData,"node-key":"key","show-checkbox":"",defaultExpandAll:"",onCheckChange:e.handleCheck},null,8,["data","onCheckChange"])]})),_:1})]})),_:1}),s(x,{span:8},{default:i((function(){return[s(g,{header:"指定默认展开/勾选示例"},{default:i((function(){return[s(u,{data:e.treeData,"node-key":"key","show-checkbox":"","default-expanded-keys":["0-0"],"default-checked-keys":["0-0"]},null,8,["data"])]})),_:1})]})),_:1}),s(x,{span:8,class:"mt-4"},{default:i((function(){return[s(g,{header:"懒加载异步树"},{default:i((function(){return[s(u,{ref:"asyncTreeRef",data:e.ajaxTree,props:e.ajaxProps,"node-key":"key",lazy:"",load:e.onLoadData},null,8,["data","props","load"])]})),_:1})]})),_:1}),s(x,{span:16,class:"mt-4"},{default:i((function(){return[s(g,null,{header:i((function(){return[y("div",null,[C,s(h,{onClick:e.loadTreeData,class:"ml-6",loading:e.treeLoading},{default:i((function(){return[p("加载数据")]})),_:1},8,["onClick","loading"])])]})),default:i((function(){return[k(s(u,{ref:"asyncExpandTreeRef","default-expand-all":e.asyncTreeExpand,data:e.asyncTreeData},null,8,["default-expand-all","data"]),[[j,e.treeLoading]])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}],["__scopeId","data-v-f9efd146"]]))}}}));