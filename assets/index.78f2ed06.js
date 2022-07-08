var G=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var j=(t,a,d)=>a in t?G(t,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[a]=d,w=(t,a)=>{for(var d in a||(a={}))Q.call(a,d)&&j(t,d,a[d]);if(N)for(var d of N(a))U.call(a,d)&&j(t,d,a[d]);return t},F=(t,a)=>J(t,K(a));import{d as L,q as A,r as M,c as D,w as W,aA as Y,b as f,h as y,bS as ee,l as X,aB as te,aC as Z}from"./index.b263d89e.js";import{g as I}from"./tsxHelper.c64d0d27.js";import{u as ie}from"./useTimeout.f7502887.js";const q={modelValue:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:String,default:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8"},successText:{type:String,default:"\u9A8C\u8BC1\u901A\u8FC7"},height:{type:Number,default:40},width:{type:Number,default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},oe=F(w({},q),{src:{type:String},imgSize:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}});var H=L({name:"BasicDragVerify",props:q,emits:["success","update:modelValue","change","start","move","end"],setup(t,{emit:a,slots:d,expose:z}){const i=A({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),o=M(null),h=M(null),$=M(null),x=M(null),{prefixCls:_}=X("basic-drag-verify");document.addEventListener("mouseup",()=>{i.isMoving&&p()});const V=D(()=>{const{height:e,actionStyle:s}=t,c=`${e}px`;return w({left:0,width:c,height:c},s)}),E=D(()=>{const{height:e,width:s,circle:c,wrapStyle:n}=t,l=e,m=`${s}px`;return w({width:m,height:`${l}px`,lineHeight:`${l}px`,borderRadius:c?l/2+"px":0},n)}),B=D(()=>{const{height:e,circle:s,barStyle:c}=t,n=e;return w({height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0},c)}),P=D(()=>{const{height:e,width:s,contentStyle:c}=t,n=`${e}px`,l=`${s}px`;return w({height:n,width:l},c)});W(()=>i.isPassing,e=>{if(e){const{startTime:s,endTime:c}=i,n=(c-s)/1e3;a("success",{isPassing:e,time:n.toFixed(1)}),a("update:modelValue",e),a("change",e)}}),Y(()=>{i.isPassing=!!t.modelValue});function S(e){return e.pageX||e.touches[0].pageX}function r(e){if(i.isPassing)return;const s=f(x);!s||(a("start",e),i.moveDistance=S(e)-parseInt(s.style.left.replace("px",""),10),i.startTime=new Date().getTime(),i.isMoving=!0)}function u(e){const s=parseInt(e.style.width),{width:c}=t,n=c;return{offset:n-s-6,widthNum:n,actionWidth:s}}function g(e){const{isMoving:s,moveDistance:c}=i;if(s){const n=f(x),l=f(h);if(!n||!l)return;const{offset:m,widthNum:T,actionWidth:R}=u(n),v=S(e)-c;a("move",{event:e,moveDistance:c,moveX:v}),v>0&&v<=m?(n.style.left=`${v}px`,l.style.width=`${v+R/2}px`):v>m&&(n.style.left=`${T-R}px`,l.style.width=`${T-R/2}px`,t.isSlot||k())}}function b(e){const{isMoving:s,isPassing:c,moveDistance:n}=i;if(s&&!c){a("end",e);const l=f(x),m=f(h);if(!l||!m)return;const T=S(e)-n,{offset:R,widthNum:v,actionWidth:O}=u(l);T<R?t.isSlot?setTimeout(()=>{if(!t.modelValue)p();else{const C=f($);C&&(C.style.width=`${parseInt(m.style.width)}px`)}},0):p():(l.style.left=`${v-O}px`,m.style.width=`${v-O/2}px`,k()),i.isMoving=!1}}function k(){if(t.isSlot){p();return}i.endTime=new Date().getTime(),i.isPassing=!0,i.isMoving=!1}function p(){i.isMoving=!1,i.isPassing=!1,i.moveDistance=0,i.toLeft=!1,i.startTime=0,i.endTime=0;const e=f(x),s=f(h),c=f($);!e||!s||!c||(i.toLeft=!0,setTimeout(()=>{i.toLeft=!1,e.style.left="0",s.style.width="0"},300),c.style.width=f(P).width)}return z({resume:p}),()=>{const e=()=>{const n=[`${_}-bar`];return i.toLeft&&n.push("to-left"),y("div",{class:n,ref:h,style:f(B)},null)},s=()=>{const n=[`${_}-content`],{isPassing:l}=i,{text:m,successText:T}=t;return l&&n.push("success"),y("div",{class:n,ref:$,style:f(P)},[I(d,"text",l)||(l?T:m)])},c=()=>{const n=[`${_}-action`],{toLeft:l,isPassing:m}=i;return l&&n.push("to-left"),y("div",{class:n,onMousedown:r,onTouchstart:r,style:f(V),ref:x},[I(d,"actionIcon",m)||y(ee,{class:`${_}-action__icon`,name:`${m?"select":"arrow-double-right"}`},null)])};return y("div",{class:_,ref:o,style:f(E),onMousemove:g,onTouchmove:g,onMouseleave:b,onMouseup:b,onTouchend:b},[e(),s(),c()])}}});var ne=L({name:"RotateDragVerify",inheritAttrs:!1,props:oe,emits:["success","change","update:modelValue"],setup(t,{emit:a,attrs:d,expose:z}){const i=M(null),o=A({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{prefixCls:h}=X("basic-img-verify"),$=D(()=>{const{imgWrapStyle:r,imgSize:u}=t;return w({width:`${u}px`,height:`${u}px`},r)}),x=D(()=>{const{minDegree:r,maxDegree:u}=t;return r===u?Math.floor(1+Math.random()*1)/10+1:1});function _(){o.startTime=new Date().getTime()}function V(r){o.draged=!0;const{imgSize:u,height:g,maxDegree:b}=t,{moveX:k}=r,p=Math.ceil(k/(u-g)*b*f(x));o.currentRotate=p,o.imgStyle={transform:`rotateZ(${o.randomRotate-p}deg)`}}function E(){const{minDegree:r,maxDegree:u}=t,g=Math.floor(r+Math.random()*(u-r));o.randomRotate=g,o.imgStyle={transform:`rotateZ(${g}deg)`}}function B(){const{randomRotate:r,currentRotate:u}=o,{diffDegree:g}=t;Math.abs(r-u)>=(g||20)?(o.imgStyle={transform:`rotateZ(${r}deg)`},o.toOrigin=!0,ie(()=>{o.toOrigin=!1,o.showTip=!0},300)):P(),o.showTip=!0}function P(){o.isPassing=!0,o.endTime=new Date().getTime()}function S(){o.showTip=!1;const r=f(i);!r||(o.isPassing=!1,r.resume(),E())}return z({resume:S}),W(()=>o.isPassing,r=>{if(r){const{startTime:u,endTime:g}=o,b=(g-u)/1e3;a("success",{isPassing:r,time:b.toFixed(1)}),a("change",r),a("update:modelValue",r)}}),()=>{const{src:r,width:u}=t,{toOrigin:g,isPassing:b,startTime:k,endTime:p}=o,e=[];g&&e.push("to-origin");const s=(p-k)/1e3;return y("div",{class:`${h}`},[y("div",{class:`${h}-img__wrap`,style:f($)},[y("img",{src:r,onLoad:E,width:u,class:e,style:o.imgStyle,onClick:()=>{S()},alt:"verify"},null),o.showTip&&y("span",{class:[`${h}-img__tip`,o.isPassing?"success":"error"]},[o.isPassing?`\u9A8C\u8BC1\u6821\u9A8C\u6210\u529F,\u8017\u65F6${s.toFixed(1)}\u79D2\uFF01`:"\u9A8C\u8BC1\u5931\u8D25\uFF01"]),!o.showTip&&!o.draged&&y("span",{class:[`${h}-img__tip`,"normal"]},["\u70B9\u51FB\u56FE\u7247\u53EF\u5237\u65B0"])]),y(H,te({class:`${h}-drag__bar`,onMove:V,onEnd:B,onStart:_,ref:i},w(w({},d),t),{modelValue:b,isSlot:!0}),null)])}}});const le=Z(H),ue=Z(ne);export{le as B,ue as R};
