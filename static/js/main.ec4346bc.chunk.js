(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{30:function(t,e,r){t.exports=r(44)},44:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),i=r(24),a=r.n(i),c=r(29),u=r(8),l=r(18);var f=function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Keeper"))};var s=function(){var t=(new Date).getFullYear();return o.a.createElement("footer",null,o.a.createElement("p",null,"Copyright \u24d2 ",t))};var h=function(t){var e=t.title,r=t.content,n=t.uniqueID,i=t.onDelete,a=t.ident;return o.a.createElement("div",{id:n,className:"note"},o.a.createElement("h1",null,e),o.a.createElement("p",null,r),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){i(a,n)}},"x")))},p=r(12),v=r(22);var d=function(t){var e=t.onAdd,r=Object(n.useState)({title:"",content:""}),i=Object(l.a)(r,2),a=i[0],c=i[1];function u(t){var e=t.target,r=e.name,n=e.value;c((function(t){return Object(v.a)(Object(v.a)({},t),{},Object(p.a)({},r,n))}))}return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(t){t.preventDefault()}},o.a.createElement("input",{onChange:u,name:"title",placeholder:"Title",value:a.title}),o.a.createElement("textarea",{onChange:u,name:"content",placeholder:"Take a note...",rows:"3",value:a.content}),o.a.createElement("button",{onClick:function(){e(a),c({title:"",content:""})}},"Add")))},y=r(20);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var f={};function s(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==e&&r.call(y,o)&&(v=y);var g=p.prototype=s.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var g="http://localhost:8080",w=function(){var t=Object(u.a)(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(g+"/notesget").then((function(t){return console.log("Success in API/GetNotes/notesData"),t.data})).catch((function(t){console.log("Error",t.message)}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),E=function(){var t=Object(u.a)(m().mark((function t(e,r){var n;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.post(g+"/notesdelete",{title:e,content:r});case 2:return n=t.sent,t.abrupt("return",n());case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),x=function(){var t=Object(u.a)(m().mark((function t(e){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.delete(g+"/notesdelete/"+e).then((function(t){return console.log("Delete Note",t)})).catch((function(t){return console.log("Delete catch error",t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function b(){b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var f={};function s(){}function h(){}function p(){}var v={};c(v,o,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(j([])));y&&y!==e&&r.call(y,o)&&(v=y);var m=p.prototype=s.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=p,c(m,"constructor",p),c(p,"constructor",h),h.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var L=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),r=e[0],i=e[1],a=function(){var t=Object(u.a)(b().mark((function t(){var e;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,i(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function p(t,e){i((function(e){return e.filter((function(e,r){return r!==t}))})),x(e)}return Object(n.useEffect)((function(){a()}),[]),o.a.createElement(n.Fragment,null,o.a.createElement(f,null),o.a.createElement(d,{onAdd:function(t){i((function(e){return[].concat(Object(c.a)(e),[t])})),E(t.title,t.content)}}),r.map((function(t,e){return o.a.createElement(h,{uniqueID:t._id,key:e,ident:e,title:t.title,content:t.content,onDelete:p})})),o.a.createElement(s,null))},O=r(28);r.n(O).a.config(),a.a.createRoot(document.getElementById("root")).render(o.a.createElement(L,null))}},[[30,1,2]]]);
//# sourceMappingURL=main.ec4346bc.chunk.js.map