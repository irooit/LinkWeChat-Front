import{g as e,s as t,r as i}from"./tag-13936295.js";import{A as s}from"./AddTag-40a1def9.js";import{ai as a,aq as o,o as l,c as r,_ as n,U as p,aa as m,Y as d,a as u,T as g,X as c,V as h,$ as y}from"./@vue-e400fd81.js";import{_ as j}from"./quill-image-resize-module-c051113e.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const f={class:""},b={class:"g-card"},T={class:"mid-action"},S={key:0};const k=j({name:"GroupTag",components:{AddTag:s},props:{type:{type:String,default:"1"}},data(){return{query:{pageNum:1,pageSize:10,groupName:"",groupTagType:this.type},loading:!1,dialogVisible:!1,form:{groupName:"",weTags:[]},newInput:"",newInputVisible:!1,rules:Object.freeze({groupName:[{required:!0,message:"必填项",trigger:"blur"}]}),ids:[],multiple:!0,total:0,list:[],lastSyncTime:0}},computed:{},created(){this.getList()},methods:{resetQuery(){this.query.groupName="",this.getList(1)},getList(t){t&&(this.query.pageNum=t),this.loading=!0,e(this.query).then((({rows:e,total:t,lastSyncTime:i})=>{this.list=e,this.total=+t,this.lastSyncTime=i,this.loading=!1})).catch((()=>{this.loading=!1}))},edit(e,t){this.form=JSON.parse(JSON.stringify(Object.assign({groupTagType:this.type,weTags:[]},e||{}))),this.dialogVisible=!0},syncTag(){const e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});t().then((()=>{e.close(),this.msgSuccess("后台开始同步数据，请稍后关注进度"),this.getList()})).catch((()=>{e.close()}))},handleSelectionChange(e){this.ids=e.map((e=>e.groupId)),this.multiple=!e.length},remove(e){const t=e||this.ids+"";this.$confirm("是否确认删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){return i(t)})).then((()=>{this.getList(),this.msgSuccess("删除成功")}))}}},[["render",function(e,t,i,s,j,k){const q=a("el-input"),v=a("el-form-item"),w=a("el-button"),_=a("el-form"),C=a("ButtonSync"),N=a("el-table-column"),x=a("TagEllipsis"),L=a("el-table"),V=a("pagination"),z=a("AddTag"),B=o("loading");return l(),r("div",f,[n(_,{model:j.query,inline:!0,"label-width":"0","label-position":"left",class:"top-search"},{default:p((()=>[n(v,{label:""},{default:p((()=>[n(q,{modelValue:j.query.groupName,"onUpdate:modelValue":t[0]||(t[0]=e=>j.query.groupName=e),placeholder:"请输入标签组名称",clearable:"",onKeyup:t[1]||(t[1]=m((e=>k.getList(1)),["enter"]))},null,8,["modelValue"])])),_:1}),n(v,{"label-width":"0"},{default:p((()=>[n(w,{type:"primary",onClick:t[2]||(t[2]=e=>k.getList(1))},{default:p((()=>[d("查询")])),_:1}),n(w,{onClick:k.resetQuery},{default:p((()=>[d("重置")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),u("div",b,[u("div",T,[u("div",null,[n(w,{type:"primary",class:"mr10",onClick:t[3]||(t[3]=e=>k.edit())},{default:p((()=>[d("新建标签组")])),_:1}),1==i.type?(l(),g(C,{key:0,lastSyncTime:j.lastSyncTime,onClick:k.syncTag},{default:p((()=>[d("同步企微标签")])),_:1},8,["lastSyncTime","onClick"])):c("",!0)]),u("div",null,[n(w,{disabled:!j.ids.length,type:"danger",onClick:t[4]||(t[4]=e=>k.remove())},{default:p((()=>[d("批量删除")])),_:1},8,["disabled"])])]),h((l(),g(L,{data:j.list,onSelectionChange:k.handleSelectionChange},{default:p((()=>[n(N,{type:"selection",width:"55",align:"center"}),n(N,{label:"标签组",align:"center",prop:"groupName"}),n(N,{label:"标签",align:"center",prop:"weTags"},{default:p((({row:e})=>[e.weTags?(l(),r("div",S,[n(x,{list:e.weTags},null,8,["list"])])):c("",!0)])),_:1}),n(N,{label:"操作",align:"center"},{default:p((e=>[n(w,{text:"",onClick:t=>k.edit(e.row,e.index)},{default:p((()=>[d("编辑")])),_:2},1032,["onClick"]),n(w,{text:"",onClick:t=>k.remove(e.row.groupId)},{default:p((()=>[d("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[B,j.loading]]),h(n(V,{total:j.total,page:j.query.pageNum,"onUpdate:page":t[5]||(t[5]=e=>j.query.pageNum=e),limit:j.query.pageSize,"onUpdate:limit":t[6]||(t[6]=e=>j.query.pageSize=e),onPagination:t[7]||(t[7]=e=>k.getList())},null,8,["total","page","limit"]),[[y,j.total>0]])]),(l(),g(z,{visible:j.dialogVisible,"onUpdate:visible":t[8]||(t[8]=e=>j.dialogVisible=e),form:j.form,key:j.dialogVisible,onSuccess:t[9]||(t[9]=e=>k.getList(!j.form.groupId&&1))},null,8,["visible","form"]))])}]]);export{k as default};