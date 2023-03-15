import{d as R,bU as S,bV as $,a0 as g,a3 as z,a5 as h,c as n,r as w,C as D,b7 as I,ao as L,I as A,e as i,o,k as B,h as l,i as d,v as T,g as y,aD as N,b9 as U,n as s,f as t,F as f,t as V,l as r,x as q,bF as F,bW as H,J as P}from"./index.a812ffa9.js";import{d as M,b as O}from"./drawer.55be0fb4.js";import{u as J}from"./use-dialog.8523a096.js";const W=R({name:"ElDrawer",components:{ElOverlay:S,ElFocusTrap:$,ElIcon:g,Close:z},inheritAttrs:!1,props:M,emits:O,setup(e,{slots:a}){h({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},n(()=>!!a.title)),h({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},n(()=>!!e.customClass));const p=w(),c=w(),b=D("drawer"),{t:v}=I(),u=n(()=>e.direction==="rtl"||e.direction==="ltr"),m=n(()=>L(e.size));return{...J(e,p),drawerRef:p,focusStartRef:c,isHorizontal:u,drawerSize:m,ns:b,t:v}}}),j=["aria-label","aria-labelledby","aria-describedby"],G=["id"],K=["aria-label"],Q=["id"];function X(e,a,p,c,b,v){const u=i("close"),m=i("el-icon"),C=i("el-focus-trap"),k=i("el-overlay");return o(),B(H,{to:"body",disabled:!e.appendToBody},[l(F,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:d(()=>[T(l(k,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:d(()=>[l(C,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:d(()=>[y("div",N({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:a[1]||(a[1]=U(()=>{},["stop"]))}),[y("span",{ref:"focusStartRef",class:s(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(o(),t("header",{key:0,class:s(e.ns.e("header"))},[e.$slots.title?f(e.$slots,"title",{key:1},()=>[r(" DEPRECATED SLOT ")]):f(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},()=>[e.$slots.title?r("v-if",!0):(o(),t("span",{key:0,id:e.titleId,role:"heading",class:s(e.ns.e("title"))},V(e.title),11,G))]),e.showClose?(o(),t("button",{key:2,"aria-label":e.t("el.drawer.close"),class:s(e.ns.e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...E)=>e.handleClose&&e.handleClose(...E))},[l(m,{class:s(e.ns.e("close"))},{default:d(()=>[l(u)]),_:1},8,["class"])],10,K)):r("v-if",!0)],2)):r("v-if",!0),e.rendered?(o(),t("div",{key:1,id:e.bodyId,class:s(e.ns.e("body"))},[f(e.$slots,"default")],10,Q)):r("v-if",!0),e.$slots.footer?(o(),t("div",{key:2,class:s(e.ns.e("footer"))},[f(e.$slots,"footer")],2)):r("v-if",!0)],16,j)]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[q,e.visible]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}var Y=A(W,[["render",X],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);const ee=P(Y);export{ee as E};
