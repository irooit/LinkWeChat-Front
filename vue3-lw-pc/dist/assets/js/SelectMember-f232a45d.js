import{b as e,a as t}from"./organization-9bed3593.js";import s from"./SelectDept-7a07b4de.js";import i from"./SelectPost-d0ccd09d.js";import{_ as l}from"./quill-image-resize-module-c051113e.js";import{ai as o,o as r,c as d,a,_ as c,K as n,a9 as p,T as m,U as u,Y as h,Z as f,X as g,bl as D,bj as U}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const j={name:"select-member",components:{SelectDept:s,SelectPost:i},props:{initData:{type:Object,default:{executeUserCondit:{change:!1,weUserIds:[]},executeDeptCondit:{change:!1,deptIds:[],posts:[]}}}},data:()=>({selectMember:!1,selectDept:!1,selectedUserList:[],dialogVisibleSelectUser:!1,selectedDeptList:[],dialogVisibleSelectDept:!1,dialogVisibleSelectPost:!1,selectedPostList:[],form:{executeUserCondit:{change:!1,weUserIds:[]},executeDeptCondit:{change:!1,deptIds:[],posts:[]}}}),methods:{validateFn(){return this.form.executeUserCondit.change||this.form.executeDeptCondit.change?!this.form.executeUserCondit.change||this.form.executeUserCondit.weUserIds&&this.form.executeUserCondit.weUserIds.length?!(this.form.executeDeptCondit.change&&!this.form.executeDeptCondit.posts.length&&!this.form.executeDeptCondit.deptIds.length)||(this.msgError("请选择部门范围与岗位！"),!1):(this.msgError("请选择成员！"),!1):(this.msgError("请选择执行成员！"),!1)},selectedPost(e){this.selectedPostList=e,this.form.executeDeptCondit.posts=e,this.changeFn()},selectedUser(e){this.selectedUserList=e,this.form.executeUserCondit.weUserIds=e.map((e=>e.userId)),this.changeFn()},selectedDept(e){this.selectedDeptList=e,this.form.executeDeptCondit.deptIds=e.map((e=>e.deptId)),this.changeFn()},clearUserData(e){e||(this.selectedUserList=[],this.form.executeUserCondit.weUserIds=[],this.changeFn())},clearDeptsData(e){e||(this.selectedDeptList=[],this.form.executeDeptCondit.deptIds=[],this.selectedPostList=[],this.form.executeDeptCondit.posts=[],this.changeFn())},changeFn(){this.$emit("update",this.form)},setEditUser(){this.form.executeUserCondit.weUserIds&&(this.selectedUserList=[],e().then((({data:e})=>{this.form.executeUserCondit.weUserIds.forEach((t=>{let s=e.findIndex((e=>e.weUserId===t));-1!=s&&(e[s].userId=t,e[s].name=e[s].userName,this.selectedUserList.push(e[s]))}))})))},setEditDept(){this.form.executeDeptCondit.deptIds.length&&(this.selectedDeptList=[],t().then((({data:e})=>{this.form.executeDeptCondit.deptIds.forEach((t=>{let s=e.findIndex((e=>e.deptId===t));this.selectedDeptList.push(e[s])}))}))),this.form.executeDeptCondit.posts.length&&(this.selectedPostList=this.form.executeDeptCondit.posts)}},created(){this.initData&&(this.form=JSON.parse(JSON.stringify(this.initData)),this.form&&this.form.executeUserCondit.change&&this.setEditUser(),this.form&&this.form.executeDeptCondit.change&&this.setEditDept())}},C={class:"select_content"},x={key:0,class:"select_unit"},b={key:0},v=(e=>(D("data-v-55955691"),e=e(),U(),e))((()=>a("div",null,"可根据地域行政管理规划/组织架构部门，与岗位的组合条件来筛选执行成员。",-1))),L={key:0,class:"select_unit"},S={key:0},I={key:1,class:"select_unit"},V={key:0};const y=l(j,[["render",function(e,t,s,i,l,D){const U=o("el-checkbox"),j=o("el-tag"),y=o("el-button"),P=o("el-icon-QuestionFilled"),k=o("el-popover"),_=o("SelectDept"),w=o("SelectPost"),E=o("SelectUser");return r(),d("div",C,[a("div",null,[c(U,{modelValue:l.form.executeUserCondit.change,"onUpdate:modelValue":t[0]||(t[0]=e=>l.form.executeUserCondit.change=e),onChange:D.clearUserData,label:"选择成员"},null,8,["modelValue","onChange"]),l.form.executeUserCondit.change?(r(),d("div",x,[l.selectedUserList.length>0?(r(),d("div",b,[(r(!0),d(n,null,p(l.selectedUserList,((e,t)=>(r(),m(j,{key:t},{default:u((()=>[h(f(e.name),1)])),_:2},1024)))),128))])):g("",!0),c(y,{icon:"el-icon-plus",type:"primary",plain:"",onClick:t[1]||(t[1]=e=>l.dialogVisibleSelectUser=!0)},{default:u((()=>[h(f(l.selectedUserList.length?"修改":"选择")+"员工 ",1)])),_:1})])):g("",!0)]),a("div",null,[c(U,{modelValue:l.form.executeDeptCondit.change,"onUpdate:modelValue":t[2]||(t[2]=e=>l.form.executeDeptCondit.change=e),onChange:D.clearDeptsData,label:"选择部门范围与岗位"},null,8,["modelValue","onChange"]),c(k,{placement:"top",trigger:"hover"},{reference:u((()=>[c(P,{class:"el-icon-QuestionFilled ml5"})])),default:u((()=>[v])),_:1}),l.form.executeDeptCondit.change?(r(),d("div",L,[l.selectedDeptList.length>0?(r(),d("div",S,[(r(!0),d(n,null,p(l.selectedDeptList,((e,t)=>(r(),m(j,{key:t},{default:u((()=>[h(f(e.deptName),1)])),_:2},1024)))),128))])):g("",!0),c(y,{icon:"el-icon-plus",type:"primary",plain:"",onClick:t[3]||(t[3]=e=>l.dialogVisibleSelectDept=!0)},{default:u((()=>[h(f(l.selectedDeptList.length?"修改":"选择")+"部门 ",1)])),_:1})])):g("",!0),l.form.executeDeptCondit.change?(r(),d("div",I,[l.selectedPostList.length>0?(r(),d("div",V,[(r(!0),d(n,null,p(l.selectedPostList,((e,t)=>(r(),m(j,{key:t},{default:u((()=>[h(f(e),1)])),_:2},1024)))),128))])):g("",!0),c(y,{icon:"el-icon-plus",type:"primary",plain:"",onClick:t[4]||(t[4]=e=>l.dialogVisibleSelectPost=!0)},{default:u((()=>[h(f(l.selectedPostList.length?"修改":"选择")+"岗位 ",1)])),_:1})])):g("",!0)]),c(_,{defaultValues:l.selectedDeptList,visible:l.dialogVisibleSelectDept,"onUpdate:visible":t[5]||(t[5]=e=>l.dialogVisibleSelectDept=e),title:"选择部门",onSuccess:D.selectedDept},null,8,["defaultValues","visible","onSuccess"]),c(w,{defaultValues:l.selectedPostList,visible:l.dialogVisibleSelectPost,"onUpdate:visible":t[6]||(t[6]=e=>l.dialogVisibleSelectPost=e),title:"选择岗位",onSuccess:D.selectedPost},null,8,["defaultValues","visible","onSuccess"]),c(E,{defaultValues:l.selectedUserList,visible:l.dialogVisibleSelectUser,"onUpdate:visible":t[7]||(t[7]=e=>l.dialogVisibleSelectUser=e),title:"选择使用员工",isOnlyLeaf:!0,onSuccess:D.selectedUser},null,8,["defaultValues","visible","onSuccess"])])}],["__scopeId","data-v-55955691"]]);export{y as default};
