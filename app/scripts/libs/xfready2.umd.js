(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xfready2 = {}));
}(this, (function (exports) { 'use strict';

    function e(t,e=null,n=["rerun the code 10 times"],i=null,r=!1){if(!M()&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function n(){if(!M())return null;console.log(...arguments);}function i(){if(!M())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class r{constructor(t){this.self=t,this.actions=new Map,this.delete=this.destroy;}addWithKey(t,e=null){return e=e||this.actions.size,this.actions.set(e,t),e}add(...t){let e=[];for(let n of t)e.push(this.addWithKey(n));return e.length>1?e:e[0]}forAction(t){for(let[e,n]of this.actions)t(e,n);}exec(...t){this.execAs(this.self,...t);}destroy(...t){t.forEach((t=>this.actions.delete(t)));}execAs(t,...e){this.forAction(((n,i)=>{let r=null;if(r="function"==typeof i.bind?i.bind(t)(...e):i(...e),"function"==typeof r){r({key:n,action:i,replaceWith:t=>{},selfDestruct:()=>{this.destroy(n);}});}}));}}function s(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function o(){return a(8)}function a(t=7){return t<5?s():(s()+a(t-5)).substring(0,t)}function l(t){return a(t)}function h(t,e){for(let[n,i]of Object.entries(e))t[n]=i;return t}const c=t=>t.replace(/([-_]\w)/g,(t=>t[1].toUpperCase()));function u(t,e){let n=`${t}Chain`,i=`on${t.capitalize()}`;return e[n]=new r(e),e[i]=function(t,i){e[n].addWithKey(t,i);},{chainName:n,eventName:i}}function f(t,...e){for(let n of e)u(n,t);}function d(t,e){let n=u(t,e),i=`is${t.capitalize()}ed`;e[n.chainName].add((()=>{e[i]=!0;})),e[n.eventName]=function(t){if(e[i])return t(e);e[n.chainName].add(t);};}function p(t,...e){for(let n of e)d(n,t);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const g=t=>t.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),p(globalThis.pragmaSpace,"docLoad");const m=globalThis.pragmaSpace.onDocLoad;function y(){globalThis.pragmaSpace.isDocLoaded||(i("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}"complete"===document.readyState?y():(document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&y();})),document.addEventListener("turbolinks:load",(()=>{i("🚀 TURBOLINKS loaded"),y();})));var v=/[#.]/g;function x(t,e="div"){var n=t||"",i={tag:e},r=0;let s,o,a;for(;r<n.length;)v.lastIndex=r,a=v.exec(n),s=n.slice(r,a?a.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),a&&(o=a[0],r++);return i}function b(t,n,i){if(!Array.isArray(t))return e(`Could not ${i} class [${t}] -> [${n}]`);for(let e of t){let t=e.split(" ");t.length>1?b(t,n,i):n.classList[i](e);}}function _(t,e){b(t,e,"add");}function $(t,e){b(t,e,"remove");}function C(t,e){b(t,e,"toggle");}function E(t){t=t.trim();try{let e=document.querySelector(t);if(e)return e}catch{}let e=x(t),n=document.createElement(e.tag||"div");return e.id&&(n.id=e.id),e.class&&_(e.class,n),n}function T(t){return document.createRange().createContextualFragment(t)}function w(t){return t instanceof Element?t:"string"==typeof t?"<"===t[0]?T(t):E(t):e(`Could not find/create element from [${t}]`)}const A={html:(t,e)=>{e.innerHTML=t;},pcss:(t,e)=>{for(let[n,i]of S.cssToDict(t))e.style[c(n)]=i;}},S={cssToDict:t=>{t=t.replace(/\n/g,";").replace(/:/g," ");let n=new Map;for(let e of t.split(";")){if(e.replace(/\s/g,"").length<2)continue;e=e.trim().split(" ");let t=e[0];e.shift(),n.set(t.trim(),e.join(" ").trim());}let i=[];for(const[t,e]of n.entries())CSS.supports(t,e)||i.push(`${t.trim()}: ${e.trim()}`);return i.length>0&&e("CSS syntax error","typos",i),n},css:t=>{let e="";for(let[n,i]of S.cssToDict(t))e+=`${n}:${i};`;return e},html:t=>t};function M(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV;var O=Object.freeze({__proto__:null,_deving:M,throwSoft:e,log:n,suc:i,whenDOM:m,parseQuery:x,addClassAryTo:_,removeClassAryFrom:$,toggleClassAryOf:C,selectOrCreateDOM:E,elementFrom:w,toHTMLAttr:g,fragmentFromString:T,fillSVG:function(t,e){j(t).findAll("path").forEach((t=>{const n=t.attr("fill");"none"!=n&&"transparent"!=n&&t.attr("fill",e);}));},generateRandomKey:l,objDiff:h,aryDiff:function(t,e){return t.filter((t=>e.indexOf(t)<0))},_extend:function(t,e){Object.setPrototypeOf(t,h(Object.getPrototypeOf(t),e));},overwrite:function(t,e,n){let i=t[e];t[`_${e}`]=i.bind(t),t[e]=n;},createEventChains:p,createChains:f,snake2camel:c,mimic:function(t,e,n){for(let i of n||Object.keys(e)){let n=Object.getOwnPropertyDescriptor(e,i);if(!n)break;Object.defineProperty(t,i,n);}},bench:function(t,e){console.time(e),t(),console.timeEnd(e);},addStyles:function(t,e="injected-pragma-style"){j(`style#${e}-${s()}`,t).appendTo("head");},rk:a,rk5:s,rk8:o,parse:S,apply:A,createTemplate:t=>(new q).run((function(){f(this,"config"),this.config=function(t){return this.configChain.exec(t),this},this.onConfig(((t={})=>{["events","chains","exports","persistentExports"].forEach((e=>{t[e]&&(this[`_${e}`]=t[e],delete t[e]);})),this._events&&p(this,...this._events),this._chains&&f(this,...this._chains);for(let[e,n]of Object.entries(t))this[e]=n,this.export(e);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof t&&this.config(t);}))});function k(t){if(null==t||null==t)return e(`Could not find a DOM element for ${t}`);if(t.element)return k(t.element);return w(t)}function j(t,e){let n=k(t);var i,r;return n.constructor===DocumentFragment&&(i=n,(r=document.createElement("template")).appendChild(i.cloneNode(!0)),n=r.firstChild),n instanceof Element&&(n.init(),n._render()),"string"==typeof e&&n.html(e),n}const L={init:function(){this.isPragmaElement=!0,p(this,"docLoad","render"),m((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(t){return this.onDocLoad((()=>{this._parentElement=k(t),this._parentElement.prepend(this),this._render();})),this},append:function(...t){return this.onRender((()=>{for(let e of t){let t=k(e);this.appendChild(t);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(t){return this.onRender((()=>{A.pcss(t,this);})),this},setText:function(t){return t?(this.onRender((()=>{this.textContent=t;})),this):this.text},html:function(t){return t?(this.onRender((()=>{A.html(t,this);})),this):this.innerHTML},setId:function(t){return this.id=t,this},setData:function(t){for(let[e,n]of Object.entries(t))this.dataset[e]=n;return this},getData:function(t){return this.dataset[t]},addClass:function(...t){return _(t,this),this},removeClass:function(...t){return $(t,this),this},toggleClass:function(...t){return C(t,this),this},listenTo:function(...t){return this.onRender((()=>{this.addEventListener(...t);})),this},attr:function(t,e){if("string"==typeof t){if(void 0===e)return this.getAttribute(t);const n=t;(t={})[n]=e;}for(let[e,n]of Object.entries(t))this.setAttribute(e,n);return this},find:function(){return j(this.query(...arguments))},findAll:function(t){return Array.from(this.queryAll(t)).map((t=>j(t)))},query:function(){return this.querySelector(...arguments)},queryAll:function(t){return this.querySelectorAll(t)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(t){let e=Array.from(this.queryAll(t));for(let n of this.children)e=e.concat(n.deepQueryAll(t));return e},deepFindAll:function(t){return this.deepQueryAll(t).map((t=>j(t)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(t){if(t){["width","height","left","right","top","bottom"].forEach((e=>{e in t&&(this.style[e]=t[e]+"px");}));}var e=this.rect();return {top:e.top+window.scrollY,left:e.left+window.scrollX}},x:function(t){return this.left+this.width/2-t/2}},D={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[t,e]of Object.entries(L))Element.prototype[t]=e;for(let[t,e]of Object.entries(D))Object.defineProperty(Element.prototype,t,{get:e,configurable:!0});class P{constructor(t){this._childMap=new Map,this.key="string"==typeof t?t:o(),this.containsKey=this.childMap.has;}set childMap(t){for(let[e,n]of t)n instanceof P&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let n=e.allChildren;n&&(t=t.concat(n));}return t}get(t){return this.childMap.get(t)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let e of this.childMap.values()){let n;try{n=e.find(t);}catch{}if(n)return n}}adopt(...t){for(let e of t)this.add(e);return this}add(t,n=!1){return t?!n&&this.childMap.has(t.key)?(t.key=`${t.key}<${s()}`,this.add(t)):(t.parent=this,void this.childMap.set(t.key,t)):e(`Could not add [${t}] to [${this.id}]`)}delete(t){return this.remove(t)}remove(t){this.childMap.get(t)&&this.childMap.delete(t);}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let n of this.children)e+=n.shapePrefix(t);}return e}}const R={parent:(t,e)=>{t.parent=e;},value:(t,e)=>{t.value=e;},key:(t,e)=>{t.key=e;},class:(t,e)=>{t._class=e;},element:(t,n)=>{if(!(n instanceof Element))return e(`Could not add ${n} as the element of [${t}]`);t.element=n;},children:(t,e)=>{if(e.constructor==Array)return t.buildAry(e);t.build(e);},childTemplate:(t,e)=>{}};function z(t,e){return {val:t,set:e}}function N(t,e){return t=e.min?Math.max(e.min,t):t,t=e.max?Math.min(e.max,t):t}function K(t,n){return function(t){return t&&null!=t.min&&null!=t.max}(n)?(null==t&&(t=n.min),t=(t=t>n.max?n.min:t)<n.min?n.max:t):e(`Could not loop value, since range (${JSON.stringify(n)}) is unbounded`)}class q extends P{constructor(t,e){super(),p(this,"export"),this.actionChain=new r,this._events=new Map,"object"==typeof t?function(t,e){let n=new Map;for(let[i,r]of Object.entries(t))R.hasOwnProperty(i)?R[i](e,r):n.set(i,r);e.element&&e.element.whenInDOM((t=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();t.listenTo(n,(()=>{e.action(r);}));}}));}(t,this):this.key=t,this.element||this.as();}listenTo(t,e){return this.element.listenTo(t,e.bind(this)),this}_addToEventChain(t,...e){let n=this._events.get(t);if(n){let i=n.add(...e);return this._events.set(t,n),i}return null}createEvent(t,...e){let n=new r(this);return this._events.set(t,n),e.length>0&&this.on(t,e),this}createEvents(...t){return t.forEach((t=>{this.createEvent(t);})),this}triggerEvents(t,...e){return t.forEach((t=>{this.triggerEvent(t,...e);})),this}triggerEvent(e,...n){return this._events.has(e)?(this._events.get(e).execAs(this,...n),this):O.throwSoft(`pragma doesnt have ${event} - cannot .triggerEvent("${event}")]`,this)}_on(e,...n){let i=this._addToEventChain(e,...n);return null===i?O.throwSoft(`pragma doesnt have ${e} - cannot .on("${e}")`,this):i}on(){return this._on(...arguments),this}_onNext(t,e){this._on(t,(function(){return e(...arguments),t=>{t.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...t){return t.forEach((t=>this.createWire(t))),this}createWire(t){let e={change:`${t}Change`,set:`${t}Set`};return this.createEvents(e.change,e.set),Object.defineProperty(this,t,{set:n=>{let i=function(t,e,n){if(n)return z(K(t,n),!0);if(e){let n=N(t,e);return z(n,n===t)}return z(t,!0)}(n,this[`_${t}Range`],this[`_${t}Loop`]);const r=this[`_${t}`];i.set&&i.val!==r&&(this[`_${t}`]=i.val,this.triggerEvent(e.change,i.val,r)),this.triggerEvent(e.set,n,r);},get:()=>this[`_${t}`]}),this[`set${t.capitalize()}`]=e=>(this[`${t}`]=e,this),this[`set${t.capitalize()}Silently`]=e=>(this[`_${t}`]=e,this),this[`set${t.capitalize()}Loop`]=(e,n)=>(this[`_${t}Loop`]={min:e,max:n},this),this[`set${t.capitalize()}Range`]=(e,n)=>(this[`_${t}Range`]={min:e,max:n},this),this}get _e(){return this.element}setElement(t,e=!0){return this.elementDOM=t,e&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(t){this.setElement(t);}setRange(t=null,e=null){return this.range=this.range||{},this.range.min=null===t?this.range.min:t,this.range.max=null===e?this.range.max:e,this}breakLoop(){return this._loopVal=!1,this}setLoop(t,e){return this.setRange(t,e),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(t){return this.value=t,this}set value(t){let e=function(t,e,n){if(!e)return z(t,!0);if(n)return z(K(t,e),!0);let i=N(t,e);return z(i,i==t)}(t,this.range,this._loopVal);e.set&&(this._lv=this.v,this.v=e.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(t){return this.key=t,this}set key(t){this._KEY=null==t?l():t;}get key(){return this._KEY}set id(t){this.element&&(this.element.id=this.id);}get id(){return g(this.key)}buildAry(t){for(let e of t)this.add(new q(e,this));return this}build(...t){return this.buildAry(t)}as(t=null,e){return t=t||`div#${this.id}.pragma`,this.setElement(j(t,e),!1),this}addExport(t){this.exports=this.exports||new Set,this.exports.add(t);}export(...t){for(let e of t)this.addExport(e);}import(...e){let n=new r;for(let i of e)"function"==typeof i&&(i=i()),i.exports&&O.mimic(this,i,i.exports),i.exportChain&&n.add((t=>{i.exportChain.exec(this);}));return n.exec(),this}from(e){return e.exports&&O.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(t){let e=this;return t.do((function(){e.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,n){return O.overwrite(this,e,n),this}run(...t){let n=t[0];return "function"==typeof n?this._runAry(t):"object"==typeof n?this._runAry(Object.values(n)):e(`Could not run [${t}] as [${this}]`),this}_runAry(t){for(let e of t)this.runAs(e);}runAs(t){return t.bind(this)()}containAry(t,n="append"){for(let i of t)super.add(i),i.isRendered?e(`[${i}] is already appended`):this.element[n](i);return this}contain(...t){return this.containAry(t)}containFirst(...t){return this.containAry(t.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(t){return this.element.appendTo(t),this}addListeners(t){for(let[e,n]of Object.entries(t))this.on(e).do(n);return this}}const W=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let t of W)q.prototype[t]=function(){return this.element[t](...arguments),this};const F=["getData"];for(let t of F)q.prototype[t]=function(){return this.element[t](...arguments)};const I=["offset","text","top","left","width","height","x","classArray"];for(let t of I)Object.defineProperty(q.prototype,t,{get:function(){return this.element[t]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(t){"function"==typeof t&&(q.prototype.bind=function(e,n,i){let r=this;return t.bind(e,(function(){return r.runAs(n)}),i),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(t){n("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class V extends q{static load(t,e=o()){return console.time(`${e} load`),new Promise((n=>{j(`script#${e}-loader crossorigin`).appendTo("head").listenTo("load",(function(){n(),console.timeEnd(`${e} load`);})).attr("src",t);}))}}function U(t){let e=`\n    onmessage = e => postMessage(JSON.stringify((${t.toString()})(e.data))) \n  `;var n=new Blob([e],{type:"application/javascript"}),i=new Worker(URL.createObjectURL(n));return function(){return i.postMessage(arguments),new Promise((t=>{i.addEventListener("message",(e=>t(JSON.parse(e.data))));}))}}function B(t){return new Promise((e=>e(t())))}function Q(...t){return B((()=>{for(let e of t)B(e);}))}const H=(t,e)=>new q(t,e),J=H,Y=["_e","_p","Pragma","util","_thread"];function G(){let t=(globalThis||window).pragma;if("undefined"!==t&&t.__esModule)for(let e of Y)globalThis[e]=t[e];else console.error("Could not globalify [pragma]");}function X(t,...e){return j(e.reduce(((e,n,i)=>`${e}${n}${t[i+1]}`),t[0]).trim())}function Z(t){window.location.href=t;}

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

    var main = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);body.xfready-lector-open{overflow:hidden}div[xfready]{all:initial;font-family:'IBM Plex Sans',sans-serif}div[xfready] *{all:initial}div[xfready] *{font-family:'IBM Plex Sans',sans-serif}div[xfready] h1,div[xfready] h2,div[xfready] h3,div[xfready] h4,div[xfready] h5,div[xfready] h6{font-family:'IBM Plex Mono',monospace;font-weight:bold}div#lector[xfready]{position:fixed;width:100vw;background-color:gray;top:0;left:0;z-index:9999999999 !important;height:100vh;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;overflow:scroll}div#lector[xfready] #reader-rapper{flex-direction:column;display:flex;align-items:center;justify-content:flex-start;overflow-y:scroll;width:100%;height:100%;margin:auto}div#lector[xfready] #reader-rapper #reader{width:80%;padding:80px 140px;background:whitesmoke}div#popup[xfready]{z-index:9999999999 !important;position:fixed;width:2000px;height:2000px;width:281px;height:fit-content;box-shadow:rgba(0,0,0,0.1) 0 0 10px;position:fixed;top:10px;right:5px;font-size:17px;box-sizing:content-box !important;background:white;border-radius:5px;padding:10px}div[xfready] .button{background-color:#303030;border-radius:2px;padding:5px 8px;color:whitesmoke;cursor:pointer;transition:all ease .2s}div[xfready] .button:hover{background-color:#464646}div[xfready] .button:active{background-color:#2b6cce}div[xfready] .no-select,div[xfready] .button{user-select:none !important}div[xfready] .page-container{height:100vh}div[xfready] .flex-center{display:flex;align-items:center;justify-content:center;flex-direction:column}div.fade-onload[xfready]{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{div.fade-onload[xfready] from{opacity:0}div.fade-onload[xfready] to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}";
    var sanitized_elements = "@charset \"utf-8\";.article{position:relative;background-color:#eee;border-radius:8px;min-height:100vh;max-width:100%;width:60ch !important;text-align:left;overflow:hidden;text-align:left;word-break:keep-all;font-size:22px}.sanitized-elements,.article{font-weight:400;font-size:19px;line-height:31px;word-break:keep-all;overflow:hidden}.sanitized-elements h1,.article h1,.sanitized-elements h2,.article h2,.sanitized-elements h3,.article h3,.sanitized-elements h4,.article h4,.sanitized-elements h5,.article h5,.sanitized-elements h6,.article h6{font-family:IBM Plex Mono,monospace;font-weight:bold;margin-top:20px;margin-bottom:5px;display:block}.sanitized-elements h1 *,.article h1 *,.sanitized-elements h2 *,.article h2 *,.sanitized-elements h3 *,.article h3 *,.sanitized-elements h4 *,.article h4 *,.sanitized-elements h5 *,.article h5 *,.sanitized-elements h6 *,.article h6 *{font-weight:bold;font-family:IBM Plex Mono,monospace}.sanitized-elements h1,.article h1,.sanitized-elements h1 *,.article h1 *{font-size:39px;line-height:60px}.sanitized-elements h2,.article h2,.sanitized-elements h2 *,.article h2 *{font-size:31px;line-height:49px}.sanitized-elements h3,.article h3,.sanitized-elements h4,.article h4,.sanitized-elements h5,.article h5,.sanitized-elements h6,.article h6{font-size:24px;line-height:39px}.sanitized-elements h3 *,.article h3 *,.sanitized-elements h4 *,.article h4 *,.sanitized-elements h5 *,.article h5 *,.sanitized-elements h6 *,.article h6 *{font-size:24px;line-height:39px}.sanitized-elements p,.article p{font-weight:400;font-size:19px !important;line-height:30px !important}.sanitized-elements a,.article a{text-decoration-color:#25227044;display:unset !important;border-bottom:#929292 .09em dashed}.sanitized-elements a:hover,.article a:hover{border-bottom:#2b6cce .09em solid;transition:all .2s ease}.sanitized-elements a:hover w,.article a:hover w{background-color:transparent !important}.sanitized-elements ul,.article ul,.sanitized-elements ol,.article ol{padding-top:10px;padding-bottom:10px;border-radius:5px;display:block}.sanitized-elements li,.article li{display:list-item;padding:5px;padding-left:10px;padding-right:10px}.sanitized-elements nav,.article nav{display:none}.sanitized-elements blockquote,.article blockquote{font-style:italic;color:#3a3a3a;border-left:solid 3px #707070;padding-left:10px;border-radius:1px}.sanitized-elements sup,.article sup{color:#707070}.sanitized-elements pre,.article pre{max-width:100%}.sanitized-elements img,.article img{max-width:100%;height:auto;display:block;max-height:500px;border-radius:2px;margin:30px 10px}.sanitized-elements mark,.article mark{background-color:#ABFAA9}.sanitized-elements figcaption,.article figcaption{color:gray;text-align:center;margin:auto;font-size:16px}.sanitized-elements table,.article table{display:block;position:relative;width:165%;left:-32.5%;overflow-x:auto;table-layout:auto;border-collapse:collapse;font-size:100% !important;text-align:center;word-wrap:break-word;border-collapse:collapse}.sanitized-elements table *,.article table *{font-size:.95em !important}@media screen and (max-width:780px){.sanitized-elements table,.article table{left:0}}.sanitized-elements table tbody,.article table tbody{background:#f9f9f9;text-align:left;display:block;position:relative;width:fit-content;margin:auto}.sanitized-elements table td,.article table td,.sanitized-elements table tr,.article table tr,.sanitized-elements table th,.article table th{padding:1em 1em;border:1px solid #d8d8d8}.sanitized-elements table td:hover,.article table td:hover,.sanitized-elements table tr:hover,.article table tr:hover,.sanitized-elements table th:hover,.article table th:hover{background-color:#eee}.sanitized-elements table p,.article table p,.sanitized-elements table div,.article table div{display:inline-block}.sanitized-elements table img,.article table img{display:block}";
    var styles = {
    	main: main,
    	sanitized_elements: sanitized_elements
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
        injectStyle: injectStyle$1,
        SVG,
        compose,
        pragmas
    };

    function injectStyle$1(name) {
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

    function createCommonjsModule(fn) {
      var module = { exports: {} };
    	return fn(module, module.exports), module.exports;
    }

    /*eslint-env es6:false*/

    var Readability_1 = createCommonjsModule(function (module) {
    /*
     * Copyright (c) 2010 Arc90 Inc
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /*
     * This code is heavily based on Arc90's readability.js (1.7.1) script
     * available at: http://code.google.com/p/arc90labs-readability
     */

    /**
     * Public constructor.
     * @param {HTMLDocument} doc     The document to parse.
     * @param {Object}       options The options object.
     */
    function Readability(doc, options) {
      // In some older versions, people passed a URI as the first argument. Cope:
      if (options && options.documentElement) {
        doc = options;
        options = arguments[2];
      } else if (!doc || !doc.documentElement) {
        throw new Error("First argument to Readability constructor should be a document object.");
      }
      options = options || {};

      this._doc = doc;
      this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
      this._articleTitle = null;
      this._articleByline = null;
      this._articleDir = null;
      this._articleSiteName = null;
      this._attempts = [];

      // Configurable options
      this._debug = !!options.debug;
      this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
      this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
      this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
      this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
      this._keepClasses = !!options.keepClasses;
      this._serializer = options.serializer || function(el) {
        return el.innerHTML;
      };
      this._disableJSONLD = !!options.disableJSONLD;

      // Start with all flags set
      this._flags = this.FLAG_STRIP_UNLIKELYS |
                    this.FLAG_WEIGHT_CLASSES |
                    this.FLAG_CLEAN_CONDITIONALLY;


      // Control whether log messages are sent to the console
      if (this._debug) {
        let logNode = function(node) {
          if (node.nodeType == node.TEXT_NODE) {
            return `${node.nodeName} ("${node.textContent}")`;
          }
          let attrPairs = Array.from(node.attributes || [], function(attr) {
            return `${attr.name}="${attr.value}"`;
          }).join(" ");
          return `<${node.localName} ${attrPairs}>`;
        };
        this.log = function () {
          if (typeof dump !== "undefined") {
            var msg = Array.prototype.map.call(arguments, function(x) {
              return (x && x.nodeName) ? logNode(x) : x;
            }).join(" ");
            dump("Reader: (Readability) " + msg + "\n");
          } else if (typeof console !== "undefined") {
            let args = Array.from(arguments, arg => {
              if (arg && arg.nodeType == this.ELEMENT_NODE) {
                return logNode(arg);
              }
              return arg;
            });
            args.unshift("Reader: (Readability)");
            console.log.apply(console, args);
          }
        };
      } else {
        this.log = function () {};
      }
    }

    Readability.prototype = {
      FLAG_STRIP_UNLIKELYS: 0x1,
      FLAG_WEIGHT_CLASSES: 0x2,
      FLAG_CLEAN_CONDITIONALLY: 0x4,

      // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,

      // Max number of nodes supported by this parser. Default: 0 (no limit)
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,

      // The number of top candidates to consider when analysing how
      // tight the competition is among candidates.
      DEFAULT_N_TOP_CANDIDATES: 5,

      // Element tags to score by default.
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),

      // The default number of chars an article must have in order to return a result
      DEFAULT_CHAR_THRESHOLD: 500,

      // All of the regular expressions in use within readability.
      // Defined up here so we don't instantiate them repeatedly in loops.
      REGEXPS: {
        // NOTE: These two regular expressions are duplicated in
        // Readability-readerable.js. Please keep both copies in sync.
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,

        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|«)/i,
        tokenize: /\W+/g,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        hashUrl: /^#.+/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
        // See: https://schema.org/Article
        jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
      },

      UNLIKELY_ROLES: [ "menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog" ],

      DIV_TO_P_ELEMS: new Set([ "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL" ]),

      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],

      PRESENTATIONAL_ATTRIBUTES: [ "align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace" ],

      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: [ "TABLE", "TH", "TD", "HR", "PRE" ],

      // The commented out elements qualify as phrasing content but tend to be
      // removed by readability when put into paragraphs, so we ignore them here.
      PHRASING_ELEMS: [
        // "CANVAS", "IFRAME", "SVG", "VIDEO",
        "ABBR", "AUDIO", "B", "BDO", "BR", "BUTTON", "CITE", "CODE", "DATA",
        "DATALIST", "DFN", "EM", "EMBED", "I", "IMG", "INPUT", "KBD", "LABEL",
        "MARK", "MATH", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PROGRESS", "Q",
        "RUBY", "SAMP", "SCRIPT", "SELECT", "SMALL", "SPAN", "STRONG", "SUB",
        "SUP", "TEXTAREA", "TIME", "VAR", "WBR"
      ],

      // These are the classes that readability sets itself.
      CLASSES_TO_PRESERVE: [ "page" ],

      // These are the list of HTML entities that need to be escaped.
      HTML_ESCAPE_MAP: {
        "lt": "<",
        "gt": ">",
        "amp": "&",
        "quot": '"',
        "apos": "'",
      },

      /**
       * Run any post-process modifications to article content as necessary.
       *
       * @param Element
       * @return void
      **/
      _postProcessContent: function(articleContent) {
        // Readability cannot open relative uris so we convert them to absolute uris.
        this._fixRelativeUris(articleContent);

        this._simplifyNestedElements(articleContent);

        if (!this._keepClasses) {
          // Remove classes.
          this._cleanClasses(articleContent);
        }
      },

      /**
       * Iterates over a NodeList, calls `filterFn` for each node and removes node
       * if function returned `true`.
       *
       * If function is not passed, removes all the nodes in node list.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param Function filterFn the function to use as a filter
       * @return void
       */
      _removeNodes: function(nodeList, filterFn) {
        // Avoid ever operating on live node lists.
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _removeNodes");
        }
        for (var i = nodeList.length - 1; i >= 0; i--) {
          var node = nodeList[i];
          var parentNode = node.parentNode;
          if (parentNode) {
            if (!filterFn || filterFn.call(this, node, i, nodeList)) {
              parentNode.removeChild(node);
            }
          }
        }
      },

      /**
       * Iterates over a NodeList, and calls _setNodeTag for each node.
       *
       * @param NodeList nodeList The nodes to operate on
       * @param String newTagName the new tag name to use
       * @return void
       */
      _replaceNodeTags: function(nodeList, newTagName) {
        // Avoid ever operating on live node lists.
        if (this._docJSDOMParser && nodeList._isLiveNodeList) {
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        }
        for (const node of nodeList) {
          this._setNodeTag(node, newTagName);
        }
      },

      /**
       * Iterate over a NodeList, which doesn't natively fully implement the Array
       * interface.
       *
       * For convenience, the current object context is applied to the provided
       * iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return void
       */
      _forEachNode: function(nodeList, fn) {
        Array.prototype.forEach.call(nodeList, fn, this);
      },

      /**
       * Iterate over a NodeList, and return the first node that passes
       * the supplied test function
       *
       * For convenience, the current object context is applied to the provided
       * test function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The test function.
       * @return void
       */
      _findNode: function(nodeList, fn) {
        return Array.prototype.find.call(nodeList, fn, this);
      },

      /**
       * Iterate over a NodeList, return true if any of the provided iterate
       * function calls returns true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _someNode: function(nodeList, fn) {
        return Array.prototype.some.call(nodeList, fn, this);
      },

      /**
       * Iterate over a NodeList, return true if all of the provided iterate
       * function calls return true, false otherwise.
       *
       * For convenience, the current object context is applied to the
       * provided iterate function.
       *
       * @param  NodeList nodeList The NodeList.
       * @param  Function fn       The iterate function.
       * @return Boolean
       */
      _everyNode: function(nodeList, fn) {
        return Array.prototype.every.call(nodeList, fn, this);
      },

      /**
       * Concat all nodelists passed as arguments.
       *
       * @return ...NodeList
       * @return Array
       */
      _concatNodeLists: function() {
        var slice = Array.prototype.slice;
        var args = slice.call(arguments);
        var nodeLists = args.map(function(list) {
          return slice.call(list);
        });
        return Array.prototype.concat.apply([], nodeLists);
      },

      _getAllNodesWithTag: function(node, tagNames) {
        if (node.querySelectorAll) {
          return node.querySelectorAll(tagNames.join(","));
        }
        return [].concat.apply([], tagNames.map(function(tag) {
          var collection = node.getElementsByTagName(tag);
          return Array.isArray(collection) ? collection : Array.from(collection);
        }));
      },

      /**
       * Removes the class="" attribute from every element in the given
       * subtree, except those that match CLASSES_TO_PRESERVE and
       * the classesToPreserve array from the options object.
       *
       * @param Element
       * @return void
       */
      _cleanClasses: function(node) {
        var classesToPreserve = this._classesToPreserve;
        var className = (node.getAttribute("class") || "")
          .split(/\s+/)
          .filter(function(cls) {
            return classesToPreserve.indexOf(cls) != -1;
          })
          .join(" ");

        if (className) {
          node.setAttribute("class", className);
        } else {
          node.removeAttribute("class");
        }

        for (node = node.firstElementChild; node; node = node.nextElementSibling) {
          this._cleanClasses(node);
        }
      },

      /**
       * Converts each <a> and <img> uri in the given element to an absolute URI,
       * ignoring #ref URIs.
       *
       * @param Element
       * @return void
       */
      _fixRelativeUris: function(articleContent) {
        var baseURI = this._doc.baseURI;
        var documentURI = this._doc.documentURI;
        function toAbsoluteURI(uri) {
          // Leave hash links alone if the base URI matches the document URI:
          if (baseURI == documentURI && uri.charAt(0) == "#") {
            return uri;
          }

          // Otherwise, resolve against base URI:
          try {
            return new URL(uri, baseURI).href;
          } catch (ex) {
            // Something went wrong, just return the original:
          }
          return uri;
        }

        var links = this._getAllNodesWithTag(articleContent, ["a"]);
        this._forEachNode(links, function(link) {
          var href = link.getAttribute("href");
          if (href) {
            // Remove links with javascript: URIs, since
            // they won't work after scripts have been removed from the page.
            if (href.indexOf("javascript:") === 0) {
              // if the link only contains simple text content, it can be converted to a text node
              if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
                var text = this._doc.createTextNode(link.textContent);
                link.parentNode.replaceChild(text, link);
              } else {
                // if the link has multiple children, they should all be preserved
                var container = this._doc.createElement("span");
                while (link.childNodes.length > 0) {
                  container.appendChild(link.childNodes[0]);
                }
                link.parentNode.replaceChild(container, link);
              }
            } else {
              link.setAttribute("href", toAbsoluteURI(href));
            }
          }
        });

        var medias = this._getAllNodesWithTag(articleContent, [
          "img", "picture", "figure", "video", "audio", "source"
        ]);

        this._forEachNode(medias, function(media) {
          var src = media.getAttribute("src");
          var poster = media.getAttribute("poster");
          var srcset = media.getAttribute("srcset");

          if (src) {
            media.setAttribute("src", toAbsoluteURI(src));
          }

          if (poster) {
            media.setAttribute("poster", toAbsoluteURI(poster));
          }

          if (srcset) {
            var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
              return toAbsoluteURI(p1) + (p2 || "") + p3;
            });

            media.setAttribute("srcset", newSrcset);
          }
        });
      },

      _simplifyNestedElements: function(articleContent) {
        var node = articleContent;

        while (node) {
          if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
            if (this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
              var child = node.children[0];
              for (var i = 0; i < node.attributes.length; i++) {
                child.setAttribute(node.attributes[i].name, node.attributes[i].value);
              }
              node.parentNode.replaceChild(child, node);
              node = child;
              continue;
            }
          }

          node = this._getNextNode(node);
        }
      },

      /**
       * Get the article title as an H1.
       *
       * @return string
       **/
      _getArticleTitle: function() {
        var doc = this._doc;
        var curTitle = "";
        var origTitle = "";

        try {
          curTitle = origTitle = doc.title.trim();

          // If they had an element with id "title" in their HTML
          if (typeof curTitle !== "string")
            curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
        } catch (e) {/* ignore exceptions setting the title. */}

        var titleHadHierarchicalSeparators = false;
        function wordCount(str) {
          return str.split(/\s+/).length;
        }

        // If there's a separator in the title, first remove the final part
        if ((/ [\|\-\\\/>»] /).test(curTitle)) {
          titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
          curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");

          // If the resulting title is too short (3 words or fewer), remove
          // the first part instead:
          if (wordCount(curTitle) < 3)
            curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
        } else if (curTitle.indexOf(": ") !== -1) {
          // Check if we have an heading containing this exact string, so we
          // could assume it's the full title.
          var headings = this._concatNodeLists(
            doc.getElementsByTagName("h1"),
            doc.getElementsByTagName("h2")
          );
          var trimmedTitle = curTitle.trim();
          var match = this._someNode(headings, function(heading) {
            return heading.textContent.trim() === trimmedTitle;
          });

          // If we don't, let's extract the title out of the original title string.
          if (!match) {
            curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);

            // If the title is now too short, try the first colon instead:
            if (wordCount(curTitle) < 3) {
              curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
              // But if we have too many words before the colon there's something weird
              // with the titles and the H tags so let's just use the original title instead
            } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
              curTitle = origTitle;
            }
          }
        } else if (curTitle.length > 150 || curTitle.length < 15) {
          var hOnes = doc.getElementsByTagName("h1");

          if (hOnes.length === 1)
            curTitle = this._getInnerText(hOnes[0]);
        }

        curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
        // If we now have 4 words or fewer as our title, and either no
        // 'hierarchical' separators (\, /, > or ») were found in the original
        // title or we decreased the number of words by more than 1 word, use
        // the original title.
        var curTitleWordCount = wordCount(curTitle);
        if (curTitleWordCount <= 4 &&
            (!titleHadHierarchicalSeparators ||
             curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
          curTitle = origTitle;
        }

        return curTitle;
      },

      /**
       * Prepare the HTML document for readability to scrape it.
       * This includes things like stripping javascript, CSS, and handling terrible markup.
       *
       * @return void
       **/
      _prepDocument: function() {
        var doc = this._doc;

        // Remove all style tags in head
        this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));

        if (doc.body) {
          this._replaceBrs(doc.body);
        }

        this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
      },

      /**
       * Finds the next node, starting from the given node, and ignoring
       * whitespace in between. If the given node is an element, the same node is
       * returned.
       */
      _nextNode: function (node) {
        var next = node;
        while (next
            && (next.nodeType != this.ELEMENT_NODE)
            && this.REGEXPS.whitespace.test(next.textContent)) {
          next = next.nextSibling;
        }
        return next;
      },

      /**
       * Replaces 2 or more successive <br> elements with a single <p>.
       * Whitespace between <br> elements are ignored. For example:
       *   <div>foo<br>bar<br> <br><br>abc</div>
       * will become:
       *   <div>foo<br>bar<p>abc</p></div>
       */
      _replaceBrs: function (elem) {
        this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
          var next = br.nextSibling;

          // Whether 2 or more <br> elements have been found and replaced with a
          // <p> block.
          var replaced = false;

          // If we find a <br> chain, remove the <br>s until we hit another node
          // or non-whitespace. This leaves behind the first <br> in the chain
          // (which will be replaced with a <p> later).
          while ((next = this._nextNode(next)) && (next.tagName == "BR")) {
            replaced = true;
            var brSibling = next.nextSibling;
            next.parentNode.removeChild(next);
            next = brSibling;
          }

          // If we removed a <br> chain, replace the remaining <br> with a <p>. Add
          // all sibling nodes as children of the <p> until we hit another <br>
          // chain.
          if (replaced) {
            var p = this._doc.createElement("p");
            br.parentNode.replaceChild(p, br);

            next = p.nextSibling;
            while (next) {
              // If we've hit another <br><br>, we're done adding children to this <p>.
              if (next.tagName == "BR") {
                var nextElem = this._nextNode(next.nextSibling);
                if (nextElem && nextElem.tagName == "BR")
                  break;
              }

              if (!this._isPhrasingContent(next))
                break;

              // Otherwise, make this node a child of the new <p>.
              var sibling = next.nextSibling;
              p.appendChild(next);
              next = sibling;
            }

            while (p.lastChild && this._isWhitespace(p.lastChild)) {
              p.removeChild(p.lastChild);
            }

            if (p.parentNode.tagName === "P")
              this._setNodeTag(p.parentNode, "DIV");
          }
        });
      },

      _setNodeTag: function (node, tag) {
        this.log("_setNodeTag", node, tag);
        if (this._docJSDOMParser) {
          node.localName = tag.toLowerCase();
          node.tagName = tag.toUpperCase();
          return node;
        }

        var replacement = node.ownerDocument.createElement(tag);
        while (node.firstChild) {
          replacement.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(replacement, node);
        if (node.readability)
          replacement.readability = node.readability;

        for (var i = 0; i < node.attributes.length; i++) {
          try {
            replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
          } catch (ex) {
            /* it's possible for setAttribute() to throw if the attribute name
             * isn't a valid XML Name. Such attributes can however be parsed from
             * source in HTML docs, see https://github.com/whatwg/html/issues/4275,
             * so we can hit them here and then throw. We don't care about such
             * attributes so we ignore them.
             */
          }
        }
        return replacement;
      },

      /**
       * Prepare the article node for display. Clean out any inline styles,
       * iframes, forms, strip extraneous <p> tags, etc.
       *
       * @param Element
       * @return void
       **/
      _prepArticle: function(articleContent) {
        this._cleanStyles(articleContent);

        // Check for data tables before we continue, to avoid removing items in
        // those tables, which will often be isolated even though they're
        // visually linked to other content-ful elements (text, images, etc.).
        this._markDataTables(articleContent);

        this._fixLazyImages(articleContent);

        // Clean out junk from the article content
        this._cleanConditionally(articleContent, "form");
        this._cleanConditionally(articleContent, "fieldset");
        this._clean(articleContent, "object");
        this._clean(articleContent, "embed");
        this._clean(articleContent, "footer");
        this._clean(articleContent, "link");
        this._clean(articleContent, "aside");

        // Clean out elements with little content that have "share" in their id/class combinations from final top candidates,
        // which means we don't remove the top candidates even they have "share".

        var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;

        this._forEachNode(articleContent.children, function (topCandidate) {
          this._cleanMatchedNodes(topCandidate, function (node, matchString) {
            return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
          });
        });

        this._clean(articleContent, "iframe");
        this._clean(articleContent, "input");
        this._clean(articleContent, "textarea");
        this._clean(articleContent, "select");
        this._clean(articleContent, "button");
        this._cleanHeaders(articleContent);

        // Do these last as the previous stuff may have removed junk
        // that will affect these
        this._cleanConditionally(articleContent, "table");
        this._cleanConditionally(articleContent, "ul");
        this._cleanConditionally(articleContent, "div");

        // replace H1 with H2 as H1 should be only title that is displayed separately
        this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");

        // Remove extra paragraphs
        this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function (paragraph) {
          var imgCount = paragraph.getElementsByTagName("img").length;
          var embedCount = paragraph.getElementsByTagName("embed").length;
          var objectCount = paragraph.getElementsByTagName("object").length;
          // At this point, nasty iframes have been removed, only remain embedded video ones.
          var iframeCount = paragraph.getElementsByTagName("iframe").length;
          var totalCount = imgCount + embedCount + objectCount + iframeCount;

          return totalCount === 0 && !this._getInnerText(paragraph, false);
        });

        this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
          var next = this._nextNode(br.nextSibling);
          if (next && next.tagName == "P")
            br.parentNode.removeChild(br);
        });

        // Remove single-cell tables
        this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
          var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
          if (this._hasSingleTagInsideElement(tbody, "TR")) {
            var row = tbody.firstElementChild;
            if (this._hasSingleTagInsideElement(row, "TD")) {
              var cell = row.firstElementChild;
              cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
              table.parentNode.replaceChild(cell, table);
            }
          }
        });
      },

      /**
       * Initialize a node with the readability object. Also checks the
       * className/id for special names to add to its score.
       *
       * @param Element
       * @return void
      **/
      _initializeNode: function(node) {
        node.readability = {"contentScore": 0};

        switch (node.tagName) {
          case "DIV":
            node.readability.contentScore += 5;
            break;

          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            node.readability.contentScore += 3;
            break;

          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            node.readability.contentScore -= 3;
            break;

          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            node.readability.contentScore -= 5;
            break;
        }

        node.readability.contentScore += this._getClassWeight(node);
      },

      _removeAndGetNext: function(node) {
        var nextNode = this._getNextNode(node, true);
        node.parentNode.removeChild(node);
        return nextNode;
      },

      /**
       * Traverse the DOM from node to node, starting at the node passed in.
       * Pass true for the second parameter to indicate this node itself
       * (and its kids) are going away, and we want the next node over.
       *
       * Calling this in a loop will traverse the DOM depth-first.
       */
      _getNextNode: function(node, ignoreSelfAndKids) {
        // First check for kids if those aren't being ignored
        if (!ignoreSelfAndKids && node.firstElementChild) {
          return node.firstElementChild;
        }
        // Then for siblings...
        if (node.nextElementSibling) {
          return node.nextElementSibling;
        }
        // And finally, move up the parent chain *and* find a sibling
        // (because this is depth-first traversal, we will have already
        // seen the parent nodes themselves).
        do {
          node = node.parentNode;
        } while (node && !node.nextElementSibling);
        return node && node.nextElementSibling;
      },

      // compares second text to first one
      // 1 = same text, 0 = completely different text
      // works the way that it splits both texts into words and then finds words that are unique in second text
      // the result is given by the lower length of unique parts
      _textSimilarity: function(textA, textB) {
        var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
        if (!tokensA.length || !tokensB.length) {
          return 0;
        }
        var uniqTokensB = tokensB.filter(token => !tokensA.includes(token));
        var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
        return 1 - distanceB;
      },

      _checkByline: function(node, matchString) {
        if (this._articleByline) {
          return false;
        }

        if (node.getAttribute !== undefined) {
          var rel = node.getAttribute("rel");
          var itemprop = node.getAttribute("itemprop");
        }

        if ((rel === "author" || (itemprop && itemprop.indexOf("author") !== -1) || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
          this._articleByline = node.textContent.trim();
          return true;
        }

        return false;
      },

      _getNodeAncestors: function(node, maxDepth) {
        maxDepth = maxDepth || 0;
        var i = 0, ancestors = [];
        while (node.parentNode) {
          ancestors.push(node.parentNode);
          if (maxDepth && ++i === maxDepth)
            break;
          node = node.parentNode;
        }
        return ancestors;
      },

      /***
       * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
       *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
       *
       * @param page a document to run upon. Needs to be a full document, complete with body.
       * @return Element
      **/
      _grabArticle: function (page) {
        this.log("**** grabArticle ****");
        var doc = this._doc;
        var isPaging = page !== null;
        page = page ? page : this._doc.body;

        // We can't grab an article if we don't have a page!
        if (!page) {
          this.log("No body found in document. Abort.");
          return null;
        }

        var pageCacheHtml = page.innerHTML;

        while (true) {
          this.log("Starting grabArticle loop");
          var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);

          // First, node prepping. Trash nodes that look cruddy (like ones with the
          // class name "comment", etc), and turn divs into P tags where they have been
          // used inappropriately (as in, where they contain no other block level elements.)
          var elementsToScore = [];
          var node = this._doc.documentElement;

          let shouldRemoveTitleHeader = true;

          while (node) {
            var matchString = node.className + " " + node.id;

            if (!this._isProbablyVisible(node)) {
              this.log("Removing hidden node - " + matchString);
              node = this._removeAndGetNext(node);
              continue;
            }

            // Check to see if this node is a byline, and remove it if it is.
            if (this._checkByline(node, matchString)) {
              node = this._removeAndGetNext(node);
              continue;
            }

            if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
              this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
              shouldRemoveTitleHeader = false;
              node = this._removeAndGetNext(node);
              continue;
            }

            // Remove unlikely candidates
            if (stripUnlikelyCandidates) {
              if (this.REGEXPS.unlikelyCandidates.test(matchString) &&
                  !this.REGEXPS.okMaybeItsACandidate.test(matchString) &&
                  !this._hasAncestorTag(node, "table") &&
                  !this._hasAncestorTag(node, "code") &&
                  node.tagName !== "BODY" &&
                  node.tagName !== "A") {
                this.log("Removing unlikely candidate - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }

              if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
                this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
                node = this._removeAndGetNext(node);
                continue;
              }
            }

            // Remove DIV, SECTION, and HEADER nodes without any content(e.g. text, image, video, or iframe).
            if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" ||
                 node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" ||
                 node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") &&
                this._isElementWithoutContent(node)) {
              node = this._removeAndGetNext(node);
              continue;
            }

            if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
              elementsToScore.push(node);
            }

            // Turn all divs that don't have children block level elements into p's
            if (node.tagName === "DIV") {
              // Put phrasing content into paragraphs.
              var p = null;
              var childNode = node.firstChild;
              while (childNode) {
                var nextSibling = childNode.nextSibling;
                if (this._isPhrasingContent(childNode)) {
                  if (p !== null) {
                    p.appendChild(childNode);
                  } else if (!this._isWhitespace(childNode)) {
                    p = doc.createElement("p");
                    node.replaceChild(p, childNode);
                    p.appendChild(childNode);
                  }
                } else if (p !== null) {
                  while (p.lastChild && this._isWhitespace(p.lastChild)) {
                    p.removeChild(p.lastChild);
                  }
                  p = null;
                }
                childNode = nextSibling;
              }

              // Sites like http://mobile.slate.com encloses each paragraph with a DIV
              // element. DIVs with only a P element inside and no text content can be
              // safely converted into plain P elements to avoid confusing the scoring
              // algorithm with DIVs with are, in practice, paragraphs.
              if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
                var newNode = node.children[0];
                node.parentNode.replaceChild(newNode, node);
                node = newNode;
                elementsToScore.push(node);
              } else if (!this._hasChildBlockElement(node)) {
                node = this._setNodeTag(node, "P");
                elementsToScore.push(node);
              }
            }
            node = this._getNextNode(node);
          }

          /**
           * Loop through all paragraphs, and assign a score to them based on how content-y they look.
           * Then add their score to their parent node.
           *
           * A score is determined by things like number of commas, class names, etc. Maybe eventually link density.
          **/
          var candidates = [];
          this._forEachNode(elementsToScore, function(elementToScore) {
            if (!elementToScore.parentNode || typeof(elementToScore.parentNode.tagName) === "undefined")
              return;

            // If this paragraph is less than 25 characters, don't even count it.
            var innerText = this._getInnerText(elementToScore);
            if (innerText.length < 25)
              return;

            // Exclude nodes with no ancestor.
            var ancestors = this._getNodeAncestors(elementToScore, 5);
            if (ancestors.length === 0)
              return;

            var contentScore = 0;

            // Add a point for the paragraph itself as a base.
            contentScore += 1;

            // Add points for any commas within this paragraph.
            contentScore += innerText.split(",").length;

            // For every 100 characters in this paragraph, add another point. Up to 3 points.
            contentScore += Math.min(Math.floor(innerText.length / 100), 3);

            // Initialize and score ancestors.
            this._forEachNode(ancestors, function(ancestor, level) {
              if (!ancestor.tagName || !ancestor.parentNode || typeof(ancestor.parentNode.tagName) === "undefined")
                return;

              if (typeof(ancestor.readability) === "undefined") {
                this._initializeNode(ancestor);
                candidates.push(ancestor);
              }

              // Node score divider:
              // - parent:             1 (no division)
              // - grandparent:        2
              // - great grandparent+: ancestor level * 3
              if (level === 0)
                var scoreDivider = 1;
              else if (level === 1)
                scoreDivider = 2;
              else
                scoreDivider = level * 3;
              ancestor.readability.contentScore += contentScore / scoreDivider;
            });
          });

          // After we've calculated scores, loop through all of the possible
          // candidate nodes we found and find the one with the highest score.
          var topCandidates = [];
          for (var c = 0, cl = candidates.length; c < cl; c += 1) {
            var candidate = candidates[c];

            // Scale the final candidates score based on link density. Good content
            // should have a relatively small link density (5% or less) and be mostly
            // unaffected by this operation.
            var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
            candidate.readability.contentScore = candidateScore;

            this.log("Candidate:", candidate, "with score " + candidateScore);

            for (var t = 0; t < this._nbTopCandidates; t++) {
              var aTopCandidate = topCandidates[t];

              if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
                topCandidates.splice(t, 0, candidate);
                if (topCandidates.length > this._nbTopCandidates)
                  topCandidates.pop();
                break;
              }
            }
          }

          var topCandidate = topCandidates[0] || null;
          var neededToCreateTopCandidate = false;
          var parentOfTopCandidate;

          // If we still have no top candidate, just use the body as a last resort.
          // We also have to copy the body node so it is something we can modify.
          if (topCandidate === null || topCandidate.tagName === "BODY") {
            // Move all of the page's children into topCandidate
            topCandidate = doc.createElement("DIV");
            neededToCreateTopCandidate = true;
            // Move everything (not just elements, also text nodes etc.) into the container
            // so we even include text directly in the body:
            var kids = page.childNodes;
            while (kids.length) {
              this.log("Moving child out:", kids[0]);
              topCandidate.appendChild(kids[0]);
            }

            page.appendChild(topCandidate);

            this._initializeNode(topCandidate);
          } else if (topCandidate) {
            // Find a better top candidate node if it contains (at least three) nodes which belong to `topCandidates` array
            // and whose scores are quite closed with current `topCandidate` node.
            var alternativeCandidateAncestors = [];
            for (var i = 1; i < topCandidates.length; i++) {
              if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
                alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
              }
            }
            var MINIMUM_TOPCANDIDATES = 3;
            if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
              parentOfTopCandidate = topCandidate.parentNode;
              while (parentOfTopCandidate.tagName !== "BODY") {
                var listsContainingThisAncestor = 0;
                for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
                  listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
                }
                if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
                  topCandidate = parentOfTopCandidate;
                  break;
                }
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
              }
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }

            // Because of our bonus system, parents of candidates might have scores
            // themselves. They get half of the node. There won't be nodes with higher
            // scores than our topCandidate, but if we see the score going *up* in the first
            // few steps up the tree, that's a decent sign that there might be more content
            // lurking in other places that we want to unify in. The sibling stuff
            // below does some of that - but only if we've looked high enough up the DOM
            // tree.
            parentOfTopCandidate = topCandidate.parentNode;
            var lastScore = topCandidate.readability.contentScore;
            // The scores shouldn't get too low.
            var scoreThreshold = lastScore / 3;
            while (parentOfTopCandidate.tagName !== "BODY") {
              if (!parentOfTopCandidate.readability) {
                parentOfTopCandidate = parentOfTopCandidate.parentNode;
                continue;
              }
              var parentScore = parentOfTopCandidate.readability.contentScore;
              if (parentScore < scoreThreshold)
                break;
              if (parentScore > lastScore) {
                // Alright! We found a better parent to use.
                topCandidate = parentOfTopCandidate;
                break;
              }
              lastScore = parentOfTopCandidate.readability.contentScore;
              parentOfTopCandidate = parentOfTopCandidate.parentNode;
            }

            // If the top candidate is the only child, use parent instead. This will help sibling
            // joining logic when adjacent content is actually located in parent's sibling node.
            parentOfTopCandidate = topCandidate.parentNode;
            while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
              topCandidate = parentOfTopCandidate;
              parentOfTopCandidate = topCandidate.parentNode;
            }
            if (!topCandidate.readability) {
              this._initializeNode(topCandidate);
            }
          }

          // Now that we have the top candidate, look through its siblings for content
          // that might also be related. Things like preambles, content split by ads
          // that we removed, etc.
          var articleContent = doc.createElement("DIV");
          if (isPaging)
            articleContent.id = "readability-content";

          var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
          // Keep potential top candidate's parent node to try to get text direction of it later.
          parentOfTopCandidate = topCandidate.parentNode;
          var siblings = parentOfTopCandidate.children;

          for (var s = 0, sl = siblings.length; s < sl; s++) {
            var sibling = siblings[s];
            var append = false;

            this.log("Looking at sibling node:", sibling, sibling.readability ? ("with score " + sibling.readability.contentScore) : "");
            this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");

            if (sibling === topCandidate) {
              append = true;
            } else {
              var contentBonus = 0;

              // Give a bonus if sibling nodes and top candidates have the example same classname
              if (sibling.className === topCandidate.className && topCandidate.className !== "")
                contentBonus += topCandidate.readability.contentScore * 0.2;

              if (sibling.readability &&
                  ((sibling.readability.contentScore + contentBonus) >= siblingScoreThreshold)) {
                append = true;
              } else if (sibling.nodeName === "P") {
                var linkDensity = this._getLinkDensity(sibling);
                var nodeContent = this._getInnerText(sibling);
                var nodeLength = nodeContent.length;

                if (nodeLength > 80 && linkDensity < 0.25) {
                  append = true;
                } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 &&
                           nodeContent.search(/\.( |$)/) !== -1) {
                  append = true;
                }
              }
            }

            if (append) {
              this.log("Appending node:", sibling);

              if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
                // We have a node that isn't a common block level element, like a form or td tag.
                // Turn it into a div so it doesn't get filtered out later by accident.
                this.log("Altering sibling:", sibling, "to div.");

                sibling = this._setNodeTag(sibling, "DIV");
              }

              articleContent.appendChild(sibling);
              // siblings is a reference to the children array, and
              // sibling is removed from the array when we call appendChild().
              // As a result, we must revisit this index since the nodes
              // have been shifted.
              s -= 1;
              sl -= 1;
            }
          }

          if (this._debug)
            this.log("Article content pre-prep: " + articleContent.innerHTML);
          // So we have all of the content that we need. Now we clean it up for presentation.
          this._prepArticle(articleContent);
          if (this._debug)
            this.log("Article content post-prep: " + articleContent.innerHTML);

          if (neededToCreateTopCandidate) {
            // We already created a fake div thing, and there wouldn't have been any siblings left
            // for the previous loop, so there's no point trying to create a new div, and then
            // move all the children over. Just assign IDs and class names here. No need to append
            // because that already happened anyway.
            topCandidate.id = "readability-page-1";
            topCandidate.className = "page";
          } else {
            var div = doc.createElement("DIV");
            div.id = "readability-page-1";
            div.className = "page";
            var children = articleContent.childNodes;
            while (children.length) {
              div.appendChild(children[0]);
            }
            articleContent.appendChild(div);
          }

          if (this._debug)
            this.log("Article content after paging: " + articleContent.innerHTML);

          var parseSuccessful = true;

          // Now that we've gone through the full algorithm, check to see if
          // we got any meaningful content. If we didn't, we may need to re-run
          // grabArticle with different flags set. This gives us a higher likelihood of
          // finding the content, and the sieve approach gives us a higher likelihood of
          // finding the -right- content.
          var textLength = this._getInnerText(articleContent, true).length;
          if (textLength < this._charThreshold) {
            parseSuccessful = false;
            page.innerHTML = pageCacheHtml;

            if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
              this._attempts.push({articleContent: articleContent, textLength: textLength});
            } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
              this._removeFlag(this.FLAG_WEIGHT_CLASSES);
              this._attempts.push({articleContent: articleContent, textLength: textLength});
            } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
              this._attempts.push({articleContent: articleContent, textLength: textLength});
            } else {
              this._attempts.push({articleContent: articleContent, textLength: textLength});
              // No luck after removing flags, just return the longest text we found during the different loops
              this._attempts.sort(function (a, b) {
                return b.textLength - a.textLength;
              });

              // But first check if we actually have something
              if (!this._attempts[0].textLength) {
                return null;
              }

              articleContent = this._attempts[0].articleContent;
              parseSuccessful = true;
            }
          }

          if (parseSuccessful) {
            // Find out text direction from ancestors of final top candidate.
            var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
            this._someNode(ancestors, function(ancestor) {
              if (!ancestor.tagName)
                return false;
              var articleDir = ancestor.getAttribute("dir");
              if (articleDir) {
                this._articleDir = articleDir;
                return true;
              }
              return false;
            });
            return articleContent;
          }
        }
      },

      /**
       * Check whether the input string could be a byline.
       * This verifies that the input is a string, and that the length
       * is less than 100 chars.
       *
       * @param possibleByline {string} - a string to check whether its a byline.
       * @return Boolean - whether the input string is a byline.
       */
      _isValidByline: function(byline) {
        if (typeof byline == "string" || byline instanceof String) {
          byline = byline.trim();
          return (byline.length > 0) && (byline.length < 100);
        }
        return false;
      },

      /**
       * Converts some of the common HTML entities in string to their corresponding characters.
       *
       * @param str {string} - a string to unescape.
       * @return string without HTML entity.
       */
      _unescapeHtmlEntities: function(str) {
        if (!str) {
          return str;
        }

        var htmlEscapeMap = this.HTML_ESCAPE_MAP;
        return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
          return htmlEscapeMap[tag];
        }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
          var num = parseInt(hex || numStr, hex ? 16 : 10);
          return String.fromCharCode(num);
        });
      },

      /**
       * Try to extract metadata from JSON-LD object.
       * For now, only Schema.org objects of type Article or its subtypes are supported.
       * @return Object with any metadata that could be extracted (possibly none)
       */
      _getJSONLD: function (doc) {
        var scripts = this._getAllNodesWithTag(doc, ["script"]);

        var jsonLdElement = this._findNode(scripts, function(el) {
          return el.getAttribute("type") === "application/ld+json";
        });

        if (jsonLdElement) {
          try {
            // Strip CDATA markers if present
            var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
            var parsed = JSON.parse(content);
            var metadata = {};
            if (
              !parsed["@context"] ||
              !parsed["@context"].match(/^https?\:\/\/schema\.org$/)
            ) {
              return metadata;
            }

            if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
              parsed = parsed["@graph"].find(function(it) {
                return (it["@type"] || "").match(
                  this.REGEXPS.jsonLdArticleTypes
                );
              });
            }

            if (
              !parsed ||
              !parsed["@type"] ||
              !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)
            ) {
              return metadata;
            }
            if (typeof parsed.name === "string") {
              metadata.title = parsed.name.trim();
            } else if (typeof parsed.headline === "string") {
              metadata.title = parsed.headline.trim();
            }
            if (parsed.author) {
              if (typeof parsed.author.name === "string") {
                metadata.byline = parsed.author.name.trim();
              } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
                metadata.byline = parsed.author
                  .filter(function(author) {
                    return author && typeof author.name === "string";
                  })
                  .map(function(author) {
                    return author.name.trim();
                  })
                  .join(", ");
              }
            }
            if (typeof parsed.description === "string") {
              metadata.excerpt = parsed.description.trim();
            }
            if (
              parsed.publisher &&
              typeof parsed.publisher.name === "string"
            ) {
              metadata.siteName = parsed.publisher.name.trim();
            }
            return metadata;
          } catch (err) {
            this.log(err.message);
          }
        }
        return {};
      },

      /**
       * Attempts to get excerpt and byline metadata for the article.
       *
       * @param {Object} jsonld — object containing any metadata that
       * could be extracted from JSON-LD object.
       *
       * @return Object with optional "excerpt" and "byline" properties
       */
      _getArticleMetadata: function(jsonld) {
        var metadata = {};
        var values = {};
        var metaElements = this._doc.getElementsByTagName("meta");

        // property is a space-separated list of values
        var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;

        // name is a single value
        var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;

        // Find description tags.
        this._forEachNode(metaElements, function(element) {
          var elementName = element.getAttribute("name");
          var elementProperty = element.getAttribute("property");
          var content = element.getAttribute("content");
          if (!content) {
            return;
          }
          var matches = null;
          var name = null;

          if (elementProperty) {
            matches = elementProperty.match(propertyPattern);
            if (matches) {
              // Convert to lowercase, and remove any whitespace
              // so we can match below.
              name = matches[0].toLowerCase().replace(/\s/g, "");
              // multiple authors
              values[name] = content.trim();
            }
          }
          if (!matches && elementName && namePattern.test(elementName)) {
            name = elementName;
            if (content) {
              // Convert to lowercase, remove any whitespace, and convert dots
              // to colons so we can match below.
              name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
              values[name] = content.trim();
            }
          }
        });

        // get title
        metadata.title = jsonld.title ||
                         values["dc:title"] ||
                         values["dcterm:title"] ||
                         values["og:title"] ||
                         values["weibo:article:title"] ||
                         values["weibo:webpage:title"] ||
                         values["title"] ||
                         values["twitter:title"];

        if (!metadata.title) {
          metadata.title = this._getArticleTitle();
        }

        // get author
        metadata.byline = jsonld.byline ||
                          values["dc:creator"] ||
                          values["dcterm:creator"] ||
                          values["author"];

        // get description
        metadata.excerpt = jsonld.excerpt ||
                           values["dc:description"] ||
                           values["dcterm:description"] ||
                           values["og:description"] ||
                           values["weibo:article:description"] ||
                           values["weibo:webpage:description"] ||
                           values["description"] ||
                           values["twitter:description"];

        // get site name
        metadata.siteName = jsonld.siteName ||
                            values["og:site_name"];

        // in many sites the meta value is escaped with HTML entities,
        // so here we need to unescape it
        metadata.title = this._unescapeHtmlEntities(metadata.title);
        metadata.byline = this._unescapeHtmlEntities(metadata.byline);
        metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
        metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);

        return metadata;
      },

      /**
       * Check if node is image, or if node contains exactly only one image
       * whether as a direct child or as its descendants.
       *
       * @param Element
      **/
      _isSingleImage: function(node) {
        if (node.tagName === "IMG") {
          return true;
        }

        if (node.children.length !== 1 || node.textContent.trim() !== "") {
          return false;
        }

        return this._isSingleImage(node.children[0]);
      },

      /**
       * Find all <noscript> that are located after <img> nodes, and which contain only one
       * <img> element. Replace the first image with the image from inside the <noscript> tag,
       * and remove the <noscript> tag. This improves the quality of the images we use on
       * some sites (e.g. Medium).
       *
       * @param Element
      **/
      _unwrapNoscriptImages: function(doc) {
        // Find img without source or attributes that might contains image, and remove it.
        // This is done to prevent a placeholder img is replaced by img from noscript in next step.
        var imgs = Array.from(doc.getElementsByTagName("img"));
        this._forEachNode(imgs, function(img) {
          for (var i = 0; i < img.attributes.length; i++) {
            var attr = img.attributes[i];
            switch (attr.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }

            if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
              return;
            }
          }

          img.parentNode.removeChild(img);
        });

        // Next find noscript and try to extract its image
        var noscripts = Array.from(doc.getElementsByTagName("noscript"));
        this._forEachNode(noscripts, function(noscript) {
          // Parse content of noscript and make sure it only contains image
          var tmp = doc.createElement("div");
          tmp.innerHTML = noscript.innerHTML;
          if (!this._isSingleImage(tmp)) {
            return;
          }

          // If noscript has previous sibling and it only contains image,
          // replace it with noscript content. However we also keep old
          // attributes that might contains image.
          var prevElement = noscript.previousElementSibling;
          if (prevElement && this._isSingleImage(prevElement)) {
            var prevImg = prevElement;
            if (prevImg.tagName !== "IMG") {
              prevImg = prevElement.getElementsByTagName("img")[0];
            }

            var newImg = tmp.getElementsByTagName("img")[0];
            for (var i = 0; i < prevImg.attributes.length; i++) {
              var attr = prevImg.attributes[i];
              if (attr.value === "") {
                continue;
              }

              if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                if (newImg.getAttribute(attr.name) === attr.value) {
                  continue;
                }

                var attrName = attr.name;
                if (newImg.hasAttribute(attrName)) {
                  attrName = "data-old-" + attrName;
                }

                newImg.setAttribute(attrName, attr.value);
              }
            }

            noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
          }
        });
      },

      /**
       * Removes script tags from the document.
       *
       * @param Element
      **/
      _removeScripts: function(doc) {
        this._removeNodes(this._getAllNodesWithTag(doc, ["script"]), function(scriptNode) {
          scriptNode.nodeValue = "";
          scriptNode.removeAttribute("src");
          return true;
        });
        this._removeNodes(this._getAllNodesWithTag(doc, ["noscript"]));
      },

      /**
       * Check if this node has only whitespace and a single element with given tag
       * Returns false if the DIV node contains non-empty text nodes
       * or if it contains no element with given tag or more than 1 element.
       *
       * @param Element
       * @param string tag of child element
      **/
      _hasSingleTagInsideElement: function(element, tag) {
        // There should be exactly 1 element child with given tag
        if (element.children.length != 1 || element.children[0].tagName !== tag) {
          return false;
        }

        // And there should be no text nodes with real content
        return !this._someNode(element.childNodes, function(node) {
          return node.nodeType === this.TEXT_NODE &&
                 this.REGEXPS.hasContent.test(node.textContent);
        });
      },

      _isElementWithoutContent: function(node) {
        return node.nodeType === this.ELEMENT_NODE &&
          node.textContent.trim().length == 0 &&
          (node.children.length == 0 ||
           node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
      },

      /**
       * Determine whether element has any children block level elements.
       *
       * @param Element
       */
      _hasChildBlockElement: function (element) {
        return this._someNode(element.childNodes, function(node) {
          return this.DIV_TO_P_ELEMS.has(node.tagName) ||
                 this._hasChildBlockElement(node);
        });
      },

      /***
       * Determine if a node qualifies as phrasing content.
       * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
      **/
      _isPhrasingContent: function(node) {
        return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 ||
          ((node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") &&
            this._everyNode(node.childNodes, this._isPhrasingContent));
      },

      _isWhitespace: function(node) {
        return (node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0) ||
               (node.nodeType === this.ELEMENT_NODE && node.tagName === "BR");
      },

      /**
       * Get the inner text of a node - cross browser compatibly.
       * This also strips out any excess whitespace to be found.
       *
       * @param Element
       * @param Boolean normalizeSpaces (default: true)
       * @return string
      **/
      _getInnerText: function(e, normalizeSpaces) {
        normalizeSpaces = (typeof normalizeSpaces === "undefined") ? true : normalizeSpaces;
        var textContent = e.textContent.trim();

        if (normalizeSpaces) {
          return textContent.replace(this.REGEXPS.normalize, " ");
        }
        return textContent;
      },

      /**
       * Get the number of times a string s appears in the node e.
       *
       * @param Element
       * @param string - what to split on. Default is ","
       * @return number (integer)
      **/
      _getCharCount: function(e, s) {
        s = s || ",";
        return this._getInnerText(e).split(s).length - 1;
      },

      /**
       * Remove the style attribute on every e and under.
       * TODO: Test if getElementsByTagName(*) is faster.
       *
       * @param Element
       * @return void
      **/
      _cleanStyles: function(e) {
        if (!e || e.tagName.toLowerCase() === "svg")
          return;

        // Remove `style` and deprecated presentational attributes
        for (var i = 0; i < this.PRESENTATIONAL_ATTRIBUTES.length; i++) {
          e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);
        }

        if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) !== -1) {
          e.removeAttribute("width");
          e.removeAttribute("height");
        }

        var cur = e.firstElementChild;
        while (cur !== null) {
          this._cleanStyles(cur);
          cur = cur.nextElementSibling;
        }
      },

      /**
       * Get the density of links as a percentage of the content
       * This is the amount of text that is inside a link divided by the total text in the node.
       *
       * @param Element
       * @return number (float)
      **/
      _getLinkDensity: function(element) {
        var textLength = this._getInnerText(element).length;
        if (textLength === 0)
          return 0;

        var linkLength = 0;

        // XXX implement _reduceNodeList?
        this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
          var href = linkNode.getAttribute("href");
          var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
          linkLength += this._getInnerText(linkNode).length * coefficient;
        });

        return linkLength / textLength;
      },

      /**
       * Get an elements class/id weight. Uses regular expressions to tell if this
       * element looks good or bad.
       *
       * @param Element
       * @return number (Integer)
      **/
      _getClassWeight: function(e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
          return 0;

        var weight = 0;

        // Look for a special classname
        if (typeof(e.className) === "string" && e.className !== "") {
          if (this.REGEXPS.negative.test(e.className))
            weight -= 25;

          if (this.REGEXPS.positive.test(e.className))
            weight += 25;
        }

        // Look for a special ID
        if (typeof(e.id) === "string" && e.id !== "") {
          if (this.REGEXPS.negative.test(e.id))
            weight -= 25;

          if (this.REGEXPS.positive.test(e.id))
            weight += 25;
        }

        return weight;
      },

      /**
       * Clean a node of all elements of type "tag".
       * (Unless it's a youtube/vimeo video. People love movies.)
       *
       * @param Element
       * @param string tag to clean
       * @return void
       **/
      _clean: function(e, tag) {
        var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;

        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(element) {
          // Allow youtube and vimeo videos through as people usually want to see those.
          if (isEmbed) {
            // First, check the elements attributes to see if any of them contain youtube or vimeo
            for (var i = 0; i < element.attributes.length; i++) {
              if (this.REGEXPS.videos.test(element.attributes[i].value)) {
                return false;
              }
            }

            // For embed with <object> tag, check inner HTML as well.
            if (element.tagName === "object" && this.REGEXPS.videos.test(element.innerHTML)) {
              return false;
            }
          }

          return true;
        });
      },

      /**
       * Check if a given node has one of its ancestor tag name matching the
       * provided one.
       * @param  HTMLElement node
       * @param  String      tagName
       * @param  Number      maxDepth
       * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
       * @return Boolean
       */
      _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
        maxDepth = maxDepth || 3;
        tagName = tagName.toUpperCase();
        var depth = 0;
        while (node.parentNode) {
          if (maxDepth > 0 && depth > maxDepth)
            return false;
          if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
            return true;
          node = node.parentNode;
          depth++;
        }
        return false;
      },

      /**
       * Return an object indicating how many rows and columns this table has.
       */
      _getRowAndColumnCount: function(table) {
        var rows = 0;
        var columns = 0;
        var trs = table.getElementsByTagName("tr");
        for (var i = 0; i < trs.length; i++) {
          var rowspan = trs[i].getAttribute("rowspan") || 0;
          if (rowspan) {
            rowspan = parseInt(rowspan, 10);
          }
          rows += (rowspan || 1);

          // Now look for column-related info
          var columnsInThisRow = 0;
          var cells = trs[i].getElementsByTagName("td");
          for (var j = 0; j < cells.length; j++) {
            var colspan = cells[j].getAttribute("colspan") || 0;
            if (colspan) {
              colspan = parseInt(colspan, 10);
            }
            columnsInThisRow += (colspan || 1);
          }
          columns = Math.max(columns, columnsInThisRow);
        }
        return {rows: rows, columns: columns};
      },

      /**
       * Look for 'data' (as opposed to 'layout') tables, for which we use
       * similar checks as
       * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
       */
      _markDataTables: function(root) {
        var tables = root.getElementsByTagName("table");
        for (var i = 0; i < tables.length; i++) {
          var table = tables[i];
          var role = table.getAttribute("role");
          if (role == "presentation") {
            table._readabilityDataTable = false;
            continue;
          }
          var datatable = table.getAttribute("datatable");
          if (datatable == "0") {
            table._readabilityDataTable = false;
            continue;
          }
          var summary = table.getAttribute("summary");
          if (summary) {
            table._readabilityDataTable = true;
            continue;
          }

          var caption = table.getElementsByTagName("caption")[0];
          if (caption && caption.childNodes.length > 0) {
            table._readabilityDataTable = true;
            continue;
          }

          // If the table has a descendant with any of these tags, consider a data table:
          var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
          var descendantExists = function(tag) {
            return !!table.getElementsByTagName(tag)[0];
          };
          if (dataTableDescendants.some(descendantExists)) {
            this.log("Data table because found data-y descendant");
            table._readabilityDataTable = true;
            continue;
          }

          // Nested tables indicate a layout table:
          if (table.getElementsByTagName("table")[0]) {
            table._readabilityDataTable = false;
            continue;
          }

          var sizeInfo = this._getRowAndColumnCount(table);
          if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
            table._readabilityDataTable = true;
            continue;
          }
          // Now just go by size entirely:
          table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
        }
      },

      /* convert images and figures that have properties like data-src into images that can be loaded without JS */
      _fixLazyImages: function (root) {
        this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function (elem) {
          // In some sites (e.g. Kotaku), they put 1px square image as base64 data uri in the src attribute.
          // So, here we check if the data uri is too short, just might as well remove it.
          if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
            // Make sure it's not SVG, because SVG can have a meaningful image in under 133 bytes.
            var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
            if (parts[1] === "image/svg+xml") {
              return;
            }

            // Make sure this element has other attributes which contains image.
            // If it doesn't, then this src is important and shouldn't be removed.
            var srcCouldBeRemoved = false;
            for (var i = 0; i < elem.attributes.length; i++) {
              var attr = elem.attributes[i];
              if (attr.name === "src") {
                continue;
              }

              if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
                srcCouldBeRemoved = true;
                break;
              }
            }

            // Here we assume if image is less than 100 bytes (or 133B after encoded to base64)
            // it will be too small, therefore it might be placeholder image.
            if (srcCouldBeRemoved) {
              var b64starts = elem.src.search(/base64\s*/i) + 7;
              var b64length = elem.src.length - b64starts;
              if (b64length < 133) {
                elem.removeAttribute("src");
              }
            }
          }

          // also check for "null" to work around https://github.com/jsdom/jsdom/issues/2580
          if ((elem.src || (elem.srcset && elem.srcset != "null")) && elem.className.toLowerCase().indexOf("lazy") === -1) {
            return;
          }

          for (var j = 0; j < elem.attributes.length; j++) {
            attr = elem.attributes[j];
            if (attr.name === "src" || attr.name === "srcset") {
              continue;
            }
            var copyTo = null;
            if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
              copyTo = "srcset";
            } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
              copyTo = "src";
            }
            if (copyTo) {
              //if this is an img or picture, set the attribute directly
              if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
                elem.setAttribute(copyTo, attr.value);
              } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
                //if the item is a <figure> that does not contain an image or picture, create one and place it inside the figure
                //see the nytimes-3 testcase for an example
                var img = this._doc.createElement("img");
                img.setAttribute(copyTo, attr.value);
                elem.appendChild(img);
              }
            }
          }
        });
      },

      _getTextDensity: function(e, tags) {
        var textLength = this._getInnerText(e, true).length;
        if (textLength === 0) {
          return 0;
        }
        var childrenLength = 0;
        var children = this._getAllNodesWithTag(e, tags);
        this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
        return childrenLength / textLength;
      },

      /**
       * Clean an element of all tags of type "tag" if they look fishy.
       * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
       *
       * @return void
       **/
      _cleanConditionally: function(e, tag) {
        if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
          return;

        // Gather counts for other typical elements embedded within.
        // Traverse backwards so we can remove nodes at the same time
        // without effecting the traversal.
        //
        // TODO: Consider taking into account original contentScore here.
        this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(node) {
          // First check if this node IS data table, in which case don't remove it.
          var isDataTable = function(t) {
            return t._readabilityDataTable;
          };

          var isList = tag === "ul" || tag === "ol";
          if (!isList) {
            var listLength = 0;
            var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
            this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
            isList = listLength / this._getInnerText(node).length > 0.9;
          }

          if (tag === "table" && isDataTable(node)) {
            return false;
          }

          // Next check if we're inside a data table, in which case don't remove it as well.
          if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
            return false;
          }

          if (this._hasAncestorTag(node, "code")) {
            return false;
          }

          var weight = this._getClassWeight(node);

          this.log("Cleaning Conditionally", node);

          var contentScore = 0;

          if (weight + contentScore < 0) {
            return true;
          }

          if (this._getCharCount(node, ",") < 10) {
            // If there are not very many commas, and the number of
            // non-paragraph elements is more than paragraphs or other
            // ominous signs, remove the element.
            var p = node.getElementsByTagName("p").length;
            var img = node.getElementsByTagName("img").length;
            var li = node.getElementsByTagName("li").length - 100;
            var input = node.getElementsByTagName("input").length;
            var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);

            var embedCount = 0;
            var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);

            for (var i = 0; i < embeds.length; i++) {
              // If this embed has attribute that matches video regex, don't delete it.
              for (var j = 0; j < embeds[i].attributes.length; j++) {
                if (this.REGEXPS.videos.test(embeds[i].attributes[j].value)) {
                  return false;
                }
              }

              // For embed with <object> tag, check inner HTML as well.
              if (embeds[i].tagName === "object" && this.REGEXPS.videos.test(embeds[i].innerHTML)) {
                return false;
              }

              embedCount++;
            }

            var linkDensity = this._getLinkDensity(node);
            var contentLength = this._getInnerText(node).length;

            var haveToRemove =
              (img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure")) ||
              (!isList && li > p) ||
              (input > Math.floor(p/3)) ||
              (!isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure")) ||
              (!isList && weight < 25 && linkDensity > 0.2) ||
              (weight >= 25 && linkDensity > 0.5) ||
              ((embedCount === 1 && contentLength < 75) || embedCount > 1);
            return haveToRemove;
          }
          return false;
        });
      },

      /**
       * Clean out elements that match the specified conditions
       *
       * @param Element
       * @param Function determines whether a node should be removed
       * @return void
       **/
      _cleanMatchedNodes: function(e, filter) {
        var endOfSearchMarkerNode = this._getNextNode(e, true);
        var next = this._getNextNode(e);
        while (next && next != endOfSearchMarkerNode) {
          if (filter.call(this, next, next.className + " " + next.id)) {
            next = this._removeAndGetNext(next);
          } else {
            next = this._getNextNode(next);
          }
        }
      },

      /**
       * Clean out spurious headers from an Element.
       *
       * @param Element
       * @return void
      **/
      _cleanHeaders: function(e) {
        let headingNodes = this._getAllNodesWithTag(e, ["h1", "h2"]);
        this._removeNodes(headingNodes, function(node) {
          let shouldRemove = this._getClassWeight(node) < 0;
          if (shouldRemove) {
            this.log("Removing header with low class weight:", node);
          }
          return shouldRemove;
        });
      },

      /**
       * Check if this node is an H1 or H2 element whose content is mostly
       * the same as the article title.
       *
       * @param Element  the node to check.
       * @return boolean indicating whether this is a title-like header.
       */
      _headerDuplicatesTitle: function(node) {
        if (node.tagName != "H1" && node.tagName != "H2") {
          return false;
        }
        var heading = this._getInnerText(node, false);
        this.log("Evaluating similarity of header:", heading, this._articleTitle);
        return this._textSimilarity(this._articleTitle, heading) > 0.75;
      },

      _flagIsActive: function(flag) {
        return (this._flags & flag) > 0;
      },

      _removeFlag: function(flag) {
        this._flags = this._flags & ~flag;
      },

      _isProbablyVisible: function(node) {
        // Have to null-check node.style and node.className.indexOf to deal with SVG and MathML nodes.
        return (!node.style || node.style.display != "none")
          && !node.hasAttribute("hidden")
          //check for "fallback-image" so that wikimedia math images are displayed
          && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
      },

      /**
       * Runs readability.
       *
       * Workflow:
       *  1. Prep the document by removing script tags, css, etc.
       *  2. Build readability's DOM tree.
       *  3. Grab the article content from the current dom tree.
       *  4. Replace the current DOM tree with the new one.
       *  5. Read peacefully.
       *
       * @return void
       **/
      parse: function () {
        // Avoid parsing too large documents, as per configuration option
        if (this._maxElemsToParse > 0) {
          var numTags = this._doc.getElementsByTagName("*").length;
          if (numTags > this._maxElemsToParse) {
            throw new Error("Aborting parsing document; " + numTags + " elements found");
          }
        }

        // Unwrap image from noscript
        this._unwrapNoscriptImages(this._doc);

        // Extract JSON-LD metadata before removing scripts
        var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);

        // Remove script tags from the document.
        this._removeScripts(this._doc);

        this._prepDocument();

        var metadata = this._getArticleMetadata(jsonLd);
        this._articleTitle = metadata.title;

        var articleContent = this._grabArticle();
        if (!articleContent)
          return null;

        this.log("Grabbed: " + articleContent.innerHTML);

        this._postProcessContent(articleContent);

        // If we haven't found an excerpt in the article's metadata, use the article's
        // first paragraph as the excerpt. This is used for displaying a preview of
        // the article's content.
        if (!metadata.excerpt) {
          var paragraphs = articleContent.getElementsByTagName("p");
          if (paragraphs.length > 0) {
            metadata.excerpt = paragraphs[0].textContent.trim();
          }
        }

        var textContent = articleContent.textContent;
        return {
          title: this._articleTitle,
          byline: metadata.byline || this._articleByline,
          dir: this._articleDir,
          content: this._serializer(articleContent),
          textContent: textContent,
          length: textContent.length,
          excerpt: metadata.excerpt,
          siteName: metadata.siteName || this._articleSiteName
        };
      }
    };

    {
      module.exports = Readability;
    }
    });

    /* eslint-env es6:false */

    var ReadabilityReaderable = createCommonjsModule(function (module) {
    /*
     * Copyright (c) 2010 Arc90 Inc
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /*
     * This code is heavily based on Arc90's readability.js (1.7.1) script
     * available at: http://code.google.com/p/arc90labs-readability
     */

    var REGEXPS = {
      // NOTE: These two regular expressions are duplicated in
      // Readability.js. Please keep both copies in sync.
      unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
      okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
    };

    function isNodeVisible(node) {
      // Have to null-check node.style and node.className.indexOf to deal with SVG and MathML nodes.
      return (!node.style || node.style.display != "none")
        && !node.hasAttribute("hidden")
        //check for "fallback-image" so that wikimedia math images are displayed
        && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
    }

    /**
     * Decides whether or not the document is reader-able without parsing the whole thing.
     * @param {Object} options Configuration object.
     * @param {number} [options.minContentLength=140] The minimum node content length used to decide if the document is readerable.
     * @param {number} [options.minScore=20] The minumum cumulated 'score' used to determine if the document is readerable.
     * @param {Function} [options.visibilityChecker=isNodeVisible] The function used to determine if a node is visible.
     * @return {boolean} Whether or not we suspect Readability.parse() will suceeed at returning an article object.
     */
    function isProbablyReaderable(doc, options = {}) {
      // For backward compatibility reasons 'options' can either be a configuration object or the function used
      // to determine if a node is visible.
      if (typeof options == "function") {
        options = { visibilityChecker: options };
      }

      var defaultOptions = { minScore: 20, minContentLength: 140, visibilityChecker: isNodeVisible };
      options = Object.assign(defaultOptions, options);

      var nodes = doc.querySelectorAll("p, pre");

      // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
      // Some articles' DOM structures might look like
      // <div>
      //   Sentences<br>
      //   <br>
      //   Sentences<br>
      // </div>
      var brNodes = doc.querySelectorAll("div > br");
      if (brNodes.length) {
        var set = new Set(nodes);
        [].forEach.call(brNodes, function (node) {
          set.add(node.parentNode);
        });
        nodes = Array.from(set);
      }

      var score = 0;
      // This is a little cheeky, we use the accumulator 'score' to decide what to return from
      // this callback:
      return [].some.call(nodes, function (node) {
        if (!options.visibilityChecker(node)) {
          return false;
        }

        var matchString = node.className + " " + node.id;
        if (REGEXPS.unlikelyCandidates.test(matchString) &&
            !REGEXPS.okMaybeItsACandidate.test(matchString)) {
          return false;
        }

        if (node.matches("li p")) {
          return false;
        }

        var textContentLength = node.textContent.trim().length;
        if (textContentLength < options.minContentLength) {
          return false;
        }

        score += Math.sqrt(textContentLength - options.minContentLength);

        if (score > options.minScore) {
          return true;
        }
        return false;
      });
    }

    {
      module.exports = isProbablyReaderable;
    }
    });

    var readability = {
      Readability: Readability_1,
      isProbablyReaderable: ReadabilityReaderable
    };

    console.log('readabilitys');
    console.log(readability.Readability);
    let template = () => X`
<div xfready id=lector class='fade-onload'>
    <div id='reader-rapper'> 
        <div id='reader' class='article'> 
            <h1> Super intense article </h1>
            <p> Yeet commit while your feet shit </p>
        </div>
    </div>
    <div id='exit' class='button'> Exit </div>
</div>
`.hide();

    class Lector extends q {
        constructor() {
            super();
            console.log("created new lector", this);
            // document.body.appendChild(element)
            this.as(template());

            this.element.find('#exit').listenTo('click', () => {
                this.exit();
            });

            var article = new readability.Readability(document.cloneNode(true)).parse();
            console.log(article);
            this.element.find("#reader").html(article.content);

        }

        render() {
            this.element.show();
            j('body').addClass(`xfready-lector-open`);
            return this
        }

        exit() {
            this.element.hide();
            j('body').removeClass(`xfready-lector-open`);
            return this
        }
    }

    let injected = false;
    function _lector() {
        if (!injected) {
            injectStyle("sanitized_elements");
            injected = true;
        }

        return new Lector
    }

    let element = X`
<div xfready id=popup class='fade-onload'>
    <h1> This is freadys popup </h1>
    <div class='button' id='read'> Read </div>
    <div class='button' id='exit'> X </div>
</div>
`;

    class Popup extends q {
        constructor() {
            super();
            console.log("created new popup", this);
            // document.body.appendChild(element)
            this.as(element);

            this.lector = null;
            this.element.find("#read").listenTo('click', () => {
                this.lector = _lector().appendTo(_e("html"))
                                        .render();
            });

            this.element.find("#exit").listenTo('click', () => {
                this.element.hide();
            });
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
            // pragmaSpace.onDocLoad(() => {
            _popup().appendTo(this);
            // })
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

    console.log('READY STATE', document.readyState);
    console.log('injecting styles...');
    injectStyle$1("main");
    window.xfready = new Xfready();

    // window.pragmajs = await import('pragmajs')
    // window.pragmajs.globalify()

    // _e("body").hide()

    exports.SVG = SVG;
    exports.compose = compose;
    exports.icons = icons;
    exports.injectStyle = injectStyle$1;
    exports.pragmajs = pragmajs;
    exports.pragmas = pragmas;
    exports.styles = styles;
    exports.xfready2Test = xfready2Test;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
