var ce=Object.defineProperty,pe=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var U=(e,s,o)=>s in e?ce(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,m=(e,s)=>{for(var o in s||(s={}))de.call(s,o)&&U(e,o,s[o]);if(M)for(var o of M(s))me.call(s,o)&&U(e,o,s[o]);return e},L=(e,s)=>pe(e,fe(s));var Y=(e,s,o)=>new Promise((p,a)=>{var f=l=>{try{n(o.next(l))}catch(u){a(u)}},t=l=>{try{n(o.throw(l))}catch(u){a(u)}},n=l=>l.done?p(l.value):Promise.resolve(l.value).then(f,t);n((o=o.apply(e,s)).next())});import{e as G,aS as ge,_ as O,ah as we,Y as he,u as Ce,ap as K,i as Q,ab as ye,ad as Z,w as De}from"./index.ec0491db.js";import{z as $e,S as ke,A as ve}from"./ex-pkg-element-plus.7627c250.js";import{y as R,Z as $,z as g,A as v,B as w,F as J,G as T,H as h,P as A,Q as V,O as b,L as B,Y as W,K as X,R as F,a as C,l as y,u as i,ak as P,b as H,U as x,m as E,af as ee,D as j,a3 as Be,ag as be,ah as Pe,_ as te,w as Se}from"./ex-pkg-@vue.dfd8e273.js";import{T as Te}from"./ex-pkg-@element-plus.e8ce6c8b.js";import{u as Ve}from"./useAttrs.e78ff19a.js";import{c4 as Fe,a as Ee}from"./ex-pkg-vendor.0d33d667.js";const{t:oe}=G(),_={showConfirmBtn:{type:Boolean,default:!0},confirmText:{type:String,default:oe("common.confirmText")},confirmType:{type:String,default:"primary"},confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelText:{type:String,default:oe("common.cancelText")},cancelType:{type:String,default:"default"},showFooter:{type:Boolean},footerHeight:{type:Number,default:60}},se={isDetail:{type:Boolean},showDetailBack:{type:Boolean,default:!0},loading:{type:Boolean},loadingText:{type:String},closeFunc:{type:[Function,Object],default:null}},Le=m(m(L(m({},ge),{title:{type:String},modelValue:{type:Boolean}}),se),_),Oe=R({name:"BasicDrawerFooter",components:{ElButton:$e},inheritAttrs:!1,props:L(m({},_),{prefixCls:{type:String},height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:s}){function o(){s("ok")}function p(){s("close")}return{handleOk:o,handleClose:p}}});function Re(e,s,o,p,a,f){const t=$("ElButton");return e.showFooter?(g(),v("div",{key:0,class:B(`${e.prefixCls}-footer`),style:W({height:e.height})},[e.$slots.footer?w(e.$slots,"footer",{key:0}):(g(),v(J,{key:1},[w(e.$slots,"insertFooter"),e.showCancelBtn?(g(),T(t,{key:0,onClick:e.handleClose},{default:h(()=>[A(V(e.cancelText),1)]),_:1},8,["onClick"])):b("",!0),w(e.$slots,"centerFooter"),e.showConfirmBtn?(g(),T(t,{key:1,type:e.confirmType,onClick:e.handleOk,loading:e.confirmLoading},{default:h(()=>[A(V(e.confirmText),1)]),_:1},8,["type","onClick","loading"])):b("",!0),w(e.$slots,"appendFooter")],64))],6)):b("",!0)}var Ae=O(Oe,[["render",Re]]);const He=R({name:"BasicDrawerHeader",components:{BasicTitle:we,ArrowLeft:Te},inheritAttrs:!1,props:{prefixCls:{type:String},isDetail:{type:Boolean},showDetailBack:{type:Boolean},title:{type:String}},emits:["close"],setup(e,{emit:s}){function o(){s("close")}return{handleClose:o}}}),je={key:1};function _e(e,s,o,p,a,f){const t=$("ArrowLeft"),n=$("BasicTitle");return e.isDetail?(g(),v("div",{key:0,class:B(`${e.prefixCls}-header`)},[X("span",{class:B(`${e.prefixCls}-header__title`)},[e.showDetailBack?(g(),v("span",{key:0,class:B(`${e.prefixCls}-header__back`),onClick:s[0]||(s[0]=(...l)=>e.handleClose&&e.handleClose(...l))},[F(t)],2)):b("",!0),e.title?(g(),v("span",je,V(e.title),1)):b("",!0)],2),X("span",{class:B(`${e.prefixCls}-header__toolbar`)},[w(e.$slots,"titleToolbar")],2)],2)):(g(),T(n,{key:1,class:B(e.prefixCls)},{default:h(()=>[e.$slots.title?w(e.$slots,"title",{key:0}):(g(),v(J,{key:1},[A(V(e.title||""),1)],64))]),_:3},8,["class"]))}var Ie=O(He,[["render",_e]]);const Ne=R({components:{ElDrawer:ke,ScrollContainer:he,DrawerFooter:Ae,DrawerHeader:Ie},inheritAttrs:!1,props:Le,emits:["visible-change","ok","close","register"],setup(e,{emit:s}){const o=C(!1),p=Ve(),a=C(null),f=C(),{t}=G(),{prefixCls:n}=Ce("basic-drawer"),l={setDrawerProps:ie,emitVisible:void 0},u=E();u&&s("register",l,u.uid);const d=y(()=>K(P(e),i(a))),D=y(()=>{const r=m(m({},i(p)),i(d)),{isDetail:c,width:k,customClass:z}=r;if(c){k||(r.width="100%");const q=`${n}__detail`;r.customClass=z?`${z} ${q}`:q}return r}),re=y(()=>{const r=m({},i(D));return r.customClass=`${n} ${r==null?void 0:r.customClass} basic-drawer-${u==null?void 0:u.uid}`,Fe(r,Object.getOwnPropertyNames(m(m({},_),se)))}),N=y(()=>{const{footerHeight:r,showFooter:c}=i(D);return c&&r?`${parseInt(r)}px`:"0px"}),ne=y(()=>{const r=i(N);return{position:"relative",height:`calc(100% - ${r})`}}),ae=y(()=>{var r;return!!((r=i(D))==null?void 0:r.loading)});H(()=>e.modelValue,(r,c)=>{r!==c&&(o.value=r)},{deep:!0}),H(()=>{var r;return(r=a.value)==null?void 0:r.loading},r=>{var c,k;r?f.value=ve.service({target:`.basic-drawer-${u==null?void 0:u.uid}`,text:((c=a.value)==null?void 0:c.loadingText)||e.loadingText||"Loading"}):(k=f.value)==null||k.close()},{deep:!0}),H(()=>o.value,r=>{x(()=>{var c;s("visible-change",r),u&&((c=l.emitVisible)==null||c.call(l,r,u.uid))})});function le(r){return Y(this,null,function*(){const{closeFunc:c}=i(D);if(s("close",r),c&&Q(c)){const k=yield c();o.value=!k;return}o.value=!1})}function ie(r){a.value=K(i(a)||{},r),Reflect.has(r,"modelValue")&&(o.value=!!r.modelValue)}function ue(){s("ok")}return{onClose:le,t,prefixCls:n,visibleRef:o,getMergeProps:d,getScrollContentStyle:ne,getProps:D,getLoading:ae,getBindValues:re,getFooterHeight:N,handleOk:ue}}});function ze(e,s,o,p,a,f){const t=$("DrawerHeader"),n=$("ScrollContainer"),l=$("DrawerFooter"),u=$("ElDrawer");return g(),T(u,j({onClose:e.onClose},e.getBindValues,{modelValue:e.visibleRef,"onUpdate:modelValue":s[0]||(s[0]=d=>e.visibleRef=d)}),{title:h(()=>[F(t,j(e.getProps,{prefixCls:e.prefixCls,onClose:e.onClose}),ee({_:2},[e.$slots.title?{name:"title",fn:h(()=>[w(e.$slots,"title")])}:void 0,e.$slots.titleToolbar?{name:"titleToolbar",fn:h(()=>[w(e.$slots,"titleToolbar")])}:void 0]),1040,["prefixCls","onClose"])]),default:h(()=>[F(n,{style:W(e.getScrollContentStyle)},{default:h(()=>[w(e.$slots,"default")]),_:3},8,["style"]),F(l,j(e.getProps,{prefixCls:e.prefixCls,height:e.getFooterHeight,onClose:e.onClose,onOk:e.handleOk}),ee({_:2},[Be(Object.keys(e.$slots),d=>({name:d,fn:h(D=>[w(e.$slots,d,be(Pe(D||{})))])}))]),1040,["prefixCls","height","onClose","onOk"])]),_:3},16,["onClose","modelValue"])}var qe=O(Ne,[["render",ze]]);const S=te({}),I=te({});function Je(){if(!E())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=C(null),s=C(!1),o=C("");function p(t,n){i(s)&&ye()&&t===i(e)||(o.value=n,e.value=t,s.value=!0,t.emitVisible=(l,u)=>{I[u]=l})}const a=()=>{const t=i(e);return t||Z("useDrawer instance is undefined!"),t},f={setDrawerProps:t=>{var n;(n=a())==null||n.setDrawerProps(t)},getVisible:y(()=>I[~~i(o)]),openDrawer:(t=!0,n,l=!0)=>{var d;if((d=a())==null||d.setDrawerProps({modelValue:t}),!n)return;if(l){S[i(o)]=null,S[i(o)]=P(n);return}Ee(P(S[i(o)]),P(n))||(S[i(o)]=P(n))},closeDrawer:()=>{var t;(t=a())==null||t.setDrawerProps({modelValue:!1})}};return[p,f]}const We=e=>{const s=C(null),o=E(),p=C("");if(!E())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const a=()=>{const t=i(s);if(!t){Z("useDrawerInner instance is undefined!");return}return t},f=(t,n)=>{p.value=n,s.value=t,o==null||o.emit("register",t,n)};return Se(()=>{const t=S[i(p)];!t||!e||!Q(e)||x(()=>{e(t)})}),[f,{changeLoading:(t=!0)=>{var n;(n=a())==null||n.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var n;(n=a())==null||n.setDrawerProps({confirmLoading:t})},getVisible:y(()=>I[~~i(p)]),closeDrawer:()=>{var t;(t=a())==null||t.setDrawerProps({modelValue:!1})},setDrawerProps:t=>{var n;(n=a())==null||n.setDrawerProps(t)}}]},Xe=De(qe);export{Xe as B,We as a,Je as u};
