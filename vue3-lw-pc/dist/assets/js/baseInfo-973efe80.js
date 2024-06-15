import{_ as e}from"../index-044285d2.js";import{u as t,b as s}from"./group-16414119.js";import o from"./SelectGroup-e6b2682d.js";import{_ as a}from"./quill-image-resize-module-c051113e.js";import{aU as i,ai as l,o as r,c as m,a as d,_ as u,U as p,T as f,Y as n,X as c,K as h,P as g,bl as j,bj as b}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./group-e56f61ac.js";const v={props:{groupCodeId:{type:String,default:""}},components:{SelectGroup:o,CodeLink:i((()=>e((()=>import("./CodeLink-a163edad.js")),["assets/js/CodeLink-a163edad.js","assets/js/@vue-e400fd81.js"])))},data:()=>({showSelectTag:!1,form:{activityName:"",autoCreateRoom:0,chatIdList:"",roomBaseId:1,tagIds:"",roomBaseName:""},headImage:null,rules:{activityName:[{required:!0,message:"请输入活码名称",trigger:"blur"}],chatIdList:[{required:!0,message:"请添加活码客群",trigger:"blur"}],roomBaseName:[{required:!0,message:"请输入群名前缀",trigger:"blur"}],roomBaseId:[{required:!0,message:"请输入群起始序号",trigger:"blur"}]},showSelectModal:!1,groupList:[],tagList:[]}),computed:{isDetail(){return this.$route.path.endsWith("detail")}},created(){this.getGroupDetail(this.$route.query.id)},methods:{selectGroupFn(){this.showSelectModal=!0},setSelectData(e){e&&e.length&&(this.groupList=e,this.form.chatIdList=this.groupList.map((e=>e.chatId)).join(","))},async handleValidateFn(){return this.$refs.form.validate()},getSelectTag(e){this.tagList=e,this.form.tagIds=this.tagList.map((e=>e.tagId)).join(","),this.form.tags=this.tagList.map((e=>e.name)).join(",")},submit(){this.$refs.form.validate((e=>{e&&(this.$store.loading=!0,(this.form.id?t:s)(this.form).then((e=>{this.$router.back()})).finally((()=>{this.$store.loading=!1})))}))},update(){this.$refs.form.validate((e=>{e&&t(this.form).then((e=>{200===e.code?this.$emit("next",this.groupCodeId,e.data):433===e.code?(this.$refs.form.fields[0].validateMessage=e.msg,this.$refs.form.fields[0].validateState="error",this.$emit("next")):this.$emit("next")}))}))},getGroupDetail(e){e&&(this.form=JSON.parse(decodeURIComponent(this.$route.query.obj))),this.form.qrCode=this.form.codeUrl,this.form.name=this.form.activityName;let t=[],s=this.form.tags?this.form.tags.split(","):[];(this.form.tagIds?this.form.tagIds.split(","):[]).forEach(((e,o)=>{let a={name:s[o],tagId:e};t.push(a)})),this.tagList=t;let o=[],a=this.form.groupNames?this.form.groupNames.split(","):[];(this.form.chatIdList?this.form.chatIdList.split(","):[]).forEach(((e,t)=>{let s={groupName:a[t],chatId:e};o.push(s)})),this.groupList=o}}},y=e=>(j("data-v-18fbc44b"),e=e(),b(),e),I={class:"flex"},L={class:"g-card fxauto"},S=y((()=>d("div",{class:"sub-des"},"最多选择五个客群",-1))),k=y((()=>d("div",{class:"sub-des"},"通过此群活码进群的客户自动打上标签",-1))),_=y((()=>d("div",{class:"sub-des"},"默认以第一个群的群主作为新建群的群主",-1))),C={key:0,class:"fxnone g-margin-l"},w={key:0,class:"g-footer-sticky"};const N=a(v,[["render",function(e,t,s,o,a,i){const j=l("el-input"),b=l("el-tag"),v=l("el-form-item"),y=l("el-button"),N=l("SelectGroup"),V=l("TagEllipsis"),$=l("SelectTag"),x=l("el-switch"),D=l("el-input-number"),q=l("el-form"),T=l("CodeLink");return r(),m(h,null,[d("div",I,[d("div",L,[u(q,{model:a.form,rules:a.rules,ref:"form","label-width":"140px",class:g(i.isDetail&&"form-detail"),disabled:i.isDetail},{default:p((()=>[u(v,{label:"活码名称:",prop:"activityName"},{default:p((()=>[u(j,{modelValue:a.form.activityName,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.activityName=e),placeholder:"请输入名称","show-word-limit":"",maxlength:"15"},null,8,["modelValue"]),i.isDetail?(r(),f(b,{key:0,class:"fr cp",size:"large",effect:"dark",onClick:t[1]||(t[1]=t=>e.$router.push({path:"add",query:{id:a.form.id,obj:encodeURIComponent(JSON.stringify(a.form))}}))},{default:p((()=>[n(" 编辑 ")])),_:1})):c("",!0)])),_:1}),u(v,{label:"活码客群:",prop:"chatIdList"},{default:p((()=>[i.isDetail?c("",!0):(r(),m(h,{key:0},[u(y,{type:"primary",onClick:i.selectGroupFn},{default:p((()=>[n("选择客群")])),_:1},8,["onClick"]),u(N,{visible:a.showSelectModal,"onUpdate:visible":t[2]||(t[2]=e=>a.showSelectModal=e),defaults:a.groupList,onSubmit:i.setSelectData},null,8,["visible","defaults","onSubmit"]),S],64)),u(V,{list:a.groupList,limit:"10",defaultProps:"groupName",emptyText:""},null,8,["list"])])),_:1}),u(v,{label:"入群标签:",prop:"tagIds"},{default:p((()=>[i.isDetail?c("",!0):(r(),m(h,{key:0},[u(y,{type:"primary",onClick:t[3]||(t[3]=e=>a.showSelectTag=!0)},{default:p((()=>[n("选择标签")])),_:1}),u($,{visible:a.showSelectTag,"onUpdate:visible":t[4]||(t[4]=e=>a.showSelectTag=e),type:"1",defaultValues:a.tagList,onSuccess:i.getSelectTag},null,8,["visible","defaultValues","onSuccess"]),k],64)),u(V,{list:a.tagList,limit:"10",emptyText:""},null,8,["list"])])),_:1}),u(v,{label:"群满是否自动建群:"},{default:p((()=>[u(x,{modelValue:a.form.autoCreateRoom,"onUpdate:modelValue":t[5]||(t[5]=e=>a.form.autoCreateRoom=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),_])),_:1}),a.form.autoCreateRoom?(r(),m(h,{key:0},[u(v,{label:"群名前缀:",prop:"roomBaseName"},{default:p((()=>[u(j,{"show-word-limit":"",maxlength:"20",modelValue:a.form.roomBaseName,"onUpdate:modelValue":t[6]||(t[6]=e=>a.form.roomBaseName=e),placeholder:"请输入群名前缀"},null,8,["modelValue"])])),_:1}),u(v,{label:"群起始序号:",prop:"roomBaseId"},{default:p((()=>[u(D,{modelValue:a.form.roomBaseId,"onUpdate:modelValue":t[7]||(t[7]=e=>a.form.roomBaseId=e),"controls-position":"right",min:1},null,8,["modelValue"])])),_:1})],64)):c("",!0)])),_:1},8,["model","rules","class","disabled"])]),i.isDetail?(r(),m("div",C,[u(T,{data:a.form},null,8,["data"])])):c("",!0)]),i.isDetail?c("",!0):(r(),m("div",w,[u(y,{onClick:t[8]||(t[8]=t=>e.$router.back())},{default:p((()=>[n("取消")])),_:1}),u(y,{type:"primary",onClick:i.submit},{default:p((()=>[n("确定")])),_:1},8,["onClick"])]))],64)}],["__scopeId","data-v-18fbc44b"]]);export{N as default};
