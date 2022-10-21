/*! For license information please see 89.bundle.js.LICENSE.txt */
(self.webpackChunkreact=self.webpackChunkreact||[]).push([[89],{198:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(294);function n(){var e=(new Date).getFullYear();return a.createElement("footer",{className:"pt-16"},a.createElement("div",{className:"absolute bottom-0 inset-x-0 bg-tertiary dark:bg-secondary p-5 text-center text-black dark:text-white"},a.createElement("small",null,"© ",e," Reyes development. All rights reserved.")))}},116:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(294),n=r(502),l=r(198);function i(e){return a.createElement(a.Fragment,null,a.createElement(n.Z,null),a.createElement("main",null,a.createElement("section",{className:"md:py-20 py-16 px-8"},e.main)),a.createElement(l.Z,null))}},502:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var a=r(152),n=r(294),l=r(184),i=r.n(l);function c(){var e="Toggle__Switch",t=(0,n.useState)((function(){return JSON.parse(localStorage.getItem("site-light-mode"))||!1})),r=(0,a.Z)(t,2),l=r[0],c=r[1];return(0,n.useEffect)((function(){l?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark");var e=JSON.stringify(l);localStorage.setItem("site-light-mode",e),console.log("Dark Mode:",l)}),[l]),n.createElement("div",{className:"Toggle"},n.createElement("p",{className:"Toggle__Text Toggle--Light"},"Light"),n.createElement("div",{onClick:function(){return c((function(e){return!e}))},className:i()(e,"".concat(e,l?"--Light":"--Dark"))}),n.createElement("p",{className:"Toggle__Text Toggle--Dark"},"Dark"))}var u=r(655),s=new URL(r(427),r.b),o=r(184);function m(){var e=(0,n.useState)(!1),t=(0,a.Z)(e,2),r=t[0],l=t[1],i=o("Header__NavLink",r?"show":"");return n.createElement("header",{className:"Header"},n.createElement("nav",{className:"Header__Nav"},n.createElement(u.rU,{to:"/",className:"Header__Logo-Wrapper"},n.createElement("img",{src:s,className:"inline-block"}),n.createElement("span",{className:"Header__Logo-Name"},"Mervin")),n.createElement("div",{className:"Header__Toggle"},n.createElement("button",{onClick:function(){return l((function(e){return!e}))},type:"button",className:"Header__Hamburger"},n.createElement("span",{className:"sr-only"},"Open main menu"),n.createElement("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"}))),n.createElement("div",{className:i},n.createElement("ul",null,n.createElement("li",null,n.createElement(u.OL,{to:"/",end:!0},"Home")),n.createElement("li",null,n.createElement(u.OL,{to:"/about"},"About")))),n.createElement(c,null))))}},89:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(294);function n(){return a.createElement("div",{className:"container xl:max-w-screen-xl mx-auto"},a.createElement("h1",null,"Lorem Ipsum"),a.createElement("ul",{className:"ul-disc"},a.createElement("li",null,"Sed porttitor lectus nibh. "),a.createElement("li",null,"Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."),a.createElement("li",null,"Nulla quis lorem ut libero malesuada feugiat."),a.createElement("li",null,"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."),a.createElement("li",null,"Vivamus suscipit tortor eget felis porttitor volutpat.")))}var l=r(116);function i(){return a.createElement(l.Z,{main:a.createElement(n,null)})}},184:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===l)if(r.toString===Object.prototype.toString)for(var c in r)a.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},427:e=>{"use strict";e.exports="data:image/png;base64,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"},152:(e,t,r)=>{"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,l=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(l.push(a.value),!t||l.length!==t);i=!0);}catch(e){c=!0,n=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:()=>n})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0EsRUFBR1YsS0FBS00sS0FBUVUsR0FBTUgsRUFBS0gsRUFBR1EsUUFBUUMsUUFDOUNKLEVBQUt4QixLQUFLc0IsRUFBR08sUUFFVGxDLEdBQUs2QixFQUFLM0IsU0FBV0YsR0FINEI4QixHQUFLLEdBYzlELENBVEUsTUFBT0ssR0FDUEosR0FBSyxFQUNMSCxFQUFLTyxDQUNQLENBQUUsUUFDQSxJQUNPTCxHQUFzQixNQUFoQk4sRUFBVyxRQUFXQSxFQUFXLFFBRzlDLENBRkUsUUFDQSxHQUFJTyxFQUFJLE1BQU1ILENBQ2hCLENBQ0YsQ0FFQSxPQUFPQyxDQXhCZSxDQXlCeEIsQ0Z2QmdDLENBQXFCVCxFQUFLcEIsSUdKM0MsU0FBcUNvQyxFQUFHQyxHQUNyRCxHQUFLRCxFQUFMLENBQ0EsR0FBaUIsaUJBQU5BLEVBQWdCLE9BQU8sRUFBaUJBLEVBQUdDLEdBQ3RELElBQUlDLEVBQUkzQixPQUFPQyxVQUFVRixTQUFTSSxLQUFLc0IsR0FBR0csTUFBTSxHQUFJLEdBRXBELE1BRFUsV0FBTkQsR0FBa0JGLEVBQUVJLGNBQWFGLEVBQUlGLEVBQUVJLFlBQVlDLE1BQzdDLFFBQU5ILEdBQXFCLFFBQU5BLEVBQW9CaEMsTUFBTW9DLEtBQUtOLEdBQ3hDLGNBQU5FLEdBQXFCLDJDQUEyQ0ssS0FBS0wsR0FBVyxFQUFpQkYsRUFBR0MsUUFBeEcsQ0FMYyxDQU1oQixDSEhnRSxDQUEyQmpCLEVBQUtwQixJSUxqRixXQUNiLE1BQU0sSUFBSTRDLFVBQVUsNElBQ3RCLENKR3NHLEVBQ3RHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3JlYWN0Ly4vc3JjL2NvbXBvbmVudHMvVG9nZ2xlRGFya01vZGUuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvY29tcG9uZW50cy9JbnRyb0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInB0LTE2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgaW5zZXQteC0wIGJnLXRlcnRpYXJ5IGRhcms6Ymctc2Vjb25kYXJ5IHAtNSB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrIGRhcms6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgIDxzbWFsbD4mY29weTsge3llYXJ9IFJleWVzIGRldmVsb3BtZW50LiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc21hbGw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb290ZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG52YXIgc2VjdGlvblN0eWxlID0gXCJtZDpweS0yMCBweS0xNiBweC04XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4ocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxOYXZiYXIgLz5cclxuICAgIDxtYWluPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3NlY3Rpb25TdHlsZX0+XHJcbiAgICAgICAge3Byb3BzLm1haW59XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbWFpbj5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtNb2RlKCkge1xyXG4gIGNvbnN0IHRvZ2dsZVMgPSBcIlRvZ2dsZV9fU3dpdGNoXCI7XHJcblxyXG4gIGNvbnN0IFtkYXJrTW9kZSwgc2V0RGFya01vZGVdID0gdXNlU3RhdGUoXHJcbiAgICAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2l0ZS1saWdodC1tb2RlXCIpKSB8fCBmYWxzZVxyXG4gICk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWRhcmtNb2RlKSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1wiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXJrTW9kZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpdGUtbGlnaHQtbW9kZVwiLCBqc29uKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGFyayBNb2RlOlwiLCBkYXJrTW9kZSk7XHJcbiAgfSwgW2RhcmtNb2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlRvZ2dsZVwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJUb2dnbGVfX1RleHQgVG9nZ2xlLS1MaWdodFwiPkxpZ2h0PC9wPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGFya01vZGUoKHByZXZEYXJrTW9kZSkgPT4gIXByZXZEYXJrTW9kZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxyXG4gICAgICAgICAgdG9nZ2xlUyxcclxuICAgICAgICAgIGRhcmtNb2RlID8gYCR7dG9nZ2xlU30tLUxpZ2h0YCA6IGAke3RvZ2dsZVN9LS1EYXJrYFxyXG4gICAgICAgICl9XHJcbiAgICAgID48L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiVG9nZ2xlX19UZXh0IFRvZ2dsZS0tRGFya1wiPkRhcms8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVG9nZ2xlRGFya01vZGUgZnJvbSBcIi4vVG9nZ2xlRGFya01vZGVcIjtcclxuaW1wb3J0IHsgTGluaywgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmNvbnN0IGxvZ28gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xyXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIGNvbnN0IFtoYW1idXJnZXIsIHNldEhhbWJ1cmdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHZhciBidG5DbGFzcyA9IGNsYXNzTmFtZXMoXCJIZWFkZXJfX05hdkxpbmtcIiwgaGFtYnVyZ2VyID8gXCJzaG93XCIgOiBcIlwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiSGVhZGVyXCI+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiSGVhZGVyX19OYXZcIj5cclxuICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJIZWFkZXJfX0xvZ28tV3JhcHBlclwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJIZWFkZXJfX0xvZ28tTmFtZVwiPk1lcnZpbjwvc3Bhbj5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGVhZGVyX19Ub2dnbGVcIj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SGFtYnVyZ2VyKChwcmV2SGFtKSA9PiAhcHJldkhhbSl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJIZWFkZXJfX0hhbWJ1cmdlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5PcGVuIG1haW4gbWVudTwvc3Bhbj5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxyXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgIGQ9XCJNMyA1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDEwYTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xek0zIDE1YTEgMSAwIDAxMS0xaDEyYTEgMSAwIDExMCAySDRhMSAxIDAgMDEtMS0xelwiXHJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YnRuQ2xhc3N9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvXCIgZW5kPlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxUb2dnbGVEYXJrTW9kZSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW50cm9Db250ZW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB4bDptYXgtdy1zY3JlZW4teGwgbXgtYXV0b1wiPlxyXG4gICAgICA8aDE+TG9yZW0gSXBzdW08L2gxPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwidWwtZGlzY1wiPlxyXG4gICAgICAgIDxsaT5TZWQgcG9ydHRpdG9yIGxlY3R1cyBuaWJoLiA8L2xpPlxyXG4gICAgICAgIDxsaT5WaXZhbXVzIG1hZ25hIGp1c3RvLCBsYWNpbmlhIGVnZXQgY29uc2VjdGV0dXIgc2VkLCBjb252YWxsaXMgYXQgdGVsbHVzLjwvbGk+XHJcbiAgICAgICAgPGxpPk51bGxhIHF1aXMgbG9yZW0gdXQgbGliZXJvIG1hbGVzdWFkYSBmZXVnaWF0LjwvbGk+XHJcbiAgICAgICAgPGxpPk1hdXJpcyBibGFuZGl0IGFsaXF1ZXQgZWxpdCwgZWdldCB0aW5jaWR1bnQgbmliaCBwdWx2aW5hciBhLjwvbGk+XHJcbiAgICAgICAgPGxpPlZpdmFtdXMgc3VzY2lwaXQgdG9ydG9yIGVnZXQgZmVsaXMgcG9ydHRpdG9yIHZvbHV0cGF0LjwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEludHJvQ29udGVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9JbnRyb0NvbnRlbnRcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gPE1haW4gbWFpbj17PEludHJvQ29udGVudCAvPn0gLz47XHJcbn1cclxuIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxOCBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGlmIChhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0aWYgKGFyZy50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZykge1xuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChhcmcudG9TdHJpbmcoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdO1xuXG4gIGlmIChfaSA9PSBudWxsKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuXG4gIHZhciBfcywgX2U7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59Il0sIm5hbWVzIjpbIkZvb3RlciIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJjbGFzc05hbWUiLCJNYWluIiwicHJvcHMiLCJtYWluIiwiRGFya01vZGUiLCJ0b2dnbGVTIiwidXNlU3RhdGUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGFya01vZGUiLCJzZXREYXJrTW9kZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwianNvbiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInByZXZEYXJrTW9kZSIsImNsYXNzTmFtZXMiLCJsb2dvIiwiVVJMIiwicmVxdWlyZSIsIk5hdmJhciIsImhhbWJ1cmdlciIsInNldEhhbWJ1cmdlciIsImJ0bkNsYXNzIiwidG8iLCJzcmMiLCJwcmV2SGFtIiwidHlwZSIsImZpbGwiLCJ2aWV3Qm94IiwieG1sbnMiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsImVuZCIsIkludHJvQ29udGVudCIsIkhvbWUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5IiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJrZXkiLCJjYWxsIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJhcnIyIiwiX3NsaWNlZFRvQXJyYXkiLCJfaSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsIm8iLCJtaW5MZW4iLCJuIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsIlR5cGVFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=