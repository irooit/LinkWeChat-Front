import{_ as e}from"./quill-image-resize-module-c051113e.js";import{ai as t,o as i,c as l,_ as a,U as r,a as s,T as o,Y as d,X as c,bl as m,bj as p}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const f={name:"enterprise-wechat-part3",data:()=>({liveSecretCopy:"",liveSecretEditState:!1,form:{},rules:{liveSecret:[{required:!0,message:"必填项",trigger:"blur"}]}}),watch:{data:"setData"},props:{data:{type:Object,default:{}}},methods:{editKfSecret(){this.liveSecretEditState=!0,this.liveSecretCopy=JSON.parse(JSON.stringify(this.form.liveSecret)),this.form.liveSecret=""},cancelEditKfSecret(){this.liveSecretEditState=!1,this.form.liveSecret=JSON.parse(JSON.stringify(this.liveSecretCopy))},submitEditKfSecret(){this.form.liveSecret&&(this.$emit("submit",this.form),this.liveSecretEditState=!1)},submit(){this.$refs.form.validate((e=>{e&&this.$emit("submit",this.form)}))},setData(){Object.keys(this.data).length&&(this.form=this.data)}},mounted(){},created(){}},S=e=>(m("data-v-1762a3cf"),e=e(),p(),e),u={class:"g-card"},n=S((()=>s("div",{class:"my-title"},"企微直播",-1))),v=S((()=>s("div",{class:"tips"},"用于通过API管理直播，在企微后台->应用管理->直播中获取",-1)));const h=e(f,[["render",function(e,m,p,f,S,h){const y=t("el-input"),b=t("el-button"),E=t("el-form-item"),j=t("el-form");return i(),l("div",null,[a(j,{ref:"form","label-position":"right",model:S.form,rules:S.rules,"label-width":"130px"},{default:r((()=>[s("div",u,[n,a(E,{label:"直播Secret:",prop:"liveSecret"},{default:r((()=>[s("div",null,[a(y,{style:{width:"40%"},disabled:!S.liveSecretEditState,type:S.liveSecretEditState?"text":"password",modelValue:S.form.liveSecret,"onUpdate:modelValue":m[0]||(m[0]=e=>S.form.liveSecret=e),placeholder:"请输入直播Secret"},null,8,["disabled","type","modelValue"]),S.liveSecretEditState?(i(),o(b,{key:0,style:{"margin-left":"20px"},plain:"",onClick:h.cancelEditKfSecret},{default:r((()=>[d(" 取消 ")])),_:1},8,["onClick"])):c("",!0),S.liveSecretEditState?(i(),o(b,{key:1,type:"primary",plain:"",onClick:h.submitEditKfSecret},{default:r((()=>[d("保存")])),_:1},8,["onClick"])):c("",!0),S.liveSecretEditState?c("",!0):(i(),o(b,{key:2,type:"primary",style:{"margin-left":"20px"},plain:"",onClick:h.editKfSecret},{default:r((()=>[d(" 修改 ")])),_:1},8,["onClick"]))]),v])),_:1})])])),_:1},8,["model","rules"])])}],["__scopeId","data-v-1762a3cf"]]);export{h as default};