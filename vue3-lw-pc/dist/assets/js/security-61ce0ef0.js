import{r as t}from"../index-044285d2.js";const r=window.lwConfig.services.wecom+"/sensitive";function e(e){return t({url:r+"/hit/list",method:"get",params:e})}function n(e){return t({url:r+"/list",method:"get",params:e})}function u(e){return t({url:r,method:"post",data:e})}function o(e){return t({url:r,method:"put",data:e})}function s(e){return t({url:r+"/"+e,method:"get"})}function a(e){return t({url:r+"/"+e,method:"delete"})}function i(e){return t({url:r+"/list",method:"get",params:e})}function m(e){return t({url:r+"/act/list",method:"get",params:e})}export{m as a,e as b,n as c,u as d,s as e,a as f,i as g,o as m};