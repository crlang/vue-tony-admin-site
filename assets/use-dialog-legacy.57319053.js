System.register(["./index-legacy.65fa1ffc.js"],(function(e){"use strict";var n,o,l,u,t,c,a,s,r,i,f,v,d,p,y;return{setters:[function(e){n=e.cc,o=e.an,l=e.r,u=e.co,t=e.cp,c=e.c,a=e.ap,s=e.cq,r=e.w,i=e.R,f=e.Y,v=e.U,d=e.a6,p=e.cl,y=e.c4}],execute:function(){e("u",(function(e,m){var C=v().emit,x=n().nextZIndex,D="",I=o(),b=o(),g=l(!1),h=l(!1),w=l(!1),A=l(e.zIndex||x()),F=void 0,O=void 0,k=u("namespace",t),z=c((function(){var n={},o="--".concat(k.value,"-dialog");return e.fullscreen||(e.top&&(n["".concat(o,"-margin-top")]=e.top),e.width&&(n["".concat(o,"-width")]=a(e.width))),n}));function q(){if(null==O||O(),null==F||F(),e.openDelay&&e.openDelay>0){var n=p((function(){return M()}),e.openDelay);F=n.stop}else M()}function E(){if(null==F||F(),null==O||O(),e.closeDelay&&e.closeDelay>0){var n=p((function(){return R()}),e.closeDelay);O=n.stop}else R()}function L(){e.beforeClose?e.beforeClose((function(e){e||(h.value=!0,g.value=!1)})):E()}function M(){y&&(g.value=!0)}function R(){g.value=!1}return e.lockScroll&&s(g),r((function(){return e.modelValue}),(function(n){n?(h.value=!1,q(),w.value=!0,C("open"),A.value=e.zIndex?A.value++:x(),i((function(){m.value&&(m.value.scrollTop=0)}))):g.value&&E()})),r((function(){return e.fullscreen}),(function(e){m.value&&(e?(D=m.value.style.transform,m.value.style.transform=""):m.value.style.transform=D)})),f((function(){e.modelValue&&(g.value=!0,w.value=!0,q())})),{afterEnter:function(){C("opened")},afterLeave:function(){C("closed"),C(d,!1),e.destroyOnClose&&(w.value=!1)},beforeLeave:function(){C("close")},handleClose:L,onModalClick:function(){e.closeOnClickModal&&L()},close:E,doClose:R,onOpenAutoFocus:function(){C("openAutoFocus")},onCloseAutoFocus:function(){C("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&L()},titleId:I,bodyId:b,closed:h,style:z,rendered:w,visible:g,zIndex:A}}))}}}));