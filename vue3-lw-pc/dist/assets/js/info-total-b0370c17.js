import{d as t}from"../index-044285d2.js";import e from"./ChartBar-39a01942.js";import a from"./ChartLine-b009fc4d.js";import i from"./SearchTitle-ceb204ee.js";import{g as s,b as r,c as o,f as l}from"./api-3d61a394.js";import{_ as n}from"./quill-image-resize-module-c051113e.js";import{ai as p,aq as d,o as m,c as h,_ as c,a as u,V as g,T as j,U as b,Y as v}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";import"./moment-8163541f.js";const f={name:"customer-assistant-statistics",components:{SearchTitle:i,ChartLine:a,ChartBar:e},data:()=>({exportLoading:!1,legend:["今日新增客户数","今日活跃客户数"],xdata:[],series:[],cardData:[{title:"累计新增客户数",tips:"通过当前链接新增的全部客户数(去重)",value:0},{title:"累计活跃客户数",tips:"新增客户中累计发起会话的客户数(去重)",value:0},{title:"今日新增客户数",tips:"今日通过当前链接新增的客户数(去重)",value:0},{title:"今日活跃客户数",tips:"今日新增客户中发起会话的客户数(去重)",value:0}],total:0,query:{pageSize:10,pageNum:1},tableList:[],loading:!1,searchData:{},bar:[],value:[],tableSearch:{},id:""}),methods:{exportFn(){this.$confirm("确认导出吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>(this.exportLoading=!0,s(Object.assign({},this.query,this.tableSearch))))).then((e=>{if(e){let a=new Blob([e],{type:"application/vnd.ms-excel"}),i=window.URL.createObjectURL(a);const s=document.createElement("a");s.href=i,s.download="数据明细-"+t(new Date)+".xlsx",s.click(),URL.revokeObjectURL(i)}})).catch((t=>{})).finally((()=>{this.exportLoading=!1}))},getTabTotalFn(){r(this.id).then((t=>{this.cardData[0].value=t.data.addWeCustomerNumber,this.cardData[1].value=t.data.weCustomerActiveNumber,this.cardData[2].value=t.data.tdAddWeCustomerNumber,this.cardData[3].value=t.data.tdWeCustomerActiveNumber}))},getLineData(t){t.linkId=this.id,o(t).then((t=>{this.xdata=[],this.series=[];let e=[],a=[];t.data&&t.data.length&&(t.data.forEach((t=>{this.xdata.push(t.date),e.push(t.addWeCustomerNumber),a.push(t.weCustomerActiveNumber)})),this.series=[e,a])}))},getTableChangeSize(){this.loading=!0,this.query.linkId=this.id,l(Object.assign({},this.query,this.tableSearch)).then((t=>{this.tableList=t.rows,this.total=Number(t.total),this.loading=!1}))},getTableFn(t){this.loading=!0,this.tableSearch=t,this.query.linkId=this.id,l(Object.assign({},this.query,t)).then((t=>{this.tableList=t.rows,this.total=Number(t.total),this.loading=!1}))}},created(){this.id=this.$route.query.linkId,this.getTabTotalFn()}},w={class:"g-card"},y=u("div",{class:"g-card-title"},"数据趋势",-1),x={class:"g-card"},C=u("div",{class:"g-card-title"},"数据报表",-1),q={style:{display:"flex","justify-content":"space-between","align-items":"center"}};const L=n(f,[["render",function(t,e,a,i,s,r){const o=p("CardGroupIndex"),l=p("search-title"),n=p("chart-line"),f=p("el-button"),L=p("el-table-column"),N=p("el-table"),S=p("pagination"),D=d("loading");return m(),h("div",null,[c(o,{data:s.cardData},null,8,["data"]),u("div",w,[y,c(l,{onSearch:r.getLineData},null,8,["onSearch"]),c(n,{style:{height:"300px"},legend:s.legend,xData:s.xdata,series:s.series},null,8,["legend","xData","series"])]),u("div",x,[C,u("div",q,[c(l,{onSearch:r.getTableFn},null,8,["onSearch"]),g((m(),j(f,{type:"primary",onClick:r.exportFn},{default:b((()=>[v("导出Excel")])),_:1},8,["onClick"])),[[D,s.exportLoading]])]),g((m(),j(N,{data:s.tableList,style:{width:"100%"}},{default:b((()=>[c(L,{label:"日期",align:"center","min-width":"100",prop:"date","show-overflow-tooltip":""}),c(L,{label:"累计新增客户数",align:"center",prop:"addWeCustomerNumber","min-width":"100","show-overflow-tooltip":""}),c(L,{label:"累计活跃客户数",align:"center",prop:"weCustomerActiveNumber","min-width":"100","show-overflow-tooltip":""}),c(L,{label:"今日新增客户数",align:"center",prop:"tdAddWeCustomerNumber","min-width":"100","show-overflow-tooltip":""}),c(L,{label:"今日活跃客户数",align:"center",prop:"tdWeCustomerActiveNumber","min-width":"120","show-overflow-tooltip":""})])),_:1},8,["data"])),[[D,s.loading]]),c(S,{total:s.total,page:s.query.pageNum,"onUpdate:page":e[0]||(e[0]=t=>s.query.pageNum=t),limit:s.query.pageSize,"onUpdate:limit":e[1]||(e[1]=t=>s.query.pageSize=t),onPagination:e[2]||(e[2]=t=>r.getTableChangeSize())},null,8,["total","page","limit"])])])}]]);export{L as default};