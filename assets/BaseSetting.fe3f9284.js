var d=(o,s,r)=>new Promise((u,n)=>{var l=a=>{try{e(r.next(a))}catch(m){n(m)}},t=a=>{try{e(r.throw(a))}catch(m){n(m)}},e=a=>a.done?u(a.value):Promise.resolve(a.value).then(l,t);e((r=r.apply(o,s)).next())});import{B as h}from"./index.fcad4ece.js";import{C as v}from"./index.d6eee18e.js";import{d as B,y as C,p as b,Y as F,c as w,_ as S,z as I,e as p,o as A,j as E,i as c,h as i,g as _,d0 as y,d1 as U,m as V}from"./index.b263d89e.js";import{B as k,u as x}from"./upload.a0163439.js";import{h as N}from"./header.7c507bcf.js";import{a as $}from"./account.921b011f.js";import{b as j}from"./data.2ef57221.js";import{E as M,a as R}from"./index.1cc837a8.js";import{u as z}from"./useForm.e2917246.js";import"./index.528a2bb8.js";import"./index.1c7c0cd7.js";import"./row.e3bb9b75.js";import"./drawer.95bcb9ff.js";import"./card.86ff9530.js";import"./index.ef26d884.js";import"./index.2486a222.js";import"./index.ee4e75a5.js";import"./index.7bce58f8.js";import"./isEqual.2e3b6ef4.js";import"./_baseIsEqual.0e612cfa.js";import"./form-item.337e4360.js";import"./dropdown.109c4d5b.js";import"./index.b8d50620.js";import"./tsxHelper.c64d0d27.js";import"./useWindowSizeFn.159736d7.js";import"./index.b816e23f.js";import"./index.80d0f5e3.js";import"./index.53cddd5b.js";import"./refs.63e616a9.js";import"./use-dialog.adf6f7df.js";import"./index.0bf11fad.js";import"./index.6970fc55.js";import"./_baseUniq.82ba82ab.js";import"./index.2866cdc9.js";import"./index.dfd5a36d.js";import"./index.3bb3a281.js";import"./index.2609c49e.js";import"./index.a766b686.js";import"./index.a77e9094.js";import"./index.2540fdd7.js";import"./index.43445b35.js";import"./index.f856cdf3.js";import"./download.230b76be.js";const T=B({components:{ElRow:M,ElCol:R,ElButton:C,BasicForm:h,CollapseContainer:v,BasicUpload:k},setup(){const{createMessage:o}=I(),s=b(),[r,{setFieldsValue:u}]=z({labelWidth:120,schemas:j,showActionButtonGroup:!1});F(()=>d(this,null,function*(){const t=yield $();u(t)}));const n=w(()=>{const{avatar:t}=s.getUserInfo;return[t||N]});function l(t){const e=s.getUserInfo;e.avatar=t,s.setUserInfo(e)}return{avatar:n,register:r,uploadApi:x,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),G=o=>(y("data-v-0b105d94"),o=o(),U(),o),P={class:"change-avatar"},W=G(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1)),Y=V("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F");function q(o,s,r,u,n,l){const t=p("BasicForm"),e=p("el-col"),a=p("BasicUpload"),m=p("el-row"),f=p("el-button"),g=p("CollapseContainer");return A(),E(g,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:c(()=>[i(m,{gutter:24},{default:c(()=>[i(e,{span:14},{default:c(()=>[i(t,{onRegister:o.register},null,8,["onRegister"])]),_:1}),i(e,{span:10},{default:c(()=>[_("div",P,[W,i(a,{onChange:o.updateAvatar,api:o.uploadApi,modelValue:o.avatar,uploadName:"file",showPreview:!1,maxSize:5,maxNumber:3,showThumb:"",accept:["png","jpg","jpeg","webp"]},null,8,["onChange","api","modelValue"])])]),_:1})]),_:1}),i(f,{type:"primary",onClick:o.handleSubmit},{default:c(()=>[Y]),_:1},8,["onClick"])]),_:1})}var Mo=S(T,[["render",q],["__scopeId","data-v-0b105d94"]]);export{Mo as default};
