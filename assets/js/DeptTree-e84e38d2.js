var d=(a,r,e)=>new Promise((s,n)=>{var c=t=>{try{o(e.next(t))}catch(l){n(l)}},p=t=>{try{o(e.throw(t))}catch(l){n(l)}},o=t=>t.done?s(t.value):Promise.resolve(t.value).then(c,p);o((e=e.apply(a,r)).next())});import{a as u}from"./system-1459a592.js";import{_ as f}from"./index-26bedde3.js";import{W as i,ao as _}from"./ex-pkg-element-plus-f609432a.js";import{y as h,a as x,q as C,Z as m,z as g,G as j,H as k,R as b}from"./ex-pkg-@vue-feb543c0.js";import"./ex-pkg-vendor-bb3f8859.js";import"./ex-pkg-mockjs-ec7a233b.js";const v=h({name:"DeptTree",components:{ElCard:i,ElTree:_},emits:["select"],setup(a,{emit:r}){const e=x([]);function s(){return d(this,null,function*(){e.value=yield u()})}function n(c){r("select",c)}return C(()=>{s()}),{treeData:e,handleSelect:n}}});function D(a,r,e,s,n,c){const p=m("el-tree"),o=m("el-card");return g(),j(o,{header:"\u90E8\u95E8\u5217\u8868",shadow:"never"},{default:k(()=>[b(p,{data:a.treeData,"default-expand-all":"",props:{children:"children",label:"deptName"},onCurrentChange:a.handleSelect},null,8,["data","onCurrentChange"])]),_:1})}var S=f(v,[["render",D]]);export{S as default};
