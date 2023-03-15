!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function r(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?t(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function o(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./index-legacy-db4b469e.js","./index-legacy-f8005efa.js","./index-legacy-4e360dfa.js","./index-legacy-b43e5c5d.js","./col-legacy-e475f9fd.js","./card-legacy-16f6168d.js"],(function(e){"use strict";var t,n,u,a,l,i,c,s,f,d,p,y,m,b,g,v,h,O,j,w,S,E,C,P,T;return{setters:[function(e){t=e._,n=e.d,u=e.E,a=e.z,l=e.s,i=e.gh,c=e.aC,s=e.c,f=e.fY,d=e.ag,p=e.e,y=e.o,m=e.k,b=e.i,g=e.h,v=e.g,h=e.j,O=e.t,j=e.f,w=e.al,S=e.bw},function(e){E=e.E,C=e.a},function(e){P=e.E},function(e){T=e.E},function(e,t){},function(){}],execute:function(){var _=n({components:{ElRow:E,ElCol:C,ElInput:u,ElCard:P,ElButton:a,ElTag:T},setup:function(){var e=l({server:"ws://localhost:3300/test",sendValue:"",recordList:[]}),t=i(e.server,{autoReconnect:!1,heartbeat:!0}),n=t.status,u=t.data,a=t.send,p=t.close,y=t.open;c((function(){if(u.value)try{var t=JSON.parse(u.value);e.recordList.push(t)}catch(r){e.recordList.push({res:u.value,id:Math.ceil(1e3*Math.random()),time:(new Date).getTime()})}}));var m=s((function(){return"OPEN"===n.value})),b=s((function(){return m.value?"success":"danger"})),g=s((function(){return o(e.recordList).reverse()}));return r(r({status:n,formatToDateTime:f},d(e)),{},{handlerSend:function(){a(e.sendValue),e.sendValue=""},getList:g,toggle:function(){m.value?p():y()},getIsOpen:m,getTagColor:b})}}),I={class:"flex items-center"},V=v("span",{class:"mr-4"},"连接状态:",-1),x={class:"min-h-85 overflow-auto"},k={class:"flex items-center"},N=v("span",{class:"mr-2 text-primary"},"收到消息:",-1);e("default",t(_,[["render",function(e,t,r,n,o,u){var a=p("el-tag"),l=p("el-button"),i=p("el-input"),c=p("el-card"),s=p("el-col"),f=p("el-row"),d=p("PageWrapper");return y(),m(d,{title:"WebSocket 示例"},{default:b((function(){return[g(f,{gutter:24,class:"pb-4"},{default:b((function(){return[g(s,{span:8},{default:b((function(){return[g(c,{class:"mb-4"},{header:b((function(){return[v("div",I,[V,g(a,{type:e.getTagColor},{default:b((function(){return[h(O(e.status),1)]})),_:1},8,["type"])])]})),default:b((function(){return[g(i,{modelValue:e.server,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.server=t}),placeholder:"Please input",class:"input-with-select"},{prepend:b((function(){return[h("服务地址")]})),append:b((function(){return[g(l,{type:e.getIsOpen?"danger":"primary",onClick:e.toggle,loading:"CONNECTING"===e.status},{default:b((function(){return[h(O(e.getIsOpen?"关闭连接":"CONNECTING"===e.status?"连接中...":"开启连接"),1)]})),_:1},8,["type","onClick","loading"])]})),_:1},8,["modelValue"])]})),_:1}),g(c,{header:"测试"},{default:b((function(){return[g(i,{maxlength:"30",placeholder:"需要发送到服务器的内容",disabled:!e.getIsOpen,modelValue:e.sendValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.sendValue=t}),"show-word-limit":"",rows:5,type:"textarea"},null,8,["disabled","modelValue"]),g(l,{type:"primary",block:"",class:"mt-4",disabled:!e.getIsOpen,onClick:e.handlerSend},{default:b((function(){return[h("发送")]})),_:1},8,["disabled","onClick"])]})),_:1})]})),_:1}),g(s,{span:16},{default:b((function(){return[g(c,{header:"消息记录"},{default:b((function(){return[v("div",x,[v("ul",null,[(y(!0),j(w,null,S(e.getList,(function(t){return y(),j("li",{class:"mt-2",key:t.time},[v("div",k,[N,v("span",null,O(e.formatToDateTime(t.time)),1)]),v("div",null,O(t.res),1)])})),128))])])]})),_:1})]})),_:1})]})),_:1})]})),_:1})}]]))}}}))}();