import{f as e,h as a,i as l,j as t,k as r}from"./commodityManage-9fcb714b.js";import{d as o}from"../index-044285d2.js";import{ai as i,aq as s,o as d,c as n,_ as p,U as u,Y as m,a as c,V as g,T as f,Z as b,Q as y,X as h,$ as S,K as v,a9 as _}from"./@vue-e400fd81.js";import{_ as j}from"./quill-image-resize-module-c051113e.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const x={class:"g-card"},V={class:"mid-action"},k={style:{display:"flex"}},q={class:"limit_span"},N={class:"cp flex aic"},U={class:"ml10"},w={key:0,class:"ml10",style:{"align-self":"baseline"}},C={style:{display:"inline"}},T=["onClick"],L={key:1},F=["onClick"],Y={key:1},z={class:"dialog-footer ar"},A={style:{"background-color":"var(--bg-black-11)",padding:"20px"}},I={class:"dialog-footer ar"};const D=j({components:{},props:{},data:()=>({query:{pageNum:1,pageSize:10,productName:"",externalName:"",weUserId:"",orderState:"",refundState:"",beginTime:"",endTime:""},loading:!1,dialogVisible:!1,total:0,list:[],lastSyncTime:0,qrUserName:void 0,userArray:[],userArrayStr:"",dialogVisibleSelect:!1,dateRange:[],dialogStateVisible:!1,dialogVisible:!1,orderState:{payTime:"",orderNo:"",mchNo:""},refundStateList:[]}),computed:{},created(){this.$store.setBusininessDesc("\n\t\t\t     <div>查看商品所有订单及明细记录。</div>\n\t\t\t   "),this.getList()},methods:{handleCopy(e){const a=document.createElement("input");a.style.cssText="opacity: 0;",a.type="text",a.value=e,document.body.appendChild(a),a.select(),document.execCommand("copy"),this.$message({message:"复制成功",type:"success"})},tradingStateFn(a){e(a).then((e=>{this.orderState=e.data,this.dialogVisible=!0}))},refundStateFn(e){a(e).then((e=>{this.refundStateList=e.data,this.dialogStateVisible=!0}))},resetForm(){this.query={pageNum:1,pageSize:10,productName:"",externalName:"",weUserId:"",orderState:"",refundState:"",beginTime:"",endTime:""},this.getList()},getList(e){e&&(this.query.pageNum=e),this.loading=!0,l(this.query).then((({rows:e,total:a,lastSyncTime:l})=>{this.list=e,this.total=+a,this.lastSyncTime=l,this.loading=!1})).catch((()=>{this.loading=!1}))},exportFn(){const e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});t({productName:this.query.productName,externalName:this.query.externalName,weUserId:this.query.weUserId,orderState:this.query.orderState,refundState:this.query.refundState,beginTime:this.query.beginTime,endTime:this.query.endTime}).then((a=>{if(!a)return;const l=new Blob([a],{type:"application/vnd.ms-excel"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(l,"订单");else{const e=URL.createObjectURL(l),a=document.createElement("a");a.style.display="none",a.href=e,a.download=o(new Date,"YYYY-MM-DD")+"_订单.xlsx",a.click(),URL.revokeObjectURL(a.href)}e.close()})).catch((()=>{e.close()}))},sync(){const e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});r().then((()=>{e.close(),this.msgSuccess("后台开始同步数据，请稍后关注进度"),this.getList()})).catch((()=>{e.close()}))},getSelectUser(e){this.userArray=e,this.qrUserName=this.userArray.map((function(e,a){return e.name})).join(","),this.query.weUserId=this.userArray.map((function(e,a){return e.userId})).join(",")},setChange(e){e?(this.query.beginTime=e[0],this.query.endTime=e[1]):(this.query.beginTime="",this.query.endTime="")}}},[["render",function(e,a,l,t,r,o){const j=i("el-input"),D=i("el-form-item"),R=i("el-option"),M=i("el-select"),B=i("el-date-picker"),O=i("el-button"),$=i("el-form"),E=i("el-image"),K=i("el-table-column"),W=i("el-icon-WarningFilled"),J=i("el-popover"),P=i("el-table"),Q=i("pagination"),X=i("el-dialog"),Z=i("SelectUser"),G=s("loading");return d(),n("div",null,[p($,{inline:!0,"label-width":"110px",class:"top-search"},{default:u((()=>[p(D,{label:"商品名称或描述",prop:"productName"},{default:u((()=>[p(j,{clearable:"",modelValue:r.query.productName,"onUpdate:modelValue":a[0]||(a[0]=e=>r.query.productName=e),placeholder:"请输入商品名称或描述"},null,8,["modelValue"])])),_:1}),p(D,{label:"客户名称",prop:"externalName"},{default:u((()=>[p(j,{clearable:"",modelValue:r.query.externalName,"onUpdate:modelValue":a[1]||(a[1]=e=>r.query.externalName=e),placeholder:"请输入客户名称"},null,8,["modelValue"])])),_:1}),p(D,{label:"收款员工",prop:"name"},{default:u((()=>[p(j,{clearable:"","model-value":r.qrUserName,readonly:"",onClick:a[2]||(a[2]=e=>r.dialogVisibleSelect=!0),placeholder:"请选择员工"},null,8,["model-value"])])),_:1}),p(D,{label:"交易状态",prop:"name"},{default:u((()=>[p(M,{modelValue:r.query.orderState,"onUpdate:modelValue":a[3]||(a[3]=e=>r.query.orderState=e),"popper-append-to-body":!1},{default:u((()=>[p(R,{label:"全部交易状态",value:""}),p(R,{label:"已完成",value:1}),p(R,{label:"已完成有退款",value:2})])),_:1},8,["modelValue"])])),_:1}),p(D,{label:"退款状态",prop:"name"},{default:u((()=>[p(M,{modelValue:r.query.refundState,"onUpdate:modelValue":a[4]||(a[4]=e=>r.query.refundState=e),"popper-append-to-body":!1},{default:u((()=>[p(R,{label:"全部退款状态",value:""}),p(R,{label:"已申请退款",value:"0"}),p(R,{label:"退款处理中",value:"1"}),p(R,{label:"退款成功",value:"2"}),p(R,{label:"退款关闭",value:"3"}),p(R,{label:"退款异常",value:"4"}),p(R,{label:"审批中",value:"5"}),p(R,{label:"审批失败",value:"6"}),p(R,{label:"审批取消",value:"7"})])),_:1},8,["modelValue"])])),_:1}),p(D,{label:"交易时间",prop:"name"},{default:u((()=>[p(B,{clearable:"",modelValue:r.dateRange,"onUpdate:modelValue":a[5]||(a[5]=e=>r.dateRange=e),type:"daterange","value-format":"YYYY-MM-DD",onChange:o.setChange,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},null,8,["modelValue","onChange"])])),_:1}),p(D,{label:""},{default:u((()=>[p(O,{type:"primary",onClick:a[6]||(a[6]=e=>o.getList(1))},{default:u((()=>[m("查询")])),_:1}),p(O,{onClick:a[7]||(a[7]=e=>o.resetForm())},{default:u((()=>[m("重置")])),_:1})])),_:1})])),_:1}),c("div",x,[c("div",V,[p(O,{type:"primary",class:"mr10",onClick:a[8]||(a[8]=e=>o.sync())},{default:u((()=>[m("同步订单")])),_:1}),p(O,{type:"danger",onClick:a[9]||(a[9]=e=>o.exportFn())},{default:u((()=>[m("导出Excel")])),_:1})]),g((d(),f(P,{data:r.list},{default:u((()=>[p(K,{label:"商品",align:"center",prop:"",width:"200"},{default:u((({row:e})=>[c("div",k,[p(E,{style:{width:"50px",height:"50px","margin-right":"3px","flex-shrink":"0"},src:e.picture},null,8,["src"]),c("span",q,b(e.describe),1)])])),_:1}),p(K,{label:"客户",align:"center",prop:"price"},{default:u((({row:e})=>[c("div",N,[p(E,{style:{width:"50px",height:"50px",flex:"none"},src:e.externalAvatar,fit:"fill"},null,8,["src"]),c("div",U,[c("p",null,b(e.externalName),1),c("span",{style:y({color:1===e.externalType?"#4bde03":"#f9a90b"})},b({1:"@微信",2:"@企业微信"}[e.externalType]),5)]),e.address&&e.phone?(d(),n("div",w,[p(J,{trigger:"hover",width:"400"},{reference:u((()=>[c("div",C,[p(W,{class:"el-icon-WarningFilled"})])])),default:u((()=>[p($,{ref:"form"},{default:u((()=>[p(D,{label:"联系人："},{default:u((()=>[m(b(e.contact),1)])),_:2},1024),p(D,{label:"联系地址："},{default:u((()=>[m(b(e.address),1)])),_:2},1024),p(D,{label:"联系电话："},{default:u((()=>[m(b(e.phone),1)])),_:2},1024)])),_:2},1536)])),_:2},1024)])):h("",!0)])])),_:1}),p(K,{label:"购买数量",align:"center",prop:"productNum"}),p(K,{label:"付款金额(元)",align:"center",prop:"totalFee"}),p(K,{label:"收款员工",align:"center",prop:"weUserName"}),p(K,{label:"收款商户",align:"center",prop:"mchName"}),p(K,{label:"交易状态",align:"center",prop:"orderStateStr"},{default:u((({row:e})=>[e.orderStateStr?(d(),n("a",{key:0,style:{color:"var(--color)","border-bottom":"1px solid var(--color)"},onClick:a=>o.tradingStateFn(e.orderNo)},b(e.orderStateStr),9,T)):(d(),n("span",L,"-"))])),_:1}),p(K,{label:"退款状态",align:"center",prop:"refundStateStr"},{default:u((({row:e})=>[e.refundStateStr?(d(),n("a",{key:0,style:{color:"var(--color)","border-bottom":"1px solid var(--color)"},onClick:a=>o.refundStateFn(e.orderNo)},b(e.refundStateStr),9,F)):(d(),n("span",Y,"-"))])),_:1})])),_:1},8,["data"])),[[G,r.loading]]),g(p(Q,{total:r.total,page:r.query.pageNum,"onUpdate:page":a[10]||(a[10]=e=>r.query.pageNum=e),limit:r.query.pageSize,"onUpdate:limit":a[11]||(a[11]=e=>r.query.pageSize=e),onPagination:a[12]||(a[12]=e=>o.getList())},null,8,["total","page","limit"]),[[S,r.total>0]])]),p(X,{title:"交易状态",modelValue:r.dialogVisible,"onUpdate:modelValue":a[16]||(a[16]=e=>r.dialogVisible=e),width:"800px","close-on-click-modal":!1},{footer:u((()=>[c("div",z,[p(O,{onClick:a[15]||(a[15]=e=>r.dialogVisible=!1)},{default:u((()=>[m("关 闭")])),_:1})])])),default:u((()=>[p($,{ref:"form","label-width":"100px"},{default:u((()=>[p(D,{label:"交易时间："},{default:u((()=>[m(b(r.orderState.payTime),1)])),_:1}),p(D,{label:"交易单号："},{default:u((()=>[m(b(r.orderState.orderNo)+" ",1),p(O,{type:"primary",style:{"margin-left":"20px"},plain:"",onClick:a[13]||(a[13]=e=>o.handleCopy(r.orderState.orderNo))},{default:u((()=>[m(" 复制 ")])),_:1})])),_:1}),p(D,{label:"商户单号："},{default:u((()=>[m(b(r.orderState.mchNo)+" ",1),p(O,{style:{"margin-left":"20px"},type:"primary",plain:"",onClick:a[14]||(a[14]=e=>o.handleCopy(r.orderState.mchNo))},{default:u((()=>[m(" 复制 ")])),_:1})])),_:1})])),_:1},512)])),_:1},8,["modelValue"]),p(X,{title:"退款状态",modelValue:r.dialogStateVisible,"onUpdate:modelValue":a[18]||(a[18]=e=>r.dialogStateVisible=e),width:"800px","close-on-click-modal":!1},{footer:u((()=>[c("div",I,[p(O,{onClick:a[17]||(a[17]=e=>r.dialogStateVisible=!1)},{default:u((()=>[m("关 闭")])),_:1})])])),default:u((()=>[c("div",A,[(d(!0),n(v,null,_(r.refundStateList,((e,a)=>(d(),n("div",{class:"g-card",key:a},[p($,{ref_for:!0,ref:"form"},{default:u((()=>[p(D,{label:"退款发起时间："},{default:u((()=>[m(b(e.refundTime),1)])),_:2},1024),p(D,{label:"退款发起人："},{default:u((()=>[m(b(e.refundUserName),1)])),_:2},1024),p(D,{label:"退款备注："},{default:u((()=>[m(b(e.remark),1)])),_:2},1024),p(D,{label:"退款金额（元）："},{default:u((()=>[m(b(e.refundFee),1)])),_:2},1024),p(D,{label:"退款单号："},{default:u((()=>[m(b(e.refundNo)+" ",1),p(O,{style:{"margin-left":"20px"},type:"primary",plain:"",onClick:a=>o.handleCopy(e.refundNo)},{default:u((()=>[m(" 复制 ")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1536)])))),128))])])),_:1},8,["modelValue"]),p(Z,{visible:r.dialogVisibleSelect,"onUpdate:visible":a[19]||(a[19]=e=>r.dialogVisibleSelect=e),title:"组织架构",defaultValues:r.userArray,onSuccess:o.getSelectUser},null,8,["visible","defaultValues","onSuccess"])])}],["__scopeId","data-v-1ed88f57"]]);export{D as default};
