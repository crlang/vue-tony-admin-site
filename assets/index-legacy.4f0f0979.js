!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function t(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?e(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.cd308252.js","./tsxHelper-legacy.185109f0.js","./useTimeout-legacy.d058ad6e.js"],(function(e){"use strict";var n,i,a,o,r,s,c,u,l,f,d,g,m,p;return{setters:[function(e){n=e.d,i=e.s,a=e.r,o=e.c,r=e.w,s=e.aA,c=e.b,u=e.h,l=e.l,f=e.bJ,d=e.aB,g=e.aC},function(e){m=e.g},function(e){p=e.u}],execute:function(){var h={modelValue:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:String,default:"请按住滑块拖动"},successText:{type:String,default:"验证通过"},height:{type:Number,default:40},width:{type:Number,default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},y=t(t({},h),{},{src:{type:String},imgSize:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}}),v=n({name:"BasicDragVerify",props:h,emits:["success","update:modelValue","change","start","move","end"],setup:function(e,n){var d=n.emit,g=n.slots,p=n.expose,h=i({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),y=a(null),v=a(null),w=a(null),b=a(null),x=l("basic-drag-verify").prefixCls;document.addEventListener("mouseup",(function(){h.isMoving&&N()}));var T=o((function(){var n=e.height,i=e.actionStyle,a="".concat(n,"px");return t({left:0,width:a,height:a},i)})),S=o((function(){var n=e.height,i=e.width,a=e.circle,o=e.wrapStyle,r=n;return t({width:"".concat(i,"px"),height:"".concat(r,"px"),lineHeight:"".concat(r,"px"),borderRadius:a?"".concat(r/2,"px"):0},o)})),O=o((function(){var n=e.height,i=e.circle,a=e.barStyle,o=n;return t({height:"".concat(o,"px"),borderRadius:i?"".concat(o/2,"px 0 0 ").concat(o/2,"px"):0},a)})),P=o((function(){var n=e.height,i=e.width,a=e.contentStyle;return t({height:"".concat(n,"px"),width:"".concat(i,"px")},a)}));function D(e){return e.pageX||e.touches[0].pageX}function j(e){if(!h.isPassing){var t=c(b);t&&(d("start",e),h.moveDistance=D(e)-parseInt(t.style.left.replace("px",""),10),h.startTime=(new Date).getTime(),h.isMoving=!0)}}function M(t){var n=parseInt(t.style.width),i=e.width;return{offset:i-n-6,widthNum:i,actionWidth:n}}function R(t){var n=h.isMoving,i=h.moveDistance;if(n){var a=c(b),o=c(v);if(!a||!o)return;var r=M(a),s=r.offset,u=r.widthNum,l=r.actionWidth,f=D(t)-i;d("move",{event:t,moveDistance:i,moveX:f}),f>0&&f<=s?(a.style.left="".concat(f,"px"),o.style.width="".concat(f+l/2,"px")):f>s&&(a.style.left="".concat(u-l,"px"),o.style.width="".concat(u-l/2,"px"),e.isSlot||_())}}function V(t){var n=h.isMoving,i=h.isPassing,a=h.moveDistance;if(n&&!i){d("end",t);var o=c(b),r=c(v);if(!o||!r)return;var s=D(t)-a,u=M(o),l=u.offset,f=u.widthNum,g=u.actionWidth;s<l?e.isSlot?setTimeout((function(){if(e.modelValue){var t=c(w);t&&(t.style.width="".concat(parseInt(r.style.width),"px"))}else N()}),0):N():(o.style.left="".concat(f-g,"px"),r.style.width="".concat(f-g/2,"px"),_()),h.isMoving=!1}}function _(){e.isSlot?N():(h.endTime=(new Date).getTime(),h.isPassing=!0,h.isMoving=!1)}function N(){h.isMoving=!1,h.isPassing=!1,h.moveDistance=0,h.toLeft=!1,h.startTime=0,h.endTime=0;var e=c(b),t=c(v),n=c(w);e&&t&&n&&(h.toLeft=!0,setTimeout((function(){h.toLeft=!1,e.style.left="0",t.style.width="0"}),300),n.style.width=c(P).width)}return r((function(){return h.isPassing}),(function(e){if(e){var t=h.startTime,n=h.endTime;d("success",{isPassing:e,time:((n-t)/1e3).toFixed(1)}),d("update:modelValue",e),d("change",e)}})),s((function(){h.isPassing=!!e.modelValue})),p({resume:N}),function(){var t;return u("div",{class:x,ref:y,style:c(S),onMousemove:R,onTouchmove:R,onMouseleave:V,onMouseup:V,onTouchend:V},[(t=["".concat(x,"-bar")],h.toLeft&&t.push("to-left"),u("div",{class:t,ref:v,style:c(O)},null)),function(){var t=["".concat(x,"-content")],n=h.isPassing,i=e.text,a=e.successText;return n&&t.push("success"),u("div",{class:t,ref:w,style:c(P)},[m(g,"text",n)||(n?a:i)])}(),function(){var e=["".concat(x,"-action")],t=h.toLeft,n=h.isPassing;return t&&e.push("to-left"),u("div",{class:e,onMousedown:j,onTouchstart:j,style:c(T),ref:b},[m(g,"actionIcon",n)||u(f,{class:"".concat(x,"-action__icon"),name:"".concat(n?"check":"doubleright")},null)])}()])}}}),w=n({name:"RotateDragVerify",inheritAttrs:!1,props:y,emits:["success","change","update:modelValue"],setup:function(e,n){var s=n.emit,f=n.attrs,g=n.expose,m=a(null),h=i({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),y=l("basic-img-verify").prefixCls,w=o((function(){var n=e.imgWrapStyle,i=e.imgSize;return t({width:"".concat(i,"px"),height:"".concat(i,"px")},n)})),b=o((function(){return e.minDegree===e.maxDegree?Math.floor(1+1*Math.random())/10+1:1}));function x(){h.startTime=(new Date).getTime()}function T(t){h.draged=!0;var n=e.imgSize,i=e.height,a=e.maxDegree,o=t.moveX,r=Math.ceil(o/(n-i)*a*c(b));h.currentRotate=r,h.imgStyle={transform:"rotateZ(".concat(h.randomRotate-r,"deg)")}}function S(){var t=e.minDegree,n=e.maxDegree,i=Math.floor(t+Math.random()*(n-t));h.randomRotate=i,h.imgStyle={transform:"rotateZ(".concat(i,"deg)")}}function O(){var t=h.randomRotate,n=h.currentRotate,i=e.diffDegree;Math.abs(t-n)>=(i||20)?(h.imgStyle={transform:"rotateZ(".concat(t,"deg)")},h.toOrigin=!0,p((function(){h.toOrigin=!1,h.showTip=!0}),300)):(h.isPassing=!0,h.endTime=(new Date).getTime()),h.showTip=!0}function P(){h.showTip=!1;var e=c(m);e&&(h.isPassing=!1,e.resume(),S())}return g({resume:P}),r((function(){return h.isPassing}),(function(e){if(e){var t=h.startTime,n=h.endTime;s("success",{isPassing:e,time:((n-t)/1e3).toFixed(1)}),s("change",e),s("update:modelValue",e)}})),function(){var n=e.src,i=e.width,a=h.toOrigin,o=h.isPassing,r=h.startTime,s=h.endTime,l=[];a&&l.push("to-origin");var g=(s-r)/1e3;return u("div",{class:"".concat(y)},[u("div",{class:"".concat(y,"-img__wrap"),style:c(w)},[u("img",{src:n,onLoad:S,width:i,class:l,style:h.imgStyle,onClick:function(){P()},alt:"verify"},null),h.showTip&&u("span",{class:["".concat(y,"-img__tip"),h.isPassing?"success":"error"]},[h.isPassing?"验证校验成功,耗时".concat(g.toFixed(1),"秒！"):"验证失败！"]),!h.showTip&&!h.draged&&u("span",{class:["".concat(y,"-img__tip"),"normal"]},["点击图片可刷新"])]),u(v,d({class:"".concat(y,"-drag__bar"),onMove:T,onEnd:O,onStart:x,ref:m},t(t({},f),e),{modelValue:o,isSlot:!0}),null)])}}});e("B",g(v)),e("R",g(w))}}}))}();