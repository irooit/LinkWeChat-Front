import{C as e}from"../index-044285d2.js";const{get:o,post:a,put:r,del:s}=e,d="/communityKeywordGroup",p=e=>o(`${d}/findLists`,e),t=e=>o(`${d}/getKeyWordGroupBaseInfo/${e}`),u=e=>o(`${d}/findWeKeyWordGroupSubs`,e),$=e=>a(`${d}/createOrUpdateBaseInfo`,e),n=e=>s(`${d}/batchRemoveKeyWordGroup/${e}`),y=e=>s(`${d}/batchRemoveKeyWordGroupSub/${e}`),b=()=>o(`${d}/applyToBuildPrimaryKey`),c=e=>a(`${d}/cancelCreateBaseInfo`,e),i=e=>a(`${d}/${e.id?"updateKeyWordGroupSub":"createKeyWordGroupSub"}`,e),K=e=>a(`${d}/batchUpdateKeyWordGroupSub`,e),W=e=>o(`${d}/countTab/${e}`),G=e=>o(`${d}/countTrend`,e),f=e=>o(`${d}/findKeyWordGroupTable`,e),l=e=>o(`${d}/exprotKeyWordGroupTable`,e,{responseType:"blob"}),m=e=>o(`${d}/findWeKeyWordGroupChatTable`,e);export{b as a,t as b,K as c,i as d,c as e,$ as f,u as g,p as h,n as i,W as j,G as k,l,m,f as n,y as r};
