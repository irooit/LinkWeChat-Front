import{r as t}from"../index-044285d2.js";const r=window.lwConfig.services.wecom;function n(n){return t({url:r+"/moments/list",params:n})}function s(n){return t({url:r+"/moments/sync/"+n})}function e(n){return t({url:r+"/moments/get/"+n})}function o(n){return t({url:r+"/moments/cancel/"+n})}function u(n){return t({url:r+"/moments/add",method:"post",data:n})}function a(n){return t({url:r+"/moments/estimate/num",method:"post",data:n})}function m(n){return t({url:r+"/moments/reminder/execution/"+n})}function i(n){return t({url:r+"/moments/statistic/user/"+n})}function c(n){return t({url:r+"/moments/statistic/user/record",params:n})}function l(n){return t({url:r+"/moments/statistic/user/export",params:n,responseType:"blob"})}function p(n){return t({url:r+"/moments/statistic/customer/"+n})}function f(n){return t({url:r+"/moments/statistic/customer/record",params:n})}function d(n){return t({url:r+"/moments/statistic/customer/export",params:n,responseType:"blob"})}function b(n){return t({url:r+"/moments/statistic/interact/"+n})}function x(n){return t({url:r+"/moments/statistic/interact/record",params:n})}function w(n){return t({url:r+"/moments/statistic/interact/export",params:n,responseType:"blob"})}export{b as a,w as b,x as c,i as d,d as e,l as f,f as g,c as h,e as i,s as j,n as k,o as l,u as m,a as n,m as r,p as s};