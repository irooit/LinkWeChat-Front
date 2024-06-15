import{o as t,j as e,l as a,S as i}from"./smartForms-eaa9db9a.js";import s from"./SearchTitle-0bef2c19.js";import o from"./ChartBar-39a01942.js";import r from"./ChartLine-b009fc4d.js";import"../index-044285d2.js";import{_ as l}from"./quill-image-resize-module-c051113e.js";import{ai as n,aq as d,o as p,c,_ as m,a as h,V as u,T as g,U as j,Y as b}from"./@vue-e400fd81.js";import"./moment-8163541f.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";const v={name:"scene-statistics-scene",components:{SearchTitle:s,ChartLine:r,ChartBar:o},data:()=>({loading:!1,baseList:"",exportLoading:!1,barLegend1:["访问客户总数"],barLegend2:["咨询客户总数"],legend:["总访问量","总访问用户","有效收集量"],xdata:[],series:[],activeName:"first",cardData:[{title:"总访问量",tips:"全部渠道访问当前表单的PV",value:0,title1:"较前日",value1:0},{title:"总访问用户",tips:"全部渠道访问当前表单的UV",value:0,title1:"较前日",value1:0},{title:"有效收集量",tips:"全部渠道成功提交表单的UV",value:0,title1:"较前日",value1:0},{title:"收集率",tips:"有效收集量/总访问用户，精确到两位小数",value:"0%"},{title:"平均完成时间",tips:"有效收集用户从进入表单到提交表单的平均时长",value:"0m"}],total:0,query:{pageSize:10,pageNum:1},tableList:[],loading:!1,searchData:{},bar1:[],bar2:[],value1:[],value2:[],tableSearch:{}}),methods:{exportFn(){this.$confirm("确认导出吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.exportLoading=!0;let e=this.tableSearch;e.dataSource||(e.dataSource="默认渠道"),e.belongId=this.$route.query.id,t(e).then((t=>{if(null!=t){let e=new Blob([t],{type:"application/vnd.ms-excel"}),a=window.URL.createObjectURL(e);const i=document.createElement("a");i.href=a,i.download="数据报表.xlsx",i.click(),URL.revokeObjectURL(a)}})).catch((t=>{})).finally((()=>{this.exportLoading=!1}))}))},setTabs(t){this.getLineData(this.searchData)},formatSeconds(t){var e=parseInt(t),a=0,i=0;e>60&&(a=parseInt(e/60),e=parseInt(e%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60)));var s=parseInt(e)+"s";return a>0&&(s=parseInt(a)+"m"+s),i>0&&(s=parseInt(i)+"h"+s),s},selectStatistics(){let t={belongId:this.$route.query.id};e(t).then((t=>{t.data.length&&(this.baseList=t.data[0],this.cardData[0].value=t.data[0].totalVisits,this.cardData[0].value1=t.data[0].yesTotalVisits,this.cardData[2].value=t.data[0].collectionVolume,this.cardData[2].value1=t.data[0].yesCollectionVolume,this.cardData[1].value=t.data[0].totalUser,this.cardData[1].value1=t.data[0].yesTotalUser,this.cardData[3].value=t.data[0].collectionRate,this.cardData[4].value=t.data[0].averageTime)}))},getLineData(t){t.belongId=this.$route.query.id,t.beginTime??(t.beginTime=t.startDate),t.endTime??(t.endTime=t.endDate),t.dataSource||(t.dataSource="默认渠道"),this.searchData=t,a(t).then((t=>{var e;this.xdata=[],this.series=[];let a=[],i=[],s=[];"first"===this.activeName&&(null==(e=t.data)||e.forEach((t=>{this.xdata.push(t.date),a.push(t.totalVisits),i.push(t.totalUser),s.push(t.collectionVolume)})),this.series=[a,i,s])}))},getTableChangeSize(t,e){let a=this;this.loading=!0;let s=this.tableSearch;s.pageSize=e,s.pageNum=t,s.dataSource||(s.dataSource="默认渠道"),i(s).then((t=>{a.tableList=t.rows||[],this.total=Number(t.total),this.loading=!1}))},getTableFn(t){this.loading=!0,t.belongId=this.$route.query.id,t.dataSource?(t.beginTime??(t.beginTime=t.startDate),t.endTime??(t.endTime=t.endDate),this.tableSearch=t,this.getTableChangeSize(1,10)):this.loading=!1}},created(){this.selectStatistics()},mounted(){}},f={class:"g-card"},S=h("div",{class:"g-card-title"},"数据趋势",-1),w={class:"g-card"},y=h("div",{class:"g-card-title"},"数据报表",-1),x={class:"mid-action"},D={class:"bottom"};const T=l(v,[["render",function(t,e,a,i,s,o){const r=n("CardGroupIndex"),l=n("search-title"),v=n("chart-line"),T=n("el-button"),L=n("el-table-column"),q=n("el-table"),I=n("pagination"),U=d("loading");return p(),c("div",null,[m(r,{data:s.cardData},null,8,["data"]),h("div",f,[S,m(l,{id:t.$route.query.id,showScene:!0,onSearch:o.getLineData},null,8,["id","onSearch"]),m(v,{style:{height:"300px"},legend:s.legend,xData:s.xdata,series:s.series},null,8,["legend","xData","series"])]),h("div",w,[y,h("div",x,[m(l,{id:t.$route.query.id,showScene:!0,onSearch:o.getTableFn},null,8,["id","onSearch"]),u((p(),g(T,{type:"primary",onClick:o.exportFn},{default:j((()=>[b("导出Excel")])),_:1},8,["onClick"])),[[U,s.exportLoading]])]),u((p(),g(q,{data:s.tableList,style:{width:"100%"}},{default:j((()=>[m(L,{label:"日期",align:"center","min-width":"100",prop:"date","show-overflow-tooltip":""}),m(L,{label:"总访问数",align:"center","min-width":"100",prop:"totalVisits","show-overflow-tooltip":""}),m(L,{label:"总访问用户",align:"center",prop:"totalUser","min-width":"100","show-overflow-tooltip":""}),m(L,{label:"有效收集量",align:"center",prop:"collectionVolume","min-width":"100","show-overflow-tooltip":""}),m(L,{label:"收集率",align:"center",prop:"collectionRate","min-width":"100","show-overflow-tooltip":""}),m(L,{label:"平均完成时间",align:"center",prop:"averageTime","min-width":"100","show-overflow-tooltip":""})])),_:1},8,["data"])),[[U,s.loading]]),h("div",D,[m(I,{total:s.total,page:s.query.pageNum,"onUpdate:page":e[0]||(e[0]=t=>s.query.pageNum=t),limit:s.query.pageSize,"onUpdate:limit":e[1]||(e[1]=t=>s.query.pageSize=t),onPagination:e[2]||(e[2]=t=>o.getTableChangeSize(s.query.pageNum,s.query.pageSize))},null,8,["total","page","limit"])])])])}]]);export{T as default};
