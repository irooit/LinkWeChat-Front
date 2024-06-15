import{ai as e,o as t,T as r,U as o,a as l,_ as a,c as n,K as i,a9 as s,Y as d,X as m,V as c,$ as p,bl as f,bj as h}from"./@vue-e400fd81.js";import{_ as u}from"./quill-image-resize-module-c051113e.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const g={name:"",components:{},props:{data:{type:Object,default:()=>({})}},data:()=>({welcomeMsgError:"",limit:[1440,1080],form:{}}),computed:{},watch:{data:{handler(e){this.form=e},immediate:!0}},created(){},mounted(){},methods:{onInsertMaterial(e){this.form.contentType=e,this.form.otherContent.push({annexType:e,annexUrl:"",contentError:""})},onRemoveMaterial(e){this.form.otherContent.splice(e,1),this.form.otherContent.length||(this.form.contentType="")},validateMaterial(){let e=!0;return this.form.otherContent.forEach((t=>{t.annexUrl?"link"!=t.annexType||t.other?(t.contentError="",t.otherError=""):t.otherError="封面图片不能为空":(t.contentError="内容不能为空",e=!1)})),e},validate(){if(!this.form.content)return void(this.welcomeMsgError="请输入动态内容");this.welcomeMsgError="";let e=this.validateMaterial();return e&&(this.form.otherContent.forEach((t=>{if(delete t.contentError,delete t.otherError,"link"===t.annexType){/(http|https):\/\/([\w.]+\/?)\S*/.test(t.annexUrl)||(e=!1,t.contentError="必须以 http://或 https://开头"),t.other||(e=!1,t.otherError="请上传封面图片")}})),this.form.otherContent.length||(this.form.contentType="text")),!!e&&(this.$emit("update:data",this.form),!0)}}},y={class:"g-card"},x={key:0,class:"my-cord"},U={class:"operation"},v=["onClick"],C={key:1,class:"my-cord"},E={class:"operation"},k=["onClick"],w=(e=>(f("data-v-07179ecf"),e=e(),h(),e))((()=>l("div",{class:"sub-des"},"仅支持公众号图文链接，且必须以 http://或 https://开头",-1))),_={key:2,class:"my-cord"},b={class:"operation"},T=["onClick"],j={class:"g-card add-continue"},M={style:{display:"flex","align-items":"center"}};const q=u(g,[["render",function(f,h,u,g,q,V){const R=e("el-input"),I=e("el-form-item"),P=e("el-icon-delete"),z=e("upload"),O=e("el-icon-CirclePlus"),$=e("el-button"),D=e("el-dropdown-item"),K=e("el-dropdown-menu"),S=e("el-dropdown"),X=e("el-form");return t(),r(X,{"label-width":"110px","label-position":"right"},{default:o((()=>[l("div",y,[a(I,{label:"动态内容",required:"",style:{width:"50%","margin-bottom":"0"},error:q.welcomeMsgError},{default:o((()=>[a(R,{ref:"msgTextarea",type:"textarea",modelValue:q.form.content,"onUpdate:modelValue":h[0]||(h[0]=e=>q.form.content=e),maxlength:"2000","show-word-limit":"",placeholder:"请输入",autosize:{minRows:5,maxRows:20},clearable:""},null,8,["modelValue"])])),_:1},8,["error"])]),(t(!0),n(i,null,s(q.form.otherContent,((e,r)=>(t(),n("div",{class:"g-card",key:r},["image"==e.annexType?(t(),n("div",x,[l("div",U,[l("div",{class:"algin",onClick:e=>V.onRemoveMaterial(r)},[a(P,{class:"el-icon-delete mr5"}),d(" 删除 ")],8,v)]),a(I,{label:"图片上传",required:"",error:e.contentError},{default:o((()=>[a(z,{maxImgPx:q.limit,class:"image-uploader",fileUrl:e.annexUrl,"onUpdate:fileUrl":t=>e.annexUrl=t,type:"0"},null,8,["maxImgPx","fileUrl","onUpdate:fileUrl"])])),_:2},1032,["error"])])):"link"==e.annexType?(t(),n("div",C,[l("div",E,[l("div",{class:"algin",onClick:e=>V.onRemoveMaterial(r)},[a(P,{class:"el-icon-delete mr5"}),d(" 删除 ")],8,k)]),a(I,{label:"图文链接",style:{width:"50%"},required:"",error:e.contentError},{default:o((()=>[a(R,{modelValue:e.annexUrl,"onUpdate:modelValue":t=>e.annexUrl=t,placeholder:"请输入图文链接"},null,8,["modelValue","onUpdate:modelValue"]),w])),_:2},1032,["error"]),a(I,{label:"封面图片",style:{width:"50%"},required:"",error:e.otherError},{default:o((()=>[a(z,{class:"image-uploader",fileUrl:e.other,"onUpdate:fileUrl":t=>e.other=t,type:"0"},null,8,["fileUrl","onUpdate:fileUrl"])])),_:2},1032,["error"])])):"video"==e.annexType?(t(),n("div",_,[l("div",b,[l("div",{class:"algin",onClick:e=>V.onRemoveMaterial(r)},[a(P,{class:"el-icon-delete mr5"}),d(" 删除 ")],8,T)]),a(I,{label:"视频上传",required:"",error:e.contentError},{default:o((()=>[a(z,{class:"image-uploader",fileUrl:e.annexUrl,"onUpdate:fileUrl":t=>e.annexUrl=t,type:"2"},null,8,["fileUrl","onUpdate:fileUrl"])])),_:2},1032,["error"])])):m("",!0)])))),128)),c(l("div",j,[a(S,{style:{"margin-left":"10px"},onCommand:V.onInsertMaterial},{dropdown:o((()=>[a(K,{trigger:"click"},{default:o((()=>["image"===q.form.contentType||0===q.form.otherContent.length?(t(),r(D,{key:0,command:"image"},{default:o((()=>[a($,{text:""},{default:o((()=>[d("图片")])),_:1})])),_:1})):m("",!0),0===q.form.otherContent.length?(t(),r(D,{key:1,command:"video"},{default:o((()=>[a($,{text:""},{default:o((()=>[d("视频")])),_:1})])),_:1})):m("",!0),0===q.form.otherContent.length?(t(),r(D,{key:2,command:"link"},{default:o((()=>[a($,{text:""},{default:o((()=>[d("网页")])),_:1})])),_:1})):m("",!0)])),_:1})])),default:o((()=>[l("div",M,[a(O,{class:"el-icon-CirclePlus mr5"}),d(" 继续添加附件 ")])])),_:1},8,["onCommand"])],512),[[p,q.form.otherContent.length<=8&&"video"!==q.form.contentType&&"link"!==q.form.contentType]])])),_:1})}],["__scopeId","data-v-07179ecf"]]);export{q as default};
