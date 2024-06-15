import e from"./PreviewInPhone-9ed75a0f.js";import o from"./SelectGroup-e6b2682d.js";import{t}from"./modleCenter-5112f339.js";import r from"./IdentitySelect-1f4fc77b.js";import a from"./SelectMember-7e073ac7.js";import{T as s}from"./TemplateLibrary-f59d0076.js";import"./poster-241340a9.js";import{_ as l}from"./quill-image-resize-module-c051113e.js";import{ai as i,o as d,c as m,_ as p,U as u,a as n,T as c,Y as h,Z as f,X as g,K as C,a9 as b,bl as v,bj as U}from"./@vue-e400fd81.js";import"./group-e56f61ac.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";import"./IdentitySelectBase-8ee7d5fd.js";import"./index-0bf429ac.js";import"./staff-48996164.js";import"./PicTitContent-8b500b6d.js";import"./organization-9bed3593.js";import"./SelectDept-7a07b4de.js";import"./SelectPost-d0ccd09d.js";import"./welcome-6ff4c53e.js";const j={name:"task-steps-setting",components:{SelectPoster:r,SelectMemberVue:a,TemplateLibrary:s,SelectGroup:o,PreviewInPhone:e},props:{isDetail:{type:Boolean,default:!1},baseData:{type:Object,defalult:{}}},data:()=>({welcomVisible:!1,choseDialog:!1,form:{posterId:"",posterUrl:"",fassionType:1,addWeUserOrGroupCode:{addWeUser:{executeUserCondit:{change:!1,weUserIds:[]},executeDeptCondit:{change:!1,deptIds:[],posts:[]}},addGroupCode:{autoCreateRoom:0,roomBaseName:"",roomBaseId:null,chatIdList:"",groupNames:""}},content:"",activeTitle:"",activeDescr:"",activeCoverType:1,activeCoverUrl:""},rules:{posterId:[{required:!0,message:"请选择海报",trigger:"blur"}],"addWeUserOrGroupCode.addGroupCode.chatIdList":[{required:!0,message:"请添加客群",trigger:"blur"}],"addWeUserOrGroupCode.addGroupCode.roomBaseName":[{required:!0,message:"请输入群名前缀",trigger:"blur"}],"addWeUserOrGroupCode.addGroupCode.roomBaseId":[{required:!0,message:"请输入群起始序号",trigger:"blur"}],content:[{required:!0,message:"请输入任务文案",trigger:"blur"}],activeTitle:[{required:!0,message:"请输入活动标题",trigger:"blur"}],activeDescr:[{required:!0,message:"请输入活动描述",trigger:"blur"}],activeCoverUrl:[{required:!0,message:"请选择活动封面",trigger:"blur"}]},posterObj:{},groupList:[],showSelectModal:!1,news:{materialName:"",digest:"",coverUrl:"",mediaType:"12"}}),watch:{baseData:{handler(e){this.form=e,this.setData()},immediate:!0},listenChange:{handler(e){this.news.digest=e.activeDescr,this.news.materialName=e.activeTitle,2==this.form.activeCoverType&&(this.news.coverUrl=e.activeCoverUrl)}}},computed:{listenChange(){const{activeDescr:e,activeTitle:o,activeCoverUrl:t}=this.form;return{activeDescr:e,activeTitle:o,activeCoverUrl:t}}},methods:{chengeClear(e){1==e?this.news.coverUrl=this.posterObj.materialUrl:(this.form.activeCoverUrl="",this.news.coverUrl="")},setData(){if(this.news.digest=this.form.activeDescr,this.news.materialName=this.form.activeTitle,this.news.coverUrl=this.form.activeCoverUrl,this.form.posterId&&(this.posterObj.materialUrl=this.form.posterUrl,1==this.form.activeCoverType&&(this.news.coverUrl=this.posterObj.materialUrl)),this.form.addWeUserOrGroupCode||(this.form.addWeUserOrGroupCode={addWeUser:{executeUserCondit:{change:!1,weUserIds:[]},executeDeptCondit:{change:!1,deptIds:[],posts:[]}},addGroupCode:{autoCreateRoom:0,roomBaseName:"",roomBaseId:null,chatIdList:"",groupNames:""}}),2==this.form.fassionType&&this.form.addWeUserOrGroupCode.addGroupCode&&this.form.addWeUserOrGroupCode.addGroupCode.chatIdList){this.groupList=[];let e=this.form.addWeUserOrGroupCode.addGroupCode.chatIdList.split(","),o=this.form.addWeUserOrGroupCode.addGroupCode.groupNames.split(",");e.forEach(((e,t)=>{let r={chatId:e,groupName:o[t]};this.groupList.push(r)}))}},setChange(e){0==e&&(this.form.addWeUserOrGroupCode.addGroupCode.roomBaseName="",this.form.addWeUserOrGroupCode.addGroupCode.roomBaseId="")},gotoNext(){this.$refs.baseForm.validate((e=>{e&&(1==this.form.fassionType?this.$refs.selectMember.validateFn()&&(this.$refs.selectMember.changeFn(),this.updateData(),this.$emit("next",2)):(this.updateData(),this.$emit("next",2)))}))},gotoPre(){1==this.form.fassionType&&this.$refs.selectMember.changeFn(),this.updateData(),this.$emit("next",0)},updateData(){this.$emit("update",this.form)},selectGroupFn(){this.showSelectModal=!0},setSelectData(e){e&&e.length?(this.groupList=e,this.form.addWeUserOrGroupCode.addGroupCode.chatIdList=this.groupList.map((e=>e.chatId)).join(","),this.form.addWeUserOrGroupCode.addGroupCode.groupNames=this.groupList.map((e=>e.groupName)).join(",")):(this.groupList=[],this.form.addWeUserOrGroupCode.addGroupCode.chatIdList="",this.form.addWeUserOrGroupCode.addGroupCode.groupNames=""),this.updateData()},changeObj(e){e&&t(e).then((e=>{this.selectObj=e.data}))},selectModle(){this.selectObj?(this.welcomVisible=!1,this.form.content=this.selectObj.templateInfo):this.$message.error("请选择模板")},handleRemove(){this.form.posterId="",this.form.posterUrl=""},getItemArry(e){this.form.posterUrl=e[0].materialUrl,this.form.posterId=e[0].id,this.posterObj=e[0],1==this.form.activeCoverType&&(this.news.coverUrl=this.posterObj.materialUrl)},getMember(e){this.form.addWeUserOrGroupCode.addWeUser=e}}},y=e=>(v("data-v-232bc15d"),e=e(),U(),e),G={class:"g-card"},D={key:1,style:{"margin-top":"10px"}},w={class:"el-upload-list el-upload-list--picture-card"},O={class:"el-upload-list__item is-success"},I=["src"],_={key:0,class:"el-upload-list__item-actions"},T={class:"el-upload-list__item-delete"},V=y((()=>n("div",{class:"sub-des"},"引导新客户扫码时添加以上任意成员为好友",-1))),k={key:0},W=y((()=>n("div",{class:"sub-des"},"最多选择五个客群",-1))),x=y((()=>n("div",{class:"sub-des"},"默认以第一个群的群主作为新建群的群主",-1))),N={key:0,style:{"margin-bottom":"10px"}},L=y((()=>n("div",{class:"tip"},"支持JPG、PNG格式，较好的效果为大图 1068*455，小图150*150",-1))),S={key:0,class:"g-footer-sticky"},B={class:"g-card",style:{height:"100%"}},M=y((()=>n("div",{class:"info_title"},"消息预览",-1))),q={class:"dialog-footer"};const P=l(j,[["render",function(e,o,t,r,a,s){const l=i("el-button"),v=i("el-icon-delete"),U=i("el-form-item"),j=i("SelectMemberVue"),y=i("el-tag"),P=i("el-switch"),$=i("el-input"),R=i("el-input-number"),z=i("el-card"),F=i("TextareaExtend"),A=i("el-radio"),E=i("el-radio-group"),J=i("upload"),K=i("el-form"),Z=i("el-col"),X=i("PreviewInPhone"),Y=i("el-row"),H=i("SelectPoster"),Q=i("TemplateLibrary"),ee=i("el-dialog"),oe=i("select-group");return d(),m("div",null,[p(Y,{gutter:20,type:"flex",style:{"margin-top":"20px"}},{default:u((()=>[p(Z,null,{default:u((()=>[n("div",G,[p(K,{ref:"baseForm",rules:a.rules,model:a.form,"label-position":"right","label-width":"140px"},{default:u((()=>[p(U,{label:"选择海报:",prop:"posterId"},{default:u((()=>[t.isDetail?g("",!0):(d(),c(l,{key:0,type:"primary",icon:"el-icon-plus",onClick:o[0]||(o[0]=e=>a.choseDialog=!0)},{default:u((()=>[h(f(a.form.posterId?"编辑":"选择")+"海报 ",1)])),_:1})),a.form.posterUrl?(d(),m("div",D,[n("ul",w,[n("li",O,[n("img",{style:{width:"100%",height:"100%"},src:a.form.posterUrl},null,8,I),t.isDetail?g("",!0):(d(),m("span",_,[n("span",T,[p(v,{class:"el-icon-delete",onClick:s.handleRemove},null,8,["onClick"])])]))])])])):g("",!0)])),_:1}),1==a.form.fassionType?(d(),c(U,{key:0,label:"添加员工",required:""},{default:u((()=>[p(j,{ref:"selectMember",isDetail:t.isDetail,title:"添加员工",initData:a.form.addWeUserOrGroupCode.addWeUser,onUpdate:s.getMember},null,8,["isDetail","initData","onUpdate"]),V])),_:1})):g("",!0),2==a.form.fassionType?(d(),m(C,{key:1},[p(U,{label:"添加客群:",prop:"addWeUserOrGroupCode.addGroupCode.chatIdList"},{default:u((()=>[(d(!0),m(C,null,b(a.groupList,((e,o)=>(d(),m(C,{key:o},[e.groupName?(d(),c(y,{key:o},{default:u((()=>[h(f(e.groupName),1)])),_:2},1024)):g("",!0)],64)))),128)),t.isDetail?g("",!0):(d(),m("div",k,[p(l,{type:"primary",icon:"el-icon-plus",onClick:s.selectGroupFn},{default:u((()=>[h(f("添加")+"客群")])),_:1},8,["onClick"])])),W])),_:1}),p(U,{label:"群满是否自动建群:"},{default:u((()=>[p(P,{modelValue:a.form.addWeUserOrGroupCode.addGroupCode.autoCreateRoom,"onUpdate:modelValue":o[1]||(o[1]=e=>a.form.addWeUserOrGroupCode.addGroupCode.autoCreateRoom=e),"active-value":1,"inactive-value":0,onChange:s.setChange},null,8,["modelValue","onChange"]),x])),_:1}),a.form.addWeUserOrGroupCode.addGroupCode.autoCreateRoom?(d(),c(U,{key:0,label:""},{default:u((()=>[p(z,null,{default:u((()=>[p(U,{label:"群名前缀:",prop:"addWeUserOrGroupCode.addGroupCode.roomBaseName"},{default:u((()=>[p($,{"show-word-limit":"",maxlength:"20",modelValue:a.form.addWeUserOrGroupCode.addGroupCode.roomBaseName,"onUpdate:modelValue":o[2]||(o[2]=e=>a.form.addWeUserOrGroupCode.addGroupCode.roomBaseName=e),placeholder:"请输入群名前缀"},null,8,["modelValue"])])),_:1}),p(U,{label:"群起始序号:",prop:"addWeUserOrGroupCode.addGroupCode.roomBaseId"},{default:u((()=>[p(R,{modelValue:a.form.addWeUserOrGroupCode.addGroupCode.roomBaseId,"onUpdate:modelValue":o[3]||(o[3]=e=>a.form.addWeUserOrGroupCode.addGroupCode.roomBaseId=e),"controls-position":"right",min:1},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})):g("",!0)],64)):g("",!0),p(U,{label:"任务文案",prop:"content",style:{"margin-right":"200px !important"}},{default:u((()=>[t.isDetail?g("",!0):(d(),m("div",N,[p(l,{type:"primary",onClick:o[4]||(o[4]=e=>a.welcomVisible=!0)},{default:u((()=>[h("从模板库中选择")])),_:1})])),p(F,{disabled:t.isDetail,modelValue:a.form.content,"onUpdate:modelValue":o[5]||(o[5]=e=>a.form.content=e),toolbar:t.isDetail?[]:["emoji"],maxlength:"2000","show-word-limit":"",placeholder:"请输入",autosize:{minRows:5,maxRows:20},clearable:"",autofocus:!1},null,8,["disabled","modelValue","toolbar"])])),_:1}),p(U,{label:"活动标题",prop:"activeTitle"},{default:u((()=>[p($,{disabled:t.isDetail,"show-word-limit":"",maxlength:"20",modelValue:a.form.activeTitle,"onUpdate:modelValue":o[6]||(o[6]=e=>a.form.activeTitle=e),placeholder:"请输入活动标题"},null,8,["disabled","modelValue"])])),_:1}),p(U,{label:"活动描述",prop:"activeDescr"},{default:u((()=>[p($,{disabled:t.isDetail,type:"textarea","show-word-limit":"",maxlength:"30",modelValue:a.form.activeDescr,"onUpdate:modelValue":o[7]||(o[7]=e=>a.form.activeDescr=e),placeholder:"请输入活动描述"},null,8,["disabled","modelValue"])])),_:1}),p(U,{label:"活动封面",prop:"activeCoverType"},{default:u((()=>[p(E,{modelValue:a.form.activeCoverType,"onUpdate:modelValue":o[8]||(o[8]=e=>a.form.activeCoverType=e),disabled:t.isDetail,onChange:s.chengeClear},{default:u((()=>[p(A,{label:1},{default:u((()=>[h("海报缩略图")])),_:1}),p(A,{label:2},{default:u((()=>[h("自定义")])),_:1})])),_:1},8,["modelValue","disabled","onChange"]),2==a.form.activeCoverType?(d(),c(U,{key:0,prop:"activeCoverUrl"},{default:u((()=>[p(J,{disabled:t.isDetail,fileUrl:a.form.activeCoverUrl,"onUpdate:fileUrl":o[9]||(o[9]=e=>a.form.activeCoverUrl=e),type:"0",maxSize:10,format:["jpg","png"]},{tip:u((()=>[L])),_:1},8,["disabled","fileUrl"])])),_:1})):g("",!0)])),_:1})])),_:1},8,["rules","model"])]),t.isDetail?g("",!0):(d(),m("div",S,[p(l,{plain:"",onClick:s.gotoPre},{default:u((()=>[h("上一步")])),_:1},8,["onClick"]),p(l,{type:"primary",onClick:s.gotoNext},{default:u((()=>[h("下一步")])),_:1},8,["onClick"])]))])),_:1}),t.isDetail?g("",!0):(d(),c(Z,{key:0,style:{"flex-basis":"370px"}},{default:u((()=>[n("div",B,[M,p(X,{name:1==a.form.fassionType?"客户":"客群",list:[a.news],templateInfo:a.form.content},null,8,["name","list","templateInfo"])])])),_:1}))])),_:1}),p(H,{choseDialog:a.choseDialog,"onUpdate:choseDialog":o[10]||(o[10]=e=>a.choseDialog=e),onItemArry:s.getItemArry,moduleType:5},null,8,["choseDialog","onItemArry"]),a.welcomVisible?(d(),c(ee,{key:0,title:"选择模板",modelValue:a.welcomVisible,"onUpdate:modelValue":o[12]||(o[12]=e=>a.welcomVisible=e),width:"60%","append-to-body":"","close-on-click-modal":!1},{footer:u((()=>[n("div",q,[p(l,{type:"primary",onClick:s.selectModle},{default:u((()=>[h("确 定")])),_:1},8,["onClick"]),p(l,{onClick:o[11]||(o[11]=e=>a.welcomVisible=!1)},{default:u((()=>[h("取 消")])),_:1})])])),default:u((()=>[p(Q,{onChangeObj:s.changeObj},null,8,["onChangeObj"])])),_:1},8,["modelValue"])):g("",!0),p(oe,{visible:a.showSelectModal,"onUpdate:visible":o[13]||(o[13]=e=>a.showSelectModal=e),defaults:a.groupList,onSubmit:s.setSelectData},null,8,["visible","defaults","onSubmit"])])}],["__scopeId","data-v-232bc15d"]]);export{P as default};