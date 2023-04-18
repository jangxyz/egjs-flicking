"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86348],{86348:(e,t,n)=>{n.d(t,{Eh:()=>S,VS:()=>r,XS:()=>I,fo:()=>M,il:()=>s,pT:()=>o,tl:()=>z});var i=n(63803),r=function(){function e(e,t){var n=this;void 0===e&&(e=""),void 0===t&&(t=1),this.update=function(){n._onMove()},this._onMove=function(){var e=n._flicking;e&&e.visiblePanels.forEach((function(e){var t=e.outsetProgress,i=e.element,r=n._selector?i.querySelector(n._selector):i,o=r.parentNode,s=r.getBoundingClientRect(),a="translate(-50%) translate("+(o.getBoundingClientRect().width-s.width)/2*t*n._scale+"px)";r.style.cssText+="transform: "+a+";-webkit-transform: "+a+";-ms-transform:"+a}))},this._flicking=null,this._selector=e,this._scale=t}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),o=function(){function e(e,t){var n=this;void 0===e&&(e=""),void 0===t&&(t=1),this.update=function(){n._onMove()},this._onMove=function(){var e=n._flicking,t=n._selector,i=n._scale;e&&e.visiblePanels.forEach((function(e){var n=e.outsetProgress,r=e.element,o=t?r.querySelector(t):r;if(o){var s=Math.min(1,Math.max(0,1-Math.abs(n*i)));o.style.opacity=""+s}}))},this._flicking=null,this._selector=e,this._scale=t}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),s=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.duration,o=void 0===r?2e3:r,s=n.animationDuration,a=void 0===s?void 0:s,l=n.direction,c=void 0===l?i.JR.NEXT:l,u=n.stopOnHover,f=void 0!==u&&u,h=n.delayAfterHover;this._flicking=null,this._timerId=0,this._mouseEntered=!1,this._playing=!1,this.play=function(){t._movePanel(t._duration)},this.stop=function(){t._playing=!1,clearTimeout(t._timerId)},this._onMouseEnter=function(){t._mouseEntered=!0,t.stop()},this._onMouseLeave=function(){t._mouseEntered=!1,t._movePanel(t._delayAfterHover)},this._duration=o,this._animationDuration=a,this._direction=c,this._stopOnHover=f,this._delayAfterHover=null!=h?h:o}var t=e.prototype;return Object.defineProperty(t,"duration",{get:function(){return this._duration},set:function(e){this._duration=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"animationDuration",{get:function(){return this._animationDuration},set:function(e){this._animationDuration=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"direction",{get:function(){return this._direction},set:function(e){this._direction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"stopOnHover",{get:function(){return this._stopOnHover},set:function(e){this._stopOnHover=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"delayAfterHover",{get:function(){return this._delayAfterHover},set:function(e){this._delayAfterHover=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),t.init=function(e){var t;if(this._flicking&&this.destroy(),e.on(((t={})[i.FP.MOVE_START]=this.stop,t[i.FP.HOLD_START]=this.stop,t[i.FP.MOVE_END]=this.play,t[i.FP.SELECT]=this.play,t)),this._flicking=e,this._stopOnHover){var n=this._flicking.element;n.addEventListener("mouseenter",this._onMouseEnter,!1),n.addEventListener("mouseleave",this._onMouseLeave,!1)}this.play()},t.destroy=function(){var e=this._flicking;if(this._mouseEntered=!1,this.stop(),e){e.off(i.FP.MOVE_START,this.stop),e.off(i.FP.HOLD_START,this.stop),e.off(i.FP.MOVE_END,this.play),e.off(i.FP.SELECT,this.play);var t=e.element;t.removeEventListener("mouseenter",this._onMouseEnter,!1),t.removeEventListener("mouseleave",this._onMouseLeave,!1),this._flicking=null}},t.update=function(){},t._movePanel=function(e){var t=this,n=this._flicking,r=this._direction;n&&(this.stop(),this._mouseEntered||n.animating||(this._playing=!0,this._timerId=window.setTimeout((function(){r===i.JR.NEXT?n.next(t._animationDuration).catch((function(){})):n.prev(t._animationDuration).catch((function(){})),t.play()}),e)))},e}(),a={CLICK:"click",MOUSE_DOWN:"mousedown",TOUCH_START:"touchstart"},l=".flicking-arrow-prev",c=".flicking-arrow-next",u="flicking-arrow-disabled",f=".flicking-pagination",h="flicking-pagination",_="bullets",d="bullet",p="bullet-active",v="fraction",g="fraction-current",m="fraction-total",E="uninitialized",b="scroll",y="slider",P="bullet-prev",C="bullet-next",x={BULLET:"bullet",FRACTION:"fraction",SCROLL:"scroll"},O={CAMERA:"camera",INDEX:"index"},k=function(e,t){e&&(e.classList?e.classList.add(t):e.className.split(" ").indexOf(t)<0&&(e.className=e.className+" "+t))},F=function(e,t){if(e)if(e.classList)e.classList.remove(t);else{var n=new RegExp("( |^)"+t+"( |$)","g");e.className.replace(n," ")}},T=function(e,t,n){var i=t.querySelector(e);if(!i)throw new Error("[Flicking-"+n+"] Couldn't find element with the given selector: "+e);return i},S=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.parentEl,o=void 0===r?null:r,s=n.prevElSelector,a=void 0===s?l:s,f=n.nextElSelector,h=void 0===f?c:f,_=n.disabledClass,d=void 0===_?u:_,p=n.moveCount,v=void 0===p?1:p,g=n.moveByViewportSize,m=void 0!==g&&g;this._flicking=null,this._preventInputPropagation=function(e){e.stopPropagation()},this._onPrevClick=function(){var e=t._flicking,n=e.camera,i=n.anchorPoints;if(!(e.animating||i.length<=0)){var r=i[0],o=t._moveCount;if(t._moveByViewportSize)e.control.moveToPosition(n.position-n.size,e.duration).catch(t._onCatch);else if(e.circularEnabled){for(var s=e.currentPanel,a=0;a<o;a++)s=s.prev();s.focus().catch(t._onCatch)}else e.index>r.panel.index?e.moveTo(Math.max(e.index-o,r.panel.index)).catch(t._onCatch):n.position>n.range.min&&e.moveTo(e.index).catch(t._onCatch)}},this._onNextClick=function(){var e=t._flicking,n=e.camera,i=n.anchorPoints;if(!(e.animating||i.length<=0)){var r=i[i.length-1],o=t._moveCount;if(t._moveByViewportSize)e.control.moveToPosition(n.position+n.size,e.duration).catch(t._onCatch);else if(e.circularEnabled){for(var s=e.currentPanel,a=0;a<o;a++)s=s.next();s.focus().catch(t._onCatch)}else e.index<r.panel.index?e.moveTo(Math.min(e.index+o,r.panel.index)).catch(t._onCatch):n.position>n.range.min&&e.moveTo(e.index).catch(t._onCatch)}},this._onAnimation=function(){var e=t._flicking,n=e.camera,i=e.control.controller;e.holding?t._updateClass(n.position):t._updateClass(i.animatingContext.end)},this._onCatch=function(e){if(!(e instanceof i.wb))throw e},this._parentEl=o,this._prevElSelector=a,this._nextElSelector=h,this._disabledClass=d,this._moveCount=v,this._moveByViewportSize=m}var t=e.prototype;return Object.defineProperty(t,"prevEl",{get:function(){return this._prevEl},enumerable:!1,configurable:!0}),Object.defineProperty(t,"nextEl",{get:function(){return this._nextEl},enumerable:!1,configurable:!0}),Object.defineProperty(t,"parentEl",{get:function(){return this._parentEl},set:function(e){this._parentEl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"prevElSelector",{get:function(){return this._prevElSelector},set:function(e){this._prevElSelector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"nextElSelector",{get:function(){return this._nextElSelector},set:function(e){this._nextElSelector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"disabledClass",{get:function(){return this._disabledClass},set:function(e){this._disabledClass=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"moveCount",{get:function(){return this._moveCount},set:function(e){this._moveCount=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"moveByViewportSize",{get:function(){return this._moveByViewportSize},set:function(e){this._moveByViewportSize=e},enumerable:!1,configurable:!0}),t.init=function(e){var t=this;this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onAnimation);var n=this._parentEl?this._parentEl:e.element,r=T(this._prevElSelector,n,"Arrow"),o=T(this._nextElSelector,n,"Arrow");[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(e){r.addEventListener(e,t._preventInputPropagation,{passive:!0}),o.addEventListener(e,t._preventInputPropagation,{passive:!0})})),r.addEventListener(a.CLICK,this._onPrevClick),o.addEventListener(a.CLICK,this._onNextClick),this._prevEl=r,this._nextEl=o,this.update()},t.destroy=function(){var e=this,t=this._flicking;if(t){t.off(i.FP.MOVE,this._onAnimation);var n=this._prevEl,r=this._nextEl;[a.MOUSE_DOWN,a.TOUCH_START].forEach((function(t){n.removeEventListener(t,e._preventInputPropagation),r.removeEventListener(t,e._preventInputPropagation)})),n.removeEventListener(a.CLICK,this._onPrevClick),r.removeEventListener(a.CLICK,this._onNextClick),this._flicking=null}},t.update=function(){this._updateClass(this._flicking.camera.position)},t._updateClass=function(e){var t=this._flicking,n=this._disabledClass,i=this._prevEl,r=this._nextEl,o=t.camera.range,s=!t.circularEnabled&&e<=o.min,a=!t.circularEnabled&&e>=o.max;s?k(i,n):F(i,n),a?k(r,n):F(r,n)},e}(),M=function(){function e(e){var t=this,n=void 0===e?{}:e,r=n.type,o=void 0===r?O.CAMERA:r,s=n.synchronizedFlickingOptions,a=void 0===s?[]:s;this._flicking=null,this._addEvents=function(){var e=t._type;t._synchronizedFlickingOptions.forEach((function(n){var r=n.flicking,o=n.isSlidable,s=n.isClickable;e===O.CAMERA&&(r.on(i.FP.MOVE,t._onMove),r.on(i.FP.MOVE_START,t._onMoveStart),r.on(i.FP.MOVE_END,t._onMoveEnd)),e===O.INDEX&&o&&(r.on(i.FP.WILL_CHANGE,t._onIndexChange),r.on(i.FP.WILL_RESTORE,t._onIndexChange)),s&&r.on(i.FP.SELECT,t._onSelect)}))},this._removeEvents=function(){var e=t._type;t._synchronizedFlickingOptions.forEach((function(n){var r=n.flicking,o=n.isSlidable,s=n.isClickable;e===O.CAMERA&&(r.off(i.FP.MOVE,t._onMove),r.off(i.FP.MOVE_START,t._onMoveStart),r.off(i.FP.MOVE_END,t._onMoveEnd)),e===O.INDEX&&o&&(r.off(i.FP.WILL_CHANGE,t._onIndexChange),r.off(i.FP.WILL_RESTORE,t._onIndexChange)),s&&r.off(i.FP.SELECT,t._onSelect)}))},this._onIndexChange=function(e){var n=e.currentTarget;n.initialized&&t._synchronizeByIndex(n,e.index)},this._onMove=function(e){var n=e.currentTarget.camera,i=(n.position-n.range.min)/n.rangeDiff;t._synchronizedFlickingOptions.forEach((function(t){var r=t.flicking;if(r!==e.currentTarget){var o=0;o=n.position<n.range.min?n.position:n.position>n.range.max?r.camera.range.max+n.position-n.range.max:r.camera.range.min+r.camera.rangeDiff*i,r.camera.lookAt(o)}}))},this._onMoveStart=function(e){t._synchronizedFlickingOptions.forEach((function(t){var n=t.flicking;n!==e.currentTarget&&n.disableInput()}))},this._onMoveEnd=function(e){t._synchronizedFlickingOptions.forEach((function(t){var n=t.flicking;n!==e.currentTarget&&(n.enableInput(),n.control.updateInput())}))},this._onSelect=function(e){e.currentTarget.moveTo(e.index).catch((function(){})),t._synchronizeByIndex(e.currentTarget,e.index)},this._synchronizeByIndex=function(e,n){var r=t._synchronizedFlickingOptions;t._preventEvent((function(){r.forEach((function(r){t._updateClass(r,n);var o=r.flicking;if(o!==e){var s=(0,i.uZ)(n,0,o.panels.length);o.animating?o.once(i.FP.MOVE_END,(function(){o.moveTo(s).catch((function(){}))})):o.moveTo(s)}}))}))},this._updateClass=function(e,t){var n=e.flicking,i=e.activeClass;i&&n.panels.forEach((function(e){e.index===t?k(e.element,i):F(e.element,i)}))},this._type=o,this._synchronizedFlickingOptions=a}var t=e.prototype;return Object.defineProperty(t,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"synchronizedFlickingOptions",{get:function(){return this._synchronizedFlickingOptions},set:function(e){this._synchronizedFlickingOptions=e},enumerable:!1,configurable:!0}),t.init=function(e){var t=this,n=this._synchronizedFlickingOptions;this._flicking&&this.destroy(),this._flicking=e,this._addEvents(),n.forEach((function(e){var n=e.flicking;t._updateClass(e,n.defaultIndex)}))},t.destroy=function(){this._flicking&&(this._removeEvents(),this._flicking=null)},t.update=function(){var e=this;this._synchronizedFlickingOptions.forEach((function(t){e._updateClass(t,t.flicking.index)}))},t._preventEvent=function(e){this._removeEvents(),e(),this._addEvents()},e}(),I=function(){function e(e){var t=this,n=void 0===e?{}:e,i=n.selector,r=void 0===i?"":i,o=n.scale,s=void 0===o?1:o,a=n.rotate,l=void 0===a?1:a,c=n.perspective,u=void 0===c?1e3:c;this.update=function(){t._onMove()},this._onMove=function(){var e=t._flicking,n=t._selector,i=t._scale,r=t._rotate,o=t._perspective;if(e){var s=e.horizontal;e.visiblePanels.forEach((function(e){var t=e.outsetProgress,a=e.element,l=n?a.querySelector(n):a,c=1/(Math.abs(t*i)+1),u=t>0?Math.min(90,100*t*r):Math.max(-90,100*t*r),f=s?[0,u]:[u,0],h=f[0],_=f[1];l.style.transform="perspective("+o+"px) rotateX("+h+"deg) rotateY("+_+"deg) scale("+c+")"}))}},this._flicking=null,this._selector=r,this._scale=s,this._rotate=l,this._perspective=u}var t=e.prototype;return Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scale",{get:function(){return this._scale},set:function(e){this._scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"rotate",{get:function(){return this._rotate},set:function(e){this._rotate=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"perspective",{get:function(){return this._perspective},set:function(e){this._perspective=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e,e.on(i.FP.MOVE,this._onMove),e.on(i.FP.AFTER_RESIZE,this.update),this._onMove()},t.destroy=function(){this._flicking&&(this._flicking.off(i.FP.MOVE,this._onMove),this._flicking.off(i.FP.AFTER_RESIZE,this.update),this._flicking=null)},e}(),L=function(e,t){return L=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},L(e,t)};function A(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}L(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function w(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||t)}var R=function(){function e(e){var t=e.flicking,n=e.pagination,i=e.wrapper;this._flicking=t,this._pagination=n,this._wrapper=i}var t=e.prototype;return t._createBulletFromString=function(e,t){var n=document.createRange().createContextualFragment(e).firstChild;return this._addBulletEvents(n,t),n},t._addBulletEvents=function(e,t){var n=this,r=this._flicking.camera.anchorPoints[t].panel.index;e.addEventListener(a.MOUSE_DOWN,(function(e){e.stopPropagation()})),e.addEventListener(a.TOUCH_START,(function(e){e.stopPropagation()}),{passive:!0}),e.addEventListener(a.CLICK,(function(){n._flicking.moveTo(r).catch((function(e){if(!(e instanceof i.wb))throw e}))}))},e}(),j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._bullets=[],t._prevIndex=-1,t}A(t,e);var n=t.prototype;return Object.defineProperty(n,"_bulletClass",{get:function(){return this._pagination.classPrefix+"-"+d},enumerable:!1,configurable:!0}),Object.defineProperty(n,"_activeClass",{get:function(){return this._pagination.classPrefix+"-"+p},enumerable:!1,configurable:!0}),n.destroy=function(){this._bullets=[],this._prevIndex=-1},n.render=function(){var e=this,t=this._flicking,n=this._pagination,i=this._wrapper,r=this._bulletClass,o=this._activeClass,s=n.renderBullet,a=n.renderActiveBullet,l=n.classPrefix+"-"+_,c=t.camera.anchorPoints;k(i,l),i.innerHTML=c.map((function(e,n){return a&&e.panel.index===t.index?a(r,n):s(r,n)})).join("\n");var u=[].slice.call(i.children);u.forEach((function(n,i){c[i].panel.index===t.index&&(k(n,o),e._prevIndex=i),e._addBulletEvents(n,i)})),this._bullets=u},n.update=function(e){var t=this._flicking,n=this._pagination,i=this._wrapper,r=this._bullets,o=this._bulletClass,s=this._activeClass,a=this._prevIndex,l=t.camera.anchorPoints,c=n.renderBullet,u=n.renderActiveBullet;if(!(l.length<=0)){var f=e-l[0].panel.index;if(a!==f){if(u){if(p=r[a]){var h=this._createBulletFromString(c(o,a),a);p.parentElement.replaceChild(h,p),r[a]=h}var _=r[f],d=this._createBulletFromString(u(o+" "+s,f),f);i.replaceChild(d,_),r[f]=d}else{var p;_=r[f];(p=r[a])&&F(p,s),k(_,s)}this._prevIndex=f}}},t}(R),B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._prevIndex=-1,t._prevTotal=-1,t}A(t,e);var n=t.prototype;return n.destroy=function(){this._prevIndex=-1,this._prevTotal=-1},n.render=function(){var e=this._flicking,t=this._wrapper,n=this._pagination,i=n.classPrefix+"-"+v,r=n.classPrefix+"-"+g,o=n.classPrefix+"-"+m;k(t,i),t.innerHTML=n.renderFraction(r,o),this.update(e.index)},n.update=function(e){var t=this._flicking,n=this._wrapper,i=this._pagination,r=t.camera.anchorPoints,o=r.length>0?e-r[0].panel.index+1:0,s=r.length;if(o!==this._prevIndex||s!==this._prevTotal){var a="."+i.classPrefix+"-"+g,l="."+i.classPrefix+"-"+m,c=n.querySelector(a),u=n.querySelector(l);c.innerHTML=i.fractionCurrentFormat(o),u.innerHTML=i.fractionTotalFormat(s),this._prevIndex=o,this._prevTotal=s}},t}(R),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._bullets=[],t._bulletSize=0,t._previousIndex=-1,t._sliderIndex=-1,t.moveTo=function(e){var n=t._pagination,i=t._wrapper.firstElementChild,r=t._bulletSize,o=r*n.bulletCount;i.style.transform="translate("+(o/2-(e+.5)*r)+"px)",t._sliderIndex=e},t}A(t,e);var n=t.prototype;return n.destroy=function(){this._bullets=[],this._bulletSize=0,this._previousIndex=-1,this._sliderIndex=-1},n.render=function(){var e=this,t=this._wrapper,n=this._flicking,i=this._pagination,r=i.renderBullet,o=n.camera.anchorPoints,s=i.classPrefix+"-"+b,a=i.classPrefix+"-"+d,l=i.classPrefix+"-"+y,c=i.classPrefix+"-"+E,u=document.createElement("div");k(u,l),k(t,c),k(t,s),t.appendChild(u),u.innerHTML=o.map((function(e,t){return r(a,t)})).join("\n");var f=[].slice.call(u.children);if(f.forEach((function(t,n){e._addBulletEvents(t,n)})),!(f.length<=0)){var h=getComputedStyle(f[0]),_=f[0].clientWidth+parseFloat(h.marginLeft)+parseFloat(h.marginRight);t.style.width=_*i.bulletCount+"px",this._bullets=f,this._bulletSize=_,this._previousIndex=-1,this.update(this._flicking.index),window.requestAnimationFrame((function(){F(t,c)}))}},n.update=function(e){var t=this._pagination,n=this._flicking,r=this._bullets,o=this._previousIndex,s=t.renderBullet,a=t.renderActiveBullet,l=n.camera.anchorPoints,c=e-l[0].panel.index;if(!(l.length<=0)){var u=t.classPrefix+"-"+d,f=t.classPrefix+"-"+p,h=t.classPrefix+"-"+P,_=t.classPrefix+"-"+C,v=new RegExp("^"+h),g=new RegExp("^"+_);if(a){var m=r[o];if(m){var E=this._createBulletFromString(s(u,o),o);m.parentElement.replaceChild(E,m),r[o]=E}var b=r[c];if(b){var y=this._createBulletFromString(a(u,c),c);b.parentElement.replaceChild(y,b),r[c]=y}}r.forEach((function(e,t){for(var n,i=t-c,r=0,o=e.className.split(" ");r<o.length;r++){var s=o[r];(s===f||v.test(s)||g.test(s))&&F(e,s)}k(e,0===i?f:i>0?(n=Math.abs(i),""+_+(n>1?n:"")):function(e){return""+h+(e>1?e:"")}(Math.abs(i)))})),t.scrollOnChange(c,{total:r.length,prevIndex:o,sliderIndex:this._sliderIndex,direction:c>o?i.JR.NEXT:i.JR.PREV,bullets:w([],r),moveTo:this.moveTo}),this._previousIndex=c}},t}(R),z=function(){function e(e){var t=this,n=void 0===e?{}:e,i=n.parentEl,r=void 0===i?null:i,o=n.selector,s=void 0===o?f:o,a=n.type,l=void 0===a?x.BULLET:a,c=n.classPrefix,u=void 0===c?h:c,_=n.bulletCount,d=void 0===_?5:_,p=n.renderBullet,v=void 0===p?function(e){return'<span class="'+e+'"></span>'}:p,g=n.renderActiveBullet,m=void 0===g?null:g,E=n.renderFraction,b=void 0===E?function(e,t){return'<span class="'+e+'"></span>/<span class="'+t+'"></span>'}:E,y=n.fractionCurrentFormat,P=void 0===y?function(e){return e.toString()}:y,C=n.fractionTotalFormat,O=void 0===C?function(e){return e.toString()}:C,k=n.scrollOnChange,F=void 0===k?function(e,t){return t.moveTo(e)}:k;this._flicking=null,this.update=function(){t._removeAllChilds(),t._renderer.render()},this._onIndexChange=function(e){t._renderer.update(e.index)},this._parentEl=r,this._selector=s,this._type=l,this._classPrefix=u,this._bulletCount=d,this._renderBullet=v,this._renderActiveBullet=m,this._renderFraction=b,this._fractionCurrentFormat=P,this._fractionTotalFormat=O,this._scrollOnChange=F}var t=e.prototype;return Object.defineProperty(t,"parentEl",{get:function(){return this._parentEl},set:function(e){this._parentEl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"selector",{get:function(){return this._selector},set:function(e){this._selector=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"type",{get:function(){return this._type},set:function(e){this._type=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"classPrefix",{get:function(){return this._classPrefix},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletCount",{get:function(){return this._bulletCount},set:function(e){this._bulletCount=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderBullet",{get:function(){return this._renderBullet},set:function(e){this._renderBullet=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderActiveBullet",{get:function(){return this._renderActiveBullet},set:function(e){this._renderActiveBullet=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"renderFraction",{get:function(){return this._renderFraction},set:function(e){this._renderFraction=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionCurrentFormat",{get:function(){return this._fractionCurrentFormat},set:function(e){this._fractionCurrentFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"fractionTotalFormat",{get:function(){return this._fractionTotalFormat},set:function(e){this._fractionTotalFormat=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"scrollOnChange",{get:function(){return this._scrollOnChange},set:function(e){this._scrollOnChange=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"bulletWrapperclassPrefixClass",{set:function(e){this._classPrefix=e},enumerable:!1,configurable:!0}),t.init=function(e){this._flicking&&this.destroy(),this._flicking=e;var t=this._type,n=this._selector,r=(this._parentEl?this._parentEl:e.element).querySelector(n);if(!r)throw new Error("[Flicking-Pagination] Couldn't find element with the given selector: "+n);this._wrapper=r,this._renderer=this._createRenderer(t),e.on(i.FP.WILL_CHANGE,this._onIndexChange),e.on(i.FP.WILL_RESTORE,this._onIndexChange),e.on(i.FP.PANEL_CHANGE,this.update),this.update()},t.destroy=function(){var e=this._flicking;e&&(e.off(i.FP.WILL_CHANGE,this._onIndexChange),e.off(i.FP.WILL_RESTORE,this._onIndexChange),e.off(i.FP.PANEL_CHANGE,this.update),this._renderer.destroy(),this._removeAllChilds(),this._flicking=null)},t._createRenderer=function(e){var t={flicking:this._flicking,pagination:this,wrapper:this._wrapper};switch(e){case x.BULLET:return new j(t);case x.FRACTION:return new B(t);case x.SCROLL:return new N(t);default:throw new Error('[Flicking-Pagination] type "'+e+'" is not supported.')}},t._removeAllChilds=function(){for(var e=this._wrapper;e.firstChild;)e.removeChild(e.firstChild)},e}()}}]);