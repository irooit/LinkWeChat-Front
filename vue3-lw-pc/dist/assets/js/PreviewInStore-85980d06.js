import{_ as e}from"./code-ab4e587b.js";import{_ as s}from"./quill-image-resize-module-c051113e.js";import{ai as o,o as a,T as l,U as t,a as i,_ as d,c,K as r,Z as n,X as u,Y as m,bl as p,bj as g}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const v={name:"preview-client",components:{},props:{name:{type:String,default:"专属门店群"},value:{type:Object,default:()=>({outOfRangeTip:"",codeState:1,storeCodeConfigQr:"",welcomeMsg:""})},showTip:{type:Boolean,default:!1},showGuide:{type:Boolean,default:!1},showStore:{type:Boolean,default:!1}},data:()=>({pro:1,store:1}),computed:{},created(){},mounted(){},methods:{}},f=e=>(p("data-v-a87ef2cb"),e=e(),g(),e),y={class:"content"},_={class:"tip"},C={class:"code_content"},b={key:0,class:"code_img",src:"/assets/svg/no_code-adc8dc09.svg",alt:""},h=["src"],j={key:2,class:"code_img",src:e,alt:""},w=f((()=>i("div",{class:"sub-des"},"长按识别二维码添加客服",-1))),k={class:"tip",style:{"text-align":"center"}},Q={class:"code_content"},T=["src"],V={key:1,class:"code_img",src:e,alt:""},S=f((()=>i("div",{class:"sub-des"},"长按识别二维码添加门店导购",-1))),q={class:"tip"},x={class:"code_content"},O=["src"],B={key:1,class:"code_img",src:e,alt:""},U=f((()=>i("div",{class:"sub-des"},"长按识别二维码添加门店群",-1))),G={class:"tip",style:{"text-align":"center"}};const M=s(v,[["render",function(e,s,p,g,v,f){const M=o("el-option"),R=o("el-select"),z=o("el-icon-location-outline"),D=o("PhoneTemplate");return a(),l(D,{title:p.name},{default:t((()=>[i("div",y,[d(R,{style:{width:"100%"},disabled:"",modelValue:v.pro,"onUpdate:modelValue":s[0]||(s[0]=e=>v.pro=e)},{default:t((()=>[d(M,{label:"安徽省合肥市蜀山区",value:1})])),_:1},8,["modelValue"]),d(R,{style:{"margin-top":"10px",width:"100%"},disabled:"",modelValue:v.store,"onUpdate:modelValue":s[1]||(s[1]=e=>v.store=e),placeholder:"请选择门店"},{default:t((()=>[d(M,{value:1,label:"蜀山区分店"})])),_:1},8,["modelValue"]),p.showTip?(a(),c(r,{key:0},[i("div",_,n(p.value.outOfRangeTip),1),i("div",C,[1===p.value.codeState?(a(),c("img",b)):p.value.storeCodeConfigQr?(a(),c("img",{key:1,class:"code_img",src:p.value.storeCodeConfigQr,alt:""},null,8,h)):(a(),c("img",j))]),w],64)):u("",!0),p.showGuide?(a(),c(r,{key:1},[i("div",k,[d(z,{class:"el-icon-location-outline"}),m(" 国家健康大数据产业园C2-01栋 ")]),i("div",Q,[p.value.storeCodeConfigQr?(a(),c("img",{key:0,class:"code_img",src:p.value.storeCodeConfigQr,alt:""},null,8,T)):(a(),c("img",V))]),S],64)):u("",!0),p.showStore?(a(),c(r,{key:2},[i("div",q,n(p.value.welcomeMsg),1),i("div",x,[p.value.storeCodeConfigQr?(a(),c("img",{key:0,class:"code_img",src:p.value.storeCodeConfigQr,alt:""},null,8,O)):(a(),c("img",B))]),U,i("div",G,[d(z,{class:"el-icon-location-outline"}),m(" 国家健康大数据产业园C2-01栋 ")])],64)):u("",!0)])])),_:1},8,["title"])}],["__scopeId","data-v-a87ef2cb"]]);export{M as default};