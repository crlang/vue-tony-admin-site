System.register(["./index-legacy-47228263.js","./data-legacy-57860eb2.js","./table-legacy-508e964d.js","./index-legacy-db4b469e.js","./index-legacy-899b870b.js","./index-legacy-ae6f1944.js","./index-legacy-cc3dabb0.js","./index-legacy-cc451a16.js","./index-legacy-8ca62a35.js","./index-legacy-f6f61119.js","./index-legacy-b43e5c5d.js","./strings-legacy-e281ffd0.js","./isEqual-legacy-514a4f4d.js","./_baseIsEqual-legacy-2c6e4922.js","./drawer-legacy-60685b30.js","./form-item-legacy-6c7d6708.js","./col-legacy-e475f9fd.js","./card-legacy-16f6168d.js","./dropdown-legacy-765f5420.js","./description-legacy-8fef8d70.js","./index-legacy-f70b3302.js","./tsxHelper-legacy-72a536d4.js","./useWindowSizeFn-legacy-34b222f8.js","./index-legacy-dead0cb0.js","./index-legacy-15a893ab.js","./index-legacy-5cf1a1e0.js","./refs-legacy-fffec019.js","./use-dialog-legacy-4b9ca7db.js","./index-legacy-c8652c18.js","./index-legacy-1aa46f9a.js","./index-legacy-be605948.js","./index-legacy-7aa1523d.js","./index-legacy-5d963335.js","./index-legacy-bc3e0a10.js","./index-legacy-f8005efa.js","./index-legacy-d8a015cc.js","./domUtils-legacy-96b01ffd.js","./index-legacy-743f041d.js","./useForm-legacy-f503d86b.js"],(function(e){"use strict";var n,c,t,i,o,l,a,u,f,r,d,s,g,y,b,j;return{setters:[function(e){n=e.E,c=e.B},function(e){t=e.g},function(e){i=e.d},function(e){o=e._,l=e.d,a=e.z,u=e.r,f=e.e,r=e.o,d=e.k,s=e.i,g=e.h,y=e.j,b=e.t,j=e.b},function(e,n){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var p=l({components:{ElButton:a,ElTableColumn:n,BasicTable:c},setup:function(){var e=u(!1),n=u(!0),c=u(!0),o=u(null);return{tableRef:o,columns:t(),loading:e,stripe:n,border:c,toggleSelection:function(){(function(){var e=j(o);if(!e)throw new Error("tableAction is null");return e})().toggleAllSelection()},toggleStripe:function(){n.value=!n.value},toggleLoading:function(){e.value=!0,setTimeout((function(){e.value=!1}),3e3)},toggleBorder:function(){c.value=!c.value},demoListApi:i}}});e("default",o(p,[["render",function(e,n,c,t,i,o){var l=f("el-table-column"),a=f("el-button"),u=f("BasicTable"),j=f("PageWrapper");return r(),d(j,null,{default:s((function(){return[g(u,{ref:"tableRef",title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,loading:e.loading,stripe:e.stripe,api:e.demoListApi,showIndexColumn:"",showCheckboxColumn:"",border:e.border},{address:s((function(e){var n=e.label,c=e.prop;return[g(l,{label:n,prop:c},{default:s((function(e){return[y(b(e.row.address),1)]})),_:2},1032,["label","prop"])]})),toolbar:s((function(){return[g(a,{type:"primary",onClick:e.toggleSelection},{default:s((function(){return[y("切换选中")]})),_:1},8,["onClick"]),g(a,{type:"primary",onClick:e.toggleBorder},{default:s((function(){return[y(b(e.border?"隐藏边框":"显示边框"),1)]})),_:1},8,["onClick"]),g(a,{type:"primary",onClick:e.toggleLoading},{default:s((function(){return[y("开启loading")]})),_:1},8,["onClick"]),g(a,{type:"primary",onClick:e.toggleStripe},{default:s((function(){return[y(b(e.stripe?"隐藏斑马纹":"显示斑马纹"),1)]})),_:1},8,["onClick"])]})),_:1},8,["columns","loading","stripe","api","border"])]})),_:1})}]]))}}}));