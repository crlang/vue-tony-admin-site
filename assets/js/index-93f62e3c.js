var ne=Object.defineProperty;var P=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t)=>{for(var n in t||(t={}))se.call(t,n)&&j(e,n,t[n]);if(P)for(var n of P(t))oe.call(t,n)&&j(e,n,t[n]);return e};import{_ as z,u as D,Z as F,Q as N,$ as re,i as ae,w as H}from"./index-26bedde3.js";import{y as b,Z as y,z as u,A as v,R as T,H as $,F as L,P as ie,Q as le,B as m,K as A,G as w,O as B,L as S,a as d,af as ce,I as x,J as U,m as ue,n as fe,l as Y,an as pe,a4 as V,p as de,q as X,U as I,u as c,t as ve,Y as Q,M as me,w as ge,_ as he,W as q,a7 as _e,D as ye,ao as we}from"./ex-pkg-@vue-feb543c0.js";import{C as Se}from"./index-8ceb82bc.js";import{B as $e,a as be}from"./index-8a4d5146.js";import{T as G}from"./ex-pkg-element-plus-f609432a.js";import{cO as ze}from"./ex-pkg-vendor-bb3f8859.js";import{u as K}from"./useTimeout-998fb248.js";const Ce=b({components:{BasicArrow:$e,BasicTitle:be},inheritAttrs:!1,props:{title:{type:String},canExpan:{type:Boolean},helpMessage:{type:[Array,String],default:""},show:{type:Boolean},prefixCls:{type:String}},emits:["expand"],setup(){}});function ke(e,t,n,r,s,o){const a=y("BasicTitle"),i=y("BasicArrow");return e.title||e.$slots.title?(u(),v("div",{key:0,class:S(`${e.prefixCls}__header`)},[T(a,{helpMessage:e.helpMessage},{default:$(()=>[e.title?(u(),v(L,{key:0},[ie(le(e.title),1)],64)):m(e.$slots,"title",{key:1})]),_:3},8,["helpMessage"]),A("div",{class:S(`${e.prefixCls}__action`)},[m(e.$slots,"action"),e.canExpan?(u(),w(i,{key:0,direction:"up",class:"ml-2",expand:e.show,onClick:t[0]||(t[0]=l=>e.$emit("expand"))},null,8,["expand"])):B("",!0)],2)],2)):B("",!0)}var Te=z(Ce,[["render",ke]]);const Be=b({components:{ElSkeleton:G,CollapseHeader:Te,CollapseTransition:Se},inheritAttrs:!0,props:{title:{type:String,default:""},loading:{type:Boolean},canExpan:{type:Boolean,default:!0},helpMessage:{type:[Array,String],default:""}},emits:["expand"],setup(e,{emit:t}){const n=d(!0),{prefixCls:r}=D("collapse-container");function s(){n.value=!n.value,t("expand",n.value)}return{prefixCls:r,show:n,handleExpand:s}}}),Ee={key:1},He={key:1};function Le(e,t,n,r,s,o){const a=y("CollapseHeader"),i=y("ElSkeleton"),l=y("CollapseTransition");return u(),v("div",{class:S(e.prefixCls)},[T(a,{title:e.title,canExpan:e.canExpan,helpMessage:e.helpMessage,prefixCls:e.prefixCls,show:e.show,onExpand:e.handleExpand},ce({_:2},[e.$slots.title?{name:"title",fn:$(()=>[m(e.$slots,"title")])}:void 0,e.$slots.action?{name:"action",fn:$(()=>[m(e.$slots,"action")])}:void 0]),1032,["title","canExpan","helpMessage","prefixCls","show","onExpand"]),A("div",{class:S(`${e.prefixCls}__body`)},[e.canExpan?(u(),w(l,{key:0},{default:$(()=>[e.loading?(u(),w(i,{key:0})):x((u(),v("div",Ee,[m(e.$slots,"default")],512)),[[U,e.show]])]),_:3})):(u(),v(L,{key:1},[e.loading?(u(),w(i,{key:0})):x((u(),v("div",He,[m(e.$slots,"default")],512)),[[U,e.show]])],64))],2),e.$slots.footer?(u(),v("div",{key:0,class:S(`${e.prefixCls}__footer`)},[m(e.$slots,"footer")],2)):B("",!0)],2)}var Ae=z(Be,[["render",Le]]);const Ie=typeof window=="undefined";function Me(e){for(const t of e){const n=t.target.__resizeListeners__||[];n.length&&n.forEach(r=>{r()})}}function Z(e,t){Ie||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new ze(Me),e.__ro__.observe(e)),e.__resizeListeners__.push(t))}function J(e,t){!e||!e.__resizeListeners__||(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}function ft(){const e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),e.eventType="message",window.dispatchEvent(e)}var Re={table:{fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},pageSizeOptions:["10","20","30","50","100"],pageLayoutOptions:"total, sizes, prev, pager, next, jumper",defaultPageSize:20},scrollbar:{native:!1}};const Oe={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function Pe({move:e,size:t,bar:n}){const r={},s=`translate${n.axis}(${e}%)`;return r[n.size]=t,r.transform=s,r.msTransform=s,r.webkitTransform=s,r}function je(e,t){return Object.assign(e,t)}function We(e){const t={};for(let n=0;n<e.length;n++)e[n]&&je(t,e[n]);return t}var De=b({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const t=ue(),n=d(),r=fe("scroll-bar-wrap",{}),s=Y(()=>Oe[e.vertical?"vertical":"horizontal"]),o=d({}),a=d(),i=p=>{var h;p.ctrlKey||p.button===2||((h=window.getSelection())==null||h.removeAllRanges(),f(p),o.value[s.value.axis]=p.currentTarget[s.value.offset]-(p[s.value.client]-p.currentTarget.getBoundingClientRect()[s.value.direction]))},l=p=>{var k;const h=Math.abs(p.target.getBoundingClientRect()[s.value.direction]-p[s.value.client]),C=n.value[s.value.offset]/2,E=(h-C)*100/((k=t==null?void 0:t.vnode.el)==null?void 0:k[s.value.offset]);r.value[s.value.scroll]=E*r.value[s.value.scrollSize]/100},f=p=>{p.stopImmediatePropagation(),a.value=!0,N(document,"mousemove",g),N(document,"mouseup",_),document.onselectstart=()=>!1},g=p=>{var R,O;if(a.value===!1)return;const h=o.value[s.value.axis];if(!h)return;const C=(((R=t==null?void 0:t.vnode.el)==null?void 0:R.getBoundingClientRect()[s.value.direction])-p[s.value.client])*-1,E=n.value[s.value.offset]-h,k=(C-E)*100/((O=t==null?void 0:t.vnode.el)==null?void 0:O[s.value.offset]);r.value[s.value.scroll]=k*r.value[s.value.scrollSize]/100};function _(){a.value=!1,o.value[s.value.axis]=0,F(document,"mousemove",g),document.onselectstart=null}return pe(()=>{F(document,"mouseup",_)}),()=>V("div",{class:["scrollbar__bar","is-"+s.value.key],onMousedown:l},V("div",{ref:n,class:"scrollbar__thumb",onMousedown:i,style:Pe({size:e.size,move:e.move,bar:s.value})}))}});const{scrollbar:M}=Re;var te;const Fe=b({name:"Scrollbar",components:{Bar:De},props:{native:{type:Boolean,default:(te=M==null?void 0:M.native)!=null?te:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const t=d("0"),n=d("0"),r=d(0),s=d(0),o=d(),a=d();de("scroll-bar-wrap",o);const i=Y(()=>Array.isArray(e.wrapStyle)?We(e.wrapStyle):e.wrapStyle),l=()=>{e.native||(s.value=c(o).scrollTop*100/c(o).clientHeight,r.value=c(o).scrollLeft*100/c(o).clientWidth)},f=()=>{if(!c(o))return;const g=c(o).clientHeight*100/c(o).scrollHeight,_=c(o).clientWidth*100/c(o).scrollWidth;n.value=g<100?g+"%":"",t.value=_<100?_+"%":""};return X(()=>{e.native||(I(f),e.noresize||(Z(c(a),f),Z(c(o),f),addEventListener("resize",f)))}),ve(()=>{e.native||e.noresize||(J(c(a),f),J(c(o),f),removeEventListener("resize",f))}),{moveX:r,moveY:s,sizeWidth:t,sizeHeight:n,style:i,wrap:o,resize:a,update:f,handleScroll:l}}}),Ne={class:"scrollbar"};function xe(e,t,n,r,s,o){const a=y("bar");return u(),v("div",Ne,[A("div",{ref:"wrap",class:S([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:Q(e.style),onScroll:t[0]||(t[0]=(...i)=>e.handleScroll&&e.handleScroll(...i))},[(u(),w(me(e.tag),{ref:"resize",class:S(["scrollbar__view",e.viewClass]),style:Q(e.viewStyle)},{default:$(()=>[m(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?B("",!0):(u(),v(L,{key:0},[T(a,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),T(a,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}var Ue=z(Fe,[["render",xe]]);const Ye=(e,t,n,r)=>(e/=r/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)),Ve=(e,t)=>{e.scrollTop=t},Xe=e=>e.scrollTop;function ee({el:e,to:t,duration:n=500,callback:r}){const s=d(!1),o=Xe(e),a=t-o,i=20;let l=0;n=re(n)?500:n;const f=function(){if(!c(s))return;l+=i;const p=Ye(l,o,a,n);Ve(e,p),l<n&&c(s)?requestAnimationFrame(f):r&&ae(r)&&r()};return{start:()=>{s.value=!0,f()},stop:()=>{s.value=!1}}}const Qe=b({name:"ScrollContainer",components:{Scrollbar:Ue},setup(){const e=d(null),{prefixCls:t}=D("scroll-container");function n(o,a=500){const i=c(e);!i||I(()=>{const l=c(i.wrap);if(!l)return;const{start:f}=ee({el:l,to:o,duration:a});f()})}function r(){const o=c(e);return o?o.wrap:null}function s(){const o=c(e);!o||I(()=>{const a=c(o.wrap);if(!a)return;const i=a.scrollHeight,{start:l}=ee({el:a,to:i});l()})}return{prefixCls:t,scrollbarRef:e,scrollTo:n,scrollBottom:s,getScrollWrap:r}}});function qe(e,t,n,r,s,o){const a=y("Scrollbar");return u(),w(a,{ref:"scrollbarRef",class:S(e.prefixCls)},{default:$(()=>[m(e.$slots,"default")]),_:3},8,["class"])}var Ge=z(Qe,[["render",qe]]);function Ke({target:e,root:t,onIntersect:n,rootMargin:r="0px",threshold:s=.1}){let o=()=>{};const a=d(null),i=ge(()=>{o(),a.value=new IntersectionObserver(n,{root:t?t.value:null,rootMargin:r,threshold:s});const l=e.value;l&&a.value.observe(l),o=()=>{a.value&&(a.value.disconnect(),e.value&&a.value.unobserve(e.value))}});return{observer:a,stop:()=>{o(),i()}}}const Ze=b({name:"LazyContainer",components:{ElSkeleton:G},inheritAttrs:!1,props:{timeout:{type:Number},viewport:{type:typeof window!="undefined"?window.HTMLElement:Object,default:()=>null},threshold:{type:String,default:"0px"},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},tag:{type:String,default:"div"},maxWaitingTime:{type:Number,default:120},transitionName:{type:String,default:"lazy-container"}},emits:["init"],setup(e,{emit:t}){const n=d(),r=he({isInit:!1,loading:!1,intersectionObserverInstance:null});X(()=>{s(),a()});function s(){const{timeout:i}=e;i&&K(()=>{o()},i)}function o(){r.loading=!0,K(()=>{r.isInit||(r.isInit=!0,t("init"))},e.maxWaitingTime||120)}function a(){const{timeout:i,direction:l,threshold:f}=e;if(i)return;let g="0px";switch(l){case"vertical":g=`${f} 0px`;break;case"horizontal":g=`0px ${f}`;break}try{const{stop:_,observer:p}=Ke({rootMargin:g,target:q(n.value,"$el"),onIntersect:h=>{(h[0].isIntersecting||h[0].intersectionRatio)&&(o(),p&&_())},root:q(e,"viewport")})}catch(_){o()}}return W({elRef:n},_e(r))}}),Je={key:"component"},et={key:"skeleton"};function tt(e,t,n,r,s,o){const a=y("ElSkeleton");return u(),w(we,ye({class:"h-full w-full"},e.$attrs,{ref:"elRef",name:e.transitionName,tag:e.tag,mode:"out-in"}),{default:$(()=>[e.isInit?(u(),v("div",Je,[m(e.$slots,"default",{loading:e.loading})])):(u(),v("div",et,[e.$slots.skeleton?m(e.$slots,"skeleton",{key:0}):(u(),w(a,{key:1}))]))]),_:3},16,["name","tag"])}var nt=z(Ze,[["render",tt]]);const pt=H(Ae),dt=H(Ge),vt=H(nt);export{pt as C,vt as L,dt as S,Z as a,Re as c,J as r,ft as t,ee as u};
