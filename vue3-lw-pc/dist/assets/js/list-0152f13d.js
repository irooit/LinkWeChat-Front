import{_ as e}from"../index-044285d2.js";import{a as r,k as o,j as i,g as t,u as l,b as a,r as s}from"./staff-48996164.js";import{_ as d}from"./quill-image-resize-module-c051113e.js";import{aU as u,ai as n,o as p,c as m,a as c,_ as g,Y as h,U as f,K as b,a9 as v,P as y,Z as j,T as C,X as w}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const q={name:"CodeStaff",components:{CodeLink:u((()=>e((()=>import("./CodeLink-a163edad.js")),["assets/js/CodeLink-a163edad.js","assets/js/@vue-e400fd81.js"])))},data:()=>({getList:r,remove:o,downloadBatch:i,query:{pageNum:1,pageSize:10,groupId:"",qrUserIds:void 0,orderByColumn:"wqc.update_time",isAsc:"desc"},qrUserName:void 0,userArray:[],userArrayStr:"",dialogVisible:!1,loading:!1,total:0,list:[],form:{codeType:3,qrcode:"",isJoinConfirmFriends:0,weEmpleCodeTags:[],weEmpleCodeUseScops:[]},groupList:[],groupVisible:!1,groupForm:{mediaType:6,name:""},rules:{name:[{required:!0,message:"请输入分组名称",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}]},groupIndex:0,share:{}}),created(){this.getCodeCategoryListFn(),this.$store.setBusininessDesc("\n        <div>支持单人、批量单人及多人方式新建员工活码，客户可以通过扫描员工活码添加员工为好友，并支持自动给客户打标签和发送欢迎语。</div>\n      ")},mounted(){},methods:{addGroup(){this.groupForm={mediaType:6,name:""},this.groupVisible=!0},getCodeCategoryListFn(){t({mediaType:6}).then((e=>{this.groupList=e.data,this.query.groupId=this.groupList[0].id,this.groupIndex=0,this.query.pageNum=1,this.$refs.table.getList()}))},switchGroup(e,r){var o;this.groupIndex=e,this.query.groupId=r.id,null==(o=this.$refs.table)||o.getList()},getSelectUser(e){this.userArray=e,this.qrUserName=this.userArray.map((function(e,r){return e.name})).join(","),this.query.qrUserIds=this.userArray.map((function(e,r){return e.userId})).join(",")},goRoute(e,r){this.$router.push({path:e,query:{id:r,groupId:this.query.groupId}})},onAddOrUpdateGroup(){this.$refs.groupForm.validate((e=>{if(this.groupForm.id){let e={id:this.groupForm.id,name:this.groupForm.name,mediaType:6};this.groupForm=e}e&&(this.groupForm.id?l:a)(this.groupForm).then((e=>{this.groupVisible=!1,this.groupForm={name:"",mediaType:6},this.$refs.groupForm.clearValidate(),this.getCodeCategoryListFn()}))}))},onGroupCommand(e,r){"1"!==r.id?"edit"==e?this.editGroup(r):"remove"==e&&this.removeGroup(r.id):this.msgInfo("默认分组不可操作！")},editGroup(e){this.groupForm=JSON.parse(JSON.stringify(e)),this.groupVisible=!0},removeGroup(e){this.$confirm("确认删除当前分组? 删除后其下活码将一并删除！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{s(e).then((e=>{this.getCodeCategoryListFn()}))})).catch((()=>{}))}}},_={style:{height:"100%"}},V={class:"g-left-right"},k={class:"left g-card"},U={class:"title"},F={class:"title-name"},x=["onClick"],I={class:"name"},L={class:"dot"},T={class:"right"},N={class:"mid-action mb0"},G={class:"dialog-footer"},A={style:{background:"var(--bg-black-8)",padding:"var(--card-margin)","border-radius":"var(--border-radius-big)"}};const S=d(q,[["render",function(e,r,o,i,t,l){const a=n("el-icon-arrow-up"),s=n("el-icon-MoreFilled"),d=n("el-dropdown-item"),u=n("el-dropdown-menu"),q=n("el-dropdown"),S=n("el-scrollbar"),$=n("el-input"),R=n("el-form-item"),B=n("el-button"),O=n("el-image"),z=n("el-table-column"),E=n("TagEllipsis"),J=n("RequestChartTable"),D=n("SelectUser"),M=n("el-form"),P=n("el-dialog"),K=n("CodeLink");return p(),m("div",_,[c("div",V,[c("div",k,[c("div",U,[c("div",F,[g(a,{class:"el-icon-arrow-up mr5"}),h(" 全部 ")]),c("div",{class:"title-btn",onClick:r[0]||(r[0]=(...e)=>l.addGroup&&l.addGroup(...e))},"添加")]),g(S,{class:"item-list"},{default:f((()=>[(p(!0),m(b,null,v(t.groupList,((e,r)=>(p(),m("div",{class:y(["item",{active:t.groupIndex==r}]),key:e.id,onClick:o=>l.switchGroup(r,e)},[c("div",I,j(e.name),1),t.groupIndex==r&&0===e.flag?(p(),C(q,{key:0,class:"dropdown",onCommand:r=>l.onGroupCommand(r,e)},{dropdown:f((()=>[g(u,null,{default:f((()=>[g(d,{command:"edit"},{default:f((()=>[h("修改分组")])),_:1}),g(d,{command:"remove"},{default:f((()=>[h("删除分组")])),_:1})])),_:1})])),default:f((()=>[c("span",L,[g(s,{class:"el-icon-MoreFilled"})])])),_:2},1032,["onCommand"])):w("",!0)],10,x)))),128))])),_:1})]),c("div",T,[g(J,{ref:"table",isCreateRequest:!1,request:e=>(Object.assign(e,t.query),t.getList(e)),onReset:r[6]||(r[6]=e=>t.qrUserName=t.query.qrUserIds="")},{query:f((({query:e})=>[g(R,{label:"活码名称",prop:"qrName"},{default:f((()=>[g($,{modelValue:e.qrName,"onUpdate:modelValue":r=>e.qrName=r,placeholder:"请输入活码名称",clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),g(R,{label:"选择员工"},{default:f((()=>[g($,{modelValue:t.qrUserName,"onUpdate:modelValue":r[1]||(r[1]=e=>t.qrUserName=e),readonly:"",onClick:r[2]||(r[2]=e=>t.dialogVisible=!0),placeholder:"请选择员工"},null,8,["modelValue"])])),_:1})])),operation:f((({selectedIds:o})=>[c("div",N,[g(B,{type:"primary",onClick:r[3]||(r[3]=e=>l.goRoute("add"))},{default:f((()=>[h("新建活码")])),_:1}),c("div",null,[g(B,{type:"primary",plain:"",disabled:!(null==o?void 0:o.length),onClick:r[4]||(r[4]=r=>{var o;return null==(o=e.$refs.table)?void 0:o.download(t.downloadBatch,"批量员工活码.zip","确认下载所有图片吗?")})},{default:f((()=>[h(" 批量下载 ")])),_:2},1032,["disabled"]),g(B,{type:"primary",plain:"",disabled:!(null==o?void 0:o.length),onClick:r[5]||(r[5]=r=>{var o;return null==(o=e.$refs.table)?void 0:o.remove(t.remove)})},{default:f((()=>[h(" 批量删除 ")])),_:2},1032,["disabled"])])])])),table:f((({data:r})=>[g(z,{label:"二维码",align:"center",prop:"qrCode","min-width":"120"},{default:f((({row:e})=>[g(O,{src:e.qrCode,fit:"fill","preview-src-list":[e.qrCode],style:{width:"100px",height:"100px"}},null,8,["src","preview-src-list"])])),_:1}),g(z,{label:"活码名称",align:"center","min-width":"100",prop:"name","show-overflow-tooltip":""}),g(z,{label:"使用员工",align:"center","min-width":"140",prop:"qrUserInfos","show-overflow-tooltip":""},{default:f((({row:e})=>[(p(!0),m(b,null,v(e.qrUserInfos,((e,r)=>(p(),m("div",{key:r,style:{display:"inline"}},[(p(!0),m(b,null,v(e.weQrUserList,((e,r)=>(p(),m("span",{key:r},j(e.userName+" "),1)))),128))])))),128))])),_:1}),g(z,{label:"标签",align:"center",prop:"qrTags","min-width":"160px"},{default:f((({row:e})=>[g(E,{list:e.qrTags,defaultProps:"tagName",emptyText:""},null,8,["list"])])),_:1}),g(z,{label:"最近更新时间",align:"center",prop:"updateTime",width:"180"}),g(z,{label:"操作",align:"center",fixed:"right",width:"220"},{default:f((({row:r})=>[g(B,{text:"",onClick:e=>l.goRoute("detail",r.id)},{default:f((()=>[h("详情|统计")])),_:2},1032,["onClick"]),g(B,{text:"",onClick:e=>{t.share.visible=!0,t.share.data=r}},{default:f((()=>[h("分享")])),_:2},1032,["onClick"]),g(B,{text:"",onClick:e=>l.goRoute("add",r.id)},{default:f((()=>[h("编辑")])),_:2},1032,["onClick"]),g(B,{text:"",onClick:o=>{var i;return null==(i=e.$refs.table)?void 0:i.remove(t.remove,r.id)}},{default:f((()=>[h("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["request"])])]),g(D,{visible:t.dialogVisible,"onUpdate:visible":r[7]||(r[7]=e=>t.dialogVisible=e),title:"组织架构",defaultValues:t.userArray,onSuccess:l.getSelectUser},null,8,["visible","defaultValues","onSuccess"]),g(P,{title:(t.groupForm.id?"修改":"新建")+"分组",modelValue:t.groupVisible,"onUpdate:modelValue":r[10]||(r[10]=e=>t.groupVisible=e),width:"30%"},{footer:f((()=>[c("div",G,[g(B,{onClick:r[9]||(r[9]=e=>t.groupVisible=!1)},{default:f((()=>[h("取 消")])),_:1}),g(B,{type:"primary",onClick:l.onAddOrUpdateGroup},{default:f((()=>[h("确 定")])),_:1},8,["onClick"])])])),default:f((()=>[g(M,{model:t.groupForm,rules:t.rules,ref:"groupForm"},{default:f((()=>[g(R,{label:"分组名称",prop:"name","label-width":"80px"},{default:f((()=>[g($,{modelValue:t.groupForm.name,"onUpdate:modelValue":r[8]||(r[8]=e=>t.groupForm.name=e),clearable:"",autocomplete:"off",maxlength:"15","show-word-limit":""},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"]),g(P,{title:"分享活码",modelValue:t.share.visible,"onUpdate:modelValue":r[11]||(r[11]=e=>t.share.visible=e),width:"666px"},{default:f((()=>[c("div",A,[g(K,{data:t.share.data},null,8,["data"])])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-cfb00f38"]]);export{S as default};
