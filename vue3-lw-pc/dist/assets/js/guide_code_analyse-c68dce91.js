import t from"./ChartBar-39a01942.js";import a from"./ChartLine-b009fc4d.js";import e from"./SearchTitleInStore-f74b0845.js";import{m as i,n as o,j as r,o as s,p as l}from"./store-1f3cfa19.js";import{a6 as n}from"../index-044285d2.js";import{_ as p}from"./quill-image-resize-module-c051113e.js";import{ai as d,aq as m,o as h,c as u,_ as c,a as g,V as b,T as j,U as v,Y as w,bl as f,bj as S}from"./@vue-e400fd81.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./moment-8163541f.js";const x={name:"guide-code-statistics",components:{SearchTitle:e,ChartLine:a,ChartBar:t},data:()=>({exportLoading:!1,barLegend:["门店"],legend:["点击/扫码次数","新增客户数"],xdata:[],series:[],cardData:[{title:"点击/扫码总次数",tips:"进入门店导购码页面的总人数（去重）",value:0,noArrow:!0},{title:"新增客户总人数",tips:"成功添加门店导购的客户数（去重）",value:0,noArrow:!0},{title:"今日点击/扫码次数",tips:"今日进入门店导购码页面的总人数（去重）",value:0,title1:"较前日",value1:0},{title:"今日新增客户数",tips:"今日成功添加门店导购的客户数（去重）",value:0,title1:"较前日",value1:0}],total:0,query:{pageSize:10,pageNum:1},tableList:[],loading:!1,searchData:{},bar:[],value:[],tableSearch:{}}),methods:{exportFn(){this.$confirm("确认导出吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>(this.exportLoading=!0,i(Object.assign({},this.query,this.tableSearch))))).then((t=>{n(t.data)})).catch((t=>{})).finally((()=>{this.exportLoading=!1}))},getTabTotalFn(){o().then((t=>{this.cardData[0].value=t.data.totalShopGuideScannNumber,this.cardData[1].value=t.data.customerTotalNumber,this.cardData[2].value=t.data.tdShopGuideScannNumber,this.cardData[2].value1=t.data.ydShopGuideScannNumber,this.cardData[3].value=t.data.ydCustomerNumber,this.cardData[3].value1=t.data.tdCustomerNumber}))},getLineData(t){r(t).then((t=>{this.xdata=[],this.series=[];let a=[],e=[];t.data&&t.data.length&&(t.data.forEach((t=>{this.xdata.push(t.dataTime),a.push(t.totalShopGuideScannNumber),e.push(t.customerTotalNumber)})),this.series=[a,e])}))},getTop10Fn(t){s(t).then((t=>{t.data&&t.data.length&&(this.bar=[],this.value=[],t.data.forEach((t=>{this.bar.push(t.storeName),this.value.push(t.customerNumber)})))}))},getTableChangeSize(){this.loading=!0,l(Object.assign({},this.query,this.tableSearch)).then((t=>{this.tableList=t.rows,this.total=Number(t.total),this.loading=!1}))},getTableFn(t){this.loading=!0,this.tableSearch=t,l(Object.assign({},this.query,t)).then((t=>{this.tableList=t.rows,this.total=Number(t.total),this.loading=!1}))}},created(){this.getTabTotalFn()}},y=t=>(f("data-v-355426a1"),t=t(),S(),t),T={class:"g-card"},N=y((()=>g("div",{class:"g-card-title"},"数据趋势",-1))),D={class:"g-card"},q=y((()=>g("div",{class:"g-card-title"},"门店新增客户Top10",-1))),C={class:"g-card"},L=y((()=>g("div",{class:"g-card-title"},"数据报表",-1))),z={class:"mid-action"};const F=p(x,[["render",function(t,a,e,i,o,r){const s=d("CardGroupIndex"),l=d("search-title"),n=d("chart-line"),p=d("chart-bar"),f=d("el-button"),S=d("el-table-column"),x=d("el-table"),y=d("pagination"),F=m("loading");return h(),u("div",null,[c(s,{data:o.cardData},null,8,["data"]),g("div",T,[N,c(l,{showMore:!0,onSearch:r.getLineData},null,8,["onSearch"]),c(n,{style:{height:"300px"},legend:o.legend,xData:o.xdata,series:o.series},null,8,["legend","xData","series"])]),g("div",D,[q,c(l,{onSearch:r.getTop10Fn},null,8,["onSearch"]),c(p,{style:{height:"300px"},xData:o.bar,series:o.value,legend:o.barLegend},null,8,["xData","series","legend"])]),g("div",C,[L,g("div",z,[c(l,{showMore:!0,onSearch:r.getTableFn},null,8,["onSearch"]),b((h(),j(f,{type:"primary",onClick:r.exportFn},{default:v((()=>[w("导出Excel")])),_:1},8,["onClick"])),[[F,o.exportLoading]])]),b((h(),j(x,{data:o.tableList,style:{width:"100%"}},{default:v((()=>[c(S,{label:"日期",align:"center","min-width":"100",prop:"createTime","show-overflow-tooltip":""}),c(S,{label:"所属地区",align:"center","min-width":"100",prop:"area","show-overflow-tooltip":""}),c(S,{label:"门店名称",align:"center",prop:"storeName","min-width":"100","show-overflow-tooltip":""}),c(S,{label:"点击/扫码总次数",align:"center",prop:"totalScannNumber","min-width":"100","show-overflow-tooltip":""}),c(S,{label:"新增客户总数",align:"center",prop:"customerTotalNumber","min-width":"100","show-overflow-tooltip":""}),c(S,{label:"今日点击/扫码总数",align:"center",prop:"tdScannNumber","min-width":"100","show-overflow-tooltip":""}),c(S,{label:"今日新增客户数",align:"center",prop:"tdCustomerNumber","min-width":"100","show-overflow-tooltip":""}),c(S,{label:"操作",align:"center",fixed:"right",width:"180"},{default:v((({row:a})=>[c(f,{text:"",onClick:e=>t.$router.push({path:"detail",query:{id:a.storeCodeId}})},{default:v((()=>[w(" 详情 ")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])),[[F,o.loading]]),c(y,{total:o.total,page:o.query.pageNum,"onUpdate:page":a[0]||(a[0]=t=>o.query.pageNum=t),limit:o.query.pageSize,"onUpdate:limit":a[1]||(a[1]=t=>o.query.pageSize=t),onPagination:a[2]||(a[2]=t=>r.getTableChangeSize())},null,8,["total","page","limit"])])])}],["__scopeId","data-v-355426a1"]]);export{F as default};
