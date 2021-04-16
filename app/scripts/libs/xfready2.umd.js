(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xfready2 = {}));
}(this, (function (exports) { 'use strict';

    function e(t,e=null,n=["rerun the code 10 times"],i=null,r=!1){if(!M()&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function n(){if(!M())return null;console.log(...arguments);}function i(){if(!M())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class r{constructor(t){this.self=t,this.actions=new Map,this.delete=this.destroy;}addWithKey(t,e=null){return e=e||this.actions.size,this.actions.set(e,t),e}add(...t){let e=[];for(let n of t)e.push(this.addWithKey(n));return e.length>1?e:e[0]}forAction(t){for(let[e,n]of this.actions)t(e,n);}exec(...t){this.execAs(this.self,...t);}destroy(...t){t.forEach((t=>this.actions.delete(t)));}execAs(t,...e){this.forAction(((n,i)=>{let r=null;if(r="function"==typeof i.bind?i.bind(t)(...e):i(...e),"function"==typeof r){r({key:n,action:i,replaceWith:t=>{},selfDestruct:()=>{this.destroy(n);}});}}));}}function s(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function o(){return a(8)}function a(t=7){return t<5?s():(s()+a(t-5)).substring(0,t)}function h(t){return a(t)}function l(t,e){for(let[n,i]of Object.entries(e))t[n]=i;return t}const c=t=>t.replace(/([-_]\w)/g,(t=>t[1].toUpperCase()));function u(t,e){let n=`${t}Chain`,i=`on${t.capitalize()}`;return e[n]=new r(e),e[i]=function(t,i){e[n].addWithKey(t,i);},{chainName:n,eventName:i}}function f(t,...e){for(let n of e)u(n,t);}function d(t,e){let n=u(t,e),i=`is${t.capitalize()}ed`;e[n.chainName].add((()=>{e[i]=!0;})),e[n.eventName]=function(t){if(e[i])return t(e);e[n.chainName].add(t);};}function p(t,...e){for(let n of e)d(n,t);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const g=t=>t.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),p(globalThis.pragmaSpace,"docLoad");const m=globalThis.pragmaSpace.onDocLoad;function y(){globalThis.pragmaSpace.isDocLoaded||(i("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&y();})),document.addEventListener("turbolinks:load",(()=>{i("🚀 TURBOLINKS loaded"),y();}));var v=/[#.]/g;function x(t,e="div"){var n=t||"",i={tag:e},r=0;let s,o,a;for(;r<n.length;)v.lastIndex=r,a=v.exec(n),s=n.slice(r,a?a.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),a&&(o=a[0],r++);return i}function b(t,n,i){if(!Array.isArray(t))return e(`Could not ${i} class [${t}] -> [${n}]`);for(let e of t){let t=e.split(" ");t.length>1?b(t,n,i):n.classList[i](e);}}function _(t,e){b(t,e,"add");}function $(t,e){b(t,e,"remove");}function C(t,e){b(t,e,"toggle");}function E(t){t=t.trim();try{let e=document.querySelector(t);if(e)return e}catch{}let e=x(t),n=document.createElement(e.tag||"div");return e.id&&(n.id=e.id),e.class&&_(e.class,n),n}function T(t){return document.createRange().createContextualFragment(t)}function w(t){return t instanceof Element?t:"string"==typeof t?"<"===t[0]?T(t):E(t):e(`Could not find/create element from [${t}]`)}const A={html:(t,e)=>{e.innerHTML=t;},pcss:(t,e)=>{for(let[n,i]of S.cssToDict(t))e.style[c(n)]=i;}},S={cssToDict:t=>{t=t.replace(/\n/g,";").replace(/:/g," ");let n=new Map;for(let e of t.split(";")){if(e.replace(/\s/g,"").length<2)continue;e=e.trim().split(" ");let t=e[0];e.shift(),n.set(t.trim(),e.join(" ").trim());}let i=[];for(const[t,e]of n.entries())CSS.supports(t,e)||i.push(`${t.trim()}: ${e.trim()}`);return i.length>0&&e("CSS syntax error","typos",i),n},css:t=>{let e="";for(let[n,i]of S.cssToDict(t))e+=`${n}:${i};`;return e},html:t=>t};function M(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV;var O=Object.freeze({__proto__:null,_deving:M,throwSoft:e,log:n,suc:i,whenDOM:m,parseQuery:x,addClassAryTo:_,removeClassAryFrom:$,toggleClassAryOf:C,selectOrCreateDOM:E,elementFrom:w,toHTMLAttr:g,fragmentFromString:T,fillSVG:function(t,e){j(t).findAll("path").forEach((t=>{const n=t.attr("fill");"none"!=n&&"transparent"!=n&&t.attr("fill",e);}));},generateRandomKey:h,objDiff:l,aryDiff:function(t,e){return t.filter((t=>e.indexOf(t)<0))},_extend:function(t,e){Object.setPrototypeOf(t,l(Object.getPrototypeOf(t),e));},overwrite:function(t,e,n){let i=t[e];t[`_${e}`]=i.bind(t),t[e]=n;},createEventChains:p,createChains:f,snake2camel:c,mimic:function(t,e,n){for(let i of n||Object.keys(e)){let n=Object.getOwnPropertyDescriptor(e,i);if(!n)break;Object.defineProperty(t,i,n);}},bench:function(t,e){console.time(e),t(),console.timeEnd(e);},addStyles:function(t,e="injected-pragma-style"){j(`style#${e}-${s()}`,t).appendTo("head");},rk:a,rk5:s,rk8:o,parse:S,apply:A,createTemplate:t=>(new q).run((function(){f(this,"config"),this.config=function(t){return this.configChain.exec(t),this},this.onConfig(((t={})=>{["events","chains","exports","persistentExports"].forEach((e=>{t[e]&&(this[`_${e}`]=t[e],delete t[e]);})),this._events&&p(this,...this._events),this._chains&&f(this,...this._chains);for(let[e,n]of Object.entries(t))this[e]=n,this.export(e);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof t&&this.config(t);}))});function k(t){if(null==t||null==t)return e(`Could not find a DOM element for ${t}`);if(t.element)return k(t.element);return w(t)}function j(t,e){let n=k(t);var i,r;return n.constructor===DocumentFragment&&(i=n,(r=document.createElement("template")).appendChild(i.cloneNode(!0)),n=r.firstChild),n instanceof Element&&(n.init(),n._render()),"string"==typeof e&&n.html(e),n}const L={init:function(){this.isPragmaElement=!0,p(this,"docLoad","render"),m((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.prepend(this),this._render();})),this},append:function(...t){return this.onRender((()=>{for(let e of t){let t=k(e);this.appendChild(t);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(t){return this.onRender((()=>{A.pcss(t,this);})),this},setText:function(t){return t?(this.onRender((()=>{this.textContent=t;})),this):this.text},html:function(t){return t?(this.onRender((()=>{A.html(t,this);})),this):this.innerHTML},setId:function(t){return this.id=t,this},setData:function(t){for(let[e,n]of Object.entries(t))this.dataset[e]=n;return this},getData:function(t){return this.dataset[t]},addClass:function(...t){return _(t,this),this},removeClass:function(...t){return $(t,this),this},toggleClass:function(...t){return C(t,this),this},listenTo:function(...t){return this.onRender((()=>{this.addEventListener(...t);})),this},attr:function(t,e){if("string"==typeof t){if(void 0===e)return this.getAttribute(t);const n=t;(t={})[n]=e;}for(let[e,n]of Object.entries(t))this.setAttribute(e,n);return this},find:function(){return j(this.query(...arguments))},findAll:function(t){return Array.from(this.queryAll(t)).map((t=>j(t)))},query:function(){return this.querySelector(...arguments)},queryAll:function(t){return this.querySelectorAll(t)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(t){let e=Array.from(this.queryAll(t));for(let n of this.children)e=e.concat(n.deepQueryAll(t));return e},deepFindAll:function(t){return this.deepQueryAll(t).map((t=>j(t)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(t){if(t){["width","height","left","right","top","bottom"].forEach((e=>{e in t&&(this.style[e]=t[e]+"px");}));}var e=this.rect();return {top:e.top+window.scrollY,left:e.left+window.scrollX}},x:function(t){return this.left+this.width/2-t/2}},D={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[t,e]of Object.entries(L))Element.prototype[t]=e;for(let[t,e]of Object.entries(D))Object.defineProperty(Element.prototype,t,{get:e,configurable:!0});class P{constructor(t){this._childMap=new Map,this.key="string"==typeof t?t:o(),this.containsKey=this.childMap.has;}set childMap(t){for(let[e,n]of t)n instanceof P&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let n=e.allChildren;n&&(t=t.concat(n));}return t}get(t){return this.childMap.get(t)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let e of this.childMap.values()){let n;try{n=e.find(t);}catch{}if(n)return n}}adopt(...t){for(let e of t)this.add(e);return this}add(t,n=!1){return t?!n&&this.childMap.has(t.key)?(t.key=`${t.key}<${s()}`,this.add(t)):(t.parent=this,void this.childMap.set(t.key,t)):e(`Could not add [${t}] to [${this.id}]`)}delete(t){return this.remove(t)}remove(t){this.childMap.get(t)&&this.childMap.delete(t);}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let n of this.children)e+=n.shapePrefix(t);}return e}}const R={parent:(t,e)=>{t.parent=e;},value:(t,e)=>{t.value=e;},key:(t,e)=>{t.key=e;},class:(t,e)=>{t._class=e;},element:(t,n)=>{if(!(n instanceof Element))return e(`Could not add ${n} as the element of [${t}]`);t.element=n;},children:(t,e)=>{if(e.constructor==Array)return t.buildAry(e);t.build(e);},childTemplate:(t,e)=>{}};function z(t,e){return {val:t,set:e}}function N(t,e){return t=e.min?Math.max(e.min,t):t,t=e.max?Math.min(e.max,t):t}function K(t,n){return function(t){return t&&null!=t.min&&null!=t.max}(n)?(null==t&&(t=n.min),t=(t=t>n.max?n.min:t)<n.min?n.max:t):e(`Could not loop value, since range (${JSON.stringify(n)}) is unbounded`)}class q extends P{constructor(t,e){super(),p(this,"export"),this.actionChain=new r,this._events=new Map,"object"==typeof t?function(t,e){let n=new Map;for(let[i,r]of Object.entries(t))R.hasOwnProperty(i)?R[i](e,r):n.set(i,r);e.element&&e.element.whenInDOM((t=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();t.listenTo(n,(()=>{e.action(r);}));}}));}(t,this):this.key=t,this.element||this.as();}listenTo(t,e){return this.element.listenTo(t,e.bind(this)),this}_addToEventChain(t,...e){let n=this._events.get(t);if(n){let i=n.add(...e);return this._events.set(t,n),i}return null}createEvent(t,...e){let n=new r(this);return this._events.set(t,n),e.length>0&&this.on(t,e),this}createEvents(...t){return t.forEach((t=>{this.createEvent(t);})),this}triggerEvents(t,...e){return t.forEach((t=>{this.triggerEvent(t,...e);})),this}triggerEvent(e,...n){return this._events.has(e)?(this._events.get(e).execAs(this,...n),this):O.throwSoft(`pragma doesnt have ${event} - cannot .triggerEvent("${event}")]`,this)}_on(e,...n){let i=this._addToEventChain(e,...n);return null===i?O.throwSoft(`pragma doesnt have ${e} - cannot .on("${e}")`,this):i}on(){return this._on(...arguments),this}_onNext(t,e){this._on(t,(function(){return e(...arguments),t=>{t.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...t){return t.forEach((t=>this.createWire(t))),this}createWire(t){let e={change:`${t}Change`,set:`${t}Set`};return this.createEvents(e.change,e.set),Object.defineProperty(this,t,{set:n=>{let i=function(t,e,n){if(n)return z(K(t,n),!0);if(e){let n=N(t,e);return z(n,n===t)}return z(t,!0)}(n,this[`_${t}Range`],this[`_${t}Loop`]);const r=this[`_${t}`];i.set&&i.val!==r&&(this[`_${t}`]=i.val,this.triggerEvent(e.change,i.val,r)),this.triggerEvent(e.set,n,r);},get:()=>this[`_${t}`]}),this[`set${t.capitalize()}`]=e=>(this[`${t}`]=e,this),this[`set${t.capitalize()}Silently`]=e=>(this[`_${t}`]=e,this),this[`set${t.capitalize()}Loop`]=(e,n)=>(this[`_${t}Loop`]={min:e,max:n},this),this[`set${t.capitalize()}Range`]=(e,n)=>(this[`_${t}Range`]={min:e,max:n},this),this}get _e(){return this.element}setElement(t,e=!0){return this.elementDOM=t,e&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(t){this.setElement(t);}setRange(t=null,e=null){return this.range=this.range||{},this.range.min=null===t?this.range.min:t,this.range.max=null===e?this.range.max:e,this}breakLoop(){return this._loopVal=!1,this}setLoop(t,e){return this.setRange(t,e),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(t){return this.value=t,this}set value(t){let e=function(t,e,n){if(!e)return z(t,!0);if(n)return z(K(t,e),!0);let i=N(t,e);return z(i,i==t)}(t,this.range,this._loopVal);e.set&&(this._lv=this.v,this.v=e.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(t){return this.key=t,this}set key(t){this._KEY=null==t?h():t;}get key(){return this._KEY}set id(t){this.element&&(this.element.id=this.id);}get id(){return g(this.key)}buildAry(t){for(let e of t)this.add(new q(e,this));return this}build(...t){return this.buildAry(t)}as(t=null,e){return t=t||`div#${this.id}.pragma`,this.setElement(j(t,e),!1),this}addExport(t){this.exports=this.exports||new Set,this.exports.add(t);}export(...t){for(let e of t)this.addExport(e);}import(...e){let n=new r;for(let i of e)"function"==typeof i&&(i=i()),i.exports&&O.mimic(this,i,i.exports),i.exportChain&&n.add((t=>{i.exportChain.exec(this);}));return n.exec(),this}from(e){return e.exports&&O.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(t){let e=this;return t.do((function(){e.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,n){return O.overwrite(this,e,n),this}run(...t){let n=t[0];return "function"==typeof n?this._runAry(t):"object"==typeof n?this._runAry(Object.values(n)):e(`Could not run [${t}] as [${this}]`),this}_runAry(t){for(let e of t)this.runAs(e);}runAs(t){return t.bind(this)()}containAry(t,n="append"){for(let i of t)super.add(i),i.isRendered?e(`[${i}] is already appended`):this.element[n](i);return this}contain(...t){return this.containAry(t)}containFirst(...t){return this.containAry(t.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(t){return this.element.appendTo(t),this}addListeners(t){for(let[e,n]of Object.entries(t))this.on(e).do(n);return this}}const W=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let t of W)q.prototype[t]=function(){return this.element[t](...arguments),this};const F=["getData"];for(let t of F)q.prototype[t]=function(){return this.element[t](...arguments)};const I=["offset","text","top","left","width","height","x","classArray"];for(let t of I)Object.defineProperty(q.prototype,t,{get:function(){return this.element[t]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(t){"function"==typeof t&&(q.prototype.bind=function(e,n,i){let r=this;return t.bind(e,(function(){return r.runAs(n)}),i),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(t){n("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class V extends q{static load(t,e=o()){return console.time(`${e} load`),new Promise((n=>{j(`script#${e}-loader crossorigin`).appendTo("head").listenTo("load",(function(){n(),console.timeEnd(`${e} load`);})).attr("src",t);}))}}function U(t){let e=`\n    onmessage = e => postMessage(JSON.stringify((${t.toString()})(e.data))) \n  `;var n=new Blob([e],{type:"application/javascript"}),i=new Worker(URL.createObjectURL(n));return function(){return i.postMessage(arguments),new Promise((t=>{i.addEventListener("message",(e=>t(JSON.parse(e.data))));}))}}function B(t){return new Promise((e=>e(t())))}function Q(...t){return B((()=>{for(let e of t)B(e);}))}const H=(t,e)=>new q(t,e),J=H,Y=["_e","_p","Pragma","util","_thread"];function G(){let t=(globalThis||window).pragma;if("undefined"!==t&&t.__esModule)for(let e of Y)globalThis[e]=t[e];else console.error("Could not globalify [pragma]");}function X(t,...e){return j(e.reduce(((e,n,i)=>`${e}${n}${t[i+1]}`),t[0]).trim())}function Z(t){window.location.href=t;}

    var pragmajs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ActionChain: r,
        Pragma: q,
        Script: V,
        _e: j,
        _p: J,
        _runAsync: B,
        _thread: U,
        globalify: G,
        html: X,
        render: Z,
        runAsync: Q,
        util: O,
        π: H
    });

    var pragmas = /*#__PURE__*/Object.freeze({
        __proto__: null
    });

    var main = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;500;600&family=IBM+Plex+Sans&display=swap);div[xfready]{all:initial;font-family:'IBM Plex Sans',sans-serif}div[xfready] h1,div[xfready] h2,div[xfready] h3,div[xfready] h4,div[xfready] h5,div[xfready] h6{font-family:'IBM Plex Mono',monospace}div[xfready] p{font-family:'IBM Plex Sans',sans-serif}div[xfready][popup]{background-color:black;position:fixed;z-index:99999999999;width:2000px;height:2000px;user-select:none;width:281px;height:fit-content;box-shadow:rgba(0,0,0,0.1) 0 0 10px;position:fixed;top:10px;right:5px;z-index:2147483647;font-size:17px;box-sizing:content-box !important;background:white;border-radius:5px;padding:10px}div[xfready] .page-container{height:100vh}div[xfready] .flex-center{display:flex;align-items:center;justify-content:center;flex-direction:column}div.fade-onload[xfready]{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{div.fade-onload[xfready] from{opacity:0}div.fade-onload[xfready] to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}";
    var styles = {
    	main: main
    };

    var model = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>model</title><path d=\"M23.5,4H8.5L1.7158,13.0454,16,29.5269,30.2842,13.0454ZM27,12H21.5543l-3.75-6H22.5ZM10.3021,14l3.7536,10.23L5.19,14Zm2.13,0H19.568l-3.569,9.7212Zm.3725-2L16,6.8867,19.1957,12Zm8.8935,2H26.81L17.9427,24.2314ZM9.5,6h4.6957l-3.75,6H5Z\" transform=\"translate(0 0)\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
    var umbrella = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: none;\n      }\n    </style>\n  </defs>\n  <title>umbrella</title>\n  <path d=\"M29.9854,15.83A14.3808,14.3808,0,0,0,17,4.0464V2H15V4.0464A14.3808,14.3808,0,0,0,2.0146,15.83,1,1,0,0,0,3.51,16.86,4.8551,4.8551,0,0,1,6,16a4.8653,4.8653,0,0,1,4.1406,2.5107,1.0393,1.0393,0,0,0,1.7188,0A5.02,5.02,0,0,1,15,16.1255V25.5a2.5,2.5,0,0,1-5,0V25H8v.5a4.5,4.5,0,0,0,9,0V16.1255a5.02,5.02,0,0,1,3.1406,2.3852.9994.9994,0,0,0,1.7188,0A4.8653,4.8653,0,0,1,26,16a4.8551,4.8551,0,0,1,2.49.86,1,1,0,0,0,1.4957-1.03ZM6,14a5.4079,5.4079,0,0,0-1.5034.2134,12.4411,12.4411,0,0,1,8.488-7.8145A14.5157,14.5157,0,0,0,9.939,15.333,6.5439,6.5439,0,0,0,6,14Zm10,0a6.5528,6.5528,0,0,0-4.0564,1.4307c.0378-2.22.6089-6.49,4.0563-9.1763,3.4308,2.6768,4.0091,6.9487,4.0525,9.1728A6.553,6.553,0,0,0,16,14Zm10,0a6.5439,6.5439,0,0,0-3.939,1.333,14.5164,14.5164,0,0,0-3.0456-8.9341,12.4411,12.4411,0,0,1,8.488,7.8145A5.4079,5.4079,0,0,0,26,14Z\"/>\n  <rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/>\n</svg>\n";
    var chemistry = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>chemistry</title><path d=\"M27.2314,23.6182,20,13.6748V4h2V2H10V4h2v9.6748L4.7686,23.6182A4.0183,4.0183,0,0,0,8.0186,30H23.9814a4.0183,4.0183,0,0,0,3.25-6.3818ZM14,14.3252V4h4V14.3252L20.6728,18H11.3272ZM23.9814,28H8.0186a2.0192,2.0192,0,0,1-1.6329-3.2061L9.8726,20H22.1274l3.4869,4.7939A2.0192,2.0192,0,0,1,23.9814,28Z\" transform=\"translate(0 0)\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
    var dna = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>dna</title><path d=\"M22,2V1H20V2a7.04,7.04,0,0,1-.08,1H12.08A7.04,7.04,0,0,1,12,2V1H10V2c0,3.7549,1.9707,5.6035,4.1008,7C11.9707,10.3965,10,12.2451,10,16s1.9707,5.6035,4.1008,7C11.9707,24.3965,10,26.2451,10,30v1h2V30a7.04,7.04,0,0,1,.08-1H19.92A7.04,7.04,0,0,1,20,30v1h2V30c0-3.7549-1.9707-5.6035-4.1008-7C20.0293,21.6035,22,19.7549,22,16s-1.9707-5.6035-4.1008-7C20.0293,7.6035,22,5.7549,22,2ZM20,16a7.04,7.04,0,0,1-.08,1H12.08a6.3212,6.3212,0,0,1,0-2H19.92A7.04,7.04,0,0,1,20,16Zm-.7559,11H12.7559A8.9078,8.9078,0,0,1,16,24.17,8.9078,8.9078,0,0,1,19.2441,27ZM16,21.83A8.9078,8.9078,0,0,1,12.7559,19h6.4882A8.9078,8.9078,0,0,1,16,21.83ZM19.2441,13H12.7559A8.9078,8.9078,0,0,1,16,10.17,8.9078,8.9078,0,0,1,19.2441,13ZM16,7.83A8.9078,8.9078,0,0,1,12.7559,5h6.4882A8.9078,8.9078,0,0,1,16,7.83Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
    var microscope = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>microscope</title><path d=\"M25.3943,24a7.8772,7.8772,0,0,0-1.6707-8.5684,3.918,3.918,0,0,0-1.0844-4.414l2.7759-2.7759a2.0025,2.0025,0,0,0,0-2.8286L22.5869,2.5849a2.0021,2.0021,0,0,0-2.8286,0L6.5859,15.7573a2.0027,2.0027,0,0,0,0,2.8286l2.8282,2.8282a2.0024,2.0024,0,0,0,2.8286,0l4.7749-4.7754a3.9329,3.9329,0,0,0,5.5139.4326A5.9442,5.9442,0,0,1,23.1775,24H16v4H4v2H28V24ZM10.8281,20,8,17.1714,9.8787,15.293l2.8283,2.8281ZM16,14a3.9811,3.9811,0,0,0,.0762.7524L14.1211,16.707l-2.8284-2.8281,9.88-9.88L24.001,6.8271l-3.2488,3.2491A3.9771,3.9771,0,0,0,16,14Zm4,2a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,20,16Zm6,12H18V26h8Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
    var gamification = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>gamification</title><path d=\"M23,23h-.1315l.9635-1.4453A1.0008,1.0008,0,0,0,24,21V12.0005c0-9.8858-7.92-10-8-10A1,1,0,0,0,15,3l-.0005,2H14a.9956.9956,0,0,0-.581.1865l-7,5a1,1,0,0,0-.3676,1.13l1,3a.9976.9976,0,0,0,1.09.6733l4.87-.6958L9.1519,20.47a1,1,0,0,0,.0161,1.085L10.1315,23H10a3.0033,3.0033,0,0,0-3,3v4H26V26A3.0033,3.0033,0,0,0,23,23Zm-7.1519-9.47a1,1,0,0,0-.99-1.52l-6.1738.8819-.5025-1.5078L14.32,7.0005H15.999a1,1,0,0,0,1-.9995L17,4.1289C18.5013,4.4636,21.2167,5.67,21.86,10H19v2h3v2H19v2h3v2H19v2h3v.6973L20.4648,23h-7.93L11.19,20.9824ZM24,28H9V26a1.0009,1.0009,0,0,1,1-1H23a1.0006,1.0006,0,0,1,1,1Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
    var icons = {
    	model: model,
    	umbrella: umbrella,
    	chemistry: chemistry,
    	dna: dna,
    	"linux--alt": "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: none;\n      }\n    </style>\n  </defs>\n  <path d=\"M22.6121,20.5215A6.1582,6.1582,0,0,0,24,16.5254C24,13.4785,21.9812,11,19.5,11A4.2435,4.2435,0,0,0,16,13.06,4.2435,4.2435,0,0,0,12.5,11C10.0188,11,8,13.4785,8,16.5254a6.1593,6.1593,0,0,0,1.3879,3.9961c-.5688.3686-.9389.6416-.988.6787a1,1,0,0,0-.1807,1.4248C8.6592,23.1748,12.6169,28,16,28s7.3408-4.8252,7.7808-5.375A1,1,0,0,0,23.6,21.2C23.551,21.1631,23.1812,20.89,22.6121,20.5215ZM12.5,13c1.3552,0,2.5,1.6143,2.5,3.5254v1.5664a9.1005,9.1005,0,0,0-1.0244.2314A2.6411,2.6411,0,0,0,14,18c0-1.1045-.6716-2-1.5-2s-1.5.8955-1.5,2a2.38,2.38,0,0,0,.4072,1.3623c-.0813.0415-.1687.0806-.248.1221A4.0291,4.0291,0,0,1,10,16.5254C10,14.6143,11.1448,13,12.5,13ZM16,26c-1.5691,0-3.9648-2.084-5.52-3.8057C11.9,21.2788,14.2656,20,16,20s4.1,1.2788,5.52,2.1943C19.9648,23.916,17.5691,26,16,26Zm4.8408-6.5156c-.0793-.0415-.1667-.0806-.248-.1221A2.38,2.38,0,0,0,21,18c0-1.1045-.6716-2-1.5-2s-1.5.8955-1.5,2a2.6411,2.6411,0,0,0,.0244.3232A9.1005,9.1005,0,0,0,17,18.0918V16.5254C17,14.6143,18.1448,13,19.5,13S22,14.6143,22,16.5254A4.0291,4.0291,0,0,1,20.8408,19.4844Z\" transform=\"translate(0 0)\"/>\n  <path d=\"M30,30a3.8876,3.8876,0,0,1-4-4V14A10,10,0,0,0,6,14V26a3.8876,3.8876,0,0,1-4,4V28a1.8793,1.8793,0,0,0,2-2V14a12,12,0,0,1,24,0V26a1.8825,1.8825,0,0,0,2,2Z\" transform=\"translate(0 0)\"/>\n  <rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/>\n</svg>\n",
    	microscope: microscope,
    	gamification: gamification,
    	"palm-tree": "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: none;\n      }\n    </style>\n  </defs>\n  <path d=\"M18.57,28C17.897,26.7251,16,22.2261,16,12v-.1313l1.1172.7446A6.4613,6.4613,0,0,1,20,18h2a8.457,8.457,0,0,0-3.7734-7.0508L16.8027,10h1.5308a7.04,7.04,0,0,1,4.2,1.4L24.4,12.8l1.2-1.6L23.7334,9.8a9.06,9.06,0,0,0-5.4-1.8H17.1172A7.0306,7.0306,0,0,1,22,6h2V4H22a9.035,9.035,0,0,0-7,3.3643A9.035,9.035,0,0,0,8,4H6V6H8a7.0306,7.0306,0,0,1,4.8828,2H11.6665a9.06,9.06,0,0,0-5.4,1.8L4.4,11.2l1.2,1.6L7.4668,11.4a7.04,7.04,0,0,1,4.2-1.4h1.5308l-1.4239.9492A8.457,8.457,0,0,0,8,18h2a6.4613,6.4613,0,0,1,2.8828-5.3867L14,11.8687V12c0,8.9438,1.4116,13.7646,2.3611,16H2v2H30V28Z\" transform=\"translate(0 0)\"/>\n  <rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/>\n</svg>\n"
    };

    const global = {
        injectStyle,
        SVG,
        compose,
        pragmas
    };

    function injectStyle(name) {
        if (!name in styles) return console.error(`could not find ${name}.scss in docs/src/styles`)
        O.addStyles(styles[name]);
    }

    function SVG(name, fill) {
        if (!name in icons) return console.error(`could not find ${name}.svg in docs/src/icons`)
        let i = icons[name];
        if (fill) return j(i).css(`fill ${fill}`).html()
        return i
    }


    function compose() {
        let loader = _e("body").query('[loader]');
        if (loader) {
            loader = _e(loader);
            let transitionTime = parseFloat(loader.getData("transition")) || 0.2;

            loader.css(`
            transition all ${transitionTime}s ease
        `);

            pragmaSpace.onDocLoad(() => {
                loader.css('opacity 0');
                setTimeout(() => {
                    loader.hide();
                }, transitionTime * 1000);
            });
        }
        let _page = _p().as('body');
        console.time("load time");
        _page.element.findAll("[pragma]").forEach(element => {
            let pragmas = new Map;

            Object.keys(element.attributes).filter(v => {
                return element.attributes[v].name[0] == "#"
            }).forEach(v => pragmas.set(element.attributes[v].name.slice(1), element));

            for (let [key, element] of pragmas) {
                _page.adopt(
                    _p(key)
                        .as(element)
                        .run(function () {
                            key = util.snake2camel(key);
                            if (key in _page) {
                                console.log(key);
                                if (Array.isArray(_page[key])) return _page[key] = _page[key].push(this)
                                _page[key] = [_page[key], this];
                                return
                            }

                            _page[key] = this;
                        })
                );
            }

        });

        _page.element.findAll("[element]").forEach(element => {
            let elements = new Map;

            Object.keys(element.attributes).filter(v => {
                return element.attributes[v].name[0] == "#"
            }).forEach(v => elements.set(element.attributes[v].name.slice(1), element));

            for (let [key, element] of elements) {
                _page.adopt(
                    _e(element)
                        .setId(key)
                );
            }
        });

        console.timeEnd("load time");
        window._page = _page;
    }

    // globalifying pragma, and functions
    for (let [key, val] of Object.entries({ ...pragmajs, ...global })) {
        window[key] = val;
    }

    let element = X`
<div xfready popup class='fade-onload'>
    <h1> This is freadys popup </h1>
</div>
`;

    class Popup extends q {
        constructor() {
            super();
            console.log("created new popup", this);
            this.as(element);
        }
    }

    function _popup(){
        return new Popup
    }

    class Xfready extends q {
        constructor() {
            super();
            console.log("created new xfready", this);
            this.as('html');
            // this.setElement('body')

            this.popup = _popup().appendTo(this);
        }
    }

    function xfready2Test(){
        console.log("hello from _xfready2");
    }

    Promise.resolve().then(function () { return pragmajs; }).then(pragmajs => {
        for (let [key, value] of Object.entries(pragmajs)) {
            window[key] = value;
        }
    });

    injectStyle("main");
    window.xfready = new Xfready();

    // window.pragmajs = await import('pragmajs')
    // window.pragmajs.globalify()

    // _e("body").hide()

    exports.SVG = SVG;
    exports.compose = compose;
    exports.icons = icons;
    exports.injectStyle = injectStyle;
    exports.pragmajs = pragmajs;
    exports.pragmas = pragmas;
    exports.styles = styles;
    exports.xfready2Test = xfready2Test;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
