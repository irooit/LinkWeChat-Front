import{_ as e}from"../index-044285d2.js";import{i as t,n as i,m as s}from"./circle-2faa2a32.js";import{A as a}from"./AddMaterial-51d9aa5c.js";import o from"./FirendContent-fdd5a478.js";import{h as r}from"./moment-8163541f.js";import{g as l}from"./tag-13936295.js";import{g as m}from"./groupMessage-f31c8fd2.js";import{_ as d}from"./quill-image-resize-module-c051113e.js";import{aU as n,ai as p,o as c,c as u,_ as f,U as g,a as h,T,X as y,Y as j,Z as b,R as I,K as k,a9 as v,P as _,bl as x,bj as w}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./PreviewInPhone-9ed75a0f.js";import"./index-0bf429ac.js";import"./scriptCenter-9e8c6ca2.js";import"./modleCenter-5112f339.js";import"./DragTable-97e90e96.js";import"./sortablejs-b0ad9b27.js";import"./MessageContentForm-5a22ed37.js";import"./staff-48996164.js";import"./PicTitContent-8b500b6d.js";import"./PosterAdd-51b39872.js";import"./index-618cff16.js";import"./fabric-8da0df30.js";import"./poster-241340a9.js";import"./liveCodeTable-73b404a8.js";import"./group-16414119.js";import"./pullNews-68e01d94.js";import"./TemplateLibrary-f59d0076.js";import"./welcome-6ff4c53e.js";const E={name:"publish-detail",components:{AddMaterial:a,FirendContent:o,FriendCircleContent:n((()=>e((()=>import("./FriendCircleContent-7dc6f76c.js")),["assets/js/FriendCircleContent-7dc6f76c.js","assets/js/@vue-e400fd81.js","assets/js/quill-image-resize-module-c051113e.js","assets/js/quill-c6b3d2fb.js","assets/js/@babel-efd68da6.js","assets/js/to-fast-properties-1160b370.js","assets/js/quill-delta-a1872f89.js","assets/js/fast-diff-d5a53119.js","assets/js/lodash.clonedeep-1b6eefdc.js","assets/js/lodash.isequal-e7d08617.js","assets/js/@vueup-7cf8cfdd.js","assets/css/@vueup-da05906a.css","assets/css/quill-image-resize-module-44eb40f8.css","assets/css/FriendCircleContent-c4ec77dc.css"])))},data:()=>({pickerOptions:{disabledDate:e=>e.getTime()<Date.now()-864e5},form:{scopeType:0,sendType:0,customerNum:0,executeTime:"",executeEndTime:"",content:"",likeTagIds:[],commentTagIds:[],materialIds:[]},loading:!1,dialogVisibleSelectTag:!1,dialogVisibleSelectTag2:!1,likeTagList:[],commentTagList:[],rules:{name:[{required:!0,message:"请输入任务名称",trigger:"blur"}],sendType:[{required:!0,message:"请选择发送方式",trigger:"change"}],executeEndTime:[{type:"date",required:!0,message:"请选择结束时间",trigger:"change"}]},firendId:void 0,firendType:void 0,friendsList:[],baseData:{}}),mounted(){if(this.firendId=this.$route.query.id,this.firendType=+this.$route.query.type,this.firendId)this.getDetail(this.firendId);else{let e={scopeType:0};this.getNumMoments(e)}},methods:{getDetail(e){t(e).then((e=>{if(200===e.code){this.form=e.data,this.likeTagList=e.data.likeTagIds?e.data.likeTagIds:[],this.commentTagList=e.data.commentTagIds?e.data.commentTagIds:[],this.friendsList=e.data.materialList?e.data.materialList:[];let t={templateInfo:e.data.content?e.data.content:"",attachments:e.data.materialList?e.data.materialList:[]};this.baseData=JSON.parse(JSON.stringify(t)),this.setEditTag()}})).catch()},setEditTag(){this.likeTagList=[],this.commentTagList=[],this.form.likeTagIds&&this.form.likeTagIds.length&&l({groupTagType:1}).then((({rows:e})=>{this.form.likeTagIds.forEach((t=>{e.forEach((e=>{let i=e.weTags.findIndex((e=>e.tagId===t));void 0!==e.weTags[i]&&this.likeTagList.push(e.weTags[i])}))}))})),this.form.commentTagIds&&this.form.commentTagIds.length&&l({groupTagType:1}).then((({rows:e})=>{this.form.commentTagIds.forEach((t=>{e.forEach((e=>{let i=e.weTags.findIndex((e=>e.tagId===t));void 0!==e.weTags[i]&&this.commentTagList.push(e.weTags[i])}))}))}))},getNumMoments(e){2!=this.form.sendType?i(e).then((e=>{this.form.customerNum=e.data})).catch():this.form.customerNum=void 0},customerRangeFormChange(e){this.form.weCustomersQuery=e,1!=this.form.scopeType||this.firendId||(this.loading=!0,m(e,1).then((({data:e})=>{(null==e?void 0:e.length)?(this.form.senderList=e,this.getNumMoments(this.form)):(this.msgError("未找到可发送客户！"),this.loading=!1)})).catch((()=>{this.loading=!1})))},selectedFn(){this.dialogVisibleSelectTag=!0},selectedFn2(){this.dialogVisibleSelectTag2=!0},submitSelectTag(e){this.form.likeTagIds=[],e.forEach((e=>{this.form.likeTagIds.push(e.tagId)})),this.likeTagList=e},submitSelectTag2(e){this.form.commentTagIds=[],e.forEach((e=>{this.form.commentTagIds.push(e.tagId)})),this.commentTagList=e},onInsertMaterial(e){this.form.contentType=e,this.form.otherContent.push({annexType:e,annexUrl:"",contentError:""})},onRemoveMaterial(e){this.form.otherContent.splice(e,1),this.form.otherContent.length||(this.form.contentType="")},onBackStep(){this.$router.go(-1)},submit(e){2==this.form.sendType||this.form.customerNum?this.$refs.ruleForm.validate((t=>{if(!t)return!1;if(this.form.materialIds=[],e.attachments.forEach((e=>{this.form.materialIds.push(e.materialId)})),this.form.content=e.templateInfo,this.form.executeTime&&"string"!=typeof this.form.executeTime){let e=this.form.executeTime.getTime();if(Date.now()>e)return this.msgError("执行时间不可早于当前日期！"),!1;this.form.executeTime=r(this.form.executeTime).format("YYYY-MM-DD HH:mm")}if(this.form.executeEndTime&&"string"!=typeof this.form.executeEndTime){let e=this.form.executeEndTime.getTime();if(Date.now()>e)return this.msgError("结束时间不可早于当前日期！"),!1;this.form.executeEndTime=r(this.form.executeEndTime).format("YYYY-MM-DD HH:mm")}s(this.form).then((e=>{200===e.code&&(this.msgSuccess("操作成功"),this.$router.go(-1))}))})):this.msgError("未找到可发送客户！")},filPicType(e){let t=JSON.parse(JSON.stringify(e));t=t.split(".");let i=t[t.length-1];return"pdf"===i?window.lwConfig.DEFAULT_H5_PDF:["doc","docx"].includes(i)?window.lwConfig.DEFAULT_H5_WORDE:["ppt","pptx","pps","pptsx"].includes(i)?window.lwConfig.DEFAULT_H5_PPT:""}}},L=e=>(x("data-v-fae0f5ba"),e=e(),w(),e),D={class:"g-card"},C={key:0},V={class:"question"},S={key:0,class:"question-content"},F=L((()=>h("div",null,"员工可一键执行，但同一条朋友圈对相同客户仅会展示第一位成员发送的朋友圈",-1))),M={class:"question"},U={key:0,class:"question-content"},q=L((()=>h("div",null,"需要成员手动发送，但同一条朋友圈对相同客户会展示每个成员发送的朋友圈",-1))),Y={key:0,class:"customer-num"},N=L((()=>h("span",null,"朋友圈预计可见客户数（不去重）",-1))),P={key:0,class:"tips"},H={key:0,class:"tips"},A=L((()=>h("div",{class:"tips"},"可根据客户的点赞或评论行为分别打上对应标签",-1))),O=L((()=>h("div",null,"点赞自动打标签",-1))),R={key:0},z={key:1,class:"tips"},J={key:2},$=L((()=>h("div",{class:"mt10"},"评论自动打标签",-1))),B={key:3},G={key:4,class:"tips"},K={key:5},Q={key:1,class:"firend-box"};const Z=d(E,[["render",function(e,t,i,s,a,o){const r=p("el-input"),l=p("el-form-item"),m=p("el-popover"),d=p("el-radio"),n=p("el-radio-group"),x=p("CustomerRangeForm"),w=p("el-date-picker"),E=p("el-tag"),L=p("el-button"),Z=p("FirendContent"),W=p("AddMaterial"),X=p("el-form"),ee=p("SelectTag");return c(),u("div",null,[f(X,{class:_(a.firendId&&"formDetail"),disabled:!!a.firendId,"label-width":"110px","label-position":"right",model:a.form,rules:a.rules,ref:"ruleForm"},{default:g((()=>[h("div",D,[[2,3].includes(a.firendType)?y("",!0):(c(),T(l,{key:0,label:"任务名称",prop:"name"},{default:g((()=>[f(r,{modelValue:a.form.name,"onUpdate:modelValue":t[0]||(t[0]=e=>a.form.name=e),placeholder:"请输入任务名称",maxlength:"20","show-word-limit":""},null,8,["modelValue"])])),_:1})),f(l,{label:"发送方式",prop:"sendType"},{default:g((()=>[3===a.firendType?(c(),u("span",C,"个人发送")):(c(),T(n,{key:1,modelValue:a.form.sendType,"onUpdate:modelValue":t[1]||(t[1]=e=>a.form.sendType=e)},{default:g((()=>[f(d,{label:0},{default:g((()=>[j(" 企微群发 "),f(m,{placement:"top",trigger:"hover"},{reference:g((()=>[h("div",V,[a.firendId?y("",!0):(c(),u("div",S,"?"))])])),default:g((()=>[F])),_:1})])),_:1}),f(d,{label:2},{default:g((()=>[j(" 成员群发 "),f(m,{placement:"top",trigger:"hover"},{reference:g((()=>[h("div",M,[a.firendId?y("",!0):(c(),u("div",U,"?"))])])),default:g((()=>[q])),_:1})])),_:1})])),_:1},8,["modelValue"]))])),_:1}),f(l,{label:"发送范围",required:""},{default:g((()=>[f(n,{modelValue:a.form.scopeType,"onUpdate:modelValue":t[2]||(t[2]=e=>a.form.scopeType=e),onChange:t[3]||(t[3]=e=>0==e&&o.getNumMoments(a.form))},{default:g((()=>[f(d,{label:0},{default:g((()=>[j("全部客户")])),_:1}),f(d,{label:1},{default:g((()=>[j("按条件筛选")])),_:1})])),_:1},8,["modelValue"]),2!=a.form.sendType?(c(),u("div",Y,[N,h("span",null,b(a.form.customerNum),1)])):y("",!0),1==a.form.scopeType?(c(),T(x,{key:1,class:"mt15",isTrans:"",data:a.form.weCustomersQuery,"onUpdate:data":o.customerRangeFormChange,isDetail:!!a.firendId,disabled:!!a.firendId},null,8,["data","onUpdate:data","isDetail","disabled"])):y("",!0)])),_:1}),f(l,{label:"执行时间"},{default:g((()=>[a.firendId?y("",!0):(c(),u("div",P," 可自由设定该朋友圈任务下发通知的开始时间，如未设置则默认创建时间即开始执行时间 ")),f(w,I({modelValue:a.form.executeTime,"onUpdate:modelValue":t[4]||(t[4]=e=>a.form.executeTime=e),type:"datetime",placeholder:"选择年月日时分",format:"YYYY-MM-DD HH:mm"},a.pickerOptions),null,16,["modelValue"])])),_:1}),[2,3].includes(a.firendType)?y("",!0):(c(),T(l,{key:1,label:"结束时间",prop:"executeEndTime"},{default:g((()=>[a.firendId?y("",!0):(c(),u("div",H,"朋友圈任务可设置截止时间，则未完成的成员不允许再执行本条任务")),f(w,I({modelValue:a.form.executeEndTime,"onUpdate:modelValue":t[5]||(t[5]=e=>a.form.executeEndTime=e),type:"datetime",placeholder:"选择年月日时分",format:"YYYY-MM-DD HH:mm"},a.pickerOptions),null,16,["modelValue"])])),_:1})),[0].includes(a.form.sendType)?(c(),T(l,{key:2,label:"自动标签"},{default:g((()=>[A,O,a.likeTagList.length?(c(),u("div",R,[(c(!0),u(k,null,v(a.likeTagList,((e,t)=>(c(),T(E,{sizi:"mini",key:t},{default:g((()=>[j(b(e.name),1)])),_:2},1024)))),128))])):y("",!0),!a.likeTagList.length&&a.firendId?(c(),u("div",z,"未选择标签")):y("",!0),a.firendId?y("",!0):(c(),u("div",J,[f(L,{type:"primary",plain:"",onClick:o.selectedFn},{default:g((()=>[j("选择标签")])),_:1},8,["onClick"])])),$,a.commentTagList.length?(c(),u("div",B,[(c(!0),u(k,null,v(a.commentTagList,((e,t)=>(c(),T(E,{sizi:"mini",key:t},{default:g((()=>[j(b(e.name),1)])),_:2},1024)))),128))])):y("",!0),!a.commentTagList.length&&a.firendId?(c(),u("div",G,"未选择标签")):y("",!0),a.firendId?y("",!0):(c(),u("div",K,[f(L,{type:"primary",plain:"",onClick:o.selectedFn2},{default:g((()=>[j("选择标签")])),_:1},8,["onClick"])]))])),_:1})):y("",!0),[1,2,3].includes(a.firendType)?(c(),T(l,{key:3,label:"朋友圈内容"},{default:g((()=>[1===a.firendType?(c(),T(r,{key:0,modelValue:a.form.content,"onUpdate:modelValue":t[6]||(t[6]=e=>a.form.content=e),placeholder:"未填写文本内容",disabled:!0,type:"textarea",rows:4},null,8,["modelValue"])):(c(),u("div",Q,[f(Z,{list:a.friendsList,content:a.form.content},null,8,["list","content"])]))])),_:1})):y("",!0)]),!a.firendId||a.firendId&&1===a.firendType?(c(),T(W,{key:0,moduleType:4,onUpdate:o.onBackStep,onSubmit:o.submit,otherType:3,showPhone:!1,detail:void 0!==a.firendId,baseData:a.baseData},null,8,["onUpdate","onSubmit","detail","baseData"])):y("",!0)])),_:1},8,["class","disabled","model","rules"]),f(ee,{visible:a.dialogVisibleSelectTag,"onUpdate:visible":t[7]||(t[7]=e=>a.dialogVisibleSelectTag=e),selected:a.likeTagList,onSuccess:o.submitSelectTag},null,8,["visible","selected","onSuccess"]),f(ee,{visible:a.dialogVisibleSelectTag2,"onUpdate:visible":t[8]||(t[8]=e=>a.dialogVisibleSelectTag2=e),selected:a.commentTagList,onSuccess:o.submitSelectTag2},null,8,["visible","selected","onSuccess"])])}],["__scopeId","data-v-fae0f5ba"]]);export{Z as default};
