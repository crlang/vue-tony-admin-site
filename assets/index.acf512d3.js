import{Q as F}from"./index.448741a8.js";import{_ as v,aV as D}from"./index.ccefc80e.js";import{P as E}from"./index.b85ba22b.js";import{C as B,a as b}from"./index.7eb10c31.js";import{x as h,aK as q,M as m,X as t,z as A,Y as w,a2 as l,$ as o,u as p,D as n,aa as _}from"./vendor.edbe4fa8.js";import"./download.8f0fb5ba.js";import"./base64Conver.bb012c73.js";const y="https://www.crlang.com",k=h({components:{ElButton:q,QrCode:F,PageWrapper:E,CardGrid:B,CardGridItem:b},setup(){const e=m(null),d=m(null);function s(){const u=p(e);!u||u.download("\u6587\u4EF6\u540D")}function i(){const u=p(d);!u||u.download("Qrcode")}function c({ctx:u}){u instanceof CanvasRenderingContext2D&&(u.fillStyle="black",u.font='16px "\u5FAE\u8F6F\u96C5\u9ED1"',u.textBaseline="bottom",u.textAlign="center",u.fillText("Tony Admin",100,195,200))}return{onQrcodeDone:c,qrCodeUrl:y,LogoImg:D,download:s,downloadDiy:i,qrRef:e,qrDiyRef:d}}}),U=n("div",null,"\u57FA\u7840\u793A\u4F8B",-1),j=n("div",null,"\u6E32\u67D3\u6210img\u6807\u7B7E\u793A\u4F8B",-1),I=n("div",null,"\u914D\u7F6E\u6837\u5F0F\u793A\u4F8B",-1),Q=n("div",null,"\u672C\u5730logo\u793A\u4F8B",-1),G=n("div",null,"\u5728\u7EBFlogo\u793A\u4F8B",-1),R=n("div",null,"logo\u914D\u7F6E\u793A\u4F8B",-1),z=n("div",null,"\u4E0B\u8F7D\u793A\u4F8B",-1),$=_("\u4E0B\u8F7D"),L=n("div",{class:"msg"},"\u5728\u7EBFlogo\u4F1A\u5BFC\u81F4\u56FE\u7247\u8DE8\u57DF",-1),P=n("div",null,"\u6269\u5C55\u7ED8\u5236\u793A\u4F8B",-1),V=_("\u4E0B\u8F7D"),N=n("div",{class:"msg"},"\u8981\u8FDB\u884C\u6269\u5C55\u7ED8\u5236\u5219\u4E0D\u80FD\u5C06tag\u8BBE\u4E3Aimg",-1);function S(e,d,s,i,c,u){const a=t("QrCode"),r=t("CardGridItem"),f=t("el-button"),g=t("CardGrid"),C=t("PageWrapper");return A(),w(C,{title:"\u4E8C\u7EF4\u7801\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:l(()=>[o(g,{center:"",rows:4},{default:l(()=>[o(r,null,{default:l(()=>[U,o(a,{value:e.qrCodeUrl},null,8,["value"])]),_:1}),o(r,null,{default:l(()=>[j,o(a,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])]),_:1}),o(r,null,{default:l(()=>[I,o(a,{value:e.qrCodeUrl,options:{color:{dark:"#ff0"}}},null,8,["value"])]),_:1}),o(r,null,{default:l(()=>[Q,o(a,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])]),_:1}),o(r,null,{default:l(()=>[G,o(a,{value:e.qrCodeUrl,logo:"https://pic1.zhimg.com/v2-4d6524e63c84050c11af67b965a28874.png",options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(r,null,{default:l(()=>[R,o(a,{value:e.qrCodeUrl,logo:{src:"https://pic1.zhimg.com/v2-4d6524e63c84050c11af67b965a28874.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])]),_:1}),o(r,null,{default:l(()=>[z,o(a,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),o(f,{class:"my-2",type:"primary",onClick:e.download},{default:l(()=>[$]),_:1},8,["onClick"]),L]),_:1}),o(r,null,{default:l(()=>[P,o(a,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),o(f,{class:"y-2",type:"primary",onClick:e.downloadDiy},{default:l(()=>[V]),_:1},8,["onClick"]),N]),_:1})]),_:1})]),_:1})}var J=v(k,[["render",S]]);export{J as default};
