import e from"./SearchTitle-ceb204ee.js";import{h as t}from"./api-3d61a394.js";import{ai as s,o as a,c as i,_ as r,U as l,a as o,Z as n,P as p,Q as u,Y as m,V as c,$ as d}from"./@vue-e400fd81.js";import{_ as j}from"./quill-image-resize-module-c051113e.js";import"./moment-8163541f.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";const h={class:"g-card"},g={class:"mt20"},f=["onClick"],b={class:"ml10"},y={class:"blod"};const v=j({data:()=>({query:{pageSize:10,pageNum:1,weUserId:"",linkId:""},total:0,userNames:"",dialogVisible:!1,userArray:[],list:[],tableSearch:{}}),components:{SearchTitle:e},created(){this.query.linkId=this.$route.query.linkId},methods:{getData(e){this.tableSearch=e,this.query.linkId=this.$route.query.linkId,t(Object.assign({},this.query,e)).then((e=>{this.list=e.rows,this.total=e.total}))},goRoute(e){let{externalUserid:t,firstUserId:s}=e;this.$router.push({name:window.lwConfig.CUSTOMER_DETAIL_ROUTE_NAME,query:{externalUserid:t,userId:s}})},getSelectUser(e){this.userArray=e,this.userNames=this.userArray.map((function(e,t){return e.name})).join(","),this.query.weUserId=this.userArray.map((function(e,t){return e.userId})).join(","),this.query.pageNum=1,t(Object.assign({},this.query,this.tableSearch)).then((e=>{this.list=e.rows,this.total=e.total}))}},created(){}},[["render",function(e,t,j,v,q,w){const S=s("el-input"),U=s("search-title"),k=s("el-image"),I=s("el-icon-Avatar"),_=s("el-table-column"),N=s("el-button"),A=s("el-table"),T=s("pagination"),x=s("SelectUser");return a(),i("div",h,[r(U,{onSearch:w.getData},{default:l((()=>[r(S,{"model-value":q.userNames,readonly:"",onClick:t[0]||(t[0]=e=>q.dialogVisible=!0),placeholder:"请选择添加员工"},null,8,["model-value"])])),_:1},8,["onSearch"]),o("div",g,[r(A,{ref:"table",data:q.list,"tooltip-effect":"dark","highlight-current-row":""},{default:l((()=>[r(_,{label:"客户",prop:"customerName","header-align":"center",align:"",width:"180"},{default:l((({row:e})=>[o("div",{class:"cp flex aic",onClick:t=>w.goRoute(e)},[r(k,{class:"avatar",src:e.avatar,fit:"fill"},null,8,["src"]),o("div",b,[o("p",y,n(e.customerName),1),r(I,{class:p(["el-icon-Avatar",{1:"man",2:"woman"}[e.gender]])},null,8,["class"]),o("span",{style:u({color:1===e.customerType?"#4bde03":"#f9a90b"})},n({1:"@微信",2:"@企业微信"}[e.customerType]),5)])],8,f)])),_:1}),r(_,{prop:"userName",label:"跟进员工",align:"center"}),r(_,{prop:"addTime",label:"添加时间",align:"center"}),r(_,{label:"操作",width:"200",align:"center"},{default:l((({row:e})=>[r(N,{onClick:t=>w.goRoute(e),text:""},{default:l((()=>[m("查看")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),c(r(T,{total:q.total,page:q.query.pageNum,"onUpdate:page":t[1]||(t[1]=e=>q.query.pageNum=e),limit:q.query.pageSize,"onUpdate:limit":t[2]||(t[2]=e=>q.query.pageSize=e),onPagination:t[3]||(t[3]=t=>e.getList())},null,8,["total","page","limit"]),[[d,q.total>0]])]),r(x,{visible:q.dialogVisible,"onUpdate:visible":t[4]||(t[4]=e=>q.dialogVisible=e),title:"组织架构",defaultValues:q.userArray,onSuccess:w.getSelectUser},null,8,["visible","defaultValues","onSuccess"])])}],["__scopeId","data-v-688d1375"]]);export{v as default};