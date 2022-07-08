import{d as D,r as A,w as z,c as b,_ as k,l as x,e as o,o as a,j as y,i,f as n,bm as w,n as _,bd as N,h as l,g as m,t as F,m as j,k as f,am as T,eu as G,bS as S,z as $}from"./index.b263d89e.js";import{a as L,L as O}from"./index.e6f83ffa.js";import{E as P}from"./index.3a85807d.js";import{E as I}from"./index.ef26d884.js";import{E as K}from"./index.ae873226.js";import{E as q,a as V}from"./index.3d0d290c.js";import"./index.ee4e75a5.js";import"./dropdown.109c4d5b.js";const M=D({components:{ElAvatar:P,ElTag:I,List:L,ListItem:O},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},page:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:page"],setup(t){const{prefixCls:p}=x("header-notify-list"),c=A(t.page||1);z(()=>t.page,u=>{c.value=u});const d=b(()=>!!t.onTitleClick);function E(u){t.onTitleClick&&t.onTitleClick(u)}return{prefixCls:p,handleTitleClick:E,isTitleClickable:d}}}),X={class:"title"},H={key:0,class:"extra"},U={key:0,class:"description"},R={class:"datetime"};function J(t,p,c,d,E,u){const s=o("ElAvatar"),C=o("ElTag"),v=o("ListItem"),g=o("List");return a(),y(g,{class:_(t.prefixCls)},{default:i(()=>[(a(!0),n(T,null,w(t.list,e=>(a(),y(v,{key:e.title,style:{display:"block"},class:_([t.prefixCls+"__item",{"is-read":e.titleDelete}]),onClick:B=>t.handleTitleClick(e)},N({title:i(()=>[m("div",X,[m("span",null,F(e.title),1),e.extra?(a(),n("div",H,[l(C,{class:"tag",size:"small",type:e.color},{default:i(()=>[j(F(e.extra),1)]),_:2},1032,["type"])])):f("",!0)])]),description:i(()=>[m("div",null,[e.description?(a(),n("div",U,F(e.description),1)):f("",!0),m("div",R,F(e.datetime),1)])]),_:2},[e.avatar?{name:"thumb",fn:i(()=>[l(s,{style:{"--el-avatar-bg-color":"#fff"},class:"avatar",src:e.avatar},null,8,["src"])])}:void 0]),1032,["class","onClick"]))),128))]),_:1},8,["class"])}var W=k(M,[["render",J]]);const h=[{key:"1",name:"\u901A\u77E5",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",description:"",datetime:"2021-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",description:"",datetime:"2021-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u663E\u793A\u7701\u7565\u53F7\uFF0C\u672C\u4F8B\u4E2D\u6807\u9898\u884C\u6570\u5DF2\u8BBE\u4E3A1\u884C\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",description:"",datetime:"2021-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"}]},{key:"2",name:"\u6D88\u606F",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2021-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8",datetime:"2021-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6807\u9898",description:"\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",datetime:"2021-08-07",type:"2",clickClose:!0}]},{key:"3",name:"\u5F85\u529E",list:[{id:"000000009",avatar:"",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2021-01-12 20:00 \u524D\u542F\u52A8",datetime:"",extra:"\u672A\u5F00\u59CB",color:"info",type:"3"},{id:"000000010",avatar:"",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716 \u9700\u5728 2021-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",datetime:"",extra:"\u9A6C\u4E0A\u5230\u671F",color:"warning",type:"3"},{id:"000000011",avatar:"",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2021-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u5DF2\u8017\u65F6 8 \u5929",color:"success",type:"3"},{id:"000000012",avatar:"",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2021-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u8FDB\u884C\u4E2D",color:"",type:"3"}]}];const Y=D({components:{ElPopover:K,ElBadge:G,ElTabs:q,ElTabPane:V,SvgIcon:S,NoticeList:W},setup(){const{prefixCls:t}=x("header-notify"),{createMessage:p}=$(),c=A(h),d=b(()=>{let u=0;for(let s=0;s<h.length;s++)u+=h[s].list.length;return u});function E(u){p.success("Notice ID: "+u.id),u.titleDelete=!u.titleDelete}return{prefixCls:t,listData:c,count:d,onNoticeClick:E}}}),Z=j(" \u67E5\u770B\u66F4\u591A "),Q={key:0};function tt(t,p,c,d,E,u){const s=o("SvgIcon"),C=o("ElBadge"),v=o("NoticeList"),g=o("ElTabPane"),e=o("ElTabs"),B=o("ElPopover");return a(),n("div",{class:_(t.prefixCls)},[l(B,{placement:"bottom",trigger:"click",width:"300px","popper-class":`${t.prefixCls}__overlay`},{reference:i(()=>[l(C,{value:t.count,"is-dot":""},{default:i(()=>[l(s,{size:"18",name:"notices"})]),_:1},8,["value"])]),default:i(()=>[l(e,{class:_(`${t.prefixCls}__tabs`),stretch:""},{default:i(()=>[(a(!0),n(T,null,w(t.listData,r=>(a(),y(g,{key:r.key,label:r.name},{default:i(()=>[r.key==="1"?(a(),y(v,{key:0,list:r.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(a(),y(v,{key:1,list:r.list},null,8,["list"])),m("div",{class:_(`${t.prefixCls}__more`)},[Z,r.list.length!==0?(a(),n("span",Q,"("+F(r.list.length)+")",1)):f("",!0)],2)]),_:2},1032,["label"]))),128))]),_:1},8,["class"])]),_:1},8,["popper-class"])],2)}var nt=k(Y,[["render",tt]]);export{nt as default};
