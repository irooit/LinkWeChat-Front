import{r}from"../index-044285d2.js";let a=window.lwConfig.services.wecom;const t=a+"/material";function n(a){return r({url:t+"/count",params:a})}function e(a){return r({url:t+"/analyseTop",params:a})}function o(a){return r({url:t+"/dataDetail",params:a})}function u(t){return r({url:a+"/category/delOrMuchMove",method:"DELETE",data:t})}export{o as a,e as b,u as d,n as g};