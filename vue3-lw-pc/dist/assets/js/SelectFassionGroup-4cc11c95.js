import{_ as e}from"./quill-image-resize-module-c051113e.js";import{ai as s,o as t,c as r,a as i,K as o,a9 as a,T as l,U as u,Y as m,Z as p,X as c,_ as n}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const d={name:"select-group",data:()=>({form:{weUserIds:"",weUserName:""},selectCustomerGroupList:[],dialogVisibleSelectCustomerGroup:!1,currentType:0}),props:{dataObj:{type:Object,default:null},isDetail:{type:Boolean,default:!1}},watch:{dataObj:{handler(e,s){e&&this.setData(e)},deep:!0,immediate:!0}},methods:{setData(e){if(!e)return this.currentType=0,void(this.form={weUserIds:"",weUserName:""});if(this.form=e,this.currentType=1,this.form.weUserIds){this.selectCustomerGroupList=[];let e=this.form.weUserIds.split(","),s={};e.forEach(((e,t)=>{s={userId:e,name:this.form.weUserName.split(",")[t]},this.selectCustomerGroupList.push(s)}))}},clearData(e){this.selectCustomerGroupList=[],this.form.weUserIds="",this.form.weUserName="",this.changeFn()},onSelectCustomerGroup(){this.dialogVisibleSelectCustomerGroup=!0},submitSelectCustomerGroup(e){this.selectCustomerGroupList=e,this.form.weUserIds=e.map((e=>e.userId)).join(","),this.form.weUserName=e.map((e=>e.name)).join(","),this.changeFn()},checkData(){return!!this.form.weUserIds||(this.msgError("请选择群主！"),!1)},changeFn(){this.$emit("update",this.form)}}},h={class:"item-magin aic"};const f=e(d,[["render",function(e,d,f,C,b,j){const G=s("el-tag"),U=s("el-button"),w=s("SelectUser");return t(),r("div",null,[i("div",h,[i("div",null,[(t(!0),r(o,null,a(b.selectCustomerGroupList,(e=>(t(),l(G,{key:e.userId},{default:u((()=>[m(p(e.name),1)])),_:2},1024)))),128))]),f.isDetail?c("",!0):(t(),l(U,{key:0,icon:"el-icon-plus",type:"primary",class:"mr10",plain:"",onClick:j.onSelectCustomerGroup},{default:u((()=>[m(" 选择群主 ")])),_:1},8,["onClick"]))]),n(w,{visible:b.dialogVisibleSelectCustomerGroup,"onUpdate:visible":d[0]||(d[0]=e=>b.dialogVisibleSelectCustomerGroup=e),title:"选择群主",defaultValues:b.selectCustomerGroupList,onSuccess:j.submitSelectCustomerGroup},null,8,["visible","defaultValues","onSuccess"])])}]]);export{f as default};