var d=(a,n,e)=>new Promise((s,o)=>{var p=t=>{try{r(e.next(t))}catch(l){o(l)}},c=t=>{try{r(e.throw(t))}catch(l){o(l)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(p,c);r((e=e.apply(a,n)).next())});import{a as i}from"./system.bee4670e.js";import{_ as u}from"./index.16f9732e.js";import{X as f,ao as _}from"./ex-pkg-element-plus.e1a09009.js";import{y as g,a as j,q as x,Z as m,z as h,G as k,H as v,R as C}from"./ex-pkg-@vue.dfd8e273.js";import"./ex-pkg-vendor.ab2d902e.js";import"./ex-pkg-mockjs.0bec78f1.js";import"./ex-pkg-@element-plus.e8ce6c8b.js";import"./ex-pkg-@vueuse.e5d644bd.js";import"./ex-pkg-@iconify.345c6dc9.js";import"./ex-pkg-@popperjs.f3a17871.js";const b=g({name:"DeptTree",components:{ElCard:f,ElTree:_},emits:["select"],setup(a,{emit:n}){const e=j([]);function s(){return d(this,null,function*(){e.value=yield i(),console.log("treeData",e.value)})}function o(p){n("select",p)}return x(()=>{s()}),{treeData:e,handleSelect:o}}});function D(a,n,e,s,o,p){const c=m("el-tree"),r=m("el-card");return h(),k(r,{header:"\u90E8\u95E8\u5217\u8868",shadow:"never"},{default:v(()=>[C(c,{data:a.treeData,"default-expand-all":"",props:{children:"children",label:"deptName"},onCurrentChange:a.handleSelect},null,8,["data","onCurrentChange"])]),_:1})}var H=u(b,[["render",D]]);export{H as default};
