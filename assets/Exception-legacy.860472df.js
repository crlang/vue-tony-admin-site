System.register(["./index-legacy.65fa1ffc.js","./index-legacy.d011862e.js"],(function(t){"use strict";var e,n,u,s,i,a,r,l,c,o,f,d,T;return{setters:[function(t){e=t.d,n=t.aP,u=t.r,s=t.aQ,i=t.aR,a=t.aS,r=t.c,l=t.b,c=t.aT,o=t.h,f=t.y,d=t.l},function(t){T=t.E}],execute:function(){t("default",e({name:"ErrorPage",props:{status:{type:Number,default:n.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup:function(t){var e=u(new Map),b=s().query,y=i(),E=a(),_=d("app-exception-page").prefixCls,p=r((function(){var e=b.status,n=t.status;return Number(e)||n})),O=r((function(){return l(e).get(l(p))})),g="返回登录",v="返回首页";return l(e).set(n.PAGE_NOT_ACCESS,{title:"403",status:"".concat(n.PAGE_NOT_ACCESS),subTitle:"抱歉，您无权访问此页面",btnText:t.full?g:v,handler:function(){return t.full?y(c.BASE_LOGIN):y()},icon:"/vue-tony-admin-site/assets/403.a67ce326.svg"}),l(e).set(n.PAGE_NOT_FOUND,{title:"404",status:"".concat(n.PAGE_NOT_FOUND),subTitle:"抱歉，您访问的页面不存在",btnText:t.full?g:v,handler:function(){return t.full?y(c.BASE_LOGIN):y()},icon:"/vue-tony-admin-site/assets/404.f3a2336a.svg"}),l(e).set(n.ERROR,{title:"500",status:"".concat(n.ERROR),subTitle:"抱歉，服务器报告错误",btnText:v,handler:function(){return y()},icon:"/vue-tony-admin-site/assets/500.9ac4cbde.svg"}),l(e).set(n.PAGE_NOT_DATA,{title:"当前页无数据",subTitle:"",btnText:"刷新",handler:function(){return E()},icon:"/vue-tony-admin-site/assets/no-data.15c5ccd1.svg"}),l(e).set(n.NET_WORK_ERROR,{title:"网络错误",subTitle:"抱歉，您的网络连接已断开，请检查您的网络！",btnText:"刷新",handler:function(){return E()},icon:"/vue-tony-admin-site/assets/net-error.23d314b7.svg"}),function(){var e=l(O)||{},n=e.title,u=e.subTitle,s=e.btnText,i=e.icon,a=e.handler,r=e.status;return o(T,{class:_,status:r,title:t.title||n,"sub-title":t.subTitle||u},{icon:function(){return i?o("img",{src:i},null):null},extra:function(){return s&&o(f,{type:"primary",onClick:a},{default:function(){return s}})}})}}}))}}}));