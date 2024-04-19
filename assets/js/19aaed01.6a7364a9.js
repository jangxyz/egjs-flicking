"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6177],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>o});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),d=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(y.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,o=m["".concat(y,".").concat(s)]||m[s]||c[s]||l;return a?n.createElement(o,g(g({ref:t},p),{},{components:a})):n.createElement(o,g({ref:t},p))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=s;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[m]="string"==typeof e?e:r,g[1]=i;for(var d=2;d<l;d++)g[d]=a[d];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},64008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(58168),r=(a(96540),a(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/ExternalRenderer",id:"version-4.11.3/api/ExternalRenderer",title:"ExternalRenderer",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/versioned_docs/version-4.11.3/api/ExternalRenderer.mdx",sourceDirName:"api",slug:"/api/ExternalRenderer",permalink:"/egjs-flicking/docs/api/ExternalRenderer",draft:!1,editUrl:null,tags:[],version:"4.11.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"VirtualPanel",permalink:"/egjs-flicking/docs/api/VirtualPanel"},next:{title:"Renderer",permalink:"/egjs-flicking/docs/api/Renderer"}},y={},d=[{value:"Properties",id:"properties",level:2},{value:"panels",id:"panels",level:3},{value:"rendering",id:"rendering",level:3},{value:"panelCount",id:"panelCount",level:3},{value:"strategy",id:"strategy",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"render",id:"render",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"getPanel",id:"getPanel",level:3},{value:"updatePanelSize",id:"updatePanelSize",level:3},{value:"batchInsert",id:"batchInsert",level:3},{value:"batchInsertDefer",id:"batchInsertDefer",level:3},{value:"batchRemove",id:"batchRemove",level:3},{value:"batchRemoveDefer",id:"batchRemoveDefer",level:3},{value:"updateAfterPanelChange",id:"updateAfterPanelChange",level:3},{value:"checkPanelContentsReady",id:"checkPanelContentsReady",level:3}],p={toc:d},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class ExternalRenderer extends Renderer\n")),(0,r.yg)("div",null),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#panels"},"panels"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#rendering"},"rendering"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#panelCount"},"panelCount"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#strategy"},"strategy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#align"},"align")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#render"},"render"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#getPanel"},"getPanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePanelSize"},"updatePanelSize"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchInsert"},"batchInsert"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchInsertDefer"},"batchInsertDefer"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchRemove"},"batchRemove"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#batchRemoveDefer"},"batchRemoveDefer"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateAfterPanelChange"},"updateAfterPanelChange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#checkPanelContentsReady"},"checkPanelContentsReady")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"panels"},"panels"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Array of panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"rendering"},"rendering"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"A boolean value indicating whether rendering is in progress"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"panelCount"},"panelCount"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly"),(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Count of panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"strategy"},"strategy"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("h3",{id:"align"},"align"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"'s ",(0,r.yg)("a",{parentName:"p",href:"Panel#align"},"align")," value that applied to all panels"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"render"},"render"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Render panel elements inside the camera element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Initialize Renderer"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Destroy Renderer and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"getPanel"},"getPanel"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Return the ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," at the given index. ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," if it doesn't exists."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Panel at the given index")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"See"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"Panel"},"Panel"))),(0,r.yg)("h3",{id:"updatePanelSize"},"updatePanelSize"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Update all panel sizes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"batchInsert"},"batchInsert"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Insert new panels at given index",(0,r.yg)("br",null),"This will increase index of panels after by the number of panels added"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Array","<",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An array of prepended panels")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An array of items to insert")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Index to insert new panels at")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.elements"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","any",">"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An array of element or framework component with element in it")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Whether it contains actual DOM elements. If set to true, renderer will add them to the camera element")))),(0,r.yg)("h3",{id:"batchInsertDefer"},"batchInsertDefer"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Defers update",(0,r.yg)("br",null),"camera position & others will be updated after calling updateAfterPanelChange"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"...items"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","{index: number, elements: any[], hasDOMInElements: boolean}",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h3",{id:"batchRemove"},"batchRemove"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Remove the panel at the given index",(0,r.yg)("br",null),"This will decrease index of panels after by the number of panels removed"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel"),"[]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"An array of removed panels")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An array of items to remove")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Index of panel to remove")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.deleteCount"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of panels to remove from index")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"items.hasDOMInElements"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"1"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Whether it contains actual DOM elements. If set to true, renderer will remove them from the camera element")))),(0,r.yg)("h3",{id:"batchRemoveDefer"},"batchRemoveDefer"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("p",null,"Defers update",(0,r.yg)("br",null),"camera position & others will be updated after calling updateAfterPanelChange"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"...items"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Array","<","{index: number, deleteCount: number, hasDOMInElements: boolean}",">"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h3",{id:"updateAfterPanelChange"},"updateAfterPanelChange"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panelsAdded"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panelsRemoved"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h3",{id:"checkPanelContentsReady"},"checkPanelContentsReady"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--danger"},"inherited")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"checkingPanels"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel"),"[]"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);