import{r as e}from"../index-044285d2.js";const t=window.lwConfig.services.wecom+"/agent",r=t+"/msg";function d(){return e({url:t+"/list"})}function a(r){return e({url:t+`/pull/${r}`,method:"get"})}function u(r){return e({url:t+`/delete/${r}`,method:"delete"})}function o(r){return e({url:t+"/add",method:"post",data:r})}function l(r){return e({url:t+`/update/${r.id}`,method:"PUT",data:r})}const n={getList:t=>e({url:r+"/list",params:t}),getDetail:t=>e({url:r+`/get/${t}`}),revoke:t=>e({url:r+`/revoke/${t}`}),add:t=>e({url:r+"/add",method:"post",data:t}),update:t=>e({url:r+`/update/${t.id}`,method:"PUT",data:t}),remove:t=>e({url:r+`/delete/${t}`,method:"delete"})};export{n as a,o as b,d as g,u as r,a as s,l as u};
