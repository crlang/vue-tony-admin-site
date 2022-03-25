import{B as A}from"./TableImg.7b5fe1ac.js";import{u as T}from"./useTable.e1de305c.js";import{P as j}from"./index.b85ba22b.js";import{refundTimeTableSchema as v,refundTimeTableData as g}from"./data.f7673515.js";import{_ as y}from"./index.ccefc80e.js";import{x,aK as N,aU as k,aV as V,bn as X,bl as P,cv as S,cu as $,bq as w,aZ as I,an as W,M as z,I as M,X as s,z as c,Y,a2 as e,$ as u,A as p,a0 as R,aa as t,D as F}from"./vendor.edbe4fa8.js";import"./BasicForm.1197f972.js";import"./index.927997b6.js";import"./index.1b6370d0.js";import"./index.12e7d6ba.js";import"./useAttrs.07e29e2e.js";import"./useWindowSizeFn.ba2f9a46.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.8f0fb5ba.js";import"./base64Conver.bb012c73.js";import"./index.d37c02e5.js";import"./useForm.7241aa72.js";import"./onMountedOrActivated.bbea5cf5.js";const U=x({components:{ElButton:N,ElTabs:k,ElTabPane:V,ElDescriptions:X,ElDescriptionsItem:P,ElStep:S,ElSteps:$,ElCard:w,ElDivider:I,ElEmpty:W,BasicTable:A,PageWrapper:j},setup(){const l=z("detail"),n=M({title:"\u9000\u8D27\u8FDB\u5EA6",columns:v,dataSource:g,showIndexColumn:!1,scroll:{y:300}}),[r]=T();return{registerTimeTableFields:n,registerTimeTable:r,tabActivedName:l}}}),q=t("\u64CD\u4F5C\u4E00"),H=t("\u64CD\u4F5C\u4E8C"),K=t("\u4E3B\u64CD\u4F5C"),O={key:0,class:"pt-4 m-4"},Z=t("\u66F2\u4E3D\u4E3D"),G=t("XX \u670D\u52A1"),J=t("2021-01-01"),L=t("12421"),Q=t("2021-01-01 ~ 2022-01-01"),uu=t("\u8BF7\u4E8E\u4E24\u4E2A\u5DE5\u4F5C\u65E5\u5185\u786E\u8BA4"),eu=F("div",null,"Tony",-1),tu=F("p",null,"2016-12-12 12:32",-1),au=F("p",null,"Chad",-1),su=t("\u4ED8\u5C0F\u5C0F"),lu=t("XX 32943898021309809423"),ou=t("3321944288191034921"),nu=t("18112345678"),_u=t(" \u66F2\u4E3D\u4E3D 18100000000 \u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u9EC4\u59D1\u5C71\u8DEF\u5DE5\u4E13\u8DEF\u4EA4\u53C9\u8DEF\u53E3 "),du=t("111"),iu=t("2017-08-08"),cu=t("725"),Fu=t("2017-08-08"),ru=t("\u6797\u4E1C\u4E1C"),Eu=t("1234567"),mu=t("XX\u516C\u53F8 - YY\u90E8"),pu=t("2017-08-08"),bu=t(" \u8FD9\u6BB5\u63CF\u8FF0\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F... "),fu=t(" Citrullus lanatus (Thunb.) Matsum. et Nakai\u4E00\u5E74\u751F\u8513\u751F\u85E4\u672C\uFF1B\u830E\u3001\u679D\u7C97\u58EE\uFF0C\u5177\u660E\u663E\u7684\u68F1\u3002\u5377\u987B\u8F83\u7C97.. "),Du=t("\u4ED8\u5C0F\u5C0F"),Cu=t("1234568"),Bu={key:1,class:"pt-4 m-4"};function hu(l,n,r,Au,Tu,ju){const _=s("el-button"),E=s("el-tab-pane"),b=s("el-tabs"),a=s("el-descriptions-item"),o=s("el-descriptions"),d=s("el-step"),f=s("el-steps"),i=s("el-card"),m=s("el-divider"),D=s("el-empty"),C=s("BasicTable"),B=s("PageWrapper");return c(),Y(B,{title:"\u5355\u53F7\uFF1A234231029431",headerFullHeight:"",contentBackground:""},{extra:e(()=>[u(_,null,{default:e(()=>[q]),_:1}),u(_,null,{default:e(()=>[H]),_:1}),u(_,{type:"primary"},{default:e(()=>[K]),_:1})]),footer:e(()=>[u(b,{modelValue:l.tabActivedName,"onUpdate:modelValue":n[0]||(n[0]=h=>l.tabActivedName=h)},{default:e(()=>[u(E,{name:"detail",label:"\u8BE6\u60C5"}),u(E,{name:"rule",label:"\u89C4\u5219"})]),_:1},8,["modelValue"])]),default:e(()=>[l.tabActivedName==="detail"?(c(),p("div",O,[u(o,{size:"small",column:2},{default:e(()=>[u(a,{label:"\u521B\u5EFA\u4EBA"},{default:e(()=>[Z]),_:1}),u(a,{label:"\u8BA2\u8D2D\u4EA7\u54C1"},{default:e(()=>[G]),_:1}),u(a,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:e(()=>[J]),_:1}),u(a,{label:"\u5173\u8054\u5355\u636E"},{default:e(()=>[u(_,{type:"text"},{default:e(()=>[L]),_:1})]),_:1}),u(a,{label:"\u751F\u6548\u65E5\u671F"},{default:e(()=>[Q]),_:1}),u(a,{label:"\u5907\u6CE8"},{default:e(()=>[uu]),_:1})]),_:1}),u(i,{header:"\u6D41\u7A0B\u8FDB\u5EA6",class:"mt-4"},{default:e(()=>[u(f,{active:1,"finish-status":"success"},{default:e(()=>[u(d,{title:"\u521B\u5EFA\u9879\u76EE"},{description:e(()=>[eu,tu]),_:1}),u(d,{title:"\u90E8\u95E8\u521D\u5BA1"},{description:e(()=>[au]),_:1}),u(d,{title:"\u8D22\u52A1\u590D\u6838"}),u(d,{title:"\u5B8C\u6210"})]),_:1})]),_:1}),u(i,{header:"\u7528\u6237\u4FE1\u606F",class:"mt-4"},{default:e(()=>[u(o,{column:3},{default:e(()=>[u(a,{label:"\u7528\u6237\u59D3\u540D"},{default:e(()=>[su]),_:1}),u(a,{label:"\u4F1A\u5458\u5361\u53F7"},{default:e(()=>[lu]),_:1}),u(a,{label:"\u8EAB\u4EFD\u8BC1"},{default:e(()=>[ou]),_:1}),u(a,{label:"\u8054\u7CFB\u65B9\u5F0F"},{default:e(()=>[nu]),_:1}),u(a,{label:"\u8054\u7CFB\u5730\u5740",span:2},{default:e(()=>[_u]),_:1})]),_:1}),u(o,{title:"\u4FE1\u606F\u7EC4",column:3},{default:e(()=>[u(a,{label:"\u67D0\u67D0\u6570\u636E"},{default:e(()=>[du]),_:1}),u(a,{label:"\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4"},{default:e(()=>[iu]),_:1}),u(a,{label:"\u67D0\u67D0\u6570\u636E"},{default:e(()=>[cu]),_:1}),u(a,{label:"\u8BE5\u6570\u636E\u66F4\u65B0\u65F6\u95F4"},{default:e(()=>[Fu]),_:1})]),_:1}),u(i,{header:"\u591A\u5C42\u7EA7\u4FE1\u606F\u7EC4",class:"mt-4"},{default:e(()=>[u(o,{title:"\u7EC4\u540D\u79F0",column:3},{default:e(()=>[u(a,{label:"\u8D1F\u8D23\u4EBA"},{default:e(()=>[ru]),_:1}),u(a,{label:"\u89D2\u8272\u7801"},{default:e(()=>[Eu]),_:1}),u(a,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:e(()=>[mu]),_:1}),u(a,{label:"\u8FC7\u671F\u65F6\u95F4"},{default:e(()=>[pu]),_:1}),u(a,{label:"\u63CF\u8FF0",span:2},{default:e(()=>[bu]),_:1})]),_:1}),u(m),u(o,{title:"\u7EC4\u540D\u79F0",column:1},{default:e(()=>[u(a,{label:"\u5B66\u540D"},{default:e(()=>[fu]),_:1})]),_:1}),u(m),u(o,{title:"\u7EC4\u540D\u79F0",column:1},{default:e(()=>[u(a,{label:"\u8D1F\u8D23\u4EBA"},{default:e(()=>[Du]),_:1}),u(a,{label:"\u89D2\u8272\u7801"},{default:e(()=>[Cu]),_:1})]),_:1})]),_:1})]),_:1}),u(i,{header:"\u7528\u6237\u8FD1\u534A\u5E74\u6765\u7535\u8BB0\u5F55",class:"my-8"},{default:e(()=>[u(D)]),_:1}),u(C,R(l.registerTimeTableFields,{onRegister:l.registerTimeTable}),null,16,["onRegister"])])):(c(),p("div",Bu,"~~~ rule ~~~"))]),_:1})}var qu=y(U,[["render",hu]]);export{qu as default};
