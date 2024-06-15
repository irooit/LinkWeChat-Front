/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function e(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i.apply(this,arguments)}function r(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function a(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var l=a(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),s=a(/Edge/i),c=a(/firefox/i),u=a(/safari/i)&&!a(/chrome/i)&&!a(/android/i),d=a(/iP(ad|od|hone)/i),h=a(/chrome/i)&&a(/android/i),f={capture:!1,passive:!1};function p(t,e,n){t.addEventListener(e,n,!l&&f)}function g(t,e,n){t.removeEventListener(e,n,!l&&f)}function v(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(n){return!1}return!1}}function m(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function b(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&v(t,e):v(t,e))||o&&t===n)return t;if(t===n)break}while(t=m(t))}return null}var y,w=/\s+/g;function E(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(w," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(w," ")}}function S(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function D(t,e){var n="";if("string"==typeof t)n=t;else do{var o=S(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function _(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function T(){var t=document.scrollingElement;return t||document.documentElement}function C(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,s,c,u,d,h;if(t!==window&&t.parentNode&&t!==T()?(a=(r=t.getBoundingClientRect()).top,s=r.left,c=r.bottom,u=r.right,d=r.height,h=r.width):(a=0,s=0,c=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||n)&&t!==window&&(i=i||t.parentNode,!l))do{if(i&&i.getBoundingClientRect&&("none"!==S(i,"transform")||n&&"static"!==S(i,"position"))){var f=i.getBoundingClientRect();a-=f.top+parseInt(S(i,"border-top-width")),s-=f.left+parseInt(S(i,"border-left-width")),c=a+r.height,u=s+r.width;break}}while(i=i.parentNode);if(o&&t!==window){var p=D(i||t),g=p&&p.a,v=p&&p.d;p&&(c=(a/=v)+(d/=v),u=(s/=g)+(h/=g))}return{top:a,left:s,bottom:c,right:u,width:h,height:d}}}function x(t,e,n){for(var o=I(t,!0),i=C(t)[e];o;){var r=C(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===T())break;o=I(o,!1)}return!1}function O(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Yt.ghost&&(o||a[r]!==Yt.dragged)&&b(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function M(t,e){for(var n=t.lastElementChild;n&&(n===Yt.ghost||"none"===S(n,"display")||e&&!v(n,e));)n=n.previousElementSibling;return n||null}function N(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Yt.clone||e&&!v(t,e)||n++;return n}function A(t){var e=0,n=0,o=T();if(t)do{var i=D(t),r=i.a,a=i.d;e+=t.scrollLeft*r,n+=t.scrollTop*a}while(t!==o&&(t=t.parentNode));return[e,n]}function I(t,e){if(!t||!t.getBoundingClientRect)return T();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=S(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return T();if(o||e)return n;o=!0}}}while(n=n.parentNode);return T()}function P(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function k(t,e){return function(){if(!y){var n=arguments;1===n.length?t.call(this,n[0]):t.apply(this,n),y=setTimeout((function(){y=void 0}),e)}}}function X(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function Y(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function R(t,e,n){var o={};return Array.from(t.children).forEach((function(i){var r,a,l,s;if(b(i,e.draggable,t,!1)&&!i.animated&&i!==n){var c=C(i);o.left=Math.min(null!==(r=o.left)&&void 0!==r?r:1/0,c.left),o.top=Math.min(null!==(a=o.top)&&void 0!==a?a:1/0,c.top),o.right=Math.max(null!==(l=o.right)&&void 0!==l?l:-1/0,c.right),o.bottom=Math.max(null!==(s=o.bottom)&&void 0!==s?s:-1/0,c.bottom)}})),o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}var B="Sortable"+(new Date).getTime();function F(){var t,n=[];return{captureAnimationState:function(){(n=[],this.options.animation)&&[].slice.call(this.el.children).forEach((function(t){if("none"!==S(t,"display")&&t!==Yt.ghost){n.push({target:t,rect:C(t)});var o=e({},n[n.length-1].rect);if(t.thisAnimationDuration){var i=D(t,!0);i&&(o.top-=i.f,o.left-=i.e)}t.fromRect=o}}))},addAnimationState:function(t){n.push(t)},removeAnimationState:function(t){n.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(n,{target:t}),1)},animateAll:function(e){var o=this;if(!this.options.animation)return clearTimeout(t),void("function"==typeof e&&e());var i=!1,r=0;n.forEach((function(t){var e=0,n=t.target,a=n.fromRect,l=C(n),s=n.prevFromRect,c=n.prevToRect,u=t.rect,d=D(n,!0);d&&(l.top-=d.f,l.left-=d.e),n.toRect=l,n.thisAnimationDuration&&P(s,l)&&!P(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(e=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,o.options)),P(l,a)||(n.prevFromRect=a,n.prevToRect=l,e||(e=o.options.animation),o.animate(n,u,l,e)),e&&(i=!0,r=Math.max(r,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout((function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null}),e),n.thisAnimationDuration=e)})),clearTimeout(t),i?t=setTimeout((function(){"function"==typeof e&&e()}),r):"function"==typeof e&&e(),n=[]},animate:function(t,e,n,o){if(o){S(t,"transition",""),S(t,"transform","");var i=D(this.el),r=i&&i.a,a=i&&i.d,l=(e.left-n.left)/(r||1),s=(e.top-n.top)/(a||1);t.animatingX=!!l,t.animatingY=!!s,S(t,"transform","translate3d("+l+"px,"+s+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),S(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),S(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout((function(){S(t,"transition",""),S(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1}),o)}}}}var j=[],H={initializeByDefault:!0},L={mount:function(t){for(var e in H)H.hasOwnProperty(e)&&!(e in t)&&(t[e]=H[e]);j.forEach((function(e){if(e.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")})),j.push(t)},pluginEvent:function(t,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=t+"Global";j.forEach((function(i){n[i.pluginName]&&(n[i.pluginName][r]&&n[i.pluginName][r](e({sortable:n},o)),n.options[i.pluginName]&&n[i.pluginName][t]&&n[i.pluginName][t](e({sortable:n},o)))}))},initializePlugins:function(t,e,n,o){for(var r in j.forEach((function(o){var r=o.pluginName;if(t.options[r]||o.initializeByDefault){var a=new o(t,e,t.options);a.sortable=t,a.options=t.options,t[r]=a,i(n,a.defaults)}})),t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);void 0!==a&&(t.options[r]=a)}},getEventProperties:function(t,e){var n={};return j.forEach((function(o){"function"==typeof o.eventProperties&&i(n,o.eventProperties.call(e[o.pluginName],t))})),n},modifyOption:function(t,e,n){var o;return j.forEach((function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))})),o}};var W=["evt"],z=function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.evt,a=r(o,W);L.pluginEvent.bind(Yt)(t,n,e({dragEl:U,parentEl:V,ghostEl:q,rootEl:Z,nextEl:K,lastDownEl:Q,cloneEl:$,cloneHidden:J,dragStarted:ht,putSortable:rt,activeSortable:Yt.active,originalEvent:i,oldIndex:tt,oldDraggableIndex:nt,newIndex:et,newDraggableIndex:ot,hideGhostForTarget:It,unhideGhostForTarget:Pt,cloneNowHidden:function(){J=!0},cloneNowShown:function(){J=!1},dispatchSortableEvent:function(t){G({sortable:n,name:t,originalEvent:i})}},a))};function G(t){!function(t){var n=t.sortable,o=t.rootEl,i=t.name,r=t.targetEl,a=t.cloneEl,c=t.toEl,u=t.fromEl,d=t.oldIndex,h=t.newIndex,f=t.oldDraggableIndex,p=t.newDraggableIndex,g=t.originalEvent,v=t.putSortable,m=t.extraEventProperties;if(n=n||o&&o[B]){var b,y=n.options,w="on"+i.charAt(0).toUpperCase()+i.substr(1);!window.CustomEvent||l||s?(b=document.createEvent("Event")).initEvent(i,!0,!0):b=new CustomEvent(i,{bubbles:!0,cancelable:!0}),b.to=c||o,b.from=u||o,b.item=r||o,b.clone=a,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var E=e(e({},m),L.getEventProperties(i,n));for(var S in E)b[S]=E[S];o&&o.dispatchEvent(b),y[w]&&y[w].call(n,b)}}(e({putSortable:rt,cloneEl:$,targetEl:U,rootEl:Z,oldIndex:tt,oldDraggableIndex:nt,newIndex:et,newDraggableIndex:ot},t))}var U,V,q,Z,K,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,vt,mt=!1,bt=!1,yt=[],wt=!1,Et=!1,St=[],Dt=!1,_t=[],Tt="undefined"!=typeof document,Ct=d,xt=s||l?"cssFloat":"float",Ot=Tt&&!h&&!d&&"draggable"in document.createElement("div"),Mt=function(){if(Tt){if(l)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Nt=function(t,e){var n=S(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=O(t,0,e),r=O(t,1,e),a=i&&S(i),l=r&&S(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+C(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){var u="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==u?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[xt]||r&&"none"===n[xt]&&s+c>o)?"vertical":"horizontal"},At=function(t){function e(t,n){return function(o,i,r,a){var l=o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name;if(null==t&&(n||l))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var s=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===s||t.join&&t.indexOf(s)>-1}}var o={},i=t.group;i&&"object"==n(i)||(i={name:i}),o.name=i.name,o.checkPull=e(i.pull,!0),o.checkPut=e(i.put),o.revertClone=i.revertClone,t.group=o},It=function(){!Mt&&q&&S(q,"display","none")},Pt=function(){!Mt&&q&&S(q,"display","")};Tt&&!h&&document.addEventListener("click",(function(t){if(bt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),bt=!1,!1}),!0);var kt=function(t){if(U){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,yt.some((function(t){var e=t[B].options.emptyInsertThreshold;if(e&&!M(t)){var n=C(t),o=i>=n.left-e&&i<=n.right+e,l=r>=n.top-e&&r<=n.bottom+e;return o&&l?a=t:void 0}})),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[B]._onDragOver(n)}}var i,r,a},Xt=function(t){U&&U.parentNode[B]._isOutsideThisEl(t.target)};function Yt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=i({},e),t[B]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Nt(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Yt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(var o in L.initializePlugins(this,t,n),n)!(o in e)&&(e[o]=n[o]);for(var r in At(e),this)"_"===r.charAt(0)&&"function"==typeof this[r]&&(this[r]=this[r].bind(this));this.nativeDraggable=!e.forceFallback&&Ot,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?p(t,"pointerdown",this._onTapStart):(p(t,"mousedown",this._onTapStart),p(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(p(t,"dragover",this),p(t,"dragenter",this)),yt.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),i(this,F())}function Rt(t,e,n,o,i,r,a,c){var u,d,h=t[B],f=h.options.onMove;return!window.CustomEvent||l||s?(u=document.createEvent("Event")).initEvent("move",!0,!0):u=new CustomEvent("move",{bubbles:!0,cancelable:!0}),u.to=e,u.from=t,u.dragged=n,u.draggedRect=o,u.related=i||e,u.relatedRect=r||C(e),u.willInsertAfter=c,u.originalEvent=a,t.dispatchEvent(u),f&&(d=f.call(h,u,a)),d}function Bt(t){t.draggable=!1}function Ft(){Dt=!1}function jt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Ht(t){return setTimeout(t,0)}function Lt(t){return clearTimeout(t)}Yt.prototype={constructor:Yt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(ft=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,U):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,r=t.type,a=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,l=(a||t).target,s=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,c=o.filter;if(function(t){_t.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&_t.push(o)}}(n),!U&&!(/mousedown|pointerdown/.test(r)&&0!==t.button||o.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=b(l,o.draggable,n,!1))&&l.animated||Q===l)){if(tt=N(l),nt=N(l,o.draggable),"function"==typeof c){if(c.call(this,t,l,this))return G({sortable:e,rootEl:s,name:"filter",targetEl:l,toEl:n,fromEl:n}),z("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(c&&(c=c.split(",").some((function(o){if(o=b(s,o.trim(),n,!1))return G({sortable:e,rootEl:o,name:"filter",targetEl:l,fromEl:n,toEl:n}),z("filter",e,{evt:t}),!0}))))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!b(s,o.handle,n,!1)||this._prepareDragStart(t,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,u=r.ownerDocument;if(n&&!U&&n.parentNode===r){var d=C(n);if(Z=r,V=(U=n).parentNode,K=U.nextSibling,Q=n,it=a.group,Yt.dragged=U,at={target:U,clientX:(e||t).clientX,clientY:(e||t).clientY},ut=at.clientX-d.left,dt=at.clientY-d.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,U.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Yt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!c&&i.nativeDraggable&&(U.draggable=!0),i._triggerDragStart(t,e),G({sortable:i,name:"choose",originalEvent:t}),E(U,a.chosenClass,!0))},a.ignore.split(",").forEach((function(t){_(U,t.trim(),Bt)})),p(u,"dragover",kt),p(u,"mousemove",kt),p(u,"touchmove",kt),p(u,"mouseup",i._onDrop),p(u,"touchend",i._onDrop),p(u,"touchcancel",i._onDrop),c&&this.nativeDraggable&&(this.options.touchStartThreshold=4,U.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(s||l))o();else{if(Yt.eventCanceled)return void this._onDrop();p(u,"mouseup",i._disableDelayedDrag),p(u,"touchend",i._disableDelayedDrag),p(u,"touchcancel",i._disableDelayedDrag),p(u,"mousemove",i._delayedDragTouchMoveHandler),p(u,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&p(u,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){U&&Bt(U),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;g(t,"mouseup",this._disableDelayedDrag),g(t,"touchend",this._disableDelayedDrag),g(t,"touchcancel",this._disableDelayedDrag),g(t,"mousemove",this._delayedDragTouchMoveHandler),g(t,"touchmove",this._delayedDragTouchMoveHandler),g(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?p(document,"pointermove",this._onTouchMove):p(document,e?"touchmove":"mousemove",this._onTouchMove):(p(U,"dragend",this),p(Z,"dragstart",this._onDragStart));try{document.selection?Ht((function(){document.selection.empty()})):window.getSelection().removeAllRanges()}catch(n){}},_dragStarted:function(t,e){if(mt=!1,Z&&U){z("dragStarted",this,{evt:e}),this.nativeDraggable&&p(document,"dragover",Xt);var n=this.options;!t&&E(U,n.dragClass,!1),E(U,n.ghostClass,!0),Yt.active=this,t&&this._appendGhost(),G({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(lt){this._lastX=lt.clientX,this._lastY=lt.clientY,It();for(var t=document.elementFromPoint(lt.clientX,lt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(lt.clientX,lt.clientY))!==e;)e=t;if(U.parentNode[B]._isOutsideThisEl(t),e)do{if(e[B]){if(e[B]._onDragOver({clientX:lt.clientX,clientY:lt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}t=e}while(e=e.parentNode);Pt()}},_onTouchMove:function(t){if(at){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=q&&D(q,!0),a=q&&r&&r.a,l=q&&r&&r.d,s=Ct&&vt&&A(vt),c=(i.clientX-at.clientX+o.x)/(a||1)+(s?s[0]-St[0]:0)/(a||1),u=(i.clientY-at.clientY+o.y)/(l||1)+(s?s[1]-St[1]:0)/(l||1);if(!Yt.active&&!mt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(q){r?(r.e+=c-(st||0),r.f+=u-(ct||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")");S(q,"webkitTransform",d),S(q,"mozTransform",d),S(q,"msTransform",d),S(q,"transform",d),st=c,ct=u,lt=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!q){var t=this.options.fallbackOnBody?document.body:Z,e=C(U,!0,Ct,!0,t),n=this.options;if(Ct){for(vt=t;"static"===S(vt,"position")&&"none"===S(vt,"transform")&&vt!==document;)vt=vt.parentNode;vt!==document.body&&vt!==document.documentElement?(vt===document&&(vt=T()),e.top+=vt.scrollTop,e.left+=vt.scrollLeft):vt=T(),St=A(vt)}E(q=U.cloneNode(!0),n.ghostClass,!1),E(q,n.fallbackClass,!0),E(q,n.dragClass,!0),S(q,"transition",""),S(q,"transform",""),S(q,"box-sizing","border-box"),S(q,"margin",0),S(q,"top",e.top),S(q,"left",e.left),S(q,"width",e.width),S(q,"height",e.height),S(q,"opacity","0.8"),S(q,"position",Ct?"absolute":"fixed"),S(q,"zIndex","100000"),S(q,"pointerEvents","none"),Yt.ghost=q,t.appendChild(q),S(q,"transform-origin",ut/parseInt(q.style.width)*100+"% "+dt/parseInt(q.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Yt.eventCanceled?this._onDrop():(z("setupClone",this),Yt.eventCanceled||(($=Y(U)).removeAttribute("id"),$.draggable=!1,$.style["will-change"]="",this._hideClone(),E($,this.options.chosenClass,!1),Yt.clone=$),n.cloneId=Ht((function(){z("clone",n),Yt.eventCanceled||(n.options.removeCloneOnHide||Z.insertBefore($,U),n._hideClone(),G({sortable:n,name:"clone"}))})),!e&&E(U,i.dragClass,!0),e?(bt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(g(document,"mouseup",n._onDrop),g(document,"touchend",n._onDrop),g(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,U)),p(document,"drop",n),S(U,"transform","translateZ(0)")),mt=!0,n._dragStartId=Ht(n._dragStarted.bind(n,e,t)),p(document,"selectstart",n),ht=!0,u&&S(document.body,"user-select","none"))},_onDragOver:function(t){var n,o,i,r,a=this.el,l=t.target,s=this.options,c=s.group,u=Yt.active,d=it===c,h=s.sort,f=rt||u,p=this,g=!1;if(!Dt){if(void 0!==t.preventDefault&&t.cancelable&&t.preventDefault(),l=b(l,s.draggable,a,!0),H("dragOver"),Yt.eventCanceled)return g;if(U.contains(t.target)||l.animated&&l.animatingX&&l.animatingY||p._ignoreWhileAnimating===l)return W(!1);if(bt=!1,u&&!s.disabled&&(d?h||(i=V!==Z):rt===this||(this.lastPutMode=it.checkPull(this,u,U,t))&&c.checkPut(this,u,U,t))){if(r="vertical"===this._getDirection(t,l),n=C(U),H("dragOverValid"),Yt.eventCanceled)return g;if(i)return V=Z,L(),this._hideClone(),H("revert"),Yt.eventCanceled||(K?Z.insertBefore(U,K):Z.appendChild(U)),W(!0);var v=M(a,s.draggable);if(!v||function(t,e,n){var o=C(M(n.el,n.options.draggable)),i=R(n.el,n.options,q),r=10;return e?t.clientX>i.right+r||t.clientY>o.bottom&&t.clientX>o.left:t.clientY>i.bottom+r||t.clientX>o.right&&t.clientY>o.top}(t,r,this)&&!v.animated){if(v===U)return W(!1);if(v&&a===t.target&&(l=v),l&&(o=C(l)),!1!==Rt(Z,a,U,n,l,o,t,!!l))return L(),v&&v.nextSibling?a.insertBefore(U,v.nextSibling):a.appendChild(U),V=a,Q(),W(!0)}else if(v&&function(t,e,n){var o=C(O(n.el,0,n.options,!0)),i=R(n.el,n.options,q),r=10;return e?t.clientX<i.left-r||t.clientY<o.top&&t.clientX<o.right:t.clientY<i.top-r||t.clientY<o.bottom&&t.clientX<o.left}(t,r,this)){var m=O(a,0,s,!0);if(m===U)return W(!1);if(o=C(l=m),!1!==Rt(Z,a,U,n,l,o,t,!1))return L(),a.insertBefore(U,m),V=a,Q(),W(!0)}else if(l.parentNode===a){o=C(l);var y,w,D,_=U.parentNode!==a,T=!function(t,e,n){var o=n?t.left:t.top,i=n?t.right:t.bottom,r=n?t.width:t.height,a=n?e.left:e.top,l=n?e.right:e.bottom,s=n?e.width:e.height;return o===a||i===l||o+r/2===a+s/2}(U.animated&&U.toRect||n,l.animated&&l.toRect||o,r),A=r?"top":"left",I=x(l,"top","top")||x(U,"top","top"),P=I?I.scrollTop:void 0;if(ft!==l&&(w=o[A],wt=!1,Et=!T&&s.invertSwap||_),y=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&gt<c*i){if(!wt&&(1===pt?s>u+c*r/2:s<d-c*r/2)&&(wt=!0),wt)h=!0;else if(1===pt?s<u+gt:s>d-gt)return-pt}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return N(U)<N(t)?1:-1}(e);if((h=h||a)&&(s<u+c*r/2||s>d-c*r/2))return s>u+c/2?1:-1;return 0}(t,l,o,r,T?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,Et,ft===l),0!==y){var k=N(U);do{k-=y,D=V.children[k]}while(D&&("none"===S(D,"display")||D===q))}if(0===y||D===l)return W(!1);ft=l,pt=y;var Y=l.nextElementSibling,F=!1,j=Rt(Z,a,U,n,l,o,t,F=1===y);if(!1!==j)return 1!==j&&-1!==j||(F=1===j),Dt=!0,setTimeout(Ft,30),L(),F&&!Y?a.appendChild(U):l.parentNode.insertBefore(U,F?Y:l),I&&X(I,0,P-I.scrollTop),V=U.parentNode,void 0===w||Et||(gt=Math.abs(w-C(l)[A])),Q(),W(!0)}if(a.contains(U))return W(!1)}return!1}function H(s,c){z(s,p,e({evt:t,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:n,targetRect:o,canSort:h,fromSortable:f,target:l,completed:W,onMove:function(e,o){return Rt(Z,a,U,n,e,C(e),t,o)},changed:Q},c))}function L(){H("dragOverAnimationCapture"),p.captureAnimationState(),p!==f&&f.captureAnimationState()}function W(e){return H("dragOverCompleted",{insertion:e}),e&&(d?u._hideClone():u._showClone(p),p!==f&&(E(U,rt?rt.options.ghostClass:u.options.ghostClass,!1),E(U,s.ghostClass,!0)),rt!==p&&p!==Yt.active?rt=p:p===Yt.active&&rt&&(rt=null),f===p&&(p._ignoreWhileAnimating=l),p.animateAll((function(){H("dragOverAnimationComplete"),p._ignoreWhileAnimating=null})),p!==f&&(f.animateAll(),f._ignoreWhileAnimating=null)),(l===U&&!U.animated||l===a&&!l.animated)&&(ft=null),s.dragoverBubble||t.rootEl||l===document||(U.parentNode[B]._isOutsideThisEl(t.target),!e&&kt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),g=!0}function Q(){et=N(U),ot=N(U,s.draggable),G({sortable:p,name:"change",toEl:a,newIndex:et,newDraggableIndex:ot,originalEvent:t})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){g(document,"mousemove",this._onTouchMove),g(document,"touchmove",this._onTouchMove),g(document,"pointermove",this._onTouchMove),g(document,"dragover",kt),g(document,"mousemove",kt),g(document,"touchmove",kt)},_offUpEvents:function(){var t=this.el.ownerDocument;g(t,"mouseup",this._onDrop),g(t,"touchend",this._onDrop),g(t,"pointerup",this._onDrop),g(t,"touchcancel",this._onDrop),g(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;et=N(U),ot=N(U,n.draggable),z("drop",this,{evt:t}),V=U&&U.parentNode,et=N(U),ot=N(U,n.draggable),Yt.eventCanceled||(mt=!1,Et=!1,wt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Lt(this.cloneId),Lt(this._dragStartId),this.nativeDraggable&&(g(document,"drop",this),g(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&S(document.body,"user-select",""),S(U,"transform",""),t&&(ht&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),q&&q.parentNode&&q.parentNode.removeChild(q),(Z===V||rt&&"clone"!==rt.lastPutMode)&&$&&$.parentNode&&$.parentNode.removeChild($),U&&(this.nativeDraggable&&g(U,"dragend",this),Bt(U),U.style["will-change"]="",ht&&!mt&&E(U,rt?rt.options.ghostClass:this.options.ghostClass,!1),E(U,this.options.chosenClass,!1),G({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),Z!==V?(et>=0&&(G({rootEl:V,name:"add",toEl:V,fromEl:Z,originalEvent:t}),G({sortable:this,name:"remove",toEl:V,originalEvent:t}),G({rootEl:V,name:"sort",toEl:V,fromEl:Z,originalEvent:t}),G({sortable:this,name:"sort",toEl:V,originalEvent:t})),rt&&rt.save()):et!==tt&&et>=0&&(G({sortable:this,name:"update",toEl:V,originalEvent:t}),G({sortable:this,name:"sort",toEl:V,originalEvent:t})),Yt.active&&(null!=et&&-1!==et||(et=tt,ot=nt),G({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),Z=U=V=q=K=$=Q=J=at=lt=ht=et=ot=tt=nt=ft=pt=rt=it=Yt.dragged=Yt.ghost=Yt.clone=Yt.active=null,_t.forEach((function(t){t.checked=!0})),_t.length=st=ct=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":U&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)b(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||jt(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach((function(t,e){var i=o.children[e];b(i,this.options.draggable,o,!1)&&(n[t]=i)}),this),e&&this.captureAnimationState(),t.forEach((function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))})),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return b(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=L.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&At(n)},destroy:function(){z("destroy",this);var t=this.el;t[B]=null,g(t,"mousedown",this._onTapStart),g(t,"touchstart",this._onTapStart),g(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(g(t,"dragover",this),g(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),(function(t){t.removeAttribute("draggable")})),this._onDrop(),this._disableDelayedDragEvents(),yt.splice(yt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!J){if(z("hideClone",this),Yt.eventCanceled)return;S($,"display","none"),this.options.removeCloneOnHide&&$.parentNode&&$.parentNode.removeChild($),J=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(J){if(z("showClone",this),Yt.eventCanceled)return;U.parentNode!=Z||this.options.group.revertClone?K?Z.insertBefore($,K):Z.appendChild($):Z.insertBefore($,U),this.options.group.revertClone&&this.animate(U,$),S($,"display",""),J=!1}}else this._hideClone()}},Tt&&p(document,"touchmove",(function(t){(Yt.active||mt)&&t.cancelable&&t.preventDefault()})),Yt.utils={on:p,off:g,css:S,find:_,is:function(t,e){return!!b(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:k,closest:b,toggleClass:E,clone:Y,index:N,nextTick:Ht,cancelNextTick:Lt,detectDirection:Nt,getChild:O},Yt.get=function(t){return t[B]},Yt.mount=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];n[0].constructor===Array&&(n=n[0]),n.forEach((function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Yt.utils=e(e({},Yt.utils),t.utils)),L.mount(t)}))},Yt.create=function(t,e){return new Yt(t,e)},Yt.version="1.15.2";var Wt,zt,Gt,Ut,Vt,qt,Zt=[],Kt=!1;function Qt(){Zt.forEach((function(t){clearInterval(t.pid)})),Zt=[]}function $t(){clearInterval(qt)}var Jt=k((function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=T(),u=!1;zt!==n&&(zt=n,Qt(),Wt=e.scroll,i=e.scrollFn,!0===Wt&&(Wt=I(n,!0)));var d=0,h=Wt;do{var f=h,p=C(f),g=p.top,v=p.bottom,m=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,_=f.scrollWidth,x=f.scrollHeight,O=S(f),M=f.scrollLeft,N=f.scrollTop;f===c?(E=y<_&&("auto"===O.overflowX||"scroll"===O.overflowX||"visible"===O.overflowX),D=w<x&&("auto"===O.overflowY||"scroll"===O.overflowY||"visible"===O.overflowY)):(E=y<_&&("auto"===O.overflowX||"scroll"===O.overflowX),D=w<x&&("auto"===O.overflowY||"scroll"===O.overflowY));var A=E&&(Math.abs(b-r)<=l&&M+y<_)-(Math.abs(m-r)<=l&&!!M),P=D&&(Math.abs(v-a)<=l&&N+w<x)-(Math.abs(g-a)<=l&&!!N);if(!Zt[d])for(var k=0;k<=d;k++)Zt[k]||(Zt[k]={});Zt[d].vx==A&&Zt[d].vy==P&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=A,Zt[d].vy=P,clearInterval(Zt[d].pid),0==A&&0==P||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Yt.active._onTouchMove(Vt);var e=Zt[this.layer].vy?Zt[this.layer].vy*s:0,n=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Yt.dragged.parentNode[B],n,e,t,Vt,Zt[this.layer].el)||X(Zt[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=I(h,!1)));Kt=u}}),30),te=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(e){var s=n||i;a();var c=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,u=document.elementFromPoint(c.clientX,c.clientY);l(),s&&!s.el.contains(u)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function ee(){}function ne(){}ee.prototype={startIndex:null,dragStart:function(t){var e=t.oldDraggableIndex;this.startIndex=e},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=O(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:te},i(ee,{pluginName:"revertOnSpill"}),ne.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:te},i(ne,{pluginName:"removeOnSpill"}),Yt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?p(document,"dragover",this._handleAutoScroll):this.options.supportPointer?p(document,"pointermove",this._handleFallbackAutoScroll):e.touches?p(document,"touchmove",this._handleFallbackAutoScroll):p(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?g(document,"dragover",this._handleAutoScroll):(g(document,"pointermove",this._handleFallbackAutoScroll),g(document,"touchmove",this._handleFallbackAutoScroll),g(document,"mousemove",this._handleFallbackAutoScroll)),$t(),Qt(),clearTimeout(y),y=void 0},nulling:function(){Vt=zt=Wt=Kt=qt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var n=this,o=(t.touches?t.touches[0]:t).clientX,i=(t.touches?t.touches[0]:t).clientY,r=document.elementFromPoint(o,i);if(Vt=t,e||this.options.forceAutoScrollFallback||s||l||u){Jt(t,this.options,r,e);var a=I(r,!0);!Kt||qt&&o===Gt&&i===Ut||(qt&&$t(),qt=setInterval((function(){var r=I(document.elementFromPoint(o,i),!0);r!==a&&(a=r,Qt()),Jt(t,n.options,r,e)}),10),Gt=o,Ut=i)}else{if(!this.options.bubbleScroll||I(r,!0)===T())return void Qt();Jt(t,this.options,I(r,!1),!1)}}},i(t,{pluginName:"scroll",initializeByDefault:!0})}),Yt.mount(ne,ee);export{Yt as S};
