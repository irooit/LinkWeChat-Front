import{I as e,X as a,Y as t,R as l,S as s,T as r}from"../index-044285d2.js";import i from"./record-d8133c69.js";import o from"./record-table-6037d986.js";import d from"./detail-c77f4d42.js";import u from"./chatListClassTab-fcdefbef.js";import{_ as n}from"./quill-image-resize-module-c051113e.js";import{ai as p,aq as c,o as m,c as f,_ as h,U as y,T as b,a as g,K as k,a9 as _,Y as v,Z as j,X as S,P as w,V as C,bl as I,bj as T}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./businessConver-2b86f97c.js";import"./MaterialCard-ea409fb9.js";import"./chatList-cf9d0aa9.js";import"./ChatContent-f938bb33.js";import"./benz-amr-recorder-259e7c16.js";import"./content-6f300c2d.js";const q={name:"",props:{stageList:{type:Array,default:[]},userId:{type:String,default:""},trackUsers:{type:Array,default:[]}},components:{record:i,RecordTable:o,Detail:d,chatListClassTab:u},data:()=>({portrayalSum:{companyTags:[],personTags:[],trackStates:[],trackUsers:[]},trajectoryType:{0:"全部",1:"客户动态",2:"员工动态",3:"互动动态",4:"商机阶段"},recod:[],active:"0",openedTabs:["0"],openTrack:["0"],lastSyncTime:null,dictTrackState:e,fieldList:[],stage:[],activeName:"first",query:{pageNum:1,pageSize:10,orderStatus:""},orderStateList:[],loading:!1,total:0,list:[],visible:!1,orderId:void 0,chatTab:[{checked:!0,lable:"全部",type:"all"},{checked:!1,lable:"图片&视频",type:"image,video"},{checked:!1,lable:"文件",type:"file"},{checked:!1,lable:"链接",type:"link"},{checked:!1,lable:"语音",type:"voice,meeting_voice_call"}],queryChat:{},tabType:"all"}),computed:{},watch:{stageList:{deep:!0,immediate:!0,handler(e){e&&(this.stage=e)}}},created(){this.userId?this.getCustomerInfoByUserId():this.getSummary(),this.getOrderStatus(),this.getList(),this.getChatList()},mounted(){},methods:{resetFn(){this.query={pageNum:1,pageSize:10,orderStatus:""},this.getList()},search(){this.query.pageNum=1,this.getList()},getList(){this.loading=!0,this.query.userId=this.userId,this.query.externalUserid=this.$route.query.externalUserid,a(this.query).then((({rows:e,total:a})=>{this.list=e,this.total=Number(a),this.loading=!1})).catch((()=>{}))},getOrderStatus(){t().then((e=>{this.orderStateList=e.data}))},getChatList(){this.queryChat={fromId:this.userId,toList:this.$route.query.externalUserid}},setList(e){let a=0;return this.stage.forEach(((t,l)=>{t.stageVal==e&&(a=l)})),a+1},setActive(e){return this.stage.map((e=>2==e.stageState)).length+2},getSummary(){l(this.$route.query).then((({data:e})=>{this.portrayalSum=e}))},getCustomerInfoByUserId(){s({externalUserid:this.$route.query.externalUserid,weUserId:this.userId}).then((({data:e})=>{this.portrayalSum=e,r({externalUserId:this.$route.query.externalUserid,weUserId:this.userId}).then((e=>{this.setData(e.data)}))}))},setData(e){let a=e;a.forEach(((e,t)=>{if(0==e.isDefault){let l=this.getEditValue(e),s={...e,...l};a[t]=s}})),this.fieldList=a},getEditValue(e){let a={value:3!==e.type||1==e.typeSub?"":[]};return this.portrayalSum.weCustomerInfoExpands&&this.portrayalSum.weCustomerInfoExpands.forEach(((t,l)=>{t.fieldTemplateId===e.id&&t.fieldCustomerInfoVal&&t.fieldCustomerInfoVal.length&&(3!==e.type?a.value=t.fieldCustomerInfoVal[0].infoVal:(a.value=t.fieldCustomerInfoVal.map((e=>e.infoVal)),1==e.typeSub&&(a.value=a.value[0])))})),a},changeTab(e){this.openedTabs.includes(e.index)||this.openedTabs.push(e.index)},jsGetAge(e){if(!e)return"无";let a,t=e.split("-"),l=t[0],s=t[1],r=t[2],i=new Date,o=i.getFullYear(),d=i.getMonth()+1,u=i.getDate();if(o==l)a=0;else{let e=o-l;if(e>0)if(d==s){a=u-r<0?e-1:e}else{a=d-s<0?e-1:e}else a=-1}return a},getDetail(e){this.visible=!0,this.orderId=e},chatTabClick(e,a){this.tabType=a,this.chatTab=this.chatTab.map(((a,t)=>(a.checked=!1,e===t&&(a.checked=!0),a)))}}},L=e=>(I("data-v-c536ee49"),e=e(),T(),e),N=L((()=>g("div",{class:"card-title"},"详细资料",-1))),U={style:{"max-height":"450px",overflow:"hidden auto"}},V=L((()=>g("div",{class:"card-title"},"商机阶段",-1))),x={key:0,class:"name oe g-bg-lg"},D={key:4,class:"g-tip-color ac"},z={key:1,class:"g-tip-color ac"},E=L((()=>g("div",{class:"card-title"},"跟进记录",-1))),A={key:2,class:"g-tip-color ac"},$={class:"flex"},K={class:"code-content"},F={class:"flex track-tab-wrap mb15"},M=["onClick"];const B=n(q,[["render",function(e,a,t,l,s,r){const i=p("el-col"),o=p("el-row"),d=p("el-card"),u=p("el-tab-pane"),n=p("el-step"),I=p("el-steps"),T=p("record-table"),q=p("el-tabs"),L=p("el-option"),B=p("el-select"),O=p("el-form-item"),P=p("el-button"),X=p("el-form"),Y=p("el-image"),G=p("el-table-column"),J=p("el-table"),R=p("pagination"),H=p("Detail"),W=p("chatListClassTab"),Z=c("loading");return m(),f("div",null,[h(o,{gutter:10},{default:y((()=>[h(i,{span:24},{default:y((()=>[h(q,{modelValue:s.activeName,"onUpdate:modelValue":a[5]||(a[5]=e=>s.activeName=e),onTabClick:e.handleClick},{default:y((()=>[h(u,{label:"资料",name:"first"},{default:y((()=>[t.userId?(m(),b(d,{key:0,class:"mb10",shadow:"never"},{header:y((()=>[N])),default:y((()=>[g("div",U,[h(o,{gutter:20,type:"type",class:"pad10",justify:"space-between",style:{"flex-wrap":"wrap"}},{default:y((()=>[(m(!0),f(k,null,_(s.fieldList,((e,a)=>(m(),f(k,{key:a},[["address","customerFullName"].includes(e.labelVal)?S("",!0):(m(),f(k,{key:0},[1==e.isDefault?(m(),b(i,{key:0,span:12},{default:y((()=>["remarkMobiles"==e.labelVal?(m(),b(o,{key:0,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.phone||"无"),1)])),_:1})])),_:2},1024)):"age"==e.labelVal?(m(),b(o,{key:1,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(r.jsGetAge(s.portrayalSum.birthday)),1)])),_:1})])),_:2},1024)):"birthday"==e.labelVal?(m(),b(o,{key:2,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.birthday||"无"),1)])),_:1})])),_:2},1024)):"email"==e.labelVal?(m(),b(o,{key:3,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.email||"无"),1)])),_:1})])),_:2},1024)):"area"==e.labelVal?(m(),b(o,{key:4,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.address||"无"),1)])),_:1})])),_:2},1024)):"qq"==e.labelVal?(m(),b(o,{key:5,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.qq||"无"),1)])),_:1})])),_:2},1024)):"position"==e.labelVal?(m(),b(o,{key:6,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.position||"无"),1)])),_:1})])),_:2},1024)):"remarkCorpName"==e.labelVal?(m(),b(o,{key:7,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.corpName||"无"),1)])),_:1})])),_:2},1024)):"otherDescr"==e.labelVal?(m(),b(o,{key:8,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(s.portrayalSum.otherDescr||"无"),1)])),_:1})])),_:2},1024)):S("",!0)])),_:2},1024)):(m(),b(i,{key:1,span:12},{default:y((()=>[3!==e.type?(m(),b(o,{key:0,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(e.value||"无"),1)])),_:2},1024)])),_:2},1024)):(m(),f(k,{key:1},[1==e.typeSub?(m(),b(o,{key:0,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(e.value||"无"),1)])),_:2},1024)])),_:2},1024)):(m(),b(o,{key:1,class:"baseinfo-row"},{default:y((()=>[h(i,{span:6},{default:y((()=>[v(j(e.labelName),1)])),_:2},1024),h(i,{span:18},{default:y((()=>[v(j(e.value.join(",")||"无"),1)])),_:2},1024)])),_:2},1024))],64))])),_:2},1024))],64))],64)))),128))])),_:1})])])),_:1})):S("",!0)])),_:1}),h(u,{label:"跟进",name:"second"},{default:y((()=>[h(d,{class:"mb10",shadow:"never"},{header:y((()=>[V])),default:y((()=>[t.trackUsers&&t.trackUsers.length?(m(!0),f(k,{key:0},_(t.trackUsers,((e,a)=>(m(),f("div",{key:a,class:w(["flex aic",a&&"mt20"])},[v(" 汇总的场景显示名字 "),t.userId?S("",!0):(m(),f("div",x,j(e.userName),1)),1===e.trackState?(m(),b(I,{key:1,style:{flex:"auto"},active:1},{default:y((()=>[h(n,{title:"待跟进"})])),_:1})):3===e.trackState||4===e.trackState||5===e.trackState?(m(),b(I,{key:2,style:{flex:"auto"},active:r.setActive(e.trackState)},{default:y((()=>[h(n,{title:"待跟进"}),(m(!0),f(k,null,_(s.stage,((e,a)=>(m(),f(k,null,[2==e.stageState?(m(),b(n,{title:e.stageKey,key:a},null,8,["title"])):S("",!0)],64)))),256)),(m(!0),f(k,null,_(s.stage,((a,t)=>(m(),f(k,null,[e.trackState==a.stageVal?(m(),b(n,{title:a.stageKey,key:t},null,8,["title"])):S("",!0)],64)))),256))])),_:2},1032,["active"])):e.trackState?(m(),b(I,{key:3,style:{flex:"auto"},active:r.setList(e.trackState)},{default:y((()=>[(m(!0),f(k,null,_(s.stage,((a,t)=>(m(),f(k,null,[r.setList(e.trackState)<=t+1?(m(),b(n,{title:a.stageKey,key:t},null,8,["title"])):S("",!0)],64)))),256))])),_:2},1032,["active"])):(m(),f("div",D,"暂无数据"))],2)))),128)):(m(),f("div",z,"暂无数据"))])),_:1}),h(d,{shadow:"never"},{header:y((()=>[E])),default:y((()=>[t.userId?(m(),b(T,{key:0,stageList:s.stage,userId:t.userId},null,8,["stageList","userId"])):t.trackUsers&&t.trackUsers.length?(m(),b(q,{key:1,"model-value":"0",onTabClick:r.changeTab},{default:y((()=>[(m(!0),f(k,null,_(t.trackUsers,((e,a)=>(m(),b(u,{key:a,label:e.userName},{default:y((()=>[s.openedTabs.includes(a+"")?(m(),b(T,{key:0,stageList:s.stage,userId:e.trackUserId},null,8,["stageList","userId"])):S("",!0)])),_:2},1032,["label"])))),128))])),_:1},8,["onTabClick"])):(m(),f("div",A,"暂无数据"))])),_:1})])),_:1}),h(u,{label:"订单",name:"third"},{default:y((()=>[h(X,{inline:!0,"label-width":"80px","label-position":"left",class:"top-search mt20"},{default:y((()=>[h(O,{label:"","label-width":"0px"},{default:y((()=>[h(B,{modelValue:s.query.orderStatus,"onUpdate:modelValue":a[0]||(a[0]=e=>s.query.orderStatus=e),"popper-append-to-body":!1},{default:y((()=>[h(L,{label:"全部状态",value:""}),(m(!0),f(k,null,_(s.orderStateList,((e,a)=>(m(),b(L,{label:e,value:e,key:a},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),h(O,{"label-width":"0"},{default:y((()=>[h(P,{type:"primary",onClick:r.search},{default:y((()=>[v("查询")])),_:1},8,["onClick"]),h(P,{onClick:r.resetFn},{default:y((()=>[v("清空")])),_:1},8,["onClick"])])),_:1})])),_:1}),C((m(),b(J,{data:s.list,onSelectionChange:e.handleSelectionChange,style:{width:"100%"}},{default:y((()=>[h(G,{label:"商品名称",align:"center","min-width":"100",prop:"productName","show-overflow-tooltip":""},{default:y((({row:e})=>[g("div",$,[h(Y,{src:e.productUrl,class:"code-image"},null,8,["src"]),g("span",K,j(e.productName),1)])])),_:1}),h(G,{label:"商品数量",align:"center","min-width":"120",prop:"amount","show-overflow-tooltip":""}),h(G,{label:"订单状态",align:"center",prop:"orderStatus",width:"180"}),h(G,{label:"订单金额(元)",align:"center",prop:"totalPrice",width:"180"}),h(G,{label:"购买人/下单时间",align:"center","min-width":"100","show-overflow-tooltip":""},{default:y((({row:e})=>[v(j(e.purchaser)+" "+j(e.orderTime),1)])),_:1}),h(G,{label:"操作",align:"center",fixed:"right",width:"180"},{default:y((({row:e})=>[h(P,{text:"",onClick:a=>r.getDetail(e.id)},{default:y((()=>[v("详情")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[Z,s.loading]]),h(R,{total:s.total,page:s.query.pageNum,"onUpdate:page":a[1]||(a[1]=e=>s.query.pageNum=e),limit:s.query.pageSize,"onUpdate:limit":a[2]||(a[2]=e=>s.query.pageSize=e),onPagination:a[3]||(a[3]=e=>r.getList())},null,8,["total","page","limit"]),h(H,{visible:s.visible,onClose:a[4]||(a[4]=e=>s.visible=!1),id:s.orderId},null,8,["visible","id"])])),_:1}),h(u,{label:"会话",name:"fourth"},{default:y((()=>[g("div",F,[(m(!0),f(k,null,_(s.chatTab,((e,a)=>(m(),f("div",{class:w(["track-tab",e.checked&&"active"]),key:a,onClick:t=>r.chatTabClick(a,e.type)},j(e.lable),11,M)))),128))]),h(W,{queryChat:s.queryChat,type:s.tabType},null,8,["queryChat","type"])])),_:1})])),_:1},8,["modelValue","onTabClick"])])),_:1})])),_:1})])}],["__scopeId","data-v-c536ee49"]]);export{B as default};