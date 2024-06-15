import{_ as e}from"../index-044285d2.js";import{a as t,r as l,f as a,g as o}from"./group-16414119.js";import{_ as i}from"./quill-image-resize-module-c051113e.js";import{aU as r,ai as s,aq as d,o as n,c as p,_ as u,U as c,a as m,Y as g,Z as h,V as b,T as v,bl as f,bj as j}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const w={components:{CodeLink:r((()=>e((()=>import("./CodeLink-a163edad.js")),["assets/js/CodeLink-a163edad.js","assets/js/@vue-e400fd81.js"])))},data:()=>({getList:t,remove:l,downloadBatch:a,query:{pageNum:1,pageSize:10,activityName:"",tagIds:""},tagNames:"",loading:!1,searchDate:"",groupCodes:[],total:0,realCodeDialog:!1,openGroupCodeId:null,openGroupCodeStatus:-1,clipboard:null,showSelectTag:!1,tagList:[],tagIndex:1,tableList:[],loading:!1,detailDialog:!1,share:{}}),watch:{searchDate:{deep:!0,handler(e){e&&2===e.length?[this.query.beginTime,this.query.endTime]=e:(this.query.beginTime="",this.query.endTime="")}},realCodeDialog(e){var t;!1===e&&(null==(t=this.$refs.table)||t.getList())}},mounted(){},created(){this.$store.setBusininessDesc("\n        <div>生成永久二维码，根据规则自动切换企微客群，支持群满自动建群</div>\n      ")},unmounted(){},methods:{getDetail(e){this.detailDialog=!0,this.loading=!0,o(e).then((e=>{this.tableList=e.data,this.loading=!1}))},getSelectTag(e){this.taglist=e;let t=[],l=[];e.forEach((e=>{t.push(e.name),l.push(e.tagId)})),this.tagNames=t.join(","),this.query.tagIds=l.join(",")}}},y=e=>(f("data-v-cfa094ac"),e=e(),j(),e),_={class:"mid-action mb0"},C=y((()=>m("div",null,"当前群活码所有群聊数量，包括自动建立的群",-1))),k=["onClick"],T=y((()=>m("div",null,"当前群活码全部群的总人数（含员工及重复）",-1))),q=y((()=>m("div",null,"通过当前群活码进群的人数（去重）",-1))),N=y((()=>m("div",null,"通过当前群活码进群后退群的人数（去重）",-1))),x={style:{background:"var(--bg-black-8)",padding:"var(--card-margin)","border-radius":"var(--border-radius-big)"}};const D=i(w,[["render",function(e,t,l,a,o,i){const r=s("el-input"),f=s("el-form-item"),j=s("el-button"),w=s("el-table-column"),y=s("el-image"),D=s("el-popover"),I=s("TagEllipsis"),U=s("el-icon-QuestionFilled"),L=s("RequestChartTable"),S=s("select-tag"),V=s("el-table"),G=s("el-dialog"),M=s("CodeLink"),$=d("loading");return n(),p("div",null,[u(L,{ref:"table",request:o.getList},{query:c((({query:e})=>[u(f,{label:"活码名称",prop:"activityName"},{default:c((()=>[u(r,{clearable:"",modelValue:e.activityName,"onUpdate:modelValue":t=>e.activityName=t,placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),u(f,{label:"入群标签",prop:"tagIds"},{default:c((()=>[u(r,{"model-value":o.tagNames,readonly:"",onClick:t[0]||(t[0]=e=>o.showSelectTag=!0),placeholder:"请选择"},null,8,["model-value"])])),_:1})])),operation:c((({selectedIds:l})=>[m("div",_,[u(j,{type:"primary",onClick:t[1]||(t[1]=t=>e.$router.push("./add"))},{default:c((()=>[g("新建活码")])),_:1}),m("div",null,[u(j,{type:"primary",plain:"",disabled:!(null==l?void 0:l.length),onClick:t[2]||(t[2]=t=>{var l;return null==(l=e.$refs.table)?void 0:l.download(o.downloadBatch,"批量群活码.zip","确认下载所有图片吗?")})},{default:c((()=>[g(" 批量下载 ")])),_:2},1032,["disabled"]),u(j,{type:"primary",plain:"",disabled:!(null==l?void 0:l.length),onClick:t[3]||(t[3]=t=>{var l;return null==(l=e.$refs.table)?void 0:l.remove(o.remove)})},{default:c((()=>[g(" 批量删除 ")])),_:2},1032,["disabled"])])])])),table:c((({data:t})=>[u(w,{prop:"activityName",label:"活码名称",align:"center"}),u(w,{prop:"codeUrl",label:"二维码",align:"center",width:"130"},{default:c((({row:e})=>[u(D,{placement:"bottom",trigger:"hover"},{reference:c((()=>[u(y,{src:e.codeUrl,class:"code-image--small"},null,8,["src"])])),default:c((()=>[u(y,{src:e.codeUrl,class:"code-image"},null,8,["src"])])),_:2},1024)])),_:1}),u(w,{label:"入群标签",width:"180px"},{default:c((({row:e})=>{var t;return[u(I,{list:null==(t=e.tags)?void 0:t.split(","),emptyText:""},null,8,["list"])]})),_:1}),u(w,{label:"活码客群数",align:"center",width:"120px",prop:"chatGroupNum"},{header:c((()=>[u(D,{placement:"top",trigger:"hover"},{reference:c((()=>[m("div",null,[g(" 活码客群数 "),u(U,{class:"el-icon-QuestionFilled"})])])),default:c((()=>[C])),_:1})])),default:c((({row:e})=>[m("a",{style:{color:"var(--color)","text-decoration":"underline"},onClick:t=>i.getDetail(e.id)},h(e.chatGroupNum),9,k)])),_:1}),u(w,{prop:"chatGroupMemberTotalNum",width:"120px",label:"群总人数",align:"center"},{header:c((()=>[u(D,{placement:"top",trigger:"hover"},{reference:c((()=>[m("div",null,[g(" 群总人数 "),u(U,{class:"el-icon-QuestionFilled"})])])),default:c((()=>[T])),_:1})])),_:1}),u(w,{prop:"joinChatGroupTotalMemberNum",width:"120px",label:"进群人数",align:"center"},{header:c((()=>[u(D,{placement:"top",trigger:"hover"},{reference:c((()=>[m("div",null,[g(" 进群人数 "),u(U,{class:"el-icon-QuestionFilled"})])])),default:c((()=>[q])),_:1})])),_:1}),u(w,{prop:"exitChatGroupTotalMemberNum",width:"120px",label:"退群人数",align:"center"},{header:c((()=>[u(D,{placement:"top",trigger:"hover"},{reference:c((()=>[m("div",null,[g(" 退群人数 "),u(U,{class:"el-icon-QuestionFilled"})])])),default:c((()=>[N])),_:1})])),_:1}),u(w,{prop:"createBy",label:"创建人",align:"center"}),u(w,{prop:"updateTime",label:"最近操作时间",align:"center",width:"150"}),u(w,{label:"操作",align:"center",width:"220",fixed:"right"},{default:c((({row:t})=>[u(j,{text:"",onClick:l=>e.$router.push({path:"detail",query:{id:t.id,state:t.state,obj:encodeURIComponent(JSON.stringify(t))}})},{default:c((()=>[g(" 详情|统计 ")])),_:2},1032,["onClick"]),u(j,{text:"",onClick:l=>e.$router.push({path:"add",query:{id:t.id,obj:encodeURIComponent(JSON.stringify(t))}})},{default:c((()=>[g(" 编辑 ")])),_:2},1032,["onClick"]),u(j,{text:"",onClick:e=>{o.share.visible=!0,t.qrCode=t.codeUrl,(t.name=t.activityName)(o.share.data=t)}},{default:c((()=>[g(" 分享 ")])),_:2},1032,["onClick"]),u(j,{text:"",onClick:l=>{var a;return null==(a=e.$refs.table)?void 0:a.remove(o.remove,t.id)}},{default:c((()=>[g("删除")])),_:2},1032,["onClick"])])),_:2},1024)])),_:1},8,["request"]),u(S,{visible:o.showSelectTag,"onUpdate:visible":t[4]||(t[4]=e=>o.showSelectTag=e),type:"1",selected:o.tagList,onSuccess:i.getSelectTag},null,8,["visible","selected","onSuccess"]),u(G,{title:"当前客群",modelValue:o.detailDialog,"onUpdate:modelValue":t[7]||(t[7]=e=>o.detailDialog=e),"append-to-body":"",width:"70%"},{footer:c((()=>[m("div",null,[u(j,{onClick:t[5]||(t[5]=e=>o.detailDialog=!1)},{default:c((()=>[g("取 消")])),_:1}),u(j,{type:"primary",onClick:t[6]||(t[6]=e=>o.detailDialog=!1)},{default:c((()=>[g("确 定")])),_:1})])])),default:c((()=>[b((n(),v(V,{data:o.tableList,style:{width:"100%"}},{default:c((()=>[u(w,{label:"客群名称",align:"center","min-width":"100",prop:"groupName","show-overflow-tooltip":""}),u(w,{label:"关联状态"},{default:c((({row:e})=>[g(h(0==e.status?"未关联":1==e.status?"已关联":""),1)])),_:1}),u(w,{label:"群主",align:"center","min-width":"100",prop:"groupOwner","show-overflow-tooltip":""}),u(w,{label:"群总人数",align:"center",prop:"chatGroupMemberTotalNum","min-width":"100","show-overflow-tooltip":""}),u(w,{label:"进群人数",align:"center",prop:"joinChatGroupTotalMemberNum","min-width":"100","show-overflow-tooltip":""}),u(w,{label:"退群人数",align:"center",prop:"exitChatGroupTotalMemberNum","min-width":"100","show-overflow-tooltip":""}),u(w,{label:"操作",align:"center",width:"180"},{default:c((({row:t})=>[u(j,{text:"",onClick:l=>e.$router.push({path:"/groupManage/customerGroupManage/group/groupDetail",query:{chatId:t.chatId}})},{default:c((()=>[g(" 查看详情 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[$,o.loading]])])),_:1},8,["modelValue"]),u(G,{title:"分享活码",modelValue:o.share.visible,"onUpdate:modelValue":t[8]||(t[8]=e=>o.share.visible=e),width:"666px"},{default:c((()=>[m("div",x,[u(M,{data:o.share.data},null,8,["data"])])])),_:1},8,["modelValue"])])}],["__scopeId","data-v-cfa094ac"]]);export{D as default};
