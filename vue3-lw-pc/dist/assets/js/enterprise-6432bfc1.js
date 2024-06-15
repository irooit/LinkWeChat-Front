import t from"./ChartBar-39a01942.js";import e from"./ChartLine-b009fc4d.js";import a from"./SearchTitle-ceb204ee.js";import{S as i}from"./ScriptMaterial-6e51bcbb.js";import"./customerService-9b5aff05.js";import{g as s,b as o}from"./common-07456f0f.js";import"../index-044285d2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./js-cookie-8253c38e.js";import{_ as l}from"./quill-image-resize-module-c051113e.js";import{ai as r,aq as p,o as n,c as m,_ as d,a as c,Y as u,U as h,V as j,T as v,Z as g,bl as b,bj as w}from"./@vue-e400fd81.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./moment-8163541f.js";import"./scriptCenter-9e8c6ca2.js";import"./PicTitContent-8b500b6d.js";const f={name:"scene-statistics-scene",components:{SearchTitle:a,ChartLine:e,ChartBar:t,ScriptMaterial:i},data:()=>({exportLoading:!1,dialogVisible:!1,legend:["发送次数","查看次数","查看人数"],xdata:[],series:[],activeName:"first",cardData:[{title:"发送总次数 ",tips:"全部话术中的素材在侧边栏被员工发送次数",value:0,noArrow:!0},{title:"查看总次数",tips:"全部话术中的轨迹素材被客户打开的总次数，不去重",value:0},{title:"查看总人数",tips:"全部话术中的轨迹素材被客户打开且授权的总人数，去重",value:0},{title:"今日发送次数",tips:"全部话术中的素材今日在侧边栏被员工发送的次数",value:0},{title:"今日查看次数",tips:"全部话术中的轨迹素材今日被客户打开的次数，不去重",value:0},{title:"今日查看人数",tips:"全部话术中的轨迹素材今日被客户打开且授权的人数，去重",value:0}],query:{moduleType:2,talkType:0,resourceType:2},tableList:[],loading:!1,searchData:{},bar1:[],bar2:[],value1:[],value2:[],tableSearch:{},obj:{}}),methods:{numClick(t){this.obj=t,this.dialogVisible=!0},visibleChange(t){this.dialogVisible=t},getLineData(t){this.searchData=t,t.moduleType=2,t.resourceType=2,this.legend=["发送次数","查看次数","查看人数"],s(t).then((t=>{this.cardData[0].value=t.data.sendTotalNum,this.cardData[1].value=t.data.viewTotalNum,this.cardData[2].value=t.data.viewByTotalNum,this.cardData[3].value=t.data.sendTodayNum,this.cardData[4].value=t.data.viewTotalTodayNum,this.cardData[5].value=t.data.viewByTotalTodayNum,this.xdata=[],this.series=[];let e=[],a=[],i=[];t.data&&t.data.contentAxisVoList.length&&(t.data.contentAxisVoList.forEach((t=>{this.xdata.push(t.dateStr),e.push(t.sendNum),a.push(t.viewNum),i.push(t.viewByNum)})),this.series=[e,a,i])}))},getTableChangeSize(){this.loading=!0,o(this.query).then((t=>{this.tableList=t.data,this.loading=!1}))}},created(){this.getTableChangeSize()}},y={class:"g-card"},T=(t=>(b("data-v-4c9b767f"),t=t(),w(),t))((()=>c("div",{class:"g-card-title"},"数据趋势",-1))),C={class:"g-card"},x={class:"g-card-title"};const D=l(f,[["render",function(t,e,a,i,s,o){const l=r("CardGroupIndex"),b=r("search-title"),w=r("chart-line"),f=r("el-icon-QuestionFilled"),D=r("el-popover"),N=r("el-table-column"),S=r("el-button"),L=r("el-table"),q=r("ScriptMaterial"),k=p("loading");return n(),m("div",null,[d(l,{data:s.cardData},null,8,["data"]),c("div",y,[T,d(b,{showScene:!0,onSearch:o.getLineData},null,8,["onSearch"]),d(w,{style:{height:"300px"},legend:s.legend,xData:s.xdata,series:s.series},null,8,["legend","xData","series"])]),c("div",C,[c("div",x,[u(" 话术触达 Top5 "),d(D,{trigger:"hover",content:"仅统计话术中轨迹素材被查看情况统计，排行权重：查看总人数 > 查看总次数 > 发送总次数",placement:"top-start"},{reference:h((()=>[d(f,{class:"el-icon-QuestionFilled"})])),_:1})]),j((n(),v(L,{data:s.tableList,style:{width:"100%"}},{default:h((()=>[d(N,{type:"index",width:"50"}),d(N,{label:"话术标题",align:"center","min-width":"100",prop:"talkTitle","show-overflow-tooltip":""}),d(N,{label:"话术素材数量",align:"center","min-width":"100",prop:"materialNum","show-overflow-tooltip":""},{default:h((t=>[d(S,{text:"",onClick:e=>o.numClick(t.row)},{default:h((()=>[u(g(t.row.materialNum),1)])),_:2},1032,["onClick"])])),_:1}),d(N,{label:"查看总人数",align:"center","min-width":"100",prop:"viewByTotalNum","show-overflow-tooltip":""}),d(N,{label:"查看总次数",align:"center","min-width":"100",prop:"viewTotalNum","show-overflow-tooltip":""}),d(N,{label:"发送总次数",align:"center","min-width":"100",prop:"sendTotalNum","show-overflow-tooltip":""})])),_:1},8,["data"])),[[k,s.loading]])]),d(q,{query:s.obj,talkType:"0",resourceType:"2",visible:s.dialogVisible,onVisibleChange:o.visibleChange},null,8,["query","visible","onVisibleChange"])])}],["__scopeId","data-v-4c9b767f"]]);export{D as default};