(()=>{"use strict";var e,t,n,o,r,i,c,s,d,l,a,u,p,m,f={426:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),c=n.n(i)()(r());c.push([e.id,'\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n    background-color: darkgrey;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 90%;\n    max-width: 500px;\n    padding: 10px 0;\n    background-color: white;\n    border-radius: 20px;\n}\n\n.project {\n    width: 85%;\n}\n\n.projectMeta { \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 99%;\n    height: auto;\n    border-top: 1.25px solid black;\n    border-bottom: 1.25px solid black;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n}\n\n.projectName {\n    padding-left: 5px;\n}\n\n.metaSubDiv {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 30%;\n}\n\n.project:first-of-type > .projectMeta {\n    border-top: 2px solid black;\n    border-radius: 10px 10px 0 0;\n}\n\n.project:last-of-type > .projectMeta  {\n    border-bottom: 2px solid black;\n    border-radius:  0 0 10px 10px ;\n    padding: 0;\n    text-align: center;\n}\n\n.projects > .project:only-child  > .projectMeta {\n    border-radius:  10px 10px 10px 10px;\n}\n\n.toDoItems {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.toDoItem {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 95%;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    border-left: 1.5px solid black;\n    border-right: 1.5px solid black;\n}\n\n.prioritiesKey {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 13px;\n    width: 80%;\n    max-width: 300px;\n    padding: 5px;\n    background-color: white;\n    border-radius: 10px;\n    border: 2px solid black;\n}\n.priority-3 {\n    background-color: lightcoral;\n}\n\n.priority-2 {\n    background-color: lightsalmon;\n}\n\n.priority-1 {\n    background-color: rgb(255, 255, 148);\n}\n\n.toDoItem.itemComplete {\n    background-color: grey;\n}\n\n.complete,\n.edit,\n.submit,\n.deleteProject,\n.editTitle,\n.deleteTask {\n    margin: 5px 0;\n    padding: 2px;\n    border: 0.5px solid black;\n    border-radius: 2px;\n    text-align: center;\n}\n\n.complete {\n    background-color: green;\n}\n\n.not.complete,\n.editTitle,\n.edit,\n.deleteTask,\n.deleteProject {\n    filter: grayscale(50%);\n    color: rgb(67, 67, 67);\n    background-color: lightgrey;\n}\n\n.completeData.notInput > .not.complete:hover {\n    filter:  none;\n    background-color: lightgreen;\n}\n\n.editTitle:hover,\n.edit:hover {\n    filter:  none;\n    background-color: rgb(255, 196, 86);\n}\n\n.deleteTask:hover,\n.deleteProject:hover {\n    filter:  none;\n    cursor: pointer;\n    color: white;\n    background-color: lightcoral;\n}\n\n.submit,\n.addTask {\n    color: rgb(67, 67, 67);\n    background-color: rgb(146, 233, 146);\n}\n\n.addTask.toDoItem {\n    justify-content: center;\n    text-align: center;\n}\n\n.submit:hover,\n.addTask:hover {\n    cursor: pointer;\n    color: white;\n    background-color: green;\n}\n\n.toDoItem > * {\n    width: 100%;\n}\n\n.title {\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n.completeData {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.completeData.notInput {\n    font-size: 12px;\n}\n\n.priorities,\nlabel[for="dueDate"] {\n    font-size: 15px;\n    width: 100%;\n    text-align: left;\n    padding-left: 15px;\n}\n\n.description,\n.notes {\n    border-top: 1px solid black;\n}\n\n.notes {\n    font-style: italic;\n}\n\n.notes.notInput {\n    box-sizing: border-box;\n    text-align: right;\n    border-left: 1px dashed black;\n}\n\n.title.notInput,\n.description.notInput {\n    width: 50%;\n    padding-left: 1%;\n}\n\n.completeData.notInput,\n.notes.notInput {\n    width: 49%;\n}\n.notes.notInput {\n    padding-right: 1%;\n}\n\n.hidden {\n    display: none;\n}\n\n.closed,\n.opened {\n    border: 0.5px solid transparent;\n}\n\n.opened,\n.closed:hover {\n    color: black;\n}\n\n.closed,\n.opened:hover {\n    color: darkgrey;\n}\n\n.closed:hover,\n.opened:hover {\n    cursor: pointer;\n    border: 0.5px solid grey;\n}\n\n.opened:hover {\n    background-color: black;\n}\n\ninput {\n    border: 0;\n    background-color: rgba(128, 128, 128, 0.25);\n}\n\ninput.projectName:focus {\n    margin-left: 2px;\n    background-color: darkgrey;\n}\n\n.incomplete {\n    background-color: rgb(227, 174, 174);\n}\n\n.errorMessage {\n    text-align: center;\n    color: darkred;\n    font-weight: 500;\n}',""]);const s=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);o&&c[a[0]]||(void 0!==i&&(void 0===a[5]||(a[1]="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {").concat(a[1],"}")),a[5]=i),n&&(a[2]?(a[1]="@media ".concat(a[2]," {").concat(a[1],"}"),a[2]=n):a[2]=n),r&&(a[4]?(a[1]="@supports (".concat(a[4],") {").concat(a[1],"}"),a[4]=r):a[4]="".concat(r)),t.push(a))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},c=[],s=0;s<e.length;s++){var d=e[s],l=o.base?d[0]+o.base:d[0],a=i[l]||0,u="".concat(l," ").concat(a);i[l]=a+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var s=n(i[c]);t[s].references--}for(var d=o(e,r),l=0;l<i.length;l++){var a=n(i[l]);0===t[a].references&&(t[a].updater(),t.splice(a,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function h(e){var t=v[e];if(void 0!==t)return t.exports;var n=v[e]={id:e,exports:{}};return f[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.nc=void 0,e=h(379),t=h.n(e),n=h(795),o=h.n(n),r=h(569),i=h.n(r),c=h(565),s=h.n(c),d=h(216),l=h.n(d),a=h(589),u=h.n(a),p=h(426),(m={}).styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const e=(e,n,r)=>{const i=o(e),c=t(e,n,r);return i.appendChild(c),i},t=(e,t,o)=>{const c=n(e,t),s=i(e,o),d=r(e);return d.appendChild(s),d.appendChild(c),d},n=(e,t)=>{const n=s(e,t),o=c(e),r=h(e,"closed"),i=u(e),d=v(e);return o.appendChild(n),o.appendChild(i),o.appendChild(d),o.appendChild(r),o},o=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="project",t},r=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="projectMeta",t},i=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="projectName",n.textContent=t,n},c=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="metaSubDiv",t},s=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList="numberOfTasks",n.textContent=0===t?"No tasks":1===t?"1 task":t+" tasks",n},d=(e,t)=>{const n=document.querySelectorAll(`#\\3${e+"-"+t}.priority`);let o=!0;return n.forEach((e=>{!0===e.checked&&(o=!1)})),o},l=(e,t)=>{const n=document.querySelector(`#\\3${e}.toDoItems`),o=k(e,t,"div","new");n.insertBefore(o,n.lastChild)},a=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="addTask toDoItem",t.textContent="Add Task",t.addEventListener("click",(n=>{((e,t)=>{const n=document.querySelectorAll(`#\\3${e}.toDoItems > div.toDoItem.form`).length,o=k(e,n,"input","new");t.before(o)})(e,t)})),t},u=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="editTitle",t.textContent="✏️",t.addEventListener("click",(n=>{p(e,t)})),t},p=(e,t)=>{const n=document.querySelector(`#\\3${e}.projectMeta`),o=document.querySelector(`#\\3${e}.projectName`),r=G[e].name,i=document.createElement("input");i.classList="projectName",i.value=r,i.addEventListener("input",(t=>{G[e].name=i.value,localStorage.setItem("projects",JSON.stringify(G))})),i.addEventListener("focusout",(o=>{G[e].name=i.value,localStorage.setItem("projects",JSON.stringify(G));const r=document.createElement("div");r.id=e,r.classList="projectName",r.textContent=G[e].name,i.remove(),n.insertBefore(r,n.firstChild),t.addEventListener("click",(n=>{p(e,t)})),localStorage.setItem("projects",JSON.stringify(G))})),o.remove(),n.insertBefore(i,n.firstChild),i.focus()},m=(e,t)=>{e.childNodes.forEach((e=>{let n=e.id.split()[1];e.id=t+"-"+n}))},f=(e,t,n)=>{0!==e.childNodes.length&&e.childNodes.forEach((e=>{e.id=t+"-"+n,"INPUT"===e.tagName&&e.setAttribute("name",`task-${t+"-"+n}-priority`),f(e,t,n)}))},v=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="deleteProject",t.textContent="❌",t.addEventListener("click",(t=>{!0===confirm("Are you Ok with deleting this entire project?")&&(((e,t)=>{const n=t.length-1;let o=e+1;for(;o<=n;o++){const e=document.querySelector(`#\\3${o}.project`);e.id=o-1,m(e,o)}})(e,G),((e,t)=>{t.splice(e,1),document.querySelector(`#\\3${e}.project`).remove()})(e,G),localStorage.setItem("projects",JSON.stringify(G)))})),t},h=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e),n.classList=`projectDoor ${t}`,"opened"===t?n.textContent="▲":"closed"===t&&(n.textContent="▼"),n.addEventListener("click",(e=>{const o=n.id;let r;if("opened"===t)r=h(o,"closed"),document.querySelector(`#\\3${o}.toDoItems`).remove();else if("closed"===t){r=h(o,"opened");const e=F(o),t=G[o].items.length,n=a(o),i=document.querySelector(`#\\3${o}.project`);for(let n=0;n<t;n++){const t=k(o,n,"div","edit");e.appendChild(t)}e.appendChild(n),i.appendChild(e)}n.before(r),n.remove()})),n},b=(e,t,n)=>"input"===n?g(e,t):"div"===n?y(e,t):void 0,y=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="notes notInput",n.textContent=G[e].items[t].notes,n},g=(e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="notes",n.placeholder="Enter any additional notes here",n},x=(e,t,n)=>"input"===n?C(e,t):"div"===n?S(e,t):void 0,S=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="description notInput",n.textContent=G[e].items[t].description,n},C=(e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="description",n.placeholder="Enter a description here",n.required=!0,n},k=(e,t,n,o)=>{const r=((e,t,n)=>"input"===n?((e,t)=>{const n=document.createElement("input");return n.setAttribute("id",e+"-"+t),n.classList="title",n.placeholder="Enter the task's title here",n.required=!0,n})(e,t):"div"===n?((e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="title notInput",n.textContent=G[e].items[t].title,n})(e,t):void 0)(e,t,n),i=E(e,t,n,o),c=x(e,t,n),s=b(e,t,n),d=Z(e,t,n);if(d.appendChild(r),"div"===n){const n=q(e,t,"closed");i.appendChild(n),!0===G[e].items[t].completionStatus?d.classList="toDoItem display itemComplete":!1===G[e].items[t].completionStatus&&(d.classList=`toDoItem display priority-${G[e].items[t].priority}`),i.classList="completeData notInput",d.appendChild(i)}else"input"===n&&(d.appendChild(c),d.appendChild(s),d.appendChild(i));return d},E=(e,t,n,o)=>{const r=L(e,t),i=j(e,t,n),c=A(e,t,n,o),s=J(e,t,n);if("input"===n){const o=((e,t,n)=>{const o=document.createElement("div");if(o.classList="priorities","input"===n)return((e,t,n)=>(n.textContent="Choose a Priority Level: ",[[1,"Low"],[2,"Medium"],[3,"High"]].forEach((o=>{const r=document.createElement("label");r.for=`task-${e+"-"+t}-priority`,r.textContent=o[1];const i=document.createElement("input");i.type="radio",i.value=o[0],i.setAttribute("id",e+"-"+t),i.name=`task-${e+"-"+t}-priority`,i.classList="priority",i.required=!0,n.appendChild(i),n.appendChild(r)})),n))(e,t,o)})(e,t,n);r.appendChild(o),r.appendChild(i)}else if("div"===n){const n=$(e,t);r.appendChild(i),r.appendChild(n)}return r.appendChild(c),r.appendChild(s),r},L=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="completeData",n},j=(e,t,n)=>"input"===n?I(e,t):"div"===n?D(e,t):void 0,I=(e,t)=>{const n=document.createElement("label");n.setAttribute("for","dueDate"),n.textContent="Due Date: ";const o=document.createElement("input");return o.type="date",o.setAttribute("name","dueDate"),o.setAttribute("id",e+"-"+t),o.classList="dueDate",o.required=!0,n.appendChild(o),n},D=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="dueDate",n.textContent="Due: "+G[e].items[t].dueDate,n},q=(e,t,n)=>{const o=document.createElement("div");return o.setAttribute("id",e+"-"+t),o.classList=`taskDoor ${n}`,"opened"===n?o.textContent="▲":"closed"===n&&(o.textContent="▼"),o.addEventListener("click",(e=>{const t=o.id.split("-")[0],r=o.id.split("-")[1];let i;if("opened"===n){i=q(t,r,"closed");const e=document.querySelector(`#\\3${t+"-"+r}.description`),n=document.querySelector(`#\\3${t+"-"+r}.notes`);e.remove(),n.remove()}else if("closed"===n){i=q(t,r,"opened");const e=x(t,r,"div"),n=b(t,r,"div"),o=document.querySelector(`#\\3${t+"-"+r}.toDoItem.display`);o.appendChild(e),o.appendChild(n)}o.before(i),o.remove()})),o},$=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.textContent="✔️",!0===G[e].items[t].completionStatus?n.classList="complete":!1===G[e].items[t].completionStatus&&(n.classList="not complete"),n.addEventListener("click",(e=>{const t=n.id.split("-")[0],o=n.id.split("-")[1];w(t,o,n)})),n},w=(e,t,n)=>{n.classList.toggle("not");const o=document.querySelector(`#\\3${e+"-"+t}.toDoItem.display`);!1===G[e].items[t].completionStatus?(G[e].items[t].completionStatus=!0,o.classList="toDoItem display itemComplete"):!0===G[e].items[t].completionStatus&&(G[e].items[t].completionStatus=!1,o.classList="toDoItem display priority-"+G[e].items[t].priority),localStorage.setItem("projects",JSON.stringify(G))},A=(e,t,n,o)=>"input"===n?O(e,t,o):"div"===n?N(e,t):void 0,N=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="edit",n.textContent="✏️",n.addEventListener("click",(e=>{const t=n.id.split("-")[0],o=n.id.split("-")[1];T(t,o,n),localStorage.setItem("projects",JSON.stringify(G))})),n},T=(e,t,n)=>{const o=document.querySelector(`#\\3${e+"-"+t}.toDoItem.display`),r=o.parentNode,i=k(e,t,"input","edit");r.insertBefore(i,o),o.remove(),M(e,t)},M=(e,t)=>{document.querySelector(`input#\\3${e+"-"+t}.title`).value=G[e].items[t].title,document.querySelector(`input#\\3${e+"-"+t}.dueDate`).value=G[e].items[t].dueDate,document.querySelector(`input#\\3${e+"-"+t}.priority[value="${G[e].items[t].priority}"]`).checked=!0,document.querySelector(`input#\\3${e+"-"+t}.description`).value=G[e].items[t].description,document.querySelector(`input#\\3${e+"-"+t}.notes`).value=G[e].items[t].notes},O=(e,t,n)=>{const o=document.createElement("button");return o.setAttribute("id",e+"-"+t),o.classList="edit submit","new"===n?o.textContent="Sumbit Task":"edit"===n&&(o.textContent="Submit Edits"),P(e,t,o,n),o},P=(e,t,n,o)=>{n.addEventListener("click",(n=>{if(((e,t)=>{let n=!1;return["title","description","priority","dueDate"].forEach((o=>{n=((e,t,n,o)=>{if("priority"===n){if(d(e,t)){document.querySelectorAll(`#\\3${e+"-"+t}.priority`).forEach((e=>{e.classList.toggle("incomplete")})),o=!0,document.querySelector(`#\\3${e+"-"+t}.toDoItem.form > .completeData > .priorities`).classList.toggle("incomplete");const n=document.createElement("div");n.classList="errorMessage",n.textContent="Please fill out the fields in red to submit this task.",document.querySelector(`#\\3${e+"-"+t}.toDoItem.form`).appendChild(n)}}else{const r=document.querySelector(`input#\\3${e+"-"+t}.${n}`);""!==r.value&&void 0!==r.value||(r.classList.toggle("incomplete"),o=!0)}return o})(e,t,o,n)})),n})(e,t));else{const n=((e,t,n)=>{let o,r;return document.querySelectorAll(`#\\3${e+"-"+t}.priority`).forEach((e=>{!0===e.checked&&(o=e.value)})),"new"===n?r=G[e].items.push(_(document.querySelector(`input#\\3${e+"-"+t}.title`).value,document.querySelector(`input#\\3${e+"-"+t}.dueDate`).value,o,document.querySelector(`input#\\3${e+"-"+t}.description`).value,document.querySelector(`input#\\3${e+"-"+t}.notes`).value,!1)):"edit"===n&&(G[e].items.splice(t,1,_(document.querySelector(`input#\\3${e+"-"+t}.title`).value,document.querySelector(`input#\\3${e+"-"+t}.dueDate`).value,o,document.querySelector(`input#\\3${e+"-"+t}.description`).value,document.querySelector(`input#\\3${e+"-"+t}.notes`).value,!1)),r=t),r})(e,t,o);localStorage.setItem("projects",JSON.stringify(G)),((e,t)=>{document.querySelector(`#\\3${e+"-"+t}.toDoItem.form`).remove()})(e,t),"new"===o?l(e,n-1):"edit"===o&&l(e,t),B(e)}}))},J=(e,t,n)=>{const o=document.createElement("div");return o.setAttribute("id",e+"-"+t),o.classList="deleteTask",o.textContent="❌",o.addEventListener("click",(e=>{const t=o.id.split("-")[0],r=o.id.split("-")[1];z(t,r,n),localStorage.setItem("projects",JSON.stringify(G)),((e,t,n)=>{let o;for("div"===n?o=document.querySelectorAll(`#\\3${e}.toDoItems > .toDoItem.display`):"input"===n&&(o=document.querySelectorAll(`#\\3${e}.toDoItems > .toDoItem.form`));t<o.length;t++)o.item(t).id=e+"-"+t,f(o.item(t),e,t)})(t,r,n),B(t)})),o},B=e=>{const t=document.querySelector(`#\\3${e}.numberOfTasks`),n=G[e].items.length;t.textContent=n+" task"},z=(e,t,n)=>{let o;"input"===n?o=document.querySelector(`#\\3${e+"-"+t}.toDoItem.form`):"div"===n&&(o=document.querySelector(`#\\3${e+"-"+t}.toDoItem.display`)),G[e].items[t]&&G[e].items.splice(t,1),o.remove()},Z=(e,t,n)=>"input"===n?U(e,t):"div"===n?H(e,t):void 0,H=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="toDoItem display",n},U=(e,t)=>{const n=document.createElement("div");return n.setAttribute("id",e+"-"+t),n.classList="toDoItem form",n},F=e=>{const t=document.createElement("div");return t.setAttribute("id",e),t.classList="toDoItems",t},R=()=>{const t=document.createElement("button");return t.textContent="Add Project",t.addEventListener("click",(t=>{(t=>{const n=document.querySelector(".newProjectName");if(""==n.value||null==n.value){const e=document.createElement("div");e.classList="errorMessage",e.textContent="Please fill in a name for the project above.",document.body.insertBefore(e,document.body.lastElementChild)}else{const o=document.querySelector(".errorMessage");o&&o.remove();const r=K(n.value,[]);t.push(r),localStorage.setItem("projects",JSON.stringify(t));const i=t.length-1,c=t[i].items.length,s=document.querySelector(".projects"),d=e(i,c,n.value),l=((e,t)=>{const n=F(e),o=a(e);return n.appendChild(t),n.appendChild(o),n})(i,k(i,c,"input","new"));d.appendChild(l),s.insertBefore(d,s.lastChild),n.value=""}})(G)})),t},_=(e,t,n,o,r,i)=>({title:e,dueDate:t,priority:n,description:o,notes:r,completionStatus:i}),K=(e,t)=>({name:e,items:t});(()=>{const e=document.createElement("div");e.classList="projects",document.body.appendChild(e)})(),(()=>{const e=document.querySelector(".projects"),t=o(),n=(()=>{const e=document.createElement("input");return e.type="text",e.classList="projectMeta newProject newProjectName",e.placeholder='Enter a new project name here and press "Enter"',e})(),r=R();t.appendChild(n),document.body.appendChild(r),e.appendChild(t)})();let G=[];if(localStorage.getItem("projects")){G=JSON.parse(localStorage.projects),console.log(G);const t=document.querySelector(".projects");G.forEach(((n,o)=>{const r=e(o,n.items.length,n.name);t.insertBefore(r,t.lastChild)}))}})()})();