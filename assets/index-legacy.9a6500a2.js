System.register(["./index-legacy.65fa1ffc.js","./index-legacy.dabdf8c5.js"],(function(e){"use strict";var n,t,i,u,c,r,l,d,a,s,f,o,k,C,m,p,v;return{setters:[function(e){n=e.d,t=e.r,i=e.cd,u=e.Y,c=e._,r=e.o,l=e.f,d=e.I,a=e.aC,s=e.e,f=e.j,o=e.i,k=e.h,C=e.g,m=e.t,p=e.m},function(e){v=e.E}],execute:function(){var O=n({name:"ClickOutside",emits:["mounted","clickOutside"],setup:function(e,n){var c=n.emit,r=t(null);return i(r,(function(){c("clickOutside")})),u((function(){c("mounted")})),{wrap:r}}}),x={ref:"wrap"},y=a(c(O,[["render",function(e,n,t,i,u,c){return r(),l("div",x,[d(e.$slots,"default")],512)}]])),_=n({components:{ElLink:v,ClickOutside:y},setup:function(){var e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}}),g=p(" 跳出框架外页面 ");e("default",c(_,[["render",function(e,n,t,i,u,c){var l=s("el-link"),d=s("ClickOutside"),a=s("PageWrapper");return r(),f(a,{title:"点内外部触发事件"},{default:o((function(){return[k(l,{href:"#main-out",type:"primary",class:"mb-4"},{default:o((function(){return[g]})),_:1}),k(d,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:o((function(){return[C("div",{onClick:n[0]||(n[0]=function(){return e.innerClick&&e.innerClick.apply(e,arguments)}),class:"demo-box"},m(e.text),1)]})),_:1},8,["onClickOutside"])]})),_:1})}],["__scopeId","data-v-6e40d3b9"]]))}}}));