!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.65fa1ffc.js","./index-legacy.89eaccdd.js"],(function(t){"use strict";var n,o,i,l,c,u,a,f,p,s,m,d,y,b;return{setters:[function(e){n=e.C,o=e.I,i=e.r,l=e.M,c=e.D,u=e.Y,a=e.b,f=e.al,p=e.N,s=e.O,m=e.cn,d=e.a3},function(e){y=e.u,b=e.b}],execute:function(){var O=n({inheritAttrs:!1},[["render",function(e,t,n,r,i,l){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var g=n({name:"ElCollectionItem",inheritAttrs:!1},[["render",function(e,t,n,r,i,l){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]),v=t("b","data-el-collection-item"),E=t("c",(function(t){var n="El".concat(t,"Collection"),o="".concat(n,"Item"),p=Symbol(n),s=Symbol(o),m=r(r({},O),{},{name:n,setup:function(){var t=i(null),n=new Map;l(p,{itemMap:n,getItems:function(){var r=a(t);if(!r)return[];var o=Array.from(r.querySelectorAll("[".concat(v,"]")));return e(n.values()).sort((function(e,t){return o.indexOf(e.ref)-o.indexOf(t.ref)}))},collectionRef:t})}}),d=r(r({},g),{},{name:o,setup:function(e,t){var n=t.attrs,o=i(null),m=c(p,void 0);l(s,{collectionItemRef:o}),u((function(){var e=a(o);e&&m.itemMap.set(e,r({ref:e},n))})),f((function(){var e=a(o);m.itemMap.delete(e)}))}});return{COLLECTION_INJECTION_KEY:p,COLLECTION_ITEM_INJECTION_KEY:s,ElCollection:m,ElCollectionItem:d}})),I=(t("d",p({trigger:y.trigger,effect:r(r({},b.effect),{},{default:"light"}),type:{type:s(String)},placement:{type:s(String),default:"bottom"},popperOptions:{type:s(Object),default:function(){return{}}},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:s([Number,String]),default:0},maxHeight:{type:s([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:s(Object)}})),t("a",p({command:{type:[Object,String,Number],default:function(){return{}}},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:m}})),t("f",p({onKeydown:{type:s(Function)}})),[d.down,d.pageDown,d.home]),C=t("L",[d.up,d.pageUp,d.end]),S=(t("F",[].concat(I,e(C))),E("Dropdown")),j=S.ElCollection,h=S.ElCollectionItem,w=S.COLLECTION_INJECTION_KEY,N=S.COLLECTION_ITEM_INJECTION_KEY;t({E:j,e:h,g:w,C:N})}}}))}();