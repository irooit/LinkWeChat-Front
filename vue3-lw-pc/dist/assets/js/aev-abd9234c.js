import{_ as e}from"../index-044285d2.js";import{g as l,u as i,a as o}from"./api-f4eece6a.js";import{_ as a}from"./quill-image-resize-module-c051113e.js";import{aU as s,ai as t,aq as r,V as d,o as m,c as u,a as p,_ as c,U as n,Y as f,T as g,X as b,K as h,P as v,bl as j,bj as V}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const k={components:{SelectGroup:s((()=>e((()=>import("./SelectGroup-6de7bf46.js")),["assets/js/SelectGroup-6de7bf46.js","assets/js/group-e56f61ac.js","assets/index-044285d2.js","assets/js/js-cookie-8253c38e.js","assets/js/@vue-e400fd81.js","assets/js/vue-router-f8d53be7.js","assets/js/element-plus-68ba2566.js","assets/js/lodash-es-d4f5f48c.js","assets/js/@element-plus-214e0f7b.js","assets/js/@popperjs-b78c3215.js","assets/js/@ctrl-91de2ec7.js","assets/js/dayjs-c17bc6b2.js","assets/js/@babel-efd68da6.js","assets/js/to-fast-properties-1160b370.js","assets/js/async-validator-cf877c1f.js","assets/js/memoize-one-63ab667a.js","assets/js/normalize-wheel-es-3222b0a2.js","assets/js/@floating-ui-36fbce82.js","assets/css/element-plus-3888a320.css","assets/js/quill-image-resize-module-c051113e.js","assets/js/quill-c6b3d2fb.js","assets/js/quill-delta-a1872f89.js","assets/js/fast-diff-d5a53119.js","assets/js/lodash.clonedeep-1b6eefdc.js","assets/js/lodash.isequal-e7d08617.js","assets/js/@vueup-7cf8cfdd.js","assets/css/@vueup-da05906a.css","assets/css/quill-image-resize-module-44eb40f8.css","assets/js/pinia-1b56b17e.js","assets/js/vue-demi-71ba0ef2.js","assets/js/jsencrypt-43f479c1.js","assets/js/crypto-js-d6a67473.js","assets/js/ali-oss-912914b8.js","assets/js/axios-fb5f9e0e.js","assets/js/@vueuse-4025ce01.js","assets/js/path-browserify-289407ee.js","assets/js/nprogress-a39edb90.js","assets/css/nprogress-771398e6.css","assets/js/clipboard-7a0da8dc.js","assets/css/index-b5531375.css","assets/css/normalize-9d9ae4af.css","assets/css/SelectGroup-f405b962.css"])))},data:()=>({selectedUserList:[],newGroupId:"",dialogVisibleSelectUser:!1,dialogVisibleSelectTag:!1,dialogVisibleSelectGroup:!1,loading:!1,form:{codeName:"",emplList:[],welcomeMsg:"",groupCodeId:void 0,skipVerify:!1},rules:Object.freeze({codeName:[{required:!0,message:"必填项",trigger:"blur"}],users:[{required:!0,message:"必填项",trigger:"blur"}],welcomeMsg:[{required:!0,message:"必填项",trigger:"blur"}],groups:[{required:!0,message:"必填项",trigger:"change"}],linkTitle:[{required:!0,message:"必填项",trigger:"blur"}],linkDesc:[{required:!0,message:"必填项",trigger:"blur"}]})}),computed:{isDetail(){return this.$route.path.endsWith("detail")}},watch:{},created(){this.$route.query.id&&this.getDetail(this.$route.query.id)},methods:{getDetail(e){this.loading=!0,l(e).then((({data:e})=>{this.form=e,this.loading=!1}))},submit(){this.$refs.form.validate((e=>{e&&(this.loading=!0,(this.$route.query.id?i:o)(this.form).then((()=>{this.msgSuccess(),this.loading=!1,this.$router.back()})).catch((()=>{this.loading=!1})))}))}}},y=e=>(j("data-v-7427568f"),e=e(),V(),e),_={class:"flex"},w={class:"g-card"},U={class:"g-card-title fxbw"},x={key:0},S=y((()=>p("div",{class:"g-tip"},"通过此群活码进群的客户自动打上选中的标签",-1))),C={class:"g-card"},D=y((()=>p("div",{class:"g-card-title"},"拉群设置",-1))),T=y((()=>p("div",{class:"g-tip"},"最多选择五个客群",-1))),q=y((()=>p("div",{class:"g-tip"},"默认以第一个群的群主作为新建群的群主",-1))),$=y((()=>p("div",null,"支持jpg/jpeg/png格式，图片大小不超过2M",-1))),z={key:0,class:"g-card sticky-t"},N=y((()=>p("div",{class:"g-card-title"},"活码",-1))),B={class:"ac"},G={class:"mt10"},I={class:"preview-wrap g-card sticky-t"},M=y((()=>p("div",{class:"g-card-title"},"预览",-1))),R={key:0,class:"g-footer-sticky",style:{"z-index":"10"}};const E=a(k,[["render",function(e,l,i,o,a,s){const j=t("el-tag"),V=t("el-input"),k=t("el-form-item"),y=t("el-button"),E=t("TagEllipsis"),L=t("el-checkbox"),P=t("TextareaExtend"),F=t("el-switch"),O=t("el-input-number"),A=t("upload"),K=t("el-form"),J=t("el-image"),W=t("PhoneDialog"),X=t("SelectUser"),Y=t("SelectTag"),H=t("SelectGroup"),Q=r("loading");return d((m(),u("div",null,[p("div",_,[c(K,{model:a.form,ref:"form",rules:a.rules,"label-width":"100px","scroll-to-error":"",class:v(["fxauto g-margin-r",s.isDetail&&"form-detail"]),disabled:s.isDetail},{default:n((()=>[p("div",w,[p("div",U,[f(" 基础信息 "),s.isDetail?(m(),g(j,{key:0,class:"cp",size:"large",effect:"dark",onClick:l[0]||(l[0]=l=>e.$router.push({path:"./aev",query:{id:e.$route.query.id}}))},{default:n((()=>[f(" 编辑 ")])),_:1})):b("",!0)]),c(k,{label:"活码名称",prop:"codeName"},{default:n((()=>[c(V,{modelValue:a.form.codeName,"onUpdate:modelValue":l[1]||(l[1]=e=>a.form.codeName=e),maxlength:"30","show-word-limit":"",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),c(k,{label:"使用员工",prop:"users"},{default:n((()=>[s.isDetail?b("",!0):(m(),u("div",x,[c(y,{type:"primary",onClick:l[2]||(l[2]=e=>a.dialogVisibleSelectUser=!0)},{default:n((()=>[f("选择员工")])),_:1})])),c(E,{list:a.form.users,limit:"10",emptyText:""},null,8,["list"])])),_:1}),c(k,{label:"入群标签",prop:"tags"},{default:n((()=>[s.isDetail?b("",!0):(m(),u(h,{key:0},[c(y,{type:"primary",onClick:l[3]||(l[3]=e=>a.dialogVisibleSelectTag=!0)},{default:n((()=>[f("选择标签")])),_:1}),S],64)),c(E,{list:a.form.tags,limit:"10",emptyText:""},null,8,["list"])])),_:1}),c(k,{label:"添加设置",prop:"skipVerify"},{default:n((()=>[c(L,{modelValue:a.form.skipVerify,"onUpdate:modelValue":l[4]||(l[4]=e=>a.form.skipVerify=e)},{default:n((()=>[f("客户添加时无需经过确认自动成为好友")])),_:1},8,["modelValue"])])),_:1})]),p("div",C,[D,c(k,{label:"加群引导语",prop:"welcomeMsg"},{default:n((()=>[c(P,{modelValue:a.form.welcomeMsg,"onUpdate:modelValue":l[5]||(l[5]=e=>a.form.welcomeMsg=e),maxlength:"220","show-word-limit":"",autosize:{minRows:5,maxRows:20},placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),c(k,{label:"活码客群:",prop:"groups"},{default:n((()=>[s.isDetail?b("",!0):(m(),u(h,{key:0},[c(y,{type:"primary",onClick:l[6]||(l[6]=e=>a.dialogVisibleSelectGroup=!0)},{default:n((()=>[f("选择客群")])),_:1}),T],64)),c(E,{list:a.form.groups,limit:"5",defaultProps:"groupName",emptyText:""},null,8,["list"])])),_:1}),c(k,{label:"群满自动建群:"},{default:n((()=>[c(F,{modelValue:a.form.autoCreateRoom,"onUpdate:modelValue":l[7]||(l[7]=e=>a.form.autoCreateRoom=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),q])),_:1}),a.form.autoCreateRoom?(m(),u(h,{key:0},[c(k,{label:"群名前缀:",prop:"roomBaseName"},{default:n((()=>[c(V,{"show-word-limit":"",maxlength:"20",modelValue:a.form.roomBaseName,"onUpdate:modelValue":l[8]||(l[8]=e=>a.form.roomBaseName=e),placeholder:"请输入群名前缀"},null,8,["modelValue"])])),_:1}),c(k,{label:"群起始序号:",prop:"roomBaseId"},{default:n((()=>[c(O,{modelValue:a.form.roomBaseId,"onUpdate:modelValue":l[9]||(l[9]=e=>a.form.roomBaseId=e),"controls-position":"right",min:1},null,8,["modelValue"])])),_:1})],64)):b("",!0),c(k,{label:"链接标题",prop:"linkTitle"},{default:n((()=>[c(V,{modelValue:a.form.linkTitle,"onUpdate:modelValue":l[10]||(l[10]=e=>a.form.linkTitle=e),maxlength:"20","show-word-limit":"",placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),c(k,{label:"链接描述",prop:"linkDesc"},{default:n((()=>[c(V,{modelValue:a.form.linkDesc,"onUpdate:modelValue":l[11]||(l[11]=e=>a.form.linkDesc=e),maxlength:"30","show-word-limit":"",placeholder:"请输入",clearable:"",type:"textarea",autosize:{minRows:3,maxRows:20}},null,8,["modelValue"])])),_:1}),c(k,{label:"链接封面",prop:"linkCoverUrl"},{default:n((()=>[c(A,{fileUrl:a.form.linkCoverUrl,"onUpdate:fileUrl":l[12]||(l[12]=e=>a.form.linkCoverUrl=e),type:"0",maxSize:2,format:["jpg","jpeg","png"]},{tip:n((()=>[$])),_:1},8,["fileUrl"])])),_:1})])])),_:1},8,["model","rules","class","disabled"]),p("div",null,[s.isDetail?(m(),u("div",z,[N,p("div",B,[c(J,{class:"",src:a.form.emplCodeUrl,fit:"contain",style:{width:"120px"}},null,8,["src"]),p("div",G,[c(y,{text:"",onClick:l[13]||(l[13]=l=>e.downloadBlob(a.form.emplCodeUrl,"新客拉群活码.png","image"))},{default:n((()=>[f("下载活码")])),_:1}),c(y,{class:"copy",text:"",onClick:l[14]||(l[14]=l=>e.$copyText(a.form.emplCodeUrl))},{default:n((()=>[f("复制链接")])),_:1})])])])):b("",!0),p("div",I,[M,c(W,{list:[{text:a.form.welcomeMsg||"请输入加群引导语"},{title:a.form.linkTitle,desc:a.form.linkDesc,image:a.form.linkCoverUrl}]},null,8,["list"])])])]),s.isDetail?b("",!0):(m(),u("div",R,[c(y,{type:"primary",onClick:s.submit},{default:n((()=>[f("保存")])),_:1},8,["onClick"]),c(y,{onClick:l[15]||(l[15]=l=>e.$router.back())},{default:n((()=>[f("取消")])),_:1})])),c(X,{visible:a.dialogVisibleSelectUser,"onUpdate:visible":l[16]||(l[16]=e=>a.dialogVisibleSelectUser=e),title:"选择使用员工",defaultValues:a.form.users,onSuccess:l[17]||(l[17]=l=>(a.form.users=l,e.$refs.form.validateField("users")))},null,8,["visible","defaultValues"]),c(Y,{visible:a.dialogVisibleSelectTag,"onUpdate:visible":l[18]||(l[18]=e=>a.dialogVisibleSelectTag=e),selected:a.form.tags,onSuccess:l[19]||(l[19]=l=>(a.form.tags=l,e.$refs.form.validateField("tags")))},null,8,["visible","selected"]),c(H,{visible:a.dialogVisibleSelectGroup,"onUpdate:visible":l[20]||(l[20]=e=>a.dialogVisibleSelectGroup=e),defaults:a.form.groups,onSubmit:l[21]||(l[21]=l=>(a.form.groups=l,e.$refs.form.validateField("groups")))},null,8,["visible","defaults"])])),[[Q,a.loading]])}],["__scopeId","data-v-7427568f"]]);export{E as default};