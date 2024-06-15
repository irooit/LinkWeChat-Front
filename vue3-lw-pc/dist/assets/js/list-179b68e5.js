import{C as e}from"../index-044285d2.js";import{_ as t}from"./quill-image-resize-module-c051113e.js";import{ai as s,o as i,T as r,U as l,_ as o,a,Y as n,Z as m}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const{get:p,post:d,put:c,del:u}=e,j="/groupchat";function f(e){return p(j+"/findDeduplications",e)}const h={class:"fxbw"};const g=t({components:{},props:{},data:()=>({getList:f}),watch:{},created(){this.$store.setBusininessDesc("  <div>筛选出重复的群客户，支持一键拉黑，或提醒成员进行移除，保证群运营质量</div>")},methods:{remind(e,t){this.$confirm(t?"是否确定提醒员工对当前客户进行客群去重？":"是否确定提醒员工对当前选中全部客户进行客群去重").then((()=>(this.$refs.rct.loading=!0,d(j+"/remindDuplicateMembers",{externalUserids:e+""})))).then((e=>{this.msgSuccess("操作成功"),this.$refs.rct.getList()})).finally((()=>{this.$refs.rct.loading=!1}))},setBlackList(e){this.$confirm(1==e.isJoinBlacklist?"是否确定拉黑？拉黑后客户无法收到群发信息":"是否确定取消拉黑？取消后客户可以收到后续群发信息").then((()=>{return this.$refs.rct.loading=!0,t={isJoinBlacklist:1==e.isJoinBlacklist?0:1,externalUserids:e.externalUserid},d(j+"/joinOrRemoveBlackList",t);var t})).then((e=>{this.msgSuccess("操作成功"),this.$refs.rct.getList()})).finally((()=>{this.$refs.rct.loading=!1}))}}},[["render",function(e,t,p,d,c,u){const j=s("el-input"),f=s("el-form-item"),g=s("el-button"),b=s("el-table-column"),k=s("TagEllipsis"),x=s("RequestChartTable");return i(),r(x,{ref:"rct",request:c.getList,dataKey:"externalUserid"},{query:l((({query:e})=>[o(f,{label:"客户名称",prop:"memberName"},{default:l((()=>[o(j,{clearable:"",modelValue:e.memberName,"onUpdate:modelValue":t=>e.memberName=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),operation:l((({selectedIds:e})=>[a("div",h,[o(g,{disabled:!e.length,onClick:t=>u.remind(e),type:"primary"},{default:l((()=>[n("批量提醒")])),_:2},1032,["disabled","onClick"])])])),table:l((()=>[o(b,{label:"客户名称",align:"center",prop:"customerName","show-overflow-tooltip":""}),o(b,{label:"添加员工",align:"center"},{default:l((({row:e})=>[o(k,{list:e.addWeUserNames,emptyText:"",limit:"3"},null,8,["list"])])),_:1}),o(b,{label:"重复客群",align:"center"},{default:l((({row:e})=>[o(k,{list:e.joinGroupNames,emptyText:"",limit:"3"},null,8,["list"])])),_:1}),o(b,{label:"最近更新",align:"center",prop:"updateTime",width:"160"}),o(b,{label:"操作",align:"center",fixed:"right"},{default:l((({row:t})=>[o(g,{text:"",onClick:s=>e.$router.push({name:e.lwConfig.CUSTOMER_DETAIL_ROUTE_NAME,query:{externalUserid:t.externalUserid,userId:t.addUserId}})},{default:l((()=>[n(" 客户详情 ")])),_:2},1032,["onClick"]),o(g,{text:"",onClick:e=>u.remind(t.externalUserid,1)},{default:l((()=>[n("提醒员工")])),_:2},1032,["onClick"]),o(g,{text:"",onClick:e=>u.setBlackList(t)},{default:l((()=>[n(m(1==t.isJoinBlacklist?"拉黑":"取消拉黑"),1)])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["request"])}]]);export{g as default};
