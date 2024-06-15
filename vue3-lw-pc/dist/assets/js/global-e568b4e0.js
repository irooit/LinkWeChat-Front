import{g as e,e as a}from"./content-6f300c2d.js";import{C as t}from"./ChatContent-f938bb33.js";import{d as l}from"../index-044285d2.js";import{ai as o,aq as s,o as i,c as r,_ as n,U as m,R as p,K as d,a9 as u,T as c,Y as g,a as h,V as y,Z as f,X as j,$ as b,bl as q,bj as v}from"./@vue-e400fd81.js";import{_}from"./quill-image-resize-module-c051113e.js";import"./benz-amr-recorder-259e7c16.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const w={components:{ChatContent:t},data:()=>({query:{action:"",userName:"",customerName:"",contact:"",beginTime:"",endTime:"",pageNum:1,pageSize:10,orderByColumn:"t.msg_time",isAsc:"desc",fullSearch:1},dateRange:[],total:0,fileData:[],floorRange:"全部",displayOptions:[{value:"",label:"全部"},{value:"send",label:"已发送"},{value:"recall",label:"已撤回"},{value:"switch",label:"切回企业日志"}],loading:!1}),created(){this.getList()},methods:{resetFn(){this.dateRange=[],this.query={action:"",userName:"",customerName:"",contact:"",beginTime:"",endTime:"",pageNum:1,pageSize:10,orderByColumn:"t.msg_time",isAsc:"desc"},this.getList(1)},getList(a){this.dateRange?(this.query.beginTime=this.dateRange[0],this.query.endTime=this.dateRange[1]):(this.query.beginTime="",this.query.endTime=""),a&&(this.query.pageNum=a),this.loading=!0,e(this.query).then((e=>{this.fileData=e.rows,this.total=~~e.total,this.loading=!1})).catch((()=>{this.loading=!1}))},parseMesContent:(e,a)=>JSON.parse(e)[a],exportList(){this.$confirm("是否确认导出所有数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>a(this.query))).then((e=>{if(!e)return;const a=new Blob([e],{type:"application/vnd.ms-excel"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(a,"内容存档");else{const e=URL.createObjectURL(a),t=document.createElement("a");t.style.display="none",t.href=e,t.download=l(new Date,"YYYY-MM-DD")+"_内容存档.xlsx",t.click(),URL.revokeObjectURL(t.href)}})).catch((function(){}))}}},k=e=>(q("data-v-0d329ca0"),e=e(),v(),e),V={class:"g-card"},C={key:0},N={class:"pers"},R={key:0},U={key:1},Y=k((()=>h("span",{class:"green"},null,-1))),L={key:2},T=k((()=>h("span",{class:"red"},null,-1))),x={key:3},D=k((()=>h("span",{class:"gay"},null,-1)));const z=_(w,[["render",function(e,a,t,l,q,v){const _=o("el-input"),w=o("el-form-item"),k=o("el-date-picker"),z=o("el-option"),O=o("el-select"),B=o("el-button"),M=o("el-form"),S=o("el-table-column"),A=o("ChatContent"),J=o("el-table"),E=o("pagination"),F=s("loading");return i(),r("div",null,[n(M,{inline:!0,model:q.query,class:"top-search",style:{top:"40px"}},{default:m((()=>[n(w,{label:"员工名称"},{default:m((()=>[n(_,{modelValue:q.query.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>q.query.userName=e),clearable:"",placeholder:"请输入"},null,8,["modelValue"])])),_:1}),n(w,{label:"客户名称"},{default:m((()=>[n(_,{modelValue:q.query.customerName,"onUpdate:modelValue":a[1]||(a[1]=e=>q.query.customerName=e),clearable:"",placeholder:"请输入"},null,8,["modelValue"])])),_:1}),n(w,{label:"查找内容"},{default:m((()=>[n(_,{modelValue:q.query.contact,"onUpdate:modelValue":a[2]||(a[2]=e=>q.query.contact=e),clearable:"",placeholder:"请输入"},null,8,["modelValue"])])),_:1}),n(w,{label:"时间范围"},{default:m((()=>[n(k,p({clearable:"",modelValue:q.dateRange,"onUpdate:modelValue":a[3]||(a[3]=e=>q.dateRange=e),type:"daterange",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},e.pickerOptions),null,16,["modelValue"])])),_:1}),n(w,{label:"消息状态"},{default:m((()=>[n(O,{modelValue:q.query.action,"onUpdate:modelValue":a[4]||(a[4]=e=>q.query.action=e),class:"noborder"},{default:m((()=>[(i(!0),r(d,null,u(q.displayOptions,(e=>(i(),c(z,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),n(w,null,{default:m((()=>[n(B,{type:"primary",onClick:a[5]||(a[5]=e=>v.getList(1))},{default:m((()=>[g("查询")])),_:1}),n(B,{onClick:v.resetFn},{default:m((()=>[g("重置")])),_:1},8,["onClick"])])),_:1}),n(w,{style:{float:"right"}},{default:m((()=>[n(B,{type:"primary",onClick:a[6]||(a[6]=e=>v.exportList())},{default:m((()=>[g("导出列表")])),_:1})])),_:1})])),_:1},8,["model"]),h("div",V,[y((i(),c(J,{data:q.fileData},{default:m((()=>[n(S,{prop:"date",label:"发送者",width:"180"},{default:m((e=>[e.row?(i(),r("p",C,f(e.row.name),1)):j("",!0)])),_:1}),n(S,{prop:"name",label:" 内容"},{default:m((({row:e})=>[n(A,{message:e,class:"ml0",style:{background:"var(--bg-black-10)"}},null,8,["message"])])),_:1}),n(S,{label:"消息状态",width:"200"},{default:m((e=>[h("div",N,[""==e.row.action?(i(),r("span",R)):"send"==e.row.action?(i(),r("span",U,[Y,g(" 已发送 ")])):"recall"==e.row.action?(i(),r("span",L,[T,g(" 已撤回 ")])):"switch"==e.row.action?(i(),r("span",x,[D,g(" 企业日志 ")])):j("",!0)])])),_:1}),n(S,{prop:"address",label:"发送时间",width:"200"},{default:m((e=>[g(f(e.row.msgTime),1)])),_:1})])),_:1},8,["data"])),[[F,q.loading]]),y(n(E,{total:q.total,page:q.query.pageNum,"onUpdate:page":a[7]||(a[7]=e=>q.query.pageNum=e),limit:q.query.pageSize,"onUpdate:limit":a[8]||(a[8]=e=>q.query.pageSize=e),onPagination:a[9]||(a[9]=e=>v.getList())},null,8,["total","page","limit"]),[[b,q.total>0]])])])}],["__scopeId","data-v-0d329ca0"]]);export{z as default};
