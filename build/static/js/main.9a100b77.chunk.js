(this["webpackJsonpreact-context-2020"]=this["webpackJsonpreact-context-2020"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),o=a.n(c),r=(a(15),a(16),a(8)),m=Object(n.createContext)(),i=function(e){var t=Object(n.useContext)(m),a=e.item,c=a.name,o=a.email,i=a.id;return l.a.createElement(n.Fragment,null,l.a.createElement("li",{className:"list-group-item"},l.a.createElement("div",null,"Name : ",c),l.a.createElement("div",null,"Email : ",o),l.a.createElement("div",null,l.a.createElement(r.a,{onClick:function(){return t.removeTodoItem(i)}}))))},s=function(){var e=Object(n.useContext)(m);return l.a.createElement("ul",{className:"list-group"},0===e.allTodos.length?l.a.createElement("div",null,"No todo found."):e.allTodos.map((function(e){return l.a.createElement(i,{key:e.id,item:e})})))},d=a(3),u=a(1),E=a(5),f=a(19),O=function(){var e=Object(n.useContext)(m),t=Object(n.useState)({name:"",email:"",id:Object(f.a)()}),a=Object(E.a)(t,2),c=a[0],o=a[1],r=function(e){o(Object(u.a)({},c,Object(d.a)({},e.target.name,e.target.value)))};return l.a.createElement("form",{className:"form-horizontal",onSubmit:function(t){t.preventDefault(),""!==c.name.trim()&&""!==c.email.trim()?(e.addTodo(Object(u.a)({},c)),o({name:"",email:"",id:Object(f.a)()})):alert("All fields are required")}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"name"},"Name:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"Enter Name",onChange:r,value:c.name,name:"name"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"email"},"Email:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter Email",onChange:r,value:c.email,name:"email"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Add Todo"))))},v=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 mx-auto"},l.a.createElement(O,null),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"mt-2 mb-2"},"All todos"),l.a.createElement(s,null))))))},b=function(){return l.a.createElement("header",{className:"text-center m-2"},l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"container"},"Head Section")))},N=function(){return l.a.createElement("footer",{className:"m-2"},l.a.createElement("div",{className:"container"},"Footer section"))},p=function(){return l.a.createElement("div",{id:"site-container"},l.a.createElement(b,null),l.a.createElement("main",{id:"main-content"},l.a.createElement(v,null)),l.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(9),h=function(e,t){switch(t.type){case"ADD_TODO":var a=Object(u.a)({},e,{todos:[].concat(Object(g.a)(e.todos),[t.payload])});return localStorage.setItem("alltodos",JSON.stringify(a)),a;case"LOAD_ALL_TODO":if(localStorage.getItem("alltodos")){var n=localStorage.getItem("alltodos"),l=JSON.parse(n);return Object(u.a)({},l)}return Object(u.a)({},e);case"REMOVE_TODO":var c=Object(u.a)({},e),o=c.todos.indexOf((function(e){return e.id===t.payload}));return o?(c.todos.splice(o,1),localStorage.setItem("alltodos",JSON.stringify(c)),Object(u.a)({},c)):Object(u.a)({},e);default:return Object(u.a)({},e)}},j=function(e){Object(n.useEffect)((function(){o({type:"LOAD_ALL_TODO"})}),[]);var t=Object(n.useReducer)(h,{todos:[],loading:!1,add:!0}),a=Object(E.a)(t,2),c=a[0],o=a[1];return l.a.createElement(m.Provider,{value:{allTodos:c.todos,addTodo:function(e){o({type:"ADD_TODO",payload:e})},removeTodoItem:function(e){o({type:"REMOVE_TODO",payload:e})}}},e.children)};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null,l.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.9a100b77.chunk.js.map