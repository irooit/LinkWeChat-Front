import{_ as e}from"./quill-image-resize-module-c051113e.js";import{ai as l,o,T as a,U as t,a as s,_ as r}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const d={name:"",props:{data:{type:Object,default:{}}},components:{},data:()=>({form:{},rules:{}}),computed:{},watch:{data:{deep:!0,immediate:!0,handler(e,l){Object.keys(e).length&&(this.form=e)}}},created(){},mounted(){},methods:{submit(){return this.$refs.form.validate().then((()=>this.form))}}},p={class:"g-card"},i=s("div",{class:"g-card-title"},"AI 大模型",-1),m=s("div",{class:"g-tip"},"选择后需要点击下方保存配置按钮后生效",-1),u={class:"g-card"},c=s("div",{class:"g-card-title"},"腾讯混元大模型",-1),n=s("div",{class:"g-tip"},"腾讯云后台 -> 账号中心 -> 账号信息中获取",-1),f=s("div",{class:"g-tip"},"腾讯云后台 -> 访问管理 -> 访问密钥 -> API 密钥管理中获取",-1),h=s("div",{class:"g-tip"},"腾讯云后台 -> 访问管理 -> 访问密钥 -> API 密钥管理中获取",-1);const g=e(d,[["render",function(e,d,g,I,b,j){const V=l("el-input"),v=l("el-form-item"),A=l("el-form");return o(),a(A,{ref:"form","label-position":"right",model:b.form,rules:b.rules,"label-width":"180px"},{default:t((()=>[s("div",p,[i,r(v,{label:"小程序原始ID:",prop:"wxAppletOriginalId"},{default:t((()=>[r(V,{modelValue:b.form.wxAppletOriginalId,"onUpdate:modelValue":d[0]||(d[0]=e=>b.form.wxAppletOriginalId=e),placeholder:"请输入小程序原始ID"},null,8,["modelValue"]),m])),_:1})]),s("div",u,[c,r(v,{label:"APPID:",prop:"shopAppId"},{default:t((()=>[r(V,{modelValue:b.form.shopAppId,"onUpdate:modelValue":d[1]||(d[1]=e=>b.form.shopAppId=e),placeholder:"请输入APPID"},null,8,["modelValue"]),n])),_:1}),r(v,{label:"SecretID:",prop:"shopSecret"},{default:t((()=>[r(V,{modelValue:b.form.shopSecret,"onUpdate:modelValue":d[2]||(d[2]=e=>b.form.shopSecret=e),placeholder:"请输入SecretID"},null,8,["modelValue"]),f])),_:1}),r(v,{label:"SecretKey:",prop:"shopMaEnsodingeskey"},{default:t((()=>[r(V,{modelValue:b.form.shopMaEnsodingeskey,"onUpdate:modelValue":d[3]||(d[3]=e=>b.form.shopMaEnsodingeskey=e),placeholder:"请输入SecretKey"},null,8,["modelValue"]),h])),_:1})])])),_:1},8,["model","rules"])}]]);export{g as default};
