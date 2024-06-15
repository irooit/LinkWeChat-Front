import{c as t,g as e}from"./@babel-efd68da6.js";import{d as r}from"./fast-diff-d5a53119.js";import{l as n}from"./lodash.clonedeep-1b6eefdc.js";import{l as i}from"./lodash.isequal-e7d08617.js";var o={},s=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0});var u,f,p=s(n),a=s(i);(f=u||(u={})).compose=function(t,e,r){void 0===t&&(t={}),void 0===e&&(e={}),"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=p.default(e);for(var i in r||(n=Object.keys(n).reduce((function(t,e){return null!=n[e]&&(t[e]=n[e]),t}),{})),t)void 0!==t[i]&&void 0===e[i]&&(n[i]=t[i]);return Object.keys(n).length>0?n:void 0},f.diff=function(t,e){void 0===t&&(t={}),void 0===e&&(e={}),"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=Object.keys(t).concat(Object.keys(e)).reduce((function(r,n){return a.default(t[n],e[n])||(r[n]=void 0===e[n]?null:e[n]),r}),{});return Object.keys(r).length>0?r:void 0},f.invert=function(t,e){void 0===t&&(t={}),void 0===e&&(e={}),t=t||{};var r=Object.keys(e).reduce((function(r,n){return e[n]!==t[n]&&void 0!==t[n]&&(r[n]=e[n]),r}),{});return Object.keys(t).reduce((function(r,n){return t[n]!==e[n]&&void 0===e[n]&&(r[n]=null),r}),r)},f.transform=function(t,e,r){if(void 0===r&&(r=!1),"object"!=typeof t)return e;if("object"==typeof e){if(!r)return e;var n=Object.keys(e).reduce((function(r,n){return void 0===t[n]&&(r[n]=e[n]),r}),{});return Object.keys(n).length>0?n:void 0}},o.default=u;var h,l,d={},c={};function y(){if(l)return d;l=1;var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(d,"__esModule",{value:!0});var r,n,i=e(function(){if(h)return c;h=1;var e=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(c,"__esModule",{value:!0});var r=e(y()),n=function(){function t(t){this.ops=t,this.index=0,this.offset=0}return t.prototype.hasNext=function(){return this.peekLength()<1/0},t.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,i=r.default.length(e);if(t>=i-n?(t=i-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},t.prototype.peek=function(){return this.ops[this.index]},t.prototype.peekLength=function(){return this.ops[this.index]?r.default.length(this.ops[this.index])-this.offset:1/0},t.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},t.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,r=this.next(),n=this.ops.slice(this.index);return this.offset=t,this.index=e,[r].concat(n)}return[]},t}();return c.default=n,c}());return(n=r||(r={})).iterator=function(t){return new i.default(t)},n.length=function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1},d.default=r,d}var b=t&&t.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},v=b(r),g=b(n),m=b(i),x=b(o),k=b(y()),j=String.fromCharCode(0);const _=e(function(){function t(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]}return t.prototype.insert=function(t,e){var r={};return"string"==typeof t&&0===t.length?this:(r.insert=t,null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r))},t.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},t.prototype.retain=function(t,e){if(t<=0)return this;var r={retain:t};return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(r.attributes=e),this.push(r)},t.prototype.push=function(t){var e=this.ops.length,r=this.ops[e-1];if(t=g.default(t),"object"==typeof r){if("number"==typeof t.delete&&"number"==typeof r.delete)return this.ops[e-1]={delete:r.delete+t.delete},this;if("number"==typeof r.delete&&null!=t.insert&&(e-=1,"object"!=typeof(r=this.ops[e-1])))return this.ops.unshift(t),this;if(m.default(t.attributes,r.attributes)){if("string"==typeof t.insert&&"string"==typeof r.insert)return this.ops[e-1]={insert:r.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof r.retain)return this.ops[e-1]={retain:r.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},t.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},t.prototype.filter=function(t){return this.ops.filter(t)},t.prototype.forEach=function(t){this.ops.forEach(t)},t.prototype.map=function(t){return this.ops.map(t)},t.prototype.partition=function(t){var e=[],r=[];return this.forEach((function(n){(t(n)?e:r).push(n)})),[e,r]},t.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},t.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+k.default.length(e):e.delete?t-e.delete:t}),0)},t.prototype.length=function(){return this.reduce((function(t,e){return t+k.default.length(e)}),0)},t.prototype.slice=function(e,r){void 0===e&&(e=0),void 0===r&&(r=1/0);for(var n=[],i=k.default.iterator(this.ops),o=0;o<r&&i.hasNext();){var s=void 0;o<e?s=i.next(e-o):(s=i.next(r-o),n.push(s)),o+=k.default.length(s)}return new t(n)},t.prototype.compose=function(e){var r=k.default.iterator(this.ops),n=k.default.iterator(e.ops),i=[],o=n.peek();if(null!=o&&"number"==typeof o.retain&&null==o.attributes){for(var s=o.retain;"insert"===r.peekType()&&r.peekLength()<=s;)s-=r.peekLength(),i.push(r.next());o.retain-s>0&&n.next(o.retain-s)}for(var u=new t(i);r.hasNext()||n.hasNext();)if("insert"===n.peekType())u.push(n.next());else if("delete"===r.peekType())u.push(r.next());else{var f=Math.min(r.peekLength(),n.peekLength()),p=r.next(f),a=n.next(f);if("number"==typeof a.retain){var h={};"number"==typeof p.retain?h.retain=f:h.insert=p.insert;var l=x.default.compose(p.attributes,a.attributes,"number"==typeof p.retain);if(l&&(h.attributes=l),u.push(h),!n.hasNext()&&m.default(u.ops[u.ops.length-1],h)){var d=new t(r.rest());return u.concat(d).chop()}}else"number"==typeof a.delete&&"number"==typeof p.retain&&u.push(a)}return u.chop()},t.prototype.concat=function(e){var r=new t(this.ops.slice());return e.ops.length>0&&(r.push(e.ops[0]),r.ops=r.ops.concat(e.ops.slice(1))),r},t.prototype.diff=function(e,r){if(this.ops===e.ops)return new t;var n=[this,e].map((function(t){return t.map((function(r){if(null!=r.insert)return"string"==typeof r.insert?r.insert:j;throw new Error("diff() called "+(t===e?"on":"with")+" non-document")})).join("")})),i=new t,o=v.default(n[0],n[1],r),s=k.default.iterator(this.ops),u=k.default.iterator(e.ops);return o.forEach((function(t){for(var e=t[1].length;e>0;){var r=0;switch(t[0]){case v.default.INSERT:r=Math.min(u.peekLength(),e),i.push(u.next(r));break;case v.default.DELETE:r=Math.min(e,s.peekLength()),s.next(r),i.delete(r);break;case v.default.EQUAL:r=Math.min(s.peekLength(),u.peekLength(),e);var n=s.next(r),o=u.next(r);m.default(n.insert,o.insert)?i.retain(r,x.default.diff(n.attributes,o.attributes)):i.push(o).delete(r)}e-=r}})),i.chop()},t.prototype.eachLine=function(e,r){void 0===r&&(r="\n");for(var n=k.default.iterator(this.ops),i=new t,o=0;n.hasNext();){if("insert"!==n.peekType())return;var s=n.peek(),u=k.default.length(s)-n.peekLength(),f="string"==typeof s.insert?s.insert.indexOf(r,u)-u:-1;if(f<0)i.push(n.next());else if(f>0)i.push(n.next(f));else{if(!1===e(i,n.next(1).attributes||{},o))return;o+=1,i=new t}}i.length()>0&&e(i,{},o)},t.prototype.invert=function(e){var r=new t;return this.reduce((function(t,n){if(n.insert)r.delete(k.default.length(n));else{if(n.retain&&null==n.attributes)return r.retain(n.retain),t+n.retain;if(n.delete||n.retain&&n.attributes){var i=n.delete||n.retain;return e.slice(t,t+i).forEach((function(t){n.delete?r.push(t):n.retain&&n.attributes&&r.retain(k.default.length(t),x.default.invert(n.attributes,t.attributes))})),t+i}}return t}),0),r.chop()},t.prototype.transform=function(e,r){if(void 0===r&&(r=!1),r=!!r,"number"==typeof e)return this.transformPosition(e,r);for(var n=e,i=k.default.iterator(this.ops),o=k.default.iterator(n.ops),s=new t;i.hasNext()||o.hasNext();)if("insert"!==i.peekType()||!r&&"insert"===o.peekType())if("insert"===o.peekType())s.push(o.next());else{var u=Math.min(i.peekLength(),o.peekLength()),f=i.next(u),p=o.next(u);if(f.delete)continue;p.delete?s.push(p):s.retain(u,x.default.transform(f.attributes,p.attributes,r))}else s.retain(k.default.length(i.next()));return s.chop()},t.prototype.transformPosition=function(t,e){void 0===e&&(e=!1),e=!!e;for(var r=k.default.iterator(this.ops),n=0;r.hasNext()&&n<=t;){var i=r.peekLength(),o=r.peekType();r.next(),"delete"!==o?("insert"===o&&(n<t||!e)&&(t+=i),n+=i):t-=Math.min(i,t-n)}return t},t.Op=k.default,t.AttributeMap=x.default,t}());export{_ as D};