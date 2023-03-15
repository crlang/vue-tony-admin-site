import{d as f,_ as h,m as b,e,o as s,k as d,i as a,f as F,al as k,bw as j,n as C,b8 as T,g as E,t as B,h as l,j as w,l as A,gx as x,bC as G,p as N,r as z,c as $}from"./index.a812ffa9.js";import{L as S,a as L}from"./index.8da15d9b.js";import{E as O}from"./index.c62ead10.js";import{E as P}from"./index.68f69cb3.js";import{E as I}from"./index.c7ff1079.js";import{E as K,a as q}from"./index.3f8d4f49.js";import"./index.48be7fd2.js";import"./dropdown.01d4c192.js";import"./strings.2b325842.js";const V=f({components:{ElAvatar:O,ElTag:P,List:S,ListItem:L},props:{list:{type:Array,default:()=>[]},onTitleClick:{type:Function}},setup(u){const{prefixCls:n}=b("header-notify-list");function r(c){u.onTitleClick&&u.onTitleClick(c)}return{prefixCls:n,handleTitleClick:r}}}),M={class:"title"},X={key:0,class:"extra"},H={key:0,class:"description"},U={class:"datetime"};function J(u,n,r,c,D,o){const i=e("ElAvatar"),v=e("ElTag"),m=e("ListItem"),_=e("List");return s(),d(_,{class:C(u.prefixCls)},{default:a(()=>[(s(!0),F(k,null,j(u.list,t=>(s(),d(m,{key:t.title,style:{display:"block"},class:C([u.prefixCls+"__item",{"is-read":t.titleDelete}]),onClick:y=>u.handleTitleClick(t)},T({title:a(()=>[E("div",M,[E("span",null,B(t.title),1),t.extra?(s(),F("div",X,[l(v,{class:"tag",size:"small",type:t.color},{default:a(()=>[w(B(t.extra),1)]),_:2},1032,["type"])])):A("",!0)])]),description:a(()=>[E("div",null,[t.description?(s(),F("div",H,B(t.description),1)):A("",!0),E("div",U,B(t.datetime),1)])]),_:2},[t.avatar?{name:"thumb",fn:a(()=>[l(i,{style:{"--el-avatar-bg-color":"#fff"},class:"avatar",src:t.avatar},null,8,["src"])]),key:"0"}:void 0]),1032,["class","onClick"]))),128))]),_:1},8,["class"])}const W=h(V,[["render",J]]),g=[{key:"1",name:"\u901A\u77E5",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"\u4F60\u6536\u5230\u4E86 14 \u4EFD\u65B0\u5468\u62A5",description:"",datetime:"2021-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"\u4F60\u63A8\u8350\u7684 \u66F2\u59AE\u59AE \u5DF2\u901A\u8FC7\u7B2C\u4E09\u8F6E\u9762\u8BD5",description:"",datetime:"2021-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"\u8FD9\u79CD\u6A21\u677F\u53EF\u4EE5\u533A\u5206\u591A\u79CD\u901A\u77E5\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u6807\u9898\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u52A8\u663E\u793A\u7701\u7565\u53F7\uFF0C\u672C\u4F8B\u4E2D\u6807\u9898\u884C\u6570\u5DF2\u8BBE\u4E3A1\u884C\uFF0C\u5982\u679C\u5185\u5BB9\u8D85\u8FC71\u884C\u5C06\u81EA\u52A8\u622A\u65AD\u5E76\u652F\u6301tooltip\u663E\u793A\u5B8C\u6574\u6807\u9898\u3002",description:"",datetime:"2021-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"\u5DE6\u4FA7\u56FE\u6807\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684\u7C7B\u578B",description:"",datetime:"2021-08-07",type:"1"}]},{key:"2",name:"\u6D88\u606F",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u66F2\u4E3D\u4E3D \u8BC4\u8BBA\u4E86\u4F60",description:"\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F\u63CF\u8FF0\u4FE1\u606F",datetime:"2021-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6731\u504F\u53F3 \u56DE\u590D\u4E86\u4F60",description:"\u8FD9\u79CD\u6A21\u677F\u7528\u4E8E\u63D0\u9192\u8C01\u4E0E\u4F60\u53D1\u751F\u4E86\u4E92\u52A8",datetime:"2021-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"\u6807\u9898",description:"\u8BF7\u5C06\u9F20\u6807\u79FB\u52A8\u5230\u6B64\u5904\uFF0C\u4EE5\u4FBF\u6D4B\u8BD5\u8D85\u957F\u7684\u6D88\u606F\u5728\u6B64\u5904\u5C06\u5982\u4F55\u5904\u7406\u3002\u672C\u4F8B\u4E2D\u8BBE\u7F6E\u7684\u63CF\u8FF0\u6700\u5927\u884C\u6570\u4E3A2\uFF0C\u8D85\u8FC72\u884C\u7684\u63CF\u8FF0\u5185\u5BB9\u5C06\u88AB\u7701\u7565\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7tooltip\u67E5\u770B\u5B8C\u6574\u5185\u5BB9",datetime:"2021-08-07",type:"2",clickClose:!0}]},{key:"3",name:"\u5F85\u529E",list:[{id:"000000009",avatar:"",title:"\u4EFB\u52A1\u540D\u79F0",description:"\u4EFB\u52A1\u9700\u8981\u5728 2021-01-12 20:00 \u524D\u542F\u52A8",datetime:"",extra:"\u672A\u5F00\u59CB",color:"info",type:"3"},{id:"000000010",avatar:"",title:"\u7B2C\u4E09\u65B9\u7D27\u6025\u4EE3\u7801\u53D8\u66F4",description:"\u51A0\u9716 \u9700\u5728 2021-01-07 \u524D\u5B8C\u6210\u4EE3\u7801\u53D8\u66F4\u4EFB\u52A1",datetime:"",extra:"\u9A6C\u4E0A\u5230\u671F",color:"warning",type:"3"},{id:"000000011",avatar:"",title:"\u4FE1\u606F\u5B89\u5168\u8003\u8BD5",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2021-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u5DF2\u8017\u65F6 8 \u5929",color:"success",type:"3"},{id:"000000012",avatar:"",title:"ABCD \u7248\u672C\u53D1\u5E03",description:"\u6307\u6D3E\u7AF9\u5C14\u4E8E 2021-01-09 \u524D\u5B8C\u6210\u66F4\u65B0\u5E76\u53D1\u5E03",datetime:"",extra:"\u8FDB\u884C\u4E2D",color:"",type:"3"}]}];const Y=f({components:{ElPopover:I,ElBadge:x,ElTabs:K,ElTabPane:q,SvgIcon:G,NoticeList:W},setup(){const{prefixCls:u}=b("header-notify"),{createMessage:n}=N(),r=z(g),c=$(()=>{let o=0;for(let i=0;i<g.length;i++)o+=g[i].list.length;return o});function D(o){n.success(`Notice ID: ${o.id}`),o.titleDelete=!o.titleDelete}return{prefixCls:u,listData:r,count:c,onNoticeClick:D}}});function Z(u,n,r,c,D,o){const i=e("SvgIcon"),v=e("ElBadge"),m=e("NoticeList"),_=e("ElTabPane"),t=e("ElTabs"),y=e("ElPopover");return s(),F("div",{class:C(u.prefixCls)},[l(y,{placement:"bottom",trigger:"click",width:"300px","popper-class":`${u.prefixCls}__overlay`},{reference:a(()=>[l(v,{value:u.count,"is-dot":""},{default:a(()=>[l(i,{name:"bells"})]),_:1},8,["value"])]),default:a(()=>[l(t,{class:C(`${u.prefixCls}__tabs`),stretch:""},{default:a(()=>[(s(!0),F(k,null,j(u.listData,p=>(s(),d(_,{key:p.key,label:p.name},{default:a(()=>[p.key==="1"?(s(),d(m,{key:0,list:p.list,onTitleClick:u.onNoticeClick},null,8,["list","onTitleClick"])):(s(),d(m,{key:1,list:p.list},null,8,["list"])),E("div",{class:C(`${u.prefixCls}__more`)},"\u67E5\u770B\u66F4\u591A",2)]),_:2},1032,["label"]))),128))]),_:1},8,["class"])]),_:1},8,["popper-class"])],2)}const lu=h(Y,[["render",Z]]);export{lu as default};
