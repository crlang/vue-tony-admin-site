import{d as _,r as d,K as O,c as R,ac as X,bX as B,W as j,D as N,Z as U,U as z,b as s,ak as Y,_ as W,e as E,o as h,f as H,g as V,k as D,i as I,F as M,n as w,G as T,H as x,al as G,h as k,l as K,m as q,aE as Q}from"./index.a812ffa9.js";import{a as A,r as P}from"./index.00e0b22a.js";const Z={table:{fetchSetting:{pageField:"page",sizeField:"pageSize",listField:"items",totalField:"total"},defaultPageAlign:"left",defaultPageSize:20,pageSizeOptions:["10","20","30","50","100"],pageLayoutOptions:"total, prev, pager, next, jumper",defaultSortFn:e=>{const{prop:l,order:n}=e;return{order:n,prop:l}},defaultFilterFn:e=>e},form:{defaultItemSize:4,defaultItemGutter:16,fullColumnSize:24},upload:{urlField:"url"},scrollbar:{native:!1}},J={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}};function ee({move:e,size:l,bar:n}){const r={},t=`translate${n.axis}(${e}%)`;return r[n.size]=l,r.transform=t,r.msTransform=t,r.webkitTransform=t,r}function te(e,l){return Object.assign(e,l)}function ne(e){const l={};for(let n=0;n<e.length;n++)e[n]&&te(l,e[n]);return l}const le=_({name:"Bar",props:{vertical:Boolean,size:String,move:Number},setup(e){const l=j(),n=d(),r=O("scroll-bar-wrap",{}),t=R(()=>J[e.vertical?"vertical":"horizontal"]),o=d({}),c=d(),m=i=>{var p;i.ctrlKey||i.button===2||((p=window.getSelection())==null||p.removeAllRanges(),a(i),o.value[t.value.axis]=i.currentTarget[t.value.offset]-(i[t.value.client]-i.currentTarget.getBoundingClientRect()[t.value.direction]))},u=i=>{var g;const p=Math.abs(i.target.getBoundingClientRect()[t.value.direction]-i[t.value.client]),S=n.value[t.value.offset]/2,y=(p-S)*100/((g=l==null?void 0:l.vnode.el)==null?void 0:g[t.value.offset]);r.value[t.value.scroll]=y*r.value[t.value.scrollSize]/100},a=i=>{i.stopImmediatePropagation(),c.value=!0,document.addEventListener("mousemove",f,!1),document.addEventListener("mouseup",v,!1),document.onselectstart=()=>!1},f=i=>{var C,$;if(c.value===!1)return;const p=o.value[t.value.axis];if(!p)return;const S=(((C=l==null?void 0:l.vnode.el)==null?void 0:C.getBoundingClientRect()[t.value.direction])-i[t.value.client])*-1,y=n.value[t.value.offset]-p,g=(S-y)*100/(($=l==null?void 0:l.vnode.el)==null?void 0:$[t.value.offset]);r.value[t.value.scroll]=g*r.value[t.value.scrollSize]/100};function v(){c.value=!1,o.value[t.value.axis]=0,document.removeEventListener("mousemove",f,!1),document.onselectstart=null}return X(()=>{document.removeEventListener("mouseup",v,!1)}),()=>B("div",{class:["scrollbar__bar",`is-${t.value.key}`],onMousedown:u},B("div",{ref:n,class:"scrollbar__thumb",onMousedown:m,style:ee({size:e.size,move:e.move,bar:t.value})}))}});const{scrollbar:b}=Z;var L;const oe=_({name:"Scrollbar",components:{Bar:le},props:{native:{type:Boolean,default:(L=b==null?void 0:b.native)!=null?L:!1},wrapStyle:{type:[String,Array],default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array],default:""},noresize:Boolean,tag:{type:String,default:"div"}},setup(e){const l=d("0"),n=d("0"),r=d(0),t=d(0),o=d(),c=d();N("scroll-bar-wrap",o);const m=R(()=>Array.isArray(e.wrapStyle)?ne(e.wrapStyle):e.wrapStyle),u=()=>{e.native||(t.value=s(o).scrollTop*100/s(o).clientHeight,r.value=s(o).scrollLeft*100/s(o).clientWidth)},a=()=>{if(!s(o))return;const f=s(o).clientHeight*100/s(o).scrollHeight,v=s(o).clientWidth*100/s(o).scrollWidth;n.value=f<100?`${f}%`:"",l.value=v<100?`${v}%`:""};return U(()=>{e.native||(z(a),e.noresize||(A(s(c),a),A(s(o),a),addEventListener("resize",a)))}),Y(()=>{e.native||e.noresize||(P(s(c),a),P(s(o),a),removeEventListener("resize",a))}),{moveX:r,moveY:t,sizeWidth:l,sizeHeight:n,style:m,wrap:o,resize:c,update:a,handleScroll:u}}}),re={class:"scrollbar"};function se(e,l,n,r,t,o){const c=E("bar");return h(),H("div",re,[V("div",{ref:"wrap",class:w([e.wrapClass,"scrollbar__wrap",e.native?"":"scrollbar__wrap--hidden-default"]),style:T(e.style),onScroll:l[0]||(l[0]=(...m)=>e.handleScroll&&e.handleScroll(...m))},[(h(),D(x(e.tag),{ref:"resize",class:w(["scrollbar__view",e.viewClass]),style:T(e.viewStyle)},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["class","style"]))],38),e.native?K("",!0):(h(),H(G,{key:0},[k(c,{move:e.moveX,size:e.sizeWidth},null,8,["move","size"]),k(c,{vertical:"",move:e.moveY,size:e.sizeHeight},null,8,["move","size"])],64))])}const ae=W(oe,[["render",se]]),ie=(e,l,n,r)=>(e/=r/2,e<1?n/2*e*e+l:(e--,-n/2*(e*(e-2)-1)+l));function F({el:e,to:l,duration:n=500,callback:r}){var i;const t=d(!1),o=(i=e.scrollTop)!=null?i:0,c=l-o,m=20;let u=0;n=n!=null?n:500;const a=function(){if(!s(t))return;u+=m;const p=ie(u,o,c,n);e.scrollTop=p,u<n&&s(t)?requestAnimationFrame(a):typeof r=="function"&&r()};return{start:()=>{t.value=!0,a()},stop:()=>{t.value=!1}}}const ce=_({name:"ScrollContainer",components:{Scrollbar:ae},setup(e,{expose:l}){const n=d(null),{prefixCls:r}=q("scroll-container");function t(u,a=500){const f=s(n);!f||z(()=>{const v=s(f.wrap);if(!v)return;const{start:i}=F({el:v,to:u,duration:a});i()})}function o(){const u=s(n);return u?u.wrap:null}function c(){const u=s(n);!u||z(()=>{const a=s(u.wrap);if(!a)return;const f=a.scrollHeight,{start:v}=F({el:a,to:f});v()})}const m={wrap:null,scrollTo:t,scrollBottom:c,getScrollWrap:o};return l(m),{prefixCls:r,scrollbarRef:n,...m}}});function ue(e,l,n,r,t,o){const c=E("Scrollbar");return h(),D(c,{ref:"scrollbarRef",class:w(e.prefixCls)},{default:I(()=>[M(e.$slots,"default")]),_:3},8,["class"])}const fe=W(ce,[["render",ue]]),me=Q(fe);export{me as S,Z as c,F as u};
