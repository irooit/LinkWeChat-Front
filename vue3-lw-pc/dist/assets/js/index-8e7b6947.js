import t from"./ChartBar-39a01942.js";import e from"./ChartLine-b009fc4d.js";import a from"./SearchTitle-ceb204ee.js";import{g as i,b as s}from"./common-07456f0f.js";import o from"./PicTitContent-8b500b6d.js";import{_ as r}from"./quill-image-resize-module-c051113e.js";import{ai as l,aq as n,o as p,c as d,_ as m,a as u,Y as c,U as h,V as j,T as v,Z as g}from"./@vue-e400fd81.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./lodash.merge-f1a4e0c2.js";import"./moment-8163541f.js";const w={name:"scene-statistics-scene",components:{SearchTitle:a,ChartLine:e,ChartBar:t,PicTitContent:o},data:()=>({exportLoading:!1,legend:["发送次数","查看次数","查看人数"],xdata:[],series:[],activeName:"first",cardData:[{title:"发送总次数 ",tips:"全部素材在侧边栏被员工发送次数",value:0,noArrow:!0},{title:"查看总次数",tips:"全部轨迹素材被客户打开的总次数，不去重",value:0},{title:"查看总人数",tips:"全部轨迹素材被客户打开且授权的总人数，去重",value:0},{title:"今日发送次数",tips:"全部素材今日在侧边栏被员工发送的次数",value:0},{title:"今日查看次数",tips:"全部轨迹素材今日被客户打开的次数，不去重",value:0},{title:"今日查看人数",tips:"全部轨迹素材今日被客户打开且授权的人数，去重     ",value:0}],query:{moduleType:1},tableList:[],loading:!1,searchData:{},bar1:[],bar2:[],value1:[],value2:[],tableSearch:{}}),methods:{getLineData(t){t.moduleType=1,this.legend=["发送次数","查看次数","查看人数"],i(t).then((t=>{this.cardData[0].value=t.data.sendTotalNum,this.cardData[1].value=t.data.viewTotalNum,this.cardData[2].value=t.data.viewByTotalNum,this.cardData[3].value=t.data.sendTodayNum,this.cardData[4].value=t.data.viewTotalTodayNum,this.cardData[5].value=t.data.viewByTotalTodayNum,this.xdata=[],this.series=[];let e=[],a=[],i=[];t.data&&t.data.contentAxisVoList.length&&(t.data.contentAxisVoList.forEach((t=>{this.xdata.push(t.dateStr),e.push(t.sendNum),a.push(t.viewNum),i.push(t.viewByNum)})),this.series=[e,a,i])}))},getTableChangeSize(){this.loading=!0,s(this.query).then((t=>{this.tableList=t.data,this.loading=!1}))}},created(){this.getTableChangeSize(),this.$store.setBusininessDesc("\n      <div>全部素材发送与查看情况数据统计与分析</div>\n    ")}},f={class:"g-card"},T=u("div",{class:"g-card-title"},"数据趋势",-1),b={class:"g-card"},y={class:"g-card-title"};const x=r(w,[["render",function(t,e,a,i,s,o){const r=l("CardGroupIndex"),w=l("search-title"),x=l("chart-line"),D=l("el-icon-QuestionFilled"),N=l("el-popover"),C=l("el-table-column"),L=l("PicTitContent"),S=l("el-table"),q=n("loading");return p(),d("div",null,[m(r,{data:s.cardData},null,8,["data"]),u("div",f,[T,m(w,{showScene:!0,onSearch:o.getLineData},null,8,["onSearch"]),m(x,{style:{height:"300px"},legend:s.legend,xData:s.xdata,series:s.series},null,8,["legend","xData","series"])]),u("div",b,[u("div",y,[c(" 素材触达 Top5 "),m(N,{trigger:"hover",content:"仅统计轨迹素材被查看情况统计，排行权重：查看总人数 > 查看总次数 > 发送总次数",placement:"top-start"},{reference:h((()=>[m(D,{class:"el-icon-QuestionFilled"})])),_:1})]),j((p(),v(S,{data:s.tableList,style:{width:"100%"}},{default:h((()=>[m(C,{type:"index",width:"50"}),m(C,{label:"素材",align:"center","min-width":"100",prop:"materialName","show-overflow-tooltip":""},{default:h((({row:t})=>[m(L,{row:t},null,8,["row"])])),_:1}),m(C,{label:"素材类型",align:"center","min-width":"100","show-overflow-tooltip":""},{default:h((({row:e})=>{var a;return[u("div",null,g(null==(a=t.$dictMaterialType[e.mediaType])?void 0:a.name),1)]})),_:1}),m(C,{label:"查看总人数",align:"center","min-width":"100",prop:"viewByTotalNum","show-overflow-tooltip":""}),m(C,{label:"查看总次数",align:"center","min-width":"100",prop:"viewTotalNum","show-overflow-tooltip":""}),m(C,{label:"发送总次数",align:"center","min-width":"100",prop:"sendTotalNum","show-overflow-tooltip":""})])),_:1},8,["data"])),[[q,s.loading]])])])}]]);export{x as default};