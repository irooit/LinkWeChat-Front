import e from"./ChartBar-39a01942.js";import t from"./ChartLine-b009fc4d.js";import{r}from"../index-044285d2.js";import{g as s}from"./group-e56f61ac.js";import{_ as a}from"./quill-image-resize-module-c051113e.js";import{ai as o,aq as l,o as i,c as u,a as n,_ as m,U as p,Y as d,T as g,X as c,V as h,K as b,a9 as y}from"./@vue-e400fd81.js";const f=window.lwConfig.services.wecom+"/operation/group";function G(){return r({url:f+"/getAnalysis"})}function T(e){return r({url:f+"/getGroupRealPageCnt",params:e})}function C(e){return r({url:f+"/member/getGroupMemberRealPageCnt",params:e})}const M=Object.freeze(Object.defineProperty({__proto__:null,getAnalysis:G,getRealCnt:T,getRealCntMember:C,getTotalCnt:function(e){return r({url:f+"/getTotalCnt",params:e})},getTotalCntMember:function(e){return r({url:f+"/member/getTotalCnt",params:e})},realDataExport:function(e){return r({url:f+"/real/export",params:e,responseType:"blob"})},realDataExportMember:function(e){return r({url:f+"/member/real/export",params:e,responseType:"blob"})}},Symbol.toStringTag,{value:"Module"})),x={class:"operation mb20"};const v=a({name:"",components:{ChartLine:t,ChartBar:e},props:{type:{type:String,default:""}},data:()=>({loading:{customerGroup:!1,customerGroupMember:!1},timeRange:7,dateRange:[],dialogVisible:!1,dialogType:"customerGroup",groupChats:[],query:{chatIds:"",ownerIds:"",beginTime:void 0,endTime:void 0},legend:{customerGroup:["新增客群数","解散客群数"],customerGroupMember:["新增客群成员数","流失客群成员数"]},selectUsers:{customerGroup:[],customerGroupMember:[]},customerGroup:{xData:[],series:[]},customerGroupMember:{xData:[],series:[]}}),computed:{},watch:{},created(){this.setTime(7)},mounted(){},methods:{getList(e){this.query.beginTime=this.dateRange&&this.dateRange[0],this.query.endTime=this.dateRange&&this.dateRange[1];let t=this.selectUsers[e];Array.isArray(t)?this.query.ownerIds=t.map((e=>e.userId)).join(","):this.query.ownerIds="",this.loading[e]=!0,{customerGroup:T,customerGroupMember:C}[e](this.query).then((({rows:t})=>{this[e].series=[],this[e].xData=t.map((e=>e.xtime)),this[e].series.push(t.map((e=>e.addCnt))),"customerGroup"===e&&this[e].series.push(t.map((e=>e.dissolveCnt))),"customerGroupMember"===e&&this[e].series.push(t.map((e=>e.quitCnt)))})).catch((e=>{})).finally((()=>{this.loading[e]=!1}))},getGroupList(e){s(e).then((({rows:e})=>{this.groupChats=e})).catch((e=>{}))},getTime(e){const t=e?new Date(e):new Date;return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toJSON().substr(0,10)},setTime(e){if(this.timeRange=e,e){let t=new Date;t.setDate(t.getDate()-e),this.dateRange=[this.getTime(t),this.getTime()],this.getList("customerGroup"),this.getList("customerGroupMember")}else this.dateRange=null},showDialog(e){this.dialogType=e,this.dialogVisible=!0},getSelectUser(e){this.selectUsers[this.dialogType]=e,this.query[this.dialogType]=e.map((e=>e.userId)).join(","),"customerGroupMember"===this.dialogType&&(this.query.chatIds="",this.getGroupList({userIds:this.query[this.dialogType]})),this.getList(this.dialogType)}}},[["render",function(e,t,r,s,a,f){const G=o("el-button"),T=o("el-button-group"),C=o("el-date-picker"),M=o("el-input"),v=o("ChartLine"),D=o("el-col"),w=o("el-option"),R=o("el-select"),_=o("el-row"),q=o("SelectUser"),L=l("loading");return i(),u("div",null,[n("div",x,[m(T,null,{default:p((()=>[m(G,{type:"primary",plain:7!=a.timeRange,onClick:t[0]||(t[0]=e=>f.setTime(7))},{default:p((()=>[d("近一周")])),_:1},8,["plain"]),m(G,{type:"primary",plain:30!=a.timeRange,onClick:t[1]||(t[1]=e=>f.setTime(30))},{default:p((()=>[d("近一月")])),_:1},8,["plain"]),m(G,{type:"primary",plain:!!a.timeRange,onClick:t[2]||(t[2]=e=>f.setTime())},{default:p((()=>[d("自定义")])),_:1},8,["plain"])])),_:1}),a.timeRange?c("",!0):(i(),g(C,{key:0,modelValue:a.dateRange,"onUpdate:modelValue":t[3]||(t[3]=e=>a.dateRange=e),class:"ml20",style:{width:"260px"},"value-format":"YYYY-MM-DD",type:"daterange",clearable:!1,"range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期",onChange:t[4]||(t[4]=e=>(f.getList("customerGroup"),f.getList("customerGroupMember")))},null,8,["modelValue"]))]),m(_,{gutter:10},{default:p((()=>[m(D,{span:12},{default:p((()=>[n("div",null,[m(M,{style:{width:"180px"},"model-value":a.selectUsers.customerGroup.map((e=>e.name))+"",readonly:"",onClick:t[5]||(t[5]=e=>f.showDialog("customerGroup")),placeholder:"请选择群主"},null,8,["model-value"])]),h(m(v,{style:{height:"400px"},xData:a.customerGroup.xData,legend:a.legend.customerGroup,series:a.customerGroup.series},null,8,["xData","legend","series"]),[[L,a.loading.customerGroup]])])),_:1}),m(D,{span:12},{default:p((()=>[n("div",null,[m(M,{style:{width:"180px"},"model-value":a.selectUsers.customerGroupMember.map((e=>e.name))+"",readonly:"",onClick:t[6]||(t[6]=e=>f.showDialog("customerGroupMember")),placeholder:"请选择群主"},null,8,["model-value"]),m(R,{style:{"margin-left":"20px"},modelValue:a.query.chatIds,"onUpdate:modelValue":t[7]||(t[7]=e=>a.query.chatIds=e),placeholder:"请选择群聊",clearable:"",onChange:t[8]||(t[8]=e=>f.getList("customerGroupMember"))},{default:p((()=>[(i(!0),u(b,null,y(a.groupChats,(e=>(i(),g(w,{key:e.chatId,label:e.groupName,value:e.chatId},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])]),h(m(v,{style:{height:"400px"},xData:a.customerGroupMember.xData,legend:a.legend.customerGroupMember,series:a.customerGroupMember.series},null,8,["xData","legend","series"]),[[L,a.loading.customerGroupMember]])])),_:1})])),_:1}),m(q,{visible:a.dialogVisible,"onUpdate:visible":t[9]||(t[9]=e=>a.dialogVisible=e),title:"组织架构",defaultValues:a.selectUsers[a.dialogType],onSuccess:f.getSelectUser,isOnlyLeaf:!0},null,8,["visible","defaultValues","onSuccess"])])}]]),D=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as T,M as a,D as b,G as g};