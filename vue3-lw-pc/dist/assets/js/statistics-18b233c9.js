import{h as t,i as e,j as s,k as i}from"./group-16414119.js";import{u as a}from"./vue-router-f8d53be7.js";import{r as o,ai as r,o as l,c as p,_ as m,u,U as n}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./quill-image-resize-module-c051113e.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";const j={__name:"statistics",setup(j){let d={id:a().query.id},c=o([]);function h(t,e,s){e.length=0,s.length=0,t.forEach((t=>{(e[0]??(e[0]=[])).push(t.total),(e[1]??(e[1]=[])).push(t.today),(e[2]??(e[2]=[])).push(t.todayLinkVisitsTotal),(e[3]??(e[3]=[])).push(t.todayLinkVisitsPeopleTotal),s.push(t.dateTime)}))}return t(d).then((({data:t})=>{c.value=[{title:"累计扫码总数",tips:"当前累计扫码添加成功的总数(去重)",value:t.total},{title:"今日扫码数",tips:"今日扫码添加成功的总人数(去重",value:t.today},{title:"短链访问总数",tips:"智能短链访问的总数(PV)",value:t.linkVisitsTotal},{title:"短链访问总人数",tips:"智能短链访问的总人数(UV)",value:t.linkVisitsPeopleTotal}]})),(t,a)=>{const o=r("CardGroupIndex"),j=r("RequestChartTable"),y=r("el-table-column"),f=r("el-table");return l(),p("div",null,[m(o,{data:u(c)},null,8,["data"]),m(j,{title:"数据趋势",type:"lineChart",isTimeQuery:"",isCreateRequest:!1,legend:["累计扫码总数","今日扫码数","今日短链访问数","今日短链访问人数"],params:u(d),request:u(e),dealDataFun:h},null,8,["params","request"]),m(j,{title:"数据报表",isTimeQuery:"",request:u(s),params:u(d),requestExport:u(i),exportFileName:"客群活码数据报表导出.xls"},{default:n((({data:t})=>[m(f,{data:t},{default:n((()=>[m(y,{label:"日期",prop:"dateTime",align:"center"}),m(y,{label:"累计扫码总数",prop:"total",align:"center"}),m(y,{label:"今日扫码数",prop:"today",align:"center"}),m(y,{label:"今日短链访问数",prop:"todayLinkVisitsTotal",align:"center"}),m(y,{label:"今日短链访问人数",prop:"todayLinkVisitsPeopleTotal",align:"center"})])),_:2},1032,["data"])])),_:1},8,["request","params","requestExport"])])}}};export{j as default};