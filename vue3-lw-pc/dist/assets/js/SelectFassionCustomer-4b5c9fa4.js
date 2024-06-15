import{g as e}from"./businessConver-2b86f97c.js";import{_ as s}from"./quill-image-resize-module-c051113e.js";import{ai as t,o as a,c as i,_ as l,U as r,Y as o,T as m,a as d,Z as n,X as c,K as u,a9 as p,bl as g,bj as h}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const f={name:"select-customer",components:{},props:{isDetail:{type:Boolean,default:!1},dataObj:{type:Object,default:null},title:{type:String,default:"选择老客"}},watch:{dataObj:{handler(e,s){e&&this.setData(e)},deep:!0,immediate:!0}},data:()=>({stageList:[],form:{weUserIds:"",weUserName:"",gender:null,tagIds:"",tagNames:"",beginTime:"",endTime:"",trackState:null},dialogVisibleSelectUser:!1,dialogVisibleSelectTag:!1,selectedUserList:[],selectedTagList:[],rangeTime:[],currentType:0}),methods:{setData(e){if(!e)return this.currentType=0,void(this.form={weUserIds:"",weUserName:"",gender:null,tagIds:"",tagNames:"",beginTime:"",endTime:"",trackState:null});if(this.form=e,this.currentType=1,this.form.tagIds){this.selectedTagList=[];let e=this.form.tagIds.split(","),s={};e.forEach(((e,t)=>{s={tagId:e,name:this.form.tagNames.split(",")[t]},this.selectedTagList.push(s)}))}if(this.form.weUserIds){this.selectedUserList=[];let e=this.form.weUserIds.split(","),s={};e.forEach(((e,t)=>{s={userId:e,name:this.form.weUserName.split(",")[t]},this.selectedUserList.push(s)}))}this.form.beginTime&&this.form.endTime&&(this.rangeTime=[this.form.beginTime,this.form.endTime])},getStage(){e().then((e=>{this.stageList=e.data}))},onSelectUser(){this.dialogVisibleSelectUser=!0},onSelectTag(){this.dialogVisibleSelectTag=!0},clearData(e){this.form={weUserIds:"",weUserName:"",gender:null,tagIds:"",tagNames:"",beginTime:"",endTime:"",trackState:null},this.selectedUserList=[],this.selectedTagList=[],this.rangeTime=[],this.changeFn()},setDateChange(e){e&&e[0]?this.form.beginTime=e[0]:this.form.beginTime="",e&&e[1]?this.form.endTime=e[1]:this.form.endTime="",this.changeFn()},submitSelectTag(e){this.selectedTagList=e,this.form.tagIds=e.map((e=>e.tagId)).join(","),this.form.tagNames=e.map((e=>e.name)).join(","),this.changeFn()},selectedUser(e){this.selectedUserList=e,this.form.weUserIds=e.map((e=>e.userId)).join(","),this.form.weUserName=e.map((e=>e.name)).join(","),this.changeFn()},changeFn(){this.$emit("update",1==this.currentType?this.form:null)}},created(){this.getStage()}},b=e=>(g("data-v-ef09ca70"),e=e(),h(),e),j={class:"item-magin aic"},T=b((()=>d("div",{class:"item-name"}," 添加人 ",-1))),v={class:"item-magin"},U=b((()=>d("div",{class:"item-name"},"发送性别",-1))),y={class:"item-magin"},S=b((()=>d("div",{class:"item-name"}," 添加时间 ",-1))),V={class:"item-magin aic"},I=b((()=>d("div",{class:"item-name"},"客户标签",-1))),L={class:"item-magin"},k=b((()=>d("div",{class:"item-name"},"商机阶段",-1)));const w=s(f,[["render",function(e,s,g,h,f,b){const w=t("el-radio"),D=t("el-radio-group"),_=t("el-form-item"),C=t("el-button"),N=t("el-tag"),F=t("el-option"),q=t("el-select"),O=t("el-date-picker"),Y=t("SelectUser"),z=t("SelectTag");return a(),i("div",null,[l(_,{label:g.title,required:""},{default:r((()=>[l(D,{modelValue:f.currentType,"onUpdate:modelValue":s[0]||(s[0]=e=>f.currentType=e),onChange:b.clearData,disabled:g.isDetail},{default:r((()=>[l(w,{label:0},{default:r((()=>[o("全部客户")])),_:1}),l(w,{label:1},{default:r((()=>[o("部分客户")])),_:1})])),_:1},8,["modelValue","onChange","disabled"])])),_:1},8,["label"]),1==f.currentType?(a(),m(_,{key:0},{default:r((()=>[d("div",null,[d("div",j,[T,g.isDetail?c("",!0):(a(),m(C,{key:0,class:"mr10",icon:"el-icon-plus",type:"primary",plain:"",onClick:s[1]||(s[1]=e=>b.onSelectUser(2))},{default:r((()=>[o(n(f.form.weUserIds?"编辑":"选择")+"添加人 ",1)])),_:1})),(a(!0),i(u,null,p(f.selectedUserList,(e=>(a(),m(N,{key:e.userId},{default:r((()=>[o(n(e.name),1)])),_:2},1024)))),128))]),d("div",v,[U,l(q,{modelValue:f.form.gender,"onUpdate:modelValue":s[2]||(s[2]=e=>f.form.gender=e),onChange:s[3]||(s[3]=e=>b.changeFn()),disabled:g.isDetail},{default:r((()=>[l(F,{label:"全部",value:null}),l(F,{label:"未知",value:0}),l(F,{label:"男性",value:1}),l(F,{label:"女性",value:2})])),_:1},8,["modelValue","disabled"])]),d("div",y,[S,l(O,{disabled:g.isDetail,"value-format":"YYYY-MM-DD",modelValue:f.rangeTime,"onUpdate:modelValue":s[4]||(s[4]=e=>f.rangeTime=e),onChange:b.setDateChange,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["disabled","modelValue","onChange"])]),d("div",V,[I,g.isDetail?c("",!0):(a(),m(C,{key:0,class:"mr10",icon:"el-icon-plus",type:"primary",plain:"",onClick:b.onSelectTag},{default:r((()=>[o(n(f.form.tagIds?"编辑":"选择")+"标签 ",1)])),_:1},8,["onClick"])),(a(!0),i(u,null,p(f.selectedTagList,(e=>(a(),m(N,{key:e.tagId},{default:r((()=>[o(n(e.name),1)])),_:2},1024)))),128))]),d("div",L,[k,l(q,{modelValue:f.form.trackState,"onUpdate:modelValue":s[5]||(s[5]=e=>f.form.trackState=e),onChange:s[6]||(s[6]=e=>b.changeFn()),disabled:g.isDetail},{default:r((()=>[l(F,{label:"全部",value:null}),(a(!0),i(u,null,p(f.stageList,((e,s)=>(a(),m(F,{key:s,label:e.stageKey,value:e.stageVal},null,8,["label","value"])))),128))])),_:1},8,["modelValue","disabled"])])])])),_:1})):c("",!0),l(Y,{visible:f.dialogVisibleSelectUser,"onUpdate:visible":s[7]||(s[7]=e=>f.dialogVisibleSelectUser=e),title:"选择添加人",destroyOnClose:"",defaultValues:f.selectedUserList,onSuccess:b.selectedUser},null,8,["visible","defaultValues","onSuccess"]),l(z,{visible:f.dialogVisibleSelectTag,"onUpdate:visible":s[8]||(s[8]=e=>f.dialogVisibleSelectTag=e),title:"选择标签",selected:f.selectedTagList,onSuccess:b.submitSelectTag},null,8,["visible","selected","onSuccess"])])}],["__scopeId","data-v-ef09ca70"]]);export{w as default};