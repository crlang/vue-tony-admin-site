const e=[{field:"account",component:"ElSelect",label:"付款账户",required:!0,defaultValue:"1",componentProps:{options:[{label:"anncwb@126.com",value:"1"}]}},{field:"fac",component:"ElInput",label:"收款账户",required:!0,defaultValue:"test@example.com",slot:"fac"},{field:"pay",component:"ElInput",label:"",defaultValue:"zfb",show:!1},{field:"payeeName",component:"ElInput",label:"收款人姓名",defaultValue:"Tony",required:!0},{field:"money",component:"ElInput",label:"转账金额",defaultValue:"500",required:!0,renderComponentContent:()=>({append:()=>"￥"})}],l=[{field:"pwd",component:"ElInput",label:"支付密码",required:!0,defaultValue:"123456",componentProps:{showPassword:!0}}];export{e as step1Schemas,l as step2Schemas};
