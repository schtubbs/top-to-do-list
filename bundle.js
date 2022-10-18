(()=>{"use strict";var n,e,t,r,o,a,i,c,s,d,l,p,u,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"\nbody {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.project {\n    width: 85%;\n}\n\n.projectMeta { \n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: auto;\n    border-top: 1.25px solid black;\n    border-bottom: 1.25px solid black;\n    border-left: 2px solid black;\n    border-right: 2px solid black;\n}\n\n.projectName {\n    padding-left: 5px;\n}\n\n.metaSubDiv {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 25%;\n}\n\n.project:first-of-type > .projectMeta {\n    border-top: 2px solid black;\n    border-radius: 10px 10px 0 0;\n}\n\n.project:last-of-type > .projectMeta  {\n    border-bottom: 2px solid black;\n    border-radius:  0 0 10px 10px ;\n    padding: 0;\n    text-align: center;\n}\n\n.toDoItems {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.toDoItem {\n    box-sizing: border-box;\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    width: 95%;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    border-left: 1.5px solid black;\n    border-right: 1.5px solid black;\n}\n\n.complete,\n.edit {\n    margin: 5px 0;\n    border: 0.5px solid black;\n    border-radius: 2px;\n}\n\n.complete {\n    background-color: green;\n}\n\n.not.complete {\n    background-color: lightgrey;\n}\n\n.edit {\n    background-color: orange;\n}\n\n.title {\n    width: 50%;\n    font-weight: bold;\n}\n\n.completeData {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 45%;\n}\n\n.dueDate {\n    text-align: center;\n}\n\n.description,\n.notes {\n    border-top: 1px solid black;\n}\n\n.description {\n    padding-left: 5px;\n    width: 50%;\n}\n\n.notes {\n    width: 45%;\n    font-style: italic;\n    text-align: right;\n    padding-right: 5px;\n}\n\n.hidden {\n    display: none;\n}\n\n.closed,\n.opened {\n    border: 0.5px solid transparent;\n}\n\n.opened,\n.closed:hover {\n    color: black;\n}\n\n.closed,\n.opened:hover {\n    color: darkgrey;\n}\n\n.closed:hover,\n.opened:hover {\n    cursor: pointer;\n    border: 0.5px solid grey;\n}\n\n.opened:hover {\n    background-color: black;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},b={};function h(n){var e=b[n];if(void 0!==e)return e.exports;var t=b[n]={id:n,exports:{}};return m[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),d=h.n(s),l=h(589),p=h.n(l),u=h(426),(f={}).styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,(()=>{(()=>{const t=document.createElement("input");t.type="text",t.name="projectName",t.classList="projectName";const r=document.createElement("button");r.classList="addProject",r.textContent="Add Project",r.addEventListener("click",(t=>{const r=document.querySelector(".projectName"),o=e(r.value,[]);n.push(o),console.log([n])})),document.body.appendChild(t),document.body.appendChild(r)})();const n=[],e=(n,e)=>({name:n,items:e})})()})();