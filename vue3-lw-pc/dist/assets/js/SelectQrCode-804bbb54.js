import{a as e}from"./group-16414119.js";import{ai as t,aq as l,o as i,c as a,_ as s,U as o,a as r,Y as d,aa as p,V as m,T as u,X as n,bl as c,bj as g}from"./@vue-e400fd81.js";import{_ as h}from"./quill-image-resize-module-c051113e.js";import"../index-044285d2.js";import"./js-cookie-8253c38e.js";/* empty css                      */import"./vue-router-f8d53be7.js";import"./element-plus-68ba2566.js";import"./lodash-es-d4f5f48c.js";import"./@element-plus-214e0f7b.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c17bc6b2.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-36fbce82.js";import"./pinia-1b56b17e.js";import"./vue-demi-71ba0ef2.js";import"./jsencrypt-43f479c1.js";import"./crypto-js-d6a67473.js";import"./ali-oss-912914b8.js";import"./axios-fb5f9e0e.js";import"./@vueuse-4025ce01.js";import"./path-browserify-289407ee.js";import"./nprogress-a39edb90.js";import"./clipboard-7a0da8dc.js";import"./quill-c6b3d2fb.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const j={components:{},props:{visible:{type:Boolean,default:!1},title:{type:String,default:"选择群活码"},selected:{type:Array,default:()=>[]}},data:()=>({loading:!0,query:{pageNum:1,pageSize:10,activityName:"",tagIds:""},list:[],total:0,radio:"",tagNames:"",showSelectTag:!1,tagList:[]}),watch:{selected:{deep:!0,handler(e){this.setSelected()}},list:{deep:!0,handler(e){this.setSelected()}}},computed:{Pvisible:{get(){return this.visible},set(e){this.$emit("update:visible",e)}}},created(){this.getList()},mounted(){},methods:{getSelectTag(e){this.taglist=e;let t=[],l=[];e.forEach((e=>{t.push(e.name),l.push(e.tagId)})),this.tagNames=t.join(","),this.query.tagIds=l.join(",")},getList(t){t&&(this.query.pageNum=t),this.loading=!0,e(this.query).then((({rows:e,total:t})=>{this.list=e,this.total=+t,this.loading=!1})).catch((()=>{this.loading=!1}))},submit(){this.Pvisible=!1,this.$emit("success",this.radio)},setSelected(){this.selected.length&&this.list.forEach((e=>{e.id==this.selected[0].id&&(this.radio=e)}))}}},f=(e=>(c("data-v-8f397446"),e=e(),g(),e))((()=>r("div",{style:{"z-index":"9999999"}},null,-1)));const b=h(j,[["render",function(e,c,g,h,j,b){const y=t("el-input"),v=t("el-button"),w=t("el-form-item"),q=t("el-form"),S=t("el-radio"),_=t("el-table-column"),N=t("el-image"),U=t("el-popover"),V=t("tag-ellipsis"),k=t("el-table"),T=t("pagination"),x=t("el-dialog"),z=t("SelectTag"),L=l("loading");return i(),a("div",null,[s(x,{title:g.title,modelValue:b.Pvisible,"onUpdate:modelValue":c[9]||(c[9]=e=>b.Pvisible=e),width:"750px","append-to-body":"","close-on-click-modal":!1},{footer:o((()=>[r("div",null,[s(v,{onClick:c[8]||(c[8]=e=>b.Pvisible=!1)},{default:o((()=>[d("取 消")])),_:1}),s(v,{type:"primary",onClick:b.submit},{default:o((()=>[d("确 定")])),_:1},8,["onClick"])])])),default:o((()=>[r("div",null,[s(q,{ref:"form",model:j.query,"label-width":""},{default:o((()=>[s(w,{label:""},{default:o((()=>[s(y,{modelValue:j.query.activityName,"onUpdate:modelValue":c[0]||(c[0]=e=>j.query.activityName=e),class:"mr10",style:{width:"150px"},placeholder:"请输入名称",onKeyup:c[1]||(c[1]=p((e=>b.getList(1)),["enter"]))},null,8,["modelValue"]),s(y,{class:"mr10",style:{width:"150px"},"model-value":j.tagNames,readonly:"",onClick:c[2]||(c[2]=e=>j.showSelectTag=!0),placeholder:"请选择客群标签"},null,8,["model-value"]),s(v,{icon:"el-icon-search",circle:"",onClick:c[3]||(c[3]=e=>b.getList(1))})])),_:1})])),_:1},8,["model"]),m((i(),u(k,{data:j.list},{default:o((()=>[s(_,{width:"30"},{default:o((e=>[s(S,{modelValue:j.radio,"onUpdate:modelValue":c[4]||(c[4]=e=>j.radio=e),label:e.row},{default:o((()=>[d("'")])),_:2},1032,["modelValue","label"])])),_:1}),s(_,{prop:"activityName",label:"活码名称",align:"center"}),s(_,{prop:"codeUrl",label:"二维码",align:"center",width:"130"},{default:o((({row:e})=>[s(U,{placement:"bottom",trigger:"hover"},{reference:o((()=>[s(N,{src:e.codeUrl,class:"code-image--small"},null,8,["src"])])),default:o((()=>[s(N,{src:e.codeUrl,class:"code-image"},null,8,["src"])])),_:2},1024)])),_:1}),s(_,{label:"客群标签"},{default:o((({row:e})=>[e.tags?(i(),u(V,{key:0,limit:"1",list:e.tags.split(",")},null,8,["list"])):n("",!0)])),_:1}),s(_,{label:"活码客群数",align:"center",prop:"chatGroupNum"}),s(_,{prop:"chatGroupMemberTotalNum",label:"群总人数",align:"center"})])),_:1},8,["data"])),[[L,j.loading]]),s(T,{total:j.total,page:j.query.pageNum,"onUpdate:page":c[5]||(c[5]=e=>j.query.pageNum=e),limit:j.query.pageSize,"onUpdate:limit":c[6]||(c[6]=e=>j.query.pageSize=e),layout:"total,prev, pager, next, jumper",onPagination:c[7]||(c[7]=e=>b.getList())},null,8,["total","page","limit"])]),f])),_:1},8,["title","modelValue"]),s(z,{visible:j.showSelectTag,"onUpdate:visible":c[10]||(c[10]=e=>j.showSelectTag=e),type:"2",selected:j.tagList,onSuccess:b.getSelectTag},null,8,["visible","selected","onSuccess"])])}],["__scopeId","data-v-8f397446"]]);export{b as default};
