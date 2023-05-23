import{w as B,K as P,b as z,_ as L,I as M}from"./index-795cdaa0.js";import{S as D}from"./index-22989de9.js";import{I as F}from"./index-a2d8523e.js";import{u as K}from"./useCopyToClipboard-3caf3397.js";import{Z as R,x as N,aR as U}from"./elementui-66980f2a.js";import{E as Z,r as k,b as q,w as A,u as J,ac as r,p as l,I as C,J as g,S as t,q as i,L as s,t as I,R as Q,a7 as T,Q as j,Z as G}from"./vue-d691a816.js";const H=["icon-arrowdown","icon-arrowleft","icon-arrowright","icon-arrowsalt","icon-arrowup","icon-bells","icon-bug","icon-check","icon-close","icon-cloud-download","icon-cloud-upload","icon-copy","icon-doubleleft","icon-doubleright","icon-down","icon-earth","icon-enter","icon-eye","icon-fall","icon-file","icon-filetext","icon-indent","icon-info-cirlce-o","icon-left","icon-loading","icon-lock","icon-menufold","icon-minus","icon-moon","icon-outdent","icon-plus","icon-poweroff","icon-pushpin-fill","icon-pushpin","icon-reload","icon-right","icon-rise","icon-search","icon-setting","icon-shrink","icon-size-default","icon-size-large","icon-size-small","icon-sun","icon-swap","icon-up","icon-verticleleft","icon-verticleright"],O={prefix:"ep",icons:["arrow-down","arrow-down-bold","arrow-left","arrow-left-bold","arrow-right","arrow-right-bold","arrow-up","arrow-up-bold"]},W=Z({name:"IconPicker",components:{ElInput:R,ElPopover:N,ElEmpty:U,ScrollContainer:D,Icon:F,SvgIcon:B},inheritAttrs:!1,props:{modelValue:{type:String,default:""},width:{type:String,default:"300px"},copy:{type:Boolean},mode:{type:String,default:"iconify"}},emits:["change","update:modelValue"],setup(e,{emit:c}){const h=e.mode==="svg",u=h?n():v(),a=k(""),p=k(u),d=k(""),{prefixCls:m}=z("icon-picker"),{clipboardRef:f,isSuccessRef:w}=K(e.modelValue),{createMessage:y}=P();function v(){var b;const o=O,S=o==null?void 0:o.prefix;let E=[];return E=((b=o==null?void 0:o.icons)!=null?b:[]).map($=>`${S}:${$}`),E}function n(){return H.map(o=>o.replace("icon-",""))}function _(o){a.value=o,e.copy&&(f.value=o,J(w)&&y.success("复制图标成功!"))}function V(o){if(!o){p.value=u;return}p.value=u.filter(S=>S.includes(o))}return q(()=>{a.value=e.modelValue}),A(()=>a.value,o=>(c("update:modelValue",o),c("change",o))),{prefixCls:m,currentSelect:a,currentList:p,isSvgMode:h,searckKeyword:d,handleClick:_,handleSearchChange:V}}});const X=["onClick","title"],Y={key:1,class:"p-5"};function x(e,c,h,u,a,p){const d=r("ElInput"),m=r("SvgIcon"),f=r("Icon"),w=r("ScrollContainer"),y=r("ElEmpty"),v=r("ElPopover");return l(),C(d,{style:G({width:e.width}),placeholder:"点击选择图标",class:s(e.prefixCls),modelValue:e.currentSelect,"onUpdate:modelValue":c[1]||(c[1]=n=>e.currentSelect=n)},{append:g(()=>[t(v,{width:560,trigger:"click",placement:"bottom"},{reference:g(()=>[e.isSvgMode&&e.currentSelect?(l(),i("span",{key:0,class:s(`${e.prefixCls}__icon`)},[t(m,{name:e.currentSelect},null,8,["name"])],2)):(l(),i("span",{key:1,class:s(`${e.prefixCls}__search`)},[t(f,{name:e.currentSelect||"ion:apps-outline"},null,8,["name"])],2))]),default:g(()=>[I("div",{class:s(`${e.prefixCls}__search`)},[t(d,{modelValue:e.searckKeyword,"onUpdate:modelValue":c[0]||(c[0]=n=>e.searckKeyword=n),placeholder:"搜索图标",onInput:e.handleSearchChange,clearable:""},null,8,["modelValue","onInput"])],2),e.currentList.length?(l(),i("div",{key:0,class:s(`${e.prefixCls}__list`)},[t(w,null,{default:g(()=>[I("ul",null,[(l(!0),i(Q,null,T(e.currentList,n=>(l(),i("li",{key:n,class:s({"is-actived":e.currentSelect===n}),onClick:_=>e.handleClick(n),title:n},[e.isSvgMode?(l(),C(m,{key:0,name:n},null,8,["name"])):(l(),C(f,{key:1,name:n},null,8,["name"])),I("div",null,j(n),1)],10,X))),128))])]),_:1})],2)):(l(),i("div",Y,[t(y)]))]),_:1})]),_:1},8,["style","class","modelValue"])}const ee=L(W,[["render",x]]),ie=M(ee);export{ie as I};
