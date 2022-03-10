import{B as A}from"./TableImg.f1872a7a.js";import{u as B}from"./useTable.9ede0ccb.js";import{g as D}from"./system.07d41a1c.js";import{P as E}from"./index.7b145182.js";import M from"./DeptTree.671ce510.js";import{A as C,s as y}from"./AccountModal.12cd06d7.js";import{_ as k,k as v,f as R}from"./index.b7d256c2.js";import{b as I}from"./index.ff9a9226.js";import{x as W,aR as $,aS as P,aJ as V,M as w,I as z,cw as G,bD as H,bG as N,X as t,z as O,Y as J,a2 as s,$ as a,aa as K}from"./vendor.1ced56aa.js";import"./BasicForm.3025383c.js";import"./index.d43b6350.js";import"./index.deee9844.js";import"./propTypes.13e00d90.js";import"./uuid.2b29000c.js";import"./download.00691155.js";import"./base64Conver.bb012c73.js";import"./index.9b0d1666.js";import"./useForm.c868803e.js";import"./useWindowSizeFn.2e4c2b5e.js";import"./onMountedOrActivated.f6bae218.js";import"./useAttrs.58303cdd.js";const L=W({name:"AccountManagement",components:{ElRow:$,ElCol:P,ElButton:V,BasicTable:A,PageWrapper:E,DeptTree:M,AccountModal:C},setup(){const o=v(),{createConfirm:m,createMessage:f}=R(),[b,{openModal:_}]=I(),h=[{label:"\u7528\u6237\u540D",prop:"account",width:120},{label:"\u6635\u79F0",prop:"nickname",width:120},{label:"\u90AE\u7BB1",prop:"email",width:120},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",width:180},{label:"\u89D2\u8272",prop:"role",width:200},{label:"\u5907\u6CE8",prop:"remark"},{width:220,fixed:"right",actions:[{icon:"clarity:info-standard-line",text:"\u67E5\u770B",callback:F},{icon:"clarity:note-edit-line",text:"\u7F16\u8F91",callback:g},{icon:"ep:delete",text:"\u5220\u9664",callback:j}]}],c=w(!1),r=w();function u(){_(!0,{isUpdate:!1})}const l=z({}),[d,{reload:i,updateTableDataRecord:p}]=B({title:"\u8D26\u53F7\u5217\u8868",api:D,rowKey:"id",columns:h,formConfig:{labelWidth:120,schemas:y,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,border:!0,pagination:{pageSize:5},handleSearchInfoFn(e){return console.log("handleSearchInfoFn",e),e}});function g(e){console.log(e),c.value=!0}function j(e){console.log(e),m({title:"\u6E29\u99A8\u63D0\u793A",content:"\u662F\u5426\u786E\u8BA4\u5220\u9664?",type:"error"}).then(n=>{console.log("",n),f.success("\u5220\u9664\u6210\u529F")}).catch(n=>{console.log(" err",n)})}function S({isUpdate:e,values:n}){if(e){const x=p(n.id,n);console.log(x)}else i()}function T(e){l.deptId=e==null?void 0:e.id,i()}function F(e){o("/system/account_detail/"+e.id)}return{modalVisible:c,searchInfo:l,registerTable:d,registerModal:b,demodata:r,Document:G,Edit:H,Delete:N,handleCreate:u,handleEdit:g,handleDelete:j,handleSuccess:S,handleSelect:T,handleView:F}}}),U=K("\u65B0\u589E\u8D26\u53F7");function X(o,m,f,b,_,h){const c=t("DeptTree"),r=t("el-col"),u=t("el-button"),l=t("BasicTable"),d=t("el-row"),i=t("AccountModal"),p=t("PageWrapper");return O(),J(p,{contentFullHeight:"",fixedHeight:""},{default:s(()=>[a(d,{class:"dept-wrap",gutter:16},{default:s(()=>[a(r,{span:6,class:"dept-tree"},{default:s(()=>[a(c,{onSelect:o.handleSelect},null,8,["onSelect"])]),_:1}),a(r,{span:18,class:"dept-table"},{default:s(()=>[a(l,{onRegister:o.registerTable,searchInfo:o.searchInfo},{toolbar:s(()=>[a(u,{type:"primary",onClick:o.handleCreate},{default:s(()=>[U]),_:1},8,["onClick"])]),_:1},8,["onRegister","searchInfo"])]),_:1})]),_:1}),a(i,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var he=k(L,[["render",X],["__scopeId","data-v-614e21ac"]]);export{he as default};
