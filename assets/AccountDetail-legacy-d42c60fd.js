System.register(["./index-legacy-db4b469e.js","./index-legacy-804c3247.js","./strings-legacy-e281ffd0.js"],(function(e){"use strict";var t,n,r,a,u,l,i,c,o,s,d,f,y,b,m,p,g,v,k,K;return{setters:[function(e){t=e._,n=e.d,r=e.z,a=e.aV,u=e.r,l=e.bP,i=e.e,c=e.o,o=e.k,s=e.i,d=e.h,f=e.j,y=e.g,b=e.f,m=e.al,p=e.bw,g=e.t,v=e.l},function(e){k=e.E,K=e.a},function(e,t){}],execute:function(){var T=n({name:"AccountDetail",components:{ElButton:r,ElTabs:k,ElTabPane:K},setup:function(){var e,t=a(),n=u(null===(e=t.params)||void 0===e?void 0:e.id),r=u("detail");return(0,l().setTitle)("详情：用户".concat(n.value)),{userId:n,currentKey:r}}}),_={class:"pt-4 m-4"};e("default",t(T,[["render",function(e,t,n,r,a,u){var l=i("el-button"),k=i("el-tab-pane"),K=i("el-tabs"),T=i("PageWrapper");return c(),o(T,{title:"用户"+e.userId+"的资料",description:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",headerClass:"py-0-imp",contentBackground:""},{toolbar:s((function(){return[d(l,{size:"small",type:"danger"},{default:s((function(){return[f("禁用账号")]})),_:1}),d(l,{size:"small",type:"primary"},{default:s((function(){return[f("修改密码")]})),_:1})]})),extra:s((function(){return[d(K,{type:"card",class:"mt-4",modelValue:e.currentKey,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.currentKey=t})},{default:s((function(){return[d(k,{name:"detail",label:"用户资料"}),d(k,{name:"logs",label:"操作日志"})]})),_:1},8,["modelValue"])]})),default:s((function(){return[y("div",_,["detail"==e.currentKey?(c(),b(m,{key:0},p(10,(function(t){return y("div",{key:t},"这是用户"+g(e.userId)+"资料Tab",1)})),64)):v("",!0),"logs"==e.currentKey?(c(),b(m,{key:1},p(10,(function(t){return y("div",{key:t},"这是用户"+g(e.userId)+"操作日志Tab",1)})),64)):v("",!0)])]})),_:1},8,["title"])}]]))}}}));