import{c as e,e as t,s as l,a,g as s,r as i,d as o}from"./organization-9bed3593.js";import{S as d}from"./ShowTag-d66e41cb.js";import r from"./SelectDept-7a07b4de.js";import{ai as p,aq as n,o as c,c as u,a as m,Y as h,_ as g,U as f,Z as S,K as b,a9 as y,T as j,V as v,X as k,$ as D,bl as I,bj as L}from"./@vue-e400fd81.js";import{_}from"./quill-image-resize-module-c051113e.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const N={name:"manage-center-organization",props:{},data:()=>({selectedDeptList:[],dialogVisibleSelectDept:!1,dataScopeVisible:!1,query:{pageNum:1,pageSize:10,deptId:"",roleId:"",userName:"",checkIsRoot:!0},loading:!1,treeData:[],userList:[],total:0,defaultProps:{label:"deptName",children:"children"},roleList:[],modalStatus:!1,defaultShowNodes:[],editRolesList:[],editUser:{},dataScope:{userId:"",dataScope:5,sysUserManageScops:[]},dataScopeOptions:[{value:1,label:"全部数据权限"},{value:2,label:"自定义数据权限"},{value:3,label:"本部门数据权限"},{value:4,label:"本部门及以下数据权限"},{value:5,label:"仅本人数据权限"}]}),components:{ShowTag:d,SelectDept:r},computed:{},created(){this.getTree(),this.getRoleList()},mounted(){},methods:{setChange(){this.dataScope.sysUserManageScops=[],this.selectedDeptList=[]},setName(e){let t="";return this.dataScopeOptions.map((l=>{l.value==e.dataScope&&(t=l.label)})),t},onSelectDept(){this.dialogVisibleSelectDept=!0},selectedDept(e){if(this.selectedDeptList=e,e&&e.length){let t=e.map((e=>({userId:this.dataScope.userId,deptId:e.deptId})));this.dataScope.sysUserManageScops=t}},editDataScope(e){this.dataScope={userId:"",dataScope:5,sysUserManageScops:[]},this.selectedDeptList=e.sysUserManageScops?e.sysUserManageScops:[];let t=e.scopeDept?e.scopeDept.split(","):[];this.selectedDeptList.forEach(((e,l)=>{e.deptName=t[l]})),this.dataScope.userId=e.userId,this.dataScope.dataScope=e.dataScope,this.dataScopeVisible=!0},submitDataScope(){2!=this.dataScope.dataScope||this.selectedDeptList.length?e(this.dataScope).then((e=>{this.dataScopeVisible=!1,this.getList(1)})):this.msgError("请选择自定义权限部门！")},resetFn(){this.query.userName="",this.query.roleId="",this.getList(1)},setDisabled(e){let t=!1;return e.roles&&e.roles.length&&e.roles.forEach((e=>{"超级管理员"===e.roleName&&(t=!0)})),t},editRoles(e){this.editUser=e,e.roles&&(this.editRolesList=e.roles.map((e=>e.roleId))),this.modalStatus=!0},cancelEdit(){this.modalStatus=!1,this.editRolesList=[]},submitEdit(){this.editRolesList.length?this.$confirm("是否确认更改当前成员角色？确认后即时生效","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{let e={roleIds:this.editRolesList,userId:this.editUser.userId,userName:this.editUser.userName};return t(e)})).then((()=>{this.getList(),this.modalStatus=!1,this.msgSuccess("操作成功！")})):this.msgInfo("请至少选择一个角色！")},syncOrganization(){l().then((e=>{200===e.code&&this.getTree()}))},getTree(){a().then((({data:e})=>{this.treeData=this.handleTree(e,"deptId"),this.treeData.length&&(this.query.deptId=this.treeData[0].deptId),this.getList(),this.$nextTick((()=>{this.$refs.tree.setCurrentKey(this.query.deptId)})),this.defaultShowNodes.push(this.query.deptId)}))},getList(e,t){e&&(this.query.pageNum=e),this.loading=!0;let l=JSON.parse(JSON.stringify(this.query));t&&delete l.deptId,s(l).then((({rows:e,total:t})=>{this.userList=e,this.total=+t,this.loading=!1})).catch((()=>{this.loading=!1}))},handleNodeClick(e){this.query.deptId=e.deptId,this.getList(1)},handleSelectionChange(e){this.multipleSelection=e},departRemove(e){this.$confirm("是否确认删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return i(e)})).then((()=>{this.getTree(),this.msgSuccess("删除成功")}))},getRoleList(){o().then((e=>{this.roleList=e.data}))}}},w={class:"g-left-right"},V={class:"left g-card head-container"},C={class:"title mb20"},q=(e=>(I("data-v-b5516de7"),e=e(),L(),e))((()=>m("div",{class:"title-name"},"组织列表",-1))),U={class:"custom-tree-node"},x={class:"right"},R={class:"g-card"},T={key:1},z={class:"dialog-footer"},O={class:"dialog-footer"};const E=_(N,[["render",function(e,t,l,a,s,i){const o=p("el-icon-refresh"),d=p("el-icon-folder-opened"),r=p("el-tree"),I=p("el-input"),L=p("el-form-item"),_=p("el-option"),N=p("el-select"),E=p("el-button"),M=p("el-form"),$=p("el-table-column"),B=p("show-tag"),P=p("el-table"),K=p("pagination"),F=p("el-dialog"),J=p("el-tag"),A=p("SelectDept"),X=n("loading");return c(),u("div",null,[m("div",w,[m("div",V,[m("div",C,[q,m("span",{onClick:t[0]||(t[0]=(...e)=>i.syncOrganization&&i.syncOrganization(...e)),class:"g-color cp"},[h(" 同步 "),g(o,{class:"el-icon-refresh"})])]),g(r,{"node-key":"deptId","default-expanded-keys":s.defaultShowNodes,"highlight-current":"",accordion:"",class:"left-tree",data:s.treeData,props:s.defaultProps,"expand-on-click-node":!1,ref:"tree",onNodeClick:i.handleNodeClick},{default:f((({node:e,data:t})=>[m("div",U,[m("span",null,[g(d,{class:"el-icon-folder-opened",style:{color:"var(--color)"}}),h(" "+S(e.label),1)])])])),_:1},8,["default-expanded-keys","data","props","onNodeClick"])]),m("div",x,[g(M,{class:"top-search",model:s.query,ref:"queryForm","label-position":"left",inline:!0,"label-width":""},{default:f((()=>[g(L,{label:"员工姓名",prop:"title"},{default:f((()=>[g(I,{modelValue:s.query.userName,"onUpdate:modelValue":t[1]||(t[1]=e=>s.query.userName=e),placeholder:"请输入",clearable:""},null,8,["modelValue"])])),_:1}),g(L,{label:"角色"},{default:f((()=>[g(N,{modelValue:s.query.roleId,"onUpdate:modelValue":t[2]||(t[2]=e=>s.query.roleId=e),filterable:""},{default:f((()=>[g(_,{label:"全部",value:""}),(c(!0),u(b,null,y(s.roleList,((e,t)=>(c(),j(_,{key:e.roleId,label:e.roleName,value:e.roleId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),g(L,{label:""},{default:f((()=>[g(E,{type:"primary",onClick:t[3]||(t[3]=e=>i.getList(1,!0))},{default:f((()=>[h("查询")])),_:1}),g(E,{onClick:t[4]||(t[4]=e=>i.resetFn())},{default:f((()=>[h("重置")])),_:1})])),_:1})])),_:1},8,["model"]),m("div",R,[v((c(),j(P,{data:s.userList,onSelectionChange:i.handleSelectionChange},{default:f((()=>[g($,{type:"selection",width:"50",align:"center"}),g($,{label:"员工姓名",align:"center",prop:"userName","show-overflow-tooltip":!0}),g($,{label:"所属部门",align:"center",prop:"userDepts",width:"150"},{default:f((({row:e})=>[e.userDepts?(c(),j(B,{key:0,list:e.userDepts,keyStr:"deptName"},null,8,["list"])):k("",!0)])),_:1}),g($,{label:"职务",align:"center",prop:"position"}),g($,{label:"手机",align:"center",prop:"phoneNumber"}),g($,{label:"所属角色",align:"center",prop:"role",width:"250"},{default:f((({row:e})=>[e.roles?(c(),j(B,{key:0,list:e.roles,keyStr:"roleName"},null,8,["list"])):k("",!0)])),_:1}),g($,{label:"管理范围","show-overflow-tooltip":"",align:"center",prop:"roleDepts",width:"150"},{default:f((({row:e})=>[2!=e.dataScope?(c(),u(b,{key:0},[h(S(i.setName(e)),1)],64)):(c(),u("div",T,S(e.scopeDept),1))])),_:1}),g($,{label:"操作",align:"center",fixed:"right",width:"150"},{default:f((({row:e})=>[g(E,{text:"",onClick:t=>i.editRoles(e),disabled:i.setDisabled(e)},{default:f((()=>[h("修改角色")])),_:2},1032,["onClick","disabled"]),g(E,{text:"",onClick:t=>i.editDataScope(e),disabled:i.setDisabled(e)},{default:f((()=>[h("数据权限")])),_:2},1032,["onClick","disabled"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[X,s.loading]]),v(g(K,{total:s.total,page:s.query.pageNum,"onUpdate:page":t[5]||(t[5]=e=>s.query.pageNum=e),limit:s.query.pageSize,"onUpdate:limit":t[6]||(t[6]=e=>s.query.pageSize=e),onPagination:t[7]||(t[7]=e=>i.getList())},null,8,["total","page","limit"]),[[D,s.total>0]])])])]),g(F,{title:"设置角色",modelValue:s.modalStatus,"onUpdate:modelValue":t[9]||(t[9]=e=>s.modalStatus=e),"append-to-body":"",width:"400px"},{footer:f((()=>[m("div",z,[g(E,{onClick:i.cancelEdit},{default:f((()=>[h("取 消")])),_:1},8,["onClick"]),g(E,{type:"primary",onClick:i.submitEdit},{default:f((()=>[h("确 定")])),_:1},8,["onClick"])])])),default:f((()=>[g(M,{class:"",inline:"","label-position":"","label-width":""},{default:f((()=>[g(L,{label:""},{default:f((()=>[g(N,{multiple:"",modelValue:s.editRolesList,"onUpdate:modelValue":t[8]||(t[8]=e=>s.editRolesList=e),style:{width:"300px"},filterable:""},{default:f((()=>[(c(!0),u(b,null,y(s.roleList,((t,l)=>(c(),u(b,{key:e.index},["SUPPER_ADMIN"!==t.roleKey?(c(),j(_,{key:t.roleId,label:t.roleName,value:t.roleId},null,8,["label","value"])):k("",!0)],64)))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),g(F,{title:"数据权限",modelValue:s.dataScopeVisible,"onUpdate:modelValue":t[12]||(t[12]=e=>s.dataScopeVisible=e),"append-to-body":"",width:"400px"},{footer:f((()=>[m("div",O,[g(E,{onClick:t[11]||(t[11]=e=>s.dataScopeVisible=!1)},{default:f((()=>[h("取 消")])),_:1}),g(E,{type:"primary",onClick:i.submitDataScope},{default:f((()=>[h("确 定")])),_:1},8,["onClick"])])])),default:f((()=>[g(M,{class:"",inline:"","label-position":"","label-width":""},{default:f((()=>[g(L,{label:"管理范围",prop:"dataScope"},{default:f((()=>[g(N,{modelValue:s.dataScope.dataScope,"onUpdate:modelValue":t[10]||(t[10]=e=>s.dataScope.dataScope=e),onChange:i.setChange,filterable:""},{default:f((()=>[(c(!0),u(b,null,y(s.dataScopeOptions,(e=>(c(),j(_,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),2==s.dataScope.dataScope?(c(),j(L,{key:0,label:""},{default:f((()=>[(c(!0),u(b,null,y(s.selectedDeptList,((e,t)=>(c(),u(b,{key:t},[e.deptName?(c(),j(J,{key:0},{default:f((()=>[h(S(e.deptName),1)])),_:2},1024)):k("",!0)],64)))),128)),m("div",null,[g(E,{type:"primary",icon:"el-icon-plus",onClick:i.onSelectDept},{default:f((()=>[h(S(0==s.selectedDeptList.length?"添加部门":"编辑部门"),1)])),_:1},8,["onClick"])])])),_:1})):k("",!0)])),_:1})])),_:1},8,["modelValue"]),g(A,{defaultValues:s.selectedDeptList,visible:s.dialogVisibleSelectDept,"onUpdate:visible":t[13]||(t[13]=e=>s.dialogVisibleSelectDept=e),title:"选择部门",isOnlyLeaf:!1,onSuccess:i.selectedDept},null,8,["defaultValues","visible","onSuccess"])])}],["__scopeId","data-v-b5516de7"]]);export{E as default};
