System.register(["./index-legacy.d4a5bdac.js","./index-legacy.65fa1ffc.js","./index-legacy.e1d47d0d.js","./index-legacy.4572cadf.js","./tsxHelper-legacy.a1d1c62e.js","./index-legacy.8ab675c6.js","./index-legacy.89eaccdd.js","./index-legacy.b930ab31.js"],(function(e){"use strict";var n,l,t,c,r,a,i,o,u,s,f,d,C,p,g,m;return{setters:[function(e){n=e.C},function(e){l=e._,t=e.d,c=e.E,r=e.y,a=e.r,i=e.bW,o=e.e,u=e.o,s=e.j,f=e.i,d=e.h,C=e.g,p=e.m,g=e.z},function(e){m=e.E},function(){},function(){},function(){},function(){},function(){}],execute:function(){var k=t({name:"TabsDemo",components:{ElInput:c,ElAlert:m,ElButton:r,CollapseContainer:n},setup:function(){var e=a(""),n=i(),l=n.closeAll,t=n.closeLeft,c=n.closeRight,r=n.closeOther,o=n.closeCurrent,u=n.refreshPage,s=n.setTitle,f=g().createMessage;return{closeAll:l,closeLeft:t,closeRight:c,closeOther:r,closeCurrent:o,refreshPage:u,setTabTitle:function(){e.value?s(e.value):f.error("请输入要设置的Tab标题！")},title:e}}}),y={class:"mt-2 flex flex-grow-0"},b=p(" 设置Tab标题 "),h=p(" 关闭所有 "),x=p(" 关闭左侧 "),_=p(" 关闭右侧 "),j=p(" 关闭其他 "),T=p(" 关闭当前 "),v=p(" 刷新当前 ");e("default",l(k,[["render",function(e,n,l,t,c,r){var a=o("el-alert"),i=o("el-button"),p=o("el-input"),g=o("CollapseContainer"),m=o("PageWrapper");return u(),s(m,{title:"标签页操作示例"},{default:f((function(){return[d(g,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:f((function(){return[d(a,{"show-icon":"",type:"info",title:"该操作不会影响页面标题，仅修改Tab标题"}),C("div",y,[d(i,{class:"mr-2",onClick:e.setTabTitle,type:"primary"},{default:f((function(){return[b]})),_:1},8,["onClick"]),d(p,{placeholder:"请输入",modelValue:e.title,"onUpdate:modelValue":n[0]||(n[0]=function(n){return e.title=n}),class:"mr-4 w-12"},null,8,["modelValue"])])]})),_:1}),d(g,{class:"mt-4",title:"标签页操作"},{default:f((function(){return[d(i,{plain:"",class:"mr-2",onClick:e.closeAll},{default:f((function(){return[h]})),_:1},8,["onClick"]),d(i,{plain:"",class:"mr-2",onClick:e.closeLeft},{default:f((function(){return[x]})),_:1},8,["onClick"]),d(i,{plain:"",class:"mr-2",onClick:e.closeRight},{default:f((function(){return[_]})),_:1},8,["onClick"]),d(i,{plain:"",class:"mr-2",onClick:e.closeOther},{default:f((function(){return[j]})),_:1},8,["onClick"]),d(i,{plain:"",class:"mr-2",onClick:e.closeCurrent},{default:f((function(){return[T]})),_:1},8,["onClick"]),d(i,{plain:"",class:"mr-2",onClick:e.refreshPage},{default:f((function(){return[v]})),_:1},8,["onClick"])]})),_:1})]})),_:1})}]]))}}}));