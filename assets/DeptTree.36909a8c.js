var p=(a,r,e)=>new Promise((s,n)=>{var c=t=>{try{o(e.next(t))}catch(d){n(d)}},l=t=>{try{o(e.throw(t))}catch(d){n(d)}},o=t=>t.done?s(t.value):Promise.resolve(t.value).then(c,l);o((e=e.apply(a,r)).next())});import{a as f}from"./system.4141d536.js";import{_ as i}from"./index.dea57c76.js";import{x as m,bq as _,ce as h,M as C,V as v,X as u,z as D,Y as $,a2 as g,$ as x}from"./vendor.6c1ff918.js";const E=m({name:"DeptTree",components:{ElCard:_,ElTree:h},emits:["select"],setup(a,{emit:r}){const e=C([]);function s(){return p(this,null,function*(){e.value=yield f(),console.log("treeData",e.value)})}function n(c){r("select",c)}return v(()=>{s()}),{treeData:e,handleSelect:n}}});function j(a,r,e,s,n,c){const l=u("el-tree"),o=u("el-card");return D(),$(o,{header:"\u90E8\u95E8\u5217\u8868",class:"h-full",shadow:"never"},{default:g(()=>[x(l,{data:a.treeData,props:{children:"children",label:"deptName"},onCurrentChange:a.handleSelect},null,8,["data","onCurrentChange"])]),_:1})}var y=i(E,[["render",j]]);export{y as default};
