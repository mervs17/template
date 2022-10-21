/*! For license information please see 545.bundle.js.LICENSE.txt */
(self.webpackChunkreact=self.webpackChunkreact||[]).push([[545],{198:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(294);function n(){var e=(new Date).getFullYear();return a.createElement("footer",{className:"pt-16"},a.createElement("div",{className:"absolute bottom-0 inset-x-0 bg-tertiary dark:bg-secondary p-5 text-center text-black dark:text-white"},a.createElement("small",null,"© ",e," Reyes development. All rights reserved.")))}},502:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var a=r(152),n=r(294),l=r(184),c=r.n(l);function o(){var e="Toggle__Switch",t=(0,n.useState)((function(){return JSON.parse(localStorage.getItem("site-dark-mode"))||!1})),r=(0,a.Z)(t,2),l=r[0],o=r[1];return(0,n.useEffect)((function(){l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");var e=JSON.stringify(l);localStorage.setItem("site-dark-mode",e),console.log("Dark Mode:",l)}),[l]),n.createElement("div",{className:"Toggle"},n.createElement("p",{className:"Toggle__Text Toggle--Light"},"Light"),n.createElement("div",{onClick:function(){return o((function(e){return!e}))},className:c()(e,"".concat(e,l?"--Dark":"--Light"))}),n.createElement("p",{className:"Toggle__Text Toggle--Dark"},"Dark"))}var s=r(655),i=new URL(r(162),r.b),m=r(184);function u(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),r=t[0],l=t[1],c=m("Header__NavLink",r?"show":"");return n.createElement("header",{className:"Header"},n.createElement("nav",{className:"Header__Nav"},n.createElement(s.rU,{to:"/",className:"Header__Logo-Wrapper"},n.createElement("img",{src:i,className:"inline-block"}),n.createElement("span",{className:"Header__Logo-Name"},"ReactFacts")),n.createElement("div",{className:"Header__Toggle"},n.createElement("button",{onClick:function(){return l((function(e){return!e}))},type:"button",className:"Header__Hamburger"},n.createElement("span",{className:"sr-only"},"Open main menu"),n.createElement("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))),n.createElement("div",{className:c},n.createElement("ul",null,n.createElement("li",null,n.createElement(s.OL,{to:"/",end:!0},"Home")),n.createElement("li",null,n.createElement(s.OL,{to:"/about"},"About")))),n.createElement(o,null))))}},545:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(294),n=r(502),l=r(655),c=r(198);const o=function(){return a.createElement(a.Fragment,null,a.createElement(n.Z,null),a.createElement("main",{className:"flex items-center justify-center"},a.createElement("section",{className:"md:py-16 px-8 py-12"},a.createElement("div",{className:"container xl:max-w-screen-xl mx-auto"},a.createElement("h1",{className:"text-center"},"404 Page Not Found"),a.createElement("div",{className:"text-center mt-10"},a.createElement(l.rU,{to:"/",className:"md:text-xl text-lg bg-primary px-12 py-3 rounded-full border-solid border border-primary transition hover:bg-transparent"},"Home"))))),a.createElement(c.Z,null))}},184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var c=n.apply(null,r);c&&e.push(c)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var o in r)a.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},162:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM0SURBVHgBxVbNVRsxEP60eS9wNB0slzy4mQ5MBYEKgApCKrBTAVBBSAUOFdgdmJyAXOwO7GMgL6vMNyOtd73ywp6Y9/ZpJY3mTzPfCHgHcq27v30f/9CXvwUO3bSVd+57eMEABXoymwr/Ap3pyQ/x6L1883LkWkqZ8S7DZ/xP/gSdiIJMwGU5f/DnQeBc/nNd57heO1c+0qO/1vOd6MEP1NrmOpWMSyUU/OBvS2V1o71eTwel5tX2/dsg9GorDw3aEuIMXYneOnwGk6XAeRnqJq22ici2rPJAb4vCifz9wIE7hsedzjfDa5SLUau3Ky1wr0qjFxTK+3G4UmFe9nkFTvly/MVQ8yAqj3e5q/sNStcpBZhHC5jH0ZMV0mHLK/+rcK4vxu2n6nWt1Ir7izCe6IF42ONGR4exjN8krNdoGjmSfZ49ldj1ZLyqGHuvMg7dbWS38DIcz5jJ5qXe0w72ZPyqHuzip3CdqRFRodVtXio9dCPd/yAJ9lESjMocLtRTj1/yP6zVd6i9pRZ0NSEiQFj5rGvOanhZolR93Qd0mm9EolrfOetpJozfkSJDFl/bX8OiLxWv9yYN/ro8Kp4wvLT0LsnkJbRGd6XF9aTBxtz4CimptDzu51Q6lclZkikL616ShGSZuNjgqs6NzyEN9kw2h2kmAi9Ab+l6NTl4p14Qx0vGQloW78wMOK4omoa5QafVMOWd1fLD7nQGJlih8lDvFrwPzqv4a3c7QxtZkozCv3UoGkp8tvkkOlUHB0OZIeyeDAiclE6h4zjU26ihkBnLcsvEazZ9p2HOgdDQGa3KIyCNSCyDAvTsvnI40iYq9Tb2F+EbaL3vuwaCtXeZHbH8wO3p4QxHsnKjCjJch7u2uZdsJRCQ78BxPNXzf9DDm4l9MNX5DTDmmnSkWPCpLtO5n9rjqgnsDJVla18Tw0D9OBVCPV+kPe3exFmrmYIGO1H7qy/r0k9jS0u/fcb6YvAK6INGfZMicrkGkLQojc33JSBMfGY+Yw4DgCNtVTHU7L3V16Ah2QKfXLKJb6fYXdYdZVkWf5N3VHsftyQRyb2iOBer+xqmt1htUGk9OJ1c70f/ATGJMSWKYQjIAAAAAElFTkSuQmCC"},152:(e,t,r)=>{"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l=[],c=!0,o=!1;try{for(r=r.call(e);!(c=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(e){o=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(o)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUdPLFFBRVRsQyxHQUFLNkIsRUFBSzNCLFNBQVdGLEdBSDRCOEIsR0FBSyxHQWM5RCxDQVRFLE1BQU9LLEdBQ1BKLEdBQUssRUFDTEgsRUFBS08sQ0FDUCxDQUFFLFFBQ0EsSUFDT0wsR0FBc0IsTUFBaEJOLEVBQVcsUUFBV0EsRUFBVyxRQUc5QyxDQUZFLFFBQ0EsR0FBSU8sRUFBSSxNQUFNSCxDQUNoQixDQUNGLENBRUEsT0FBT0MsQ0F4QmUsQ0F5QnhCLENGdkJnQyxDQUFxQlQsRUFBS3BCLElHSjNDLFNBQXFDb0MsRUFBR0MsR0FDckQsR0FBS0QsRUFBTCxDQUNBLEdBQWlCLGlCQUFOQSxFQUFnQixPQUFPLEVBQWlCQSxFQUFHQyxHQUN0RCxJQUFJQyxFQUFJM0IsT0FBT0MsVUFBVUYsU0FBU0ksS0FBS3NCLEdBQUdHLE1BQU0sR0FBSSxHQUVwRCxNQURVLFdBQU5ELEdBQWtCRixFQUFFSSxjQUFhRixFQUFJRixFQUFFSSxZQUFZQyxNQUM3QyxRQUFOSCxHQUFxQixRQUFOQSxFQUFvQmhDLE1BQU1vQyxLQUFLTixHQUN4QyxjQUFORSxHQUFxQiwyQ0FBMkNLLEtBQUtMLEdBQVcsRUFBaUJGLEVBQUdDLFFBQXhHLENBTGMsQ0FNaEIsQ0hIZ0UsQ0FBMkJqQixFQUFLcEIsSUlMakYsV0FDYixNQUFNLElBQUk0QyxVQUFVLDRJQUN0QixDSkdzRyxFQUN0RyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0Ly4vc3JjL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlRGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcGFnZXMvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL3JlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICBjb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJwdC0xNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGluc2V0LXgtMCBiZy10ZXJ0aWFyeSBkYXJrOmJnLXNlY29uZGFyeSBwLTUgdGV4dC1jZW50ZXIgdGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICA8c21hbGw+JmNvcHk7IHt5ZWFyfSBSZXllcyBkZXZlbG9wbWVudC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3NtYWxsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtNb2RlKCkge1xyXG4gIGNvbnN0IHRvZ2dsZVMgPSBcIlRvZ2dsZV9fU3dpdGNoXCI7XHJcblxyXG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2l0ZS1kYXJrLW1vZGVcIikpIHx8IGZhbHNlXHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXJrTW9kZSkge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGFya01vZGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaXRlLWRhcmstbW9kZVwiLCBqc29uKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGFyayBNb2RlOlwiLCBkYXJrTW9kZSk7XHJcbiAgfSwgW2RhcmtNb2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRvZ2dsZVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJUb2dnbGVfX1RleHQgVG9nZ2xlLS1MaWdodFwiPkxpZ2h0PC9wPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGFya01vZGUoKHByZXZEYXJrTW9kZSkgPT4gIXByZXZEYXJrTW9kZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgdG9nZ2xlUyxcclxuICAgICAgICAgICFkYXJrTW9kZSA/IGAke3RvZ2dsZVN9LS1MaWdodGAgOiBgJHt0b2dnbGVTfS0tRGFya2BcclxuICAgICAgICApfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIlRvZ2dsZV9fVGV4dCBUb2dnbGUtLURhcmtcIj5EYXJrPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvZ2dsZURhcmtNb2RlIGZyb20gXCIuL1RvZ2dsZURhcmtNb2RlXCI7XHJcbmltcG9ydCB7IExpbmssIE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5jb25zdCBsb2dvID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9pbWFnZXMvcmVhY3Rqcy1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtoYW1idXJnZXIsIHNldEhhbWJ1cmdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHZhciBidG5DbGFzcyA9IGNsYXNzTmFtZXMoXCJIZWFkZXJfX05hdkxpbmtcIiwgaGFtYnVyZ2VyID8gXCJzaG93XCIgOiBcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyX19OYXZcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJIZWFkZXJfX0xvZ28tV3JhcHBlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJIZWFkZXJfX0xvZ28tTmFtZVwiPlJlYWN0RmFjdHM8L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhlYWRlcl9fVG9nZ2xlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEhhbWJ1cmdlcigocHJldkhhbSkgPT4gIXByZXZIYW0pfVxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiSGVhZGVyX19IYW1idXJnZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcclxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMjBcIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICBkPVwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpcIlxyXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICA+PC9wYXRoPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2J0bkNsYXNzfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1wiIGVuZD5cclxuICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8VG9nZ2xlRGFya01vZGUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1kOnB5LTE2IHB4LTggcHktMTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHhsOm1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPjQwNCBQYWdlIE5vdCBGb3VuZDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTBcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgdG89XCIvXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnRleHQteGwgdGV4dC1sZyBiZy1wcmltYXJ5IHB4LTEyIHB5LTMgcm91bmRlZC1mdWxsIGJvcmRlci1zb2xpZCBib3JkZXIgYm9yZGVyLXByaW1hcnkgdHJhbnNpdGlvbiBob3ZlcjpiZy10cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE4IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0aWYgKGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRpZiAoYXJnLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZy50b1N0cmluZygpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07XG5cbiAgaWYgKF9pID09IG51bGwpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG5cbiAgdmFyIF9zLCBfZTtcblxuICB0cnkge1xuICAgIGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iXSwibmFtZXMiOlsiRm9vdGVyIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImNsYXNzTmFtZSIsIkRhcmtNb2RlIiwidG9nZ2xlUyIsInVzZVN0YXRlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImpzb24iLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJwcmV2RGFya01vZGUiLCJjbGFzc05hbWVzIiwibG9nbyIsIlVSTCIsInJlcXVpcmUiLCJOYXZiYXIiLCJoYW1idXJnZXIiLCJzZXRIYW1idXJnZXIiLCJidG5DbGFzcyIsInRvIiwic3JjIiwicHJldkhhbSIsInR5cGUiLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiLCJlbmQiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXkiLCJjYWxsIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJhcnIyIiwiX3NsaWNlZFRvQXJyYXkiLCJfaSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIm8iLCJtaW5MZW4iLCJuIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIlR5cGVFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=