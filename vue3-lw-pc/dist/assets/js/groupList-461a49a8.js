import{_ as s}from"./quill-image-resize-module-c051113e.js";import{ai as a,aq as i,V as e,o as t,c as l,K as o,a9 as r,P as p,a as n,X as c,Z as d,T as m}from"./@vue-e400fd81.js";import"./quill-c6b3d2fb.js";import"./@babel-efd68da6.js";import"./to-fast-properties-1160b370.js";import"./quill-delta-a1872f89.js";import"./fast-diff-d5a53119.js";import"./lodash.clonedeep-1b6eefdc.js";import"./lodash.isequal-e7d08617.js";import"./@vueup-7cf8cfdd.js";const u={props:{personList:{type:Array,defluat:()=>[]},loading:{type:Boolean,defluat:!1}},data:()=>({loadings:!0,active:void 0}),methods:{liClick(s,a){this.active=a,this.$emit("groupFn",s)}}},g={class:"groupList"},v={key:0},f=["onClick"],j={class:"ninebox"},y={key:0},k=["src"],h=["title"];const b=s(u,[["render",function(s,u,b,q,x,C){const L=a("el-empty"),_=i("loading");return e((t(),l("div",g,[b.personList.length?(t(),l("ul",v,[(t(!0),l(o,null,r(b.personList,((s,a)=>(t(),l("li",{key:a,class:p(["flex aic",{active:a==x.active}]),onClick:i=>C.liClick(s,a)},[n("div",j,[s.avatar?(t(),l("ul",y,[(t(!0),l(o,null,r(s.avatar.split(","),((s,a)=>(t(),l("li",{key:a},[n("img",{src:s},null,8,k)])))),128))])):c("",!0)]),n("div",{style:{"margin-left":"8px","line-height":"60px"},class:"toe",title:s.groupName},d(s.name),9,h)],10,f)))),128))])):(t(),m(L,{key:1,"image-size":100}))])),[[_,b.loading]])}],["__scopeId","data-v-2b722154"]]);export{b as default};