import{s as e,d as t}from"./api-3d61a394.js";import i from"./PreviewInPhone-9ed75a0f.js";import{_ as s}from"./quill-image-resize-module-c051113e.js";import{ai as a,o as l,c as r,a as m,_ as o,U as d,Y as p,Z as n,K as c,a9 as f,T as u,X as h,bl as y,bj as g}from"./@vue-e400fd81.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const v={components:{PreviewInPhone:i},data:()=>({id:"",tagList:[],userList:[],form:{linkName:"",tagIds:"",tagNames:"",skipVerify:1,attachments:[],weUserList:"",weUserNames:""},templateInfo:"",attachmentsData:{templateInfo:"",attachments:[]},previewData:[]}),created(){this.$route.query.id&&(this.id=this.$route.query.id,this.getDetail())},methods:{getData(){e(this.id).then((e=>{200==e.code&&this.msgSuccess("操作成功")}))},copyFn(e){const t=document.createElement("input");t.style.cssText="opacity: 0;",t.type="text",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),this.$message({message:"复制成功",type:"success"})},getDetail(){t(this.id).then((e=>{if(200==e.code){if(this.form=e.data,this.form.tagIds){let e=this.form.tagIds.split(","),t=this.form.tagNames.split(","),i=[];e.forEach(((e,s)=>{i.push({name:t[s],tagId:e})})),this.tagList=i}if(this.form.weUserList){let e=this.form.weUserList.split(","),t=this.form.weUserNames.split(","),i=[];e.forEach(((e,s)=>{i.push({name:t[s],weUserId:e})})),this.userList=i}if(this.form.linkAttachments){let e=[];this.form.linkAttachments.forEach((t=>{"text"==t.msgType?this.templateInfo=t.content:e.push(t)}));let t=this.setAttachments(e);this.attachmentsData={templateInfo:this.templateInfo,attachments:t},this.previewData=t}}}))},setAttachments(e){let t=[];return e&&e.length&&e.forEach((e=>{if("image"===e.msgType){let i={id:e.materialId,mediaType:"0",materialUrl:e.picUrl};t.push(i)}else if("video"===e.msgType){let i={id:e.materialId,mediaType:"2",materialUrl:e.fileUrl,coverUrl:e.picUrl,digest:e.description,materialName:e.title};t.push(i)}else if("file"===e.msgType){let i={id:e.materialId,mediaType:"3",materialUrl:e.fileUrl,digest:e.description,materialName:e.title};t.push(i)}else if("text"===e.msgType){let i={id:e.materialId,mediaType:"4",content:e.content};t.push(i)}else if("link"===e.msgType){let i={id:e.materialId,mediaType:"9",content:e.content,coverUrl:e.picUrl,materialUrl:e.linkUrl,materialName:e.title};t.push(i)}else if("miniprogram"===e.msgType){let i={id:e.materialId,mediaType:"11",digest:e.appId,materialName:e.title,coverUrl:e.picUrl,materialUrl:e.fileUrl};t.push(i)}else if("news"===e.msgType){let i={id:e.materialId,mediaType:"12",digest:e.description,materialUrl:e.fileUrl,coverUrl:e.picUrl,content:e.content,materialName:e.title};t.push(i)}else if("posters"===e.msgType){let i={id:e.materialId,mediaType:"5",materialUrl:e.fileUrl,materialName:e.title};t.push(i)}})),t}}},j=e=>(y("data-v-49fb083d"),e=e(),g(),e),U={style:{"margin-top":"var(--card-margin)"}},I={class:"flex"},w={style:{width:"calc(100% - 425px)","padding-right":"var(--card-margin)"}},b={class:"g-card"},k={style:{display:"flex","justify-content":"space-between"}},_=j((()=>m("div",{class:"card-title"}," 基础信息 ",-1))),T={key:0},x={class:"g-card"},N=j((()=>m("div",{class:"card-title"}," 链接信息 ",-1))),L={class:"page"},D={class:"code-wrapper"},q={style:{"text-align":"left"}},P=j((()=>m("div",{class:"sub-des"},"企微官方的获客长链接，可直接使用",-1))),C={style:{"text-align":"left"}},E=j((()=>m("div",{class:"sub-des"},"系统生成的获客短链，满足短链场景",-1))),V={class:"g-card",style:{width:"425px","margin-top":"0"}},A=j((()=>m("div",{class:"card-title"},"欢迎语预览",-1)));const z=s(v,[["render",function(e,t,i,s,y,g){const v=a("el-button"),j=a("el-form-item"),z=a("el-switch"),$=a("el-tag"),F=a("el-col"),S=a("el-row"),K=a("el-form"),B=a("PreviewInPhone");return l(),r("div",null,[m("div",U,[m("div",I,[m("div",w,[o(K,{model:y.form,rules:e.rules,ref:"form","label-width":"140px"},{default:d((()=>[m("div",b,[m("div",k,[_,m("div",null,[o(v,{type:"primary",onClick:t[0]||(t[0]=t=>e.$router.push({path:"add",query:{id:y.id}}))},{default:d((()=>[p(" 编辑 ")])),_:1}),o(v,{type:"primary",onClick:t[1]||(t[1]=e=>g.getData())},{default:d((()=>[p(" 同步数据 ")])),_:1})])]),o(S,null,{default:d((()=>[o(F,{sm:24,md:18},{default:d((()=>[o(j,{label:"链接名称:",prop:"linkName"},{default:d((()=>[m("span",null,n(y.form.linkName),1)])),_:1}),o(j,{label:"自动通过好友:"},{default:d((()=>[o(z,{modelValue:y.form.skipVerify,"onUpdate:modelValue":t[2]||(t[2]=e=>y.form.skipVerify=e),disabled:"","active-value":1,"inactive-value":0},null,8,["modelValue"])])),_:1}),o(j,{label:"新客户标签:"},{default:d((()=>[(l(!0),r(c,null,f(y.tagList,((e,t)=>(l(),r(c,null,[e.name?(l(),u($,{key:t},{default:d((()=>[p(n(e.name),1)])),_:2},1024)):h("",!0)],64)))),256))])),_:1}),o(j,{label:"链接员工:",prop:"weUserList"},{default:d((()=>[y.userList.length>0?(l(),r("div",T,[(l(!0),r(c,null,f(y.userList,((e,t)=>(l(),u($,{key:t},{default:d((()=>[p(n(e.name),1)])),_:2},1024)))),128))])):h("",!0)])),_:1})])),_:1})])),_:1})]),m("div",x,[N,o(S,null,{default:d((()=>[o(F,{sm:24,md:18},{default:d((()=>[m("div",L,[m("div",D,[o(K,{"label-width":"140px",style:{display:"inline-block"}},{default:d((()=>[o(j,{label:"获客链接:"},{default:d((()=>[m("div",q,[p(n(y.form.linkUrl)+" ",1),o(v,{text:"",onClick:t[3]||(t[3]=e=>g.copyFn(y.form.linkUrl))},{default:d((()=>[p("复制")])),_:1})]),P])),_:1}),o(j,{label:"获客短链:"},{default:d((()=>[m("div",C,[p(n(y.form.linkShortUrl)+" ",1),o(v,{text:"",onClick:t[4]||(t[4]=e=>g.copyFn(y.form.linkShortUrl))},{default:d((()=>[p("复制")])),_:1})]),E])),_:1})])),_:1})])])])),_:1})])),_:1})])])),_:1},8,["model","rules"])]),m("div",V,[A,o(B,{list:y.previewData,templateInfo:y.templateInfo},null,8,["list","templateInfo"])])])])])}],["__scopeId","data-v-49fb083d"]]);export{z as default};
