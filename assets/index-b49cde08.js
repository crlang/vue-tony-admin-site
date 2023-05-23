import{g as T,n as A}from"./elementui-66980f2a.js";import{E as I,r as x,ac as M,p as D,I as B,J as P,S,P as w}from"./vue-d691a816.js";import{_ as U}from"./index-795cdaa0.js";var C={exports:{}};(function(g,j){(function(f,n){g.exports=n()})(window,function(){return function(m){var f={};function n(r){if(f[r])return f[r].exports;var d=f[r]={i:r,l:!1,exports:{}};return m[r].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=m,n.c=f,n.d=function(r,d,a){n.o(r,d)||Object.defineProperty(r,d,{enumerable:!0,get:a})},n.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,d){if(d&1&&(r=n(r)),d&8||d&4&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),d&2&&typeof r!="string")for(var b in r)n.d(a,b,function(i){return r[i]}.bind(null,b));return a},n.n=function(r){var d=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(d,"a",d),d},n.o=function(r,d){return Object.prototype.hasOwnProperty.call(r,d)},n.p="",n(n.s=0)}({"./src/index.js":function(m,f,n){n.r(f),n("./src/sass/index.scss");var r=n("./src/js/init.js"),d=r.default.init;typeof window!="undefined"&&(window.printJS=d),f.default=d},"./src/js/browser.js":function(m,f,n){n.r(f);var r={isFirefox:function(){return typeof InstallTrigger!="undefined"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!r.isIE()&&!!window.StyleMedia},isChrome:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!a.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};f.default=r},"./src/js/functions.js":function(m,f,n){n.r(f),n.d(f,"addWrapper",function(){return b}),n.d(f,"capitalizePrint",function(){return i}),n.d(f,"collectStyles",function(){return l}),n.d(f,"addHeader",function(){return e}),n.d(f,"cleanUp",function(){return u}),n.d(f,"isRawHTML",function(){return p});var r=n("./src/js/modal.js"),d=n("./src/js/browser.js");function a(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(c){return typeof c}:a=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},a(t)}function b(t,s){var c="font-family:"+s.font+" !important; font-size: "+s.font_size+" !important; width:100%;";return'<div style="'+c+'">'+t+"</div>"}function i(t){return t.charAt(0).toUpperCase()+t.slice(1)}function l(t,s){for(var c=document.defaultView||window,h="",y=c.getComputedStyle(t,""),E=0;E<y.length;E++)(s.targetStyles.indexOf("*")!==-1||s.targetStyle.indexOf(y[E])!==-1||o(s.targetStyles,y[E]))&&y.getPropertyValue(y[E])&&(h+=y[E]+":"+y.getPropertyValue(y[E])+";");return h+="max-width: "+s.maxWidth+"px !important; font-size: "+s.font_size+" !important;",h}function o(t,s){for(var c=0;c<t.length;c++)if(a(s)==="object"&&s.indexOf(t[c])!==-1)return!0;return!1}function e(t,s){var c=document.createElement("div");if(p(s.header))c.innerHTML=s.header;else{var h=document.createElement("h1"),y=document.createTextNode(s.header);h.appendChild(y),h.setAttribute("style",s.headerStyle),c.appendChild(h)}t.insertBefore(c,t.childNodes[0])}function u(t){t.showModal&&r.default.close(),t.onLoadingEnd&&t.onLoadingEnd(),(t.showModal||t.onLoadingStart)&&window.URL.revokeObjectURL(t.printable);var s="mouseover";(d.default.isChrome()||d.default.isFirefox())&&(s="focus");var c=function h(){window.removeEventListener(s,h),t.onPrintDialogClose();var y=document.getElementById(t.frameId);y&&y.remove()};window.addEventListener(s,c)}function p(t){var s=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return s.test(t)}},"./src/js/html.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),d=n("./src/js/print.js");function a(l){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(e){return typeof e}:a=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(l)}f.default={print:function(o,e){var u=i(o.printable)?o.printable:document.getElementById(o.printable);if(!u){window.console.error("Invalid HTML element id: "+o.printable);return}o.printableElement=b(u,o),o.header&&Object(r.addHeader)(o.printableElement,o),d.default.send(o,e)}};function b(l,o){for(var e=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),p=0;p<u.length;p++)if(o.ignoreElements.indexOf(u[p].id)===-1){var t=b(u[p],o);e.appendChild(t)}switch(o.scanStyles&&l.nodeType===1&&e.setAttribute("style",Object(r.collectStyles)(l,o)),l.tagName){case"SELECT":e.value=l.value;break;case"CANVAS":e.getContext("2d").drawImage(l,0,0);break}return e}function i(l){return a(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),d=n("./src/js/print.js"),a=n("./src/js/browser.js");f.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(o){var e=document.createElement("img");if(e.setAttribute("style",i.imageStyle),e.src=o,a.default.isFirefox()){var u=e.src;e.src=u}var p=document.createElement("div");p.appendChild(e),i.printableElement.appendChild(p)}),i.header&&Object(r.addHeader)(i.printableElement,i),d.default.send(i,l)}}},"./src/js/init.js":function(m,f,n){n.r(f);var r=n("./src/js/browser.js"),d=n("./src/js/modal.js"),a=n("./src/js/pdf.js"),b=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),o=n("./src/js/json.js");function e(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(s){return typeof s}:e=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},e(p)}var u=["pdf","html","image","json","raw-html"];f.default={init:function(){var t={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(L){throw L},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},s=arguments[0];if(s===void 0)throw new Error("printJS expects at least 1 attribute.");switch(e(s)){case"string":t.printable=encodeURI(s),t.fallbackPrintable=t.printable,t.type=arguments[1]||t.type;break;case"object":t.printable=s.printable,t.fallbackPrintable=typeof s.fallbackPrintable!="undefined"?s.fallbackPrintable:t.printable,t.fallbackPrintable=t.base64?"data:application/pdf;base64,".concat(t.fallbackPrintable):t.fallbackPrintable;for(var c in t)c==="printable"||c==="fallbackPrintable"||(t[c]=typeof s[c]!="undefined"?s[c]:t[c]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+e(s))}if(!t.printable)throw new Error("Missing printable information.");if(!t.type||typeof t.type!="string"||u.indexOf(t.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");t.showModal&&d.default.show(t),t.onLoadingStart&&t.onLoadingStart();var h=document.getElementById(t.frameId);h&&h.parentNode.removeChild(h);var y=document.createElement("iframe");switch(r.default.isFirefox()?y.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):y.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),y.setAttribute("id",t.frameId),t.type!=="pdf"&&(y.srcdoc="<html><head><title>"+t.documentTitle+"</title>",t.css&&(Array.isArray(t.css)||(t.css=[t.css]),t.css.forEach(function(v){y.srcdoc+='<link rel="stylesheet" href="'+v+'">'})),y.srcdoc+="</head><body></body></html>"),t.type){case"pdf":if(r.default.isIE())try{var E=window.open(t.fallbackPrintable,"_blank");E.focus(),t.onIncompatibleBrowser()}catch(v){t.onError(v)}finally{t.showModal&&d.default.close(),t.onLoadingEnd&&t.onLoadingEnd()}else a.default.print(t,y);break;case"image":l.default.print(t,y);break;case"html":b.default.print(t,y);break;case"raw-html":i.default.print(t,y);break;case"json":o.default.print(t,y);break}}}},"./src/js/json.js":function(m,f,n){n.r(f);var r=n("./src/js/functions.js"),d=n("./src/js/print.js");function a(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?a=function(o){return typeof o}:a=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},a(i)}f.default={print:function(l,o){if(a(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(e){return{field:a(e)==="object"?e.field:e,displayName:a(e)==="object"?e.displayName:e,columnSize:a(e)==="object"&&e.columnSize?e.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(r.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=b(l),d.default.send(l,o)}};function b(i){var l=i.printable,o=i.properties,e='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(e+="<thead>"),e+="<tr>";for(var u=0;u<o.length;u++)e+='<th style="width:'+o[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(r.capitalizePrint)(o[u].displayName)+"</th>";e+="</tr>",i.repeatTableHeader&&(e+="</thead>"),e+="<tbody>";for(var p=0;p<l.length;p++){e+="<tr>";for(var t=0;t<o.length;t++){var s=l[p],c=o[t].field.split(".");if(c.length>1)for(var h=0;h<c.length;h++)s=s[c[h]];else s=s[o[t].field];e+='<td style="width:'+o[t].columnSize+i.gridStyle+'">'+s+"</td>"}e+="</tr>"}return e+="</tbody></table>",e}},"./src/js/modal.js":function(m,f,n){n.r(f);var r={show:function(a){var b="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",b),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var o=document.createElement("div");o.setAttribute("class","printClose"),o.setAttribute("id","printClose"),l.appendChild(o);var e=document.createElement("span");e.setAttribute("class","printSpinner"),l.appendChild(e);var u=document.createTextNode(a.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){r.close()})},close:function(){var a=document.getElementById("printJS-Modal");a&&a.parentNode.removeChild(a)}};f.default=r},"./src/js/pdf.js":function(m,f,n){n.r(f);var r=n("./src/js/print.js"),d=n("./src/js/functions.js");f.default={print:function(i,l){if(i.base64){var o=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});a(i,l,o);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var e=new window.XMLHttpRequest;e.responseType="arraybuffer",e.addEventListener("error",function(){Object(d.cleanUp)(i),i.onError(e.statusText,e)}),e.addEventListener("load",function(){if([200,201].indexOf(e.status)===-1){Object(d.cleanUp)(i),i.onError(e.statusText,e);return}a(i,l,e.response)}),e.open("GET",i.printable,!0),e.send()}};function a(b,i,l){var o=new window.Blob([l],{type:"application/pdf"});o=window.URL.createObjectURL(o),i.setAttribute("src",o),r.default.send(b,i)}},"./src/js/print.js":function(m,f,n){n.r(f);var r=n("./src/js/browser.js"),d=n("./src/js/functions.js"),a={send:function(e,u){document.getElementsByTagName("body")[0].appendChild(u);var p=document.getElementById(e.frameId);p.onload=function(){if(e.type==="pdf"){r.default.isFirefox()?setTimeout(function(){return b(p,e)},1e3):b(p,e);return}var t=p.contentWindow||p.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),e.type!=="pdf"&&e.style){var s=document.createElement("style");s.innerHTML=e.style,t.head.appendChild(s)}var c=t.getElementsByTagName("img");c.length>0?i(Array.from(c)).then(function(){return b(p,e)}):b(p,e)}}};function b(o,e){try{if(o.focus(),r.default.isEdge()||r.default.isIE())try{o.contentWindow.document.execCommand("print",!1,null)}catch(u){o.contentWindow.print()}else o.contentWindow.print()}catch(u){e.onError(u)}finally{r.default.isFirefox()&&(o.style.visibility="hidden",o.style.left="-1px"),Object(d.cleanUp)(e)}}function i(o){var e=o.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(e)}function l(o){return new Promise(function(e){var u=function p(){!o||typeof o.naturalWidth=="undefined"||o.naturalWidth===0||!o.complete?setTimeout(p,500):e()};u()})}f.default=a},"./src/js/raw-html.js":function(m,f,n){n.r(f);var r=n("./src/js/print.js");f.default={print:function(a,b){a.printableElement=document.createElement("div"),a.printableElement.setAttribute("style","width:100%"),a.printableElement.innerHTML=a.printable,r.default.send(a,b)}}},"./src/sass/index.scss":function(m,f,n){},0:function(m,f,n){m.exports=n("./src/index.js")}}).default})})(C);var W=C.exports;const O=T(W),R=I({name:"AppLogo",components:{ElButton:A},setup(){const g=x(!1);function j(){O({printable:[{name:"ll",email:"123@gmail.com",phone:"123"},{name:"qq",email:"456@gmail.com",phone:"456"}],properties:["name","email","phone"],type:"json"})}function m(){O({printable:["https://anncwb.github.io/anncwb/images/preview1.png","https://anncwb.github.io/anncwb/images/preview2.png"],type:"image",header:"Multiple Images",imageStyle:"width:100%;",onLoadingStart:function(){g.value=!0},onLoadingEnd:function(){g.value=!1}})}return{jsonPrint:j,imagePrint:m,printLoading:g}}});function H(g,j,m,f,n,r){const d=M("el-button"),a=M("PageWrapper");return D(),B(a,{title:"打印示例"},{default:P(()=>[S(d,{type:"primary",onClick:g.jsonPrint},{default:P(()=>[w("Json Print")]),_:1},8,["onClick"]),S(d,{type:"primary",class:"ml-5",loading:g.printLoading,onClick:g.imagePrint},{default:P(()=>[w("Image Print")]),_:1},8,["loading","onClick"])]),_:1})}const J=U(R,[["render",H]]);export{J as default};
