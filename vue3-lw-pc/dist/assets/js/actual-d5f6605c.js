import{r as t}from"../index-044285d2.js";const r=window.lwConfig.services.wecom+"/actual";function n(n){return t({url:r+"/list",params:n})}function e(n){return t({url:r+"/",method:"post",data:n})}function o(n){return t({url:r+"/",method:"put",data:n})}function u(n){return t({url:r+"/"+n,method:"delete"})}export{e as a,n as g,u as r,o as u};