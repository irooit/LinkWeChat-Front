import{_ as e}from"./quill-image-resize-module-c051113e.js";import{ai as t,o as a,c as i,_ as r,U as l,a as s,T as c,Y as d,X as o,bl as n,bj as m}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const S={name:"enterprise-wechat-part2",data:()=>({agentSecretCopy:"",agentSecretEditState:!1,chatSecretCopy:"",chatSecretEditState:!1,form:{},rules:{agentId:[{required:!0,message:"必填项",trigger:"blur"}],agentSecret:[{required:!0,message:"必填项",trigger:"blur"}],chatSecret:[{required:!0,message:"必填项",trigger:"blur"}],financePrivateKey:[{required:!0,message:"必填项",trigger:"blur"}]}}),watch:{data:"setData"},props:{data:{type:Object,default:{}}},methods:{editAgentSecret(){this.agentSecretEditState=!0,this.agentSecretCopy=JSON.parse(JSON.stringify(this.form.agentSecret)),this.form.agentSecret=""},cancelEditAgentSecret(){this.agentSecretEditState=!1,this.form.agentSecret=JSON.parse(JSON.stringify(this.agentSecretCopy))},submitEditAgentSecret(){this.form.agentSecret&&(this.$emit("submit",this.form),this.agentSecretEditState=!1)},editChatSecret(){this.chatSecretEditState=!0,this.chatSecretCopy=JSON.parse(JSON.stringify(this.form.chatSecret)),this.form.chatSecret=""},cancelEditChatSecret(){this.chatSecretEditState=!1,this.form.chatSecret=JSON.parse(JSON.stringify(this.chatSecretCopy))},submitEditChatSecret(){this.form.chatSecret&&(this.$emit("submit",this.form),this.chatSecretEditState=!1)},submit(){this.$refs.form.validate((e=>{e&&this.$emit("submit",this.form)}))},setData(){Object.keys(this.data).length&&(this.form=this.data)}},mounted(){},created(){}},p=e=>(n("data-v-07c1fc5c"),e=e(),m(),e),h={class:"g-card"},u=p((()=>s("div",{class:"my-title"},"自建应用",-1))),f=p((()=>s("div",{class:"tips"},"用于接收应用消息，在企微后台->应用工具->自建应用中配置并获取",-1))),g=p((()=>s("div",{class:"tips"},"用于接收应用消息，在企微后台->应用工具->自建应用中配置并获取",-1))),y={class:"g-card"},b=p((()=>s("div",{class:"my-title"},"会话存档",-1))),E=p((()=>s("div",{class:"tips"},"用于同步企微会话，在企微后台->管理工具->会话存档中获取",-1))),C=p((()=>s("div",{class:"tips"},"用于同步企微会话，在企微后台->管理工具->会话存档中获取",-1)));const v=e(S,[["render",function(e,n,m,S,p,v){const k=t("el-input"),_=t("el-form-item"),j=t("el-button"),w=t("el-form");return a(),i("div",null,[r(w,{ref:"form","label-position":"right",model:p.form,rules:p.rules,"label-width":"130px"},{default:l((()=>[s("div",h,[u,r(_,{label:"消息应用ID:",prop:"agentId"},{default:l((()=>[r(k,{style:{width:"40%"},modelValue:p.form.agentId,"onUpdate:modelValue":n[0]||(n[0]=e=>p.form.agentId=e),placeholder:"请输入消息应用ID"},null,8,["modelValue"]),f])),_:1}),r(_,{label:"消息应用Secret:",prop:"agentSecret"},{default:l((()=>[s("div",null,[r(k,{style:{width:"40%"},disabled:!p.agentSecretEditState,type:p.agentSecretEditState?"text":"password",modelValue:p.form.agentSecret,"onUpdate:modelValue":n[1]||(n[1]=e=>p.form.agentSecret=e),placeholder:"请输入消息应用Secret"},null,8,["disabled","type","modelValue"]),p.agentSecretEditState?(a(),c(j,{key:0,style:{"margin-left":"20px"},plain:"",onClick:v.cancelEditAgentSecret},{default:l((()=>[d(" 取消 ")])),_:1},8,["onClick"])):o("",!0),p.agentSecretEditState?(a(),c(j,{key:1,type:"primary",plain:"",onClick:v.submitEditAgentSecret},{default:l((()=>[d("保存")])),_:1},8,["onClick"])):o("",!0),p.agentSecretEditState?o("",!0):(a(),c(j,{key:2,type:"primary",style:{"margin-left":"20px"},plain:"",onClick:v.editAgentSecret},{default:l((()=>[d(" 修改 ")])),_:1},8,["onClick"]))]),g])),_:1})]),s("div",y,[b,r(_,{label:"会话存档Secret:",prop:"chatSecret"},{default:l((()=>[s("div",null,[r(k,{style:{width:"40%"},disabled:!p.chatSecretEditState,type:p.chatSecretEditState?"text":"password",modelValue:p.form.chatSecret,"onUpdate:modelValue":n[2]||(n[2]=e=>p.form.chatSecret=e),placeholder:"请输入会话存档Secret"},null,8,["disabled","type","modelValue"]),p.chatSecretEditState?(a(),c(j,{key:0,style:{"margin-left":"20px"},plain:"",onClick:v.cancelEditChatSecret},{default:l((()=>[d(" 取消 ")])),_:1},8,["onClick"])):o("",!0),p.chatSecretEditState?(a(),c(j,{key:1,type:"primary",plain:"",onClick:v.submitEditChatSecret},{default:l((()=>[d("保存")])),_:1},8,["onClick"])):o("",!0),p.chatSecretEditState?o("",!0):(a(),c(j,{key:2,type:"primary",style:{"margin-left":"20px"},plain:"",onClick:v.editChatSecret},{default:l((()=>[d(" 修改 ")])),_:1},8,["onClick"]))]),E])),_:1}),r(_,{label:"消息加密私钥:",prop:"financePrivateKey"},{default:l((()=>[r(k,{style:{width:"40%"},type:"textarea",autosize:{minRows:2,maxRows:6},modelValue:p.form.financePrivateKey,"onUpdate:modelValue":n[3]||(n[3]=e=>p.form.financePrivateKey=e),placeholder:"请输入消息加密私钥"},null,8,["modelValue"]),C])),_:1})])])),_:1},8,["model","rules"])])}],["__scopeId","data-v-07c1fc5c"]]);export{v as default};
