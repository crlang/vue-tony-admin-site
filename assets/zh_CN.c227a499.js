var B=Object.defineProperty,a=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var t=(F,u,e)=>u in F?B(F,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):F[u]=e,o=(F,u)=>{for(var e in u||(u={}))D.call(u,e)&&t(F,e,u[e]);if(E)for(var e of E(u))l.call(u,e)&&t(F,e,u[e]);return F},r=(F,u)=>a(F,C(u));import{g as n}from"./index.16f9732e.js";import{ci as i}from"./ex-pkg-vendor.ab2d902e.js";import{C as A}from"./ex-pkg-element-plus.e1a09009.js";import"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@popperjs.f3a17871.js";var s={confirmText:"\u786E\u8BA4",closeText:"\u5173\u95ED",cancelText:"\u53D6\u6D88",loadingText:"\u52A0\u8F7D\u4E2D...",saveText:"\u4FDD\u5B58",delText:"\u5220\u9664",resetText:"\u91CD\u7F6E",searchText:"\u641C\u7D22",queryText:"\u67E5\u8BE2",inputText:"\u8BF7\u8F93\u5165",chooseText:"\u8BF7\u9009\u62E9",operationSucceededText:"\u64CD\u4F5C\u6210\u529F",operationFailedText:"\u64CD\u4F5C\u5931\u8D25",operationTipText:"\u6E29\u99A8\u63D0\u793A",requiredTipText:"\u6B64\u4E3A\u5FC5\u586B\u9879",emptyText:"\u6570\u636E\u4E3A\u7A7A",viewMore:"\u67E5\u770B\u66F4\u591A",redo:"\u5237\u65B0",back:"\u8FD4\u56DE",light:"\u4EAE\u8272\u4E3B\u9898",dark:"\u9ED1\u6697\u4E3B\u9898"},c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:s}),m={app:{searchNotData:"\u6682\u65E0\u641C\u7D22\u7ED3\u679C",toSearch:"\u786E\u8BA4",toNavigate:"\u5207\u6362"},countdown:{normalText:"\u83B7\u53D6\u9A8C\u8BC1\u7801",sendText:"{0}\u79D2\u540E\u91CD\u65B0\u83B7\u53D6"},cropper:{selectImage:"\u9009\u62E9\u56FE\u7247",uploadSuccess:"\u4E0A\u4F20\u6210\u529F",modalTitle:"\u5934\u50CF\u4E0A\u4F20",confirmText:"\u786E\u8BA4\u5E76\u4E0A\u4F20",btn_reset:"\u91CD\u7F6E",btn_rotate_left:"\u9006\u65F6\u9488\u65CB\u8F6C",btn_rotate_right:"\u987A\u65F6\u9488\u65CB\u8F6C",btn_scale_x:"\u6C34\u5E73\u7FFB\u8F6C",btn_scale_y:"\u5782\u76F4\u7FFB\u8F6C",btn_zoom_in:"\u653E\u5927",btn_zoom_out:"\u7F29\u5C0F",preview:"\u9884\u89C8"},drawer:{loadingText:"\u52A0\u8F7D\u4E2D...",cancelText:"\u5173\u95ED",confirmText:"\u786E\u8BA4"},form:{putAway:"\u6536\u8D77",unfold:"\u5C55\u5F00",maxTip:"\u5B57\u7B26\u6570\u5E94\u5C0F\u4E8E{0}\u4F4D",apiSelectNotFound:"\u8BF7\u7B49\u5F85\u6570\u636E\u52A0\u8F7D\u5B8C\u6210..."},icon:{placeholder:"\u70B9\u51FB\u9009\u62E9\u56FE\u6807",search:"\u641C\u7D22\u56FE\u6807",copy:"\u590D\u5236\u56FE\u6807\u6210\u529F!"},menu:{search:"\u83DC\u5355\u641C\u7D22"},modal:{cancelText:"\u5173\u95ED",confirmText:"\u786E\u8BA4",close:"\u5173\u95ED",maximize:"\u6700\u5927\u5316",restore:"\u8FD8\u539F"},table:{settingDens:"\u5BC6\u5EA6",settingDensDefault:"\u9ED8\u8BA4",settingDensLarge:"\u5BBD\u677E",settingDensSmall:"\u7D27\u51D1",settingColumn:"\u5217\u8BBE\u7F6E",settingColumnShow:"\u5217\u5C55\u793A",settingIndexColumnShow:"\u5E8F\u53F7\u5217",settingSelectColumnShow:"\u52FE\u9009\u5217",settingFixedLeft:"\u56FA\u5B9A\u5230\u5DE6\u4FA7",settingFixedRight:"\u56FA\u5B9A\u5230\u53F3\u4FA7",settingFullScreen:"\u5168\u5C4F",index:"\u5E8F\u53F7",operation:"\u64CD\u4F5C",total:"\u5171 {total} \u6761\u6570\u636E"},time:{before:"\u524D",after:"\u540E",just:"\u521A\u521A",seconds:"\u79D2",minutes:"\u5206\u949F",hours:"\u5C0F\u65F6",days:"\u5929"},tree:{selectAll:"\u9009\u62E9\u5168\u90E8",unSelectAll:"\u53D6\u6D88\u9009\u62E9",expandAll:"\u5C55\u5F00\u5168\u90E8",unExpandAll:"\u6298\u53E0\u5168\u90E8",checkStrictly:"\u5C42\u7EA7\u5173\u8054",checkUnStrictly:"\u5C42\u7EA7\u72EC\u7ACB"},upload:{save:"\u4FDD\u5B58",upload:"\u4E0A\u4F20",imgUpload:"\u56FE\u7247\u4E0A\u4F20",uploaded:"\u5DF2\u4E0A\u4F20",operating:"\u64CD\u4F5C",del:"\u5220\u9664",download:"\u4E0B\u8F7D",saveWarn:"\u8BF7\u7B49\u5F85\u6587\u4EF6\u4E0A\u4F20\u540E\uFF0C\u4FDD\u5B58!",saveError:"\u6CA1\u6709\u4E0A\u4F20\u6210\u529F\u7684\u6587\u4EF6\uFF0C\u65E0\u6CD5\u4FDD\u5B58!",preview:"\u9884\u89C8",choose:"\u9009\u62E9\u6587\u4EF6",accept:"\u652F\u6301{0}\u683C\u5F0F",acceptUpload:"\u53EA\u80FD\u4E0A\u4F20{0}\u683C\u5F0F\u6587\u4EF6",maxSize:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC7{0}MB",maxSizeMultiple:"\u53EA\u80FD\u4E0A\u4F20\u4E0D\u8D85\u8FC7{0}MB\u7684\u6587\u4EF6!",maxNumber:"\u6700\u591A\u53EA\u80FD\u4E0A\u4F20{0}\u4E2A\u6587\u4EF6",legend:"\u7565\u7F29\u56FE",fileName:"\u6587\u4EF6\u540D",fileSize:"\u6587\u4EF6\u5927\u5C0F",fileStatue:"\u72B6\u6001",startUpload:"\u5F00\u59CB\u4E0A\u4F20",uploadSuccess:"\u4E0A\u4F20\u6210\u529F",uploadError:"\u4E0A\u4F20\u5931\u8D25",uploading:"\u4E0A\u4F20\u4E2D",uploadWait:"\u8BF7\u7B49\u5F85\u6587\u4EF6\u4E0A\u4F20\u7ED3\u675F\u540E\u64CD\u4F5C",reUploadFailed:"\u91CD\u65B0\u4E0A\u4F20\u5931\u8D25\u6587\u4EF6",closeUploadList:"\u5DF2\u5B58\u5728\u4E0A\u4F20\u6587\u4EF6\uFF0C\u5173\u95ED\u540E\u5C06\u6E05\u7A7A\u4E0A\u4F20\u5217\u8868\uFF0C\u662F\u5426\u5173\u95ED\u7A97\u53E3\uFF1F"},verify:{error:"\u9A8C\u8BC1\u5931\u8D25\uFF01",time:"\u9A8C\u8BC1\u6821\u9A8C\u6210\u529F,\u8017\u65F6{time}\u79D2\uFF01",redoTip:"\u70B9\u51FB\u56FE\u7247\u53EF\u5237\u65B0",dragText:"\u8BF7\u6309\u4F4F\u6ED1\u5757\u62D6\u52A8",successText:"\u9A8C\u8BC1\u901A\u8FC7"}},d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),p={footer:{onlinePreview:"\u5728\u7EBF\u9884\u89C8",onlineDocument:"\u5728\u7EBF\u6587\u6863"},header:{dropdownItemDoc:"\u6587\u6863",dropdownItemLoginOut:"\u9000\u51FA\u7CFB\u7EDF",tooltipErrorLog:"\u9519\u8BEF\u65E5\u5FD7",tooltipLock:"\u9501\u5B9A\u5C4F\u5E55",tooltipNotify:"\u6D88\u606F\u901A\u77E5",tooltipEntryFull:"\u5168\u5C4F",tooltipExitFull:"\u9000\u51FA\u5168\u5C4F",lockScreenPassword:"\u9501\u5C4F\u5BC6\u7801",lockScreen:"\u9501\u5B9A\u5C4F\u5E55",lockScreenBtn:"\u9501\u5B9A",home:"\u9996\u9875"},multipleTab:{reload:"\u91CD\u65B0\u52A0\u8F7D",close:"\u5173\u95ED\u6807\u7B7E\u9875",closeLeft:"\u5173\u95ED\u5DE6\u4FA7\u6807\u7B7E\u9875",closeRight:"\u5173\u95ED\u53F3\u4FA7\u6807\u7B7E\u9875",closeOther:"\u5173\u95ED\u5176\u5B83\u6807\u7B7E\u9875",closeAll:"\u5173\u95ED\u5168\u90E8\u6807\u7B7E\u9875"},setting:{contentModeFull:"\u6D41\u5F0F",contentModeFixed:"\u5B9A\u5BBD",topMenuAlignLeft:"\u5C45\u5DE6",topMenuAlignRight:"\u5C45\u4E2D",topMenuAlignCenter:"\u5C45\u53F3",menuTriggerNone:"\u4E0D\u663E\u793A",menuTriggerBottom:"\u5E95\u90E8",menuTriggerTop:"\u9876\u90E8",menuTypeSidebar:"\u5DE6\u4FA7\u83DC\u5355\u6A21\u5F0F",menuTypeMixSidebar:"\u5DE6\u4FA7\u83DC\u5355\u6DF7\u5408\u6A21\u5F0F",menuTypeMix:"\u9876\u90E8\u83DC\u5355\u6DF7\u5408\u6A21\u5F0F",menuTypeTopMenu:"\u9876\u90E8\u83DC\u5355\u6A21\u5F0F",on:"\u5F00",off:"\u5173",minute:"\u5206\u949F",operatingTitle:"\u64CD\u4F5C\u6210\u529F",operatingContent:"\u590D\u5236\u6210\u529F,\u8BF7\u5230 src/settings/projectSetting.ts \u4E2D\u4FEE\u6539\u914D\u7F6E\uFF01",resetSuccess:"\u91CD\u7F6E\u6210\u529F\uFF01",copyBtn:"\u62F7\u8D1D",clearBtn:"\u6E05\u7A7A\u7F13\u5B58\u5E76\u8FD4\u56DE\u767B\u5F55\u9875",drawerTitle:"\u9879\u76EE\u914D\u7F6E",darkMode:"\u4E3B\u9898",navMode:"\u5BFC\u822A\u680F\u6A21\u5F0F",interfaceFunction:"\u754C\u9762\u529F\u80FD",interfaceDisplay:"\u754C\u9762\u663E\u793A",animation:"\u52A8\u753B",splitMenu:"\u5206\u5272\u83DC\u5355",closeMixSidebarOnChange:"\u5207\u6362\u9875\u9762\u5173\u95ED\u83DC\u5355",sysTheme:"\u7CFB\u7EDF\u4E3B\u9898",headerTheme:"\u9876\u680F\u4E3B\u9898",sidebarTheme:"\u83DC\u5355\u4E3B\u9898",menuDrag:"\u4FA7\u8FB9\u83DC\u5355\u62D6\u62FD",menuSearch:"\u83DC\u5355\u641C\u7D22",menuAccordion:"\u4FA7\u8FB9\u83DC\u5355\u624B\u98CE\u7434\u6A21\u5F0F",menuCollapse:"\u6298\u53E0\u83DC\u5355",collapseMenuDisplayName:"\u6298\u53E0\u83DC\u5355\u663E\u793A\u540D\u79F0",topMenuLayout:"\u9876\u90E8\u83DC\u5355\u5E03\u5C40",menuCollapseButton:"\u83DC\u5355\u6298\u53E0\u6309\u94AE",contentMode:"\u5185\u5BB9\u533A\u57DF\u5BBD\u5EA6",expandedMenuWidth:"\u83DC\u5355\u5C55\u5F00\u5BBD\u5EA6",breadcrumb:"\u9762\u5305\u5C51",breadcrumbIcon:"\u9762\u5305\u5C51\u56FE\u6807",tabs:"\u6807\u7B7E\u9875",tabsQuickBtn:"\u6807\u7B7E\u9875\u5FEB\u6377\u6309\u94AE",tabsRedoBtn:"\u6807\u7B7E\u9875\u5237\u65B0\u6309\u94AE",tabsFoldBtn:"\u6807\u7B7E\u9875\u6298\u53E0\u6309\u94AE",sidebar:"\u5DE6\u4FA7\u83DC\u5355",header:"\u9876\u680F",footer:"\u9875\u811A",fullContent:"\u5168\u5C4F\u5185\u5BB9",grayMode:"\u7070\u8272\u6A21\u5F0F",colorWeak:"\u8272\u5F31\u6A21\u5F0F",progress:"\u9876\u90E8\u8FDB\u5EA6\u6761",switchLoading:"\u5207\u6362loading",switchAnimation:"\u5207\u6362\u52A8\u753B",animationType:"\u52A8\u753B\u7C7B\u578B",autoScreenLock:"\u81EA\u52A8\u9501\u5C4F",notAutoScreenLock:"\u4E0D\u81EA\u52A8\u9501\u5C4F",fixedHeader:"\u56FA\u5B9Aheader",fixedSideBar:"\u56FA\u5B9ASidebar",mixSidebarTrigger:"\u6DF7\u5408\u83DC\u5355\u89E6\u53D1\u65B9\u5F0F",triggerHover:"\u60AC\u505C",triggerClick:"\u70B9\u51FB",mixSidebarFixed:"\u56FA\u5B9A\u5C55\u5F00\u83DC\u5355"}},g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:p}),b={basic:{login:"\u767B\u5F55",errorLogList:"\u9519\u8BEF\u65E5\u5FD7\u5217\u8868"},dashboard:{dashboard:"\u4EEA\u8868\u76D8",about:"\u5173\u4E8E",workbench:"\u5DE5\u4F5C\u53F0",analysis:"\u5206\u6790\u9875"},charts:{baiduMap:"\u767E\u5EA6\u5730\u56FE",aMap:"\u9AD8\u5FB7\u5730\u56FE",googleMap:"\u8C37\u6B4C\u5730\u56FE",tMap:"\u817E\u8BAF\u5730\u56FE",charts:"\u56FE\u8868",map:"\u5730\u56FE",line:"\u6298\u7EBF\u56FE",linedync:"\u6298\u7EBF\u56FE Dync",pie:"\u997C\u56FE",nightingale:"\u5357\u4E01\u683C\u5C14\u56FE"},comp:{comp:"\u7EC4\u4EF6",basic:"\u57FA\u7840\u7EC4\u4EF6",transition:"\u52A8\u753B\u7EC4\u4EF6",countTo:"\u6570\u5B57\u52A8\u753B",progress:"\u8FDB\u5EA6\u6761\u52A8\u753B",scroll:"\u6EDA\u52A8\u7EC4\u4EF6",scrollBasic:"\u57FA\u7840\u6EDA\u52A8",scrollAction:"\u6EDA\u52A8\u51FD\u6570",virtualScroll:"\u865A\u62DF\u6EDA\u52A8",tree:"Tree",treeBasic:"\u57FA\u7840\u6811",editTree:"\u64CD\u4F5C\u793A\u4F8B",actionTree:"\u51FD\u6570\u793A\u4F8B",modal:"\u5F39\u7A97\u6269\u5C55",drawer:"\u62BD\u5C49\u6269\u5C55",desc:"\u8BE6\u60C5\u7EC4\u4EF6",lazy:"\u61D2\u52A0\u8F7D\u7EC4\u4EF6",lazyBasic:"\u57FA\u7840\u793A\u4F8B",lazyTransition:"\u52A8\u753B\u6548\u679C",verify:"\u9A8C\u8BC1\u7EC4\u4EF6",verifyDrag:"\u62D6\u62FD\u6821\u9A8C",verifyRotate:"\u56FE\u7247\u8FD8\u539F",qrcode:"\u4E8C\u7EF4\u7801\u7EC4\u4EF6",strength:"\u5BC6\u7801\u5F3A\u5EA6\u7EC4\u4EF6",upload:"\u4E0A\u4F20\u7EC4\u4EF6",loading:"Loading",time:"\u76F8\u5BF9\u65F6\u95F4",cropperImage:"\u56FE\u7247\u88C1\u526A",cardList:"\u5361\u7247\u5217\u8868"},editor:{editor:"\u7F16\u8F91\u5668",jsonEditor:"Json\u7F16\u8F91\u5668",markdown:"markdown\u7F16\u8F91\u5668",tinymce:"\u5BCC\u6587\u672C",tinymceBasic:"\u57FA\u7840\u4F7F\u7528",tinymceForm:"\u5D4C\u5165form"},feat:{feat:"\u529F\u80FD",icon:"\u56FE\u6807",sessionTimeout:"\u767B\u5F55\u8FC7\u671F",tabs:"\u6807\u7B7E\u9875\u64CD\u4F5C",print:"\u6253\u5370",contextMenu:"\u53F3\u952E\u83DC\u5355",download:"\u6587\u4EF6\u4E0B\u8F7D",clickOutSide:"ClickOutSide\u7EC4\u4EF6",imgPreview:"\u56FE\u7247\u9884\u89C8",copy:"\u526A\u5207\u677F",msg:"\u6D88\u606F\u63D0\u793A",watermark:"\u6C34\u5370",ripple:"\u6C34\u6CE2\u7EB9",fullScreen:"\u5168\u5C4F",errorLog:"\u9519\u8BEF\u65E5\u5FD7",tab:"Tab\u5E26\u53C2",tab1:"Tab\u5E26\u53C21",tab2:"Tab\u5E26\u53C22",menu:"Menu\u5E26\u53C2",menu1:"Menu\u5E26\u53C21",menu2:"Menu\u5E26\u53C22",ws:"websocket\u6D4B\u8BD5",breadcrumb:"\u9762\u5305\u5C51\u5BFC\u822A",breadcrumbFlat:"\u5E73\u7EA7\u6A21\u5F0F",breadcrumbFlatDetail:"\u5E73\u7EA7\u8BE6\u60C5",breadcrumbChildren:"\u5C42\u7EA7\u6A21\u5F0F",breadcrumbChildrenDetail:"\u5C42\u7EA7\u8BE6\u60C5"},form:{form:"Form",basic:"\u57FA\u7840\u8868\u5355",useForm:"useForm",refForm:"RefForm",advancedForm:"\u53EF\u6536\u7F29\u8868\u5355",ruleForm:"\u8868\u5355\u9A8C\u8BC1",dynamicForm:"\u52A8\u6001\u8868\u5355",customerForm:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",appendForm:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},iframe:{frame:"\u5916\u90E8\u9875\u9762",ele:"element plus\u6587\u6863(\u5185\u5D4C)",doc:"\u9879\u76EE\u6587\u6863(\u5185\u5D4C)",docExternal:"\u9879\u76EE\u6587\u6863(\u5916\u94FE)",outFrame:"\u6846\u67B6\u5916\u9875\u9762"},level:{level:"\u591A\u7EA7\u83DC\u5355"},page:{page:"\u9875\u9762",form:"\u8868\u5355\u9875",formBasic:"\u57FA\u7840\u8868\u5355",formStep:"\u5206\u6B65\u8868\u5355",formHigh:"\u9AD8\u7EA7\u8868\u5355",desc:"\u8BE6\u60C5\u9875",descBasic:"\u57FA\u7840\u8BE6\u60C5\u9875",descHigh:"\u9AD8\u7EA7\u8BE6\u60C5\u9875",result:"\u7ED3\u679C\u9875",resultSuccess:"\u6210\u529F\u9875",resultFail:"\u5931\u8D25\u9875",account:"\u4E2A\u4EBA\u9875",accountCenter:"\u4E2A\u4EBA\u4E2D\u5FC3",accountSetting:"\u4E2A\u4EBA\u8BBE\u7F6E",exception:"\u5F02\u5E38\u9875",netWorkError:"\u7F51\u7EDC\u9519\u8BEF",notData:"\u65E0\u6570\u636E",list:"\u5217\u8868\u9875",listCard:"\u5361\u7247\u5217\u8868",basic:"\u57FA\u7840\u5217\u8868",listBasic:"\u6807\u51C6\u5217\u8868",listSearch:"\u641C\u7D22\u5217\u8868"},permission:{permission:"\u6743\u9650\u7BA1\u7406",front:"\u57FA\u4E8E\u524D\u7AEF\u6743\u9650",frontPage:"\u9875\u9762\u6743\u9650",frontBtn:"\u6309\u94AE\u6743\u9650",frontTestA:"\u6743\u9650\u6D4B\u8BD5\u9875A",frontTestB:"\u6743\u9650\u6D4B\u8BD5\u9875B",back:"\u57FA\u4E8E\u540E\u53F0\u6743\u9650",backPage:"\u9875\u9762\u6743\u9650",backBtn:"\u6309\u94AE\u6743\u9650"},setup:{page:"\u5F15\u5BFC\u9875"},system:{moduleName:"\u7CFB\u7EDF\u7BA1\u7406",account:"\u8D26\u53F7\u7BA1\u7406",account_detail:"\u8D26\u53F7\u8BE6\u60C5",password:"\u4FEE\u6539\u5BC6\u7801",dept:"\u90E8\u95E8\u7BA1\u7406",menu:"\u83DC\u5355\u7BA1\u7406",role:"\u89D2\u8272\u7BA1\u7406"},table:{table:"Table",basic:"\u57FA\u7840\u8868\u683C",treeTable:"\u6811\u5F62\u8868\u683C",fetchTable:"\u8FDC\u7A0B\u52A0\u8F7D\u793A\u4F8B",fixedColumn:"\u56FA\u5B9A\u5217",customerCell:"\u81EA\u5B9A\u4E49\u5217",formTable:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",useTable:"UseTable",refTable:"RefTable",expandTable:"\u53EF\u5C55\u5F00\u8868\u683C",fixedHeight:"\u5B9A\u9AD8/\u5934\u90E8\u81EA\u5B9A\u4E49",footerTable:"\u8868\u5C3E\u884C\u5408\u8BA1",editRowTable:"\u53EF\u7F16\u8F91\u884C",authColumn:"\u6743\u9650\u5217"}},T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b}),f={api:{operationFailed:"\u64CD\u4F5C\u5931\u8D25",errorTip:"\u9519\u8BEF\u63D0\u793A",errorMessage:"\u64CD\u4F5C\u5931\u8D25,\u7CFB\u7EDF\u5F02\u5E38!",timeoutMessage:"\u767B\u5F55\u8D85\u65F6,\u8BF7\u91CD\u65B0\u767B\u5F55!",apiTimeoutMessage:"\u63A5\u53E3\u8BF7\u6C42\u8D85\u65F6,\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5!",apiRequestFailed:"\u8BF7\u6C42\u51FA\u9519\uFF0C\u8BF7\u7A0D\u5019\u91CD\u8BD5",networkException:"\u7F51\u7EDC\u5F02\u5E38",networkExceptionMsg:"\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38!",errMsg401:"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09!",errMsg403:"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002!",errMsg404:"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u672A\u627E\u5230\u8BE5\u8D44\u6E90!",errMsg405:"\u7F51\u7EDC\u8BF7\u6C42\u9519\u8BEF,\u8BF7\u6C42\u65B9\u6CD5\u672A\u5141\u8BB8!",errMsg408:"\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6!",errMsg500:"\u670D\u52A1\u5668\u9519\u8BEF,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458!",errMsg501:"\u7F51\u7EDC\u672A\u5B9E\u73B0!",errMsg502:"\u7F51\u7EDC\u9519\u8BEF!",errMsg503:"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4!",errMsg504:"\u7F51\u7EDC\u8D85\u65F6!",errMsg505:"http\u7248\u672C\u4E0D\u652F\u6301\u8BE5\u8BF7\u6C42!"},app:{logoutTip:"\u6E29\u99A8\u63D0\u9192",logoutMessage:"\u662F\u5426\u786E\u8BA4\u9000\u51FA\u7CFB\u7EDF?",menuLoading:"\u83DC\u5355\u52A0\u8F7D\u4E2D..."},errorLog:{tableTitle:"\u9519\u8BEF\u65E5\u5FD7\u5217\u8868",tableColumnType:"\u7C7B\u578B",tableColumnDate:"\u65F6\u95F4",tableColumnFile:"\u6587\u4EF6",tableColumnMsg:"\u9519\u8BEF\u4FE1\u606F",tableColumnStackMsg:"stack\u4FE1\u606F",tableActionDesc:"\u8BE6\u60C5",modalTitle:"\u9519\u8BEF\u8BE6\u60C5",fireVueError:"\u70B9\u51FB\u89E6\u53D1vue\u9519\u8BEF",fireResourceError:"\u70B9\u51FB\u89E6\u53D1\u8D44\u6E90\u52A0\u8F7D\u9519\u8BEF",fireAjaxError:"\u70B9\u51FB\u89E6\u53D1ajax\u9519\u8BEF",enableMessage:"\u53EA\u5728`/src/settings/projectSetting.ts` \u5185\u7684useErrorHandle=true\u65F6\u751F\u6548."},exception:{backLogin:"\u8FD4\u56DE\u767B\u5F55",backHome:"\u8FD4\u56DE\u9996\u9875",subTitle403:"\u62B1\u6B49\uFF0C\u60A8\u65E0\u6743\u8BBF\u95EE\u6B64\u9875\u9762\u3002",subTitle404:"\u62B1\u6B49\uFF0C\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728\u3002",subTitle500:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u62A5\u544A\u9519\u8BEF\u3002",noDataTitle:"\u5F53\u524D\u9875\u65E0\u6570\u636E",networkErrorTitle:"\u7F51\u7EDC\u9519\u8BEF",networkErrorSubTitle:"\u62B1\u6B49\uFF0C\u60A8\u7684\u7F51\u7EDC\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u68C0\u67E5\u60A8\u7684\u7F51\u7EDC\uFF01"},lock:{unlock:"\u70B9\u51FB\u89E3\u9501",alert:"\u9501\u5C4F\u5BC6\u7801\u9519\u8BEF",backToLogin:"\u8FD4\u56DE\u767B\u5F55",entry:"\u8FDB\u5165\u7CFB\u7EDF",placeholder:"\u8BF7\u8F93\u5165\u9501\u5C4F\u5BC6\u7801\u6216\u8005\u7528\u6237\u5BC6\u7801"},login:{backSignIn:"\u8FD4\u56DE",mobileSignInFormTitle:"\u624B\u673A\u53F7\u767B\u5F55",qrSignInFormTitle:"\u4E8C\u7EF4\u7801\u767B\u5F55",signInFormTitle:"\u8D26\u53F7\u767B\u5F55",signUpFormTitle:"\u6CE8\u518C",forgetFormTitle:"\u91CD\u7F6E\u5BC6\u7801",signInTitle:"\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",signInDesc:"\u8F93\u5165\u60A8\u7684\u4E2A\u4EBA\u8BE6\u7EC6\u4FE1\u606F\u5F00\u59CB\u4F7F\u7528\uFF01",policy:"\u6211\u540C\u610Fxxx\u9690\u79C1\u653F\u7B56",scanSign:"\u8BF7\u626B\u7801\u540E\u767B\u5F55",noAccount:"\u6CA1\u6709\u8D26\u53F7\uFF1F",welcome:"\u6B22\u8FCE\u4F7F\u7528",sloganTitle:" \u662F\u4E00\u4E2A\u514D\u8D39\u5F00\u6E90\u7684\u4E2D\u540E\u53F0\u524D\u7AEF\u6A21\u677F\u3002",sloganDesc:"\u57FA\u4E8E element plus \uFF0C\u5E76\u4E14\u4F7F\u7528\u4E86\u6700\u65B0\u7684 vue3, vite2, TypeScript \u7B49\u4E3B\u6D41\u6280\u672F\u5F00\u53D1\uFF0C\u5F00\u7BB1\u5373\u7528\u7684\u4E2D\u540E\u53F0\u524D\u7AEF\u89E3\u51B3\u65B9\u6848\u3002",slogan:"Element/Vue3/Typescript \u6700\u4F73\u7684\u9009\u62E9\uFF01",loginButton:"\u767B\u5F55",registerButton:"\u6CE8\u518C",rememberMe:"\u8BB0\u4F4F\u6211",forgetPassword:"\u5FD8\u8BB0\u5BC6\u7801?",otherSignIn:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F",loginSuccessTitle:"\u767B\u5F55\u6210\u529F",loginSuccessDesc:"\u6B22\u8FCE\u56DE\u6765",registerSuccessTitle:"\u6CE8\u518C\u6210\u529F",registerSuccessDesc:"\u6B22\u8FCE\u52A0\u5165",accountPlaceholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",passwordPlaceholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",smsPlaceholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",mobilePlaceholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",mobileError:"\u624B\u673A\u53F7\u7801\u4E0D\u6B63\u786E",policyPlaceholder:"\u52FE\u9009\u540E\u624D\u80FD\u6CE8\u518C",diffPwd:"\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4",userName:"\u8D26\u53F7",userNameEg:"\u8D26\u53F7 admin/tony",password:"\u5BC6\u7801",passwordEg:"\u5BC6\u7801 123456",confirmPassword:"\u786E\u8BA4\u5BC6\u7801",email:"\u90AE\u7BB1",smsCode:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",mobile:"\u624B\u673A\u53F7\u7801"}},x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:f});const h={"./zh-CN/common.ts":c,"./zh-CN/component.ts":d,"./zh-CN/layout.ts":g,"./zh-CN/routes.ts":T,"./zh-CN/sys.ts":x};var N={message:r(o({},n(h,"zh-CN")),{eleLocale:A}),momentLocale:i,momentLocaleName:"zh-cn"};export{N as default};
