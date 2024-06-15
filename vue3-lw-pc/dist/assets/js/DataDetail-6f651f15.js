import{a as e}from"./common-07456f0f.js";import{_ as t}from"./quill-image-resize-module-c051113e.js";import{ai as i,aq as s,o as l,c as a,a as o,_ as r,U as n,Z as p,X as d,T as c,V as m,K as u,Y as y,bl as g,bj as h}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const v={data:()=>({dialogVisible:!1,detailList:[],send:!0,query:{pageSize:10,pageNum:1},total:0,loading:!1}),props:{timeObj:{type:Object,default:{beginTime:"",endTime:""}},tableList:{type:Array,default:[]},resourceType:{type:Number,default:null}},methods:{viewNum(e){this.dialogVisible=!0,this.query.detailsType=2,this.query.contentId=e.id,this.query.talkId=e.talkId,this.query.beginTime=this.timeObj.beginTime,this.query.endTime=this.timeObj.endTime,this.detailList=[],this.getTableChangeSize(),this.send=!1},sendNum(e){this.send=!0,this.dialogVisible=!0,this.query.detailsType=1,this.query.contentId=e.id,this.query.talkId=e.talkId,this.query.beginTime=this.timeObj.beginTime,this.query.endTime=this.timeObj.endTime,this.detailList=[],this.getTableChangeSize()},getTableChangeSize(){this.loading=!0,this.query.resourceType=this.resourceType,e(this.query).then((e=>{this.detailList=e.rows,this.total=Number(e.total),this.loading=!1}))},goDetail(e){let{externalUserid:t,firstUserId:i}=e;this.$router.push({name:window.lwConfig.CUSTOMER_DETAIL_ROUTE_NAME,query:{externalUserid:t,userId:i}})},deltype(e){switch(e){case"4":return"文本";case"0":return"图片";case"9":return"图文";case"11":return"小程序";case"12":return"文章";case"2":return"视频";case"3":return"文件";case"5":return"海报";case"19":return"外链"}},filType(e){let t=JSON.parse(JSON.stringify(e));t=t.split(".");let i=t[t.length-1];return"pdf"===i?"pdf":["doc","docx"].includes(i)?"word":["ppt","pptx","pps","pptsx"].includes(i)?"ppt":""},coverContent:e=>(e&&e.length>50&&(e=e.substr(0,50)+"..."),e)}},w={class:"margin-top: 10px;"},f={class:"title"},b={key:0},j={class:"twosplice"},T={key:1},k={key:2,style:{display:"flex"}},q={key:1,class:"icon-style"},C={class:"twosplice mt10"},U={key:3},N={key:4,style:{display:"flex"}},z={key:1,class:"icon-style"},_={class:"twosplice mt10"},x={key:5,style:{display:"flex"}},I={class:"twosplice mt10"},O={key:6,style:{display:"flex"}},S={class:"twosplice mt10"},L={key:7,style:{display:"flex"}},V={class:"twosplice mt10"},A=["onClick"],B=["onClick"],D=(e=>(g("data-v-64b9753a"),e=e(),h(),e))((()=>o("div",{class:"bottom"},null,-1))),E={class:"bottom"};const J=t(v,[["render",function(e,t,g,h,v,J){const M=i("el-image"),K=i("svg-icon"),R=i("el-table-column"),P=i("el-table"),X=i("el-button"),Y=i("pagination"),Z=i("el-dialog"),$=s("loading");return l(),a("div",null,[o("div",w,[r(P,{data:g.tableList,style:{width:"100%"}},{default:n((()=>[r(R,{prop:"name",label:"素材",align:"left"},{default:n((({row:e})=>[o("span",f,p(e.materialName),1),"4"===e.mediaType?(l(),a("div",b,[o("span",j,p(J.coverContent(e.content)),1)])):d("",!0),"0"===e.mediaType?(l(),a("div",T,[r(M,{src:e.materialUrl,fit:"contain",class:"imgsize"},null,8,["src"])])):d("",!0),"9"===e.mediaType?(l(),a("div",k,[e.coverUrl?(l(),c(M,{key:0,src:e.coverUrl,fit:"contain",class:"imgsize"},null,8,["src"])):(l(),a("div",q,[r(K,{class:"icon-style",icon:"imgText"})])),o("span",C,p(J.coverContent(e.content)),1)])):d("",!0),"11"===e.mediaType?(l(),a("div",U,[r(M,{src:e.coverUrl,fit:"contain",class:"imgsize"},null,8,["src"])])):d("",!0),"12"===e.mediaType?(l(),a("div",N,[e.coverUrl?(l(),c(M,{key:0,src:e.coverUrl,fit:"contain",class:"imgsize"},null,8,["src"])):(l(),a("div",z,[r(K,{class:"icon-style",icon:"article"})])),o("span",_,p(J.coverContent(e.digest)),1)])):d("",!0),"2"===e.mediaType?(l(),a("div",x,[r(M,{src:e.coverUrl,fit:"contain",class:"imgsize"},null,8,["src"]),o("span",I,p(J.coverContent(e.digest)),1)])):d("",!0),"3"===e.mediaType?(l(),a("div",O,[e.materialUrl?(l(),c(K,{key:0,class:"icon-style",icon:e.materialUrl?J.filType(e.materialUrl):""},null,8,["icon"])):d("",!0),o("span",S,p(J.coverContent(e.digest)),1)])):d("",!0),"5"===e.mediaType?(l(),a("div",L,[r(M,{src:e.materialUrl,fit:"contain",class:"imgsize"},null,8,["src"]),o("span",V,p(J.coverContent(e.digest)),1)])):d("",!0)])),_:1}),r(R,{prop:"mediaType",width:"50",label:"类型",align:"center"},{default:n((({row:e})=>[o("div",null,p(J.deltype(e.mediaType)),1)])),_:1}),r(R,{label:"发送次数",align:"center",prop:"sendTotalNum","show-overflow-tooltip":""},{default:n((({row:e})=>[o("div",{class:"scriptNum",onClick:t=>J.sendNum(e)},p(e.sendTotalNum),9,A)])),_:1}),r(R,{label:"查看人数",align:"center","show-overflow-tooltip":""},{default:n((({row:e})=>[o("div",{class:"scriptNum",onClick:t=>J.viewNum(e)},p(e.viewByTotalNum),9,B)])),_:1})])),_:1},8,["data"]),D]),r(Z,{title:v.send?"发送明细":"查看明细",modelValue:v.dialogVisible,"onUpdate:modelValue":t[3]||(t[3]=e=>v.dialogVisible=e),"close-on-click-modal":!1,width:"60%"},{default:n((()=>[m((l(),c(P,{data:v.detailList,style:{width:"100%"}},{default:n((()=>[v.send?(l(),a(u,{key:0},[r(R,{prop:"sendBy",label:"发送员工",align:"center","min-width":"100"}),r(R,{prop:"sendTotalNum",label:"发送次数",align:"center","min-width":"100"})],64)):(l(),a(u,{key:1},[r(R,{label:"查看用户",align:"center","min-width":"100",prop:"viewBy","show-overflow-tooltip":""},{default:n((e=>[e.row.viewAvatar?(l(),c(M,{key:0,src:e.row.viewAvatar,fit:"contain",class:"imgsize"},null,8,["src"])):d("",!0),y(" "+p(e.row.viewBy),1)])),_:1}),r(R,{label:"是否是企业客户",align:"center","min-width":"100","show-overflow-tooltip":""},{default:n((e=>[y(p(1===e.row.isCustomer?"是":"否"),1)])),_:1}),r(R,{label:"查看次数",align:"center","min-width":"100",prop:"viewTotalNum","show-overflow-tooltip":""}),r(R,{label:"查看时长",align:"center","min-width":"100",prop:"viewDurationCpt","show-overflow-tooltip":""}),r(R,{label:"操作",align:"center"},{default:n((e=>[e.row.isCustomer?(l(),c(X,{key:0,text:"",onClick:t=>J.goDetail(e.row)},{default:n((()=>[y("客户详情")])),_:2},1032,["onClick"])):d("",!0)])),_:1})],64))])),_:1},8,["data"])),[[$,v.loading]]),o("div",E,[r(Y,{total:v.total,page:v.query.pageNum,"onUpdate:page":t[0]||(t[0]=e=>v.query.pageNum=e),limit:v.query.pageSize,"onUpdate:limit":t[1]||(t[1]=e=>v.query.pageSize=e),onPagination:t[2]||(t[2]=e=>J.getTableChangeSize())},null,8,["total","page","limit"])])])),_:1},8,["title","modelValue"])])}],["__scopeId","data-v-64b9753a"]]);export{J as default};