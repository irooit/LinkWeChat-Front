import{_ as i}from"../index-044285d2.js";import{g as s,u as e,b as o,r as l,a as t}from"./groupRobot-11796d43.js";import{_ as a}from"./quill-image-resize-module-c051113e.js";import{aU as d,ai as r,aq as m,o as n,c as u,V as g,K as p,a9 as c,a as b,Z as f,_ as j,U as h,Y as V,T as M,X as k,bl as _,bj as v}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const y={components:{HistoryMsg:d((()=>i((()=>import("./HistoryMsg-1840e1ec.js")),["assets/js/HistoryMsg-1840e1ec.js","assets/js/groupRobot-11796d43.js","assets/index-044285d2.js","assets/js/js-cookie-8253c38e.js","assets/js/@vue-e400fd81.js","assets/js/vue-router-f8d53be7.js","assets/js/element-plus-68ba2566.js","assets/js/lodash-es-d4f5f48c.js","assets/js/@element-plus-214e0f7b.js","assets/js/@popperjs-b78c3215.js","assets/js/@ctrl-91de2ec7.js","assets/js/dayjs-c17bc6b2.js","assets/js/@babel-efd68da6.js","assets/js/to-fast-properties-1160b370.js","assets/js/async-validator-cf877c1f.js","assets/js/memoize-one-63ab667a.js","assets/js/normalize-wheel-es-3222b0a2.js","assets/js/@floating-ui-36fbce82.js","assets/css/element-plus-3888a320.css","assets/js/quill-image-resize-module-c051113e.js","assets/js/quill-c6b3d2fb.js","assets/js/quill-delta-a1872f89.js","assets/js/fast-diff-d5a53119.js","assets/js/lodash.clonedeep-1b6eefdc.js","assets/js/lodash.isequal-e7d08617.js","assets/js/@vueup-7cf8cfdd.js","assets/css/@vueup-da05906a.css","assets/css/quill-image-resize-module-44eb40f8.css","assets/js/pinia-1b56b17e.js","assets/js/vue-demi-71ba0ef2.js","assets/js/jsencrypt-43f479c1.js","assets/js/crypto-js-d6a67473.js","assets/js/ali-oss-912914b8.js","assets/js/axios-fb5f9e0e.js","assets/js/@vueuse-4025ce01.js","assets/js/path-browserify-289407ee.js","assets/js/nprogress-a39edb90.js","assets/css/nprogress-771398e6.css","assets/js/clipboard-7a0da8dc.js","assets/css/index-b5531375.css","assets/css/normalize-9d9ae4af.css"]))),MsgForm:d((()=>i((()=>import("./MsgForm-8a3748ce.js")),["assets/js/MsgForm-8a3748ce.js","assets/js/quill-image-resize-module-c051113e.js","assets/js/quill-c6b3d2fb.js","assets/js/@babel-efd68da6.js","assets/js/to-fast-properties-1160b370.js","assets/js/quill-delta-a1872f89.js","assets/js/fast-diff-d5a53119.js","assets/js/lodash.clonedeep-1b6eefdc.js","assets/js/lodash.isequal-e7d08617.js","assets/js/@vueup-7cf8cfdd.js","assets/js/@vue-e400fd81.js","assets/css/@vueup-da05906a.css","assets/css/quill-image-resize-module-44eb40f8.css","assets/css/MsgForm-dedc1a82.css"])))},props:{},data:()=>({form:{},list:[],dialogVisible:!1,disabled:!1,loading:!1,rules:Object.freeze({groupName:[{required:!0,message:"必填项",trigger:"blur"}],webHookUrl:[{required:!0,message:"必填项",trigger:"blur"}]}),formMsg:{},dialogVisibleHistoryMsg:!1,dialogVisibleSendMsg:!1}),watch:{},computed:{},created(){this.getList(),this.$store.setBusininessDesc("<div>通过群机器人给内部群发送消息，通知员工</div> ")},mounted(){},methods:{getList(i){this.loading=!0,s().then((({rows:i,total:s})=>{this.list=i})).finally((()=>{this.loading=!1}))},edit(i,s){this.form=Object.assign({},i||{}),this.dialogVisible=!0,this.disabled=!(s||!i),this.$nextTick((()=>{this.$refs.form.clearValidate()}))},submit(){this.$refs.form.validate((i=>{i&&(this.form.id?e:o)(this.form).then((()=>{this.msgSuccess("操作成功"),this.dialogVisible=!1,this.getList()})).catch((()=>{this.dialogVisible=!1}))}))},remove(i){this.$confirm("是否确认删除？该操作不可撤销，请谨慎操作。",{title:"警告",confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return l(i)})).then((()=>{this.getList(),this.msgSuccess("删除成功")}))},submitSendMsg(i){i?(i.id?t.update:t.add)(i).then((()=>{this.msgSuccess("操作成功"),this.dialogVisibleSendMsg=!1})).catch((()=>{this.dialogVisibleSendMsg=!1})):this.dialogVisibleSendMsg=!1}}},S=i=>(_("data-v-9ccb1855"),i=i(),v(),i),w={class:"list-wrap"},H={class:"list-item"},x={class:"title blod toe"},U={class:"desc mt10"},C={class:"list-action fxbw"},q={class:"ac flex aic cp theme list-item",style:{"justify-content":"center"}},I=S((()=>b("div",{class:"dialog-tip"},"如何获取：企微后台->应用管理->自建应用详情->AgentId",-1))),L=S((()=>b("div",{class:"dialog-tip"},"如何获取：企业微信内部群 -> 开启群机器人 -> 复制地址",-1)));const E=a(y,[["render",function(i,s,e,o,l,t){const a=r("el-button"),d=r("el-icon-plus"),_=r("el-input"),v=r("el-form-item"),y=r("el-form"),S=r("el-dialog"),E=r("HistoryMsg"),T=r("MsgForm"),z=m("loading");return n(),u("div",null,[g((n(),u("ul",w,[(n(!0),u(p,null,c(l.list,((s,e)=>(n(),u("li",{key:e,class:"list"},[b("div",H,[b("div",x,f(s.groupName),1),b("div",U,f(s.webHookUrl),1),b("div",C,[j(a,{text:"",onClick:e=>{l.formMsg={robotId:s.id},i.disabledMsg=!1,l.dialogVisibleSendMsg=!0}},{default:h((()=>[V(" 发送消息 ")])),_:2},1032,["onClick"]),j(a,{text:"",onClick:i=>{l.formMsg={robotId:s.id},l.dialogVisibleHistoryMsg=!0}},{default:h((()=>[V(" 历史消息 ")])),_:2},1032,["onClick"]),j(a,{text:"",onClick:i=>t.edit(s)},{default:h((()=>[V("编辑")])),_:2},1032,["onClick"]),j(a,{text:"",onClick:i=>t.remove(s.id)},{default:h((()=>[V("删除")])),_:2},1032,["onClick"])])])])))),128)),b("li",{class:"list",onClick:s[0]||(s[0]=i=>t.edit())},[b("div",q,[j(d,{class:"el-icon-plus"}),V(" 添加机器人 ")])])])),[[z,l.loading]]),j(S,{title:l.form.id?"编辑":"添加",modelValue:l.dialogVisible,"onUpdate:modelValue":s[4]||(s[4]=i=>l.dialogVisible=i),"close-on-click-modal":!1,width:"580px"},{footer:h((()=>[b("div",null,[j(a,{onClick:s[3]||(s[3]=i=>l.dialogVisible=!1)},{default:h((()=>[V("取 消")])),_:1}),j(a,{type:"primary",onClick:t.submit},{default:h((()=>[V("确 定")])),_:1},8,["onClick"])])])),default:h((()=>[j(y,{ref:"form","label-position":"right",model:l.form,rules:l.rules,"label-width":"90px"},{default:h((()=>[j(v,{label:"群名称",prop:"groupName"},{default:h((()=>[j(_,{modelValue:l.form.groupName,"onUpdate:modelValue":s[1]||(s[1]=i=>l.form.groupName=i),placeholder:"请输入群名称"},null,8,["modelValue"]),I])),_:1}),j(v,{label:"WebHook",prop:"webHookUrl"},{default:h((()=>[j(_,{modelValue:l.form.webHookUrl,"onUpdate:modelValue":s[2]||(s[2]=i=>l.form.webHookUrl=i),placeholder:"请输入WebHook URL"},null,8,["modelValue"]),L])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"]),j(S,{title:"历史消息",modelValue:l.dialogVisibleHistoryMsg,"onUpdate:modelValue":s[6]||(s[6]=i=>l.dialogVisibleHistoryMsg=i),"close-on-click-modal":!1},{default:h((()=>[l.dialogVisibleHistoryMsg?(n(),M(E,{key:0,id:l.formMsg.robotId,ref:"historyMsg",onEdit:s[5]||(s[5]=(s,e)=>{l.dialogVisibleSendMsg=!0,i.disabledMsg=!0,l.formMsg=s})},null,8,["id"])):k("",!0)])),_:1},8,["modelValue"]),j(S,{title:"发送消息",modelValue:l.dialogVisibleSendMsg,"onUpdate:modelValue":s[7]||(s[7]=i=>l.dialogVisibleSendMsg=i),"close-on-click-modal":!1},{default:h((()=>[l.dialogVisibleSendMsg?(n(),M(T,{key:0,data:l.formMsg,disabled:i.disabledMsg,onSubmit:t.submitSendMsg},null,8,["data","disabled","onSubmit"])):k("",!0)])),_:1},8,["modelValue"])])}],["__scopeId","data-v-9ccb1855"]]);export{E as default};