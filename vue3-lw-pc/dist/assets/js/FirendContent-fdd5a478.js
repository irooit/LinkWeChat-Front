import{_ as l}from"./quill-image-resize-module-c051113e.js";import{ai as e,o as s,c as i,a,X as t,K as r,a9 as c,Z as n,T as d}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const o={class:"content"},m={key:0,class:"item mb10",style:{"margin-top":"0px"}},p={class:"msg"},v={class:"word"},u=["innerHTML"],y={style:{display:"flex","flex-wrap":"wrap"}},g={key:0,class:"msg"},f={class:"image"},k=["src"],U={key:1,class:"msg"},w={class:"word-and-image"},T={class:"sub-content"},b=["src"],j={key:2,class:"msg"},x={class:"word-and-image"},h={class:"sub-content"},N=["src"],q={key:3,class:"msg"},S={class:"word-and-image"},O={class:"sub-content"},_=["src"],H={key:4,class:"msg"},J={class:"word-and-image"},L={class:"sub-content"},M={key:5,class:"msg"},z={class:"word-and-image"},A={class:"sub-content"},D=["src"];const E=l({name:"preview-client",components:{},props:{name:{type:String,default:"客户"},content:{type:String,default:null},list:{type:Array,default:()=>[]}},watch:{},data:()=>({}),computed:{},created(){},mounted(){},methods:{filType(l){let e=JSON.parse(JSON.stringify(l));e=e.split(".");let s=e[e.length-1];return"pdf"===s?"pdf":["doc","docx"].includes(s)?"word":["ppt","pptx","pps","pptsx"].includes(s)?"ppt":""}}},[["render",function(l,E,I,K,X,Z){var B;const C=e("svg-icon");return s(),i("div",o,[I.content?(s(),i("div",m,[a("div",p,[a("div",v,[a("p",{style:{"line-height":"18px"},innerHTML:null==(B=I.content)?void 0:B.replace(/\n|\r\n/g,"<br>").replace(/ /g,"  ")},null,8,u)])])])):t("",!0),a("div",y,[(s(!0),i(r,null,c(I.list,((l,e)=>(s(),i("div",{class:"item",key:e},["0"===l.mediaType?(s(),i("div",g,[a("div",f,[a("img",{src:l.materialUrl},null,8,k)])])):t("",!0),"9"===l.mediaType?(s(),i("div",U,[a("div",w,[a("div",null,n(l.materialName),1),a("div",T,[a("div",null,n(l.content),1),a("div",null,[l.coverUrl&&""!=l.coverUrl?(s(),i("img",{key:0,src:l.coverUrl},null,8,b)):(s(),d(C,{key:1,class:"icon-style",icon:"imgText"}))])])])])):t("",!0),"12"===l.mediaType?(s(),i("div",j,[a("div",x,[a("div",null,n(l.materialName),1),a("div",h,[a("div",null,n(l.digest),1),a("div",null,[l.coverUrl&&""!=l.coverUrl?(s(),i("img",{key:0,src:l.coverUrl},null,8,N)):(s(),d(C,{key:1,class:"icon-style",icon:"article"}))])])])])):t("",!0),"2"===l.mediaType?(s(),i("div",q,[a("div",S,[a("div",null,n(l.materialName),1),a("div",O,[a("div",null,n(l.digest),1),a("div",null,[l.coverUrl&&""!=l.coverUrl?(s(),i("img",{key:0,src:l.coverUrl},null,8,_)):(s(),d(C,{key:1,class:"icon-style",icon:"pic"}))])])])])):t("",!0),"3"===l.mediaType?(s(),i("div",H,[a("div",J,[a("div",null,n(l.materialName),1),a("div",L,[a("div",null,n(l.digest),1),a("div",null,[l.materialUrl?(s(),d(C,{key:0,class:"icon-style",icon:l.materialUrl?Z.filType(l.materialUrl):""},null,8,["icon"])):t("",!0)])])])])):t("",!0),"5"===l.mediaType?(s(),i("div",M,[a("div",z,[a("div",null,n(l.materialName),1),a("div",A,[a("div",null,n(l.digest),1),a("div",null,[l.materialUrl&&""!=l.materialUrl?(s(),i("img",{key:0,src:l.materialUrl},null,8,D)):(s(),d(C,{key:1,class:"icon-style",icon:"pic"}))])])])])):t("",!0)])))),128))])])}],["__scopeId","data-v-2704c412"]]);export{E as default};