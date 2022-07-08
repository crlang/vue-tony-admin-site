import{_ as E,d as y,bM as I,p as x,c as b,e as a,o as l,f as L,h as e,i as r,n as s,j as k,k as v,g as u,t as U,am as M,l as S,m as _,bO as A}from"./index.b263d89e.js";import{D as $}from"./siteSetting.42982d03.js";import{E as B,d as N,e as F,c as O,u as V}from"./index.7b185c54.js";import{a as P}from"./index.528a2bb8.js";import{h as R}from"./header.7c507bcf.js";import{I as z}from"./index.26dc116b.js";import"./index.12ea0f65.js";import"./useWindowSizeFn.159736d7.js";import"./index.53cddd5b.js";import"./_baseIsEqual.0e612cfa.js";import"./_baseUniq.82ba82ab.js";import"./index.ac2e14a0.js";import"./index.7eeeac30.js";import"./index.ee4e75a5.js";import"./useTimeout.f7502887.js";import"./index.ae873226.js";import"./dropdown.109c4d5b.js";import"./index.b816e23f.js";import"./index.80d0f5e3.js";import"./index.151e0821.js";import"./drawer.95bcb9ff.js";import"./use-dialog.adf6f7df.js";import"./index.7bce58f8.js";import"./refs.63e616a9.js";import"./index.3d0d290c.js";import"./lock.c281e323.js";import"./index.1c7c0cd7.js";import"./row.e3bb9b75.js";import"./card.86ff9530.js";import"./index.ef26d884.js";import"./index.2486a222.js";import"./isEqual.2e3b6ef4.js";import"./form-item.337e4360.js";import"./index.b8d50620.js";import"./tsxHelper.c64d0d27.js";const T=y({name:"UserDropdown",components:{ElDropdown:B,ElDropdownItem:N,ElDropdownMenu:F,LockAction:O(()=>I(()=>import("./LockModal.58fe236c.js"),["assets/LockModal.58fe236c.js","assets/index.b263d89e.js","assets/index.528a2bb8.js","assets/index.1c7c0cd7.js","assets/row.e3bb9b75.js","assets/drawer.95bcb9ff.js","assets/card.86ff9530.js","assets/index.ef26d884.js","assets/index.2486a222.js","assets/index.ee4e75a5.js","assets/index.7bce58f8.js","assets/isEqual.2e3b6ef4.js","assets/_baseIsEqual.0e612cfa.js","assets/form-item.337e4360.js","assets/dropdown.109c4d5b.js","assets/index.b8d50620.js","assets/tsxHelper.c64d0d27.js","assets/useWindowSizeFn.159736d7.js","assets/index.b816e23f.js","assets/index.80d0f5e3.js","assets/index.53cddd5b.js","assets/refs.63e616a9.js","assets/use-dialog.adf6f7df.js","assets/lock.c281e323.js","assets/header.7c507bcf.js","assets/index.fcad4ece.js","assets/index.0bf11fad.js","assets/index.6970fc55.js","assets/_baseUniq.82ba82ab.js","assets/index.2866cdc9.js","assets/index.dfd5a36d.js","assets/index.3bb3a281.js","assets/index.2609c49e.js","assets/index.1cc837a8.js","assets/index.a766b686.js","assets/useForm.e2917246.js"])),Icon:z},props:{itemClass:String},setup(){const{prefixCls:o}=S("header-user-dropdown"),{getShowDoc:h,getUseLockPage:g}=V(),i=x(),f=b(()=>{const{realName:c="",avatar:C,desc:D}=i.getUserInfo||{};return{realName:c,avatar:C||R,desc:D}}),[w,{openModal:t}]=P();function n(){t(!0)}function d(){i.confirmLoginOut()}function p(){A($)}function m(c){switch(c){case"logout":d();break;case"doc":p();break;case"lock":n();break}}return{prefixCls:o,getUserInfo:f,handleMenuClick:m,getShowDoc:h,register:w,getUseLockPage:g}}}),j=["src"],H=_(" \u6587\u6863 "),W=_(" \u9501\u5B9A\u5C4F\u5E55 "),q=_(" \u9000\u51FA\u7CFB\u7EDF ");function G(o,h,g,i,f,w){const t=a("Icon"),n=a("ElDropdownItem"),d=a("ElDropdownMenu"),p=a("ElDropdown"),m=a("LockAction");return l(),L(M,null,[e(p,{onCommand:o.handleMenuClick},{dropdown:r(()=>[e(d,{class:s(`${o.prefixCls}-menulist`)},{default:r(()=>[o.getShowDoc?(l(),k(n,{key:0,command:"doc"},{default:r(()=>[e(t,{class:"mr-2",name:"ion:document-text-outline"}),H]),_:1})):v("",!0),o.getUseLockPage?(l(),k(n,{key:1,divided:o.getShowDoc,command:"lock"},{default:r(()=>[e(t,{class:"mr-2",name:"ion:lock-closed-outline"}),W]),_:1},8,["divided"])):v("",!0),e(n,{command:"logout"},{default:r(()=>[e(t,{class:"mr-2",name:"ion:power-outline"}),q]),_:1})]),_:1},8,["class"])]),default:r(()=>[u("div",{class:s([o.prefixCls,o.itemClass])},[u("img",{class:s(`${o.prefixCls}__avatar`),src:o.getUserInfo.avatar},null,10,j),u("span",{class:s(`${o.prefixCls}__name`)},U(o.getUserInfo.realName),3)],2)]),_:1},8,["onCommand"]),e(m,{onRegister:o.register},null,8,["onRegister"])],64)}var Mo=E(T,[["render",G]]);export{Mo as default};
