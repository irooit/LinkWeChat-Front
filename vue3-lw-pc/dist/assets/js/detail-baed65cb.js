import{g as e,a as t}from"./common-07456f0f.js";import i from"./PreviewInPhone-9ed75a0f.js";import{a}from"./index-0bf429ac.js";import s from"./ChartBar-39a01942.js";import r from"./ChartLine-b009fc4d.js";import o from"./SearchTitle-ceb204ee.js";import l from"./AddOrEditMaterialDialog-00cd185a.js";import{_ as m}from"./quill-image-resize-module-c051113e.js";import{ai as d,aq as n,o as p,c,a as h,Z as g,_ as u,U as f,Y as y,X as j,T as v,V as b,bl as x,bj as w}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";import"./moment-8163541f.js";const T={components:{SearchTitle:o,ChartLine:r,ChartBar:s,PreviewInPhone:i,AddOrEditMaterialDialog:l},data:()=>({dialogVisible:!1,mobForm:[{}],form:{},legend:["发送次数"],xdata:[],series:[],activeName:"first",cardData:[{title:"发送总次数 ",value:0,noArrow:!0},{title:"今日发送次数",value:0}],total:0,query:{pageSize:10,pageNum:1,detailsType:1},tableList:[],loading:!1,type:""}),created(){this.mobForm[0]=this.form,this.type=this.$route.query.type,this.getDeatil()},mounted(){},watch:{},methods:{getDeatil(){this.loading=!0,a({mediaType:this.type,materialId:this.$route.query.id}).then((({rows:e,total:t})=>{this.form=e[0],this.mobForm=[],this.mobForm.push(this.form),this.loading=!1})).catch((()=>{this.loading=!1}))},getTableData(e){this.query.contentId=this.$route.query.id,this.query.beginTime=e.beginTime,this.query.endTime=e.endTime,this.getTableChangeSize()},getLineData(t){t.contentId=this.$route.query.id,t.moduleType=1,t.resourceType=1,this.legend=["发送次数"],e(t).then((e=>{this.cardData[0].value=e.data.sendTotalNum,this.cardData[1].value=e.data.sendTodayNum,this.xdata=[],this.series=[];let t=[];e.data&&e.data.contentAxisVoList.length&&(e.data.contentAxisVoList.forEach((e=>{this.xdata.push(e.dateStr),t.push(e.sendNum)})),this.series=[t])}))},getTableChangeSize(){this.loading=!0,"second"===this.activeName?this.query.detailsType=2:this.query.detailsType=1,t(this.query).then((e=>{this.tableList=e.rows,this.total=Number(e.total),this.loading=!1}))}}},q=e=>(x("data-v-c5c371b9"),e=e(),w(),e),D={class:"flex"},S={style:{width:"calc(100% - 425px)","padding-right":"var(--card-margin)"}},U={class:"g-card"},V={class:"fxbw mb10"},N={class:"flex"},z={class:"title"},I={class:"group"},k={key:0},C={key:2,class:"cp flex"},L={class:"ml10"},A={style:{"text-align":"left","over-flow":"hidden","margin-bottom":"20px"}},P=["href"],_={key:3,class:"cp flex"},F={class:"ml10"},E={style:{"text-align":"left","over-flow":"hidden","margin-bottom":"20px"}},B={class:"g-card"},M=q((()=>h("div",{class:"g-card-title"},"数据趋势",-1))),O={class:"g-card"},$=q((()=>h("div",{class:"g-card-title"}," 数据明细 ",-1))),G={class:"g-card",style:{width:"425px","margin-top":"0"}};const J=m(T,[["render",function(e,t,i,a,s,r){const o=d("el-button"),l=d("AddOrEditMaterialDialog"),m=d("el-input"),x=d("el-image"),w=d("svg-icon"),T=d("CardGroupIndex"),q=d("search-title"),J=d("chart-line"),K=d("el-table-column"),W=d("el-table"),X=d("pagination"),Y=d("PreviewInPhone"),Z=n("loading");return p(),c("div",D,[h("div",S,[h("div",U,[h("div",V,[h("div",N,[h("div",z,g(s.form.materialName),1),h("div",I,g("1"===s.form.categoryId?"默认分组":s.form.categoryName),1)]),u(o,{text:"",onClick:t[0]||(t[0]=e=>s.dialogVisible=!0)},{default:f((()=>[y("编辑")])),_:1}),u(l,{type:s.type,data:s.form,title:"编辑",modelValue:s.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>s.dialogVisible=e),onSuccess:t[2]||(t[2]=e=>r.getDeatil())},null,8,["type","data","modelValue"])]),"4"===s.type?(p(),c("div",k,[u(m,{modelValue:s.form.content,"onUpdate:modelValue":t[3]||(t[3]=e=>s.form.content=e),type:"textarea",disabled:"",rows:4},null,8,["modelValue"])])):j("",!0),"0"===s.type?(p(),v(x,{key:1,style:{width:"200px",height:"200px",flex:"none"},src:s.form.materialUrl,"preview-src-list":[s.form.materialUrl],fit:"fill"},null,8,["src","preview-src-list"])):j("",!0),"9"===s.type?(p(),c("div",C,[s.form.coverUrl?(p(),v(x,{key:0,style:{width:"200px",height:"200px",flex:"none"},src:s.form.coverUrl,fit:"fill","preview-src-list":[s.form.coverUrl]},null,8,["src","preview-src-list"])):(p(),v(w,{key:1,class:"icon-style",icon:"imgText"})),h("div",L,[h("div",A,g(s.form.content&&s.form.content.toString()),1),h("div",null,[h("a",{class:"previewStyle",href:s.form.materialUrl,target:"_blank"},g(s.form.materialUrl),9,P)])])])):j("",!0),"11"===s.type?(p(),c("div",_,[u(x,{style:{width:"200px",height:"200px",flex:"none"},src:s.form.coverUrl,fit:"fill"},null,8,["src"]),h("div",F,[h("div",E,"小程序ID："+g(s.form.digest),1),h("span",null,"页面路径："+g(s.form.materialUrl),1)])])):j("",!0)]),h("div",B,[M,u(T,{data:s.cardData},null,8,["data"]),u(q,{onSearch:r.getLineData},null,8,["onSearch"]),u(J,{style:{height:"300px"},legend:s.legend,xData:s.xdata,series:s.series},null,8,["legend","xData","series"])]),h("div",O,[$,u(q,{showToday:!0,onSearch:r.getTableData,style:{"margin-top":"20px"}},null,8,["onSearch"]),b((p(),v(W,{data:s.tableList,style:{width:"100%"}},{default:f((()=>[u(K,{label:"发送员工",align:"center","min-width":"100",prop:"sendBy","show-overflow-tooltip":""}),u(K,{label:"发送次数",align:"center","min-width":"100",prop:"sendTotalNum","show-overflow-tooltip":""})])),_:1},8,["data"])),[[Z,s.loading]]),u(X,{total:s.total,page:s.query.pageNum,"onUpdate:page":t[4]||(t[4]=e=>s.query.pageNum=e),limit:s.query.pageSize,"onUpdate:limit":t[5]||(t[5]=e=>s.query.pageSize=e),onPagination:t[6]||(t[6]=e=>r.getTableChangeSize())},null,8,["total","page","limit"])])]),h("div",G,[u(Y,{list:s.mobForm},null,8,["list"])])])}],["__scopeId","data-v-c5c371b9"]]);export{J as default};