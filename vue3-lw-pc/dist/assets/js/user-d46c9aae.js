import{r}from"../index-044285d2.js";function t(){return r({url:"/system/user/profile",method:"get"})}function e(t){return r({url:"/system/user/profile",method:"put",data:t})}function s(t,e){return r({url:"/system/user/profile/updatePwd",method:"put",params:{oldPassword:t,newPassword:e}})}function u(t){return r({url:"/system/user/profile/avatar",method:"post",data:t})}export{e as a,s as b,t as g,u};