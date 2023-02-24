!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.cd308252.js","./drawer-legacy.4a70f1fb.js","./use-dialog-legacy.bd28a0fb.js"],(function(e){"use strict";var r,n,o,a,l,s,i,c,d,f,u,b,p,y,v,m,w,h,O,g,k,j,C,E,R,S,I,P,z,$,L,x,D;return{setters:[function(e){r=e.d,n=e.b_,o=e.b$,a=e.$,l=e.a2,s=e.a4,i=e.c,c=e.r,d=e.F,f=e.bc,u=e.ap,b=e.C,p=e.e,y=e.o,v=e.j,m=e.h,w=e.i,h=e.v,O=e.x,g=e.g,k=e.n,j=e.f,C=e.I,E=e.t,R=e.k,S=e.J,I=e.bI,P=e.as,z=e.c0,$=e.L},function(e){L=e.d,x=e.a},function(e){D=e.u}],execute:function(){var _=r({name:"ElDrawer",components:{ElOverlay:n,ElFocusTrap:o,ElIcon:a,Close:l},props:L,emits:x,setup:function(e,r){var n=r.slots;s({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},i((function(){return!!n.title})));var o=c(),a=c(),l=d("drawer"),b=f().t,p=i((function(){return"rtl"===e.direction||"ltr"===e.direction})),y=i((function(){return u(e.size)}));return t(t({},D(e,o)),{},{drawerRef:o,focusStartRef:a,isHorizontal:p,drawerSize:y,ns:l,t:b})}}),A=["aria-label","aria-labelledby","aria-describedby"],T=["id"],q=["aria-label"],B=["id"];var H=b(_,[["render",function(e,t,r,n,o,a){var l=p("close"),s=p("el-icon"),i=p("el-focus-trap"),c=p("el-overlay");return y(),v(z,{to:"body",disabled:!e.appendToBody},[m(P,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:w((function(){return[h(m(c,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:w((function(){return[m(i,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:w((function(){return[g("div",{ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId,class:k([e.ns.b(),e.direction,e.visible&&"open",e.customClass]),style:S(e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize),role:"dialog",onClick:t[1]||(t[1]=I((function(){}),["stop"]))},[g("span",{ref:"focusStartRef",class:k(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(y(),j("header",{key:0,class:k(e.ns.e("header"))},[e.$slots.title?C(e.$slots,"title",{key:1},(function(){return[R(" DEPRECATED SLOT ")]})):C(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(function(){return[e.$slots.title?R("v-if",!0):(y(),j("span",{key:0,id:e.titleId,role:"heading",class:k(e.ns.e("title"))},E(e.title),11,T))]})),e.showClose?(y(),j("button",{key:2,"aria-label":e.t("el.drawer.close"),class:k(e.ns.e("close-btn")),type:"button",onClick:t[0]||(t[0]=function(){return e.handleClose&&e.handleClose.apply(e,arguments)})},[m(s,{class:k(e.ns.e("close"))},{default:w((function(){return[m(l)]})),_:1},8,["class"])],10,q)):R("v-if",!0)],2)):R("v-if",!0),e.rendered?(y(),j("div",{key:1,id:e.bodyId,class:k(e.ns.e("body"))},[C(e.$slots,"default")],10,B)):R("v-if",!0),e.$slots.footer?(y(),j("div",{key:2,class:k(e.ns.e("footer"))},[C(e.$slots,"footer")],2)):R("v-if",!0)],14,A)]})),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])]})),_:3},8,["mask","overlay-class","z-index","onClick"]),[[O,e.visible]])]})),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]);e("E",$(H))}}}))}();