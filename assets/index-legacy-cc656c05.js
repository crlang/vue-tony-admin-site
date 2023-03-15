System.register(["./index-legacy-db4b469e.js","./index-legacy-01771a22.js"],(function(e){"use strict";var t,n,i,o,r,a,u,l,s,c,v,f,d,p,m,g,y;return{setters:[function(e){t=e.r,n=e.aC,i=e.d,o=e.Z,r=e._,a=e.m,u=e.b2,l=e.e,s=e.o,c=e.k,v=e.i,f=e.f,d=e.F,p=e.aD,m=e.ar,g=e.aE},function(e){y=e.E}],execute:function(e,h){var x=i({name:"LazyContainer",components:{ElSkeleton:y},inheritAttrs:!1,props:{timeout:{type:Number},viewport:{type:"undefined"!=typeof window?window.HTMLElement:Object,default:function(){return null}},threshold:{type:String,default:"0px"},direction:{type:String,default:"vertical",validator:function(e){return["vertical","horizontal"].includes(e)}},tag:{type:String,default:"div"},maxWaitingTime:{type:Number,default:120},transitionName:{type:String,default:"lazy-container"}},emits:["init"],setup:function(e,i){var r=i.emit,l=t(),s=t(!1),c=t(!1),v=a("lazy-container").prefixCls;function f(){c.value=!0,setTimeout((function(){s.value||(s.value=!0,r("init"))}),e.maxWaitingTime||120)}function d(){var i=e.timeout,o=e.direction,r=e.threshold;if(!i){var a="0px";switch(o){case"vertical":a="".concat(r," 0px");break;case"horizontal":a="0px ".concat(r)}try{var s=function(e){var i=e.target,o=e.root,r=e.onIntersect,a=e.rootMargin,u=void 0===a?"0px":a,l=e.threshold,s=void 0===l?.1:l,c=function(){},v=t(null),f=n((function(){c(),v.value=new IntersectionObserver(r,{root:o?o.value:null,rootMargin:u,threshold:s});var e=i.value;e&&v.value.observe(e),c=function(){v.value&&(v.value.disconnect(),i.value&&v.value.unobserve(i.value))}}));return{observer:v,stop:function(){c(),f()}}}({rootMargin:a,target:u(l.value,"$el"),onIntersect:function(e){(e[0].isIntersecting||e[0].intersectionRatio)&&(f(),v&&c())},root:u(e,"viewport")}),c=s.stop,v=s.observer}catch(d){f()}}}return o((function(){var t;(t=e.timeout)&&setTimeout((function(){f()}),t),d()})),{prefixCls:v,elRef:l,isInit:s,loading:c}}}),b={key:"component"},k={key:"skeleton"};e("L",g(r(x,[["render",function(e,t,n,i,o,r){var a=l("ElSkeleton");return s(),c(m,p({class:e.prefixCls},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:v((function(){return[e.isInit?(s(),f("div",b,[d(e.$slots,"default",{loading:e.loading})])):(s(),f("div",k,[e.$slots.skeleton?d(e.$slots,"skeleton",{key:0}):(s(),c(a,{key:1}))]))]})),_:3},16,["class","name","tag"])}]])))}}}));