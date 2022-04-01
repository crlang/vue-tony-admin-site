import{a6 as V,T as z,U as H}from"./ex-pkg-@element-plus.e8ce6c8b.js";import{y as D,_ as K,a as R,l as L,w as Z,R as o,u as d,P as j,ar as q,Z as C,z as J,G as Q,H as N,K as ee}from"./ex-pkg-@vue.dfd8e273.js";import{aR as te,_ as ne}from"./index.ec0491db.js";import{P as oe}from"./index.79d904a0.js";import{z as ie,ae as se}from"./ex-pkg-element-plus.7627c250.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";var ae="/vue-tony-admin-site/assets/resume.6eeddee7.svg",le="/vue-tony-admin-site/assets/p-rotate.6694e2cf.svg",re="/vue-tony-admin-site/assets/scale.49a2dce8.svg",ce="/vue-tony-admin-site/assets/unscale.903b0a1d.svg",ue="/vue-tony-admin-site/assets/unrotate.cef64dd2.svg",u;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(u||(u={}));const me={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},s="img-preview";var de=D({name:"ImagePreview",props:me,emits:["img-load","img-error"],setup(n,{expose:m,emit:r}){const c=new Map,t=K({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:u.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),_=R(null),g=R(null);function x(){M();const{index:e,imageList:i}=n;if(!i||!i.length)throw new Error("imageList is undefined");t.currentIndex=e,y(i[e])}function f(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function M(){const e=d(_);!e||(e.onmousewheel=w,document.body.addEventListener("DOMMouseScroll",w),document.ondragstart=function(){return!1})}const p=L(()=>{var i;const e=(i=n==null?void 0:n.scaleStep)!=null?i:0;return(e!=null?e:e<100)?e/100:t.imgScale/10});function w(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&h(p.value),e.delta<0&&h(-p.value)}function h(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function S(e){t.imgRotate+=e}function O(){const e=d(g);!e||(e.onmousemove=null)}function y(e){t.status=u.LOADING;const i=new Image;i.src=e,i.onload=a=>{if(t.currentUrl!==e){const l=a.composedPath();if(n.rememberState){c.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=c.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(f(),n.defaultWidth&&(t.imgScale=n.defaultWidth/l[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/l[0].naturalWidth);l&&r("img-load",{index:t.currentIndex,dom:l[0],url:e})}t.currentUrl=e,t.status=u.DONE},i.onerror=a=>{const l=a.composedPath();l&&r("img-error",{index:t.currentIndex,dom:l[0],url:e}),t.status=u.FAIL}}function $(e){e&&e.stopPropagation(),b()}function b(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",w),document.ondragstart=null}function F(){f()}m({resume:F,close:b,prev:I.bind(null,"left"),next:I.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function I(e){const{currentIndex:i}=t,{imageList:a}=n;e==="left"&&(t.currentIndex--,i<=0&&(t.currentIndex=a.length-1)),e==="right"&&(t.currentIndex++,i>=a.length-1&&(t.currentIndex=0)),y(a[t.currentIndex])}function P(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const i=d(g);i&&(i.onmousemove=B)}function B(e){e=e||window.event,e.preventDefault();const i=e.clientX-t.moveX,a=e.clientY-t.moveY;t.imgLeft+=i,t.imgTop+=a,t.moveX=e.clientX,t.moveY=e.clientY}const T=L(()=>{const{imgScale:e,imgRotate:i,imgTop:a,imgLeft:l}=t;return{transform:`scale(${e}) rotate(${i}deg)`,marginTop:`${a}px`,marginLeft:`${l}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=L(()=>{const{imageList:e}=n;return e.length>1});Z(()=>{n.show&&x(),n.imageList&&f()});const U=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${s}-content`)&&$(e)},X=()=>o("div",{class:`${s}__close`,onClick:$},[o(V,{class:`${s}__close-icon`},null)]),Y=()=>{if(!d(E))return null;const{currentIndex:e}=t,{imageList:i}=n;return o("div",{class:`${s}__index`},[e+1,j(" / "),i.length])},G=()=>o("div",{class:`${s}__controller`},[o("div",{class:`${s}__controller-item`,onClick:()=>h(-p.value)},[o("img",{src:ce},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>h(p.value)},[o("img",{src:re},null)]),o("div",{class:`${s}__controller-item`,onClick:F},[o("img",{src:ae},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>S(-90)},[o("img",{src:ue},null)]),o("div",{class:`${s}__controller-item`,onClick:()=>S(90)},[o("img",{src:le},null)])]),A=e=>d(E)?o("div",{class:[`${s}__arrow`,e],onClick:()=>I(e)},[e==="left"?o(z,null,null):o(H,null,null)]):null;return()=>t.show&&o("div",{class:s,ref:_,onMouseup:O,onClick:U},[o("div",{class:`${s}-content`},[o("img",{style:d(T),class:[`${s}-image`,t.status===u.DONE?"":"hidden"],ref:g,src:t.currentUrl,onMousedown:P},null),X(),Y(),G(),A("left"),A("right")])])}});let k=null;function ge(n){var c;if(!te)return;const m={},r=document.createElement("div");return Object.assign(m,{show:!0,index:0,scaleStep:100},n),k=o(de,m),q(k,r),document.body.appendChild(r),(c=k.component)==null?void 0:c.exposed}const W=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],fe=D({components:{ElButton:ie,ElImage:se,PageWrapper:oe},setup(){function n(){ge({imageList:W,defaultWidth:700,rememberState:!0,onImgLoad:({index:r,url:c,dom:t})=>{console.log(`\u7B2C${r+1}\u5F20\u56FE\u7247\u5DF2\u52A0\u8F7D\uFF0CURL\u4E3A\uFF1A${c}`,t)}})}return{imgList:W,openImg:n}}}),ve=j("\u65E0\u9884\u89C8\u56FE");function pe(n,m,r,c,t,_){const g=C("el-image"),x=C("el-button"),f=C("PageWrapper");return J(),Q(f,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:N(()=>[ee("div",null,[o(g,{style:{width:"100px",height:"100px"},src:n.imgList[0],"preview-src-list":n.imgList,"initial-index":1},null,8,["src","preview-src-list"])]),o(x,{onClick:n.openImg,type:"primary"},{default:N(()=>[ve]),_:1},8,["onClick"])]),_:1})}var be=ne(fe,[["render",pe]]);export{be as default};
