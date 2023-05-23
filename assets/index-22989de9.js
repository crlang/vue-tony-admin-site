var X=Object.defineProperty;var B=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var A=(e,n,t)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,T=(e,n)=>{for(var t in n||(n={}))Y.call(n,t)&&A(e,t,n[t]);if(B)for(var t of B(n))U.call(n,t)&&A(e,t,n[t]);return e};import{_ as W,b as V,I as q}from"./index-795cdaa0.js";import{a as H,r as k}from"./index-d5a424e4.js";import{E as _,r as d,f as D,a as x,ab as L,B as G,g as J,D as K,o as Q,n as z,u as s,A as Z,ac as M,p as S,q as P,t as ee,I as O,J as j,F as N,L as w,Z as F,M as te,R as ne,S as R,O as le}from"./vue-d691a816.js";const oe={table:{defaultColumnAlign:"left",fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},defaultPageAlign:"center",defaultPageSize:20,pageSizeOptions:["10","20","30","50","100"],pageLayoutOptions:"total, prev, pager, next, jumper",defaultSortFn:e=>{const{prop:n,order:t}=e;return{order:t,prop:n}},defaultFilterFn:e=>e},form:{defaultItemSize:4,defaultItemGutter:16,fullColumnSize:24},upload:{urlField:"url"},scrollbar:{native:!1}},re={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function se({move:e,size:n,bar:t}){const r={},l=`translate${t.axis}(${e}%)`;return r[t.size]=n,r.transform=l,r.msTransform=l,r.webkitTransform=l,r}function ae(e,n){return Object.assign(e,n)}function ie(e){const n={};for(let t=0;t<e.length;t++)e[t]&&ae(n,e[t]);return n}const ce=_({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const n=J(),t=d(),r=G("scroll-bar-wrap",{}),l=D(()=>re[e.vertical?"vertical":"horizontal"]),o=d({}),c=d(),m=i=>{var p;i.ctrlKey||i.button===2||((p=window.getSelection())==null||p.removeAllRanges(),a(i),o.value[l.value.axis]=i.currentTarget[l.value.offset]-(i[l.value.client]-i.currentTarget.getBoundingClientRect()[l.value.direction]))},u=i=>{var g;const p=Math.abs(i.target.getBoundingClientRect()[l.value.direction]-i[l.value.client]),h=t.value[l.value.offset]/2,y=(p-h)*100/((g=n==null?void 0:n.vnode.el)==null?void 0:g[l.value.offset]);r.value[l.value.scroll]=y*r.value[l.value.scrollSize]/100},a=i=>{i.stopImmediatePropagation(),c.value=!0,document.addEventListener("mousemove",f,!1),document.addEventListener("mouseup",v,!1),document.onselectstart=()=>!1},f=i=>{var C,$;if(c.value===!1)return;const p=o.value[l.value.axis];if(!p)return;const h=(((C=n==null?void 0:n.vnode.el)==null?void 0:C.getBoundingClientRect()[l.value.direction])-i[l.value.client])*-1,y=t.value[l.value.offset]-p,g=(h-y)*100/(($=n==null?void 0:n.vnode.el)==null?void 0:$[l.value.offset]);r.value[l.value.scroll]=g*r.value[l.value.scrollSize]/100};function v(){c.value=!1,o.value[l.value.axis]=0,document.removeEventListener("mousemove",f,!1),document.onselectstart=null}return x(()=>{document.removeEventListener("mouseup",v,!1)}),()=>L("div",{class:["scrollbar__bar",`is-${l.value.key}`],onMousedown:u},L("div",{ref:t,class:"scrollbar__thumb",onMousedown:m,style:se({size:e.size,move:e.move,bar:l.value})}))}}),{scrollbar:b}=oe;var I;const ue=_({name:"Scrollbar",components:{Bar:ce},props:{native:{type:Boolean,default:(I=b==null?void 0:b.native)!=null?I:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const n=d("0"),t=d("0"),r=d(0),l=d(0),o=d(),c=d();K("scroll-bar-wrap",o);const m=D(()=>Array.isArray(e.wrapStyle)?ie(e.wrapStyle):e.wrapStyle),u=()=>{e.native||(l.value=s(o).scrollTop*100/s(o).clientHeight,r.value=s(o).scrollLeft*100/s(o).clientWidth)},a=()=>{if(!s(o))return;const f=s(o).clientHeight*100/s(o).scrollHeight,v=s(o).clientWidth*100/s(o).scrollWidth;t.value=f<100?`${f}%`:"",n.value=v<100?`${v}%`:""};return Q(()=>{e.native||(z(a),e.noresize||(H(s(c),a),H(s(o),a),addEventListener("resize",a)))}),Z(()=>{e.native||e.noresize||(k(s(c),a),k(s(o),a),removeEventListener("resize",a))}),{moveX:r,moveY:l,sizeWidth:n,sizeHeight:t,style:m,wrap:o,resize:c,update:a,handleScroll:u}}});const fe={class:"scrollbar"};function ve(e,n,t,r,l,o){const c=M("bar");return S(),P("div",fe,[ee("div",{ref:"wrap",class:w([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:F(e.style),onScroll:n[0]||(n[0]=(...m)=>e.handleScroll&&e.handleScroll(...m))},[(S(),O(te(e.tag),{ref:"resize",class:w(["scrollbar__view",e.viewClass]),style:F(e.viewStyle)},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?le("",!0):(S(),P(ne,{key:0},[R(c,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),R(c,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}const de=W(ue,[["render",ve]]),me=(e,n,t,r)=>(e/=r/2,e<1?t/2*e*e+n:(e--,-t/2*(e*(e-2)-1)+n));function E({el:e,to:n,duration:t=500,callback:r}){var i;const l=d(!1),o=(i=e.scrollTop)!=null?i:0,c=n-o,m=20;let u=0;t=t!=null?t:500;const a=function(){if(!s(l))return;u+=m;const p=me(u,o,c,t);e.scrollTop=p,u<t&&s(l)?requestAnimationFrame(a):typeof r=="function"&&r()};return{start:()=>{l.value=!0,a()},stop:()=>{l.value=!1}}}const pe=_({name:"ScrollContainer",components:{Scrollbar:de},setup(e,{expose:n}){const t=d(null),{prefixCls:r}=V("scroll-container");function l(u,a=500){const f=s(t);f&&z(()=>{const v=s(f.wrap);if(!v)return;const{start:i}=E({el:v,to:u,duration:a});i()})}function o(){const u=s(t);return u?u.wrap:null}function c(){const u=s(t);u&&z(()=>{const a=s(u.wrap);if(!a)return;const f=a.scrollHeight,{start:v}=E({el:a,to:f});v()})}const m={wrap:null,scrollTo:l,scrollBottom:c,getScrollWrap:o};return n(m),T({prefixCls:r,scrollbarRef:t},m)}});function ge(e,n,t,r,l,o){const c=M("Scrollbar");return S(),O(c,{ref:"scrollbarRef",class:w(e.prefixCls)},{default:j(()=>[N(e.$slots,"default")]),_:3},8,["class"])}const Se=W(pe,[["render",ge]]),we=q(Se);export{we as S,oe as c,E as u};
