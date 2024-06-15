import{h as e}from"./api-0004a25c.js";import t from"./FassionBase-f546bebc.js";import s from"./FassionSetting-845a69ca.js";import a from"./FassionRules-fc10684e.js";import i from"./Statistics-c17e7185.js";import o from"./detail-table-6e1cc353.js";import r from"./PreviewInPhone-9ed75a0f.js";import{_ as m}from"./quill-image-resize-module-c051113e.js";import{ai as l,o as p,c as n,_ as d,U as u,a as f,T as j,Y as c,X as h,Z as y,bl as v,bj as b}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./SelectFassionGroup-4cc11c95.js";import"./SelectGroup-e6b2682d.js";import"./group-e56f61ac.js";import"./modleCenter-5112f339.js";import"./IdentitySelect-1f4fc77b.js";import"./IdentitySelectBase-8ee7d5fd.js";import"./index-0bf429ac.js";import"./staff-48996164.js";import"./PicTitContent-8b500b6d.js";import"./SelectMember-7e073ac7.js";import"./organization-9bed3593.js";import"./SelectDept-7a07b4de.js";import"./SelectPost-d0ccd09d.js";import"./TemplateLibrary-f59d0076.js";import"./welcome-6ff4c53e.js";import"./poster-241340a9.js";import"./ChartLine-b009fc4d.js";import"./echarts-8e7b9cd7.js";import"./tslib-a4e99503.js";import"./zrender-da4e2cf7.js";import"./lodash.merge-f1a4e0c2.js";import"./SearchTitle-ceb204ee.js";import"./moment-8163541f.js";import"./SubDetail-10d2f221.js";const g={name:"task-group-detail",components:{FassionBase:t,FassionSettingVue:s,FassionRules:a,Statistics:i,DetailTable:o,PreviewInPhone:r},data:()=>({activeName:"first",form:{fassionType:1,fassionName:"",fassionStartTime:"",fassionEndTime:"",executeUserOrGroup:null,posterId:"",posterUrl:"",addWeUserOrGroupCode:{addWeUser:{executeUserCondit:{change:!1,weUserIds:[]},executeDeptCondit:{change:!1,deptIds:[],posts:[]}},addGroupCode:{autoCreateRoom:0,roomBaseName:"",roomBaseId:null,chatIdList:"",groupNames:""}},content:"",exchangeTip:null,exchangeType:3,exchangeContent:{redemptionLink:"",redemptionRule:"",weUserId:"",userName:""}},statusType:[{name:"待开始",key:1},{name:"进行中",key:2},{name:"已结束",key:3},{name:"已暂停",key:4}],news:{materialName:"",digest:"",coverUrl:"",mediaType:"12"}}),methods:{setStatus(e){let t="";return this.statusType.forEach((s=>{s.key==e.fassionState&&(t=s.name)})),t}},created(){this.$route.query.id&&e(this.$route.query.id).then((e=>{this.form=e.data,this.news.digest=this.form.activeDescr,this.news.materialName=this.form.activeTitle,2==this.form.activeCoverType?this.news.coverUrl=this.form.activeCoverUrl:this.news.coverUrl=this.form.wematerial.materialUrl}))}},S=e=>(v("data-v-19710a99"),e=e(),b(),e),T={class:"g-card"},w={style:{display:"flex","justify-content":"space-between"}},_=S((()=>f("div",{class:"info_title"},"基本信息",-1))),D={slot:""},I={class:"g-card"},U=S((()=>f("div",{class:"info_title"},"任务设置",-1))),x={class:"g-card"},k=S((()=>f("div",{class:"info_title"},"兑奖规则",-1))),C={class:"g-card"};const F=m(g,[["render",function(e,t,s,a,i,o){const r=l("el-button"),m=l("el-tag"),v=l("el-form-item"),b=l("FassionBase"),g=l("FassionSettingVue"),S=l("FassionRules"),F=l("el-col"),q=l("PreviewInPhone"),N=l("el-row"),P=l("el-tab-pane"),B=l("Statistics"),z=l("DetailTable"),G=l("el-tabs");return p(),n("div",null,[d(G,{modelValue:i.activeName,"onUpdate:modelValue":t[1]||(t[1]=e=>i.activeName=e)},{default:u((()=>[d(P,{label:"任务信息",name:"first"},{default:u((()=>[d(N,{gutter:20,type:"flex"},{default:u((()=>[d(F,null,{default:u((()=>[f("div",T,[f("div",w,[_,1==i.form.fassionState?(p(),j(r,{key:0,type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push({path:"./add",query:{id:e.$route.query.id}}))},{default:u((()=>[c(" 编辑 ")])),_:1})):h("",!0)]),d(b,{baseData:i.form,isDetail:!0},{default:u((()=>[f("div",D,[d(v,{label:"任务状态",prop:"fassionState"},{default:u((()=>[d(m,{type:1==i.form.fassionState?"info":3==i.form.fassionState?"danger":""},{default:u((()=>[c(y(o.setStatus(i.form)),1)])),_:1},8,["type"])])),_:1})])])),_:1},8,["baseData"])]),f("div",I,[U,d(g,{baseData:i.form,isDetail:!0},null,8,["baseData"])]),f("div",x,[k,d(S,{baseData:i.form,isDetail:!0},null,8,["baseData"])])])),_:1}),d(F,{style:{"flex-basis":"370px"}},{default:u((()=>[f("div",C,[d(q,{name:"客群",list:[i.news],templateInfo:i.form.content},null,8,["list","templateInfo"])])])),_:1})])),_:1})])),_:1}),d(P,{label:"任务统计",name:"second"},{default:u((()=>[i.form.id?(p(),j(B,{key:0,fassionType:i.form.fassionType},null,8,["fassionType"])):h("",!0)])),_:1}),d(P,{label:"裂变明细",name:"third"},{default:u((()=>[d(z)])),_:1})])),_:1},8,["modelValue"])])}],["__scopeId","data-v-19710a99"]]);export{F as default};
