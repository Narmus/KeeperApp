(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=n(8),i=n(4);var s=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var u=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2 ",e))};var p=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},"x")))},d=n(3),m=n(5);var f=function(e){var t=e.onAdd,n=Object(a.useState)({title:"",content:""}),o=Object(i.a)(n,2),c=o[0],l=o[1];function s(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{onChange:s,name:"title",placeholder:"Title",value:c.title}),r.a.createElement("textarea",{onChange:s,name:"content",placeholder:"Take a note...",rows:"3",value:c.content}),r.a.createElement("button",{onClick:function(){t(c),l({title:"",content:""})}},"Add")))},h=[{title:"OOP",content:"Object Oriented Programming\n"},{title:"Class",content:"Bluepring containing properties, operations and classes"},{title:"Abstraction",content:"Simplify\nOnly necessary data relevant to application"},{title:"Encapsulation",content:"Hide complexity of inner working of programs\ndata and programs that implement data are bound together"},{title:"Inheritance",content:"Class can derive its methods and properties from another parent class"},{title:"Polymorphism",content:"Class can implement an inherited method in its own way.\n"},{title:"React",content:" *In 2011, *virtual DOM, \n *Component base approach/reusable,\n *unidirectional binding"},{title:"Virtual DOM",content:"copy of real DOM created by react to check for changes and update SPECIFIC DOM"},{title:"State vs Prop",content:"data or properties that need tracking\nObject that stores the property value\nWhen changed, component re-renders\nProps pass data to children component"},{title:"Hooks",content:"15 different hooks\nAllows function components to have access to state and react features\nClass components no longer needed."},{title:"useState",content:"Tracks state in a func component\n"},{title:"useEffect",content:"run after flushing changes to DOM.\nRuns the code on every different render of the DOM"},{title:"Closure",content:"Gives access to outer function's scope from an inner function\ncreated everytime a function is created"},{title:"Promises",content:"Used for asynchronous operations.\nReturns resolve n reject\n can use .then and .catch for resolve and reject returns"},{title:"async await",content:"used to simplify promises even more.\nuse try and catch to receive resolve n reject"},{title:"REST",content:"Representational State Transfer\nGet Post Put Patch Delete\nCRUD Create Read Update Delete"}];var v=function(){var e=Object(a.useState)(h),t=Object(i.a)(e,2),n=t[0],o=t[1];function c(e){console.log("triggered "+e),o((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement(a.Fragment,null,r.a.createElement(s,null),r.a.createElement(f,{onAdd:function(e){o((function(t){return[].concat(Object(l.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),r.a.createElement(u,null))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.709a769f.chunk.js.map