import{_ as e}from"./quill-image-resize-module-c051113e.js";import{ai as t,o as r,c as l,_ as o,U as a,a as i,T as s,Y as d,X as p,bl as c,bj as m}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const u={name:"enterprise-wechat-part1",data:()=>({corpSecretCopy:"",corpSecretEditState:!1,form:{},rules:{corpId:[{required:!0,message:"必填项",trigger:"blur"}],corpSecret:[{required:!0,message:"必填项",trigger:"blur"}],companyName:[{required:!0,message:"必填项",trigger:"blur"}],logoUrl:[{required:!0,message:"必填项",trigger:"blur"}],token:[{required:!0,message:"必填项",trigger:"blur"}],encodingAesKey:[{required:!0,message:"必填项",trigger:"blur"}]}}),watch:{data:"setData"},props:{data:{type:Object,default:{}}},methods:{editCorpSecret(){this.corpSecretEditState=!0,this.corpSecretCopy=JSON.parse(JSON.stringify(this.form.corpSecret)),this.form.corpSecret=""},cancelEditCorpSecret(){this.corpSecretEditState=!1,this.form.corpSecret=JSON.parse(JSON.stringify(this.corpSecretCopy))},submitEditCorpSecret(){this.form.corpSecret&&(this.$emit("submit",this.form),this.corpSecretEditState=!1)},submit(){this.$refs.form.validate((e=>{e&&this.$emit("submit",this.form)}))},setData(){Object.keys(this.data).length&&(this.form=this.data)}},mounted(){},created(){}},n=e=>(c("data-v-9e0e4d89"),e=e(),m(),e),f={class:"g-card"},S=n((()=>i("div",{class:"my-title"},"企业配置",-1))),g=n((()=>i("div",{class:"tips"},"企业ID即CorpID，在企微后台->我的企业中获取",-1))),y=n((()=>i("div",{class:"tips"},"建议大小 2M 以内，仅支持 png/jpg 等图片类型",-1))),h={class:"g-card"},b=n((()=>i("div",{class:"my-title"},"通讯录配置",-1))),E=n((()=>i("div",{class:"tips"},"用于同步企微通讯录，在企微后台->管理工具->通讯录同步中获取",-1))),k={class:"g-card"},v=n((()=>i("div",{class:"my-title"},"回调配置",-1)));const C=e(u,[["render",function(e,c,m,u,n,C){const V=t("el-input"),j=t("el-form-item"),U=t("upload"),_=t("el-button"),q=t("el-form");return r(),l("div",null,[o(q,{ref:"form","label-position":"right",model:n.form,rules:n.rules,"label-width":"130px"},{default:a((()=>[i("div",f,[S,o(j,{label:"企业ID:",prop:"corpId"},{default:a((()=>[o(V,{style:{width:"40%"},modelValue:n.form.corpId,"onUpdate:modelValue":c[0]||(c[0]=e=>n.form.corpId=e),placeholder:""},null,8,["modelValue"]),g])),_:1}),o(j,{label:"企业名称:",prop:"companyName",required:""},{default:a((()=>[o(V,{style:{width:"40%"},modelValue:n.form.companyName,"onUpdate:modelValue":c[1]||(c[1]=e=>n.form.companyName=e),placeholder:"企业名称"},null,8,["modelValue"])])),_:1}),o(j,{label:"企业logo",required:"",prop:"logoUrl"},{default:a((()=>[o(U,{class:"image-uploader",fileUrl:n.form.logoUrl,"onUpdate:fileUrl":c[2]||(c[2]=e=>n.form.logoUrl=e),type:"0"},null,8,["fileUrl"]),y])),_:1})]),i("div",h,[b,o(j,{label:"通讯录Secret:",prop:"corpSecret"},{default:a((()=>[i("div",null,[o(V,{disabled:!n.corpSecretEditState,style:{width:"40%"},type:n.corpSecretEditState?"text":"password",modelValue:n.form.corpSecret,"onUpdate:modelValue":c[3]||(c[3]=e=>n.form.corpSecret=e),placeholder:"请输入通讯录Secret"},null,8,["disabled","type","modelValue"]),n.corpSecretEditState?(r(),s(_,{key:0,style:{"margin-left":"20px"},plain:"",onClick:C.cancelEditCorpSecret},{default:a((()=>[d(" 取消 ")])),_:1},8,["onClick"])):p("",!0),n.corpSecretEditState?(r(),s(_,{key:1,type:"primary",plain:"",onClick:C.submitEditCorpSecret},{default:a((()=>[d("保存")])),_:1},8,["onClick"])):p("",!0),n.corpSecretEditState?p("",!0):(r(),s(_,{key:2,type:"primary",style:{"margin-left":"20px"},plain:"",onClick:C.editCorpSecret},{default:a((()=>[d(" 修改 ")])),_:1},8,["onClick"]))]),E])),_:1})]),i("div",k,[v,o(j,{label:"Token:",prop:"token"},{default:a((()=>[o(V,{style:{width:"40%"},modelValue:n.form.token,"onUpdate:modelValue":c[4]||(c[4]=e=>n.form.token=e),placeholder:"请输入Token"},null,8,["modelValue"])])),_:1}),o(j,{label:"EncodingAESKey:",prop:"encodingAesKey"},{default:a((()=>[o(V,{style:{width:"40%"},modelValue:n.form.encodingAesKey,"onUpdate:modelValue":c[5]||(c[5]=e=>n.form.encodingAesKey=e),placeholder:"请输入EncodingAESKey"},null,8,["modelValue"])])),_:1})])])),_:1},8,["model","rules"])])}],["__scopeId","data-v-9e0e4d89"]]);export{C as default};