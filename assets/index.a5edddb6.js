var w=(c,m,o)=>new Promise((t,u)=>{var f=r=>{try{i(o.next(r))}catch(n){u(n)}},d=r=>{try{i(o.throw(r))}catch(n){u(n)}},i=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,d);i((o=o.apply(c,m)).next())});import{x as C,M as x,O as L,X as v,g as k,z as b,A as g,a8 as A,ao as B,B as D,C as S,a0 as a,a3 as s,u as e,aI as j,ab as _,F as E,c2 as F}from"./vendor.041d4bc7.js";import{ar as I,e as R,a_ as V,f as z}from"./index.c38c7de5.js";import{getColumns as M}from"./data.0ffc99f4.js";import{T as N,B as O}from"./TableImg.390c3a43.js";import{u as H}from"./useTable.b18130de.js";import"./BasicForm.5b4e187b.js";import"./index.8a676b72.js";import"./index.a0c3ab5a.js";import"./index.724f1992.js";import"./useAttrs.374c949f.js";import"./useWindowSizeFn.b4a2eb84.js";import"./uuid.2b29000c.js";import"./download.0159c5b0.js";import"./base64Conver.bb012c73.js";import"./index.eae7ea3e.js";import"./useForm.d6410a30.js";import"./clickOutside.2de8acc0.js";var y;(function(c){c.Error="/error"})(y||(y={}));const W=()=>I.get({url:y.Error}),X={class:"p-4"},$=["src"],ue=C({setup(c){const m=x(),o=x([]),{t}=R(),u=V(),[f,{setTableData:d}]=H({title:t("sys.errorLog.tableTitle"),columns:M(),actionColumn:{width:80,label:"Action",prop:"action",isSlot:!0}});L(()=>u.getErrorLogInfoList,p=>{v(()=>{d(k(p))})},{immediate:!0}),z();function i(p){m.value=p}function r(){throw new Error("fire vue error!")}function n(){o.value.push(`${new Date().getTime()}.png`)}function h(){return w(this,null,function*(){yield W()})}return(p,q)=>(b(),g("div",X,[(b(!0),g(A,null,B(o.value,l=>D((b(),g("img",{key:l,src:l},null,8,$)),[[S,!1]])),128)),a(e(O),{onRegister:e(f),class:"error-handle-table"},{toolbar:s(()=>[a(e(j),{onClick:r,type:"primary"},{default:s(()=>[_(E(e(t)("sys.errorLog.fireVueError")),1)]),_:1}),a(e(j),{onClick:n,type:"primary"},{default:s(()=>[_(E(e(t)("sys.errorLog.fireResourceError")),1)]),_:1}),a(e(j),{onClick:h,type:"primary"},{default:s(()=>[_(E(e(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),action:s(l=>[a(e(F),{label:l.label,prop:l.prop,align:"center"},{default:s(T=>[a(e(N),{actions:[{label:e(t)("sys.errorLog.tableActionDesc"),onClick:i.bind(null,T.row)}]},null,8,["actions"])]),_:2},1032,["label","prop"])]),_:1},8,["onRegister"])]))}});export{ue as default};
