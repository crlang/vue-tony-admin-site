import{B as i}from"./TableImg.fea501c2.js";import{u as m}from"./useTable.52f08349.js";import{_ as u}from"./index.ec0491db.js";import{y as c,Z as d,z as l,A as b,R as j}from"./ex-pkg-@vue.dfd8e273.js";import"./BasicForm.a29f9983.js";import"./index.51d433bf.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-element-plus.7627c250.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-vendor.0d33d667.js";import"./ex-pkg-xlsx.9db082f2.js";import"./ex-pkg-mockjs.907334ba.js";import"./ex-pkg-@popperjs.f3a17871.js";import"./index.cb296287.js";import"./index.e1f32d21.js";import"./useAttrs.e78ff19a.js";import"./useWindowSizeFn.732207ab.js";import"./propTypes.525da5ca.js";import"./uuid.2b29000c.js";import"./download.de577928.js";import"./base64Conver.bb012c73.js";import"./index.b234c3eb.js";import"./ex-pkg-@zxcvbn-ts.dfbde445.js";import"./useForm.94072f41.js";import"./index.79d904a0.js";import"./onMountedOrActivated.67461842.js";import"./ex-pkg-@iconify.345c6dc9.js";const f=c({components:{BasicTable:i},setup(){const t=[{label:"\u6210\u5458\u59D3\u540D",prop:"name"},{label:"\u5DE5\u53F7",prop:"no"},{label:"\u6240\u5C5E\u90E8\u95E8",prop:"dept"},{actions:[{text:"\u7F16\u8F91",callback:o},{text:"\u5220\u9664"}]}],s=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],[n,{getDataSource:r}]=m({columns:t,dataSource:s});function o(e){var a;(a=e.onEdit)==null||a.call(e,!0)}function p(e){return[{text:"\u7F16\u8F91",onClick:o.bind(null,e)},{text:"\u5220\u9664"}]}return{registerTable:n,handleEdit:o,createActions:p,getDataSource:r}}});function x(t,s,n,r,o,p){const e=d("BasicTable");return l(),b("div",null,[j(e,{onRegister:t.registerTable},null,8,["onRegister"])])}var W=u(f,[["render",x]]);export{W as default};
