var he=Object.defineProperty,Ce=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ne=(e,l,t)=>l in e?he(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,$=(e,l)=>{for(var t in l||(l={}))be.call(l,t)&&ne(e,t,l[t]);if(oe)for(var t of oe(l))ve.call(l,t)&&ne(e,t,l[t]);return e},A=(e,l)=>Ce(e,ye(l));var U=(e,l,t)=>new Promise((u,d)=>{var i=s=>{try{n(t.next(s))}catch(r){d(r)}},a=s=>{try{n(t.throw(s))}catch(r){d(r)}},n=s=>s.done?u(s.value):Promise.resolve(s.value).then(i,a);n((t=t.apply(e,l)).next())});import{C as te,d as j,bc as $e,D as se,bf as ke,c as w,dG as Me,o as C,f as R,g as S,I as b,n as M,b as o,t as J,h as T,i as g,j as F,K as Be,$ as we,k as I,J as le,bI as Te,dH as Fe,a9 as Ee,a4 as He,F as Re,r as v,M as Ve,dI as De,v as ae,x as Se,b_ as Ie,b$ as Pe,bd as re,as as Oe,c0 as Ae,L as _e,bJ as Le,_ as Z,e as H,am as G,m as Y,bF as ze,bG as We,aA as x,w as ie,R as L,bU as qe,z as je,U as ee,l as Ne,cz as Ue,aB as q,s as de,bC as K,cB as Q,ab as Ke,cC as Je,az as Ge,aC as Ye}from"./index.61be89a1.js";import{c as Qe}from"./index.8337b38c.js";import{B as Xe}from"./index.0526f740.js";import{E as Ze}from"./index.91f8c4ba.js";import{u as xe}from"./useWindowSizeFn.a3ba0925.js";import{S as eo}from"./index.9574a6b4.js";import{E as oo}from"./index.37ecb140.js";import{c as no,e as so,b as to,f as lo}from"./drawer.0f38de7e.js";import{c as ao}from"./refs.a78f8491.js";import{u as ro}from"./use-dialog.8207f305.js";import{i as io}from"./isEqual.755d4a14.js";const ce=Symbol("dialogInjectionKey"),co=["aria-label"],uo=["id"],fo={name:"ElDialogContent"},po=j(A($({},fo),{props:no,emits:so,setup(e){const l=e,{t}=$e(),{Close:u}=Fe,{dialogRef:d,headerRef:i,bodyId:a,ns:n,style:s}=se(ce),{focusTrapRef:r}=se(ke),m=ao(r,d),f=w(()=>l.draggable);return Me(d,i,f),(p,k)=>(C(),R("div",{ref:o(m),class:M([o(n).b(),o(n).is("fullscreen",p.fullscreen),o(n).is("draggable",o(f)),{[o(n).m("center")]:p.center},p.customClass]),style:le(o(s)),tabindex:"-1",onClick:k[1]||(k[1]=Te(()=>{},["stop"]))},[S("header",{ref_key:"headerRef",ref:i,class:M(o(n).e("header"))},[b(p.$slots,"header",{},()=>[S("span",{role:"heading",class:M(o(n).e("title"))},J(p.title),3)]),p.showClose?(C(),R("button",{key:0,"aria-label":o(t)("el.dialog.close"),class:M(o(n).e("headerbtn")),type:"button",onClick:k[0]||(k[0]=V=>p.$emit("close"))},[T(o(we),{class:M(o(n).e("close"))},{default:g(()=>[(C(),F(Be(p.closeIcon||o(u))))]),_:1},8,["class"])],10,co)):I("v-if",!0)],2),S("div",{id:o(a),class:M(o(n).e("body"))},[b(p.$slots,"default")],10,uo),p.$slots.footer?(C(),R("footer",{key:0,class:M(o(n).e("footer"))},[b(p.$slots,"footer")],2)):I("v-if",!0)],6))}}));var go=te(po,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const mo=["aria-label","aria-labelledby","aria-describedby"],ho={name:"ElDialog"},Co=j(A($({},ho),{props:to,emits:lo,setup(e,{expose:l}){const t=e,u=Ee();He({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},w(()=>!!u.title));const d=Re("dialog"),i=v(),a=v(),n=v(),{visible:s,titleId:r,bodyId:m,style:f,rendered:p,zIndex:k,afterEnter:V,afterLeave:E,beforeLeave:z,handleClose:P,onModalClick:c,onOpenAutoFocus:h,onCloseAutoFocus:B,onCloseRequested:N}=ro(t,i);Ve(ce,{dialogRef:i,headerRef:a,bodyId:m,ns:d,rendered:p,style:f});const D=De(c),me=w(()=>t.draggable&&!t.fullscreen);return l({visible:s,dialogContentRef:n}),(y,O)=>(C(),F(Ae,{to:"body",disabled:!y.appendToBody},[T(Oe,{name:"dialog-fade",onAfterEnter:o(V),onAfterLeave:o(E),onBeforeLeave:o(z),persisted:""},{default:g(()=>[ae(T(o(Ie),{"custom-mask-event":"",mask:y.modal,"overlay-class":y.modalClass,"z-index":o(k)},{default:g(()=>[S("div",{role:"dialog","aria-modal":"true","aria-label":y.title||void 0,"aria-labelledby":y.title?void 0:o(r),"aria-describedby":o(m),class:M(`${o(d).namespace.value}-overlay-dialog`),onClick:O[0]||(O[0]=(...W)=>o(D).onClick&&o(D).onClick(...W)),onMousedown:O[1]||(O[1]=(...W)=>o(D).onMousedown&&o(D).onMousedown(...W)),onMouseup:O[2]||(O[2]=(...W)=>o(D).onMouseup&&o(D).onMouseup(...W))},[T(o(Pe),{loop:"",trapped:o(s),"focus-start-el":"container",onFocusAfterTrapped:o(h),onFocusAfterReleased:o(B),onReleaseRequested:o(N)},{default:g(()=>[o(p)?(C(),F(go,{key:0,ref_key:"dialogContentRef",ref:n,"custom-class":y.customClass,center:y.center,"close-icon":y.closeIcon,draggable:o(me),fullscreen:y.fullscreen,"show-close":y.showClose,title:y.title,onClose:o(P)},re({header:g(()=>[y.$slots.title?b(y.$slots,"title",{key:1}):b(y.$slots,"header",{key:0,close:o(P),titleId:o(r),titleClass:o(d).e("title")})]),default:g(()=>[b(y.$slots,"default")]),_:2},[y.$slots.footer?{name:"footer",fn:g(()=>[b(y.$slots,"footer")])}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","title","onClose"])):I("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],42,mo)]),_:3},8,["mask","overlay-class","z-index"]),[[Se,o(s)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}));var yo=te(Co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const bo=_e(yo),ue={showClose:{type:Boolean,default:!0},showFullscreen:{type:Boolean,default:!0},helpMessage:{type:[String,Array],default:""}},fe={dyncHeight:{type:Boolean,default:!0},loading:Boolean,loadingText:{type:String,default:"\u52A0\u8F7D\u4E2D..."}},vo={showConfirmBtn:{type:Boolean,default:!0},confirmOptions:{type:Object,default:{btnText:"\u786E\u5B9A",type:"primary"}},showCancelBtn:{type:Boolean,default:!0},cancelOptions:{type:Object,default:{btnText:"\u53D6\u6D88",type:"default"}}},pe=A($($($({modelValue:Boolean},ue),fe),vo),{showFooter:{type:Boolean,default:!0},scrollTop:{type:Boolean,default:!0},closeFn:Function}),$o=A($($({},Qe),pe),{appendToBody:{type:Boolean,default:!0},onOpen:Function,onOpened:Function,onClose:Function,onClosed:Function}),ko=j({name:"BasicModalHeader",components:{ElTooltip:Ze,BasicTitle:Xe,SvgIcon:Le},inheritAttrs:!1,props:$({fullscreen:Boolean,prefixCls:String,title:String},ue),emits:["cancel","fullscreen"],setup(e,{emit:l}){function t(i){!e.showFullscreen||(i.stopPropagation(),d(i))}function u(i){l("cancel",i)}function d(i){i==null||i.stopPropagation(),i==null||i.preventDefault(),l("fullscreen")}return{handleCancel:u,handleFullscreen:d,handleTitleDbClick:t}}});function Mo(e,l,t,u,d,i){const a=H("BasicTitle"),n=H("SvgIcon"),s=H("ElTooltip");return C(),R("div",{class:M(e.prefixCls),onDblclick:l[0]||(l[0]=(...r)=>e.handleTitleDbClick&&e.handleTitleDbClick(...r))},[T(a,{helpMessage:e.helpMessage},{default:g(()=>[e.title?(C(),R(G,{key:0},[Y(J(e.title),1)],64)):b(e.$slots,"header",{key:1})]),_:3},8,["helpMessage"]),S("div",{class:M(`${e.prefixCls}__extra`)},[e.showFullscreen?(C(),R(G,{key:0},[e.fullscreen?(C(),F(s,{key:0,content:"\u8FD8\u539F",placement:"bottom"},{default:g(()=>[T(n,{onClick:e.handleFullscreen,name:"shrink"},null,8,["onClick"])]),_:1})):(C(),F(s,{key:1,content:"\u6700\u5927\u5316",placement:"bottom"},{default:g(()=>[T(n,{onClick:e.handleFullscreen,name:"arrowsalt"},null,8,["onClick"])]),_:1}))],64)):I("",!0),e.showClose?(C(),F(s,{key:1,content:"\u5173\u95ED",placement:"bottom"},{default:g(()=>[T(n,{onClick:e.handleCancel,name:"close"},null,8,["onClick"])]),_:1})):I("",!0)],2)],34)}var Bo=Z(ko,[["render",Mo]]);const ge=Symbol();function wo(e){return ze(e,ge)}function Ko(){return We(ge)}const To=j({name:"ModalWrapper",components:{ScrollContainer:eo},directives:{loading:oo.directive},inheritAttrs:!1,props:$({modelValue:Boolean,fullscreen:Boolean,prefixCls:String},fe),emits:["height-change"],setup(e,{emit:l}){const t=v(null),u=v(null),d=v(null),i=v(0),a=w(()=>{const{dyncHeight:r}=e;return r?{height:`${o(i)}px`}:{height:"auto",padding:"1rem"}});function n(){return U(this,null,function*(){L(()=>{var m;const r=o(t);!r||(m=r==null?void 0:r.scrollTo)==null||m.call(r,0)})})}function s(){return U(this,null,function*(){var k,V;if(!e.modelValue||!e.dyncHeight)return;const r=o(u);if(!r)return;yield L();const m=r.parentElement;if(!m)return;const f=o(d);if(!f)return;const p=(f==null?void 0:f.clientHeight)||0;yield L();try{const E=m.parentElement;if(!E)return;const z=((k=E.querySelector(".el-dialog__header"))==null?void 0:k.clientHeight)||0,P=((V=E.querySelector(".el-dialog__footer"))==null?void 0:V.clientHeight)||0,c=E.offsetTop;let h=window.innerHeight-c*2-P-z;p<h&&(h=p),i.value=h>100?h:100,l("height-change",o(i))}catch(E){}})}return xe(s.bind(null,!1)),wo({redoModalHeight:s}),x(()=>{e.dyncHeight&&s()}),ie(()=>e.fullscreen,()=>{s()}),{wrapperRef:t,spinRef:u,innerRef:d,spinStyle:a,scrollTop:n,setModalHeight:s}}}),Fo=["element-loading-text"],Eo={ref:"innerRef"};function Ho(e,l,t,u,d,i){const a=H("ScrollContainer"),n=qe("loading");return ae((C(),R("div",{ref:"spinRef",style:le(e.spinStyle),"element-loading-text":e.loadingText},[e.dyncHeight?(C(),F(a,{key:0,ref:"wrapperRef",class:M(e.prefixCls)},{default:g(()=>[S("div",Eo,[b(e.$slots,"default")],512)]),_:3},8,["class"])):b(e.$slots,"default",{key:1})],12,Fo)),[[n,e.loading]])}var Ro=Z(To,[["render",Ho]]);const Vo=j({name:"BasicModal",components:{ElDialog:bo,ElButton:je,ModalWrapper:Ro,ModalHeader:Bo},inheritAttrs:!1,props:$o,emits:["visible-change","height-change","cancel","confirm","register","update:modelValue"],setup(e,{emit:l}){const t=v(!1),u=v(null),d=v(null),{prefixCls:i}=Ne("basic-modal"),a=v(!1),n={setModalProps:k,emitVisible:void 0,redoModalHeight:()=>{L(()=>{o(d)&&o(d).setModalHeight()})}},s=ee();s&&l("register",n,s.uid);const r=w(()=>$($({},e),o(u))),m=w(()=>{const c=A($({},o(r)),{fullscreen:o(a)});c.customClass=`${i} ${(c==null?void 0:c.customClass)||""} ${i}-${s==null?void 0:s.uid}`;const h=Object.keys(pe);return Ue(c,h)}),f=w(()=>{const{showFullscreen:c,showClose:h,helpMessage:B,title:N}=o(r);return{title:N,showFullscreen:c,showClose:h,helpMessage:B,fullscreen:o(a),prefixCls:`${i}-header`}}),p=w(()=>{const{dyncHeight:c,loading:h,loadingText:B}=o(r);return{dyncHeight:c,loading:h,loadingText:B,fullscreen:o(a),modelValue:o(t),prefixCls:`${i}__body`}});function k(c){u.value=$($({},o(u)),c),Reflect.has(c,"modelValue")&&(t.value=!!c.modelValue),Reflect.has(c,"fullscreen")&&(a.value=!!c.fullscreen)}function V(c){return U(this,null,function*(){c==null||c.stopPropagation();const{closeFn:h}=o(r);if(typeof h=="function"){const B=yield h();t.value=!B;return}else t.value=!1;l("cancel",c)})}function E(c){l("confirm",c)}function z(c){l("height-change",c)}function P(){k({fullscreen:!o(a)})}return x(()=>{t.value=!!e.modelValue,a.value=!!e.fullscreen}),ie(()=>o(t),c=>{var h;l("visible-change",c),l("update:modelValue",c),s&&((h=n.emitVisible)==null||h.call(n,c,s.uid)),L(()=>{var B;(e==null?void 0:e.scrollTop)&&c&&o(d)&&((B=o(d))==null||B.scrollTop(0))})},{immediate:!1}),{prefixCls:i,getBindValues:m,getHeaderBindValues:f,getWrapperBindValue:p,visibleRef:t,fullscreenRef:a,getProps:r,modalWrapperRef:d,handleFullscreen:P,handleCancel:V,handleConfirm:E,handleHeightChange:z}}});function Do(e,l,t,u,d,i){const a=H("ModalHeader"),n=H("ModalWrapper"),s=H("ElButton"),r=H("ElDialog");return C(),F(r,q(e.getBindValues,{showClose:!1,modelValue:e.visibleRef,"onUpdate:modelValue":l[0]||(l[0]=m=>e.visibleRef=m)}),re({header:g(()=>[T(a,q(e.getHeaderBindValues,{onFullscreen:e.handleFullscreen,onCancel:e.handleCancel}),{header:g(()=>[b(e.$slots,"header")]),_:3},16,["onFullscreen","onCancel"])]),default:g(()=>[T(n,q({ref:"modalWrapperRef"},e.getWrapperBindValue,{onHeightChange:e.handleHeightChange}),{default:g(()=>[b(e.$slots,"default")]),_:3},16,["onHeightChange"])]),_:2},[e.showFooter?{name:"footer",fn:g(()=>{var m;return[S("div",{class:M(`${e.prefixCls}-footer`)},[e.$slots.footer?b(e.$slots,"footer",{key:0}):(C(),R(G,{key:1},[b(e.$slots,"prependFooter"),e.showCancelBtn?(C(),F(s,q({key:0},e.cancelOptions,{onClick:e.handleCancel}),{default:g(()=>{var f;return[Y(J(((f=e.cancelOptions)==null?void 0:f.btnText)||"Cancel"),1)]}),_:1},16,["onClick"])):I("",!0),b(e.$slots,"centerFooter"),e.showConfirmBtn?(C(),F(s,q({key:1},e.confirmOptions,{loading:(m=e.getProps.confirmOptions)==null?void 0:m.loading,onClick:e.handleConfirm}),{default:g(()=>{var f;return[Y(J(((f=e.confirmOptions)==null?void 0:f.btnText)||"OK"),1)]}),_:1},16,["loading","onClick"])):I("",!0),b(e.$slots,"appendFooter")],64))],2)]})}:void 0]),1040,["modelValue"])}var So=Z(Vo,[["render",Do]]);const _=de({}),X=de({});function Jo(){const e=v(null),l=v(!1),t=v("");function u(a,n){ee()||Q("useModal() can only be used inside setup() or functional components!"),t.value=n,Ke(()=>{e.value=null,l.value=!1,_[o(t)]=null}),!(o(l)&&Je()&&a===o(e))&&(e.value=a,l.value=!0,a.emitVisible=(s,r)=>{X[r]=s})}const d=()=>{const a=o(e);return a||Q("The modal instance has not been obtained, please make sure the instance is rendered when performing the instance operation!"),a},i={setModalProps:a=>{var n;(n=d())==null||n.setModalProps(a)},getVisible:w(()=>X[~~o(t)]),redoModalHeight:()=>{var a,n;(n=(a=d())==null?void 0:a.redoModalHeight)==null||n.call(a)},openModal:(a=!0,n,s=!0)=>{var f;if((f=d())==null||f.setModalProps({modelValue:a}),!n)return;const r=o(t);if(s){_[r]=null,_[r]=K(n);return}io(K(_[r]),K(n))||(_[r]=K(n))},closeModal:()=>{var a;(a=d())==null||a.setModalProps({modelValue:!1})}};return[u,i]}const Go=e=>{const l=v(null),t=ee(),u=v(""),d=()=>{const n=o(l);return n||Q("useModalInner instance is undefined!"),n},i=(n,s)=>{Ge(()=>{l.value=null}),u.value=s,l.value=n,t==null||t.emit("register",n,s)},a={changeLoading:(n=!0)=>{var s;(s=d())==null||s.setModalProps({loading:n})},getVisible:w(()=>X[~~o(u)]),changeConfirmLoading:(n=!0)=>{var s;(s=d())==null||s.setModalProps({confirmButton:{loading:n}})},closeModal:()=>{var n;(n=d())==null||n.setModalProps({modelValue:!1})},setModalProps:n=>{var s;(s=d())==null||s.setModalProps(n)},redoModalHeight:()=>{var s;const n=(s=d())==null?void 0:s.redoModalHeight;n&&n()}};return x(()=>{const n=_[o(u)];!n||!e||typeof e!="function"||L(()=>{e(n)})}),[i,a]},Yo=Ye(So);export{Yo as B,Jo as a,Go as b,Ko as u};
