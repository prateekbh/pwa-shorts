webpackJsonp([0],{"+XMp":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n("KM04"),c=function(t){return t&&t.__esModule?t:{default:t}}(n("lhA9")),u=n("DzRl");e.default=function(t){function e(){var e=r(this,t.call(this));return e.componentName="snackbar",e.isPureReactComponent=!0,e}return o(e,t),e.prototype.componentDidMount=function(){this.MDComponent=u.MDCSnackbar.attachTo(this.control),this.MDComponent.dismissesOnAction=void 0===this.props.dismissesOnAction||null===this.props.dismissesOnAction||this.props.dismissesOnAction},e.prototype.componentWillUnmount=function(){this.MDComponent.destroy&&this.MDComponent.destroy()},e.prototype.shouldComponentUpdate=function(t,e){return a(this.props,t)||a(this.state,e)},e.prototype.materialDom=function(t){return(0,s.h)("div",i({"aria-live":"assertive","aria-atomic":"true","aria-hidden":"true",ref:this.setControlRef},t),(0,s.h)("div",{className:"mdc-snackbar__text"}),(0,s.h)("div",{className:"mdc-snackbar__action-wrapper"},(0,s.h)("button",{type:"button",className:"mdc-snackbar__action-button"})))},e}(c.default)},"/sXU":function(t){"use strict";var e=function(){};t.exports=e},"2gTp":function(t){"use strict";t.exports=function(t,e,n,r,o,i,a,s){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;c=new Error(e.replace(/%s/g,function(){return u[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}},"3onB":function(){},"5D9O":function(t,e,n){t.exports=n("wVGV")()},Asjh:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},DzRl:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){return void 0!==t.document&&"function"==typeof t.document.createElement}function a(t){return t in g||t in O}function s(t,e,n){return e[t].styleProperty in n.style?e[t].noPrefix:e[t].webkitPrefix}function c(t,e){if(!i(t)||!a(e))return e;var n=e in g?g:O,r=t.document.createElement("div");return n===g?s(e,n,r):n[e].noPrefix in r.style?n[e].noPrefix:n[e].webkitPrefix}function u(t,e){return c(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function d(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var f=n("dSNL"),h={ROOT:"mdc-snackbar",TEXT:"mdc-snackbar__text",ACTION_WRAPPER:"mdc-snackbar__action-wrapper",ACTION_BUTTON:"mdc-snackbar__action-button",ACTIVE:"mdc-snackbar--active",MULTILINE:"mdc-snackbar--multiline",ACTION_ON_BOTTOM:"mdc-snackbar--action-on-bottom"},b={TEXT_SELECTOR:".mdc-snackbar__text",ACTION_WRAPPER_SELECTOR:".mdc-snackbar__action-wrapper",ACTION_BUTTON_SELECTOR:".mdc-snackbar__action-button",SHOW_EVENT:"MDCSnackbar:show",HIDE_EVENT:"MDCSnackbar:hide"},y={MESSAGE_TIMEOUT:2750},m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),v=function(t){function e(n){var o=r(this,t.call(this,m(e.defaultAdapter,n)));return o.active_=!1,o.actionWasClicked_=!1,o.dismissOnAction_=!0,o.firstFocus_=!0,o.pointerDownRecognized_=!1,o.snackbarHasFocus_=!1,o.snackbarData_=null,o.queue_=[],o.actionClickHandler_=function(){o.actionWasClicked_=!0,o.invokeAction_()},o.visibilitychangeHandler_=function(){clearTimeout(o.timeoutId_),o.snackbarHasFocus_=!0,o.adapter_.visibilityIsHidden()||setTimeout(o.cleanup_.bind(o),o.snackbarData_.timeout||y.MESSAGE_TIMEOUT)},o.interactionHandler_=function(t){"touchstart"!=t.type&&"mousedown"!=t.type||(o.pointerDownRecognized_=!0),o.handlePossibleTabKeyboardFocus_(t),"focus"==t.type&&(o.pointerDownRecognized_=!1)},o.blurHandler_=function(){clearTimeout(o.timeoutId_),o.snackbarHasFocus_=!1,o.timeoutId_=setTimeout(o.cleanup_.bind(o),o.snackbarData_.timeout||y.MESSAGE_TIMEOUT)},o}return o(e,t),_(e,[{key:"active",get:function(){return this.active_}}],[{key:"cssClasses",get:function(){return h}},{key:"strings",get:function(){return b}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setAriaHidden:function(){},unsetAriaHidden:function(){},setActionAriaHidden:function(){},unsetActionAriaHidden:function(){},setActionText:function(){},setMessageText:function(){},setFocus:function(){},visibilityIsHidden:function(){return!1},registerCapturedBlurHandler:function(){},deregisterCapturedBlurHandler:function(){},registerVisibilityChangeHandler:function(){},deregisterVisibilityChangeHandler:function(){},registerCapturedInteractionHandler:function(){},deregisterCapturedInteractionHandler:function(){},registerActionClickHandler:function(){},deregisterActionClickHandler:function(){},registerTransitionEndHandler:function(){},deregisterTransitionEndHandler:function(){},notifyShow:function(){},notifyHide:function(){}}}}]),e.prototype.init=function(){this.adapter_.registerActionClickHandler(this.actionClickHandler_),this.adapter_.setAriaHidden(),this.adapter_.setActionAriaHidden()},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterActionClickHandler(this.actionClickHandler_),this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_),this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_),["touchstart","mousedown","focus"].forEach(function(e){t.adapter_.deregisterCapturedInteractionHandler(e,t.interactionHandler_)})},e.prototype.dismissesOnAction=function(){return this.dismissOnAction_},e.prototype.setDismissOnAction=function(t){this.dismissOnAction_=!!t},e.prototype.show=function(t){var e=this;if(!t)throw new Error("Please provide a data object with at least a message to display.");if(!t.message)throw new Error("Please provide a message to be displayed.");if(t.actionHandler&&!t.actionText)throw new Error("Please provide action text with the handler.");if(this.active)return void this.queue_.push(t);clearTimeout(this.timeoutId_),this.snackbarData_=t,this.firstFocus_=!0,this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_),this.adapter_.registerCapturedBlurHandler(this.blurHandler_),["touchstart","mousedown","focus"].forEach(function(t){e.adapter_.registerCapturedInteractionHandler(t,e.interactionHandler_)});var n=h.ACTIVE,r=h.MULTILINE,o=h.ACTION_ON_BOTTOM;this.adapter_.setMessageText(this.snackbarData_.message),this.snackbarData_.multiline&&(this.adapter_.addClass(r),this.snackbarData_.actionOnBottom&&this.adapter_.addClass(o)),this.snackbarData_.actionHandler?(this.adapter_.setActionText(this.snackbarData_.actionText),this.actionHandler_=this.snackbarData_.actionHandler,this.setActionHidden_(!1)):(this.setActionHidden_(!0),this.actionHandler_=null,this.adapter_.setActionText(null)),this.active_=!0,this.adapter_.addClass(n),this.adapter_.unsetAriaHidden(),this.adapter_.notifyShow(),this.timeoutId_=setTimeout(this.cleanup_.bind(this),this.snackbarData_.timeout||y.MESSAGE_TIMEOUT)},e.prototype.handlePossibleTabKeyboardFocus_=function(){this.firstFocus_&&!this.pointerDownRecognized_&&this.setFocusOnAction_(),this.firstFocus_=!1},e.prototype.setFocusOnAction_=function(){this.adapter_.setFocus(),this.snackbarHasFocus_=!0,this.firstFocus_=!1},e.prototype.invokeAction_=function(){try{if(!this.actionHandler_)return;this.actionHandler_()}finally{this.dismissOnAction_&&this.cleanup_()}},e.prototype.cleanup_=function(){var t=this;if(!this.snackbarHasFocus_||this.actionWasClicked_){var e=h.MULTILINE,n=h.ACTION_ON_BOTTOM;this.adapter_.removeClass(h.ACTIVE),this.adapter_.registerTransitionEndHandler(function r(){clearTimeout(t.timeoutId_),t.adapter_.deregisterTransitionEndHandler(r),t.adapter_.removeClass(e),t.adapter_.removeClass(n),t.setActionHidden_(!0),t.adapter_.setAriaHidden(),t.active_=!1,t.snackbarHasFocus_=!1,t.adapter_.notifyHide(),t.showNext_()})}},e.prototype.showNext_=function(){this.queue_.length&&this.show(this.queue_.shift())},e.prototype.setActionHidden_=function(t){t?this.adapter_.setActionAriaHidden():this.adapter_.unsetActionAriaHidden()},e}(f.b),g={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},O={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};n.d(e,"MDCSnackbar",function(){return C}),n.d(e,"MDCSnackbarFoundation",function(){return v});var w=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),C=function(t){function e(){return l(this,e),p(this,t.apply(this,arguments))}return d(e,t),e.attachTo=function(t){return new e(t)},e.prototype.show=function(t){this.foundation_.show(t)},e.prototype.getDefaultFoundation=function(){var t=this,e=v.strings,n=e.TEXT_SELECTOR,r=e.ACTION_BUTTON_SELECTOR,o=function(){return t.root_.querySelector(n)},i=function(){return t.root_.querySelector(r)};return new v({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},setAriaHidden:function(){return t.root_.setAttribute("aria-hidden","true")},unsetAriaHidden:function(){return t.root_.removeAttribute("aria-hidden")},setActionAriaHidden:function(){return i().setAttribute("aria-hidden","true")},unsetActionAriaHidden:function(){return i().removeAttribute("aria-hidden")},setActionText:function(t){i().textContent=t},setMessageText:function(t){o().textContent=t},setFocus:function(){return i().focus()},visibilityIsHidden:function(){return document.hidden},registerCapturedBlurHandler:function(t){return i().addEventListener("blur",t,!0)},deregisterCapturedBlurHandler:function(t){return i().removeEventListener("blur",t,!0)},registerVisibilityChangeHandler:function(t){return document.addEventListener("visibilitychange",t)},deregisterVisibilityChangeHandler:function(t){return document.removeEventListener("visibilitychange",t)},registerCapturedInteractionHandler:function(t,e){return document.body.addEventListener(t,e,!0)},deregisterCapturedInteractionHandler:function(t,e){return document.body.removeEventListener(t,e,!0)},registerActionClickHandler:function(t){return i().addEventListener("click",t)},deregisterActionClickHandler:function(t){return i().removeEventListener("click",t)},registerTransitionEndHandler:function(e){return t.root_.addEventListener(u(window,"transitionend"),e)},deregisterTransitionEndHandler:function(e){return t.root_.removeEventListener(u(window,"transitionend"),e)},notifyShow:function(){return t.emit(v.strings.SHOW_EVENT)},notifyHide:function(){return t.emit(v.strings.HIDE_EVENT)}})},w(e,[{key:"dismissesOnAction",get:function(){return this.foundation_.dismissesOnAction()},set:function(t){this.foundation_.setDismissOnAction(t)}}]),e}(f.a)},UlEV:function(){},Ym6P:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("KM04"),s=function(t){return t&&t.__esModule?t:{default:t}}(n("lhA9"));e.default=function(t){function e(){var e=r(this,t.call(this));return e.componentName="typography",e._mdcProps=["headline1","headline2","headline3","headline4","headline5","headline6","subtitle1","subtitle2","body1","body2","button","caption","overline"],e}return o(e,t),e.prototype.materialDom=function(t){return(0,a.h)("span",i({},t,{ref:this.setControlRef}),t.children)},e}(s.default)},ZAL5:function(t){t.exports={home:"home__MseGd",cardHeader:"cardHeader__2Vd1U","headline-shadow":"headline-shadow__2WVTT",cardBody:"cardBody__fYYFu",news:"news__3W1hh"}},"iOg+":function(t,e,n){"use strict";function r(){return null}function o(t){var e=t.nodeName,n=t.attributes;t.attributes={},e.defaultProps&&C(t.attributes,e.defaultProps),n&&C(t.attributes,n)}function i(t,e){var n,r,o;if(e){for(o in e)if(n=Tt.test(o))break;if(n){r=t.attributes={};for(o in e)e.hasOwnProperty(o)&&(r[Tt.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=e[o])}}}function a(t,e,n){var r=e&&e._preactCompatRendered&&e._preactCompatRendered.base;r&&r.parentNode!==e&&(r=null),!r&&e&&(r=e.firstElementChild);for(var o=e.childNodes.length;o--;)e.childNodes[o]!==r&&e.removeChild(e.childNodes[o]);var i=Object(st.render)(t,e,r);return e&&(e._preactCompatRendered=i&&(i._component||{base:i})),"function"==typeof n&&n(),i&&i._component||i}function s(t,e,n,r){var o=Object(st.h)(Ht,{context:t.context},e),i=a(o,n),s=i._component||i.base;return r&&r.call(s,i),s}function c(t){s(this,t.vnode,t.container)}function u(t,e){return Object(st.h)(c,{vnode:t,container:e})}function l(t){var e=t._preactCompatRendered&&t._preactCompatRendered.base;return!(!e||e.parentNode!==t)&&(Object(st.render)(Object(st.h)(r),t,e),!0)}function p(t){return y.bind(null,t)}function d(t,e){for(var n=e||0;n<t.length;n++){var r=t[n];Array.isArray(r)?d(r):r&&"object"==typeof r&&!v(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(t[n]=y(r.type||r.nodeName,r.props||r.attributes,r.children))}}function f(t){return"function"==typeof t&&!(t.prototype&&t.prototype.render)}function h(t){return A({displayName:t.displayName||t.name,render:function(){return t(this.props,this.context)}})}function b(t){var e=t[wt];return e?!0===e?t:e:(e=h(t),Object.defineProperty(e,wt,{configurable:!0,value:!0}),e.displayName=t.displayName,e.propTypes=t.propTypes,e.defaultProps=t.defaultProps,Object.defineProperty(t,wt,{configurable:!0,value:e}),e)}function y(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return d(t,2),m(st.h.apply(void 0,t))}function m(t){t.preactCompatNormalized=!0,w(t),f(t.nodeName)&&(t.nodeName=b(t.nodeName));var e=t.attributes.ref,n=e&&typeof e;return!xt||"string"!==n&&"number"!==n||(t.attributes.ref=g(e,xt)),O(t),t}function _(t,e){for(var n=[],r=arguments.length-2;r-- >0;)n[r]=arguments[r+2];if(!v(t))return t;var o=t.attributes||t.props,i=Object(st.h)(t.nodeName||t.type,C({},o),t.children||o&&o.children),a=[i,e];return n&&n.length?a.push(n):e&&e.children&&a.push(e.children),m(st.cloneElement.apply(void 0,a))}function v(t){return t&&(t instanceof At||t.$$typeof===Ot)}function g(t,e){return e._refProxies[t]||(e._refProxies[t]=function(n){e&&e.refs&&(e.refs[t]=n,null===n&&(delete e._refProxies[t],e=null))})}function O(t){var e=t.nodeName,n=t.attributes;if(n&&"string"==typeof e){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange&&("textarea"===e||"input"===e.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=N([n[i],n[r.onchange]]),delete n[r.onchange])}}}function w(t){var e=t.attributes||(t.attributes={});Dt.enumerable="className"in e,e.className&&(e.class=e.className),Object.defineProperty(e,"className",Dt)}function C(t){for(var e=arguments,n=1,r=void 0;n<arguments.length;n++)if(r=e[n])for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o]);return t}function T(t,e){for(var n in t)if(!(n in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}function P(t){return t&&t.base||null}function E(){}function A(t){function e(t,e){H(this),R.call(this,t,e,Pt),M.call(this,t,e)}return t=C({constructor:e},t),t.mixins&&j(t,k(t.mixins)),t.statics&&C(e,t.statics),t.propTypes&&(e.propTypes=t.propTypes),t.defaultProps&&(e.defaultProps=t.defaultProps),t.getDefaultProps&&(e.defaultProps=t.getDefaultProps.call(e)),E.prototype=R.prototype,e.prototype=C(new E,t),e.displayName=t.displayName||"Component",e}function k(t){for(var e={},n=0;n<t.length;n++){var r=t[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(e[o]||(e[o]=[])).push(r[o])}return e}function j(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=N(e[n].concat(t[n]||Nt),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}function H(t){for(var e in t){var n=t[e];"function"!=typeof n||n.__bound||Ct.hasOwnProperty(e)||((t[e]=n.bind(t)).__bound=!0)}}function x(t,e,n){if("string"==typeof e&&(e=t.constructor.prototype[e]),"function"==typeof e)return e.apply(t,n)}function N(t,e){return function(){for(var n,r=arguments,o=this,i=0;i<t.length;i++){var a=x(o,t[i],r);if(e&&null!=a){n||(n={});for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])}else void 0!==a&&(n=a)}return n}}function M(t,e){I.call(this,t,e),this.componentWillReceiveProps=N([I,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=N([I,S,this.render||"render",D])}function I(t){if(t){var e=t.children;if(e&&Array.isArray(e)&&1===e.length&&("string"==typeof e[0]||"function"==typeof e[0]||e[0]instanceof At)&&(t.children=e[0])&&"object"==typeof t.children&&(t.children.length=1,t.children[0]=t.children),Et){var n="function"==typeof this?this:this.constructor,r=this.propTypes||n.propTypes,o=this.displayName||n.name;r&&vt.a.checkPropTypes(r,t,"prop",o)}}}function S(){xt=this}function D(){xt===this&&(xt=null)}function R(t,e,n){st.Component.call(this,t,e),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},n!==Pt&&M.call(this,t,e)}function L(t,e){R.call(this,t,e)}function U(t){t()}function V(t){return Lt.isValidElement(t)&&"string"==typeof t.type}function F(t){var e=t?t.trim():"0px",n=e.split(/\s+/).map(function(t){if(!Ut.test(t))throw new Error("rootMargin must be a string literal containing pixels and/or percent values");return t}),r=n[0],o=void 0===r?"0px":r,i=n[1],a=void 0===i?o:i,s=n[2],c=void 0===s?o:s,u=n[3];return o+" "+a+" "+c+" "+(void 0===u?a:u)}function W(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length?t.some(function(n,r){return W(t[r],e[r])}):t!==e}function B(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.root||null,n=F(t.rootMargin),r=Array.isArray(t.threshold)?t.threshold:[null!=t.threshold?t.threshold:0],o=Vt.keys(),i=void 0;i=o.next().value;){if(!(e!==i.root||n!==i.rootMargin||W(r,i.thresholds)))return i}return null}function q(t,e){var n=Vt.get(t);if(n)for(var r=n.values(),o=void 0;o=r.next().value;)if(o.target===e.target)return o;return null}function z(t,e){for(var n=0;n<t.length;n++){var r=q(e,t[n]);r&&r.handleChange(t[n])}}function G(t){return B(t)||new IntersectionObserver(z,t)}function X(t){Vt.has(t.observer)||Vt.set(t.observer,new Set),Vt.get(t.observer).add(t),t.observer.observe(t.target)}function K(t){if(Vt.has(t.observer)){var e=Vt.get(t.observer);e.delete(t)&&(e.size>0?t.observer.unobserve(t.target):(t.observer.disconnect(),Vt.delete(t.observer)))}}function $(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function Y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function Z(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function J(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function tt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function nt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function rt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function at(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var st=n("KM04"),ct=n("E/bI"),ut=n("+XMp"),lt=n.n(ut),pt=(n("pln1"),n("ZAL5")),dt=n.n(pt),ft=n("NpIc"),ht=n("sJaT"),bt=n.n(ht),yt=n("Ym6P"),mt=n.n(yt),_t=(n("3onB"),n("UlEV"),n("5D9O")),vt=n.n(_t),gt="a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" "),Ot="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,wt="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",Ct={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},Tt=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,Pt={},Et="undefined"!=typeof process&&process.env&&!1,At=Object(st.h)("a",null).constructor;At.prototype.$$typeof=Ot,At.prototype.preactCompatUpgraded=!1,At.prototype.preactCompatNormalized=!1,Object.defineProperty(At.prototype,"type",{get:function(){return this.nodeName},set:function(t){this.nodeName=t},configurable:!0}),Object.defineProperty(At.prototype,"props",{get:function(){return this.attributes},set:function(t){this.attributes=t},configurable:!0});var kt=st.options.event;st.options.event=function(t){return kt&&(t=kt(t)),t.persist=Object,t.nativeEvent=t,t};var jt=st.options.vnode;st.options.vnode=function(t){if(!t.preactCompatUpgraded){t.preactCompatUpgraded=!0;var e=t.nodeName,n=t.attributes=null==t.attributes?{}:C({},t.attributes);"function"==typeof e?(!0===e[wt]||e.prototype&&"isReactComponent"in e.prototype)&&(t.children&&""===String(t.children)&&(t.children=void 0),t.children&&(n.children=t.children),t.preactCompatNormalized||m(t),o(t)):(t.children&&""===String(t.children)&&(t.children=void 0),t.children&&(n.children=t.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),i(t,n))}jt&&jt(t)};var Ht=function(){};Ht.prototype.getChildContext=function(){return this.props.context},Ht.prototype.render=function(t){return t.children[0]};for(var xt,Nt=[],Mt={map:function(t,e,n){return null==t?null:(t=Mt.toArray(t),n&&n!==t&&(e=e.bind(n)),t.map(e))},forEach:function(t,e,n){if(null==t)return null;t=Mt.toArray(t),n&&n!==t&&(e=e.bind(n)),t.forEach(e)},count:function(t){return t&&t.length||0},only:function(t){if(t=Mt.toArray(t),1!==t.length)throw new Error("Children.only() expects only one child.");return t[0]},toArray:function(t){return null==t?[]:Nt.concat(t)}},It={},St=gt.length;St--;)It[gt[St]]=p(gt[St]);var Dt={configurable:!0,get:function(){return this.class},set:function(t){this.class=t}};C(R.prototype=new st.Component,{constructor:R,isReactComponent:{},replaceState:function(t,e){var n=this;this.setState(t,e);for(var r in n.state)r in t||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),E.prototype=R.prototype,L.prototype=new E,L.prototype.isPureReactComponent=!0,L.prototype.shouldComponentUpdate=function(t,e){return T(this.props,t)||T(this.state,e)};var Rt={version:"15.1.0",DOM:It,PropTypes:vt.a,Children:Mt,render:a,createClass:A,createPortal:u,createFactory:p,createElement:y,cloneElement:_,isValidElement:v,findDOMNode:P,unmountComponentAtNode:l,Component:R,PureComponent:L,unstable_renderSubtreeIntoContainer:s,unstable_batchedUpdates:U,__spread:C},Lt=Rt,Ut=(n("2gTp"),n("/sXU"),/^-?\d*\.?\d+(px|%)$/),Vt=new Map,Ft=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Wt=["root","rootMargin","threshold"],Bt=["disabled"].concat(Wt),qt=Object.prototype,zt=function(t){function e(){for(var e,n,r,o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=n=$(this,t.call.apply(t,[this].concat(i))),n.handleChange=function(t){n.props.onChange(t,n.unobserve),n.props.onlyOnce&&t.isIntersecting&&n.unobserve()},n.handleNode=function(t){"function"==typeof n.props.children.ref&&n.props.children.ref(t),n.targetChanged=null!=(n.renderedTarget&&t)&&n.renderedTarget!==t,n.targetChanged&&n.unobserve(),n.target=t},n.observe=function(){n.target=V(n.target)?n.target:P(n.target),n.observer=G(n.options),X(n)},n.unobserve=function(){null!=n.target&&K(n)},r=e,$(n,r)}return Y(e,t),e.prototype.componentDidMount=function(){this.props.disabled||this.observe()},e.prototype.componentDidUpdate=function(t){var e=this,n=Bt.some(function(n){return W(e.props[n],t[n])});n&&this.unobserve(),(this.targetChanged||n)&&(this.props.disabled||this.observe())},e.prototype.componentWillUnmount=function(){this.unobserve()},e.prototype.render=function(){return this.renderedTarget=this.target,Lt.cloneElement(Lt.Children.only(this.props.children),{ref:this.handleNode})},Ft(e,[{key:"options",get:function(){var t=this;return Wt.reduce(function(e,n){if(qt.hasOwnProperty.call(t.props,n)){e[n]="root"===n&&"[object String]"===qt.toString.call(t.props[n])?document.querySelector(t.props[n]):t.props[n]}return e},{})}}]),e}(Lt.Component);zt.displayName="IntersectionObserver";var Gt=zt,Xt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Kt=function(t){function e(){var n,r,o;J(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return n=r=Q(this,t.call.apply(t,[this].concat(a))),r.state={isIntersecting:!1},r.handleChange=function(t){r.setState({isIntersecting:t.isIntersecting})},o=n,Q(r,o)}return tt(e,t),e.prototype.render=function(){var t="IntersectionObserver"in window,e=this.props,n=e.children,r=Z(e,["children"]),o=n[0](!t||this.state.isIntersecting);return t?Object(st.h)(Gt,Xt({},r,{onChange:this.handleChange}),o):Object(st.h)("div",null,o)},e}(st.Component),$t=function(t){function e(){return et(this,e),nt(this,t.apply(this,arguments))}return rt(e,t),e.prototype.render=function(t){var e={rootMargin:"300px 0px"};return Object(st.h)(Kt,e,function(e){return Object(st.h)(bt.a,{class:dt.a.news},Object(st.h)("a",{class:dt.a.cardHeader,style:e?"background-image:url("+t.news.img+")":""},Object(st.h)("div",{class:dt.a["headline-shadow"]},Object(st.h)("div",null,Object(st.h)(mt.a,{headline6:!0,class:dt.a.headline},t.news.headline)),Object(st.h)("div",null,Object(st.h)(mt.a,{caption:!0,class:dt.a.headline},"by ",t.news.author)))))})},e}(st.Component),Yt=function(t){function e(){return ot(this,e),it(this,t.apply(this,arguments))}return at(e,t),e.prototype.componentDidMount=function(){var t=this;this.bar.MDComponent.show({message:"Fetching fresh content."}),caches.match("api/fetch/national").then(function(e){e&&e.ok&&e.json().then(function(e){0===t.props.reducer.news.length&&t.props.dispatch({type:ft.a,data:e})})}),this.props.dispatch(Object(ft.b)())},e.prototype.render=function(t){var e=this;return Object(st.h)("div",{class:dt.a.home},t.reducer.news.map(function(t){return Object(st.h)($t,{news:t})}),Object(st.h)(lt.a,{ref:function(t){e.bar=t,window.snackbar=t}}))},e}(st.Component);e.default=Object(ct.b)(function(t){return{reducer:t.reducer}})(Yt)},pln1:function(){},sJaT:function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function i(t){return t&&t.__esModule?t:{default:t}}function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},a.apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("7/cg")),c=i(n("MeGi")),u=i(n("lhA9")),l=n("KM04"),p=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card",e._mdcProps=["outlined"],e}return o(e,t),e}(u.default),d=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__actions",e._mdcProps=["full-bleed"],e}return o(e,t),e}(u.default),f=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__media",e._mdcProps=["square","16-9"],e}return o(e,t),e}(u.default),h=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__action",e}return o(e,t),e.prototype.materialDom=function(t){return(0,l.h)("button",a({className:"mdc-button mdc-card__action--button"},t,{ref:this.setControlRef}),t.children)},e}(s.default),b=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__action-icons",e}return o(e,t),e}(u.default),y=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__action",e}return o(e,t),e.prototype.materialDom=function(e){return e.className="mdc-card__action--icon",t.prototype.materialDom.call(this,e)},e}(c.default),m=function(t){function e(){var e=r(this,t.call(this));return e.componentName="card__media-content",e}return o(e,t),e}(u.default);p.Actions=d,p.ActionButton=h,p.ActionIcons=b,p.ActionIcon=y,p.Media=f,p.CardMediaContent=m,e.default=p},wVGV:function(t,e,n){"use strict";function r(){}var o=n("Asjh");t.exports=function(){function t(t,e,n,r,i,a){if(a!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}}});
//# sourceMappingURL=route-home.chunk.29a87.js.map