import e from"./MaPage-9d566962.js";import t from"./PicTitContent-8b500b6d.js";import{_ as i}from"./quill-image-resize-module-c051113e.js";import{ai as l,aq as o,o as a,T as r,U as s,_ as n,a as p,Y as d,Z as m,V as c,bl as u,bj as j}from"./@vue-e400fd81.js";import"./index-0bf429ac.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./AddOrEditMaterialDialog-00cd185a.js";import"./staff-48996164.js";import"./common-07456f0f.js";const f={name:"MImageText",components:{MaPage:e,PicTitContent:t},data:()=>({srcList:[],ids:[]}),watch:{},created(){},methods:{listChange(e){this.srcList=e.map((e=>e.materialUrl))},handleSelectionChange(e){this.ids=e.map((e=>e.id))},coverContent:e=>(e&&e.length>50&&(e=e.substr(0,50)+"..."),e)}},g=e=>(u("data-v-475bfc49"),e=e(),j(),e),h=g((()=>p("div",null,"客户查看素材时自动打标签",-1))),w=g((()=>p("div",null,"当前素材在侧边栏被员工发送的总次数",-1))),v=g((()=>p("div",null,"当前轨迹素材被客户打开的次数，不去重",-1))),b=g((()=>p("div",null,"当前轨迹素材被客户打开且授权的人数，去重",-1)));const _=i(f,[["render",function(e,t,i,u,j,f){const g=l("el-table-column"),_=l("PicTitContent"),C=l("el-icon-QuestionFilled"),x=l("el-popover"),y=l("TagEllipsis"),N=l("el-button"),T=l("el-table"),k=l("MaPage"),P=o("hasPermi");return a(),r(k,{ref:"page",type:"3",onListChange:f.listChange,selected:j.ids},{default:s((({list:t})=>[n(T,{data:t,onSelectionChange:f.handleSelectionChange},{default:s((()=>[n(g,{type:"selection",width:"50",align:"center"}),n(g,{label:"文件",width:"260",align:"center",prop:"materialName"},{default:s((({row:e})=>[n(_,{row:e},null,8,["row"])])),_:1}),n(g,{prop:"tagNames",label:"客户标签",align:"center",width:""},{header:s((()=>[n(x,{placement:"top",trigger:"hover"},{reference:s((()=>[p("div",null,[d(" 客户标签 "),n(C,{class:"el-icon-QuestionFilled"})])])),default:s((()=>[h])),_:1})])),default:s((({row:e})=>[n(y,{list:e.tagNames,emptyText:"无标签"},null,8,["list"])])),_:1}),n(g,{label:"发送总次数",align:"center",prop:"sendNum","show-overflow-tooltip":!0},{header:s((()=>[n(x,{placement:"top",trigger:"hover"},{reference:s((()=>[p("div",null,[d(" 发送总次数 "),n(C,{class:"el-icon-QuestionFilled"})])])),default:s((()=>[w])),_:1})])),default:s((({row:e})=>[d(m(e.sendNum),1)])),_:1}),n(g,{label:"查看总次数",align:"center",prop:"viewNum","show-overflow-tooltip":!0},{header:s((()=>[n(x,{placement:"top",trigger:"hover"},{reference:s((()=>[p("div",null,[d(" 查看总次数 "),n(C,{class:"el-icon-QuestionFilled"})])])),default:s((()=>[v])),_:1})])),default:s((({row:e})=>[d(m(e.viewNum),1)])),_:1}),n(g,{label:"查看总人数",align:"center",prop:"viewByNum","show-overflow-tooltip":!0},{header:s((()=>[n(x,{placement:"top",trigger:"hover"},{reference:s((()=>[p("div",null,[d(" 查看总人数 "),n(C,{class:"el-icon-QuestionFilled"})])])),default:s((()=>[b])),_:1})])),default:s((({row:e})=>[d(m(e.viewByNum),1)])),_:1}),n(g,{label:"最近更新",align:"center",width:"160px"},{default:s((t=>[p("div",null,m(t.row.updateBy),1),p("span",null,m(e.parseTime(t.row.updateTime)),1)])),_:1}),n(g,{label:"操作",align:"center",width:"160px",fixed:"right"},{default:s((t=>[c((a(),r(N,{text:"",onClick:i=>e.$refs.page.detail(t.row)},{default:s((()=>[d(" 详情|统计 ")])),_:2},1032,["onClick"])),[[P,["wechat:material:detail"]]]),n(N,{text:"",onClick:i=>e.$refs.page.edit(t.row)},{default:s((()=>[d("编辑")])),_:2},1032,["onClick"]),n(N,{text:"",onClick:i=>e.$refs.page.remove(t.row.id)},{default:s((()=>[d("删除")])),_:2},1032,["onClick"])])),_:1})])),_:2},1032,["data","onSelectionChange"])])),_:1},8,["onListChange","selected"])}],["__scopeId","data-v-475bfc49"]]);export{_ as default};
