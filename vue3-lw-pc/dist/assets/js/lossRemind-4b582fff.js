import{G as e,a0 as t,a1 as a}from"../index-044285d2.js";import{ai as i,aq as l,o as s,c as r,_ as o,U as n,a as d,K as u,a9 as p,T as m,Y as c,Z as g,R as h,V as y,$ as f}from"./@vue-e400fd81.js";import{_ as b}from"./quill-image-resize-module-c051113e.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const j={key:0,class:"tag-place"},q={key:0,class:"tag-place"},v={class:"g-card"},U={class:"mid-action"};const T=b({name:"LossRemind",components:{},props:{},data:()=>({query:{pageNum:1,pageSize:10,name:"",userIds:"",tagIds:"",beginTime:"",endTime:"",trackState:5},queryTag:[],queryUser:[],dateRange:[],loading:!1,isMoreFilter:!1,total:0,form:{gourpName:"",weTags:[]},list:[],multipleSelection:[],dialogVisible:!1,dialogVisibleSelectUser:!1,isNotice:"0"}),watch:{},computed:{},created(){this.getList(),this.getLossRemindStatus(),this.$store.setBusininessDesc("\n        <div>当企业成员被客户删除时，会在流失列表中产生一条记录，开启删除通知后，被删除的成员会收到一条推送</div>\n      ")},mounted(){},methods:{getList(t){var a,i;this.dateRange?(this.query.beginTime=this.dateRange[0],this.query.endTime=this.dateRange[1]):(this.query.beginTime="",this.query.endTime=""),this.query.userIds=null==(a=this.queryUser.map((e=>e.userId)))?void 0:a.join(","),this.query.tagIds=null==(i=this.queryTag.map((e=>e.tagId)))?void 0:i.join(","),t&&(this.query.pageNum=t),this.loading=!0,e(this.query).then((({rows:e,total:t})=>{this.list=e,this.total=+t,this.loading=!1,this.multipleSelection=[]})).catch((()=>{this.loading=!1}))},getLossRemindStatus(){t().then((({data:e})=>{this.isNotice=e}))},resetForm(){this.dateRange=[],this.queryTag=[],this.queryUser=[],this.$refs.queryForm.resetFields(),this.getList(1)},remindSwitch(e){a(e).then((()=>{this.msgSuccess("操作成功")}))}}},[["render",function(e,t,a,b,T,_){const S=i("el-input"),k=i("el-form-item"),V=i("el-tag"),w=i("el-date-picker"),N=i("el-button"),R=i("el-form"),I=i("el-switch"),C=i("el-table-column"),L=i("TagEllipsis"),x=i("el-table"),z=i("pagination"),D=i("SelectTag"),E=i("SelectUser"),F=l("loading");return s(),r("div",null,[o(R,{ref:"queryForm",inline:!0,model:T.query,"label-width":"70px",class:"top-search"},{default:n((()=>[o(k,{label:"客户名称",prop:"name"},{default:n((()=>[o(S,{clearable:"",modelValue:T.query.name,"onUpdate:modelValue":t[0]||(t[0]=e=>T.query.name=e),placeholder:"请输入"},null,8,["modelValue"])])),_:1}),o(k,{label:"添加人"},{default:n((()=>[d("div",{class:"tag-input",onClick:t[1]||(t[1]=e=>T.dialogVisibleSelectUser=!0)},[T.queryUser.length?(s(!0),r(u,{key:1},p(T.queryUser,((e,t)=>(s(),m(V,{type:"info",key:t},{default:n((()=>[c(g(e.name),1)])),_:2},1024)))),128)):(s(),r("span",j,"请选择"))])])),_:1}),o(k,{label:"添加日期"},{default:n((()=>[o(w,h({clearable:"",modelValue:T.dateRange,"onUpdate:modelValue":t[2]||(t[2]=e=>T.dateRange=e),type:"daterange","value-format":"YYYY-MM-DD"},e.pickerOptions,{"range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"}),null,16,["modelValue"])])),_:1}),o(k,{label:"标签"},{default:n((()=>[d("div",{class:"tag-input",onClick:t[3]||(t[3]=e=>T.dialogVisible=!0)},[T.queryTag.length?(s(!0),r(u,{key:1},p(T.queryTag,((e,t)=>(s(),m(V,{type:"info",key:t},{default:n((()=>[c(g(e.name),1)])),_:2},1024)))),128)):(s(),r("span",q,"请选择"))])])),_:1}),o(k,{label:""},{default:n((()=>[o(N,{type:"primary",onClick:t[4]||(t[4]=e=>_.getList(1))},{default:n((()=>[c("查询")])),_:1}),o(N,{onClick:t[5]||(t[5]=e=>_.resetForm())},{default:n((()=>[c("重置")])),_:1})])),_:1})])),_:1},8,["model"]),d("div",v,[d("div",U,[d("div",null,[c(" 通知提醒 "),o(I,{class:"ml10 mr10",modelValue:T.isNotice,"onUpdate:modelValue":t[6]||(t[6]=e=>T.isNotice=e),"active-value":"1","inactive-value":"0","active-color":"#07c160","inactive-color":"#ff4949",onChange:_.remindSwitch},null,8,["modelValue","onChange"])])]),y((s(),m(x,{ref:"multipleTable",data:T.list,"tooltip-effect":"dark"},{default:n((()=>[o(C,{label:"客户",prop:"name",align:"center"},{default:n((e=>[c(g(e.row.customerName),1)])),_:1}),o(C,{prop:"userName",label:"添加人（首位）",align:"center"}),o(C,{prop:"firstAddTime",label:"添加时间",align:"center"}),o(C,{label:"留存天数",prop:"retentionDays",align:"center"}),o(C,{prop:"lossTime",label:"流失时间",align:"center"}),o(C,{prop:"address",label:"标签",align:"center"},{default:n((({row:e})=>{var t;return[o(L,{list:null==(t=e.tagNames)?void 0:t.split(","),emptyText:"无标签"},null,8,["list"])]})),_:1}),o(C,{label:"操作",width:"100"},{default:n((({row:t})=>[o(N,{onClick:a=>e.$router.push({name:e.lwConfig.CUSTOMER_DETAIL_ROUTE_NAME,query:{externalUserid:t.externalUserid,userId:t.firstUserId}}),text:""},{default:n((()=>[c(" 查看 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[F,T.loading]]),y(o(z,{total:T.total,page:T.query.pageNum,"onUpdate:page":t[7]||(t[7]=e=>T.query.pageNum=e),limit:T.query.pageSize,"onUpdate:limit":t[8]||(t[8]=e=>T.query.pageSize=e),onPagination:t[9]||(t[9]=e=>_.getList())},null,8,["total","page","limit"]),[[f,T.total>0]])]),o(D,{visible:T.dialogVisible,"onUpdate:visible":t[10]||(t[10]=e=>T.dialogVisible=e),selected:T.queryTag,onSuccess:t[11]||(t[11]=e=>T.queryTag=e)},null,8,["visible","selected"]),o(E,{visible:T.dialogVisibleSelectUser,"onUpdate:visible":t[12]||(t[12]=e=>T.dialogVisibleSelectUser=e),title:"选择添加人",onSuccess:t[13]||(t[13]=e=>T.queryUser=e)},null,8,["visible"])])}],["__scopeId","data-v-5aad7d8e"]]);export{T as default};
