import{r as e}from"../index-044285d2.js";import{_ as t}from"./quill-image-resize-module-c051113e.js";import{ai as l,aq as a,o as i,c as s,_ as r,U as o,K as d,a9 as n,T as m,Y as u,a as c,V as p,Z as g,bl as h,bj as b}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const y=window.lwConfig.services.wecom+"/RedEnvelopes";var f=function(e){var t=0;try{var l=(e=Number(e)).toString().toUpperCase();if(2===l.split("E").length){var a=!1;2===l.split(".").length&&(l=l.split(".")[1],0!==parseInt(l.split("E")[0])&&(a=!0));let e=l.split("E");a&&(t=e[0].length),t-=parseInt(e[1])}else 2===l.split(".").length&&0!==parseInt(l.split(".")[1])&&(t=l.split(".")[1].length)}catch(i){throw i}finally{return(isNaN(t)||t<0)&&(t=0),t}},v=function(e){e=Number(e);var t=f(e),l=e.toString().toUpperCase();return 2===l.split("E").length?Math.round(e*Math.pow(10,t)):Number(l.replace(".",""))},j=function(e,t,l,a){var i=0;switch(e){case"add":i=t+l;break;case"sub":i=t-l;break;case"div":i=t/l;break;case"mul":i=t*l}return Math.abs(a-i)>1?i:a};const C={accAdd(e,t){var l,a,i;e=Number(e),t=Number(t);try{l=f(e)+1}catch(r){l=0}try{a=f(t)+1}catch(r){a=0}i=Math.pow(10,Math.max(l,a));var s=(this.accMul(e,i)+this.accMul(t,i))/i;return j("add",e,t,s)},accSub(e,t){var l,a,i;e=Number(e),t=Number(t);try{l=f(e)+1}catch(r){l=0}try{a=f(t)+1}catch(r){a=0}i=Math.pow(10,Math.max(l,a));var s=Number((this.accMul(e,i)-this.accMul(t,i))/i);return j("sub",e,t,s)},accDiv(e,t){e=Number(e),t=Number(t);var l,a,i=0,s=0;try{i=f(e)}catch(o){}try{s=f(t)}catch(o){}l=v(e),a=v(t);var r=this.accMul(l/a,Math.pow(10,s-i));return j("div",e,t,r)},accMul(e,t){e=Number(e),t=Number(t);var l=0,a=e.toString(),i=t.toString();try{l+=f(a)}catch(r){}try{l+=f(i)}catch(r){}var s=v(a)*v(i)/Math.pow(10,l);return j("mul",e,t,s)}};function V(e,t,l){""!=t?(t=Number(t),Number.isNaN(t)||t<.01||t>1e6||!Number.isInteger(C.accMul(t,100))?l("请输入0.01-1000000的数字，精确到小数点后两位"):l()):l()}function N(e,t,l){""!=t?(t=Number(t),Number.isNaN(t)||t<.01||t>200||!Number.isInteger(C.accMul(t,100))?l("请输入0.01-200.00的数字，精确到小数点后两位"):l()):l()}function _(e,t,l){""!=t&&(Number.isNaN(Number(t))||Number(t)<1||Number(t)>10||t.toString().indexOf(".")>-1)?l("请输入 1-10 的正整数"):l()}const k={name:"list",data:()=>({addDialogVisible:!1,limitDialogVisible:!1,loading:!1,list:[],total:0,query:{pageNum:1,pageSize:10},limitForm:{singleDayPay:"",singleCustomerReceiveNum:1,singleCustomerReceiveMoney:""},limitRules:{singleDayPay:[{required:!0,message:"请输入金额",trigger:"change"},{validator:V,trigger:"change"}],singleCustomerReceiveNum:[{required:!0,message:"请输入次数",trigger:"blur"},{validator:_,trigger:"blur"}],singleCustomerReceiveMoney:[{required:!0,message:"请输入金额",trigger:"change"},{validator:V,trigger:"change"}]},addForm:{sceneType:[],name:"",money:1},addRules:{name:[{required:!0,message:"必填项"}],money:[{required:!0,message:"必填项",trigger:"change"},{validator:N,trigger:"blur"}],sceneType:[{required:!0,message:"必填项",trigger:"change"}]},selectedIds:[],dictStatusType:Object.freeze({0:"启用",1:"停用"}),dictSendSence:{1:"客户",2:"客群",3:"客户与客群"}}),created(){this.getList(),this.$store.setBusininessDesc("\n        <div>用于快捷创建企业红包模板，便于员工通过侧边栏快捷发送红包</div>\n      ")},methods:{getList(){var t;(t=this.query,e({url:y+"/redEnvelopes",params:t})).then((({rows:e,total:t})=>{e.forEach((e=>{e.money=(e.money/100).toFixed(2)})),this.list=e,this.total=+t}))},resetQuery(){this.$refs.queryForm.resetFields(),this.getList(1)},edit(e){this.addForm=Object.assign({},e||{}),this.addDialogVisible=!0,setTimeout((()=>this.$refs.addForm.clearValidate()),0)},addOrUpdate(){this.$refs.addForm.validate((t=>{if(!t)return;let l=Object.assign({},this.addForm);var a;l.money*=100,(a=l,e({url:y+"/addorUpdateRedEnvelopes",method:"post",data:a})).then((e=>{this.msgSuccess("操作成功"),this.getList(),this.addDialogVisible=!1}))}))},handleSelectionChange(e){this.selectedIds=e.map((e=>e.id))},async showLimitConfig(){const{data:t}=await e({url:y+"/findLimitRedEnvelopes"});let{id:l,singleDayPay:a,singleCustomerReceiveNum:i,singleCustomerReceiveMoney:s}=t;a/=100,s/=100,this.limitForm={id:l,singleDayPay:a,singleCustomerReceiveNum:i,singleCustomerReceiveMoney:s},this.limitForm.singleCustomerReceiveNum=this.limitForm.singleCustomerReceiveNum||1,this.limitDialogVisible=!0,this.$nextTick((()=>this.$refs.limitForm.clearValidate()))},setLimit(){this.$refs.limitForm.validate((t=>{if(!t)return;let l=Object.assign({},this.limitForm);var a;l.singleDayPay*=100,l.singleCustomerReceiveMoney*=100,(a=l,e({url:y+"/limitRedEnvelopes",method:"post",data:a})).then((e=>{this.limitDialogVisible=!1,this.msgSuccess("操作成功")}))}))},startOrStop({id:t,status:l}){this.$confirm(`确认${{0:"停用",1:"启用"}[l]}吗?`,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var a;(a={id:t,status:{0:"1",1:"0"}[l]},e({url:y+"/startOrStopRedEnvelope",method:"put",data:a})).then((e=>{this.msgSuccess("操作成功"),this.getList()}))}))},remove(t){this.$confirm("是否确认删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{var l;t=t||this.selectedIds.join(","),(l=t,e({url:y+`/deleteRedEnvelop/${l}`,method:"delete"})).then((e=>{this.msgSuccess("删除成功"),this.getList()}))}))}}},F=e=>(h("data-v-2fa6eaaf"),e=e(),b(),e),w={class:"g-card"},S={class:"mid-action"},x={class:"red-packet-message"},R={class:"red-packet-text"},M={class:"bottom"},q={style:{"align-self":"flex-end"}},D=F((()=>c("div",{class:"sub-des"},"精确到小数点后两位，可输入1~200",-1))),T=F((()=>c("div",{class:"sub-des"},"发送客户群时支持选择拼手气红包或普通金额相同红包",-1))),U={class:"red-packet-message"},L={class:"red-packet-text"},E={class:"dialog-footer"},I=F((()=>c("div",{class:"sub-des"},"精确到小数点后两位，不超过100万元",-1))),O=F((()=>c("div",{class:"sub-des"},"输入 1-10 的正整数",-1))),$=F((()=>c("div",{class:"sub-des"},"精确到小数点后两位，不超过1000元",-1))),P={class:"dialog-footer"};const z=t(k,[["render",function(e,t,h,b,y,f){const v=l("el-option"),j=l("el-select"),C=l("el-form-item"),V=l("el-button"),N=l("el-form"),_=l("el-table-column"),k=l("el-table"),F=l("pagination"),z=l("el-input-number"),B=l("el-radio"),A=l("el-radio-group"),K=l("el-input"),Q=l("el-dialog"),J=a("loading");return i(),s("div",null,[r(N,{inline:"","label-position":"right",model:y.query,"label-width":"",ref:"queryForm",class:"top-search"},{default:o((()=>[r(C,{label:"红包状态",prop:"status"},{default:o((()=>[r(j,{clearable:"",modelValue:y.query.status,"onUpdate:modelValue":t[0]||(t[0]=e=>y.query.status=e),placeholder:"请选择"},{default:o((()=>[(i(!0),s(d,null,n(y.dictStatusType,((e,t)=>(i(),m(v,{key:t,label:e,value:t},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(C,{label:"发送场景",prop:"sceneType"},{default:o((()=>[r(j,{clearable:"",modelValue:y.query.sceneType,"onUpdate:modelValue":t[1]||(t[1]=e=>y.query.sceneType=e),placeholder:"请选择"},{default:o((()=>[(i(!0),s(d,null,n(y.dictSendSence,((e,t)=>(i(),m(v,{key:t,label:e,value:t},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),r(C,{label:""},{default:o((()=>[r(V,{type:"primary",onClick:t[2]||(t[2]=e=>f.getList(1))},{default:o((()=>[u("查询")])),_:1}),r(V,{onClick:f.resetQuery},{default:o((()=>[u("重置")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),c("div",w,[c("div",S,[r(V,{type:"primary",onClick:t[3]||(t[3]=e=>f.edit())},{default:o((()=>[u("新建红包")])),_:1}),r(V,{type:"primary",plain:"",onClick:f.showLimitConfig},{default:o((()=>[u("限额设置")])),_:1},8,["onClick"])]),p((i(),m(k,{data:y.list,onSelectionChange:f.handleSelectionChange},{default:o((()=>[r(_,{type:"selection",width:"55",align:"center"}),r(_,{fixed:"",width:"200",label:"红包",align:"center",prop:"name"},{default:o((({row:e})=>[c("div",x,[c("div",R,g(e.name),1)])])),_:1}),r(_,{label:"红包金额(元)",align:"center",prop:"money"}),r(_,{label:"发送次数",align:"center",prop:"sendTimes"}),r(_,{label:"发送场景",align:"center",prop:"sceneType"},{default:o((({row:e})=>[c("div",null,g(y.dictSendSence[e.sceneType]),1)])),_:1}),r(_,{label:"红包状态",align:"center",prop:"status"},{default:o((({row:e})=>[c("div",null,g(y.dictStatusType[e.status]),1)])),_:1}),r(_,{label:"最近更新时间",align:"center",width:"180",prop:"createTime"}),r(_,{fixed:"right",label:"操作",align:"center",width:"180"},{default:o((({row:e})=>[r(V,{text:"",onClick:t=>f.edit(e)},{default:o((()=>[u("编辑")])),_:2},1032,["onClick"]),r(V,{text:"",onClick:t=>f.startOrStop(e)},{default:o((()=>[u(g({0:"停用",1:"启用"}[e.status]),1)])),_:2},1032,["onClick"]),r(V,{text:"",onClick:t=>f.remove(e.id)},{default:o((()=>[u("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[J,y.loading]]),c("div",M,[c("div",q,[r(V,{type:"primary",disabled:0==y.selectedIds.length,plain:"",onClick:t[4]||(t[4]=e=>f.remove(null))},{default:o((()=>[u("批量删除")])),_:1},8,["disabled"])]),r(F,{total:y.total,page:y.query.pageNum,"onUpdate:page":t[5]||(t[5]=e=>y.query.pageNum=e),limit:y.query.pageSize,"onUpdate:limit":t[6]||(t[6]=e=>y.query.pageSize=e),onPagination:t[7]||(t[7]=e=>f.getList())},null,8,["total","page","limit"])])]),r(Q,{title:"新建红包",modelValue:y.addDialogVisible,"onUpdate:modelValue":t[12]||(t[12]=e=>y.addDialogVisible=e),"close-on-click-modal":!1},{footer:o((()=>[c("span",E,[r(V,{onClick:t[11]||(t[11]=e=>y.addDialogVisible=!1)},{default:o((()=>[u("取 消")])),_:1}),r(V,{type:"primary",onClick:f.addOrUpdate},{default:o((()=>[u("确 定")])),_:1},8,["onClick"])])])),default:o((()=>[r(N,{ref:"addForm",model:y.addForm,rules:y.addRules,"label-position":"right","label-width":"120px"},{default:o((()=>[r(C,{label:"红包金额(元)",prop:"money"},{default:o((()=>[r(z,{placeholder:"请输入",modelValue:y.addForm.money,"onUpdate:modelValue":t[8]||(t[8]=e=>y.addForm.money=e),precision:2,step:.1,max:200,min:1},null,8,["modelValue"]),D])),_:1}),r(C,{label:"发送场景",prop:"sceneType"},{default:o((()=>[r(A,{modelValue:y.addForm.sceneType,"onUpdate:modelValue":t[9]||(t[9]=e=>y.addForm.sceneType=e)},{default:o((()=>[(i(!0),s(d,null,n(y.dictSendSence,((e,t)=>(i(),m(B,{key:t,label:+t},{default:o((()=>[u(g(e),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"]),T])),_:1}),r(C,{label:"红包名称",prop:"name"},{default:o((()=>[r(K,{type:"text",placeholder:"请输入红包名称",modelValue:y.addForm.name,"onUpdate:modelValue":t[10]||(t[10]=e=>y.addForm.name=e),maxlength:"16"},null,8,["modelValue"])])),_:1}),r(C,{label:"预览"},{default:o((()=>[c("div",U,[c("div",L,g(y.addForm.name||"红包名称"),1)])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"]),r(Q,{title:"限额设置",modelValue:y.limitDialogVisible,"onUpdate:modelValue":t[17]||(t[17]=e=>y.limitDialogVisible=e),"close-on-click-modal":!1},{footer:o((()=>[c("span",P,[r(V,{onClick:t[16]||(t[16]=e=>y.limitDialogVisible=!1)},{default:o((()=>[u("取 消")])),_:1}),r(V,{type:"primary",onClick:f.setLimit},{default:o((()=>[u("确 定")])),_:1},8,["onClick"])])])),default:o((()=>[r(N,{ref:"limitForm",model:y.limitForm,rules:y.limitRules,"label-position":"right","label-width":"180px"},{default:o((()=>[r(C,{label:"单日付款总额(元)",prop:"singleDayPay"},{default:o((()=>[r(z,{modelValue:y.limitForm.singleDayPay,"onUpdate:modelValue":t[13]||(t[13]=e=>y.limitForm.singleDayPay=e),placeholder:"请输入",precision:2,step:.1,min:0,max:1e6},null,8,["modelValue"]),I])),_:1}),r(C,{label:"单日每客户收红包次数",prop:"singleCustomerReceiveNum"},{default:o((()=>[r(K,{modelValue:y.limitForm.singleCustomerReceiveNum,"onUpdate:modelValue":t[14]||(t[14]=e=>y.limitForm.singleCustomerReceiveNum=e),placeholder:"请输入次数"},null,8,["modelValue"]),O])),_:1}),r(C,{label:"单日每客户收红包总额",prop:"singleCustomerReceiveMoney"},{default:o((()=>[r(z,{modelValue:y.limitForm.singleCustomerReceiveMoney,"onUpdate:modelValue":t[15]||(t[15]=e=>y.limitForm.singleCustomerReceiveMoney=e),precision:2,step:.1,min:0,max:1e3},null,8,["modelValue"]),$])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-2fa6eaaf"]]);export{z as default};