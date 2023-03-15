import{Q as A,c2 as L,d as I,C as M,r as w,D as V,Z as x,o as u,f as v,F as D,n as h,b as m,I as N,R as F,K as O,ag as W,g as q,k as g,i as C,H as z,a0 as G,t as P,W as H,J,ad as Q,_ as Z,be as U,bk as X,aW as Y,aC as ee,by as te,bu as re,bt as ae,e as B,al as ne,bw as se,l as oe,j as ce,m as le}from"./index.a812ffa9.js";import{I as ue}from"./index.c229c7c5.js";import{g as ie}from"./index.bb96a6b7.js";import"./lock.f9dff9cb.js";import"./index.2271c5c3.js";import"./index.e4429517.js";import"./index.48be7fd2.js";import"./useTimeout.3debf569.js";import"./drawer.55be0fb4.js";import"./_baseIsEqual.bce9394a.js";import"./index.c7ff1079.js";import"./dropdown.01d4c192.js";import"./index.ba82fa59.js";import"./index.00e0b22a.js";import"./index.e07eb570.js";import"./useWindowSizeFn.1725b147.js";import"./index.fb19ae5d.js";import"./index.6bf5f43d.js";import"./use-dialog.8523a096.js";import"./index.f3e99c90.js";import"./refs.7c70278f.js";import"./index.3f8d4f49.js";import"./strings.2b325842.js";const T=Symbol("breadcrumbKey"),me=A({separator:{type:String,default:"/"},separatorIcon:{type:L}}),pe=I({name:"ElBreadcrumb"}),de=I({...pe,props:me,setup(a){const n=a,p=M("breadcrumb"),d=w();return V(T,n),x(()=>{const s=d.value.querySelectorAll(`.${p.e("item")}`);s.length&&s[s.length-1].setAttribute("aria-current","page")}),(s,b)=>(u(),v("div",{ref_key:"breadcrumb",ref:d,class:h(m(p).b()),"aria-label":"Breadcrumb",role:"navigation"},[D(s.$slots,"default")],2))}});var fe=N(de,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const be=A({to:{type:F([String,Object]),default:""},replace:{type:Boolean,default:!1}}),_e=I({name:"ElBreadcrumbItem"}),he=I({..._e,props:be,setup(a){const n=a,p=H(),d=O(T,void 0),s=M("breadcrumb"),{separator:b,separatorIcon:_}=W(d),f=p.appContext.config.globalProperties.$router,k=w(),y=()=>{!n.to||!f||(n.replace?f.replace(n.to):f.push(n.to))};return(e,t)=>(u(),v("span",{class:h(m(s).e("item"))},[q("span",{ref_key:"link",ref:k,class:h([m(s).e("inner"),m(s).is("link",!!e.to)]),role:"link",onClick:y},[D(e.$slots,"default")],2),m(_)?(u(),g(m(G),{key:0,class:h(m(s).e("separator"))},{default:C(()=>[(u(),g(z(m(_))))]),_:1},8,["class"])):(u(),v("span",{key:1,class:h(m(s).e("separator")),role:"presentation"},P(m(b)),3))],2))}});var j=N(he,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const ge=J(fe,{BreadcrumbItem:j}),ke=Q(j);const ye=I({name:"LayoutBreadcrumb",components:{ElBreadcrumb:ge,ElBreadcrumbItem:ke,Icon:ue},props:{},setup(){const a=w([]),{currentRoute:n}=U(),{prefixCls:p}=le("layout-header-breadcrumb"),{getShowBreadCrumbIcon:d}=X(),s=Y();ee(async()=>{var $,R,S;if(n.value.name===te)return;const e=await ie(),t=n.value.matched,r=t==null?void 0:t[t.length-1];let o=n.value.path;r&&(($=r==null?void 0:r.meta)==null?void 0:$.currentActiveMenu)&&(o=r.meta.currentActiveMenu);const c=re(e,o),i=e.filter(K=>K.path===c[0]),l=b(i,c);if(!l||l.length===0)return;const E=_(l);(R=n.value.meta)!=null&&R.currentActiveMenu&&E.push({...n.value,name:((S=n.value.meta)==null?void 0:S.title)||n.value.name}),a.value=E});function b(e,t){const r=[];return e.forEach(o=>{var c,i;t.includes(o.path)&&r.push({...o,name:((c=o.meta)==null?void 0:c.title)||o.name}),(i=o.children)!=null&&i.length&&r.push(...b(o.children,t))}),r}function _(e){return ae(e,t=>{const{meta:r,name:o}=t;if(!r)return!!o;const{title:c,hideBreadcrumb:i}=r;return!(!c||i)}).filter(t=>{var r;return!((r=t.meta)!=null&&r.hideBreadcrumb)})}function f(e,t,r){r==null||r.preventDefault();const{children:o,redirect:c,meta:i}=e;if((o==null?void 0:o.length)&&!c){r==null||r.stopPropagation();return}if(!(i!=null&&i.carryParam))if(c&&typeof c=="string")s(c);else{let l="";t.length===1?l=t[0]:l=`${t.slice(1).pop()||""}`,l=/^\//.test(l)?l:`/${l}`,s(l)}}function k(e,t){return e.indexOf(t)!==e.length-1}function y(e){var t;return(t=e.meta)==null?void 0:t.icon}return{routes:a,prefixCls:p,getIcon:y,getShowBreadCrumbIcon:d,handleClick:f,hasRedirect:k}}}),ve={key:1};function Ie(a,n,p,d,s,b){const _=B("Icon"),f=B("router-link"),k=B("ElBreadcrumbItem"),y=B("ElBreadcrumb");return u(),g(y,{separator:"/",class:h(a.prefixCls)},{default:C(()=>[(u(!0),v(ne,null,se(a.routes,e=>(u(),g(k,{key:e.name},{default:C(()=>[a.getShowBreadCrumbIcon&&a.getIcon(e)?(u(),g(_,{key:0,name:a.getIcon(e),class:"mr-1"},null,8,["name"])):oe("",!0),a.hasRedirect(a.routes,e)?(u(),g(f,{key:2,to:"",onClick:t=>a.handleClick(e,a.routes,t)},{default:C(()=>[ce(P(e.name||e.meta.title),1)]),_:2},1032,["onClick"])):(u(),v("span",ve,P(e.name||e.meta.title),1))]),_:2},1024))),128))]),_:1},8,["class"])}const Ge=Z(ye,[["render",Ie]]);export{Ge as default};
