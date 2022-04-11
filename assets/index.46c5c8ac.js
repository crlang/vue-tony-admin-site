var pe=Object.defineProperty,ge=Object.defineProperties;var he=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ee=(e,o,l)=>o in e?pe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,g=(e,o)=>{for(var l in o||(o={}))ye.call(o,l)&&ee(e,l,o[l]);if(x)for(var l of x(o))Ce.call(o,l)&&ee(e,l,o[l]);return e},T=(e,o)=>ge(e,he(o));var z=(e,o,l)=>new Promise((c,a)=>{var i=u=>{try{n(l.next(u))}catch(s){a(s)}},t=u=>{try{n(l.throw(u))}catch(s){a(s)}},n=u=>u.done?c(u.value):Promise.resolve(u.value).then(i,t);n((l=l.apply(e,o)).next())});import{am as ve,e as te,_ as A,J as be,K as Me,W as Be,u as He,i as oe,aj as $e,aa as Fe,ac as ne,w as Te}from"./index.b3c9ad7f.js";import{u as Ve}from"./useAttrs.e78ff19a.js";import{ac as ke,u as we,N as De}from"./ex-pkg-element-plus.1726aa79.js";import{c2 as le,a as Se}from"./ex-pkg-vendor.002cab22.js";import{y as L,a as h,l as M,w as I,Z as b,z as y,G as $,H as p,B as C,D as V,u as r,b as ae,q as Re,an as se,U as k,a2 as Pe,I as Ee,A as U,Y as Oe,L as _,P as K,Q as G,O as N,a7 as We,R as w,K as Y,F as je,m as J,af as re,a3 as Ae,ag as Le,ah as Ie,_ as ie,ak as X}from"./ex-pkg-@vue.dfd8e273.js";import{u as Ne}from"./useWindowSizeFn.732207ab.js";import{S as qe}from"./index.4cd5987a.js";import{f as ze,t as Ue}from"./ex-pkg-@vueuse.e5d644bd.js";import{a as _e}from"./index.cd4e42f7.js";import{u as Ye}from"./useTimeout.be9115ef.js";const{t:Q}=te(),ue={showClose:{type:Boolean,default:!0},showFullscreen:{type:Boolean,default:!0},helpMessage:{type:[String,Array],default:""}},ce={useWrapper:{type:Boolean,default:!0},footerOffset:{type:Number,default:0},loading:{type:Boolean,default:!1},loadingTip:{type:String,default:Q("common.loadingText")},modalHeaderHeight:{type:Number,default:56},modalFooterHeight:{type:Number,default:70}},de={showFooter:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},cancelText:{type:String,default:Q("common.cancelText")},cancelButton:{type:Object},showConfirm:{type:Boolean,default:!0},confirmText:{type:String,default:Q("common.confirmText")},confirmButton:{type:Object}},fe=T(g(g(g(g({},ve),ue),ce),de),{modelValue:{type:Boolean},draggable:{type:Boolean,default:!0},scrollTop:{type:Boolean,default:!0},closeFunc:Function,onOpen:Function,onOpened:Function,onClose:Function,onClosed:Function}),Xe=L({name:"BasicDialog",components:{ElDialog:ke},inheritAttrs:!1,props:fe,setup(e){const o=h(!1),l=Ve(),c=M(()=>{const a=g(g({},r(l)),e),i=le(a,["showFullscreen","helpMessage","useWrapper","footerOffset","loading","scrollTop","loadingTip","modalHeaderHeight","modalFooterHeight","showFooter","showCancel","cancelText","showConfirm","confirmText","closeFunc","draggable","confirmButton","cancelButton"]);return i.showClose=!1,i});return I(()=>{o.value=!!e.modelValue}),{visibleRef:o,getBindValue:c}}});function Ke(e,o,l,c,a,i){const t=b("ElDialog");return y(),$(t,V(e.getBindValue,{modelValue:e.visibleRef,"onUpdate:modelValue":o[0]||(o[0]=n=>e.visibleRef=n)}),{title:p(()=>[C(e.$slots,"title")]),footer:p(()=>[C(e.$slots,"footer")]),default:p(()=>[C(e.$slots,"default")]),_:3},16,["modelValue"])}var Ge=A(Xe,[["render",Ke]]);const me=Symbol();function Je(e){return be(e,me)}function Bt(){return Me(me)}const Qe=L({name:"ModalWrapper",components:{ScrollContainer:qe},inheritAttrs:!1,props:g({modelValue:{type:Boolean},fullscreen:{type:Boolean},customClass:{type:String}},ce),emits:["height-change","ext-height"],setup(e,{emit:o}){const l=h(null),c=h(null),a=h(0),i=h(0);let t=0;Ne(s.bind(null,!1)),ze(c,()=>{s()},{attributes:!0,subtree:!0}),Je({redoModalHeight:s});const n=M(()=>({[e.fullscreen?"height":"maxHeight"]:`${r(a)}px`}));I(()=>{e.useWrapper&&s()}),ae(()=>e.fullscreen,f=>{s(),f?i.value=a.value:a.value=i.value}),Re(()=>{const{modalHeaderHeight:f,modalFooterHeight:m}=e;o("ext-height",f+m)}),se(()=>{});function u(){return z(this,null,function*(){k(()=>{var m;const f=r(l);!f||(m=f==null?void 0:f.scrollTo)==null||m.call(f,0)})})}function s(){return z(this,null,function*(){if(!e.modelValue)return;const f=r(l);if(!f)return;const m=f.$el.parentElement;if(!!m){yield k();try{const B=m.parentElement;if(!B)return;const D=B.offsetTop;let H=window.innerHeight-D*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;D<40&&(H-=26),yield k();const F=r(c);if(!F)return;yield k(),t=F.scrollHeight,e.fullscreen?a.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:a.value=t>H?H:t,o("height-change",r(a))}catch(B){console.warn(B)}}})}return{wrapperRef:l,spinRef:c,spinStyle:n,scrollTop:u,setModalHeight:s}}}),Ze=["element-loading-text"];function xe(e,o,l,c,a,i){const t=b("ScrollContainer"),n=Pe("loading");return y(),$(t,{ref:"wrapperRef",class:_(e.customClass)},{default:p(()=>[Ee((y(),U("div",{ref:"spinRef",style:Oe(e.spinStyle),"element-loading-text":e.loadingTip},[C(e.$slots,"default")],12,Ze)),[[n,e.loading]])]),_:3},8,["class"])}var et=A(Qe,[["render",xe]]);const tt=L({name:"BasicModalFooter",components:{ElButton:we},inheritAttrs:!1,props:T(g({},de),{customClass:{type:String}}),emits:["ok","cancel"],setup(e,{emit:o}){function l(a){o("ok",a)}function c(a){o("cancel",a)}return{handleOk:l,handleCancel:c}}});function ot(e,o,l,c,a,i){var n,u;const t=b("ElButton");return e.showFooter?(y(),U("div",{key:0,class:_(e.customClass)},[C(e.$slots,"insertFooter"),e.showCancel?(y(),$(t,V({key:0},e.cancelButton,{type:((n=e.cancelButton)==null?void 0:n.type)||"default",onClick:e.handleCancel}),{default:p(()=>[K(G(e.cancelText),1)]),_:1},16,["type","onClick"])):N("",!0),C(e.$slots,"centerFooter"),e.showConfirm?(y(),$(t,V({key:1},e.confirmButton,{type:((u=e.confirmButton)==null?void 0:u.type)||"primary",onClick:e.handleOk}),{default:p(()=>[K(G(e.confirmText),1)]),_:1},16,["type","onClick"])):N("",!0),C(e.$slots,"appendFooter")],2)):N("",!0)}var nt=A(tt,[["render",ot]]);function lt(e){const o=(a,i)=>getComputedStyle(a)[i],l=a=>{if(!a)return;a.setAttribute("data-drag",r(e.draggable));const i=a.querySelector(".el-dialog__header"),t=a.querySelector(".el-dialog");!i||!t||!r(e.draggable)||(i.style.cursor="move",i.classList.add("is-drag"),i.onmousedown=n=>{if(!n)return;const u=n.clientX,s=n.clientY,f=document.body.clientWidth,m=document.documentElement.clientHeight,B=t.offsetWidth,D=t.offsetHeight,H=t.offsetLeft,F=f-t.offsetLeft-B,q=t.offsetTop,P=m-t.offsetTop-D,S=o(t,"left"),E=o(t,"top");let O=+S,W=+E;S.includes("%")?(O=+document.body.clientWidth*(+S.replace(/%/g,"")/100),W=+document.body.clientHeight*(+E.replace(/%/g,"")/100)):(O=+S.replace(/px/g,""),W=+E.replace(/px/g,"")),document.onmousemove=function(d){let v=d.clientX-u,j=d.clientY-s;-v>H?v=-H:v>F&&(v=F),-j>q?j=-q:j>P&&(j=P),t.style.cssText+=`;left:${v+O}px;top:${j+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},c=()=>{const a=document.querySelectorAll(".el-overlay");for(const i of Array.from(a)){if(!i)continue;const t=o(i,"display"),n=i.getAttribute("data-drag");t!=="none"&&(n===null||r(e.destroyOnClose))&&l(i)}};I(()=>{!r(e.modelValue)||!r(e.draggable)||Ye(()=>{c()},30)})}const at=L({name:"BasicModalHeader",components:{ElTooltip:De,BasicTitle:_e,SvgIcon:Be},inheritAttrs:!1,props:g({modelValue:{type:Boolean},destroyOnClose:{type:Boolean},fullscreen:{type:Boolean},draggable:{type:Boolean},customClass:{type:String},customTitle:{type:String}},ue),emits:["cancel","fullscreen"],setup(e,{emit:o}){const{t:l}=te(),{modelValue:c,draggable:a,destroyOnClose:i}=We(e);lt({modelValue:c,destroyOnClose:i,draggable:a});function t(s){!e.showFullscreen||(s.stopPropagation(),u(s))}function n(s){o("cancel",s)}function u(s){s==null||s.stopPropagation(),s==null||s.preventDefault(),o("fullscreen")}return{t:l,handleCancel:n,handleFullscreen:u,handleTitleDbClick:t}}});function st(e,o,l,c,a,i){const t=b("BasicTitle"),n=b("SvgIcon"),u=b("ElTooltip");return y(),U("div",{class:_(e.customClass),onDblclick:o[3]||(o[3]=(...s)=>e.handleTitleDbClick&&e.handleTitleDbClick(...s))},[w(t,{helpMessage:e.helpMessage},{default:p(()=>[K(G(e.customTitle),1)]),_:1},8,["helpMessage"]),Y("div",{class:_(`${e.customClass}__extra`)},[e.showFullscreen?(y(),U(je,{key:0},[e.fullscreen?(y(),$(u,{key:0,content:e.t("component.modal.restore"),placement:"bottom"},{default:p(()=>[Y("span",{onClick:o[0]||(o[0]=(...s)=>e.handleFullscreen&&e.handleFullscreen(...s))},[w(n,{name:"fullscreen-exit"})])]),_:1},8,["content"])):(y(),$(u,{key:1,content:e.t("component.modal.maximize"),placement:"bottom"},{default:p(()=>[Y("span",{onClick:o[1]||(o[1]=(...s)=>e.handleFullscreen&&e.handleFullscreen(...s))},[w(n,{name:"fullscreen"})])]),_:1},8,["content"]))],64)):N("",!0),e.showClose?(y(),$(u,{key:1,content:e.t("component.modal.close"),placement:"bottom"},{default:p(()=>[Y("span",{onClick:o[2]||(o[2]=(...s)=>e.handleCancel&&e.handleCancel(...s))},[w(n,{name:"close"})])]),_:1},8,["content"])):N("",!0)],2)],34)}var rt=A(at,[["render",st]]);const it=L({name:"BasicModal",components:{Modal:Ge,ModalWrapper:et,ModalFooter:nt,ModalHeader:rt},inheritAttrs:!1,props:fe,emits:["visible-change","height-change","cancel","ok","register","update:modelValue"],setup(e,{emit:o}){const l=h(!1),c=h(null),a=h(null),{prefixCls:i}=He("basic-modal"),t=h(!1),n=h(!1),u=h(0),s={setModalProps:P,emitVisible:void 0,redoModalHeight:()=>{k(()=>{r(a)&&r(a).setModalHeight()})}},f=J();f&&o("register",s,f.uid);const m=M(()=>g(g({},e),r(c))),B=M(()=>T(g({},r(m)),{fullscreen:r(t),draggable:r(n),customClass:i})),D=M(()=>T(g({},r(m)),{fullscreen:r(t),modelValue:r(l),draggable:r(n),customClass:`${i}__header`,customTitle:r(m).title})),H=M(()=>T(g({},r(m)),{fullscreen:r(t),modelValue:r(l),customClass:`${i}__body`})),F=M(()=>T(g({},r(m)),{customClass:`${i}__footer`}));I(()=>{l.value=!!e.modelValue,t.value=!!e.fullscreen,n.value=!!e.draggable}),ae(()=>r(l),d=>{var v;o("visible-change",d),o("update:modelValue",d),f&&((v=s.emitVisible)==null||v.call(s,d,f.uid)),k(()=>{(e==null?void 0:e.scrollTop)&&d&&r(a)&&r(a).scrollTop()})},{immediate:!1});function q(d){return z(this,null,function*(){if(d==null||d.stopPropagation(),e.closeFunc&&oe(e.closeFunc)){const v=yield e.closeFunc();l.value=!v;return}l.value=!1,o("cancel",d)})}function P(d){c.value=$e(r(c)||{},d),Reflect.has(d,"modelValue")&&(l.value=!!d.modelValue),Reflect.has(d,"fullscreen")&&(t.value=!!d.fullscreen)}function S(d){o("ok",d)}function E(d){o("height-change",d)}function O(d){u.value=d}function W(){P({fullscreen:!r(t)})}return{prefixCls:i,handleCancel:q,getBaiscBindValue:B,getHeaderBindValue:D,getWrapperBindValue:H,getFooterBindValue:F,handleFullscreen:W,fullscreenRef:t,getMergeProps:m,handleOk:S,visibleRef:l,draggableRef:n,omit:le,modalWrapperRef:a,handleExtHeight:O,handleHeightChange:E}}});function ut(e,o,l,c,a,i){const t=b("ModalHeader"),n=b("ModalFooter"),u=b("ModalWrapper"),s=b("Modal");return y(),$(s,V(e.getBaiscBindValue,{modelValue:e.visibleRef,"onUpdate:modelValue":o[0]||(o[0]=f=>e.visibleRef=f)}),re({default:p(()=>[w(u,V({ref:"modalWrapperRef"},e.getWrapperBindValue,{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:p(()=>[C(e.$slots,"default")]),_:3},16,["onExtHeight","onHeightChange"])]),_:2},[e.$slots.title?{name:"title",fn:p(()=>[C(e.$slots,"title")])}:{name:"title",fn:p(()=>[w(t,V(e.getHeaderBindValue,{onFullscreen:e.handleFullscreen,onCancel:e.handleCancel}),null,16,["onFullscreen","onCancel"])])},e.$slots.footer?{name:"footer",fn:p(()=>[C(e.$slots,"footer")])}:{name:"footer",fn:p(()=>[w(n,V(e.getFooterBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),re({_:2},[Ae(Object.keys(e.$slots),f=>({name:f,fn:p(m=>[C(e.$slots,f,Le(Ie(m||{})))])}))]),1040,["onOk","onCancel"])])}]),1040,["modelValue"])}var ct=A(it,[["render",ut]]);const R=ie({}),Z=ie({});function Ht(){const e=h(null),o=h(!1),l=h("");function c(t,n){if(!J())throw new Error("useModal() can only be used inside setup() or functional components!");l.value=n,se(()=>{e.value=null,o.value=!1,R[r(l)]=null}),!(r(o)&&Fe()&&t===r(e))&&(e.value=t,o.value=!0,t.emitVisible=(u,s)=>{Z[s]=u})}const a=()=>{const t=r(e);return t||ne("useModal instance is undefined!"),t},i={setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},getVisible:M(()=>Z[~~r(l)]),redoModalHeight:()=>{var t,n;(n=(t=a())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,u=!0)=>{var m;if((m=a())==null||m.setModalProps({modelValue:t}),!n)return;const s=r(l);if(u){R[s]=null,R[s]=X(n);return}Se(X(R[s]),X(n))||(R[s]=X(n))},closeModal:()=>{var t;(t=a())==null||t.setModalProps({modelValue:!1})}};return[c,i]}const $t=e=>{const o=h(null),l=J(),c=h(""),a=()=>{const t=r(o);return t||ne("useModalInner instance is undefined!"),t},i=(t,n)=>{Ue(()=>{o.value=null}),c.value=n,o.value=t,l==null||l.emit("register",t,n)};return I(()=>{const t=R[r(c)];!t||!e||!oe(e)||k(()=>{e(t)})}),[i,{changeLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({loading:t})},getVisible:M(()=>Z[~~r(c)]),changeConfirmLoading:(t=!0)=>{var n;(n=a())==null||n.setModalProps({confirmButton:{loading:t}})},closeModal:()=>{var t;(t=a())==null||t.setModalProps({modelValue:!1})},setModalProps:t=>{var n;(n=a())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=a())==null?void 0:n.redoModalHeight;t&&t()}}]},Ft=Te(ct);export{Ft as B,$t as a,Ht as b,Bt as u};
