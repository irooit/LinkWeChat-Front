import{_ as e}from"../index-044285d2.js";import{g as l,u as a,b as t}from"./index-0bf429ac.js";import{_ as r}from"./quill-image-resize-module-c051113e.js";import{aU as o,ai as i,aq as m,o as d,T as s,U as p,a as u,V as n,Y as f,_ as h,X as g,c,K as y,bl as U,bj as w}from"./@vue-e400fd81.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const b=(e,l,a)=>{/\.html$/gi.test(l)?a():a(new Error("必须以 .html 作为后缀"))},V=(e,l,a)=>{/^https?:\/\//gi.test(l)?a():a(new Error("必须以 http://或 https://开头"))},v={components:{PreviewInPhone:o((()=>e((()=>import("./PreviewInPhone-9ed75a0f.js")),["assets/js/PreviewInPhone-9ed75a0f.js","assets/js/quill-image-resize-module-c051113e.js","assets/js/quill-c6b3d2fb.js","assets/js/@babel-efd68da6.js","assets/js/to-fast-properties-1160b370.js","assets/js/quill-delta-a1872f89.js","assets/js/fast-diff-d5a53119.js","assets/js/lodash.clonedeep-1b6eefdc.js","assets/js/lodash.isequal-e7d08617.js","assets/js/@vueup-7cf8cfdd.js","assets/js/@vue-e400fd81.js","assets/css/@vueup-da05906a.css","assets/css/quill-image-resize-module-44eb40f8.css","assets/css/PreviewInPhone-39ac0402.css"])))},props:{modelValue:{type:Boolean,default:!1},type:{type:String,default:"0"},data:{type:Object,default:()=>({})},isDetail:{type:Boolean,default:!1}},data(){return{form:{},treeData:[{}],rules:Object.freeze({materialName:[{required:!0,message:"不能为空",trigger:"change"}],categoryId:[{required:!0,message:"不能为空",trigger:"change"}],content:[{required:!0,message:"不能为空",trigger:"blur"}],materialUrl:[{required:!0,message:"不能为空",trigger:"change"}],weMaterialImgAoList:[{type:"array",required:!0,message:"不能为空",trigger:"change"}],digest:[{required:!0,message:"不能为空",trigger:"blur"}],coverUrl:[{required:!0,message:"不能为空",trigger:"blur"}],materialUrl:[{required:!0,message:"不能为空",trigger:"blur"},{validator:11==this.type?b:V,trigger:"blur"}]}),groupProps:{expandTrigger:"hover",checkStrictly:!0,children:"children",label:"name",value:"id",emitPath:!1},dialogVisibleSelectTag:!1,loading:!1,mobForm:[{}]}},computed:{},watch:{modelValue:{deep:!0,immediate:!0,handler(e){e&&this.getTree()}},data:{deep:!0,immediate:!0,handler(e){var l;this.mobForm=[];let a=JSON.parse(JSON.stringify(e));this.form=a,"0"!=this.type?(a.mediaType=this.type,this.mobForm.push(a)):null==(l=a.weMaterialImgAoList)||l.forEach((e=>{this.mobForm.push({mediaType:"0",materialUrl:e.url})}))}}},created(){},mounted(){this.mobForm[0]&&(this.mobForm[0].mediaType=this.type)},methods:{getTree(){l(this.type).then((({data:e})=>{e.forEach((e=>{e.children=null})),this.treeData=[{id:"",name:"全部",parentId:"0",hasParent:!1,hasChildren:!0,children:e||[]}]}))},getPicUrl(e,l){this.form.coverUrl=e,this.form.width=l.width,this.form.height=l.height,this.form.memorySize=l.memorySize,this.form.pixelSize=l.pixelSize},dealSize(e){switch(e.mediaType){case"0":let l=e.weMaterialImgAoList;return l&&l.forEach(((l,a)=>{var t=new Image;t.src=l.url,e.weMaterialImgAoList[a].width=t.width,e.weMaterialImgAoList[a].height=t.height,e.weMaterialImgAoList[a].pixelSize=t.width*t.height})),e;case"9":case"11":if(e.coverUrl){let l=new Image;l.src=e.coverUrl,e.width=l.width,e.height=l.height,e.pixelSize=l.width*l.height}return e}},submit(){var e;!this.form.id&&this.form.weMaterialImgAoList&&this.form.weMaterialImgAoList.forEach(((e,l)=>{e.materialUrl=e.url,e.materialName=e.name})),this.form.tagIds=(null==(e=this.form.tags)?void 0:e.map(((e,l)=>e.tagId)))+"",this.loading=!0,this.$refs.form.validate((e=>{if(e){let e=JSON.parse(JSON.stringify(this.form));e.mediaType=this.type,this.dealSize(e),(e.id?a:t)(e).then((()=>{this.msgSuccess("操作成功"),this.$emit("update:model-value",!1),this.$emit("success"),this.$refs.form.resetFields(),this.loading=!1})).catch((()=>{this.loading=!1}))}else this.loading=!1}))}}},_=e=>(U("data-v-0e0a13d3"),e=e(),w(),e),j=_((()=>u("div",{style:{display:"flex"}},[u("div",{style:{color:"var(--font-black)"}}," 小程序必须已经绑定关联到企业微信，否则将无法在欢迎语、群发、话术中正常发送。 "),u("a",{href:"https://www.yuque.com/linkwechat/help/gy4ghv",target:"_blank",style:{color:"var(--color)"}}," 如何关联绑定? ")],-1))),x=_((()=>u("div",{class:"sub-des"},"素材打开后，该客户将会自动设置以上选择标签",-1))),S=_((()=>u("div",{class:"g-tip"},"标题对客户不可见，仅用于查询场景",-1))),z=_((()=>u("div",null,"支持jpg/jpeg/png格式，图片大小不超过20M，支持最多10张批量上传",-1))),k=_((()=>u("div",{class:"g-tip"},"标题对客户不可见，仅用于查询场景",-1))),I=_((()=>u("div",null,"支持jpg/jpeg/png格式，建议200*200",-1))),N=_((()=>u("div",{class:"sub-des"},"必须以 http://或 https://开头",-1))),q=_((()=>u("div",{class:"sub-des"},"若下方 外链预览 项未正常显示出页面，则该链可能开启了防盗功能，请勿使用",-1))),T=_((()=>u("div",null,"支持jpg/jpeg/png格式，建议200*200",-1))),L=["src"],A=_((()=>u("div",{class:"sub-des"},[u("a",{href:"https://www.yuque.com/linkwechat/help/gy4ghv#cAwOh",target:"_blank"},"如何查询小程序ID?")],-1))),M=_((()=>u("div",{class:"sub-des"},[u("a",{href:"https://www.yuque.com/linkwechat/help/gy4ghv#a1bXG",target:"_blank"},"如何添加小程序页面路径?")],-1))),P=_((()=>u("div",null,"支持jpg/jpeg/png格式，建议520*416",-1))),E=_((()=>u("div",null,"支持mp4/mov格式，视频大小不超过100M",-1))),R=_((()=>u("div",null,"支持pdf/ppt/word文件，单个文件大小不超过50M",-1))),D={class:"dialog-footer"};const O=r(v,[["render",function(e,l,a,t,r,o){const U=i("el-alert"),w=i("el-cascader"),b=i("el-form-item"),V=i("TagEllipsis"),v=i("el-button"),_=i("SelectTag"),O=i("el-input"),F=i("TextareaExtend"),$=i("Upload"),C=i("el-form"),J=i("el-col"),B=i("PreviewInPhone"),G=i("el-row"),K=i("el-dialog"),X=m("loading");return d(),s(K,{width:"1000px",modelValue:a.modelValue,"onUpdate:modelValue":l[32]||(l[32]=l=>e.$emit("update:modelValue",l)),"destroy-on-close":"","append-to-body":"","close-on-click-modal":!1},{footer:p((()=>[u("div",D,[n((d(),s(v,{type:"primary",disabled:r.loading,onClick:o.submit},{default:p((()=>[f("确 定")])),_:1},8,["disabled","onClick"])),[[X,r.loading]]),h(v,{onClick:l[31]||(l[31]=l=>e.$emit("update:model-value",!1))},{default:p((()=>[f("取 消")])),_:1})])])),default:p((()=>["11"===a.type?(d(),s(U,{key:0,type:"warning","show-icon":""},{title:p((()=>[j])),_:1})):g("",!0),h(G,{style:{"margin-top":"20px"}},{default:p((()=>[h(J,{span:14},{default:p((()=>[h(C,{ref:"form",model:r.form,rules:r.rules,"label-width":"100px"},{default:p((()=>[h(b,{label:"选择分组",prop:"categoryId"},{default:p((()=>[h(w,{modelValue:r.form.categoryId,"onUpdate:modelValue":l[0]||(l[0]=e=>r.form.categoryId=e),options:r.treeData[0].children,props:r.groupProps},null,8,["modelValue","options","props"])])),_:1}),[2,3,8,13,19].includes(+a.type)?(d(),s(b,{key:0,label:"客户标签"},{default:p((()=>[h(V,{list:r.form.tags,limit:"4"},null,8,["list"]),u("div",null,[h(v,{type:"primary",onClick:l[1]||(l[1]=e=>r.dialogVisibleSelectTag=!0)},{default:p((()=>[f("选择标签")])),_:1}),h(_,{visible:r.dialogVisibleSelectTag,"onUpdate:visible":l[2]||(l[2]=e=>r.dialogVisibleSelectTag=e),selected:r.form.tags,onSuccess:l[3]||(l[3]=e=>{r.form.tags=e.map((e=>({tagId:e.tagId,name:e.name})))})},null,8,["visible","selected"])]),x])),_:1})):g("",!0),"4"===a.type?(d(),c(y,{key:1},[h(b,{label:"文本标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[4]||(l[4]=e=>r.form.materialName=e),placeholder:"请输入标题",maxlength:"50","show-word-limit":""},null,8,["modelValue"]),S])),_:1}),h(b,{label:"文本内容",prop:"content"},{default:p((()=>[h(F,{modelValue:r.form.content,"onUpdate:modelValue":l[5]||(l[5]=e=>r.form.content=e),autosize:{minRows:2,maxRows:50},placeholder:"请输入内容",maxlength:"1000","show-word-limit":""},null,8,["modelValue"])])),_:1})],64)):"0"===a.type?(d(),c(y,{key:2},[r.form.id?(d(),s(b,{key:1,label:"图片标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[7]||(l[7]=e=>r.form.materialName=e),placeholder:"请输入",maxlength:50,"show-word-limit":"",disabled:!0},null,8,["modelValue"]),k])),_:1})):(d(),s(b,{key:0,label:"图片",prop:"weMaterialImgAoList"},{default:p((()=>[h($,{fileList:r.form.weMaterialImgAoList,"onUpdate:fileList":l[6]||(l[6]=e=>r.form.weMaterialImgAoList=e),maxSize:20,type:"0",multiple:!0,limit:10},{tip:p((()=>[z])),_:1},8,["fileList"])])),_:1}))],64)):"9"===a.type?(d(),c(y,{key:3},[h(b,{label:"图文地址",prop:"materialUrl"},{default:p((()=>[h(O,{modelValue:r.form.materialUrl,"onUpdate:modelValue":l[8]||(l[8]=e=>r.form.materialUrl=e),type:"text",placeholder:"请输入图文地址，以http://或https://开头"},null,8,["modelValue"])])),_:1}),h(b,{label:"图文标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[9]||(l[9]=e=>r.form.materialName=e),type:"text",maxlength:32,"show-word-limit":"",placeholder:"请输入图文标题"},null,8,["modelValue"])])),_:1}),h(b,{label:"图文描述"},{default:p((()=>[h(O,{modelValue:r.form.content,"onUpdate:modelValue":l[10]||(l[10]=e=>r.form.content=e),type:"textarea",maxlength:128,"show-word-limit":"",autosize:{minRows:3,maxRows:50},placeholder:"请输入图文描述"},null,8,["modelValue"])])),_:1}),h(b,{label:"图文封面"},{default:p((()=>[h($,{fileUrl:r.form.coverUrl,"onUpdate:fileUrl":l[11]||(l[11]=e=>r.form.coverUrl=e),imgSize:r.form.memorySize,"onUpdate:imgSize":l[12]||(l[12]=e=>r.form.memorySize=e),type:"0"},{tip:p((()=>[I])),_:1},8,["fileUrl","imgSize"])])),_:1})],64)):"8"===a.type?(d(),c(y,{key:4},[h(b,{label:"链接标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[13]||(l[13]=e=>r.form.materialName=e),type:"text",maxlength:64,"show-word-limit":"",placeholder:"请输入链接标题"},null,8,["modelValue"])])),_:1}),h(b,{label:"链接",prop:"materialUrl"},{default:p((()=>[h(O,{modelValue:r.form.materialUrl,"onUpdate:modelValue":l[14]||(l[14]=e=>r.form.materialUrl=e),placeholder:"请输入链接"},null,8,["modelValue"]),N])),_:1})],64)):"19"===a.type?(d(),c(y,{key:5},[h(b,{label:"外链地址",prop:"materialUrl"},{default:p((()=>[h(O,{modelValue:r.form.materialUrl,"onUpdate:modelValue":l[15]||(l[15]=e=>r.form.materialUrl=e),type:"text",placeholder:"请输入外链地址，以http://或https://开头"},null,8,["modelValue"]),q])),_:1}),h(b,{label:"外链标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[16]||(l[16]=e=>r.form.materialName=e),type:"text",maxlength:32,"show-word-limit":"",placeholder:"请输入外链标题"},null,8,["modelValue"])])),_:1}),h(b,{label:"外链描述"},{default:p((()=>[h(O,{modelValue:r.form.content,"onUpdate:modelValue":l[17]||(l[17]=e=>r.form.content=e),type:"textarea",maxlength:128,"show-word-limit":"",autosize:{minRows:3,maxRows:50},placeholder:"请输入外链描述"},null,8,["modelValue"])])),_:1}),h(b,{label:"外链封面"},{default:p((()=>[h($,{fileUrl:r.form.coverUrl,"onUpdate:fileUrl":l[18]||(l[18]=e=>r.form.coverUrl=e),imgSize:r.form.memorySize,"onUpdate:imgSize":l[19]||(l[19]=e=>r.form.memorySize=e),type:"0"},{tip:p((()=>[T])),_:1},8,["fileUrl","imgSize"])])),_:1}),h(b,{label:"外链预览"},{default:p((()=>[r.form.materialUrl?(d(),c("iframe",{class:"iframe",src:r.form.materialUrl,key:r.form.materialUrl},null,8,L)):g("",!0)])),_:1})],64)):"11"===a.type?(d(),c(y,{key:6},[h(b,{label:"小程序标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[20]||(l[20]=e=>r.form.materialName=e),placeholder:"请输入小程序标题",maxlength:16,"show-word-limit":""},null,8,["modelValue"])])),_:1}),h(b,{label:"小程序ID",prop:"digest"},{default:p((()=>[h(O,{modelValue:r.form.digest,"onUpdate:modelValue":l[21]||(l[21]=e=>r.form.digest=e),placeholder:"小程序AppID"},null,8,["modelValue"]),A])),_:1}),h(b,{label:"页面路径",prop:"materialUrl"},{default:p((()=>[h(O,{modelValue:r.form.materialUrl,"onUpdate:modelValue":l[22]||(l[22]=e=>r.form.materialUrl=e),placeholder:"请输入小程序路径，必须以 .html 作为后缀"},null,8,["modelValue"]),M])),_:1}),h(b,{label:"封面",prop:"coverUrl"},{default:p((()=>[h($,{fileUrl:r.form.coverUrl,"onUpdate:fileUrl":l[23]||(l[23]=e=>r.form.coverUrl=e),imgSize:r.form.memorySize,"onUpdate:imgSize":l[24]||(l[24]=e=>r.form.memorySize=e),type:"0"},{tip:p((()=>[P])),_:1},8,["fileUrl","imgSize"])])),_:1})],64)):"2"===a.type?(d(),c(y,{key:7},[h(b,{label:"视频标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[25]||(l[25]=e=>r.form.materialName=e),placeholder:"请输入视频标题",maxlength:32,"show-word-limit":""},null,8,["modelValue"])])),_:1}),h(b,{label:"视频描述"},{default:p((()=>[h(O,{modelValue:r.form.digest,"onUpdate:modelValue":l[26]||(l[26]=e=>r.form.digest=e),type:"textarea",placeholder:"请输入视频描述",autosize:{minRows:3,maxRows:10},maxlength:128,"show-word-limit":""},null,8,["modelValue"])])),_:1}),r.form.id?g("",!0):(d(),s(b,{key:0,label:"上传视频",prop:"materialUrl"},{default:p((()=>[h($,{fileUrl:r.form.materialUrl,"onUpdate:fileUrl":l[27]||(l[27]=e=>r.form.materialUrl=e),format:["mp4","mov"],onGetPicUrl:o.getPicUrl,type:a.type},{tip:p((()=>[E])),_:1},8,["fileUrl","onGetPicUrl","type"])])),_:1}))],64)):"3"===a.type?(d(),c(y,{key:8},[h(b,{label:"文件标题",prop:"materialName"},{default:p((()=>[h(O,{modelValue:r.form.materialName,"onUpdate:modelValue":l[28]||(l[28]=e=>r.form.materialName=e),placeholder:"请输入文件标题",maxlength:32,"show-word-limit":""},null,8,["modelValue"])])),_:1}),h(b,{label:"文件描述"},{default:p((()=>[h(O,{modelValue:r.form.digest,"onUpdate:modelValue":l[29]||(l[29]=e=>r.form.digest=e),type:"textarea",placeholder:"请输入文件描述",maxlength:100,"show-word-limit":"",autosize:{minRows:3,maxRows:10}},null,8,["modelValue"])])),_:1}),r.form.id?g("",!0):(d(),s(b,{key:0,label:"上传文件",prop:"materialUrl"},{default:p((()=>[h($,{fileUrl:r.form.materialUrl,"onUpdate:fileUrl":l[30]||(l[30]=e=>r.form.materialUrl=e),type:a.type,format:["doc","docx","pdf","ppt","pptx","pps","pptsx"]},{tip:p((()=>[R])),_:1},8,["fileUrl","type"])])),_:1}))],64)):g("",!0)])),_:1},8,["model","rules"])])),_:1}),"0"===a.type&&r.form.id?g("",!0):(d(),s(J,{key:0,class:"ml10",span:10},{default:p((()=>[h(B,{list:r.mobForm},null,8,["list"])])),_:1}))])),_:1})])),_:1},8,["modelValue"])}],["__scopeId","data-v-0e0a13d3"]]);export{O as default};