(function (global, factory) {
      typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
      typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.xfready2 = {}));
}(this, (function (exports) { 'use strict';

      function e(t,e=null,n=["rerun the code 10 times"],i=null,r=!1){if(!O$1()&&!r)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${i?`Triggered by: [${i.key} ${i}]`:""}\n      \n${t} %c\n\n      \n${null!=e?`Potential ${e}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function n$1(){if(!O$1())return null;console.log(...arguments);}function i$1(){if(!O$1())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class r$1{constructor(t){this.self=t,this.actions=new Map,this.delete=this.destroy;}addWithKey(t,e=null){return e=e||this.actions.size,this.actions.set(e,t),e}add(...t){let e=[];for(let n of t)e.push(this.addWithKey(n));return e.length>1?e:e[0]}forAction(t){for(let[e,n]of this.actions)t(e,n);}exec(...t){this.execAs(this.self,...t);}destroy(...t){t.forEach((t=>this.actions.delete(t)));}execAs(t,...e){this.forAction(((n,i)=>{let r=null;if(r="function"==typeof i.bind?i.bind(t)(...e):i(...e),"function"==typeof r){r({key:n,action:i,replaceWith:t=>{},selfDestruct:()=>{this.destroy(n);}});}}));}}function s$1(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function o$1(){return a$1(8)}function a$1(t=7){return t<5?s$1():(s$1()+a$1(t-5)).substring(0,t)}function l$1(t){return a$1(t)}function h$1(t,e){for(let[n,i]of Object.entries(e))t[n]=i;return t}const c$1=t=>t.replace(/([-_]\w)/g,(t=>t[1].toUpperCase()));function u$1(t,e){let n=`${t}Chain`,i=`on${t.capitalize()}`;return e[n]=new r$1(e),e[i]=function(t,i){e[n].addWithKey(t,i);},{chainName:n,eventName:i}}function f$1(t,...e){for(let n of e)u$1(n,t);}function d$1(t,e){let n=u$1(t,e),i=`is${t.capitalize()}ed`;e[n.chainName].add((()=>{e[i]=!0;})),e[n.eventName]=function(t){if(e[i])return t(e);e[n.chainName].add(t);};}function p$1(t,...e){for(let n of e)d$1(n,t);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const m$1=t=>t.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),p$1(globalThis.pragmaSpace,"docLoad");const g$1=globalThis.pragmaSpace.onDocLoad;function y$1(){globalThis.pragmaSpace.isDocLoaded||(i$1("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}"complete"===document.readyState?y$1():(document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&y$1();})),document.addEventListener("turbolinks:load",(()=>{i$1("🚀 TURBOLINKS loaded"),y$1();})));var v$1=/[#.]/g;function b$1(t,e="div"){var n=t||"",i={tag:e},r=0;let s,o,a;for(;r<n.length;)v$1.lastIndex=r,a=v$1.exec(n),s=n.slice(r,a?a.index:n.length),s&&(o?"#"===o?i.id=s:i.class?i.class.push(s):i.class=[s]:i.tag=s,r+=s.length),a&&(o=a[0],r++);return i}function x$1(t,n,i){if(!Array.isArray(t))return e(`Could not ${i} class [${t}] -> [${n}]`);for(let e of t){let t=e.split(" ");t.length>1?x$1(t,n,i):n.classList[i](e);}}function $$1(t,e){x$1(t,e,"add");}function _$1(t,e){x$1(t,e,"remove");}function C$1(t,e){x$1(t,e,"toggle");}function E$1(t){t=t.trim();try{let e=document.querySelector(t);if(e)return e}catch{}let e=b$1(t),n=document.createElement(e.tag||"div");return e.id&&(n.id=e.id),e.class&&$$1(e.class,n),n}function T$1(t){return document.createRange().createContextualFragment(t)}function A$1(t){return t instanceof Element?t:"string"==typeof t?"<"===t[0]?T$1(t):E$1(t):e(`Could not find/create element from [${t}]`)}const w$1={html:(t,e)=>{e.innerHTML=t;},pcss:(t,e)=>{for(let[n,i]of S$1.cssToDict(t))e.style[c$1(n)]=i;}},S$1={cssToDict:t=>{t=t.replace(/\n/g,";").replace(/:/g," ");let n=new Map;for(let e of t.split(";")){if(e.replace(/\s/g,"").length<2)continue;e=e.trim().split(" ");let t=e[0];e.shift(),n.set(t.trim(),e.join(" ").trim());}let i=[];for(const[t,e]of n.entries())CSS.supports(t,e)||i.push(`${t.trim()}: ${e.trim()}`);return i.length>0&&e("CSS syntax error","typos",i),n},css:t=>{let e="";for(let[n,i]of S$1.cssToDict(t))e+=`${n}:${i};`;return e},html:t=>t};function O$1(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV;var M$1=Object.freeze({__proto__:null,_deving:O$1,throwSoft:e,log:n$1,suc:i$1,whenDOM:g$1,parseQuery:b$1,addClassAryTo:$$1,removeClassAryFrom:_$1,toggleClassAryOf:C$1,selectOrCreateDOM:E$1,elementFrom:A$1,toHTMLAttr:m$1,fragmentFromString:T$1,fillSVG:function(t,e){j$1(t).findAll("path").forEach((t=>{const n=t.attr("fill");"none"!=n&&"transparent"!=n&&t.attr("fill",e);}));},generateRandomKey:l$1,objDiff:h$1,aryDiff:function(t,e){return t.filter((t=>e.indexOf(t)<0))},_extend:function(t,e){Object.setPrototypeOf(t,h$1(Object.getPrototypeOf(t),e));},overwrite:function(t,e,n){let i=t[e];t[`_${e}`]=i.bind(t),t[e]=n;},createEventChains:p$1,createChains:f$1,snake2camel:c$1,mimic:function(t,e,n){for(let i of n||Object.keys(e)){let n=Object.getOwnPropertyDescriptor(e,i);if(!n)break;Object.defineProperty(t,i,n);}},bench:function(t,e){console.time(e),t(),console.timeEnd(e);},addStyles:function(t,e="injected-pragma-style"){j$1(`style#${e}-${s$1()}`,t).appendTo("head");},redirectTo:function(t,e=!1){history?.pushState({},document.title),Y$1`<a href="${t}" ${e?'target="_blank"':""}</a>`.click();},rk:a$1,rk5:s$1,rk8:o$1,parse:S$1,apply:w$1,createTemplate:t=>(new q$1).run((function(){f$1(this,"config"),this.config=function(t){return this.configChain.exec(t),this},this.onConfig(((t={})=>{["events","chains","exports","persistentExports"].forEach((e=>{t[e]&&(this[`_${e}`]=t[e],delete t[e]);})),this._events&&p$1(this,...this._events),this._chains&&f$1(this,...this._chains);for(let[e,n]of Object.entries(t))this[e]=n,this.export(e);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof t&&this.config(t);}))});function k$1(t){if(null==t||null==t)return e(`Could not find a DOM element for ${t}`);if(t.element)return k$1(t.element);return A$1(t)}function j$1(t,n){let i=k$1(t);return i?(i.constructor===DocumentFragment&&(r=i,(s=document.createElement("template")).appendChild(r.cloneNode(!0)),i=s.firstChild),i instanceof Element&&(i.init(),i._render()),"string"==typeof n&&i.html(n),i):e(`${t} could not be found/created`);var r,s;}const L$1={init:function(){this.isPragmaElement=!0,p$1(this,"docLoad","render"),g$1((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(t){return this.onDocLoad((()=>{this._parentElement=k$1(t),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(t){return this.onDocLoad((()=>{this._parentElement=k$1(t),this._parentElement.prepend(this),this._render();})),this},append:function(...t){return this.onRender((()=>{for(let e of t){let t=k$1(e);this.appendChild(t);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(t){return this.onRender((()=>{w$1.pcss(t,this);})),this},setText:function(t){return t?(this.onRender((()=>{this.textContent=t;})),this):this.text},html:function(t){return null==t?this.innerHTML:(this.onRender((()=>{w$1.html(t,this);})),this)},setId:function(t){return this.id=t,this},setData:function(t){for(let[e,n]of Object.entries(t))this.dataset[e]=n;return this},getData:function(t){return this.dataset[t]},addClass:function(...t){return $$1(t,this),this},removeClass:function(...t){return _$1(t,this),this},toggleClass:function(...t){return C$1(t,this),this},listenTo:function(...t){return this.onRender((()=>{this.addEventListener(...t);})),this},clone:function(t=!0){return this.cloneNode(t)},attr:function(t,e=null){if("string"==typeof t){if(null===e)return this.getAttribute(t);const n=t;(t={})[n]=e;}for(let[e,n]of Object.entries(t))this.setAttribute(e,n);return this},find:function(){return j$1(this.query(...arguments))},define:function(t){this.setData(t);for(let[e,n]of Object.entries(t))this[e]=this.id?`#${this.id}>${n}`:n;return this},findAll:function(t){return Array.from(this.queryAll(t)).map((t=>j$1(t)))},query:function(){return this.querySelector(...arguments)},queryAll:function(t){return this.querySelectorAll(t)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(t){let e=Array.from(this.queryAll(t));for(let n of this.children)e=e.concat(n.deepQueryAll(t));return e},deepFindAll:function(t){return this.deepQueryAll(t).map((t=>j$1(t)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(t){if(t){["width","height","left","right","top","bottom"].forEach((e=>{e in t&&(this.style[e]=t[e]+"px");}));}var e=this.rect();return {top:e.top+window.scrollY,left:e.left+window.scrollX}},x:function(t){return this.left+this.width/2-t/2}},D$1={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[t,e]of Object.entries(L$1))Element.prototype[t]=e;for(let[t,e]of Object.entries(D$1))Object.defineProperty(Element.prototype,t,{get:e,configurable:!0});class P$1{constructor(t){this._childMap=new Map,this.key="string"==typeof t?t:o$1(),this.containsKey=this.childMap.has;}set childMap(t){for(let[e,n]of t)n instanceof P$1&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let t=this.children;for(let e of t){let n=e.allChildren;n&&(t=t.concat(n));}return t}get(t){return this.childMap.get(t)}find(t){if(this.childMap.has(t))return this.childMap.get(t);for(let e of this.childMap.values()){let n;try{n=e.find(t);}catch{}if(n)return n}}adopt(...t){for(let e of t)this.add(e);return this}add(t,n=!1){return t?!n&&this.childMap.has(t.key)?(t.key=`${t.key}<${s$1()}`,this.add(t)):(t.parent=this,void this.childMap.set(t.key,t)):e(`Could not add [${t}] to [${this.id}]`)}delete(t){return this.remove(t)}remove(t){this.childMap.get(t)&&this.childMap.delete(t);}shapePrefix(t=""){let e=`${t}| ${this.type} - ${this.key} \n`;if(this.hasKids){t+="| ";for(let n of this.children)e+=n.shapePrefix(t);}return e}}const R$1={parent:(t,e)=>{t.parent=e;},value:(t,e)=>{t.value=e;},key:(t,e)=>{t.key=e;},class:(t,e)=>{t._class=e;},element:(t,n)=>{if(!(n instanceof Element))return e(`Could not add ${n} as the element of [${t}]`);t.element=n;},children:(t,e)=>{if(e.constructor==Array)return t.buildAry(e);t.build(e);},childTemplate:(t,e)=>{}};function z$1(t,e){return {val:t,set:e}}function N$1(t,e){return t=e.min?Math.max(e.min,t):t,t=e.max?Math.min(e.max,t):t}function K$1(t,n){return function(t){return t&&null!=t.min&&null!=t.max}(n)?(null==t&&(t=n.min),t=(t=t>n.max?n.min:t)<n.min?n.max:t):e(`Could not loop value, since range (${JSON.stringify(n)}) is unbounded`)}class q$1 extends P$1{constructor(t,e){super(),p$1(this,"export"),this.actionChain=new r$1,this._events=new Map,"object"==typeof t?function(t,e){let n=new Map;for(let[i,r]of Object.entries(t))R$1.hasOwnProperty(i)?R$1[i](e,r):n.set(i,r);e.element&&e.element.whenInDOM((t=>{for(let[i,r]of n)if(i=i.toLowerCase(),i.includes("on")){let n=i.split("on")[1].trim();t.listenTo(n,(()=>{e.action(r);}));}}));}(t,this):this.key=t,this.element||this.as(),this.init(...arguments);}init(){return this}listenTo(t,e){return this.element.listenTo(t,e.bind(this)),this}_createEvent(t){let e=new r$1(this);return this._events.set(t,e),e}createEvent(t,...e){return this._createEvent(t),e.length>0&&this.on(t,e),this}createEvents(...t){return t.forEach((t=>this._createEvent(t))),this}_getOrCreateEvent(t){return this._events.get(t)||this._createEvent(t)}_addToEventChain(t,...e){let n=this._getOrCreateEvent(t);if(n){let i=n.add(...e);return this._events.set(t,n),i}return null}triggerEvent(t,...e){return this._getOrCreateEvent(t).execAs(this,...e),this}triggerEvents(t,...e){return t.forEach((t=>this.triggerEvent(t,...e))),this}_on(t,...e){return this._addToEventChain(t,...e)}on(){return this._on(...arguments),this}_onNext(t,e){this._on(t,(function(){return e(...arguments),t=>{t.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...t){return t.forEach((t=>this.createWire(t))),this}createWire(t,e){let n={change:`${t}Change`,set:`${t}Set`};return this.createEvents(n.change,n.set),Object.defineProperty(this,t,{set:e=>{let i=function(t,e,n){if(n)return z$1(K$1(t,n),!0);if(e){let n=N$1(t,e);return z$1(n,n===t)}return z$1(t,!0)}(e,this[`_${t}Range`],this[`_${t}Loop`]);const r=this[`_${t}`];i.set&&i.val!==r&&(this[`_${t}`]=i.val,this.triggerEvent(n.change,i.val,r)),this.triggerEvent(n.set,e,r);},get:()=>this[`_${t}`]}),this[`set${t.capitalize()}`]=e=>(this[`${t}`]=e,this),this[`set${t.capitalize()}Silently`]=e=>(this[`_${t}`]=e,this),this[`set${t.capitalize()}Loop`]=(e,n)=>(this[`_${t}Loop`]={min:e,max:n},this),this[`set${t.capitalize()}Range`]=(e,n)=>(this[`_${t}Range`]={min:e,max:n},this),void 0!==e&&(this[`_${t}`]=e),this}get _e(){return this.element}setElement(t,e=!0){return this.elementDOM=t,e&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(t){this.setElement(t);}setRange(t=null,e=null){return this.range=this.range||{},this.range.min=null===t?this.range.min:t,this.range.max=null===e?this.range.max:e,this}breakLoop(){return this._loopVal=!1,this}setLoop(t,e){return this.setRange(t,e),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(t){return this.value=t,this}set value(t){let e=function(t,e,n){if(!e)return z$1(t,!0);if(n)return z$1(K$1(t,e),!0);let i=N$1(t,e);return z$1(i,i==t)}(t,this.range,this._loopVal);e.set&&(this._lv=this.v,this.v=e.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(t){return this.key=t,this}set key(t){this._KEY=null==t?l$1():t;}get key(){return this._KEY}set id(t){this.element&&(this.element.id=this.id);}get id(){return m$1(this.key)}buildAry(t){for(let e of t)this.add(new q$1(e,this));return this}build(...t){return this.buildAry(t)}as(t=null,e){return t=t||`div#${this.id}.pragma`,this.setElement(j$1(t,e),!1),this}asClone(t,e){return this.as(j$1(t).clone(),e),this}addExport(t){this.exports=this.exports||new Set,this.exports.add(t);}export(...t){for(let e of t)this.addExport(e);}import(...e){let n=new r$1;for(let i of e)"function"==typeof i&&(i=i()),i.exports&&M$1.mimic(this,i,i.exports),i.exportChain&&n.add((t=>{i.exportChain.exec(this);}));return n.exec(),this}from(e){return e.exports&&M$1.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(t){let e=this;return t.do((function(){e.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,n){return M$1.overwrite(this,e,n),this}define({...t}){for(let[e,n]of Object.entries(t)){if(!e)return console.error("could not define, no name passed",n);"function"==typeof n?this[e]=n:"string"==typeof n?this[e]=this.element.find(n):console.error("could not define",e);}return this}run(...t){let n=t[0];return "function"==typeof n?this._runAry(t):"object"==typeof n?this._runAry(Object.values(n)):e(`Could not run [${t}] as [${this}]`),this}_runAry(t){for(let e of t)this.runAs(e);}runAs(t){return t.bind(this)()}containAry(t,n="append"){for(let i of t)super.add(i),i.isRendered?e(`[${i}] is already appended`):this.element[n](i);return this}contain(...t){return this.containAry(t)}containFirst(...t){return this.containAry(t.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(t){return this.element.appendTo(t),this}renderTo(t){return j$1(t).html("").append(this.element),this.triggerEvent("render"),this}addListeners(t){for(let[e,n]of Object.entries(t))this.on(e).do(n);return this}}const W$1=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let t of W$1)q$1.prototype[t]=function(){return this.element[t](...arguments),this};const F$1=["getData"];for(let t of F$1)q$1.prototype[t]=function(){return this.element[t](...arguments)};const I$1=["offset","text","top","left","width","height","x","classArray"];for(let t of I$1)Object.defineProperty(q$1.prototype,t,{get:function(){return this.element[t]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(t){"function"==typeof t&&(q$1.prototype.bind=function(e,n,i){let r=this;return t.bind(e,(function(){return r.runAs(n)}),i),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i$1("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(t){n$1("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class V$1{static map=new Set;static load(t,e=s$1()){return new Promise((n=>{console.time(`[${e}] ${t} load`);let i=`${e}-script`;if(V$1.map.has(t)||0!=j$1("head").findAll(`#${i}`).length)return n();V$1.map.add(t);let r=Y$1`
        <script id="${i}" crossorigin src="${t}"></script>
      `.appendTo("head").listenTo("load",(function(){n(r),console.timeEnd(`[${i}] ${t} load`);}));}))}}function U$1(t){let e=`\n    onmessage = e => postMessage(JSON.stringify((${t.toString()})(e.data))) \n  `;var n=new Blob([e],{type:"application/javascript"}),i=new Worker(URL.createObjectURL(n));return function(){return i.postMessage(arguments),new Promise((t=>{i.addEventListener("message",(e=>t(JSON.parse(e.data))));}))}}function B$1(t){return new Promise((e=>e(t())))}function Q$1(...t){return B$1((()=>{for(let e of t)B$1(e);}))}const H$1=(t,e)=>new q$1(t,e),J$1=H$1;function Y$1(t,...e){return j$1(e.reduce(((e,n,i)=>`${e}${n}${t[i+1]}`),t[0]).trim())}function G$1(t,...e){let n=Y$1(t,...e);return J$1().as(n)}const X$1=["_e","_p","Pragma","util","block","html"];function Z$1(){let t=(globalThis||window).pragma;if(t&&"undefined"!==t&&t.__esModule)for(let e of X$1)globalThis[e]=t[e];else console.error("[pragmajs] seems to be missing...");}

      var pragmajs = /*#__PURE__*/Object.freeze({
            __proto__: null,
            ActionChain: r$1,
            Pragma: q$1,
            Script: V$1,
            _e: j$1,
            _p: J$1,
            _runAsync: B$1,
            _thread: U$1,
            block: G$1,
            globalify: Z$1,
            html: Y$1,
            runAsync: Q$1,
            util: M$1,
            π: H$1
      });

      var pragmas = /*#__PURE__*/Object.freeze({
            __proto__: null
      });

      var syntax_highlight = "@charset \"utf-8\";.ibm-mono,div[xfready] code,div[xfready] pre{font-family:\"IBM Plex Mono\" !important}.ibm-mono *,div[xfready] code *,div[xfready] pre *{font-family:\"IBM Plex Mono\" !important}div[xfready] pre{display:block;margin:20px 10px;padding:20px 10px;border-radius:2px;background:#221a0f;color:#abb2bf;white-space:pre-wrap;word-wrap:break-word}div[xfready] pre *{color:#abb2bf;white-space:pre-wrap;word-wrap:break-word;background:transparent !important}div[xfready] code{background:lightblue;border-radius:2px;padding:1px 3px}div[xfready] .hljs{color:#abb2bf;background:#282c34}div[xfready] .hljs-comment,div[xfready] .hljs-quote{color:#5c6370;font-style:italic}div[xfready] .hljs-doctag,div[xfready] .hljs-keyword,div[xfready] .hljs-formula{color:#c678dd}div[xfready] .hljs-section,div[xfready] .hljs-name,div[xfready] .hljs-selector-tag,div[xfready] .hljs-deletion,div[xfready] .hljs-subst{color:#e06c75}div[xfready] .hljs-literal{color:#56b6c2}div[xfready] .hljs-string,div[xfready] .hljs-regexp,div[xfready] .hljs-addition,div[xfready] .hljs-attribute,div[xfready] .hljs-meta-string{color:#98c379}div[xfready] .hljs-attr,div[xfready] .hljs-variable,div[xfready] .hljs-template-variable,div[xfready] .hljs-type,div[xfready] .hljs-selector-class,div[xfready] .hljs-selector-attr,div[xfready] .hljs-selector-pseudo,div[xfready] .hljs-number{color:#d19a66}div[xfready] .hljs-symbol,div[xfready] .hljs-bullet,div[xfready] .hljs-link,div[xfready] .hljs-meta,div[xfready] .hljs-selector-id,div[xfready] .hljs-title{color:#61aeee}div[xfready] .hljs-built_in,div[xfready] .hljs-title.hljs-class,div[xfready] .hljs-class .hljs-title{color:#e6c07b}div[xfready] .hljs-emphasis{font-style:italic}div[xfready] .hljs-strong{font-weight:bold}div[xfready] .hljs-link{text-decoration:underline}";
      var reset = "@charset \"utf-8\";/*!normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */ [xfready]{all:unset}[xfready] *:not(svg)>:not(svg){all:unset}[xfready] article,[xfready] aside,[xfready] details,[xfready] figcaption,[xfready] figure,[xfready] footer,[xfready] header,[xfready] main,[xfready] menu,[xfready] nav,[xfready] section,[xfready] summary{display:block}[xfready] audio,[xfready] canvas,[xfready] progress,[xfready] video{display:inline-block;vertical-align:baseline}[xfready] audio:not([controls]){display:none;height:0}[xfready] [hidden],[xfready] template{display:none}[xfready] a{background-color:transparent}[xfready] a:active,[xfready] a:hover{outline:0}[xfready] abbr[title]{border-bottom:1px dotted}[xfready] b,[xfready] strong{font-weight:bold}[xfready] dfn{font-style:italic}[xfready] h1{font-size:2em;margin:.67em 0}[xfready] mark{background:#ff0;color:#000}[xfready] small{font-size:80%}[xfready] sub,[xfready] sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}[xfready] sup{top:-0.5em}[xfready] sub{bottom:-0.25em}[xfready] img{border:0}[xfready] svg:not(:root){overflow:hidden}[xfready] figure{margin:1em 40px}[xfready] hr{box-sizing:content-box;height:0}[xfready] pre{overflow:auto}[xfready] code,[xfready] kbd,[xfready] pre,[xfready] samp{font-family:monospace,monospace;font-size:1em}[xfready] button,[xfready] input,[xfready] optgroup,[xfready] select,[xfready] textarea{color:inherit;font:inherit;margin:0}[xfready] button{overflow:visible}[xfready] button,[xfready] select{text-transform:none}[xfready] button,[xfready] html input[type=button],[xfready] input[type=reset],[xfready] input[type=submit]{-webkit-appearance:button;cursor:pointer}[xfready] button[disabled],[xfready] html input[disabled]{cursor:default}[xfready] button::-moz-focus-inner,[xfready] input::-moz-focus-inner{border:0;padding:0}[xfready] input{line-height:normal}[xfready] input[type=checkbox],[xfready] input[type=radio]{box-sizing:border-box;padding:0}[xfready] input[type=number]::-webkit-inner-spin-button,[xfready] input[type=number]::-webkit-outer-spin-button{height:auto}[xfready] input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}[xfready] input[type=search]::-webkit-search-cancel-button,[xfready] input[type=search]::-webkit-search-decoration{-webkit-appearance:none}[xfready] fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}[xfready] legend{border:0;padding:0}[xfready] textarea{overflow:auto}[xfready] optgroup{font-weight:bold}[xfready] table{border-collapse:collapse;border-spacing:0}[xfready] td,[xfready] th{padding:0}";
      var alma = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&display=swap);@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap);.alma{position:fixed;top:10px;right:-200px;z-index:97543456789863212389098323459098765432489098434567890987654345678987654345678 !important;height:50px;width:230px;background-color:#35363A;user-select:none;box-shadow:rgba(0,0,0,0.25) 0 0 15px 2px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:center;font-family:'IBM Plex Mono',monospace;font-size:18px;border-radius:3px;padding:5px 7px;opacity:1;box-sizing:border-box;float:right;transition:all ease .3s;-webkit-animation:slide .5s forwards;-webkit-animation-delay:2s;animation:slide .5s forwards;padding-right:3px}@-webkit-keyframes slide{100%{right:5px}}@keyframes slide{100%{right:5px}}@media (prefers-color-scheme:light){.alma{background:white}}.alma::after{content:'';position:absolute;height:100%;width:5px;background-color:#2b6cce;z-index:45678987654356787654567876545678;border-radius:3px 0 0 3px;left:0}.alma::before{content:'';position:absolute;height:60%;width:1px;background-color:#fff;opacity:30%;right:52px;border-radius:2px}@media (prefers-color-scheme:light){.alma::before{background-color:#6F6F6F}}.alma .press-space{position:absolute;background-color:#35363A;border-radius:3px;color:#fff;bottom:-40px;left:14px;font-size:14px;padding:5px 15px;transition:all ease .5s;font-family:'IBM Plex Sans',sans-serif;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center;transition:all ease .2s}.alma .press-space>svg{height:auto;width:48px;margin:0 5px}.alma .eta-popup{cursor:pointer;width:30px;height:30px;line-height:30px;text-align:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center}.alma .eta-popup .time{color:#5A90E2 !important;font-weight:700;font-size:20px}.alma .eta-popup>svg#logo-icon-white{width:auto;height:18px;display:none}@media (prefers-color-scheme:light){.alma .eta-popup>svg#logo-icon-white>path{fill:black}}.alma .eta-popup:hover .time{display:none}.alma .eta-popup:hover>svg#logo-icon-white{display:block}.alma>svg{width:auto;height:22px;opacity:80%;cursor:pointer;transition:all ease .2s;padding:15px;margin:-15px}@media (prefers-color-scheme:light){.alma>svg{opacity:60%}}.alma>svg:hover{opacity:1}.alma>svg#close-icon{height:15px;opacity:50%;position:relative;margin-left:1px}.alma>svg#close-icon:hover{opacity:1}.alma>svg#empty-heart-icon{height:20px}.alma>svg#full-heart-icon{height:20px;display:none}@media (prefers-color-scheme:light){.alma>svg>path{fill:black}}.alma.saved>svg#empty-heart-icon{display:none !important}.alma.saved>svg#full-heart-icon{display:inline-block !important}.alma .no-select{user-select:none !important}.alma .transition,.alma>svg{transition:all ease .2 !important}.fade-out{-webkit-animation:fadeout .5s;-moz-animation:fadeout .5s;-ms-animation:fadeout .5s;-o-animation:fadeout .5s;animation:fadeout .5s;opacity:0}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-moz-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-ms-keyframes fadeout{.fade-out from{opacity:1}.fade-out to{opacity:0}}@-o-keyframes fadeout{from{opacity:1}to{opacity:0}}.fade-onload,.alma .eta-popup:hover>svg#logo-icon-white{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from,.alma .eta-popup:hover>svg#logo-icon-white from{opacity:0}.fade-onload to,.alma .eta-popup:hover>svg#logo-icon-white to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.displayN{display:none}";
      var injected = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap);body.xfready-lector-open{overflow:hidden}div.alma[xfready]{position:fixed;top:10px;right:-200px;z-index:97543456789863212389098323459098765432489098434567890987654345678987654345678 !important}";
      var popup = "@charset \"utf-8\";h1,h2,h3,h4,h5,h6{font-family:'IBM Plex Mono',monospace;font-weight:bold;color:#fff;margin:0}@media (prefers-color-scheme:light){h1 h1,h1 h2,h1 h3,h1 h4,h1 h5,h2 h1,h2 h2,h2 h3,h2 h4,h2 h5,h3 h1,h3 h2,h3 h3,h3 h4,h3 h5,h4 h1,h4 h2,h4 h3,h4 h4,h4 h5,h5 h1,h5 h2,h5 h3,h5 h4,h5 h5,h6 h1,h6 h2,h6 h3,h6 h4,h6 h5{color:black}}p{margin:0}.flex-h,#popup .article-panel .save-read,#popup .article-panel .time-url{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:stretch}.flex-h-space-around,#popup .xfready-footer,#popup .upload-dash{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:stretch}.blue{color:#5A90E2 !important}#popup{z-index:9999999999 !important;position:fixed;width:2000px;height:2000px;width:330px;height:fit-content;box-shadow:rgba(0,0,0,0.1) 0 0 10px;position:fixed;top:10px;right:5px;font-size:17px;box-sizing:content-box !important;background-color:#35363A;border-radius:5px;padding:15px;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:stretch}#popup h3{font-size:17px}@media (prefers-color-scheme:light){#popup{background:white}}#popup #exit{position:absolute;right:10px;top:5px}#popup .article-panel{position:relative;background-color:#3F4044;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:stretch;width:100%;padding:10px 10px 15px 10px;box-sizing:border-box;border-radius:5px}@media (prefers-color-scheme:light){#popup .article-panel{background-color:#fff}}#popup .article-panel .time-url .time{margin-right:5px}#popup .article-panel .time-url .url{color:#9F9F9F;line-height:22px}#popup .article-panel .title{margin:10px 0 16px 0}@media (prefers-color-scheme:light){#popup .article-panel .title{color:#161616}}#popup .article-panel #save{margin-right:10px}#popup .article-panel #save>svg#full-heart-icon{display:none}#popup .article-panel #save.saved{padding-right:15px}#popup .article-panel #save.saved>svg#empty-heart-icon{display:none}#popup .article-panel #save.saved>svg#full-heart-icon{display:inline-block}#popup .article-panel .save-read #read>svg#close-icon{height:auto;width:13px;display:none}#popup .article-panel .save-read #read.exit>svg#read-icon{display:none}#popup .article-panel .save-read #read.exit>svg#close-icon{display:block}#popup .upload-dash{padding:10px 0;margin:10px 0;position:relative}#popup .upload-dash::after{content:'';width:80%;position:absolute;height:1px;background-color:#6b6b6b;bottom:-5px}#popup .upload-dash a{text-decoration:none}#popup .xfready-footer{margin-top:10px}#popup .xfready-footer>a{width:fit-content;height:17px;opacity:70%;cursor:pointer}#popup .xfready-footer>a>svg{width:80px;height:auto}#popup .xfready-footer>a:hover{width:80px;opacity:1}@media (prefers-color-scheme:light){#popup .xfready-footer #logo{fill:black}#popup .xfready-footer #logo path,#popup .xfready-footer #logo svg{fill:black}}#popup .xfready-footer .visibility:hover .checkbox{opacity:1}#popup .xfready-footer .visibility .checkbox{position:relative;opacity:70%;margin-right:5px;width:15px;height:15px}#popup .xfready-footer .visibility .checkbox>#empty-checkbox{position:absolute;top:0;left:0;z-index:-98765}#popup .xfready-footer .visibility .checkbox>#checked-checkbox{position:absolute}@media (prefers-color-scheme:light){#popup .xfready-footer .visibility .checkbox{fill:black}#popup .xfready-footer .visibility .checkbox path,#popup .xfready-footer .visibility .checkbox svg{fill:black}}#popup .hyperbutton{cursor:pointer;font-family:'IBM Plex Sans',sans-serif;font-size:17px;font-weight:700;padding:5px;color:#bababa;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;min-width:114px;line-height:32px;transition:all ease .1s}@media (prefers-color-scheme:light){#popup .hyperbutton{color:#606367}}#popup .hyperbutton>svg{opacity:70%;width:auto;height:17px}@media (prefers-color-scheme:light){#popup .hyperbutton>svg{fill:#414141}#popup .hyperbutton>svg path,#popup .hyperbutton>svg svg{fill:#414141}}#popup .hyperbutton:hover{color:#fff}#popup .hyperbutton:hover>svg{opacity:1}@media (prefers-color-scheme:light){#popup .hyperbutton:hover{color:#000}}#popup .button,#popup .button-gray{cursor:pointer;background-color:#303030;border-radius:3px;padding:5px 20px;color:whitesmoke;cursor:pointer;display:inline-block;font-size:16px;font-weight:500;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;box-sizing:border-box;width:100px;transition:all ease .1s}@media (prefers-color-scheme:light){#popup .button,#popup .button-gray{background-color:#e3e3e3 !important;color:#383B3E !important;fill:#383B3E}#popup .button path,#popup .button-gray path,#popup .button svg,#popup .button-gray svg{fill:#383B3E}}#popup .button:hover,#popup .button-gray:hover{background-color:#717171}#popup .button:active,#popup .button-gray:active{background-color:#2b6cce}#popup .button-gray{background-color:#67686F;color:#fff}#popup .button-gray>svg{width:auto;height:15px}#popup .no-select,#popup .hyperbutton,#popup .button,#popup .button-gray{user-select:none !important}#popup .page-container{height:100vh}#popup .flex-center{display:flex;align-items:center;justify-content:center;flex-direction:column}#popup.fade-onload{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{#popup.fade-onload from{opacity:0}#popup.fade-onload to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.displayN{display:none !important}.fade-out{opacity:0 !important}";
      var main = "@charset \"utf-8\";*{font-family:'IBM Plex Sans',sans-serif}p{font-size:15px}h1,h2,h3,h4,h5,h6{font-family:'IBM Plex Mono',monospace;font-weight:bold;color:#fff}@media (prefers-color-scheme:light){h1 h1,h1 h2,h1 h3,h1 h4,h1 h5,h2 h1,h2 h2,h2 h3,h2 h4,h2 h5,h3 h1,h3 h2,h3 h3,h3 h4,h3 h5,h4 h1,h4 h2,h4 h3,h4 h4,h4 h5,h5 h1,h5 h2,h5 h3,h5 h4,h5 h5,h6 h1,h6 h2,h6 h3,h6 h4,h6 h5{color:black}}.flex-h{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:center;align-content:stretch}.flex-h-space-around{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:stretch}.blue{color:#5A90E2 !important}.button,.button-gray{cursor:pointer;background-color:#303030;border-radius:3px;padding:5px 20px;color:whitesmoke;cursor:pointer;display:inline-block;font-size:16px;font-weight:700;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:center;width:60px;transition:all ease .1s}@media (prefers-color-scheme:light){.button,.button-gray{background-color:#e3e3e3 !important;color:#383B3E !important;fill:#383B3E}.button path,.button-gray path,.button svg,.button-gray svg{fill:#383B3E}}.button:hover,.button-gray:hover{background-color:#717171}.button:active,.button-gray:active{background-color:#2b6cce}.button-gray{background-color:#67686F;color:#fff}.button-gray>svg{width:auto;height:15px}.no-select,.button,.button-gray{user-select:none !important}.flex-center{display:flex;align-items:center;justify-content:center;flex-direction:column}.fade-onload{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from{opacity:0}.fade-onload to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.displayN{display:none !important}";
      var lector = "@charset \"utf-8\";.billion-z-index{z-index:999999999999 !important}marker{z-index:99999999999999999 !important}#zoom-bar{top:80px !important}#lector{background-color:#303030;overflow-x:hidden;top:0;left:0;z-index:9999999999 !important;height:fit-content;text-align:center}#lector #exit{width:44px;height:44px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center;background-color:#262626;border-radius:4px;position:fixed;right:10px;top:20px;cursor:pointer;z-index:99999999999999999999999999}#lector #exit>svg{height:auto;width:15px;opacity:70%}#lector #exit:hover>svg{opacity:1}#lector #reader-rapper{font-size:19px;height:fit-content;flex-direction:column;display:flex;align-items:center;justify-content:flex-start;width:100%;margin:auto}#lector #reader-rapper #reader{width:80%;padding:80px 100px;background:whitesmoke;transition:all .5s ease}#lector #reader-rapper #reader.loading{border:1px solid whitesmoke;background-color:#fff4c;opacity:.3}#lector #reader-rapper #reader w[data-word-atom=true]{display:inline-block}.fade-onload{-webkit-animation:fadein .2s;-moz-animation:fadein .2s;-ms-animation:fadein .2s;-o-animation:fadein .2s;animation:fadein .2s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from{opacity:0}.fade-onload to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}";
      var sanitized_elements = "@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap);.article{position:relative;background-color:#eee;color:black;border-radius:8px;min-height:100vh;max-width:100%;width:60ch !important;text-align:left;overflow:hidden;text-align:left;word-break:keep-all;font-size:22px}.sanitized-elements,.article{font-weight:400;font-size:18px;line-height:31px;word-break:keep-all;overflow:hidden}.sanitized-elements h1,.article h1,.sanitized-elements h2,.article h2,.sanitized-elements h3,.article h3,.sanitized-elements h4,.article h4,.sanitized-elements h5,.article h5,.sanitized-elements h6,.article h6{font-family:IBM Plex Mono,monospace;font-weight:bold;margin-top:25px;margin-bottom:5px;color:black;display:block}.sanitized-elements h1 *,.article h1 *,.sanitized-elements h2 *,.article h2 *,.sanitized-elements h3 *,.article h3 *,.sanitized-elements h4 *,.article h4 *,.sanitized-elements h5 *,.article h5 *,.sanitized-elements h6 *,.article h6 *{font-weight:bold;font-family:IBM Plex Mono,monospace}.sanitized-elements h1,.article h1,.sanitized-elements h1 *,.article h1 *{font-size:39px;line-height:60px}.sanitized-elements h2,.article h2,.sanitized-elements h2 *,.article h2 *{font-size:31px;line-height:49px}.sanitized-elements h3,.article h3,.sanitized-elements h4,.article h4,.sanitized-elements h5,.article h5,.sanitized-elements h6,.article h6{font-size:24px;line-height:39px}.sanitized-elements h3 *,.article h3 *,.sanitized-elements h4 *,.article h4 *,.sanitized-elements h5 *,.article h5 *,.sanitized-elements h6 *,.article h6 *{font-size:24px;line-height:39px}.sanitized-elements p,.article p{font-weight:400;font-size:18px;line-height:30px}.sanitized-elements w,.article w{font-family:'IBM Plex Sans',sans-serif}.sanitized-elements a,.article a{color:#393939;text-decoration-color:#25227044;display:unset !important;border-bottom:#929292 .09em dashed;cursor:pointer}.sanitized-elements a:hover,.article a:hover{border-bottom:#2b6cce .09em solid;transition:all .2s ease}.sanitized-elements a:hover w,.article a:hover w{background-color:transparent !important}.sanitized-elements ul,.article ul,.sanitized-elements ol,.article ol{padding-top:10px;padding-bottom:10px;border-radius:5px;display:block}.sanitized-elements li,.article li{display:list-item;padding:5px;padding-left:10px;padding-right:10px}.sanitized-elements nav,.article nav{display:none}.sanitized-elements blockquote,.article blockquote{font-style:italic;color:#3a3a3a;border-left:solid 3px #707070;padding-left:10px;border-radius:1px}.sanitized-elements sup,.article sup{color:#707070}.sanitized-elements pre,.article pre{max-width:100%}.sanitized-elements img,.article img{max-width:100%;height:auto;display:block;max-height:500px;border-radius:2px;margin:30px 10px}.sanitized-elements mark,.article mark{background-color:#abfaa9}.sanitized-elements figcaption,.article figcaption{color:gray;text-align:center;margin:auto;font-size:16px}.sanitized-elements tr,.article tr{display:table-row;vertical-align:inherit;border-color:inherit}.sanitized-elements td,.article td{display:table-cell;vertical-align:inherit}.sanitized-elements tbody,.article tbody{display:table-row-group;vertical-align:middle;border-color:inherit}.sanitized-elements th,.article th{display:table-cell;vertical-align:inherit;font-weight:bold;text-align:-internal-center}.sanitized-elements table,.article table{display:table;border-collapse:separate;box-sizing:border-box;text-indent:initial;border-spacing:2px;border-color:grey}.sanitized-elements table,.article table{position:relative;width:165%;left:-32.5%;overflow-x:auto;table-layout:auto;border-collapse:collapse;font-size:100% !important;text-align:center;word-wrap:break-word;border-collapse:collapse}.sanitized-elements table *,.article table *{font-size:16px !important;line-height:24px}@media screen and (max-width:780px){.sanitized-elements table,.article table{left:0}}.sanitized-elements table tbody,.article table tbody{background:#f9f9f9;text-align:left;display:block;position:relative;width:fit-content;margin:auto}.sanitized-elements table td,.article table td,.sanitized-elements table tr,.article table tr,.sanitized-elements table th,.article table th{padding:1em 1em;border:1px solid #d8d8d8}.sanitized-elements table td:hover,.article table td:hover,.sanitized-elements table tr:hover,.article table tr:hover,.sanitized-elements table th:hover,.article table th:hover{background-color:#eee}.sanitized-elements table p,.article table p,.sanitized-elements table div,.article table div{display:inline-block}.sanitized-elements table img,.article table img{display:block}";
      var styles = {
      	syntax_highlight: syntax_highlight,
      	reset: reset,
      	alma: alma,
      	injected: injected,
      	popup: popup,
      	main: main,
      	lector: lector,
      	sanitized_elements: sanitized_elements
      };

      var model = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>model</title><path d=\"M23.5,4H8.5L1.7158,13.0454,16,29.5269,30.2842,13.0454ZM27,12H21.5543l-3.75-6H22.5ZM10.3021,14l3.7536,10.23L5.19,14Zm2.13,0H19.568l-3.569,9.7212Zm.3725-2L16,6.8867,19.1957,12Zm8.8935,2H26.81L17.9427,24.2314ZM9.5,6h4.6957l-3.75,6H5Z\" transform=\"translate(0 0)\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
      var umbrella = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <defs>\n    <style>\n      .cls-1 {\n        fill: none;\n      }\n    </style>\n  </defs>\n  <title>umbrella</title>\n  <path d=\"M29.9854,15.83A14.3808,14.3808,0,0,0,17,4.0464V2H15V4.0464A14.3808,14.3808,0,0,0,2.0146,15.83,1,1,0,0,0,3.51,16.86,4.8551,4.8551,0,0,1,6,16a4.8653,4.8653,0,0,1,4.1406,2.5107,1.0393,1.0393,0,0,0,1.7188,0A5.02,5.02,0,0,1,15,16.1255V25.5a2.5,2.5,0,0,1-5,0V25H8v.5a4.5,4.5,0,0,0,9,0V16.1255a5.02,5.02,0,0,1,3.1406,2.3852.9994.9994,0,0,0,1.7188,0A4.8653,4.8653,0,0,1,26,16a4.8551,4.8551,0,0,1,2.49.86,1,1,0,0,0,1.4957-1.03ZM6,14a5.4079,5.4079,0,0,0-1.5034.2134,12.4411,12.4411,0,0,1,8.488-7.8145A14.5157,14.5157,0,0,0,9.939,15.333,6.5439,6.5439,0,0,0,6,14Zm10,0a6.5528,6.5528,0,0,0-4.0564,1.4307c.0378-2.22.6089-6.49,4.0563-9.1763,3.4308,2.6768,4.0091,6.9487,4.0525,9.1728A6.553,6.553,0,0,0,16,14Zm10,0a6.5439,6.5439,0,0,0-3.939,1.333,14.5164,14.5164,0,0,0-3.0456-8.9341,12.4411,12.4411,0,0,1,8.488,7.8145A5.4079,5.4079,0,0,0,26,14Z\"/>\n  <rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/>\n</svg>\n";
      var chemistry = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>chemistry</title><path d=\"M27.2314,23.6182,20,13.6748V4h2V2H10V4h2v9.6748L4.7686,23.6182A4.0183,4.0183,0,0,0,8.0186,30H23.9814a4.0183,4.0183,0,0,0,3.25-6.3818ZM14,14.3252V4h4V14.3252L20.6728,18H11.3272ZM23.9814,28H8.0186a2.0192,2.0192,0,0,1-1.6329-3.2061L9.8726,20H22.1274l3.4869,4.7939A2.0192,2.0192,0,0,1,23.9814,28Z\" transform=\"translate(0 0)\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
      var dna = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>dna</title><path d=\"M22,2V1H20V2a7.04,7.04,0,0,1-.08,1H12.08A7.04,7.04,0,0,1,12,2V1H10V2c0,3.7549,1.9707,5.6035,4.1008,7C11.9707,10.3965,10,12.2451,10,16s1.9707,5.6035,4.1008,7C11.9707,24.3965,10,26.2451,10,30v1h2V30a7.04,7.04,0,0,1,.08-1H19.92A7.04,7.04,0,0,1,20,30v1h2V30c0-3.7549-1.9707-5.6035-4.1008-7C20.0293,21.6035,22,19.7549,22,16s-1.9707-5.6035-4.1008-7C20.0293,7.6035,22,5.7549,22,2ZM20,16a7.04,7.04,0,0,1-.08,1H12.08a6.3212,6.3212,0,0,1,0-2H19.92A7.04,7.04,0,0,1,20,16Zm-.7559,11H12.7559A8.9078,8.9078,0,0,1,16,24.17,8.9078,8.9078,0,0,1,19.2441,27ZM16,21.83A8.9078,8.9078,0,0,1,12.7559,19h6.4882A8.9078,8.9078,0,0,1,16,21.83ZM19.2441,13H12.7559A8.9078,8.9078,0,0,1,16,10.17,8.9078,8.9078,0,0,1,19.2441,13ZM16,7.83A8.9078,8.9078,0,0,1,12.7559,5h6.4882A8.9078,8.9078,0,0,1,16,7.83Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
      var microscope = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>microscope</title><path d=\"M25.3943,24a7.8772,7.8772,0,0,0-1.6707-8.5684,3.918,3.918,0,0,0-1.0844-4.414l2.7759-2.7759a2.0025,2.0025,0,0,0,0-2.8286L22.5869,2.5849a2.0021,2.0021,0,0,0-2.8286,0L6.5859,15.7573a2.0027,2.0027,0,0,0,0,2.8286l2.8282,2.8282a2.0024,2.0024,0,0,0,2.8286,0l4.7749-4.7754a3.9329,3.9329,0,0,0,5.5139.4326A5.9442,5.9442,0,0,1,23.1775,24H16v4H4v2H28V24ZM10.8281,20,8,17.1714,9.8787,15.293l2.8283,2.8281ZM16,14a3.9811,3.9811,0,0,0,.0762.7524L14.1211,16.707l-2.8284-2.8281,9.88-9.88L24.001,6.8271l-3.2488,3.2491A3.9771,3.9771,0,0,0,16,14Zm4,2a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,20,16Zm6,12H18V26h8Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
      var logo = "<svg width=\"60\" height=\"13\" viewBox=\"0 0 60 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M6.40625 6.38605V12.7734L12.8093 6.38605H6.40625Z\" fill=\"white\"/>\n<path d=\"M0 0.0024538V12.7773L12.8061 0.0024538H0Z\" fill=\"white\"/>\n<path d=\"M15.9531 10.0547V0.568165H22.2465V2.24002H17.9916V4.41441H21.7975V6.08615H17.9916V10.0547H15.9531Z\" fill=\"white\"/>\n<path d=\"M22.9414 8.47749H24.5584V4.6184H22.9414V3.04186H26.5703V5.026H26.6655C26.7284 4.77217 26.8169 4.52553 26.9309 4.28506C27.0437 4.04562 27.1886 3.83212 27.3656 3.64624C27.5426 3.46101 27.7571 3.31341 28.0104 3.20499C28.2648 3.09593 28.5634 3.04186 28.9074 3.04186H29.5743V4.88996H28.079C27.5801 4.88996 27.2041 5.03653 26.9508 5.33031C26.6975 5.62332 26.5703 5.98223 26.5703 6.40639V8.47749H28.8809V10.0547H22.9414V8.47749Z\" fill=\"white\"/>\n<path d=\"M33.3774 4.32066C32.9427 4.32066 32.5965 4.45451 32.3377 4.7217C32.08 4.98876 31.9506 5.34935 31.9506 5.80228V5.91057H34.7777V5.80228C34.7777 5.33997 34.6526 4.97771 34.4038 4.71502C34.1549 4.45233 33.8121 4.32066 33.3774 4.32066ZM33.5411 10.2188C32.3631 10.2188 31.4706 9.89247 30.8634 9.23978C30.2562 8.58837 29.9531 7.70023 29.9531 6.57701C29.9531 6.00576 30.0316 5.49206 30.1909 5.03411C30.349 4.5768 30.5757 4.18681 30.8699 3.86554C31.1642 3.54376 31.5226 3.2993 31.944 3.13166C32.3654 2.96416 32.8388 2.88002 33.3642 2.88002C33.8895 2.88002 34.3607 2.96416 34.7777 3.13166C35.1945 3.2993 35.5474 3.53708 35.8372 3.84512C36.127 4.15315 36.3516 4.52696 36.5108 4.96603C36.669 5.40574 36.7486 5.89734 36.7486 6.44097V7.0388H31.9506V7.16097C31.9506 7.61455 32.091 7.97898 32.372 8.25542C32.6529 8.53199 33.0655 8.66918 33.6086 8.66918C34.0256 8.66918 34.3839 8.59056 34.6825 8.43128C34.9812 8.27315 35.24 8.06299 35.4567 7.79965L36.544 8.9821C36.2731 9.31724 35.8926 9.60704 35.4025 9.85149C34.9136 10.097 34.2932 10.2188 33.5411 10.2188Z\" fill=\"white\"/>\n<path d=\"M40.3376 8.90027C40.6905 8.90027 40.9892 8.81511 41.2346 8.64259C41.4791 8.47007 41.6007 8.22112 41.6007 7.89484V7.05268H40.5279C39.7028 7.05268 39.2902 7.32912 39.2902 7.88161V8.15265C39.2902 8.39813 39.3864 8.58402 39.5767 8.71003C39.7669 8.8372 40.0202 8.90027 40.3376 8.90027ZM43.2321 10.0561C42.8152 10.0561 42.48 9.94989 42.2267 9.7364C41.9724 9.52406 41.8231 9.21769 41.7778 8.8196H41.7102C41.583 9.28076 41.332 9.63029 40.9559 9.86588C40.5799 10.1015 40.1198 10.2188 39.5767 10.2188C38.8965 10.2188 38.3512 10.0351 37.9386 9.66896C37.5261 9.3017 37.3203 8.78749 37.3203 8.12606C37.3203 7.39219 37.5869 6.84857 38.1223 6.49518C38.6565 6.1418 39.4406 5.96542 40.4737 5.96542H41.6007V5.61204C41.6007 5.19507 41.5034 4.88035 41.3088 4.6675C41.114 4.45451 40.7856 4.34777 40.3232 4.34777C39.8974 4.34777 39.5535 4.42959 39.2902 4.59222C39.028 4.75536 38.8014 4.96885 38.6112 5.23155L37.5106 4.25271C37.7461 3.85398 38.1156 3.52552 38.6177 3.26719C39.121 3.00899 39.7669 2.88002 40.5545 2.88002C41.5144 2.88002 42.2644 3.09968 42.8041 3.53926C43.3428 3.97897 43.6126 4.64258 43.6126 5.53021V8.60161H44.3868V10.0561H43.2321Z\" fill=\"white\"/>\n<path d=\"M48.2561 8.64259C48.61 8.64259 48.9153 8.55742 49.1741 8.38593C49.4319 8.21457 49.5612 7.94468 49.5612 7.57588V5.52353C49.5612 5.15409 49.4319 4.88433 49.1741 4.71335C48.9153 4.54199 48.61 4.45683 48.2561 4.45683C47.8037 4.45683 47.4543 4.59389 47.2098 4.86879C46.9654 5.14304 46.8426 5.52353 46.8426 6.00961V7.0898C46.8426 7.57588 46.9654 7.95573 47.2098 8.23114C47.4543 8.50552 47.8037 8.64259 48.2561 8.64259ZM49.5612 8.76539H49.466C49.2848 9.19559 49.0337 9.54513 48.7117 9.81501C48.39 10.0837 47.9486 10.2188 47.3867 10.2188C46.9973 10.2188 46.6413 10.1468 46.3194 10.0019C45.9976 9.85702 45.7222 9.63479 45.4909 9.33497C45.2599 9.03631 45.0785 8.65595 44.9468 8.19351C44.8151 7.73235 44.75 7.18371 44.75 6.54939C44.75 5.91558 44.8151 5.36707 44.9468 4.90527C45.0785 4.44296 45.2599 4.06247 45.4909 3.76329C45.7222 3.46463 45.9976 3.24227 46.3194 3.0975C46.6413 2.9526 46.9973 2.88015 47.3867 2.88015C47.6676 2.88015 47.9166 2.91663 48.1345 2.98959C48.3512 3.06269 48.5437 3.16391 48.7117 3.2916C48.8787 3.41928 49.0248 3.57253 49.1464 3.75057C49.2692 3.92861 49.3755 4.12271 49.466 4.33351H49.5612V-0.00113201H51.5731V10.0561H49.5612V8.76539Z\" fill=\"white\"/>\n<path d=\"M57.946 3.04688H59.9977L56.695 11.1879C56.4871 11.7045 56.2105 12.0982 55.8666 12.3703C55.5215 12.6413 55.0503 12.7773 54.4531 12.7773H53.0661V11.2012H54.7517L55.1864 10.0189L52.3594 3.04688H54.5205L55.5403 5.99612L56.1785 8.03459H56.2869L56.8985 5.99612L57.946 3.04688Z\" fill=\"white\"/>\n</svg>\n";
      var gamification = "<svg id=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><defs><style>.cls-1{fill:none;}</style></defs><title>gamification</title><path d=\"M23,23h-.1315l.9635-1.4453A1.0008,1.0008,0,0,0,24,21V12.0005c0-9.8858-7.92-10-8-10A1,1,0,0,0,15,3l-.0005,2H14a.9956.9956,0,0,0-.581.1865l-7,5a1,1,0,0,0-.3676,1.13l1,3a.9976.9976,0,0,0,1.09.6733l4.87-.6958L9.1519,20.47a1,1,0,0,0,.0161,1.085L10.1315,23H10a3.0033,3.0033,0,0,0-3,3v4H26V26A3.0033,3.0033,0,0,0,23,23Zm-7.1519-9.47a1,1,0,0,0-.99-1.52l-6.1738.8819-.5025-1.5078L14.32,7.0005H15.999a1,1,0,0,0,1-.9995L17,4.1289C18.5013,4.4636,21.2167,5.67,21.86,10H19v2h3v2H19v2h3v2H19v2h3v.6973L20.4648,23h-7.93L11.19,20.9824ZM24,28H9V26a1.0009,1.0009,0,0,1,1-1H23a1.0006,1.0006,0,0,1,1,1Z\"/><rect id=\"_Transparent_Rectangle_\" data-name=\"&lt;Transparent Rectangle&gt;\" class=\"cls-1\" width=\"32\" height=\"32\"/></svg>";
      var icons = {
      	"new-space-white": "<svg width=\"28\" height=\"16\" viewBox=\"0 0 28 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect x=\"1\" y=\"1\" width=\"26\" height=\"14\" rx=\"2\" stroke=\"#5B5C61\"/>\n<rect x=\"1\" y=\"1\" width=\"26\" height=\"13\" rx=\"2\" stroke=\"#5B5C61\"/>\n<path d=\"M6.17444 10.0864C5.81444 10.0864 5.51204 10.0264 5.26724 9.9064C5.02244 9.7816 4.80644 9.6112 4.61924 9.3952L5.18084 8.848C5.32004 9.0064 5.47124 9.1312 5.63444 9.2224C5.80244 9.3136 5.99444 9.3592 6.21044 9.3592C6.43124 9.3592 6.58964 9.3208 6.68564 9.244C6.78644 9.1672 6.83684 9.0616 6.83684 8.9272C6.83684 8.8168 6.80084 8.7304 6.72884 8.668C6.66164 8.6008 6.54404 8.5552 6.37604 8.5312L6.00164 8.4808C5.59364 8.428 5.28164 8.3128 5.06564 8.1352C4.85444 7.9528 4.74884 7.6888 4.74884 7.3432C4.74884 7.1608 4.78244 6.9976 4.84964 6.8536C4.91684 6.7048 5.01284 6.58 5.13764 6.4792C5.26244 6.3736 5.41124 6.2944 5.58404 6.2416C5.76164 6.184 5.95844 6.1552 6.17444 6.1552C6.35684 6.1552 6.51764 6.1696 6.65684 6.1984C6.80084 6.2224 6.93044 6.2608 7.04564 6.3136C7.16084 6.3616 7.26644 6.424 7.36244 6.5008C7.45844 6.5728 7.55204 6.6544 7.64324 6.7456L7.10324 7.2856C6.99284 7.1704 6.86084 7.0744 6.70724 6.9976C6.55364 6.9208 6.38564 6.8824 6.20324 6.8824C6.00164 6.8824 5.85524 6.9184 5.76404 6.9904C5.67764 7.0624 5.63444 7.156 5.63444 7.2712C5.63444 7.396 5.67044 7.492 5.74244 7.5592C5.81924 7.6216 5.94644 7.6672 6.12404 7.696L6.50564 7.7464C7.31684 7.8616 7.72244 8.2312 7.72244 8.8552C7.72244 9.0376 7.68404 9.2056 7.60724 9.3592C7.53524 9.508 7.43204 9.6376 7.29764 9.748C7.16324 9.8536 7.00004 9.9376 6.80804 10C6.62084 10.0576 6.40964 10.0864 6.17444 10.0864ZM8.68021 6.2416H9.60181V6.8608H9.63061C9.69781 6.6448 9.82501 6.4744 10.0122 6.3496C10.1994 6.22 10.4178 6.1552 10.6674 6.1552C11.1474 6.1552 11.5122 6.3256 11.7618 6.6664C12.0162 7.0024 12.1434 7.4848 12.1434 8.1136C12.1434 8.7472 12.0162 9.2344 11.7618 9.5752C11.5122 9.916 11.1474 10.0864 10.6674 10.0864C10.4178 10.0864 10.1994 10.0216 10.0122 9.892C9.82981 9.7624 9.70261 9.5896 9.63061 9.3736H9.60181V11.44H8.68021V6.2416ZM10.3722 9.3232C10.6122 9.3232 10.8066 9.244 10.9554 9.0856C11.1042 8.9272 11.1786 8.7136 11.1786 8.4448V7.7968C11.1786 7.528 11.1042 7.3144 10.9554 7.156C10.8066 6.9928 10.6122 6.9112 10.3722 6.9112C10.1514 6.9112 9.96661 6.9664 9.81781 7.0768C9.67381 7.1872 9.60181 7.3336 9.60181 7.516V8.7112C9.60181 8.908 9.67381 9.0592 9.81781 9.1648C9.96661 9.2704 10.1514 9.3232 10.3722 9.3232ZM15.9062 10C15.7046 10 15.5438 9.9424 15.4238 9.8272C15.3086 9.7072 15.2366 9.5488 15.2078 9.352H15.1646C15.1022 9.5968 14.975 9.7816 14.783 9.9064C14.591 10.0264 14.3534 10.0864 14.0702 10.0864C13.6862 10.0864 13.391 9.9856 13.1846 9.784C12.9782 9.5824 12.875 9.3136 12.875 8.9776C12.875 8.5888 13.0142 8.3008 13.2926 8.1136C13.571 7.9216 13.967 7.8256 14.4806 7.8256H15.1214V7.552C15.1214 7.3408 15.0662 7.1776 14.9558 7.0624C14.8454 6.9472 14.6678 6.8896 14.423 6.8896C14.207 6.8896 14.0318 6.9376 13.8974 7.0336C13.7678 7.1248 13.6574 7.2352 13.5662 7.3648L13.019 6.8752C13.1582 6.6592 13.343 6.4864 13.5734 6.3568C13.8038 6.2224 14.1086 6.1552 14.4878 6.1552C14.9966 6.1552 15.383 6.2704 15.647 6.5008C15.911 6.7312 16.043 7.0624 16.043 7.4944V9.2656H16.4174V10H15.9062ZM14.3798 9.4168C14.5862 9.4168 14.7614 9.3712 14.9054 9.28C15.0494 9.1888 15.1214 9.0544 15.1214 8.8768V8.38H14.531C14.051 8.38 13.811 8.5336 13.811 8.8408V8.9632C13.811 9.1168 13.859 9.232 13.955 9.3088C14.0558 9.3808 14.1974 9.4168 14.3798 9.4168ZM18.7905 10.0864C18.5121 10.0864 18.2649 10.0408 18.0489 9.9496C17.8329 9.8584 17.6505 9.7264 17.5017 9.5536C17.3577 9.3808 17.2473 9.1744 17.1705 8.9344C17.0937 8.6896 17.0553 8.416 17.0553 8.1136C17.0553 7.8112 17.0937 7.54 17.1705 7.3C17.2473 7.06 17.3577 6.856 17.5017 6.688C17.6505 6.5152 17.8329 6.3832 18.0489 6.292C18.2649 6.2008 18.5121 6.1552 18.7905 6.1552C19.1697 6.1552 19.4817 6.2392 19.7265 6.4072C19.9761 6.5752 20.1561 6.808 20.2665 7.1056L19.5105 7.444C19.4673 7.2856 19.3857 7.156 19.2657 7.0552C19.1505 6.9496 18.9921 6.8968 18.7905 6.8968C18.5313 6.8968 18.3369 6.9784 18.2073 7.1416C18.0825 7.3048 18.0201 7.5184 18.0201 7.7824V8.4664C18.0201 8.7304 18.0825 8.944 18.2073 9.1072C18.3369 9.2656 18.5313 9.3448 18.7905 9.3448C19.0113 9.3448 19.1817 9.2896 19.3017 9.1792C19.4217 9.064 19.5153 8.9224 19.5825 8.7544L20.2881 9.0928C20.1633 9.424 19.9737 9.6736 19.7193 9.8416C19.4649 10.0048 19.1553 10.0864 18.7905 10.0864ZM22.6267 10.0864C22.3483 10.0864 22.0987 10.0408 21.8779 9.9496C21.6619 9.8536 21.4771 9.7216 21.3235 9.5536C21.1747 9.3808 21.0595 9.1744 20.9779 8.9344C20.8963 8.6896 20.8555 8.416 20.8555 8.1136C20.8555 7.816 20.8939 7.5472 20.9707 7.3072C21.0523 7.0672 21.1675 6.8632 21.3163 6.6952C21.4651 6.5224 21.6475 6.3904 21.8635 6.2992C22.0795 6.2032 22.3243 6.1552 22.5979 6.1552C22.8907 6.1552 23.1451 6.2056 23.3611 6.3064C23.5771 6.4072 23.7547 6.544 23.8939 6.7168C24.0331 6.8896 24.1363 7.0912 24.2035 7.3216C24.2755 7.5472 24.3115 7.7896 24.3115 8.0488V8.3512H21.8131V8.4448C21.8131 8.7184 21.8899 8.9392 22.0435 9.1072C22.1971 9.2704 22.4251 9.352 22.7275 9.352C22.9579 9.352 23.1451 9.304 23.2891 9.208C23.4379 9.112 23.5699 8.9896 23.6851 8.8408L24.1819 9.3952C24.0283 9.6112 23.8171 9.7816 23.5483 9.9064C23.2843 10.0264 22.9771 10.0864 22.6267 10.0864ZM22.6123 6.8464C22.3675 6.8464 22.1731 6.928 22.0291 7.0912C21.8851 7.2544 21.8131 7.4656 21.8131 7.7248V7.7824H23.3539V7.7176C23.3539 7.4584 23.2891 7.2496 23.1595 7.0912C23.0347 6.928 22.8523 6.8464 22.6123 6.8464Z\" fill=\"#E4E4E4\"/>\n</svg>\n",
      	"arrow-down": "<svg width=\"78\" height=\"42\" viewBox=\"0 0 78 42\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M38.7444 41.8242L0.316898 5.9643L5.69674 0.943914L38.7444 31.7834L71.792 0.94392L77.1719 5.96431L38.7444 41.8242Z\" fill=\"white\"/>\n</svg>\n",
      	"close-icon": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z\" fill=\"white\"/>\n</svg>\n",
      	model: model,
      	umbrella: umbrella,
      	"read-icon-clean": "<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.3599 1H4.23358C3.88021 1 3.59375 1.28646 3.59375 1.63983C3.59375 1.99319 3.88021 2.27965 4.23358 2.27965H11.3599C11.7132 2.27965 11.9997 1.99319 11.9997 1.63983C11.9997 1.28646 11.7132 1 11.3599 1Z\" fill=\"#E4E4E4\"/>\n<path d=\"M8.95816 4.83984H4.23358C3.88021 4.83984 3.59375 5.1263 3.59375 5.47967C3.59375 5.83304 3.88021 6.1195 4.23358 6.1195H8.95816C9.31153 6.1195 9.59799 5.83304 9.59799 5.47967C9.59799 5.1263 9.31153 4.83984 8.95816 4.83984Z\" fill=\"#E4E4E4\"/>\n<path d=\"M11.3599 8.67969H4.23358C3.88021 8.67969 3.59375 8.96615 3.59375 9.31951C3.59375 9.67288 3.88021 9.95934 4.23358 9.95934H11.3599C11.7132 9.95934 11.9997 9.67288 11.9997 9.31951C11.9997 8.96615 11.7132 8.67969 11.3599 8.67969Z\" fill=\"#E4E4E4\"/>\n<path d=\"M1 10.5V0.5C1 0.223858 0.776142 0 0.5 0C0.223858 0 0 0.223858 0 0.5V10.5C0 10.7761 0.223858 11 0.5 11C0.776142 11 1 10.7761 1 10.5Z\" fill=\"#E4E4E4\"/>\n</svg>\n",
      	chemistry: chemistry,
      	"logo-icon-white": "<svg width=\"342\" height=\"341\" viewBox=\"0 0 342 341\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M170.922 170.498V340.996L341.839 170.498H170.922Z\" fill=\"white\"/>\n<path d=\"M0 7.49396e-06V341L341.833 7.49396e-06H0Z\" fill=\"white\"/>\n</svg>\n",
      	"space2read-black": "<svg width=\"253\" height=\"50\" viewBox=\"0 0 253 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M146.52 32C145.027 32 143.916 31.608 143.188 30.824C142.46 30.04 142.096 29.0413 142.096 27.828V20.772H138.176V17.552H140.724C141.34 17.552 141.779 17.4307 142.04 17.188C142.301 16.9453 142.432 16.4973 142.432 15.844V12.456H146.24V17.552H151.868V20.772H146.24V28.78H151.868V32H146.52ZM162.189 32.336C161.069 32.336 160.061 32.168 159.165 31.832C158.269 31.4773 157.504 30.9733 156.869 30.32C156.253 29.6667 155.777 28.8733 155.441 27.94C155.105 27.0067 154.937 25.952 154.937 24.776C154.937 23.6 155.105 22.5453 155.441 21.612C155.777 20.6787 156.253 19.8853 156.869 19.232C157.504 18.5787 158.269 18.084 159.165 17.748C160.061 17.3933 161.069 17.216 162.189 17.216C163.309 17.216 164.317 17.3933 165.213 17.748C166.109 18.084 166.865 18.5787 167.481 19.232C168.116 19.8853 168.601 20.6787 168.937 21.612C169.273 22.5453 169.441 23.6 169.441 24.776C169.441 25.952 169.273 27.0067 168.937 27.94C168.601 28.8733 168.116 29.6667 167.481 30.32C166.865 30.9733 166.109 31.4773 165.213 31.832C164.317 32.168 163.309 32.336 162.189 32.336ZM162.189 29.256C163.122 29.256 163.85 28.9667 164.373 28.388C164.896 27.8093 165.157 26.988 165.157 25.924V23.628C165.157 22.564 164.896 21.7427 164.373 21.164C163.85 20.5853 163.122 20.296 162.189 20.296C161.256 20.296 160.528 20.5853 160.005 21.164C159.482 21.7427 159.221 22.564 159.221 23.628V25.924C159.221 26.988 159.482 27.8093 160.005 28.388C160.528 28.9667 161.256 29.256 162.189 29.256ZM189.439 28.78H192.771V20.772H189.439V17.552H196.915V21.64H197.111C197.242 21.1173 197.419 20.6133 197.643 20.128C197.886 19.624 198.185 19.1853 198.539 18.812C198.913 18.42 199.361 18.112 199.883 17.888C200.406 17.664 201.022 17.552 201.731 17.552H203.103V21.36H200.023C198.997 21.36 198.222 21.668 197.699 22.284C197.177 22.8813 196.915 23.6187 196.915 24.496V28.78H201.675V32H189.439V28.78ZM212.948 32.336C210.522 32.336 208.683 31.664 207.432 30.32C206.182 28.976 205.556 27.1467 205.556 24.832C205.556 23.656 205.715 22.6013 206.032 21.668C206.368 20.716 206.835 19.9133 207.432 19.26C208.048 18.588 208.786 18.084 209.644 17.748C210.522 17.3933 211.502 17.216 212.584 17.216C213.667 17.216 214.638 17.3933 215.496 17.748C216.355 18.084 217.083 18.5693 217.68 19.204C218.278 19.8387 218.735 20.6133 219.052 21.528C219.388 22.424 219.556 23.432 219.556 24.552V25.784H209.672V26.036C209.672 26.9693 209.962 27.7253 210.54 28.304C211.119 28.864 211.968 29.144 213.088 29.144C213.947 29.144 214.684 28.9853 215.3 28.668C215.916 28.332 216.448 27.8933 216.896 27.352L219.136 29.788C218.576 30.4787 217.792 31.076 216.784 31.58C215.776 32.084 214.498 32.336 212.948 32.336ZM212.612 20.184C211.716 20.184 210.998 20.464 210.456 21.024C209.934 21.5653 209.672 22.3027 209.672 23.236V23.46H215.496V23.236C215.496 22.284 215.235 21.5373 214.712 20.996C214.208 20.4547 213.508 20.184 212.612 20.184ZM234.581 32C233.723 32 233.032 31.7853 232.509 31.356C231.987 30.908 231.679 30.2733 231.585 29.452H231.445C231.184 30.404 230.661 31.1227 229.877 31.608C229.112 32.0933 228.169 32.336 227.049 32.336C225.649 32.336 224.52 31.9627 223.661 31.216C222.821 30.4507 222.401 29.3867 222.401 28.024C222.401 26.512 222.952 25.392 224.053 24.664C225.155 23.936 226.769 23.572 228.897 23.572H231.221V22.844C231.221 21.9853 231.016 21.3413 230.605 20.912C230.213 20.464 229.541 20.24 228.589 20.24C227.712 20.24 227.003 20.408 226.461 20.744C225.92 21.08 225.453 21.5187 225.061 22.06L222.793 20.044C223.279 19.2227 224.035 18.5507 225.061 18.028C226.107 17.4867 227.441 17.216 229.065 17.216C231.044 17.216 232.584 17.6733 233.685 18.588C234.805 19.484 235.365 20.8467 235.365 22.676V29.004H236.961V32H234.581ZM228.617 29.62C229.345 29.62 229.961 29.4427 230.465 29.088C230.969 28.7333 231.221 28.22 231.221 27.548V25.812H229.009C227.311 25.812 226.461 26.3813 226.461 27.52V28.08C226.461 28.584 226.657 28.9667 227.049 29.228C227.441 29.4893 227.964 29.62 228.617 29.62ZM248.738 29.368H248.542C248.169 30.2453 247.646 30.964 246.974 31.524C246.321 32.0653 245.416 32.336 244.258 32.336C243.456 32.336 242.718 32.1867 242.046 31.888C241.393 31.5893 240.824 31.132 240.338 30.516C239.872 29.9 239.498 29.116 239.218 28.164C238.957 27.212 238.826 26.0827 238.826 24.776C238.826 23.4693 238.957 22.34 239.218 21.388C239.498 20.436 239.872 19.652 240.338 19.036C240.824 18.42 241.393 17.9627 242.046 17.664C242.718 17.3653 243.456 17.216 244.258 17.216C244.837 17.216 245.35 17.2907 245.798 17.44C246.246 17.5893 246.638 17.7947 246.974 18.056C247.329 18.3173 247.628 18.6347 247.87 19.008C248.132 19.3627 248.356 19.7547 248.542 20.184H248.738V11.28H252.882V32H248.738V29.368ZM246.05 29.116C246.778 29.116 247.404 28.9387 247.926 28.584C248.468 28.2293 248.738 27.6693 248.738 26.904V22.648C248.738 21.8827 248.468 21.3227 247.926 20.968C247.404 20.6133 246.778 20.436 246.05 20.436C245.117 20.436 244.398 20.7253 243.894 21.304C243.39 21.864 243.138 22.648 243.138 23.656V25.896C243.138 26.904 243.39 27.6973 243.894 28.276C244.398 28.836 245.117 29.116 246.05 29.116Z\" fill=\"black\"/>\n<path d=\"M118.762 41.5V41.5C118.762 45.0186 115.91 47.8709 112.391 47.8709H12C6.47714 47.8709 2 43.3938 2 37.8709V16.5C2 12.9101 4.91015 10 8.5 10V10\" stroke=\"#636262\" stroke-opacity=\"0.6\" stroke-width=\"3\"/>\n<rect x=\"8.03833\" y=\"1.5\" width=\"116.3\" height=\"40.3226\" rx=\"8.5\" stroke=\"#636262\" stroke-width=\"3\"/>\n<path d=\"M35.1594 29.288C33.7834 29.288 32.5834 29.08 31.5594 28.664C30.5514 28.248 29.7914 27.68 29.2794 26.96L31.2714 25.112C31.7514 25.64 32.3114 26.056 32.9514 26.36C33.6074 26.648 34.3514 26.792 35.1834 26.792C35.8874 26.792 36.4394 26.688 36.8394 26.48C37.2394 26.256 37.4394 25.92 37.4394 25.472C37.4394 25.12 37.3034 24.88 37.0314 24.752C36.7594 24.608 36.3834 24.496 35.9034 24.416L33.9114 24.104C33.3514 24.024 32.8314 23.904 32.3514 23.744C31.8714 23.568 31.4554 23.336 31.1034 23.048C30.7514 22.76 30.4714 22.408 30.2634 21.992C30.0554 21.576 29.9514 21.072 29.9514 20.48C29.9514 19.184 30.4474 18.168 31.4394 17.432C32.4314 16.696 33.8234 16.328 35.6154 16.328C36.8314 16.328 37.8634 16.496 38.7114 16.832C39.5754 17.152 40.2634 17.616 40.7754 18.224L38.9994 20.24C38.6314 19.84 38.1594 19.504 37.5834 19.232C37.0074 18.96 36.3114 18.824 35.4954 18.824C34.1194 18.824 33.4314 19.24 33.4314 20.072C33.4314 20.44 33.5674 20.696 33.8394 20.84C34.1114 20.968 34.4874 21.072 34.9674 21.152L36.9354 21.464C37.4954 21.544 38.0154 21.672 38.4954 21.848C38.9754 22.008 39.3914 22.232 39.7434 22.52C40.1114 22.808 40.3994 23.16 40.6074 23.576C40.8154 23.992 40.9194 24.496 40.9194 25.088C40.9194 26.384 40.4154 27.408 39.4074 28.16C38.4154 28.912 36.9994 29.288 35.1594 29.288ZM44.8701 16.616H48.4221V18.872H48.5901C48.8941 18.136 49.3341 17.528 49.9101 17.048C50.4861 16.568 51.2701 16.328 52.2621 16.328C52.9501 16.328 53.5741 16.456 54.1341 16.712C54.7101 16.968 55.1981 17.36 55.5981 17.888C56.0141 18.416 56.3341 19.088 56.5581 19.904C56.7981 20.72 56.9181 21.688 56.9181 22.808C56.9181 23.928 56.7981 24.896 56.5581 25.712C56.3341 26.528 56.0141 27.2 55.5981 27.728C55.1981 28.256 54.7101 28.648 54.1341 28.904C53.5741 29.16 52.9501 29.288 52.2621 29.288C51.2701 29.288 50.4861 29.056 49.9101 28.592C49.3341 28.112 48.8941 27.496 48.5901 26.744H48.4221V33.8H44.8701V16.616ZM50.7261 26.528C51.5261 26.528 52.1421 26.288 52.5741 25.808C53.0061 25.312 53.2221 24.632 53.2221 23.768V21.848C53.2221 20.984 53.0061 20.312 52.5741 19.832C52.1421 19.336 51.5261 19.088 50.7261 19.088C50.1021 19.088 49.5581 19.24 49.0941 19.544C48.6461 19.848 48.4221 20.328 48.4221 20.984V24.632C48.4221 25.288 48.6461 25.768 49.0941 26.072C49.5581 26.376 50.1021 26.528 50.7261 26.528ZM70.4927 29C69.7567 29 69.1647 28.816 68.7167 28.448C68.2687 28.064 68.0047 27.52 67.9247 26.816H67.8047C67.5807 27.632 67.1327 28.248 66.4607 28.664C65.8047 29.08 64.9967 29.288 64.0367 29.288C62.8367 29.288 61.8687 28.968 61.1327 28.328C60.4127 27.672 60.0527 26.76 60.0527 25.592C60.0527 24.296 60.5247 23.336 61.4687 22.712C62.4127 22.088 63.7967 21.776 65.6207 21.776H67.6127V21.152C67.6127 20.416 67.4367 19.864 67.0847 19.496C66.7487 19.112 66.1727 18.92 65.3567 18.92C64.6047 18.92 63.9967 19.064 63.5327 19.352C63.0687 19.64 62.6687 20.016 62.3327 20.48L60.3887 18.752C60.8047 18.048 61.4527 17.472 62.3327 17.024C63.2287 16.56 64.3727 16.328 65.7647 16.328C67.4607 16.328 68.7807 16.72 69.7247 17.504C70.6847 18.272 71.1647 19.44 71.1647 21.008V26.432H72.5327V29H70.4927ZM65.3807 26.96C66.0047 26.96 66.5327 26.808 66.9647 26.504C67.3967 26.2 67.6127 25.76 67.6127 25.184V23.696H65.7167C64.2607 23.696 63.5327 24.184 63.5327 25.16V25.64C63.5327 26.072 63.7007 26.4 64.0367 26.624C64.3727 26.848 64.8207 26.96 65.3807 26.96ZM81.8593 29.288C80.8833 29.288 80.0033 29.144 79.2193 28.856C78.4513 28.552 77.7953 28.12 77.2513 27.56C76.7233 27 76.3153 26.32 76.0273 25.52C75.7393 24.72 75.5953 23.816 75.5953 22.808C75.5953 21.8 75.7393 20.896 76.0273 20.096C76.3153 19.296 76.7233 18.616 77.2513 18.056C77.7953 17.496 78.4513 17.072 79.2193 16.784C80.0033 16.48 80.8753 16.328 81.8353 16.328C83.1953 16.328 84.2833 16.608 85.0993 17.168C85.9313 17.712 86.5633 18.44 86.9953 19.352L84.2593 20.84C84.0353 20.36 83.7393 19.96 83.3713 19.64C83.0193 19.32 82.5073 19.16 81.8353 19.16C81.0193 19.16 80.3873 19.4 79.9393 19.88C79.5073 20.344 79.2913 20.984 79.2913 21.8V23.816C79.2913 24.632 79.5073 25.28 79.9393 25.76C80.3873 26.224 81.0353 26.456 81.8833 26.456C82.5713 26.456 83.1073 26.296 83.4913 25.976C83.8913 25.656 84.2273 25.24 84.4993 24.728L87.1873 26.264C86.7393 27.176 86.0833 27.912 85.2193 28.472C84.3713 29.016 83.2513 29.288 81.8593 29.288ZM97.0419 29.288C94.9619 29.288 93.3859 28.712 92.3139 27.56C91.2419 26.408 90.7059 24.84 90.7059 22.856C90.7059 21.848 90.8419 20.944 91.1139 20.144C91.4019 19.328 91.8019 18.64 92.3139 18.08C92.8419 17.504 93.4739 17.072 94.2099 16.784C94.9619 16.48 95.8019 16.328 96.7299 16.328C97.6579 16.328 98.4899 16.48 99.2259 16.784C99.9619 17.072 100.586 17.488 101.098 18.032C101.61 18.576 102.002 19.24 102.274 20.024C102.562 20.792 102.706 21.656 102.706 22.616V23.672H94.2339V23.888C94.2339 24.688 94.4819 25.336 94.9779 25.832C95.4739 26.312 96.2019 26.552 97.1619 26.552C97.8979 26.552 98.5299 26.416 99.0579 26.144C99.5859 25.856 100.042 25.48 100.426 25.016L102.346 27.104C101.866 27.696 101.194 28.208 100.33 28.64C99.4659 29.072 98.3699 29.288 97.0419 29.288ZM96.7539 18.872C95.9859 18.872 95.3699 19.112 94.9059 19.592C94.4579 20.056 94.2339 20.688 94.2339 21.488V21.68H99.2259V21.488C99.2259 20.672 99.0019 20.032 98.5539 19.568C98.1219 19.104 97.5219 18.872 96.7539 18.872Z\" fill=\"black\"/>\n</svg>\n",
      	"full-heart-icon": "<svg width=\"17\" height=\"16\" viewBox=\"0 0 17 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M12.4324 0C11.2224 0 10.073 0.512 9.22598 1.408L8.5 2.176L7.83452 1.472C6.08007 -0.448 3.17616 -0.448 1.42171 1.408L1.36121 1.472C-0.453737 3.392 -0.453737 6.464 1.36121 8.384L8.5 16L15.6388 8.384C17.4537 6.464 17.4537 3.392 15.6388 1.472C14.7918 0.512 13.6423 0 12.4324 0Z\" fill=\"white\"/>\n</svg>\n",
      	"empty-heart-icon": "<svg width=\"12\" height=\"11\" viewBox=\"0 0 12 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.76375 0.880001C9.07573 0.879731 9.38461 0.943417 9.67231 1.06733C9.96 1.19124 10.2207 1.37288 10.4391 1.6016C10.8892 2.07081 11.1415 2.70299 11.1415 3.3616C11.1415 4.02021 10.8892 4.65239 10.4391 5.1216L6 9.7372L1.56086 5.1216C1.11077 4.65239 0.858474 4.02021 0.858474 3.3616C0.858474 2.70299 1.11077 2.07081 1.56086 1.6016C1.77943 1.37304 2.04015 1.1915 2.32781 1.06757C2.61547 0.943641 2.9243 0.879812 3.23625 0.879812C3.5482 0.879812 3.85702 0.943641 4.14468 1.06757C4.43234 1.1915 4.69307 1.37304 4.91164 1.6016L6 2.7456L7.08408 1.6104C7.30185 1.37895 7.56285 1.19498 7.85145 1.06948C8.14005 0.943984 8.45034 0.879539 8.76375 0.880001ZM8.76375 1.18046e-06C8.33767 -0.000369617 7.91581 0.0866175 7.5229 0.255862C7.12999 0.425107 6.77394 0.673202 6.47562 0.985601L6 1.4784L5.52438 0.985601C5.2257 0.673765 4.86956 0.426101 4.47672 0.257045C4.08388 0.0879887 3.66219 0.000922868 3.23625 0.000922868C2.8103 0.000922868 2.38862 0.0879887 1.99578 0.257045C1.60294 0.426101 1.2468 0.673765 0.948119 0.985601C0.34047 1.6208 0 2.4756 0 3.366C0 4.2564 0.34047 5.11121 0.948119 5.7464L6 11L11.0519 5.7464C11.6595 5.11121 12 4.2564 12 3.366C12 2.4756 11.6595 1.6208 11.0519 0.985601C10.7533 0.673599 10.3972 0.425764 10.0043 0.256548C9.61148 0.0873321 9.18976 0.000121483 8.76375 1.18046e-06Z\" fill=\"white\"/>\n</svg>\n",
      	dna: dna,
      	"empty-checkbox": "<svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V13.75C0 14.0815 0.131696 14.3995 0.366116 14.6339C0.600537 14.8683 0.918479 15 1.25 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM1.25 13.75V1.25H13.75V13.75H1.25Z\" fill=\"#A0A0A0\"/>\n</svg>\n",
      	"logo-gray": "<svg width=\"123\" height=\"27\" viewBox=\"0 0 123 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.1328 13.6788V26.7734L26.2596 13.6788H13.1328Z\" fill=\"#A0A0A0\"/>\n<path d=\"M0 0.591698V26.7812L26.2535 0.591698H0Z\" fill=\"#A0A0A0\"/>\n<path d=\"M32.707 21.1992V1.75109H45.6089V5.17853H36.8861V9.6362H44.6885V13.0634H36.8861V21.1992H32.707Z\" fill=\"#A0A0A0\"/>\n<path d=\"M47.0312 17.9658H50.3463V10.0544H47.0312V6.82236H54.4708V10.89H54.666C54.795 10.3696 54.9764 9.864 55.21 9.37102C55.4412 8.88014 55.7383 8.44245 56.1012 8.06139C56.4641 7.68164 56.9039 7.37906 57.4232 7.1568C57.9446 6.93321 58.5569 6.82236 59.2621 6.82236H60.6291V10.6111H57.5638C56.541 10.6111 55.7701 10.9116 55.2508 11.5139C54.7315 12.1146 54.4708 12.8503 54.4708 13.7199V17.9658H59.2076V21.1992H47.0312V17.9658Z\" fill=\"#A0A0A0\"/>\n<path d=\"M68.4263 9.44751C67.5351 9.44751 66.8254 9.72191 66.2947 10.2697C65.7665 10.8172 65.5013 11.5564 65.5013 12.485V12.7069H71.297V12.485C71.297 11.5372 71.0405 10.7945 70.5304 10.256C70.0203 9.71743 69.3174 9.44751 68.4263 9.44751ZM68.7618 21.5391C66.3469 21.5391 64.5172 20.8702 63.2723 19.5321C62.0275 18.1967 61.4062 16.3759 61.4062 14.0732C61.4062 12.9021 61.5671 11.849 61.8937 10.9101C62.2179 9.97262 62.6827 9.1731 63.2857 8.51447C63.8891 7.85479 64.6238 7.35363 65.4876 7.00997C66.3516 6.66656 67.3221 6.49408 68.3991 6.49408C69.4762 6.49408 70.4422 6.66656 71.297 7.00997C72.1516 7.35363 72.875 7.84109 73.4691 8.4726C74.0632 9.1041 74.5235 9.87045 74.8501 10.7706C75.1743 11.672 75.3375 12.6798 75.3375 13.7943V15.0199H65.5013V15.2704C65.5013 16.2002 65.7891 16.9474 66.3651 17.5141C66.941 18.0811 67.7869 18.3623 68.9003 18.3623C69.7551 18.3623 70.4896 18.2012 71.1019 17.8746C71.7142 17.5504 72.2448 17.1196 72.6891 16.5797L74.918 19.0038C74.3626 19.6909 73.5826 20.285 72.5779 20.7862C71.5756 21.2894 70.3037 21.5391 68.7618 21.5391Z\" fill=\"#A0A0A0\"/>\n<path d=\"M82.6936 18.8361C83.417 18.8361 84.0293 18.6615 84.5325 18.3078C85.0337 17.9541 85.283 17.4438 85.283 16.7749V15.0484H83.0836C81.3921 15.0484 80.5462 15.6151 80.5462 16.7477V17.3034C80.5462 17.8066 80.7435 18.1877 81.1335 18.4461C81.5235 18.7068 82.0428 18.8361 82.6936 18.8361ZM88.6275 21.2057C87.7727 21.2057 87.0857 20.9879 86.5663 20.5502C86.0449 20.1149 85.7389 19.4868 85.646 18.6707H85.5074C85.2467 19.6161 84.7321 20.3327 83.961 20.8157C83.1902 21.2986 82.2469 21.5391 81.1335 21.5391C79.7391 21.5391 78.6212 21.1625 77.7753 20.4119C76.9297 19.659 76.5078 18.6049 76.5078 17.2489C76.5078 15.7444 77.0543 14.6299 78.1519 13.9054C79.2472 13.181 80.8546 12.8194 82.9724 12.8194H85.283V12.0949C85.283 11.2401 85.0834 10.5949 84.6845 10.1585C84.2852 9.72192 83.6118 9.50307 82.664 9.50307C81.7911 9.50307 81.0861 9.67083 80.5462 10.0042C80.0087 10.3387 79.5442 10.7764 79.1542 11.3149L76.8978 9.3082C77.3808 8.49077 78.1382 7.8174 79.1676 7.28781C80.1994 6.75848 81.5235 6.49409 83.1381 6.49409C85.1061 6.49409 86.6435 6.9444 87.7501 7.84557C88.8543 8.747 89.4076 10.1075 89.4076 11.9272V18.2238H90.9948V21.2057H88.6275Z\" fill=\"#A0A0A0\"/>\n<path d=\"M98.9261 18.3078C99.6516 18.3078 100.278 18.1332 100.808 17.7816C101.336 17.4303 101.602 16.877 101.602 16.121V11.9135C101.602 11.1561 101.336 10.6031 100.808 10.2526C100.278 9.90126 99.6516 9.72666 98.9261 9.72666C97.9986 9.72666 97.2823 10.0077 96.7811 10.5712C96.28 11.1335 96.0282 11.9135 96.0282 12.91V15.1245C96.0282 16.121 96.28 16.8997 96.7811 17.4643C97.2823 18.0268 97.9986 18.3078 98.9261 18.3078ZM101.602 18.5596H101.407C101.035 19.4415 100.52 20.1581 99.8602 20.7114C99.2005 21.2623 98.2956 21.5391 97.1437 21.5391C96.3455 21.5391 95.6155 21.3916 94.9556 21.0945C94.2959 20.7975 93.7313 20.3419 93.2573 19.7272C92.7835 19.115 92.4117 18.3352 92.1417 17.3872C91.8718 16.4417 91.7383 15.317 91.7383 14.0166C91.7383 12.7172 91.8718 11.5927 92.1417 10.646C92.4117 9.69822 92.7835 8.91819 93.2573 8.30485C93.7313 7.69257 94.2959 7.23672 94.9556 6.93993C95.6155 6.64288 96.3455 6.49434 97.1437 6.49434C97.7197 6.49434 98.23 6.56913 98.6767 6.71871C99.1209 6.86856 99.5157 7.07608 99.8602 7.33784C100.203 7.59961 100.502 7.91378 100.751 8.27878C101.003 8.64378 101.221 9.0417 101.407 9.47385H101.602V0.587486H105.726V21.2057H101.602V18.5596Z\" fill=\"#A0A0A0\"/>\n<path d=\"M118.793 6.83301H122.999L116.228 23.5229C115.802 24.5818 115.235 25.3889 114.53 25.9467C113.822 26.5024 112.856 26.7812 111.632 26.7812H108.789V23.55H112.244L113.136 21.1261L107.34 6.83301H111.77L113.861 12.8792L115.169 17.0582H115.392L116.645 12.8792L118.793 6.83301Z\" fill=\"#A0A0A0\"/>\n</svg>\n",
      	"read-icon": "<svg width=\"11\" height=\"13\" viewBox=\"0 0 11 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.65911 1.01953H3.55911C3.27837 1.01953 3.05078 1.24712 3.05078 1.52786C3.05078 1.80861 3.27837 2.0362 3.55911 2.0362H9.65911C9.93986 2.0362 10.1674 1.80861 10.1674 1.52786C10.1674 1.24712 9.93986 1.01953 9.65911 1.01953Z\" fill=\"white\"/>\n<path d=\"M7.62578 4.06641H3.55911C3.27837 4.06641 3.05078 4.29399 3.05078 4.57474C3.05078 4.85548 3.27837 5.08307 3.55911 5.08307H7.62578C7.90653 5.08307 8.13411 4.85548 8.13411 4.57474C8.13411 4.29399 7.90653 4.06641 7.62578 4.06641Z\" fill=\"white\"/>\n<path d=\"M9.65911 7.11719H3.55911C3.27837 7.11719 3.05078 7.34478 3.05078 7.62552C3.05078 7.90627 3.27837 8.13385 3.55911 8.13385H9.65911C9.93986 8.13385 10.1674 7.90627 10.1674 7.62552C10.1674 7.34478 9.93986 7.11719 9.65911 7.11719Z\" fill=\"white\"/>\n<path d=\"M7.62578 10.168H3.55911C3.27837 10.168 3.05078 10.3956 3.05078 10.6763C3.05078 10.957 3.27837 11.1846 3.55911 11.1846H7.62578C7.90653 11.1846 8.13411 10.957 8.13411 10.6763C8.13411 10.3956 7.90653 10.168 7.62578 10.168Z\" fill=\"white\"/>\n<path d=\"M1.01667 11.6917V0.508333C1.01667 0.227589 0.789078 0 0.508333 0C0.227589 0 0 0.227588 0 0.508333V11.6917C0 11.9724 0.227589 12.2 0.508333 12.2C0.789078 12.2 1.01667 11.9724 1.01667 11.6917Z\" fill=\"white\"/>\n</svg>\n",
      	"home-icon": "<svg width=\"15\" height=\"13\" viewBox=\"0 0 15 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M7.80617 0.106872C7.71742 0.0376156 7.60807 0 7.49549 0C7.38292 0 7.27357 0.0376156 7.18482 0.106872L0 5.70968L0.621351 6.49554L1.5 5.81043V12C1.50055 12.265 1.60608 12.5191 1.7935 12.7065C1.98092 12.8939 2.23496 12.9995 2.50001 13H12.5C12.7651 12.9995 13.0192 12.894 13.2066 12.7066C13.394 12.5191 13.4995 12.2651 13.5 12V5.81498L14.3787 6.49999L15 5.71408L7.80617 0.106872ZM8.50002 12H6.50001V7.99999H8.50002V12ZM9.50002 12V7.99999C9.49972 7.73487 9.39426 7.48069 9.20679 7.29322C9.01932 7.10575 8.76514 7.00029 8.50002 6.99999H6.50001C6.23488 7.00025 5.98068 7.10569 5.7932 7.29317C5.60572 7.48065 5.50028 7.73485 5.50001 7.99999V12H2.50001V5.03073L7.50002 1.13572L12.5 5.03598V12H9.50002Z\" fill=\"white\"/>\n</svg>\n",
      	"space2read-white": "<svg width=\"253\" height=\"50\" viewBox=\"0 0 253 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M146.52 32C145.027 32 143.916 31.608 143.188 30.824C142.46 30.04 142.096 29.0413 142.096 27.828V20.772H138.176V17.552H140.724C141.34 17.552 141.779 17.4307 142.04 17.188C142.301 16.9453 142.432 16.4973 142.432 15.844V12.456H146.24V17.552H151.868V20.772H146.24V28.78H151.868V32H146.52ZM162.189 32.336C161.069 32.336 160.061 32.168 159.165 31.832C158.269 31.4773 157.504 30.9733 156.869 30.32C156.253 29.6667 155.777 28.8733 155.441 27.94C155.105 27.0067 154.937 25.952 154.937 24.776C154.937 23.6 155.105 22.5453 155.441 21.612C155.777 20.6787 156.253 19.8853 156.869 19.232C157.504 18.5787 158.269 18.084 159.165 17.748C160.061 17.3933 161.069 17.216 162.189 17.216C163.309 17.216 164.317 17.3933 165.213 17.748C166.109 18.084 166.865 18.5787 167.481 19.232C168.116 19.8853 168.601 20.6787 168.937 21.612C169.273 22.5453 169.441 23.6 169.441 24.776C169.441 25.952 169.273 27.0067 168.937 27.94C168.601 28.8733 168.116 29.6667 167.481 30.32C166.865 30.9733 166.109 31.4773 165.213 31.832C164.317 32.168 163.309 32.336 162.189 32.336ZM162.189 29.256C163.122 29.256 163.85 28.9667 164.373 28.388C164.896 27.8093 165.157 26.988 165.157 25.924V23.628C165.157 22.564 164.896 21.7427 164.373 21.164C163.85 20.5853 163.122 20.296 162.189 20.296C161.256 20.296 160.528 20.5853 160.005 21.164C159.482 21.7427 159.221 22.564 159.221 23.628V25.924C159.221 26.988 159.482 27.8093 160.005 28.388C160.528 28.9667 161.256 29.256 162.189 29.256ZM189.439 28.78H192.771V20.772H189.439V17.552H196.915V21.64H197.111C197.242 21.1173 197.419 20.6133 197.643 20.128C197.886 19.624 198.185 19.1853 198.539 18.812C198.913 18.42 199.361 18.112 199.883 17.888C200.406 17.664 201.022 17.552 201.731 17.552H203.103V21.36H200.023C198.997 21.36 198.222 21.668 197.699 22.284C197.177 22.8813 196.915 23.6187 196.915 24.496V28.78H201.675V32H189.439V28.78ZM212.948 32.336C210.522 32.336 208.683 31.664 207.432 30.32C206.182 28.976 205.556 27.1467 205.556 24.832C205.556 23.656 205.715 22.6013 206.032 21.668C206.368 20.716 206.835 19.9133 207.432 19.26C208.048 18.588 208.786 18.084 209.644 17.748C210.522 17.3933 211.502 17.216 212.584 17.216C213.667 17.216 214.638 17.3933 215.496 17.748C216.355 18.084 217.083 18.5693 217.68 19.204C218.278 19.8387 218.735 20.6133 219.052 21.528C219.388 22.424 219.556 23.432 219.556 24.552V25.784H209.672V26.036C209.672 26.9693 209.962 27.7253 210.54 28.304C211.119 28.864 211.968 29.144 213.088 29.144C213.947 29.144 214.684 28.9853 215.3 28.668C215.916 28.332 216.448 27.8933 216.896 27.352L219.136 29.788C218.576 30.4787 217.792 31.076 216.784 31.58C215.776 32.084 214.498 32.336 212.948 32.336ZM212.612 20.184C211.716 20.184 210.998 20.464 210.456 21.024C209.934 21.5653 209.672 22.3027 209.672 23.236V23.46H215.496V23.236C215.496 22.284 215.235 21.5373 214.712 20.996C214.208 20.4547 213.508 20.184 212.612 20.184ZM234.581 32C233.723 32 233.032 31.7853 232.509 31.356C231.987 30.908 231.679 30.2733 231.585 29.452H231.445C231.184 30.404 230.661 31.1227 229.877 31.608C229.112 32.0933 228.169 32.336 227.049 32.336C225.649 32.336 224.52 31.9627 223.661 31.216C222.821 30.4507 222.401 29.3867 222.401 28.024C222.401 26.512 222.952 25.392 224.053 24.664C225.155 23.936 226.769 23.572 228.897 23.572H231.221V22.844C231.221 21.9853 231.016 21.3413 230.605 20.912C230.213 20.464 229.541 20.24 228.589 20.24C227.712 20.24 227.003 20.408 226.461 20.744C225.92 21.08 225.453 21.5187 225.061 22.06L222.793 20.044C223.279 19.2227 224.035 18.5507 225.061 18.028C226.107 17.4867 227.441 17.216 229.065 17.216C231.044 17.216 232.584 17.6733 233.685 18.588C234.805 19.484 235.365 20.8467 235.365 22.676V29.004H236.961V32H234.581ZM228.617 29.62C229.345 29.62 229.961 29.4427 230.465 29.088C230.969 28.7333 231.221 28.22 231.221 27.548V25.812H229.009C227.311 25.812 226.461 26.3813 226.461 27.52V28.08C226.461 28.584 226.657 28.9667 227.049 29.228C227.441 29.4893 227.964 29.62 228.617 29.62ZM248.738 29.368H248.542C248.169 30.2453 247.646 30.964 246.974 31.524C246.321 32.0653 245.416 32.336 244.258 32.336C243.456 32.336 242.718 32.1867 242.046 31.888C241.393 31.5893 240.824 31.132 240.338 30.516C239.872 29.9 239.498 29.116 239.218 28.164C238.957 27.212 238.826 26.0827 238.826 24.776C238.826 23.4693 238.957 22.34 239.218 21.388C239.498 20.436 239.872 19.652 240.338 19.036C240.824 18.42 241.393 17.9627 242.046 17.664C242.718 17.3653 243.456 17.216 244.258 17.216C244.837 17.216 245.35 17.2907 245.798 17.44C246.246 17.5893 246.638 17.7947 246.974 18.056C247.329 18.3173 247.628 18.6347 247.87 19.008C248.132 19.3627 248.356 19.7547 248.542 20.184H248.738V11.28H252.882V32H248.738V29.368ZM246.05 29.116C246.778 29.116 247.404 28.9387 247.926 28.584C248.468 28.2293 248.738 27.6693 248.738 26.904V22.648C248.738 21.8827 248.468 21.3227 247.926 20.968C247.404 20.6133 246.778 20.436 246.05 20.436C245.117 20.436 244.398 20.7253 243.894 21.304C243.39 21.864 243.138 22.648 243.138 23.656V25.896C243.138 26.904 243.39 27.6973 243.894 28.276C244.398 28.836 245.117 29.116 246.05 29.116Z\" fill=\"white\"/>\n<path d=\"M118.762 41.5V41.5C118.762 45.0186 115.91 47.8709 112.391 47.8709H12C6.47714 47.8709 2 43.3938 2 37.8709V16.5C2 12.9101 4.91015 10 8.5 10V10\" stroke=\"#636262\" stroke-opacity=\"0.6\" stroke-width=\"3\"/>\n<rect x=\"8.03833\" y=\"1.5\" width=\"116.3\" height=\"40.3226\" rx=\"8.5\" stroke=\"#636262\" stroke-width=\"3\"/>\n<path d=\"M35.1594 29.288C33.7834 29.288 32.5834 29.08 31.5594 28.664C30.5514 28.248 29.7914 27.68 29.2794 26.96L31.2714 25.112C31.7514 25.64 32.3114 26.056 32.9514 26.36C33.6074 26.648 34.3514 26.792 35.1834 26.792C35.8874 26.792 36.4394 26.688 36.8394 26.48C37.2394 26.256 37.4394 25.92 37.4394 25.472C37.4394 25.12 37.3034 24.88 37.0314 24.752C36.7594 24.608 36.3834 24.496 35.9034 24.416L33.9114 24.104C33.3514 24.024 32.8314 23.904 32.3514 23.744C31.8714 23.568 31.4554 23.336 31.1034 23.048C30.7514 22.76 30.4714 22.408 30.2634 21.992C30.0554 21.576 29.9514 21.072 29.9514 20.48C29.9514 19.184 30.4474 18.168 31.4394 17.432C32.4314 16.696 33.8234 16.328 35.6154 16.328C36.8314 16.328 37.8634 16.496 38.7114 16.832C39.5754 17.152 40.2634 17.616 40.7754 18.224L38.9994 20.24C38.6314 19.84 38.1594 19.504 37.5834 19.232C37.0074 18.96 36.3114 18.824 35.4954 18.824C34.1194 18.824 33.4314 19.24 33.4314 20.072C33.4314 20.44 33.5674 20.696 33.8394 20.84C34.1114 20.968 34.4874 21.072 34.9674 21.152L36.9354 21.464C37.4954 21.544 38.0154 21.672 38.4954 21.848C38.9754 22.008 39.3914 22.232 39.7434 22.52C40.1114 22.808 40.3994 23.16 40.6074 23.576C40.8154 23.992 40.9194 24.496 40.9194 25.088C40.9194 26.384 40.4154 27.408 39.4074 28.16C38.4154 28.912 36.9994 29.288 35.1594 29.288ZM44.8701 16.616H48.4221V18.872H48.5901C48.8941 18.136 49.3341 17.528 49.9101 17.048C50.4861 16.568 51.2701 16.328 52.2621 16.328C52.9501 16.328 53.5741 16.456 54.1341 16.712C54.7101 16.968 55.1981 17.36 55.5981 17.888C56.0141 18.416 56.3341 19.088 56.5581 19.904C56.7981 20.72 56.9181 21.688 56.9181 22.808C56.9181 23.928 56.7981 24.896 56.5581 25.712C56.3341 26.528 56.0141 27.2 55.5981 27.728C55.1981 28.256 54.7101 28.648 54.1341 28.904C53.5741 29.16 52.9501 29.288 52.2621 29.288C51.2701 29.288 50.4861 29.056 49.9101 28.592C49.3341 28.112 48.8941 27.496 48.5901 26.744H48.4221V33.8H44.8701V16.616ZM50.7261 26.528C51.5261 26.528 52.1421 26.288 52.5741 25.808C53.0061 25.312 53.2221 24.632 53.2221 23.768V21.848C53.2221 20.984 53.0061 20.312 52.5741 19.832C52.1421 19.336 51.5261 19.088 50.7261 19.088C50.1021 19.088 49.5581 19.24 49.0941 19.544C48.6461 19.848 48.4221 20.328 48.4221 20.984V24.632C48.4221 25.288 48.6461 25.768 49.0941 26.072C49.5581 26.376 50.1021 26.528 50.7261 26.528ZM70.4927 29C69.7567 29 69.1647 28.816 68.7167 28.448C68.2687 28.064 68.0047 27.52 67.9247 26.816H67.8047C67.5807 27.632 67.1327 28.248 66.4607 28.664C65.8047 29.08 64.9967 29.288 64.0367 29.288C62.8367 29.288 61.8687 28.968 61.1327 28.328C60.4127 27.672 60.0527 26.76 60.0527 25.592C60.0527 24.296 60.5247 23.336 61.4687 22.712C62.4127 22.088 63.7967 21.776 65.6207 21.776H67.6127V21.152C67.6127 20.416 67.4367 19.864 67.0847 19.496C66.7487 19.112 66.1727 18.92 65.3567 18.92C64.6047 18.92 63.9967 19.064 63.5327 19.352C63.0687 19.64 62.6687 20.016 62.3327 20.48L60.3887 18.752C60.8047 18.048 61.4527 17.472 62.3327 17.024C63.2287 16.56 64.3727 16.328 65.7647 16.328C67.4607 16.328 68.7807 16.72 69.7247 17.504C70.6847 18.272 71.1647 19.44 71.1647 21.008V26.432H72.5327V29H70.4927ZM65.3807 26.96C66.0047 26.96 66.5327 26.808 66.9647 26.504C67.3967 26.2 67.6127 25.76 67.6127 25.184V23.696H65.7167C64.2607 23.696 63.5327 24.184 63.5327 25.16V25.64C63.5327 26.072 63.7007 26.4 64.0367 26.624C64.3727 26.848 64.8207 26.96 65.3807 26.96ZM81.8593 29.288C80.8833 29.288 80.0033 29.144 79.2193 28.856C78.4513 28.552 77.7953 28.12 77.2513 27.56C76.7233 27 76.3153 26.32 76.0273 25.52C75.7393 24.72 75.5953 23.816 75.5953 22.808C75.5953 21.8 75.7393 20.896 76.0273 20.096C76.3153 19.296 76.7233 18.616 77.2513 18.056C77.7953 17.496 78.4513 17.072 79.2193 16.784C80.0033 16.48 80.8753 16.328 81.8353 16.328C83.1953 16.328 84.2833 16.608 85.0993 17.168C85.9313 17.712 86.5633 18.44 86.9953 19.352L84.2593 20.84C84.0353 20.36 83.7393 19.96 83.3713 19.64C83.0193 19.32 82.5073 19.16 81.8353 19.16C81.0193 19.16 80.3873 19.4 79.9393 19.88C79.5073 20.344 79.2913 20.984 79.2913 21.8V23.816C79.2913 24.632 79.5073 25.28 79.9393 25.76C80.3873 26.224 81.0353 26.456 81.8833 26.456C82.5713 26.456 83.1073 26.296 83.4913 25.976C83.8913 25.656 84.2273 25.24 84.4993 24.728L87.1873 26.264C86.7393 27.176 86.0833 27.912 85.2193 28.472C84.3713 29.016 83.2513 29.288 81.8593 29.288ZM97.0419 29.288C94.9619 29.288 93.3859 28.712 92.3139 27.56C91.2419 26.408 90.7059 24.84 90.7059 22.856C90.7059 21.848 90.8419 20.944 91.1139 20.144C91.4019 19.328 91.8019 18.64 92.3139 18.08C92.8419 17.504 93.4739 17.072 94.2099 16.784C94.9619 16.48 95.8019 16.328 96.7299 16.328C97.6579 16.328 98.4899 16.48 99.2259 16.784C99.9619 17.072 100.586 17.488 101.098 18.032C101.61 18.576 102.002 19.24 102.274 20.024C102.562 20.792 102.706 21.656 102.706 22.616V23.672H94.2339V23.888C94.2339 24.688 94.4819 25.336 94.9779 25.832C95.4739 26.312 96.2019 26.552 97.1619 26.552C97.8979 26.552 98.5299 26.416 99.0579 26.144C99.5859 25.856 100.042 25.48 100.426 25.016L102.346 27.104C101.866 27.696 101.194 28.208 100.33 28.64C99.4659 29.072 98.3699 29.288 97.0419 29.288ZM96.7539 18.872C95.9859 18.872 95.3699 19.112 94.9059 19.592C94.4579 20.056 94.2339 20.688 94.2339 21.488V21.68H99.2259V21.488C99.2259 20.672 99.0019 20.032 98.5539 19.568C98.1219 19.104 97.5219 18.872 96.7539 18.872Z\" fill=\"white\"/>\n</svg>\n",
      	"upload-icon": "<svg width=\"12\" height=\"13\" viewBox=\"0 0 12 13\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11.0013 10.2126H9.16795V8.35547H8.25129V10.2126H6.41797V11.1411H8.25129V12.9983H9.16795V11.1411H11.0013V10.2126Z\" fill=\"white\"/>\n<path d=\"M4.5833 12.0714H0.91666V0.92872H4.5833V3.7144C4.584 3.96045 4.6808 4.19622 4.85256 4.37021C5.02431 4.54419 5.25706 4.64225 5.49996 4.64296H8.24994V6.50008H9.1666V3.7144C9.16824 3.65338 9.1568 3.59272 9.13306 3.53662C9.10932 3.48051 9.07386 3.43028 9.0291 3.3894L5.82079 0.139444C5.78045 0.0940967 5.73087 0.0581592 5.67548 0.034112C5.62008 0.0100648 5.5602 -0.00151924 5.49996 0.000159584H0.91666C0.673762 0.000870046 0.441014 0.0989284 0.269258 0.272913C0.0975029 0.446898 0.000701357 0.682669 0 0.92872V12.0714C0.000701357 12.3175 0.0975029 12.5533 0.269258 12.7272C0.441014 12.9012 0.673762 12.9993 0.91666 13H4.5833V12.0714ZM5.49996 1.11443L8.06661 3.7144H5.49996V1.11443Z\" fill=\"white\"/>\n</svg>\n",
      	"checked-checkbox": "<svg width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M13.75 0H1.25C0.918479 0 0.600537 0.131696 0.366116 0.366116C0.131696 0.600537 0 0.918479 0 1.25V13.75C0 14.0815 0.131696 14.3995 0.366116 14.6339C0.600537 14.8683 0.918479 15 1.25 15H13.75C14.0815 15 14.3995 14.8683 14.6339 14.6339C14.8683 14.3995 15 14.0815 15 13.75V1.25C15 0.918479 14.8683 0.600537 14.6339 0.366116C14.3995 0.131696 14.0815 0 13.75 0ZM6.25 10.9375L3.125 7.83919L4.11925 6.875L6.25 8.966L10.8804 4.375L11.8753 5.36075L6.25 10.9375Z\" fill=\"white\"/>\n</svg>\n",
      	microscope: microscope,
      	logo: logo,
      	gamification: gamification,
      	"read-icon-new": "<svg width=\"14\" height=\"18\" viewBox=\"0 0 14 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M10.7689 7.53906H3.23047V9.04675H10.7689V7.53906Z\" fill=\"white\"/>\n<path d=\"M7.53816 10.7695H3.23047V12.2772H7.53816V10.7695Z\" fill=\"white\"/>\n<path d=\"M10.7689 4.30859H3.23047V5.81629H10.7689V4.30859Z\" fill=\"white\"/>\n<path d=\"M12.6 17.2308H1.4C1.02883 17.2304 0.67298 17.1006 0.410521 16.8699C0.148062 16.6391 0.000426113 16.3263 0 16V1.23077C0.000426113 0.904464 0.148062 0.591631 0.410521 0.360898C0.67298 0.130165 1.02883 0.000374605 1.4 0H12.6C12.9712 0.000374605 13.327 0.130165 13.5895 0.360898C13.8519 0.591631 13.9996 0.904464 14 1.23077V16C13.9996 16.3263 13.8519 16.6391 13.5895 16.8699C13.327 17.1006 12.9712 17.2304 12.6 17.2308ZM1.4 1.23077V16H12.6V1.23077H1.4Z\" fill=\"white\"/>\n</svg>\n",
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
          M$1.addStyles(styles[name]);
      }

      function SVG(name, fill) {
          if (!name in icons) return console.error(`could not find ${name}.svg in docs/src/icons`)
          let i = _e(icons[name]).setId(name);
          if (fill) return j$1(i)
                                      .css(`fill ${fill}`).html()
          return i.outerHTML
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

      /*global define:false */

      var mousetrap = createCommonjsModule(function (module) {
      /**
       * Copyright 2012-2017 Craig Campbell
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       * http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * Mousetrap is a simple keyboard shortcut library for Javascript with
       * no external dependencies
       *
       * @version 1.6.5
       * @url craig.is/killing/mice
       */
      (function(window, document, undefined$1) {

          // Check if mousetrap is used inside browser, if not, return
          if (!window) {
              return;
          }

          /**
           * mapping of special keycodes to their corresponding keys
           *
           * everything in this dictionary cannot use keypress events
           * so it has to be here to map to the correct keycodes for
           * keyup/keydown events
           *
           * @type {Object}
           */
          var _MAP = {
              8: 'backspace',
              9: 'tab',
              13: 'enter',
              16: 'shift',
              17: 'ctrl',
              18: 'alt',
              20: 'capslock',
              27: 'esc',
              32: 'space',
              33: 'pageup',
              34: 'pagedown',
              35: 'end',
              36: 'home',
              37: 'left',
              38: 'up',
              39: 'right',
              40: 'down',
              45: 'ins',
              46: 'del',
              91: 'meta',
              93: 'meta',
              224: 'meta'
          };

          /**
           * mapping for special characters so they can support
           *
           * this dictionary is only used incase you want to bind a
           * keyup or keydown event to one of these keys
           *
           * @type {Object}
           */
          var _KEYCODE_MAP = {
              106: '*',
              107: '+',
              109: '-',
              110: '.',
              111 : '/',
              186: ';',
              187: '=',
              188: ',',
              189: '-',
              190: '.',
              191: '/',
              192: '`',
              219: '[',
              220: '\\',
              221: ']',
              222: '\''
          };

          /**
           * this is a mapping of keys that require shift on a US keypad
           * back to the non shift equivelents
           *
           * this is so you can use keyup events with these keys
           *
           * note that this will only work reliably on US keyboards
           *
           * @type {Object}
           */
          var _SHIFT_MAP = {
              '~': '`',
              '!': '1',
              '@': '2',
              '#': '3',
              '$': '4',
              '%': '5',
              '^': '6',
              '&': '7',
              '*': '8',
              '(': '9',
              ')': '0',
              '_': '-',
              '+': '=',
              ':': ';',
              '\"': '\'',
              '<': ',',
              '>': '.',
              '?': '/',
              '|': '\\'
          };

          /**
           * this is a list of special strings you can use to map
           * to modifier keys when you specify your keyboard shortcuts
           *
           * @type {Object}
           */
          var _SPECIAL_ALIASES = {
              'option': 'alt',
              'command': 'meta',
              'return': 'enter',
              'escape': 'esc',
              'plus': '+',
              'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
          };

          /**
           * variable to store the flipped version of _MAP from above
           * needed to check if we should use keypress or not when no action
           * is specified
           *
           * @type {Object|undefined}
           */
          var _REVERSE_MAP;

          /**
           * loop through the f keys, f1 to f19 and add them to the map
           * programatically
           */
          for (var i = 1; i < 20; ++i) {
              _MAP[111 + i] = 'f' + i;
          }

          /**
           * loop through to map numbers on the numeric keypad
           */
          for (i = 0; i <= 9; ++i) {

              // This needs to use a string cause otherwise since 0 is falsey
              // mousetrap will never fire for numpad 0 pressed as part of a keydown
              // event.
              //
              // @see https://github.com/ccampbell/mousetrap/pull/258
              _MAP[i + 96] = i.toString();
          }

          /**
           * cross browser add event method
           *
           * @param {Element|HTMLDocument} object
           * @param {string} type
           * @param {Function} callback
           * @returns void
           */
          function _addEvent(object, type, callback) {
              if (object.addEventListener) {
                  object.addEventListener(type, callback, false);
                  return;
              }

              object.attachEvent('on' + type, callback);
          }

          /**
           * takes the event and returns the key character
           *
           * @param {Event} e
           * @return {string}
           */
          function _characterFromEvent(e) {

              // for keypress events we should return the character as is
              if (e.type == 'keypress') {
                  var character = String.fromCharCode(e.which);

                  // if the shift key is not pressed then it is safe to assume
                  // that we want the character to be lowercase.  this means if
                  // you accidentally have caps lock on then your key bindings
                  // will continue to work
                  //
                  // the only side effect that might not be desired is if you
                  // bind something like 'A' cause you want to trigger an
                  // event when capital A is pressed caps lock will no longer
                  // trigger the event.  shift+a will though.
                  if (!e.shiftKey) {
                      character = character.toLowerCase();
                  }

                  return character;
              }

              // for non keypress events the special maps are needed
              if (_MAP[e.which]) {
                  return _MAP[e.which];
              }

              if (_KEYCODE_MAP[e.which]) {
                  return _KEYCODE_MAP[e.which];
              }

              // if it is not in the special map

              // with keydown and keyup events the character seems to always
              // come in as an uppercase character whether you are pressing shift
              // or not.  we should make sure it is always lowercase for comparisons
              return String.fromCharCode(e.which).toLowerCase();
          }

          /**
           * checks if two arrays are equal
           *
           * @param {Array} modifiers1
           * @param {Array} modifiers2
           * @returns {boolean}
           */
          function _modifiersMatch(modifiers1, modifiers2) {
              return modifiers1.sort().join(',') === modifiers2.sort().join(',');
          }

          /**
           * takes a key event and figures out what the modifiers are
           *
           * @param {Event} e
           * @returns {Array}
           */
          function _eventModifiers(e) {
              var modifiers = [];

              if (e.shiftKey) {
                  modifiers.push('shift');
              }

              if (e.altKey) {
                  modifiers.push('alt');
              }

              if (e.ctrlKey) {
                  modifiers.push('ctrl');
              }

              if (e.metaKey) {
                  modifiers.push('meta');
              }

              return modifiers;
          }

          /**
           * prevents default for this event
           *
           * @param {Event} e
           * @returns void
           */
          function _preventDefault(e) {
              if (e.preventDefault) {
                  e.preventDefault();
                  return;
              }

              e.returnValue = false;
          }

          /**
           * stops propogation for this event
           *
           * @param {Event} e
           * @returns void
           */
          function _stopPropagation(e) {
              if (e.stopPropagation) {
                  e.stopPropagation();
                  return;
              }

              e.cancelBubble = true;
          }

          /**
           * determines if the keycode specified is a modifier key or not
           *
           * @param {string} key
           * @returns {boolean}
           */
          function _isModifier(key) {
              return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
          }

          /**
           * reverses the map lookup so that we can look for specific keys
           * to see what can and can't use keypress
           *
           * @return {Object}
           */
          function _getReverseMap() {
              if (!_REVERSE_MAP) {
                  _REVERSE_MAP = {};
                  for (var key in _MAP) {

                      // pull out the numeric keypad from here cause keypress should
                      // be able to detect the keys from the character
                      if (key > 95 && key < 112) {
                          continue;
                      }

                      if (_MAP.hasOwnProperty(key)) {
                          _REVERSE_MAP[_MAP[key]] = key;
                      }
                  }
              }
              return _REVERSE_MAP;
          }

          /**
           * picks the best action based on the key combination
           *
           * @param {string} key - character for key
           * @param {Array} modifiers
           * @param {string=} action passed in
           */
          function _pickBestAction(key, modifiers, action) {

              // if no action was picked in we should try to pick the one
              // that we think would work best for this key
              if (!action) {
                  action = _getReverseMap()[key] ? 'keydown' : 'keypress';
              }

              // modifier keys don't work as expected with keypress,
              // switch to keydown
              if (action == 'keypress' && modifiers.length) {
                  action = 'keydown';
              }

              return action;
          }

          /**
           * Converts from a string key combination to an array
           *
           * @param  {string} combination like "command+shift+l"
           * @return {Array}
           */
          function _keysFromString(combination) {
              if (combination === '+') {
                  return ['+'];
              }

              combination = combination.replace(/\+{2}/g, '+plus');
              return combination.split('+');
          }

          /**
           * Gets info for a specific key combination
           *
           * @param  {string} combination key combination ("command+s" or "a" or "*")
           * @param  {string=} action
           * @returns {Object}
           */
          function _getKeyInfo(combination, action) {
              var keys;
              var key;
              var i;
              var modifiers = [];

              // take the keys from this pattern and figure out what the actual
              // pattern is all about
              keys = _keysFromString(combination);

              for (i = 0; i < keys.length; ++i) {
                  key = keys[i];

                  // normalize key names
                  if (_SPECIAL_ALIASES[key]) {
                      key = _SPECIAL_ALIASES[key];
                  }

                  // if this is not a keypress event then we should
                  // be smart about using shift keys
                  // this will only work for US keyboards however
                  if (action && action != 'keypress' && _SHIFT_MAP[key]) {
                      key = _SHIFT_MAP[key];
                      modifiers.push('shift');
                  }

                  // if this key is a modifier then add it to the list of modifiers
                  if (_isModifier(key)) {
                      modifiers.push(key);
                  }
              }

              // depending on what the key combination is
              // we will try to pick the best event for it
              action = _pickBestAction(key, modifiers, action);

              return {
                  key: key,
                  modifiers: modifiers,
                  action: action
              };
          }

          function _belongsTo(element, ancestor) {
              if (element === null || element === document) {
                  return false;
              }

              if (element === ancestor) {
                  return true;
              }

              return _belongsTo(element.parentNode, ancestor);
          }

          function Mousetrap(targetElement) {
              var self = this;

              targetElement = targetElement || document;

              if (!(self instanceof Mousetrap)) {
                  return new Mousetrap(targetElement);
              }

              /**
               * element to attach key events to
               *
               * @type {Element}
               */
              self.target = targetElement;

              /**
               * a list of all the callbacks setup via Mousetrap.bind()
               *
               * @type {Object}
               */
              self._callbacks = {};

              /**
               * direct map of string combinations to callbacks used for trigger()
               *
               * @type {Object}
               */
              self._directMap = {};

              /**
               * keeps track of what level each sequence is at since multiple
               * sequences can start out with the same sequence
               *
               * @type {Object}
               */
              var _sequenceLevels = {};

              /**
               * variable to store the setTimeout call
               *
               * @type {null|number}
               */
              var _resetTimer;

              /**
               * temporary state where we will ignore the next keyup
               *
               * @type {boolean|string}
               */
              var _ignoreNextKeyup = false;

              /**
               * temporary state where we will ignore the next keypress
               *
               * @type {boolean}
               */
              var _ignoreNextKeypress = false;

              /**
               * are we currently inside of a sequence?
               * type of action ("keyup" or "keydown" or "keypress") or false
               *
               * @type {boolean|string}
               */
              var _nextExpectedAction = false;

              /**
               * resets all sequence counters except for the ones passed in
               *
               * @param {Object} doNotReset
               * @returns void
               */
              function _resetSequences(doNotReset) {
                  doNotReset = doNotReset || {};

                  var activeSequences = false,
                      key;

                  for (key in _sequenceLevels) {
                      if (doNotReset[key]) {
                          activeSequences = true;
                          continue;
                      }
                      _sequenceLevels[key] = 0;
                  }

                  if (!activeSequences) {
                      _nextExpectedAction = false;
                  }
              }

              /**
               * finds all callbacks that match based on the keycode, modifiers,
               * and action
               *
               * @param {string} character
               * @param {Array} modifiers
               * @param {Event|Object} e
               * @param {string=} sequenceName - name of the sequence we are looking for
               * @param {string=} combination
               * @param {number=} level
               * @returns {Array}
               */
              function _getMatches(character, modifiers, e, sequenceName, combination, level) {
                  var i;
                  var callback;
                  var matches = [];
                  var action = e.type;

                  // if there are no events related to this keycode
                  if (!self._callbacks[character]) {
                      return [];
                  }

                  // if a modifier key is coming up on its own we should allow it
                  if (action == 'keyup' && _isModifier(character)) {
                      modifiers = [character];
                  }

                  // loop through all callbacks for the key that was pressed
                  // and see if any of them match
                  for (i = 0; i < self._callbacks[character].length; ++i) {
                      callback = self._callbacks[character][i];

                      // if a sequence name is not specified, but this is a sequence at
                      // the wrong level then move onto the next match
                      if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
                          continue;
                      }

                      // if the action we are looking for doesn't match the action we got
                      // then we should keep going
                      if (action != callback.action) {
                          continue;
                      }

                      // if this is a keypress event and the meta key and control key
                      // are not pressed that means that we need to only look at the
                      // character, otherwise check the modifiers as well
                      //
                      // chrome will not fire a keypress if meta or control is down
                      // safari will fire a keypress if meta or meta+shift is down
                      // firefox will fire a keypress if meta or control is down
                      if ((action == 'keypress' && !e.metaKey && !e.ctrlKey) || _modifiersMatch(modifiers, callback.modifiers)) {

                          // when you bind a combination or sequence a second time it
                          // should overwrite the first one.  if a sequenceName or
                          // combination is specified in this call it does just that
                          //
                          // @todo make deleting its own method?
                          var deleteCombo = !sequenceName && callback.combo == combination;
                          var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;
                          if (deleteCombo || deleteSequence) {
                              self._callbacks[character].splice(i, 1);
                          }

                          matches.push(callback);
                      }
                  }

                  return matches;
              }

              /**
               * actually calls the callback function
               *
               * if your callback function returns false this will use the jquery
               * convention - prevent default and stop propogation on the event
               *
               * @param {Function} callback
               * @param {Event} e
               * @returns void
               */
              function _fireCallback(callback, e, combo, sequence) {

                  // if this event should not happen stop here
                  if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
                      return;
                  }

                  if (callback(e, combo) === false) {
                      _preventDefault(e);
                      _stopPropagation(e);
                  }
              }

              /**
               * handles a character key event
               *
               * @param {string} character
               * @param {Array} modifiers
               * @param {Event} e
               * @returns void
               */
              self._handleKey = function(character, modifiers, e) {
                  var callbacks = _getMatches(character, modifiers, e);
                  var i;
                  var doNotReset = {};
                  var maxLevel = 0;
                  var processedSequenceCallback = false;

                  // Calculate the maxLevel for sequences so we can only execute the longest callback sequence
                  for (i = 0; i < callbacks.length; ++i) {
                      if (callbacks[i].seq) {
                          maxLevel = Math.max(maxLevel, callbacks[i].level);
                      }
                  }

                  // loop through matching callbacks for this key event
                  for (i = 0; i < callbacks.length; ++i) {

                      // fire for all sequence callbacks
                      // this is because if for example you have multiple sequences
                      // bound such as "g i" and "g t" they both need to fire the
                      // callback for matching g cause otherwise you can only ever
                      // match the first one
                      if (callbacks[i].seq) {

                          // only fire callbacks for the maxLevel to prevent
                          // subsequences from also firing
                          //
                          // for example 'a option b' should not cause 'option b' to fire
                          // even though 'option b' is part of the other sequence
                          //
                          // any sequences that do not match here will be discarded
                          // below by the _resetSequences call
                          if (callbacks[i].level != maxLevel) {
                              continue;
                          }

                          processedSequenceCallback = true;

                          // keep a list of which sequences were matches for later
                          doNotReset[callbacks[i].seq] = 1;
                          _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);
                          continue;
                      }

                      // if there were no sequence matches but we are still here
                      // that means this is a regular match so we should fire that
                      if (!processedSequenceCallback) {
                          _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
                      }
                  }

                  // if the key you pressed matches the type of sequence without
                  // being a modifier (ie "keyup" or "keypress") then we should
                  // reset all sequences that were not matched by this event
                  //
                  // this is so, for example, if you have the sequence "h a t" and you
                  // type "h e a r t" it does not match.  in this case the "e" will
                  // cause the sequence to reset
                  //
                  // modifier keys are ignored because you can have a sequence
                  // that contains modifiers such as "enter ctrl+space" and in most
                  // cases the modifier key will be pressed before the next key
                  //
                  // also if you have a sequence such as "ctrl+b a" then pressing the
                  // "b" key will trigger a "keypress" and a "keydown"
                  //
                  // the "keydown" is expected when there is a modifier, but the
                  // "keypress" ends up matching the _nextExpectedAction since it occurs
                  // after and that causes the sequence to reset
                  //
                  // we ignore keypresses in a sequence that directly follow a keydown
                  // for the same character
                  var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;
                  if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
                      _resetSequences(doNotReset);
                  }

                  _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
              };

              /**
               * handles a keydown event
               *
               * @param {Event} e
               * @returns void
               */
              function _handleKeyEvent(e) {

                  // normalize e.which for key events
                  // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
                  if (typeof e.which !== 'number') {
                      e.which = e.keyCode;
                  }

                  var character = _characterFromEvent(e);

                  // no character found then stop
                  if (!character) {
                      return;
                  }

                  // need to use === for the character check because the character can be 0
                  if (e.type == 'keyup' && _ignoreNextKeyup === character) {
                      _ignoreNextKeyup = false;
                      return;
                  }

                  self.handleKey(character, _eventModifiers(e), e);
              }

              /**
               * called to set a 1 second timeout on the specified sequence
               *
               * this is so after each key press in the sequence you have 1 second
               * to press the next key before you have to start over
               *
               * @returns void
               */
              function _resetSequenceTimer() {
                  clearTimeout(_resetTimer);
                  _resetTimer = setTimeout(_resetSequences, 1000);
              }

              /**
               * binds a key sequence to an event
               *
               * @param {string} combo - combo specified in bind call
               * @param {Array} keys
               * @param {Function} callback
               * @param {string=} action
               * @returns void
               */
              function _bindSequence(combo, keys, callback, action) {

                  // start off by adding a sequence level record for this combination
                  // and setting the level to 0
                  _sequenceLevels[combo] = 0;

                  /**
                   * callback to increase the sequence level for this sequence and reset
                   * all other sequences that were active
                   *
                   * @param {string} nextAction
                   * @returns {Function}
                   */
                  function _increaseSequence(nextAction) {
                      return function() {
                          _nextExpectedAction = nextAction;
                          ++_sequenceLevels[combo];
                          _resetSequenceTimer();
                      };
                  }

                  /**
                   * wraps the specified callback inside of another function in order
                   * to reset all sequence counters as soon as this sequence is done
                   *
                   * @param {Event} e
                   * @returns void
                   */
                  function _callbackAndReset(e) {
                      _fireCallback(callback, e, combo);

                      // we should ignore the next key up if the action is key down
                      // or keypress.  this is so if you finish a sequence and
                      // release the key the final key will not trigger a keyup
                      if (action !== 'keyup') {
                          _ignoreNextKeyup = _characterFromEvent(e);
                      }

                      // weird race condition if a sequence ends with the key
                      // another sequence begins with
                      setTimeout(_resetSequences, 10);
                  }

                  // loop through keys one at a time and bind the appropriate callback
                  // function.  for any key leading up to the final one it should
                  // increase the sequence. after the final, it should reset all sequences
                  //
                  // if an action is specified in the original bind call then that will
                  // be used throughout.  otherwise we will pass the action that the
                  // next key in the sequence should match.  this allows a sequence
                  // to mix and match keypress and keydown events depending on which
                  // ones are better suited to the key provided
                  for (var i = 0; i < keys.length; ++i) {
                      var isFinal = i + 1 === keys.length;
                      var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);
                      _bindSingle(keys[i], wrappedCallback, action, combo, i);
                  }
              }

              /**
               * binds a single keyboard combination
               *
               * @param {string} combination
               * @param {Function} callback
               * @param {string=} action
               * @param {string=} sequenceName - name of sequence if part of sequence
               * @param {number=} level - what part of the sequence the command is
               * @returns void
               */
              function _bindSingle(combination, callback, action, sequenceName, level) {

                  // store a direct mapped reference for use with Mousetrap.trigger
                  self._directMap[combination + ':' + action] = callback;

                  // make sure multiple spaces in a row become a single space
                  combination = combination.replace(/\s+/g, ' ');

                  var sequence = combination.split(' ');
                  var info;

                  // if this pattern is a sequence of keys then run through this method
                  // to reprocess each pattern one key at a time
                  if (sequence.length > 1) {
                      _bindSequence(combination, sequence, callback, action);
                      return;
                  }

                  info = _getKeyInfo(combination, action);

                  // make sure to initialize array if this is the first time
                  // a callback is added for this key
                  self._callbacks[info.key] = self._callbacks[info.key] || [];

                  // remove an existing match if there is one
                  _getMatches(info.key, info.modifiers, {type: info.action}, sequenceName, combination, level);

                  // add this call back to the array
                  // if it is a sequence put it at the beginning
                  // if not put it at the end
                  //
                  // this is important because the way these are processed expects
                  // the sequence ones to come first
                  self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
                      callback: callback,
                      modifiers: info.modifiers,
                      action: info.action,
                      seq: sequenceName,
                      level: level,
                      combo: combination
                  });
              }

              /**
               * binds multiple combinations to the same callback
               *
               * @param {Array} combinations
               * @param {Function} callback
               * @param {string|undefined} action
               * @returns void
               */
              self._bindMultiple = function(combinations, callback, action) {
                  for (var i = 0; i < combinations.length; ++i) {
                      _bindSingle(combinations[i], callback, action);
                  }
              };

              // start!
              _addEvent(targetElement, 'keypress', _handleKeyEvent);
              _addEvent(targetElement, 'keydown', _handleKeyEvent);
              _addEvent(targetElement, 'keyup', _handleKeyEvent);
          }

          /**
           * binds an event to mousetrap
           *
           * can be a single key, a combination of keys separated with +,
           * an array of keys, or a sequence of keys separated by spaces
           *
           * be sure to list the modifier keys first to make sure that the
           * correct key ends up getting bound (the last key in the pattern)
           *
           * @param {string|Array} keys
           * @param {Function} callback
           * @param {string=} action - 'keypress', 'keydown', or 'keyup'
           * @returns void
           */
          Mousetrap.prototype.bind = function(keys, callback, action) {
              var self = this;
              keys = keys instanceof Array ? keys : [keys];
              self._bindMultiple.call(self, keys, callback, action);
              return self;
          };

          /**
           * unbinds an event to mousetrap
           *
           * the unbinding sets the callback function of the specified key combo
           * to an empty function and deletes the corresponding key in the
           * _directMap dict.
           *
           * TODO: actually remove this from the _callbacks dictionary instead
           * of binding an empty function
           *
           * the keycombo+action has to be exactly the same as
           * it was defined in the bind method
           *
           * @param {string|Array} keys
           * @param {string} action
           * @returns void
           */
          Mousetrap.prototype.unbind = function(keys, action) {
              var self = this;
              return self.bind.call(self, keys, function() {}, action);
          };

          /**
           * triggers an event that has already been bound
           *
           * @param {string} keys
           * @param {string=} action
           * @returns void
           */
          Mousetrap.prototype.trigger = function(keys, action) {
              var self = this;
              if (self._directMap[keys + ':' + action]) {
                  self._directMap[keys + ':' + action]({}, keys);
              }
              return self;
          };

          /**
           * resets the library back to its initial state.  this is useful
           * if you want to clear out the current keyboard shortcuts and bind
           * new ones - for example if you switch to another page
           *
           * @returns void
           */
          Mousetrap.prototype.reset = function() {
              var self = this;
              self._callbacks = {};
              self._directMap = {};
              return self;
          };

          /**
           * should we stop this event before firing off callbacks
           *
           * @param {Event} e
           * @param {Element} element
           * @return {boolean}
           */
          Mousetrap.prototype.stopCallback = function(e, element) {
              var self = this;

              // if the element has the class "mousetrap" then no need to stop
              if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
                  return false;
              }

              if (_belongsTo(element, self.target)) {
                  return false;
              }

              // Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
              // not the initial event target in the shadow tree. Note that not all events cross the
              // shadow boundary.
              // For shadow trees with `mode: 'open'`, the initial event target is the first element in
              // the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
              // target cannot be obtained.
              if ('composedPath' in e && typeof e.composedPath === 'function') {
                  // For open shadow trees, update `element` so that the following check works.
                  var initialEventTarget = e.composedPath()[0];
                  if (initialEventTarget !== e.target) {
                      element = initialEventTarget;
                  }
              }

              // stop for input, select, and textarea
              return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
          };

          /**
           * exposes _handleKey publicly so it can be overwritten by extensions
           */
          Mousetrap.prototype.handleKey = function() {
              var self = this;
              return self._handleKey.apply(self, arguments);
          };

          /**
           * allow custom key mappings
           */
          Mousetrap.addKeycodes = function(object) {
              for (var key in object) {
                  if (object.hasOwnProperty(key)) {
                      _MAP[key] = object[key];
                  }
              }
              _REVERSE_MAP = null;
          };

          /**
           * Init the global mousetrap functions
           *
           * This method is needed to allow the global mousetrap functions to work
           * now that mousetrap is a constructor function.
           */
          Mousetrap.init = function() {
              var documentMousetrap = Mousetrap(document);
              for (var method in documentMousetrap) {
                  if (method.charAt(0) !== '_') {
                      Mousetrap[method] = (function(method) {
                          return function() {
                              return documentMousetrap[method].apply(documentMousetrap, arguments);
                          };
                      } (method));
                  }
              }
          };

          Mousetrap.init();

          // expose mousetrap to the global object
          window.Mousetrap = Mousetrap;

          // expose as a common js module
          if (module.exports) {
              module.exports = Mousetrap;
          }

          // expose mousetrap as an AMD module
          if (typeof undefined$1 === 'function' && undefined$1.amd) {
              undefined$1(function() {
                  return Mousetrap;
              });
          }
      }) (typeof window !== 'undefined' ? window : null, typeof  window !== 'undefined' ? document : null);
      });

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

      /*
       * anime.js v3.2.1
       * (c) 2020 Julian Garnier
       * Released under the MIT license
       * animejs.com
       */

      // Defaults

      var defaultInstanceSettings = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: 'normal',
        autoplay: true,
        timelineOffset: 0
      };

      var defaultTweenSettings = {
        duration: 1000,
        delay: 0,
        endDelay: 0,
        easing: 'easeOutElastic(1, .5)',
        round: 0
      };

      var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

      // Caching

      var cache = {
        CSS: {},
        springs: {}
      };

      // Utils

      function minMax(val, min, max) {
        return Math.min(Math.max(val, min), max);
      }

      function stringContains(str, text) {
        return str.indexOf(text) > -1;
      }

      function applyArguments(func, args) {
        return func.apply(null, args);
      }

      var is$1 = {
        arr: function (a) { return Array.isArray(a); },
        obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
        pth: function (a) { return is$1.obj(a) && a.hasOwnProperty('totalLength'); },
        svg: function (a) { return a instanceof SVGElement; },
        inp: function (a) { return a instanceof HTMLInputElement; },
        dom: function (a) { return a.nodeType || is$1.svg(a); },
        str: function (a) { return typeof a === 'string'; },
        fnc: function (a) { return typeof a === 'function'; },
        und: function (a) { return typeof a === 'undefined'; },
        nil: function (a) { return is$1.und(a) || a === null; },
        hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
        rgb: function (a) { return /^rgb/.test(a); },
        hsl: function (a) { return /^hsl/.test(a); },
        col: function (a) { return (is$1.hex(a) || is$1.rgb(a) || is$1.hsl(a)); },
        key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
      };

      // Easings

      function parseEasingParameters(string) {
        var match = /\(([^)]+)\)/.exec(string);
        return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
      }

      // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

      function spring(string, duration) {

        var params = parseEasingParameters(string);
        var mass = minMax(is$1.und(params[0]) ? 1 : params[0], .1, 100);
        var stiffness = minMax(is$1.und(params[1]) ? 100 : params[1], .1, 100);
        var damping = minMax(is$1.und(params[2]) ? 10 : params[2], .1, 100);
        var velocity =  minMax(is$1.und(params[3]) ? 0 : params[3], .1, 100);
        var w0 = Math.sqrt(stiffness / mass);
        var zeta = damping / (2 * Math.sqrt(stiffness * mass));
        var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
        var a = 1;
        var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

        function solver(t) {
          var progress = duration ? (duration * t) / 1000 : t;
          if (zeta < 1) {
            progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
          } else {
            progress = (a + b * progress) * Math.exp(-progress * w0);
          }
          if (t === 0 || t === 1) { return t; }
          return 1 - progress;
        }

        function getDuration() {
          var cached = cache.springs[string];
          if (cached) { return cached; }
          var frame = 1/6;
          var elapsed = 0;
          var rest = 0;
          while(true) {
            elapsed += frame;
            if (solver(elapsed) === 1) {
              rest++;
              if (rest >= 16) { break; }
            } else {
              rest = 0;
            }
          }
          var duration = elapsed * frame * 1000;
          cache.springs[string] = duration;
          return duration;
        }

        return duration ? solver : getDuration;

      }

      // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

      function steps(steps) {
        if ( steps === void 0 ) steps = 10;

        return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
      }

      // BezierEasing https://github.com/gre/bezier-easing

      var bezier = (function () {

        var kSplineTableSize = 11;
        var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

        function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
        function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
        function C(aA1)      { return 3.0 * aA1 }

        function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
        function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

        function binarySubdivide(aX, aA, aB, mX1, mX2) {
          var currentX, currentT, i = 0;
          do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
          } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
          return currentT;
        }

        function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
          for (var i = 0; i < 4; ++i) {
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) { return aGuessT; }
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
          }
          return aGuessT;
        }

        function bezier(mX1, mY1, mX2, mY2) {

          if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
          var sampleValues = new Float32Array(kSplineTableSize);

          if (mX1 !== mY1 || mX2 !== mY2) {
            for (var i = 0; i < kSplineTableSize; ++i) {
              sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
            }
          }

          function getTForX(aX) {

            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;

            for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
              intervalStart += kSampleStepSize;
            }

            --currentSample;

            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);

            if (initialSlope >= 0.001) {
              return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            } else if (initialSlope === 0.0) {
              return guessForT;
            } else {
              return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
            }

          }

          return function (x) {
            if (mX1 === mY1 && mX2 === mY2) { return x; }
            if (x === 0 || x === 1) { return x; }
            return calcBezier(getTForX(x), mY1, mY2);
          }

        }

        return bezier;

      })();

      var penner = (function () {

        // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

        var eases = { linear: function () { return function (t) { return t; }; } };

        var functionEasings = {
          Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
          Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
          Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
          Bounce: function () { return function (t) {
            var pow2, b = 4;
            while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
            return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
          }; },
          Elastic: function (amplitude, period) {
            if ( amplitude === void 0 ) amplitude = 1;
            if ( period === void 0 ) period = .5;

            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, .1, 2);
            return function (t) {
              return (t === 0 || t === 1) ? t : 
                -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
            }
          }
        };

        var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];

        baseEasings.forEach(function (name, i) {
          functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
        });

        Object.keys(functionEasings).forEach(function (name) {
          var easeIn = functionEasings[name];
          eases['easeIn' + name] = easeIn;
          eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
          eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
            1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
          eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
            (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
        });

        return eases;

      })();

      function parseEasings(easing, duration) {
        if (is$1.fnc(easing)) { return easing; }
        var name = easing.split('(')[0];
        var ease = penner[name];
        var args = parseEasingParameters(easing);
        switch (name) {
          case 'spring' : return spring(easing, duration);
          case 'cubicBezier' : return applyArguments(bezier, args);
          case 'steps' : return applyArguments(steps, args);
          default : return applyArguments(ease, args);
        }
      }

      // Strings

      function selectString(str) {
        try {
          var nodes = document.querySelectorAll(str);
          return nodes;
        } catch(e) {
          return;
        }
      }

      // Arrays

      function filterArray(arr, callback) {
        var len = arr.length;
        var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
        var result = [];
        for (var i = 0; i < len; i++) {
          if (i in arr) {
            var val = arr[i];
            if (callback.call(thisArg, val, i, arr)) {
              result.push(val);
            }
          }
        }
        return result;
      }

      function flattenArray(arr) {
        return arr.reduce(function (a, b) { return a.concat(is$1.arr(b) ? flattenArray(b) : b); }, []);
      }

      function toArray(o) {
        if (is$1.arr(o)) { return o; }
        if (is$1.str(o)) { o = selectString(o) || o; }
        if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
        return [o];
      }

      function arrayContains(arr, val) {
        return arr.some(function (a) { return a === val; });
      }

      // Objects

      function cloneObject(o) {
        var clone = {};
        for (var p in o) { clone[p] = o[p]; }
        return clone;
      }

      function replaceObjectProps(o1, o2) {
        var o = cloneObject(o1);
        for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
        return o;
      }

      function mergeObjects(o1, o2) {
        var o = cloneObject(o1);
        for (var p in o2) { o[p] = is$1.und(o1[p]) ? o2[p] : o1[p]; }
        return o;
      }

      // Colors

      function rgbToRgba(rgbValue) {
        var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
        return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
      }

      function hexToRgba(hexValue) {
        var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
        var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        var r = parseInt(rgb[1], 16);
        var g = parseInt(rgb[2], 16);
        var b = parseInt(rgb[3], 16);
        return ("rgba(" + r + "," + g + "," + b + ",1)");
      }

      function hslToRgba(hslValue) {
        var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
        var h = parseInt(hsl[1], 10) / 360;
        var s = parseInt(hsl[2], 10) / 100;
        var l = parseInt(hsl[3], 10) / 100;
        var a = hsl[4] || 1;
        function hue2rgb(p, q, t) {
          if (t < 0) { t += 1; }
          if (t > 1) { t -= 1; }
          if (t < 1/6) { return p + (q - p) * 6 * t; }
          if (t < 1/2) { return q; }
          if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
          return p;
        }
        var r, g, b;
        if (s == 0) {
          r = g = b = l;
        } else {
          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
        }
        return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
      }

      function colorToRgb(val) {
        if (is$1.rgb(val)) { return rgbToRgba(val); }
        if (is$1.hex(val)) { return hexToRgba(val); }
        if (is$1.hsl(val)) { return hslToRgba(val); }
      }

      // Units

      function getUnit(val) {
        var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
        if (split) { return split[1]; }
      }

      function getTransformUnit(propName) {
        if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
        if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
      }

      // Values

      function getFunctionValue(val, animatable) {
        if (!is$1.fnc(val)) { return val; }
        return val(animatable.target, animatable.id, animatable.total);
      }

      function getAttribute(el, prop) {
        return el.getAttribute(prop);
      }

      function convertPxToUnit(el, value, unit) {
        var valueUnit = getUnit(value);
        if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
        var cached = cache.CSS[value + unit];
        if (!is$1.und(cached)) { return cached; }
        var baseline = 100;
        var tempEl = document.createElement(el.tagName);
        var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
        parentEl.appendChild(tempEl);
        tempEl.style.position = 'absolute';
        tempEl.style.width = baseline + unit;
        var factor = baseline / tempEl.offsetWidth;
        parentEl.removeChild(tempEl);
        var convertedUnit = factor * parseFloat(value);
        cache.CSS[value + unit] = convertedUnit;
        return convertedUnit;
      }

      function getCSSValue(el, prop, unit) {
        if (prop in el.style) {
          var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
          var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
          return unit ? convertPxToUnit(el, value, unit) : value;
        }
      }

      function getAnimationType(el, prop) {
        if (is$1.dom(el) && !is$1.inp(el) && (!is$1.nil(getAttribute(el, prop)) || (is$1.svg(el) && el[prop]))) { return 'attribute'; }
        if (is$1.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
        if (is$1.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
        if (el[prop] != null) { return 'object'; }
      }

      function getElementTransforms(el) {
        if (!is$1.dom(el)) { return; }
        var str = el.style.transform || '';
        var reg  = /(\w+)\(([^)]*)\)/g;
        var transforms = new Map();
        var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
        return transforms;
      }

      function getTransformValue(el, propName, animatable, unit) {
        var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
        var value = getElementTransforms(el).get(propName) || defaultVal;
        if (animatable) {
          animatable.transforms.list.set(propName, value);
          animatable.transforms['last'] = propName;
        }
        return unit ? convertPxToUnit(el, value, unit) : value;
      }

      function getOriginalTargetValue(target, propName, unit, animatable) {
        switch (getAnimationType(target, propName)) {
          case 'transform': return getTransformValue(target, propName, animatable, unit);
          case 'css': return getCSSValue(target, propName, unit);
          case 'attribute': return getAttribute(target, propName);
          default: return target[propName] || 0;
        }
      }

      function getRelativeValue(to, from) {
        var operator = /^(\*=|\+=|-=)/.exec(to);
        if (!operator) { return to; }
        var u = getUnit(to) || 0;
        var x = parseFloat(from);
        var y = parseFloat(to.replace(operator[0], ''));
        switch (operator[0][0]) {
          case '+': return x + y + u;
          case '-': return x - y + u;
          case '*': return x * y + u;
        }
      }

      function validateValue(val, unit) {
        if (is$1.col(val)) { return colorToRgb(val); }
        if (/\s/g.test(val)) { return val; }
        var originalUnit = getUnit(val);
        var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
        if (unit) { return unitLess + unit; }
        return unitLess;
      }

      // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
      // adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

      function getDistance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
      }

      function getCircleLength(el) {
        return Math.PI * 2 * getAttribute(el, 'r');
      }

      function getRectLength(el) {
        return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
      }

      function getLineLength(el) {
        return getDistance(
          {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
          {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
        );
      }

      function getPolylineLength(el) {
        var points = el.points;
        var totalLength = 0;
        var previousPos;
        for (var i = 0 ; i < points.numberOfItems; i++) {
          var currentPos = points.getItem(i);
          if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
          previousPos = currentPos;
        }
        return totalLength;
      }

      function getPolygonLength(el) {
        var points = el.points;
        return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
      }

      // Path animation

      function getTotalLength(el) {
        if (el.getTotalLength) { return el.getTotalLength(); }
        switch(el.tagName.toLowerCase()) {
          case 'circle': return getCircleLength(el);
          case 'rect': return getRectLength(el);
          case 'line': return getLineLength(el);
          case 'polyline': return getPolylineLength(el);
          case 'polygon': return getPolygonLength(el);
        }
      }

      function setDashoffset(el) {
        var pathLength = getTotalLength(el);
        el.setAttribute('stroke-dasharray', pathLength);
        return pathLength;
      }

      // Motion path

      function getParentSvgEl(el) {
        var parentEl = el.parentNode;
        while (is$1.svg(parentEl)) {
          if (!is$1.svg(parentEl.parentNode)) { break; }
          parentEl = parentEl.parentNode;
        }
        return parentEl;
      }

      function getParentSvg(pathEl, svgData) {
        var svg = svgData || {};
        var parentSvgEl = svg.el || getParentSvgEl(pathEl);
        var rect = parentSvgEl.getBoundingClientRect();
        var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
        var width = rect.width;
        var height = rect.height;
        var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
        return {
          el: parentSvgEl,
          viewBox: viewBox,
          x: viewBox[0] / 1,
          y: viewBox[1] / 1,
          w: width,
          h: height,
          vW: viewBox[2],
          vH: viewBox[3]
        }
      }

      function getPath(path, percent) {
        var pathEl = is$1.str(path) ? selectString(path)[0] : path;
        var p = percent || 100;
        return function(property) {
          return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
          }
        }
      }

      function getPathProgress(path, progress, isPathTargetInsideSVG) {
        function point(offset) {
          if ( offset === void 0 ) offset = 0;

          var l = progress + offset >= 1 ? progress + offset : 0;
          return path.el.getPointAtLength(l);
        }
        var svg = getParentSvg(path.el, path.svg);
        var p = point();
        var p0 = point(-1);
        var p1 = point(+1);
        var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
        var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
        switch (path.property) {
          case 'x': return (p.x - svg.x) * scaleX;
          case 'y': return (p.y - svg.y) * scaleY;
          case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
        }
      }

      // Decompose value

      function decomposeValue(val, unit) {
        // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
        // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
        var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
        var value = validateValue((is$1.pth(val) ? val.totalLength : val), unit) + '';
        return {
          original: value,
          numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
          strings: (is$1.str(val) || unit) ? value.split(rgx) : []
        }
      }

      // Animatables

      function parseTargets(targets) {
        var targetsArray = targets ? (flattenArray(is$1.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
        return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
      }

      function getAnimatables(targets) {
        var parsed = parseTargets(targets);
        return parsed.map(function (t, i) {
          return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
        });
      }

      // Properties

      function normalizePropertyTweens(prop, tweenSettings) {
        var settings = cloneObject(tweenSettings);
        // Override duration if easing is a spring
        if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
        if (is$1.arr(prop)) {
          var l = prop.length;
          var isFromTo = (l === 2 && !is$1.obj(prop[0]));
          if (!isFromTo) {
            // Duration divided by the number of tweens
            if (!is$1.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
          } else {
            // Transform [from, to] values shorthand to a valid tween value
            prop = {value: prop};
          }
        }
        var propArray = is$1.arr(prop) ? prop : [prop];
        return propArray.map(function (v, i) {
          var obj = (is$1.obj(v) && !is$1.pth(v)) ? v : {value: v};
          // Default delay value should only be applied to the first tween
          if (is$1.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
          // Default endDelay value should only be applied to the last tween
          if (is$1.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
          return obj;
        }).map(function (k) { return mergeObjects(k, settings); });
      }


      function flattenKeyframes(keyframes) {
        var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is$1.key(p); })
        .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
        var properties = {};
        var loop = function ( i ) {
          var propName = propertyNames[i];
          properties[propName] = keyframes.map(function (key) {
            var newKey = {};
            for (var p in key) {
              if (is$1.key(p)) {
                if (p == propName) { newKey.value = key[p]; }
              } else {
                newKey[p] = key[p];
              }
            }
            return newKey;
          });
        };

        for (var i = 0; i < propertyNames.length; i++) loop( i );
        return properties;
      }

      function getProperties(tweenSettings, params) {
        var properties = [];
        var keyframes = params.keyframes;
        if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
        for (var p in params) {
          if (is$1.key(p)) {
            properties.push({
              name: p,
              tweens: normalizePropertyTweens(params[p], tweenSettings)
            });
          }
        }
        return properties;
      }

      // Tweens

      function normalizeTweenValues(tween, animatable) {
        var t = {};
        for (var p in tween) {
          var value = getFunctionValue(tween[p], animatable);
          if (is$1.arr(value)) {
            value = value.map(function (v) { return getFunctionValue(v, animatable); });
            if (value.length === 1) { value = value[0]; }
          }
          t[p] = value;
        }
        t.duration = parseFloat(t.duration);
        t.delay = parseFloat(t.delay);
        return t;
      }

      function normalizeTweens(prop, animatable) {
        var previousTween;
        return prop.tweens.map(function (t) {
          var tween = normalizeTweenValues(t, animatable);
          var tweenValue = tween.value;
          var to = is$1.arr(tweenValue) ? tweenValue[1] : tweenValue;
          var toUnit = getUnit(to);
          var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
          var previousValue = previousTween ? previousTween.to.original : originalValue;
          var from = is$1.arr(tweenValue) ? tweenValue[0] : previousValue;
          var fromUnit = getUnit(from) || getUnit(originalValue);
          var unit = toUnit || fromUnit;
          if (is$1.und(to)) { to = previousValue; }
          tween.from = decomposeValue(from, unit);
          tween.to = decomposeValue(getRelativeValue(to, from), unit);
          tween.start = previousTween ? previousTween.end : 0;
          tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
          tween.easing = parseEasings(tween.easing, tween.duration);
          tween.isPath = is$1.pth(tweenValue);
          tween.isPathTargetInsideSVG = tween.isPath && is$1.svg(animatable.target);
          tween.isColor = is$1.col(tween.from.original);
          if (tween.isColor) { tween.round = 1; }
          previousTween = tween;
          return tween;
        });
      }

      // Tween progress

      var setProgressValue = {
        css: function (t, p, v) { return t.style[p] = v; },
        attribute: function (t, p, v) { return t.setAttribute(p, v); },
        object: function (t, p, v) { return t[p] = v; },
        transform: function (t, p, v, transforms, manual) {
          transforms.list.set(p, v);
          if (p === transforms.last || manual) {
            var str = '';
            transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
            t.style.transform = str;
          }
        }
      };

      // Set Value helper

      function setTargetsValue(targets, properties) {
        var animatables = getAnimatables(targets);
        animatables.forEach(function (animatable) {
          for (var property in properties) {
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
          }
        });
      }

      // Animations

      function createAnimation(animatable, prop) {
        var animType = getAnimationType(animatable.target, prop.name);
        if (animType) {
          var tweens = normalizeTweens(prop, animatable);
          var lastTween = tweens[tweens.length - 1];
          return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
          }
        }
      }

      function getAnimations(animatables, properties) {
        return filterArray(flattenArray(animatables.map(function (animatable) {
          return properties.map(function (prop) {
            return createAnimation(animatable, prop);
          });
        })), function (a) { return !is$1.und(a); });
      }

      // Create Instance

      function getInstanceTimings(animations, tweenSettings) {
        var animLength = animations.length;
        var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
        var timings = {};
        timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
        timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
        timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
        return timings;
      }

      var instanceID = 0;

      function createNewInstance(params) {
        var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
        var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
        var properties = getProperties(tweenSettings, params);
        var animatables = getAnimatables(params.targets);
        var animations = getAnimations(animatables, properties);
        var timings = getInstanceTimings(animations, tweenSettings);
        var id = instanceID;
        instanceID++;
        return mergeObjects(instanceSettings, {
          id: id,
          children: [],
          animatables: animatables,
          animations: animations,
          duration: timings.duration,
          delay: timings.delay,
          endDelay: timings.endDelay
        });
      }

      // Core

      var activeInstances = [];

      var engine = (function () {
        var raf;

        function play() {
          if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
            raf = requestAnimationFrame(step);
          }
        }
        function step(t) {
          // memo on algorithm issue:
          // dangerous iteration over mutable `activeInstances`
          // (that collection may be updated from within callbacks of `tick`-ed animation instances)
          var activeInstancesLength = activeInstances.length;
          var i = 0;
          while (i < activeInstancesLength) {
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
              activeInstance.tick(t);
              i++;
            } else {
              activeInstances.splice(i, 1);
              activeInstancesLength--;
            }
          }
          raf = i > 0 ? requestAnimationFrame(step) : undefined;
        }

        function handleVisibilityChange() {
          if (!anime.suspendWhenDocumentHidden) { return; }

          if (isDocumentHidden()) {
            // suspend ticks
            raf = cancelAnimationFrame(raf);
          } else { // is back to active tab
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(
              function (instance) { return instance ._onDocumentVisibility(); }
            );
            engine();
          }
        }
        if (typeof document !== 'undefined') {
          document.addEventListener('visibilitychange', handleVisibilityChange);
        }

        return play;
      })();

      function isDocumentHidden() {
        return !!document && document.hidden;
      }

      // Public Instance

      function anime(params) {
        if ( params === void 0 ) params = {};


        var startTime = 0, lastTime = 0, now = 0;
        var children, childrenLength = 0;
        var resolve = null;

        function makePromise(instance) {
          var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
          instance.finished = promise;
          return promise;
        }

        var instance = createNewInstance(params);
        makePromise(instance);

        function toggleInstanceDirection() {
          var direction = instance.direction;
          if (direction !== 'alternate') {
            instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
          }
          instance.reversed = !instance.reversed;
          children.forEach(function (child) { return child.reversed = instance.reversed; });
        }

        function adjustTime(time) {
          return instance.reversed ? instance.duration - time : time;
        }

        function resetTime() {
          startTime = 0;
          lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
        }

        function seekChild(time, child) {
          if (child) { child.seek(time - child.timelineOffset); }
        }

        function syncInstanceChildren(time) {
          if (!instance.reversePlayback) {
            for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
          } else {
            for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
          }
        }

        function setAnimationsProgress(insTime) {
          var i = 0;
          var animations = instance.animations;
          var animationsLength = animations.length;
          while (i < animationsLength) {
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = (void 0);
            for (var n = 0; n < toNumbersLength; n++) {
              var value = (void 0);
              var toNumber = tween.to.numbers[n];
              var fromNumber = tween.from.numbers[n] || 0;
              if (!tween.isPath) {
                value = fromNumber + (eased * (toNumber - fromNumber));
              } else {
                value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
              }
              if (round) {
                if (!(tween.isColor && n > 2)) {
                  value = Math.round(value * round) / round;
                }
              }
              numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) {
              progress = numbers[0];
            } else {
              progress = strings[0];
              for (var s = 0; s < stringsLength; s++) {
                strings[s];
                var b = strings[s + 1];
                var n$1 = numbers[s];
                if (!isNaN(n$1)) {
                  if (!b) {
                    progress += n$1 + ' ';
                  } else {
                    progress += n$1 + b;
                  }
                }
              }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
          }
        }

        function setCallback(cb) {
          if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
        }

        function countIteration() {
          if (instance.remaining && instance.remaining !== true) {
            instance.remaining--;
          }
        }

        function setInstanceProgress(engineTime) {
          var insDuration = instance.duration;
          var insDelay = instance.delay;
          var insEndDelay = insDuration - instance.endDelay;
          var insTime = adjustTime(engineTime);
          instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
          instance.reversePlayback = insTime < instance.currentTime;
          if (children) { syncInstanceChildren(insTime); }
          if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback('begin');
          }
          if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback('loopBegin');
          }
          if (insTime <= insDelay && instance.currentTime !== 0) {
            setAnimationsProgress(0);
          }
          if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
            setAnimationsProgress(insDuration);
          }
          if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
              instance.changeBegan = true;
              instance.changeCompleted = false;
              setCallback('changeBegin');
            }
            setCallback('change');
            setAnimationsProgress(insTime);
          } else {
            if (instance.changeBegan) {
              instance.changeCompleted = true;
              instance.changeBegan = false;
              setCallback('changeComplete');
            }
          }
          instance.currentTime = minMax(insTime, 0, insDuration);
          if (instance.began) { setCallback('update'); }
          if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
              instance.paused = true;
              if (!instance.completed) {
                instance.completed = true;
                setCallback('loopComplete');
                setCallback('complete');
                if (!instance.passThrough && 'Promise' in window) {
                  resolve();
                  makePromise(instance);
                }
              }
            } else {
              startTime = now;
              setCallback('loopComplete');
              instance.loopBegan = false;
              if (instance.direction === 'alternate') {
                toggleInstanceDirection();
              }
            }
          }
        }

        instance.reset = function() {
          var direction = instance.direction;
          instance.passThrough = false;
          instance.currentTime = 0;
          instance.progress = 0;
          instance.paused = true;
          instance.began = false;
          instance.loopBegan = false;
          instance.changeBegan = false;
          instance.completed = false;
          instance.changeCompleted = false;
          instance.reversePlayback = false;
          instance.reversed = direction === 'reverse';
          instance.remaining = instance.loop;
          children = instance.children;
          childrenLength = children.length;
          for (var i = childrenLength; i--;) { instance.children[i].reset(); }
          if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
          setAnimationsProgress(instance.reversed ? instance.duration : 0);
        };

        // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
        instance._onDocumentVisibility = resetTime;

        // Set Value helper

        instance.set = function(targets, properties) {
          setTargetsValue(targets, properties);
          return instance;
        };

        instance.tick = function(t) {
          now = t;
          if (!startTime) { startTime = now; }
          setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
        };

        instance.seek = function(time) {
          setInstanceProgress(adjustTime(time));
        };

        instance.pause = function() {
          instance.paused = true;
          resetTime();
        };

        instance.play = function() {
          if (!instance.paused) { return; }
          if (instance.completed) { instance.reset(); }
          instance.paused = false;
          activeInstances.push(instance);
          resetTime();
          engine();
        };

        instance.reverse = function() {
          toggleInstanceDirection();
          instance.completed = instance.reversed ? false : true;
          resetTime();
        };

        instance.restart = function() {
          instance.reset();
          instance.play();
        };

        instance.remove = function(targets) {
          var targetsArray = parseTargets(targets);
          removeTargetsFromInstance(targetsArray, instance);
        };

        instance.reset();

        if (instance.autoplay) { instance.play(); }

        return instance;

      }

      // Remove targets from animation

      function removeTargetsFromAnimations(targetsArray, animations) {
        for (var a = animations.length; a--;) {
          if (arrayContains(targetsArray, animations[a].animatable.target)) {
            animations.splice(a, 1);
          }
        }
      }

      function removeTargetsFromInstance(targetsArray, instance) {
        var animations = instance.animations;
        var children = instance.children;
        removeTargetsFromAnimations(targetsArray, animations);
        for (var c = children.length; c--;) {
          var child = children[c];
          var childAnimations = child.animations;
          removeTargetsFromAnimations(targetsArray, childAnimations);
          if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
        }
        if (!animations.length && !children.length) { instance.pause(); }
      }

      function removeTargetsFromActiveInstances(targets) {
        var targetsArray = parseTargets(targets);
        for (var i = activeInstances.length; i--;) {
          var instance = activeInstances[i];
          removeTargetsFromInstance(targetsArray, instance);
        }
      }

      // Stagger helpers

      function stagger(val, params) {
        if ( params === void 0 ) params = {};

        var direction = params.direction || 'normal';
        var easing = params.easing ? parseEasings(params.easing) : null;
        var grid = params.grid;
        var axis = params.axis;
        var fromIndex = params.from || 0;
        var fromFirst = fromIndex === 'first';
        var fromCenter = fromIndex === 'center';
        var fromLast = fromIndex === 'last';
        var isRange = is$1.arr(val);
        var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
        var val2 = isRange ? parseFloat(val[1]) : 0;
        var unit = getUnit(isRange ? val[1] : val) || 0;
        var start = params.start || 0 + (isRange ? val1 : 0);
        var values = [];
        var maxValue = 0;
        return function (el, i, t) {
          if (fromFirst) { fromIndex = 0; }
          if (fromCenter) { fromIndex = (t - 1) / 2; }
          if (fromLast) { fromIndex = t - 1; }
          if (!values.length) {
            for (var index = 0; index < t; index++) {
              if (!grid) {
                values.push(Math.abs(fromIndex - index));
              } else {
                var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
                var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
                var toX = index%grid[0];
                var toY = Math.floor(index/grid[0]);
                var distanceX = fromX - toX;
                var distanceY = fromY - toY;
                var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                if (axis === 'x') { value = -distanceX; }
                if (axis === 'y') { value = -distanceY; }
                values.push(value);
              }
              maxValue = Math.max.apply(Math, values);
            }
            if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
            if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
          }
          var spacing = isRange ? (val2 - val1) / maxValue : val1;
          return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
        }
      }

      // Timeline

      function timeline(params) {
        if ( params === void 0 ) params = {};

        var tl = anime(params);
        tl.duration = 0;
        tl.add = function(instanceParams, timelineOffset) {
          var tlIndex = activeInstances.indexOf(tl);
          var children = tl.children;
          if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
          function passThrough(ins) { ins.passThrough = true; }
          for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
          var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
          insParams.targets = insParams.targets || params.targets;
          var tlDuration = tl.duration;
          insParams.autoplay = false;
          insParams.direction = tl.direction;
          insParams.timelineOffset = is$1.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
          passThrough(tl);
          tl.seek(insParams.timelineOffset);
          var ins = anime(insParams);
          passThrough(ins);
          children.push(ins);
          var timings = getInstanceTimings(children, params);
          tl.delay = timings.delay;
          tl.endDelay = timings.endDelay;
          tl.duration = timings.duration;
          tl.seek(0);
          tl.reset();
          if (tl.autoplay) { tl.play(); }
          return tl;
        };
        return tl;
      }

      anime.version = '3.2.1';
      anime.speed = 1;
      // TODO:#review: naming, documentation
      anime.suspendWhenDocumentHidden = true;
      anime.running = activeInstances;
      anime.remove = removeTargetsFromActiveInstances;
      anime.get = getOriginalTargetValue;
      anime.set = setTargetsValue;
      anime.convertPx = convertPxToUnit;
      anime.path = getPath;
      anime.setDashoffset = setDashoffset;
      anime.stagger = stagger;
      anime.timeline = timeline;
      anime.easing = parseEasings;
      anime.penner = penner;
      anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

      function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t=null,n=["rerun the code 10 times"],r=null,i=!1){if(!j()&&!i)return null;console.error(`%c 🧯 pragma.js  %c \n\n      encountered a soft error 🔫 %c \n\n      \n${r?`Triggered by: [${r.key} ${r}]`:""}\n      \n${e} %c\n\n      \n${null!=t?`Potential ${t}: \n\t${n.join("\n\t")}`:""}\n      `,"font-size:15px","font-size: 12px;","color:whitesmoke","color:white");}function r(){if(!j())return null;console.log(...arguments);}function i(){if(!j())return null;console.log("%c 🌴 [pragma] \n\n      ","font-size:12px; color:#86D787;",...arguments,"\n");}class a{constructor(e){this.self=e,this.actions=new Map,this.delete=this.destroy;}addWithKey(e,t=null){return t=t||this.actions.size,this.actions.set(t,e),t}add(...e){let t=[];for(let n of e)t.push(this.addWithKey(n));return t.length>1?t:t[0]}forAction(e){for(let[t,n]of this.actions)e(t,n);}exec(...e){this.execAs(this.self,...e);}destroy(...e){e.forEach((e=>this.actions.delete(e)));}execAs(e,...t){this.forAction(((n,r)=>{let i=null;i="function"==typeof r.bind?r.bind(e)(...t):r(...t),"function"==typeof i&&i({key:n,action:r,replaceWith:e=>{},selfDestruct:()=>{this.destroy(n);}});}));}}function o(){return Math.random().toString(36).substring(3,6)+Math.random().toString(36).substring(5,8)}function s(){return l(8)}function l(e=7){return e<5?o():(o()+l(e-5)).substring(0,e)}function u(e){return l(e)}function c(e,t){for(let[n,r]of Object.entries(t))e[n]=r;return e}const h=e=>e.replace(/([-_]\w)/g,(e=>e[1].toUpperCase()));function d(e,t){let n=`${e}Chain`,r=`on${e.capitalize()}`;return t[n]=new a(t),t[r]=function(e,r){t[n].addWithKey(e,r);},{chainName:n,eventName:r}}function p(e,...t){for(let n of t)d(n,e);}function g(e,t){let n=d(e,t),r=`is${e.capitalize()}ed`;t[n.chainName].add((()=>{t[r]=!0;})),t[n.eventName]=function(e){if(t[r])return e(t);t[n.chainName].add(e);};}function m(e,...t){for(let n of t)g(n,e);}String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};const f=e=>e.toString().replace(/[^a-z0-9]/gi,"-").toLowerCase();globalThis.pragmaSpace||(globalThis.pragmaSpace={}),m(globalThis.pragmaSpace,"docLoad");const v=globalThis.pragmaSpace.onDocLoad;function b(){globalThis.pragmaSpace.isDocLoaded||(i("📰 document is loaded."),globalThis.pragmaSpace.docLoadChain.exec());}"complete"===document.readyState?b():(document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&b();})),document.addEventListener("turbolinks:load",(()=>{i("🚀 TURBOLINKS loaded"),b();})));var y=/[#.]/g;function w(e,t="div"){var n=e||"",r={tag:t},i=0;let a,o,s;for(;i<n.length;)y.lastIndex=i,s=y.exec(n),a=n.slice(i,s?s.index:n.length),a&&(o?"#"===o?r.id=a:r.class?r.class.push(a):r.class=[a]:r.tag=a,i+=a.length),s&&(o=s[0],i++);return r}function k(e,t,r){if(!Array.isArray(e))return n(`Could not ${r} class [${e}] -> [${t}]`);for(let n of e){let e=n.split(" ");e.length>1?k(e,t,r):t.classList[r](n);}}function C(e,t){k(e,t,"add");}function x(e,t){k(e,t,"remove");}function A(e,t){k(e,t,"toggle");}function D(e){e=e.trim();try{let t=document.querySelector(e);if(t)return t}catch{}let t=w(e),n=document.createElement(t.tag||"div");return t.id&&(n.id=t.id),t.class&&C(t.class,n),n}function $(e){return document.createRange().createContextualFragment(e)}function P(e){return e instanceof Element?e:"string"==typeof e?"<"===e[0]?$(e):D(e):n(`Could not find/create element from [${e}]`)}const E={html:(e,t)=>{t.innerHTML=e;},pcss:(e,t)=>{for(let[n,r]of H.cssToDict(e))t.style[h(n)]=r;}},H={cssToDict:e=>{e=e.replace(/\n/g,";").replace(/:/g," ");let t=new Map;for(let n of e.split(";")){if(n.replace(/\s/g,"").length<2)continue;n=n.trim().split(" ");let e=n[0];n.shift(),t.set(e.trim(),n.join(" ").trim());}let r=[];for(const[e,n]of t.entries())CSS.supports(e,n)||r.push(`${e.trim()}: ${n.trim()}`);return r.length>0&&n("CSS syntax error","typos",r),t},css:e=>{let t="";for(let[n,r]of H.cssToDict(e))t+=`${n}:${r};`;return t},html:e=>e};function j(){return globalThis.pragmaSpace.dev}globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.dev=globalThis.pragmaSpace.dev||"undefined"!=typeof process&&process.env&&"development"===process.env.NODE_ENV;var T=Object.freeze({__proto__:null,_deving:j,throwSoft:n,log:r,suc:i,whenDOM:v,parseQuery:w,addClassAryTo:C,removeClassAryFrom:x,toggleClassAryOf:A,selectOrCreateDOM:D,elementFrom:P,toHTMLAttr:f,fragmentFromString:$,fillSVG:function(e,t){N(e).findAll("path").forEach((e=>{const n=e.attr("fill");"none"!=n&&"transparent"!=n&&e.attr("fill",t);}));},generateRandomKey:u,objDiff:c,aryDiff:function(e,t){return e.filter((e=>t.indexOf(e)<0))},_extend:function(e,t){Object.setPrototypeOf(e,c(Object.getPrototypeOf(e),t));},overwrite:function(e,t,n){let r=e[t];e[`_${t}`]=r.bind(e),e[t]=n;},createEventChains:m,createChains:p,snake2camel:h,mimic:function(e,t,n){for(let r of n||Object.keys(t)){let n=Object.getOwnPropertyDescriptor(t,r);if(!n)break;Object.defineProperty(e,r,n);}},bench:function(e,t){console.time(t),e(),console.timeEnd(t);},addStyles:function(e,t="injected-pragma-style"){N(`style#${t}-${o()}`,e).appendTo("head");},redirectTo:function(e,t=!1){var n;null!==(n=history)&&void 0!==n&&n.pushState({},document.title),R`<a href="${e}" ${t?'target="_blank"':""}</a>`.click();},rk:l,rk5:o,rk8:s,parse:H,apply:E,createTemplate:e=>(new V).run((function(){p(this,"config"),this.config=function(e){return this.configChain.exec(e),this},this.onConfig(((e={})=>{["events","chains","exports","persistentExports"].forEach((t=>{e[t]&&(this[`_${t}`]=e[t],delete e[t]);})),this._events&&m(this,...this._events),this._chains&&p(this,...this._chains);for(let[t,n]of Object.entries(e))this[t]=n,this.export(t);this._exports&&this.export(...this._exports);})),this.export("exports","config","exportChain","configChain","onConfig");}),(function(){"object"==typeof e&&this.config(e);}))});function I(e){return null==e||null==e?n(`Could not find a DOM element for ${e}`):e.element?I(e.element):P(e)}function N(e,t){let r=I(e);return r?(r.constructor===DocumentFragment&&(i=r,(a=document.createElement("template")).appendChild(i.cloneNode(!0)),r=a.firstChild),r instanceof Element&&(r.init(),r._render()),"string"==typeof t&&r.html(t),r):n(`${e} could not be found/created`);var i,a;}const F={init:function(){this.isPragmaElement=!0,m(this,"docLoad","render"),v((()=>this.docLoadChain.exec(this)));},_render:function(){this.renderChain.exec(this);},appendTo:function(e){return this.onDocLoad((()=>{this._parentElement=I(e),this._parentElement.appendChild(this),this._render();})),this},prependTo:function(e){return this.onDocLoad((()=>{this._parentElement=I(e),this._parentElement.prepend(this),this._render();})),this},append:function(...e){return this.onRender((()=>{for(let t of e){let e=I(t);this.appendChild(e);}})),this},destroy:function(){this.onRender((()=>{this.parentElement&&this.parentElement.removeChild(this);}));},css:function(e){return this.onRender((()=>{E.pcss(e,this);})),this},setText:function(e){return e?(this.onRender((()=>{this.textContent=e;})),this):this.text},html:function(e){return null==e?this.innerHTML:(this.onRender((()=>{E.html(e,this);})),this)},setId:function(e){return this.id=e,this},setData:function(e){for(let[t,n]of Object.entries(e))this.dataset[t]=n;return this},getData:function(e){return this.dataset[e]},addClass:function(...e){return C(e,this),this},removeClass:function(...e){return x(e,this),this},toggleClass:function(...e){return A(e,this),this},listenTo:function(...e){return this.onRender((()=>{this.addEventListener(...e);})),this},clone:function(e=!0){return this.cloneNode(e)},attr:function(e,t=null){if("string"==typeof e){if(null===t)return this.getAttribute(e);const n=e;(e={})[n]=t;}for(let[t,n]of Object.entries(e))this.setAttribute(t,n);return this},find:function(){return N(this.query(...arguments))},define:function(e){this.setData(e);for(let[t,n]of Object.entries(e))this[t]=this.id?`#${this.id}>${n}`:n;return this},findAll:function(e){return Array.from(this.queryAll(e)).map((e=>N(e)))},query:function(){return this.querySelector(...arguments)},queryAll:function(e){return this.querySelectorAll(e)},hide:function(){return this.style.display="none",this},show:function(){return this.style.display="",this},deepQueryAll:function(e){let t=Array.from(this.queryAll(e));for(let n of this.children)t=t.concat(n.deepQueryAll(e));return t},deepFindAll:function(e){return this.deepQueryAll(e).map((e=>N(e)))},rect:function(){return "function"==typeof this.getBoundingClientRect?this.getBoundingClientRect():{}},offset:function(e){e&&["width","height","left","right","top","bottom"].forEach((t=>{t in e&&(this.style[t]=e[t]+"px");}));var t=this.rect();return {top:t.top+window.scrollY,left:t.left+window.scrollX}},x:function(e){return this.left+this.width/2-e/2}},B={top:function(){return this.offset().top},left:function(){return this.offset().left},width:function(){return this.rect().width},height:function(){return this.rect().height},text:function(){return this.textContent},classArray:function(){return Array.from(this.classList)},childrenArray:function(){return Array.from(this.children)}};for(let[e,t]of Object.entries(F))Element.prototype[e]=t;for(let[e,t]of Object.entries(B))Object.defineProperty(Element.prototype,e,{get:t,configurable:!0});class L{constructor(e){this._childMap=new Map,this.key="string"==typeof e?e:s(),this.containsKey=this.childMap.has;}set childMap(e){for(let[t,n]of e)n instanceof L&&this.add(n);}get childMap(){return this._childMap}get kidsum(){return this.childMap.size}get hasKids(){return this.kidsum>0}get shape(){return this.shapePrefix()}get master(){return null==this.parent||null==this.parent.parent?this.parent:this.parent.master}get children(){return Array.from(this.childMap.values())}get depthKey(){return this.parent?this.parent.depthKey+"<~<"+this.key:this.key}get allChildren(){if(!this.hasKids)return null;let e=this.children;for(let t of e){let n=t.allChildren;n&&(e=e.concat(n));}return e}get(e){return this.childMap.get(e)}find(e){if(this.childMap.has(e))return this.childMap.get(e);for(let t of this.childMap.values()){let n;try{n=t.find(e);}catch{}if(n)return n}}adopt(...e){for(let t of e)this.add(t);return this}add(e,t=!1){return e?!t&&this.childMap.has(e.key)?(e.key=`${e.key}<${o()}`,this.add(e)):(e.parent=this,void this.childMap.set(e.key,e)):n(`Could not add [${e}] to [${this.id}]`)}delete(e){return this.remove(e)}remove(e){this.childMap.get(e)&&this.childMap.delete(e);}shapePrefix(e=""){let t=`${e}| ${this.type} - ${this.key} \n`;if(this.hasKids){e+="| ";for(let n of this.children)t+=n.shapePrefix(e);}return t}}const O={parent:(e,t)=>{e.parent=t;},value:(e,t)=>{e.value=t;},key:(e,t)=>{e.key=t;},class:(e,t)=>{e._class=t;},element:(e,t)=>{if(!(t instanceof Element))return n(`Could not add ${t} as the element of [${e}]`);e.element=t;},children:(e,t)=>{if(t.constructor==Array)return e.buildAry(t);e.build(t);},childTemplate:(e,t)=>{}};function z(e,t){return {val:e,set:t}}function M(e,t){return e=t.min?Math.max(t.min,e):e,t.max?Math.min(t.max,e):e}function _(e,t){return function(e){return e&&null!=e.min&&null!=e.max}(t)?(null==e&&(e=t.min),e=(e=e>t.max?t.min:e)<t.min?t.max:e):n(`Could not loop value, since range (${JSON.stringify(t)}) is unbounded`)}class V extends L{constructor(e,t){super(),m(this,"export"),this.actionChain=new a,this._events=new Map,"object"==typeof e?function(e,t){let n=new Map;for(let[r,i]of Object.entries(e))O.hasOwnProperty(r)?O[r](t,i):n.set(r,i);t.element&&t.element.whenInDOM((e=>{for(let[r,i]of n)if(r=r.toLowerCase(),r.includes("on")){let n=r.split("on")[1].trim();e.listenTo(n,(()=>{t.action(i);}));}}));}(e,this):this.key=e,this.element||this.as(),this.init(...arguments);}init(){return this}listenTo(e,t){return this.element.listenTo(e,t.bind(this)),this}_createEvent(e){let t=new a(this);return this._events.set(e,t),t}createEvent(e,...t){return this._createEvent(e),t.length>0&&this.on(e,t),this}createEvents(...e){return e.forEach((e=>this._createEvent(e))),this}_getOrCreateEvent(e){return this._events.get(e)||this._createEvent(e)}_addToEventChain(e,...t){let n=this._getOrCreateEvent(e);if(n){let r=n.add(...t);return this._events.set(e,n),r}return null}triggerEvent(e,...t){return this._getOrCreateEvent(e).execAs(this,...t),this}triggerEvents(e,...t){return e.forEach((e=>this.triggerEvent(e,...t))),this}_on(e,...t){return this._addToEventChain(e,...t)}on(){return this._on(...arguments),this}_onNext(e,t){this._on(e,(function(){return t(...arguments),e=>{e.selfDestruct();}}));}onNext(){return this._onNext(...arguments),this}createWires(...e){return e.forEach((e=>this.createWire(e))),this}createWire(e,t){let n={change:`${e}Change`,set:`${e}Set`};return this.createEvents(n.change,n.set),Object.defineProperty(this,e,{set:t=>{let r=function(e,t,n){if(n)return z(_(e,n),!0);if(t){let n=M(e,t);return z(n,n===e)}return z(e,!0)}(t,this[`_${e}Range`],this[`_${e}Loop`]);const i=this[`_${e}`];r.set&&r.val!==i&&(this[`_${e}`]=r.val,this.triggerEvent(n.change,r.val,i)),this.triggerEvent(n.set,t,i);},get:()=>this[`_${e}`]}),this[`set${e.capitalize()}`]=t=>(this[`${e}`]=t,this),this[`set${e.capitalize()}Silently`]=t=>(this[`_${e}`]=t,this),this[`set${e.capitalize()}Loop`]=(t,n)=>(this[`_${e}Loop`]={min:t,max:n},this),this[`set${e.capitalize()}Range`]=(t,n)=>(this[`_${e}Range`]={min:t,max:n},this),void 0!==t&&(this[`_${e}`]=t),this}get _e(){return this.element}setElement(e,t=!0){return this.elementDOM=e,t&&this.element.id&&(this.id=this.element.id),this}get element(){return this.elementDOM}set element(e){this.setElement(e);}setRange(e=null,t=null){return this.range=this.range||{},this.range.min=null===e?this.range.min:e,this.range.max=null===t?this.range.max:t,this}breakLoop(){return this._loopVal=!1,this}setLoop(e,t){return this.setRange(e,t),this._loopVal=!0,this}get dv(){return this.v-this._lv}get value(){return this.v}setValue(e){return this.value=e,this}set value(e){let t=function(e,t,n){if(!t)return z(e,!0);if(n)return z(_(e,t),!0);let r=M(e,t);return z(r,r==e)}(e,this.range,this._loopVal);t.set&&(this._lv=this.v,this.v=t.val,this.exec());}exec(){return this.actionChain.execAs(this,...arguments),this}setKey(e){return this.key=e,this}set key(e){this._KEY=null==e?u():e;}get key(){return this._KEY}set id(e){this.element&&(this.element.id=this.id);}get id(){return f(this.key)}buildAry(e){for(let t of e)this.add(new V(t,this));return this}build(...e){return this.buildAry(e)}as(e=null,t){return e=e||`div#${this.id}.pragma`,this.setElement(N(e,t),!1),this}asClone(e,t){return this.as(N(e).clone(),t),this}addExport(e){this.exports=this.exports||new Set,this.exports.add(e);}export(...e){for(let t of e)this.addExport(t);}import(...e){let t=new a;for(let n of e)"function"==typeof n&&(n=n()),n.exports&&T.mimic(this,n,n.exports),n.exportChain&&t.add((e=>{n.exportChain.exec(this);}));return t.exec(),this}from(e){return e.exports&&T.mimic(this,e,e.exports),e.exportChain&&e.exportChain.exec(this),this}wireTo(e){let t=this;return e.do((function(){t.value=this.value;})),this}do(){return this.actionChain.add(...arguments),this}extend(e,t){return T.overwrite(this,e,t),this}define({...e}){for(let[t,n]of Object.entries(e)){if(!t)return console.error("could not define, no name passed",n);"function"==typeof n?this[t]=n:"string"==typeof n?this[t]=this.element.find(n):console.error("could not define",t);}return this}run(...e){let t=e[0];return "function"==typeof t?this._runAry(e):"object"==typeof t?this._runAry(Object.values(t)):n(`Could not run [${e}] as [${this}]`),this}_runAry(e){for(let t of e)this.runAs(t);}runAs(e){return e.bind(this)()}containAry(e,t="append"){for(let r of e)super.add(r),r.isRendered?n(`[${r}] is already appended`):this.element[t](r);return this}contain(...e){return this.containAry(e)}containFirst(...e){return this.containAry(e.reverse(),"prepend")}pragmatize(){return this.element.appendTo(this.parent&&this.parent.element||"body"),this}pragmatizeAt(e){return this.element.appendTo(e),this}renderTo(e){return N(e).html("").append(this.element),this.triggerEvent("render"),this}addListeners(e){for(let[t,n]of Object.entries(e))this.on(t).do(n);return this}}const G=["html","css","addClass","removeClass","toggleClass","setId","append","prepend","appendTo","prependTo","setData"];for(let e of G)V.prototype[e]=function(){return this.element[e](...arguments),this};const S=["getData"];for(let e of S)V.prototype[e]=function(){return this.element[e](...arguments)};const J=["offset","text","top","left","width","height","x","classArray"];for(let e of J)Object.defineProperty(V.prototype,e,{get:function(){return this.element[e]}});globalThis.pragmaSpace||(globalThis.pragmaSpace={}),globalThis.pragmaSpace.integrateMousetrap=function(e){"function"==typeof e&&(V.prototype.bind=function(t,n,r){let i=this;return e.bind(t,(function(){return i.runAs(n)}),r),this},globalThis.pragmaSpace.mousetrapIntegration=!0,i("Mousetrap configuration detected! Extended Pragmas to support .bind() method!"));};try{globalThis.pragmaSpace.integrateMousetrap(Mousetrap);}catch(e){r("Tried to integrate extensions, but failed. To disable,\n  this attempt: globalThis.pragmaSpace.integrate3rdParties = false");}class K{static load(e,t=o()){return new Promise((n=>{console.time(`[${t}] ${e} load`);let r=`${t}-script`;if(K.map.has(e)||0!=N("head").findAll(`#${r}`).length)return n();K.map.add(e);let i=R`
        <script id="${r}" crossorigin src="${e}"></script>
      `.appendTo("head").listenTo("load",(function(){n(i),console.timeEnd(`[${r}] ${e} load`);}));}))}}t(K,"map",new Set);const U=(e,t)=>new V(e,t);function R(e,...t){return N(t.reduce(((t,n,r)=>`${t}${n}${e[r+1]}`),e[0]).trim())}function W(e){return e instanceof V&&(e=e.element),e.isPragmaElement||(e=N(e)),e}function Z(e,t=100){if(!e)return console.error(`couldnt not evaluate if [${e}] is on screen`);e=W(e);let n=window.scrollY;return function(e,t={}){let n=e.offset(),r=n.top,i=n.top+e.rect().height;return r<=t.bot&&i>=t.top||r<=t.top&&i>=t.bot}(e,{top:n+t,bot:n+window.innerHeight-t})}function q(){return Y.scrollTo(...arguments)}function X(e){return Y.on("userScroll",te(e))}!function(){var e=window,t=document,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:Element.prototype.scroll||o,scrollIntoView:Element.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now;var i,a=(i=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);function o(e,t){this.scrollLeft=e,this.scrollTop=t;}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return !0;if("object"==typeof e&&"smooth"===e.behavior)return !1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function l(e,t){return "Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return "auto"===r||"scroll"===r}function c(e){var t=l(e,"Y")&&u(e,"Y"),n=l(e,"X")&&u(e,"X");return t||n}function h(e){for(;e!==t.body&&!1===c(e);)e=e.parentNode||e.host;return e}function d(t,n=(()=>{})){var i,a,o,s=(r()-t.startTime)/468;i=function(e){return .5*(1-Math.cos(Math.PI*e))}(s=s>1?1:s),a=t.startX+(t.x-t.startX)*i,o=t.startY+(t.y-t.startY)*i,t.method.call(t.scrollable,a,o),a!==t.x||o!==t.y?e.requestAnimationFrame((()=>d.bind(e)(t,n))):e.requestAnimationFrame(n);}async function p(i,a,s){var l,u,c,h,p=r();return i===t.body?(l=e,u=e.scrollX||e.pageXOffset,c=e.scrollY||e.pageYOffset,h=n.scroll):(l=i,u=i.scrollLeft,c=i.scrollTop,h=o),new Promise((e=>{d({scrollable:l,method:h,startTime:p,startX:u,startY:c,x:a,y:s},e);}))}e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset));},e.scrollBy=function(){if(void 0!==arguments[0]){if(!s(arguments[0]))return p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset));n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);}},Element.prototype.scroll=Element.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;return p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);}},Element.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop));},Element.prototype.scrollIntoView=function(r=250){if(!0!==s(arguments[0])){var i=h(this),a=i.getBoundingClientRect(),o=this.getBoundingClientRect();return i!==t.body?p.call(this,i,i.scrollLeft+o.left-a.left,i.scrollTop+o.top-a.top):e.scrollBy({left:o.left,top:o.top-200,behavior:"smooth"})}n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);};}(),globalThis.lectorSpace=globalThis.lectorSpace||{};const Y=U().createWires("scrollData","scrollTarget","scrolling").createEvents("scrollStart","userScroll","scroll","scrollEnd","userScrollEnd","newScrollTarget").define({async scrollTo(e,t="smooth",n="center"){if(!e)return new Promise(((e,t)=>{t(null);}));e=N(e),this._selfScrolling=!0,await e.scrollIntoView({block:"center",behavior:"smooth",inline:n}),this._selfScrolling=!1;}}).run((function(){let e=0,t=!1;document.addEventListener("scroll",(n=>{this.setScrollTarget(n.target),e=n.target===document?window.scrollY:N(n.target).scrollTop,t||(window.requestAnimationFrame((()=>{this.setScrollData([e,n]),t=!1;})),t=!0);}),!0);})).on("scrollTargetChange",(function(e,t){e!==t&&this.triggerEvent("newScrollTarget");})).on("scrollDataChange",(function(e,t){let n=t?e[0]-t[0]:void 0;this.triggerEvent("scroll",e[0],n,e[1]);})).on("scroll",(function(e,t,n){this.scrolling||(this.triggerEvent("scrollStart",e,t,n),this.scrolling=!0,this.onNext("scrollEnd",(()=>{this.scrolling=!1;})));})).on("scroll",(function(e,t,n){this._selfScrolling||(this.triggerEvent("userScroll",e,t,n),this._userScrollEndTimeout&&clearTimeout(this._userScrollEndTimeout),this._userScrollEndTimeout=setTimeout((r=>{this.triggerEvent("userScrollEnd",e,t,n);}),150)),this._scrollEndTimeout&&clearTimeout(this._scrollEndTimeout),this._scrollEndTimeout=setTimeout((r=>{this.triggerEvent("scrollEnd",e,t,n);}),50);}));class Q extends V{init(e,t=50,n=!0){this.action=e,this.ticking=!1,this.animationFrame=!0,this.throttleValue=t;}call(...e){if(!this.ticking){const t=()=>{this.action&&this.action(...e),this.ticking=!1;};this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{if(this.animationFrame)return window.requestAnimationFrame(t);t();}),this.throttleValue),this.ticking=!0;}}}const ee=(...e)=>new Q(...e);function te(){let e=ee(...arguments);return (...t)=>{e.call(...t);}}U().createEvents("move").run((function(){let e=te((e=>{this.triggerEvent("move");}),250);document.addEventListener("mousemove",(t=>{e(t);}),!0);}));const ne=["an","an","ap","di","dy","ec","eg","en","em","eo","ep","eu","id","is","my","ne","od","oo","ot","sy","ur","ur","zo","pto","pyl","acr","aer","agr","ana","ant","apo","aut","bar","bio","cac","cat","cen","cen","con","cub","cyn","dec","dek","dem","dia","dox","eco","ego","eme","eos","epi","erg","eso","eth","eur","exo","geo","gen","hem","hal","hen","hex","hod","hol","hor","hor","hyo","hyp","ide","idi","iso","kil","lei","lep","lip","log","meg","mei","men","mer","mes","mim","mis","mit","mne","mon","myx","nes","nom","oct","oed","oen","omm","ont","opt","pan","pam","par","ped","pin","pis","pol","por","pro","rhe","sei","sit","syn","syl","sym","tax","the","the","tom","ton","top","tox","tri","ulo","uro","uro","xen","xer","zon","zyg","psil","prot","pros","amph","anem","anti","anth","arct","astr","athl","auto","basi","bibl","briz","brom","brom","call","carp","carp","cata","chir","cine","cirr","clad","clav","coel","copr","cosm","crep","cris","crit","cten","cyan","cycl","cyst","deca","deka","delt","derm","dexi","dino","dipl","ecto","endo","engy","eoso","etho","ethi","ethm","ethn","etym","fant","glia","gram","gymn","haem","hapl","heli","hemi","hept","herp","heur","hipp","home","horm","hyal","hydr","hygr","hypn","icos","kine","lamp","leps","leuc","leuk","lith","metr","meta","micr","myri","myth","narc","naut","necr","nect","nema","neur","noth","noto","oeco","ogdo","olig","onom","ophi","orch","orth","pach","paed","pale","path","patr","pect","pent","pept","peri","petr","phae","phag","pher","phil","phob","phon","phor","phos","phot","phyl","phys","plac","plas","plec","plut","pneu","poie","pole","poli","poli","poly","raph","rhag","rhig","rhin","rhiz","rhod","sarc","scel","scop","sema","siph","soma","soph","stea","steg","sten","stig","stom","styl","tach","tars","taur","tele","tele","temn","tetr","than","thus","ther","thym","thyr","trag","trit","trop","xiph","proct","ptych","amphi","arche","archi","arche","arist","arthr","bathy","batho","blenn","blast","botan","brady","bront","calli","calyp","cardi","centr","ceram","cerat","chlor","chore","chrom","chron","chrys","clast","clist","cochl","corac","cotyl","crani","cross","crypt","dendr","dodec","dynam","ennea","gastr","graph","heter","homal","hyper","klept","lekan","macro","melan","meter","morph","nephr","nomad","odont","organ","osteo","palae","palin","peran","phleg","phloe","phren","phryn","phyll","plagi","platy","plesi","pleth","pleur","pogon","polem","potam","rhabd","rhomb","scaph","schem","schis","scler","scoli","scept","scyph","selen","solen","sperm","sphen","spher","stern","stich","stoch","taeni","techn","therm","thyre","traum","trema","trich","troch","troph","xanth","psych","archae","brachi","brachy","bronch","cathar","cephal","chelon","cleist","cosmet","cylind","dactyl","deuter","dogmat","erythr","galact","hendec","ichthy","mening","myrmec","omphal","opisth","opoter","ornith","ostrac","persic","phalar","phaner","phragm","plinth","prasin","presby","rhynch","scalen","strept","stroph","thalam","theori","trachy","trapez","tympan","aesthet","anthrop","branchi","cleithr","epistem","parthen","phalang","pharmac","porphyr","sacchar","sphinct","stalact","stalagm","thalass","oesophag","ophthalm","physalid","pentecost","treiskaidek"];function re(e){return (re="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r);}}function oe(e,t,n){return t&&ae(e.prototype,t),n&&ae(e,n),e}function se(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t);}function le(e){return (le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ue(e,t){return (ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ce(e,t){return !t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function he(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,r=le(e);if(t){var i=le(this).constructor;n=Reflect.construct(r,arguments,i);}else n=r.apply(this,arguments);return ce(this,n)}}var de="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");var pe=function(e){for(var t=(e=e||"_")+"-",n=0;n<7;n++)t+=de[Math.floor(Math.random()*de.length)];return t},ge={"!":"¡","?":"¿Ɂ",'"':'“”"❝❞',"'":"‘‛❛❜","-":"—–",a:"ªÀÁÂÃÄÅàáâãäåĀāĂăĄąǍǎǞǟǠǡǺǻȀȁȂȃȦȧȺΆΑΔΛάαλАадѦѧӐӑӒӓƛɅæ",b:"ßþƀƁƂƃƄƅɃΒβϐϦБВЪЬвъьѢѣҌҍ",c:"¢©ÇçĆćĈĉĊċČčƆƇƈȻȼͻͼͽϲϹϽϾСсєҀҁҪҫ",d:"ÐĎďĐđƉƊȡƋƌǷ",e:"ÈÉÊËèéêëĒēĔĕĖėĘęĚěƎƏƐǝȄȅȆȇȨȩɆɇΈΕΞΣέεξϱϵ϶ЀЁЕЭеѐёҼҽҾҿӖӗӘәӚӛӬӭ",f:"ƑƒϜϝӺӻҒғſ",g:"ĜĝĞğĠġĢģƓǤǥǦǧǴǵ",h:"ĤĥĦħƕǶȞȟΉΗЂЊЋНнђћҢңҤҥҺһӉӊ",I:"ÌÍÎÏ",i:"ìíîïĨĩĪīĬĭĮįİıƖƗȈȉȊȋΊΐΪίιϊІЇії",j:"ĴĵǰȷɈɉϳЈј",k:"ĶķĸƘƙǨǩΚκЌЖКжкќҚқҜҝҞҟҠҡ",l:"ĹĺĻļĽľĿŀŁłƚƪǀǏǐȴȽΙӀӏ",m:"ΜϺϻМмӍӎ",n:"ÑñŃńŅņŇňŉŊŋƝƞǸǹȠȵΝΠήηϞЍИЙЛПийлпѝҊҋӅӆӢӣӤӥπ",o:"ÒÓÔÕÖØðòóôõöøŌōŎŏŐőƟƠơǑǒǪǫǬǭǾǿȌȍȎȏȪȫȬȭȮȯȰȱΌΘΟθοσόϕϘϙϬϭϴОФоѲѳӦӧӨөӪӫ",p:"ƤƿΡρϷϸϼРрҎҏÞ",q:"Ɋɋ",r:"ŔŕŖŗŘřƦȐȑȒȓɌɍЃГЯгяѓҐґ",s:"ŚśŜŝŞşŠšƧƨȘșȿЅѕ",t:"ŢţŤťŦŧƫƬƭƮȚțȶȾΓΤτϮТт",u:"µÙÚÛÜùúûüŨũŪūŬŭŮůŰűŲųƯưƱƲǓǔǕǖǗǘǙǚǛǜȔȕȖȗɄΰμυϋύ",v:"νѴѵѶѷ",w:"ŴŵƜωώϖϢϣШЩшщѡѿ",x:"×ΧχϗϰХхҲҳӼӽӾӿ",y:"ÝýÿŶŷŸƳƴȲȳɎɏΎΥΫγψϒϓϔЎУучўѰѱҮүҰұӮӯӰӱӲӳ",z:"ŹźŻżŽžƩƵƶȤȥɀΖζ"},me={};Object.keys(ge).forEach((function(e){ge[e].split("").forEach((function(t){me[t]=e;}));}));var fe=function(e){var t=e.split("");return t.forEach((function(e,n){me[e]&&(t[n]=me[e]);})),t.join("")},ve=/([A-Z]\.)+[A-Z]?,?$/,be=/^[A-Z]\.,?$/,ye=/[A-Z]{2,}('s|,)?$/,we=/([a-z]\.){1,}[a-z]\.?$/,ke=function(e){return !0===ve.test(e)||(!0===we.test(e)||(!0===be.test(e)||!0===ye.test(e)))},Ce=/[a-z\u00C0-\u00FF] ?\/ ?[a-z\u00C0-\u00FF]/,xe=function(e){var t=e=(e=(e=e||"").toLowerCase()).trim();return e=fe(e),!0===Ce.test(e)&&(e=e.replace(/\/.*/,"")),e=(e=(e=(e=(e=(e=(e=e.replace(/^[#@]/,"")).replace(/[,;.!?]+$/,"")).replace(/[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]+/g,"'")).replace(/[\u0022\u00AB\u00BB\u201C\u201D\u201E\u201F\u2033\u2034\u2036\u2037\u2E42\u301D\u301E\u301F\uFF02]+/g,'"')).replace(/\u2026/g,"...")).replace(/\u2013/g,"-")).replace(/([aeiou][ktrp])in$/,"$1ing"),!0===/^(re|un)-?[^aeiou]./.test(e)&&(e=e.replace("-","")),ke(e)&&(e=e.replace(/\./g,"")),!1===/^[:;]/.test(e)&&(e=(e=(e=e.replace(/\.{3,}$/g,"")).replace(/[",\.!:;\?\)]+$/g,"")).replace(/^['"\(]+/g,"")),""===(e=(e=e.replace(/[\u200B-\u200D\uFEFF]/g,"")).trim())&&(e=t),e=e.replace(/([0-9]),([0-9])/g,"$1$2")},Ae=function(e){return e=(e=e.replace(/['’]s$/,"")).replace(/s['’]$/,"s")},De=/^[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·&*•^†‡°¡¿※№÷×ºª%‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F]+/,$e=/[ \n\t\.’'\[\](){}⟨⟩:,،、‒–—―…!.‹›«»‐\-?‘’;\/⁄·&*@•^†‡°¡¿※#№÷×ºª‰+−=‱¶′″‴§~|‖¦©℗®℠™¤₳฿\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E]+$/,Pe=/\//,Ee=/['’]/,He=/^[a-z]\.([a-z]\.)+/i,je=/^[-+\.][0-9]/,Te=/^'[0-9]{2}/,Ie=function(e){var t=e,n="",r="";""===(e=(e=e.replace(De,(function(t){return "-"!==(n=t)&&"+"!==n&&"."!==n||!je.test(e)?"'"===n&&Te.test(e)?(n="",t):"":(n="",t)}))).replace($e,(function(i){return r=i,Ee.test(i)&&/[sn]['’]$/.test(t)&&!1===Ee.test(n)?(r=r.replace(Ee,""),"'"):!0===He.test(e)?(r=r.replace(/\./,""),"."):""})))&&(t=t.replace(/ *$/,(function(e){return r=e||"",""})),e=t,n="",r=r);var i=xe(e),a={text:e,clean:i,reduced:Ae(i),pre:n,post:r};return Pe.test(e)&&e.split(Pe).forEach((function(e){a.alias=a.alias||{},a.alias[e.trim()]=!0;})),a};function Ne(e){var t={exports:{}};return e(t,t.exports),t.exports}var Fe=Ne((function(e,t){var n=/^[A-Z][a-z'\u00C0-\u00FF]/,r=/^[A-Z]+s?$/;t.toUpperCase=function(){return this.text=this.text.toUpperCase(),this},t.toLowerCase=function(){return this.text=this.text.toLowerCase(),this},t.toTitleCase=function(){return this.text=this.text.replace(/^ *[a-z\u00C0-\u00FF]/,(function(e){return e.toUpperCase()})),this},t.isUpperCase=function(){return r.test(this.text)},t.isTitleCase=function(){return n.test(this.text)},t.titleCase=t.isTitleCase;})),Be=Ne((function(e,t){var n=/(\u0022|\uFF02|\u0027|\u201C|\u2018|\u201F|\u201B|\u201E|\u2E42|\u201A|\u00AB|\u2039|\u2035|\u2036|\u2037|\u301D|\u0060|\u301F)/,r=/(\u0022|\uFF02|\u0027|\u201D|\u2019|\u201D|\u2019|\u201D|\u201D|\u2019|\u00BB|\u203A|\u2032|\u2033|\u2034|\u301E|\u00B4|\u301E)/;t.hasPost=function(e){return -1!==this.post.indexOf(e)},t.hasPre=function(e){return -1!==this.pre.indexOf(e)},t.hasQuote=function(){return n.test(this.pre)||r.test(this.post)},t.hasQuotation=t.hasQuote,t.hasComma=function(){return this.hasPost(",")},t.hasPeriod=function(){return !0===this.hasPost(".")&&!1===this.hasPost("...")},t.hasExclamation=function(){return this.hasPost("!")},t.hasQuestionMark=function(){return this.hasPost("?")||this.hasPost("¿")},t.hasEllipses=function(){return this.hasPost("..")||this.hasPost("…")||this.hasPre("..")||this.hasPre("…")},t.hasSemicolon=function(){return this.hasPost(";")},t.hasSlash=function(){return /\//.test(this.text)},t.hasHyphen=function(){var e=/^(-|–|—)$/;return e.test(this.post)||e.test(this.pre)},t.hasDash=function(){var e=/ (-|–|—) /;return e.test(this.post)||e.test(this.pre)},t.hasContraction=function(){return Boolean(this.implicit)},t.addPunctuation=function(e){return ","!==e&&";"!==e||(this.post=this.post.replace(e,"")),this.post=e+this.post,this};})),Le=function(e,t){var n=e.length,r=t.length;if(0===n)return r;if(0===r)return n;var i=(r>n?r:n)+1;if(Math.abs(n-r)>(i||100))return i||100;for(var a,o,s,l,u,c,h=[],d=0;d<i;d++)h[d]=[d],h[d].length=i;for(var p=0;p<i;p++)h[0][p]=p;for(var g=1;g<=n;++g)for(o=e[g-1],a=1;a<=r;++a){if(g===a&&h[g][a]>4)return n;l=o===(s=t[a-1])?0:1,u=h[g-1][a]+1,(c=h[g][a-1]+1)<u&&(u=c),(c=h[g-1][a-1]+l)<u&&(u=c);var m=g>1&&a>1&&o===t[a-2]&&e[g-2]===s&&(c=h[g-2][a-2]+l)<u;h[g][a]=m?c:u;}return h[n][r]},Oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3;if(e===t)return 1;if(e.length<n||t.length<n)return 0;var r=Le(e,t),i=Math.max(e.length,t.length),a=0===i?0:r/i,o=1-a;return o},ze=function(){},Me=function(e,t,n,r){if(t.id===e.id)return !0;if(!0===t.anything)return !0;if(!0===t.start&&0!==n)return !1;if(!0===t.end&&n!==r-1)return !1;if(void 0!==t.word){if(null!==e.implicit&&e.implicit===t.word)return !0;if(void 0!==e.alias&&e.alias.hasOwnProperty(t.word))return !0;if(!0===t.soft&&t.word===e.root)return !0;if(void 0!==t.fuzzy){var i=Oe(t.word,e.reduced);if(i>t.fuzzy)return !0;if(!0===t.soft&&(i=Oe(t.word,e.root))>t.fuzzy)return !0}return t.word===e.clean||t.word===e.text||t.word===e.reduced}return void 0!==t.tag?!0===e.tags[t.tag]:void 0!==t.method?"function"==typeof e[t.method]&&!0===e[t.method]():void 0!==t.regex?t.regex.test(e.clean):void 0!==t.fastOr?!(!e.implicit||!0!==t.fastOr.hasOwnProperty(e.implicit))||(t.fastOr.hasOwnProperty(e.reduced)||t.fastOr.hasOwnProperty(e.text)):void 0!==t.choices&&("and"===t.operator?t.choices.every((function(t){return ze(e,t,n,r)})):t.choices.some((function(t){return ze(e,t,n,r)})))},_e$1=ze=function(e,t,n,r){var i=Me(e,t,n,r);return !0===t.negative?!i:i},Ve={},Ge={doesMatch:function(e,t,n){return _e$1(this,e,t,n)},isAcronym:function(){return ke(this.text)},isImplicit:function(){return ""===this.text&&Boolean(this.implicit)},isKnown:function(){return Object.keys(this.tags).some((function(e){return !0!==Ve[e]}))},setRoot:function(e){var t=e.transforms,n=this.implicit||this.clean;if(this.tags.Plural&&(n=t.toSingular(n,e)),this.tags.Verb&&!this.tags.Negative&&!this.tags.Infinitive){var r=null;this.tags.PastTense?r="PastTense":this.tags.Gerund?r="Gerund":this.tags.PresentTense?r="PresentTense":this.tags.Participle?r="Participle":this.tags.Actor&&(r="Actor"),n=t.toInfinitive(n,e,r);}this.root=n;}},Se=/[\s-]/,Je=/^[A-Z-]+$/,Ke={textOut:function(e,t,n){e=e||{};var r=this.text,i=this.pre,a=this.post;return !0===e.reduced&&(r=this.reduced||""),!0===e.root&&(r=this.root||""),!0===e.implicit&&this.implicit&&(r=this.implicit||""),!0===e.normal&&(r=this.clean||this.text||""),!0===e.root&&(r=this.root||this.reduced||""),!0===e.unicode&&(r=fe(r)),!0===e.titlecase&&(this.tags.ProperNoun&&!this.titleCase()||(this.tags.Acronym?r=r.toUpperCase():Je.test(r)&&!this.tags.Acronym&&(r=r.toLowerCase()))),!0===e.lowercase&&(r=r.toLowerCase()),!0===e.acronyms&&this.tags.Acronym&&(r=r.replace(/\./g,"")),!0!==e.whitespace&&!0!==e.root||(i="",a=" ",!1!==Se.test(this.post)&&!e.last||this.implicit||(a="")),!0!==e.punctuation||e.root||(!0===this.hasPost(".")?a="."+a:!0===this.hasPost("?")?a="?"+a:!0===this.hasPost("!")?a="!"+a:!0===this.hasPost(",")?a=","+a:!0===this.hasEllipses()&&(a="..."+a)),!0!==t&&(i=""),!0!==n&&(a=""),!0===e.abbreviations&&this.tags.Abbreviation&&(a=a.replace(/^\./,"")),i+r+a}},Ue={Auxiliary:1,Possessive:1},Re=function(e,t){var n=Object.keys(e.tags),r=t.tags;return n=n.sort((function(e,t){return Ue[t]||!r[t]?-1:r[t]?r[e]?r[e].lineage.length>r[t].lineage.length?1:r[e].isA.length>r[t].isA.length?-1:0:0:1}))},We={text:!0,tags:!0,implicit:!0,whitespace:!0,clean:!1,id:!1,index:!1,offset:!1,bestTag:!1},Ze={json:function(e,t){e=e||{};var n={};return (e=Object.assign({},We,e)).text&&(n.text=this.text),e.normal&&(n.normal=this.clean),e.tags&&(n.tags=Object.keys(this.tags)),e.clean&&(n.clean=this.clean),(e.id||e.offset)&&(n.id=this.id),e.implicit&&null!==this.implicit&&(n.implicit=this.implicit),e.whitespace&&(n.pre=this.pre,n.post=this.post),e.bestTag&&(n.bestTag=Re(this,t)[0]),n}},qe=Object.assign({},Fe,Be,Ge,Ke,Ze);function Xe(){return "undefined"!=typeof window&&window.document}var Ye=function(e,t){for(e=e.toString();e.length<t;)e+=" ";return e},Qe=function(e,t,n){if(Xe())console.log("%c"+Ye(e.clean,3)+"  + "+t+" ","color: #6accb2;");else {var r="[33m"+Ye(e.clean,15)+"[0m + [32m"+t+"[0m ";n&&(r=Ye(r,35)+" "+n),console.log(r);}},et=function(e,t,n){if(Xe())console.log("%c"+Ye(e.clean,3)+"  - "+t+" ","color: #AB5850;");else {var r="[33m"+Ye(e.clean,3)+" [31m - #"+t+"[0m ";n&&(r=Ye(r,35)+" "+n),console.log(r);}},tt=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},nt=function(e,t,n,r){var i=r.tags;if(""!==t&&"."!==t&&"-"!==t&&("#"===t[0]&&(t=t.replace(/^#/,"")),t=tt(t),!0!==e.tags[t])){var a=r.isVerbose();!0===a&&Qe(e,t,n),e.tags[t]=!0,!0===i.hasOwnProperty(t)&&(i[t].isA.forEach((function(t){e.tags[t]=!0,!0===a&&Qe(e,"→ "+t);})),e.unTag(i[t].notA,"←",r));}},rt=function(e,t,n,r){if("string"!=typeof t)for(var i=0;i<t.length;i++)nt(e,t[i],n,r);else nt(e,t,n,r);},it=/^[a-z]/,at=function(e,t,n,r){var i,a=r.isVerbose();if("*"===t)return e.tags={},e;t=t.replace(/^#/,""),!0===it.test(t)&&(t=(i=t).charAt(0).toUpperCase()+i.substr(1)),!0===e.tags[t]&&(delete e.tags[t],!0===a&&et(e,t,n));var o=r.tags;if(o[t])for(var s=o[t].lineage,l=0;l<s.length;l++)!0===e.tags[s[l]]&&(delete e.tags[s[l]],!0===a&&et(e," - "+s[l]));return e},ot=function(e,t,n,r){if("string"!=typeof t&&t)for(var i=0;i<t.length;i++)at(e,t[i],n,r);else at(e,t,n,r);},st=function e(t,n,r){var i=r.tags;if("#"===n[0]&&(n=n.replace(/^#/,"")),void 0===i[n])return !0;for(var a=i[n].notA||[],o=0;o<a.length;o++)if(!0===t.tags[a[o]])return !1;return void 0===i[n].isA||e(t,i[n].isA,r)},lt={tag:function(e,t,n){return rt(this,e,t,n),this},tagSafe:function(e,t,n){return st(this,e,n)&&rt(this,e,t,n),this},unTag:function(e,t,n){return ot(this,e,t,n),this},canBe:function(e,t){return st(this,e,t)}},ut=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";ie(this,e),t=String(t);var n=Ie(t);this.text=n.text||"",this.clean=n.clean,this.reduced=n.reduced,this.root=null,this.implicit=null,this.pre=n.pre||"",this.post=n.post||"",this.tags={},this.prev=null,this.next=null,this.id=pe(n.clean),this.isA="Term",n.alias&&(this.alias=n.alias);}return oe(e,[{key:"set",value:function(e){var t=Ie(e);return this.text=t.text,this.clean=t.clean,this}}]),e}();ut.prototype.clone=function(){var e=new ut(this.text);return e.pre=this.pre,e.post=this.post,e.clean=this.clean,e.reduced=this.reduced,e.root=this.root,e.implicit=this.implicit,e.tags=Object.assign({},this.tags),e},Object.assign(ut.prototype,qe),Object.assign(ut.prototype,lt);var ct=ut,ht={terms:function(e){if(0===this.length)return [];if(this.cache.terms)return void 0!==e?this.cache.terms[e]:this.cache.terms;for(var t=[this.pool.get(this.start)],n=0;n<this.length-1;n+=1){var r=t[t.length-1].next;if(null===r){console.error("Compromise error: Linked list broken in phrase '"+this.start+"'");break}var i=this.pool.get(r);if(t.push(i),void 0!==e&&e===n)return t[e]}return void 0===e&&(this.cache.terms=t),void 0!==e?t[e]:t},clone:function(e){var t=this;if(e){var n=this.buildFrom(this.start,this.length);return n.cache=this.cache,n}var r=this.terms().map((function(e){return e.clone()}));return r.forEach((function(e,n){t.pool.add(e),r[n+1]&&(e.next=r[n+1].id),r[n-1]&&(e.prev=r[n-1].id);})),this.buildFrom(r[0].id,r.length)},lastTerm:function(){var e=this.terms();return e[e.length-1]},hasId:function(e){if(0===this.length||!e)return !1;if(this.start===e)return !0;if(this.cache.terms){for(var t=this.cache.terms,n=0;n<t.length;n++)if(t[n].id===e)return !0;return !1}for(var r=this.start,i=0;i<this.length-1;i+=1){var a=this.pool.get(r);if(void 0===a)return console.error("Compromise error: Linked list broken. Missing term '".concat(r,"' in phrase '").concat(this.start,"'\n")),!1;if(a.next===e)return !0;r=a.next;}return !1},wordCount:function(){return this.terms().filter((function(e){return ""!==e.text})).length},fullSentence:function(){for(var e=this.terms(0);e.prev;)e=this.pool.get(e.prev);for(var t=e.id,n=1;e.next;)e=this.pool.get(e.next),n+=1;return this.buildFrom(t,n)}},dt=function(e){return e.replace(/ +$/,"")},pt={text:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;"string"==typeof e&&(e="normal"===e?{whitespace:!0,unicode:!0,lowercase:!0,punctuation:!0,acronyms:!0,abbreviations:!0,implicit:!0,normal:!0}:"clean"===e?{titlecase:!1,lowercase:!0,punctuation:!0,whitespace:!0,unicode:!0,implicit:!0,normal:!0}:"reduced"===e?{punctuation:!1,titlecase:!1,lowercase:!0,whitespace:!0,unicode:!0,implicit:!0,reduced:!0}:"implicit"===e?{punctuation:!0,implicit:!0,whitespace:!0,trim:!0}:"root"===e?{titlecase:!1,lowercase:!0,punctuation:!0,whitespace:!0,unicode:!0,implicit:!0,root:!0}:{});var r=this.terms(),i=!1;r[0]&&null===r[0].prev&&null===r[r.length-1].next&&(i=!0);var a=r.reduce((function(a,o,s){if(0===s&&""===o.text&&null!==o.implicit&&!e.implicit)return a;e.last=n&&s===r.length-1;var l=!0,u=!0;return !1===i&&(0===s&&t&&(l=!1),s===r.length-1&&n&&(u=!1)),a+o.textOut(e,l,u)}),"");return !0===i&&n&&(a=dt(a)),!0===e.trim&&(a=a.trim()),a}},gt={trim:function(){var e=this.terms();if(e.length>0){e[0].pre=e[0].pre.replace(/^\s+/,"");var t=e[e.length-1];t.post=t.post.replace(/\s+$/,"");}return this}},mt=/[.?!]\s*$/,ft=function(e,t){t[0].pre=e[0].pre;var n,r,i=e[e.length-1],a=t[t.length-1];a.post=(n=i.post,r=a.post,mt.test(r)?r+n.match(/\s*$/):n),i.post="",""===i.post&&(i.post+=" ");},vt=function(e,t,n){var r=e.terms(),i=t.terms();ft(r,i),function(e,t,n){var r=e[e.length-1],i=t[t.length-1],a=r.next;r.next=t[0].id,i.next=a,a&&(n.get(a).prev=i.id);var o=e[0].id;o&&(t[0].prev=o);}(r,i,e.pool);var a=[e],o=e.start,s=[n];return (s=s.concat(n.parents())).forEach((function(e){var t=e.list.filter((function(e){return e.hasId(o)}));a=a.concat(t);})),(a=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}(a)).forEach((function(e){e.length+=t.length;})),e.cache={},e},bt=/ /,yt=function(e,t,n){var r=e.start,i=t.terms();!function(e){var t=e[e.length-1];!1===bt.test(t.post)&&(t.post+=" ");}(i),function(e,t,n){var r=n[n.length-1];r.next=e.start;var i=e.pool,a=i.get(e.start);a.prev&&(i.get(a.prev).next=t.start),n[0].prev=e.terms(0).prev,e.terms(0).prev=r.id;}(e,t,i);var a=[e],o=[n];return (o=o.concat(n.parents())).forEach((function(e){var n=e.list.filter((function(e){return e.hasId(r)||e.hasId(t.start)}));a=a.concat(n);})),(a=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))}(a)).forEach((function(e){e.length+=t.length,e.start===r&&(e.start=t.start),e.cache={};})),e},wt=function(e,t){var n=t.pool(),r=e.terms(),i=n.get(r[0].prev)||{},a=n.get(r[r.length-1].next)||{};r[0].implicit&&i.implicit&&(i.set(i.implicit),i.post+=" "),function(e,t,n,r){var i=e.parents();i.push(e),i.forEach((function(e){var i=e.list.find((function(e){return e.hasId(t)}));i&&(i.length-=n,i.start===t&&(i.start=r.id),i.cache={});})),e.list=e.list.filter((function(e){return !(!e.start||!e.length)}));}(t,e.start,e.length,a),i&&(i.next=a.id),a&&(a.prev=i.id);},kt={append:function(e,t){return vt(this,e,t),this},prepend:function(e,t){return yt(this,e,t),this},delete:function(e){return wt(this,e),this},replace:function(e,t){var n=this.length;vt(this,e,t);var r=this.buildFrom(this.start,this.length);r.length=n,wt(r,t);},splitOn:function(e){var t=this.terms(),n={before:null,match:null,after:null},r=t.findIndex((function(t){return t.id===e.start}));if(-1===r)return n;var i=t.slice(0,r);i.length>0&&(n.before=this.buildFrom(i[0].id,i.length));var a=t.slice(r,r+e.length);a.length>0&&(n.match=this.buildFrom(a[0].id,a.length));var o=t.slice(r+e.length,t.length);return o.length>0&&(n.after=this.buildFrom(o[0].id,o.length,this.pool)),n}},Ct={json:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n={};return e.text&&(n.text=this.text()),e.normal&&(n.normal=this.text("normal")),e.clean&&(n.clean=this.text("clean")),e.reduced&&(n.reduced=this.text("reduced")),e.implicit&&(n.implicit=this.text("implicit")),e.root&&(n.root=this.text("root")),e.trim&&(n.text&&(n.text=n.text.trim()),n.normal&&(n.normal=n.normal.trim()),n.reduced&&(n.reduced=n.reduced.trim())),e.terms&&(!0===e.terms&&(e.terms={}),n.terms=this.terms().map((function(n){return n.json(e.terms,t)}))),n}},xt={lookAhead:function(e){e||(e=".*");var t=this.pool,n=[],r=this.terms();return function e(r){var i=t.get(r);i&&(n.push(i),i.prev&&e(i.next));}(r[r.length-1].next),0===n.length?[]:this.buildFrom(n[0].id,n.length).match(e)},lookBehind:function(e){e||(e=".*");var t=this.pool,n=[];return function e(r){var i=t.get(r);i&&(n.push(i),i.prev&&e(i.prev));}(t.get(this.start).prev),0===n.length?[]:this.buildFrom(n[n.length-1].id,n.length).match(e)}},At=Object.assign({},ht,pt,gt,kt,Ct,xt),Dt=function(e,t){if(0===t.length)return !0;for(var n=0;n<t.length;n+=1){var r=t[n];if(!0!==r.optional&&!0!==r.negative&&!0===r.start&&n>0)return !0;if(!0===r.anything&&!0===r.negative)return !0}return !1},$t=Ne((function(e,t){t.getGreedy=function(e,t){for(var n=Object.assign({},e.regs[e.r],{start:!1,end:!1}),r=e.t;e.t<e.terms.length;e.t+=1){if(t&&e.terms[e.t].doesMatch(t,e.start_i+e.t,e.phrase_length))return e.t;var i=e.t-r+1;if(void 0!==n.max&&i===n.max)return e.t;if(!1===e.terms[e.t].doesMatch(n,e.start_i+e.t,e.phrase_length))return void 0!==n.min&&i<n.min?null:e.t}return e.t},t.greedyTo=function(e,t){var n=e.t;if(!t)return e.terms.length;for(;n<e.terms.length;n+=1)if(!0===e.terms[n].doesMatch(t,e.start_i+n,e.phrase_length))return n;return null},t.isEndGreedy=function(e,t){if(!0===e.end&&!0===e.greedy&&t.start_i+t.t<t.phrase_length-1){var n=Object.assign({},e,{end:!1});if(!0===t.terms[t.t].doesMatch(n,t.start_i+t.t,t.phrase_length))return !0}return !1},t.doOrBlock=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.regs[e.r],i=!1,a=0;a<r.choices.length;a+=1){var o=r.choices[a];if(i=o.every((function(t,r){var i=0,a=e.t+r+n+i;if(void 0===e.terms[a])return !1;var o=e.terms[a].doesMatch(t,a+e.start_i,e.phrase_length);if(!0===o&&!0===t.greedy)for(var s=1;s<e.terms.length;s+=1){var l=e.terms[a+s];if(l){if(!0!==l.doesMatch(t,e.start_i+s,e.phrase_length))break;i+=1;}}return n+=i,o}))){n+=o.length;break}}return i&&!0===r.greedy?t.doOrBlock(e,n):n},t.doAndBlock=function(e){var t=0;return !0===e.regs[e.r].choices.every((function(n){var r=n.every((function(t,n){var r=e.t+n;return void 0!==e.terms[r]&&e.terms[r].doesMatch(t,r,e.phrase_length)}));return !0===r&&n.length>t&&(t=n.length),r}))&&t},t.getGroup=function(e,t,n){if(e.groups[e.groupId])return e.groups[e.groupId];var r=e.terms[t].id;return e.groups[e.groupId]={group:String(n),start:r,length:0},e.groups[e.groupId]};})),Pt=function(e,t,n,r){for(var i={t:0,terms:e,r:0,regs:t,groups:{},start_i:n,phrase_length:r,hasGroup:!1,groupId:null,previousGroup:null};i.r<t.length;i.r+=1){var a=t[i.r];if(i.hasGroup="string"==typeof a.named||"number"==typeof a.named,!0===i.hasGroup){var o=t[i.r-1];o&&o.named===a.named&&i.previousGroup?i.groupId=i.previousGroup:(i.groupId=pe(a.named),i.previousGroup=i.groupId);}if(!i.terms[i.t]){if(!1===t.slice(i.r).some((function(e){return !e.optional})))break;return null}if(!0!==a.anything||!0!==a.greedy){if(void 0!==a.choices&&"or"===a.operator){var s=$t.doOrBlock(i);if(s){if(!0===a.negative)return null;if(!0===i.hasGroup)$t.getGroup(i,i.t,a.named).length+=s;i.t+=s;continue}if(!a.optional)return null}if(void 0!==a.choices&&"and"===a.operator){var l=$t.doAndBlock(i);if(l){if(!0===a.negative)return null;if(!0===i.hasGroup)$t.getGroup(i,i.t,a.named).length+=l;i.t+=l;continue}if(!a.optional)return null}var u=i.terms[i.t],c=u.doesMatch(a,i.start_i+i.t,i.phrase_length);if(!0===a.anything||!0===c||$t.isEndGreedy(a,i)){var h=i.t;if(a.optional&&t[i.r+1]&&a.negative)continue;if(a.optional&&t[i.r+1]){var d=u.doesMatch(t[i.r+1],i.start_i+i.t,i.phrase_length);if(a.negative||d){var p=i.terms[i.t+1];p&&p.doesMatch(t[i.r+1],i.start_i+i.t,i.phrase_length)||(i.r+=1);}}if(i.t+=1,!0===a.end&&i.t!==i.terms.length&&!0!==a.greedy)return null;if(!0===a.greedy){if(i.t=$t.getGreedy(i,t[i.r+1]),null===i.t)return null;if(a.min&&a.min>i.t)return null;if(!0===a.end&&i.start_i+i.t!==r)return null}if(!0===i.hasGroup){var g=$t.getGroup(i,h,a.named);i.t>1&&a.greedy?g.length+=i.t-h:g.length++;}}else {if(a.negative){var m=Object.assign({},a);if(m.negative=!1,!0===i.terms[i.t].doesMatch(m,i.start_i+i.t,i.phrase_length))return null}if(!0!==a.optional){if(i.terms[i.t].isImplicit()&&t[i.r-1]&&i.terms[i.t+1]){if(i.terms[i.t-1]&&i.terms[i.t-1].implicit===t[i.r-1].word)return null;if(i.terms[i.t+1].doesMatch(a,i.start_i+i.t,i.phrase_length)){i.t+=2;continue}}return null}}}else {var f=$t.greedyTo(i,t[i.r+1]);if(void 0!==a.min&&f-i.t<a.min)return null;if(void 0!==a.max&&f-i.t>a.max){i.t=i.t+a.max;continue}if(null===f)return null;!0===i.hasGroup&&($t.getGroup(i,i.t,a.named).length=f-i.t),i.t=f;}}return {match:i.terms.slice(0,i.t),groups:i.groups}},Et=function(e,t,n){if(!n||0===n.length)return n;if(t.some((function(e){return e.end}))){var r=e[e.length-1];n=n.filter((function(e){return -1!==e.match.indexOf(r)}));}return n},Ht=/(?:^|\s)([\!\[\^]*(?:<[^<]*>)?\/.*?[^\\\/]\/[\?\]\+\*\$~]*)(?:\s|$)/,jt=/([\!\[\^]*(?:<[^<]*>)?\([^\)]+[^\\\)]\)[\?\]\+\*\$~]*)(?:\s|$)/,Tt=/ /g,It=function(e){return /^[\!\[\^]*(<[^<]*>)?\//.test(e)&&/\/[\?\]\+\*\$~]*$/.test(e)},Nt=function(e){return e=(e=e.map((function(e){return e.trim()}))).filter((function(e){return e}))},Ft=function(e){var t=e.split(Ht),n=[];t.forEach((function(e){It(e)?n.push(e):n=n.concat(e.split(jt));})),n=Nt(n);var r=[];return n.forEach((function(e){!function(e){return /^[\!\[\^]*(<[^<]*>)?\(/.test(e)&&/\)[\?\]\+\*\$~]*$/.test(e)}(e)?It(e)?r.push(e):r=r.concat(e.split(Tt)):r.push(e);})),r=Nt(r)},Bt=/\{([0-9]+,?[0-9]*)\}/,Lt=/&&/,Ot=new RegExp(/^< *?(\S+) *?>/),zt=function(e){return e[e.length-1]},Mt=function(e){return e[0]},_t=function(e){return e.substr(1)},Vt=function(e){return e.substr(0,e.length-1)},Gt=function(e){return e=_t(e),e=Vt(e)},St=function e(t){for(var n,r={},i=0;i<2;i+=1){if("$"===zt(t)&&(r.end=!0,t=Vt(t)),"^"===Mt(t)&&(r.start=!0,t=_t(t)),("["===Mt(t)||"]"===zt(t))&&(r.named=!0,"["===Mt(t)?r.groupType="]"===zt(t)?"single":"start":r.groupType="end",t=(t=t.replace(/^\[/,"")).replace(/\]$/,""),"<"===Mt(t))){var a=Ot.exec(t);a.length>=2&&(r.named=a[1],t=t.replace(a[0],""));}if("+"===zt(t)&&(r.greedy=!0,t=Vt(t)),"*"!==t&&"*"===zt(t)&&"\\*"!==t&&(r.greedy=!0,t=Vt(t)),"?"===zt(t)&&(r.optional=!0,t=Vt(t)),"!"===Mt(t)&&(r.negative=!0,t=_t(t)),"("===Mt(t)&&")"===zt(t)){Lt.test(t)?(r.choices=t.split(Lt),r.operator="and"):(r.choices=t.split("|"),r.operator="or"),r.choices[0]=_t(r.choices[0]);var o=r.choices.length-1;r.choices[o]=Vt(r.choices[o]),r.choices=r.choices.map((function(e){return e.trim()})),r.choices=r.choices.filter((function(e){return e})),r.choices=r.choices.map((function(t){return t.split(/ /g).map(e)})),t="";}if("/"===Mt(t)&&"/"===zt(t))return t=Gt(t),r.regex=new RegExp(t),r;if("~"===Mt(t)&&"~"===zt(t))return t=Gt(t),r.soft=!0,r.word=t,r}return !0===Bt.test(t)&&(t=t.replace(Bt,(function(e,t){var n=t.split(/,/g);return 1===n.length?(r.min=Number(n[0]),r.max=Number(n[0])):(r.min=Number(n[0]),r.max=Number(n[1]||999)),r.greedy=!0,r.optional=!0,""}))),"#"===Mt(t)?(r.tag=_t(t),r.tag=(n=r.tag).charAt(0).toUpperCase()+n.substr(1),r):"@"===Mt(t)?(r.method=_t(t),r):"."===t?(r.anything=!0,r):"*"===t?(r.anything=!0,r.greedy=!0,r.optional=!0,r):(t&&(t=(t=t.replace("\\*","*")).replace("\\.","."),r.word=t.toLowerCase()),r)},Jt=function(e){for(var t,n=!1,r=-1,i=0;i<e.length;i++){var a=e[i];"single"!==a.groupType||!0!==a.named?("start"===a.groupType&&(n=!0,t="string"==typeof a.named||"number"==typeof a.named?a.named:r+=1),n&&(a.named=t),"end"===a.groupType&&(n=!1)):(r+=1,a.named=r);}return e},Kt=function(e){return e.map((function(e){if(void 0!==e.choices&&!0===e.choices.every((function(e){if(1!==e.length)return !1;var t=e[0];return void 0!==t.word&&!0!==t.negative&&!0!==t.optional&&!0!==t.method}))){var t={};e.choices.forEach((function(e){t[e[0].word]=!0;})),e.fastOr=t,delete e.choices;}return e}))},Ut=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.filter((function(e){return e.groupType})).length;return n>0&&(e=Jt(e)),t.fuzzy||(e=Kt(e)),e},Rt=function(e){return "[object Array]"===Object.prototype.toString.call(e)},Wt=function(e){return [{choices:e.map((function(e){return [{word:e}]})),operator:"or"}]},Zt=function(e){if(!e||!e.list||!e.list[0])return [];var t=[];return e.list.forEach((function(e){var n=[];e.terms().forEach((function(e){n.push(e.id);})),t.push(n);})),[{idBlocks:t}]},qt=function(e,t){return !0===t.fuzzy&&(t.fuzzy=.85),"number"==typeof t.fuzzy&&(e=e.map((function(e){return t.fuzzy>0&&e.word&&(e.fuzzy=t.fuzzy),e.choices&&e.choices.forEach((function(e){e.forEach((function(e){e.fuzzy=t.fuzzy;}));})),e}))),e},Xt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e||""===e)return [];if("object"===re(e)){if(Rt(e)){if(0===e.length||!e[0])return [];if("object"===re(e[0]))return e;if("string"==typeof e[0])return Wt(e)}return e&&"Doc"===e.isA?Zt(e):[]}"number"==typeof e&&(e=String(e));var n=Ft(e);return n=n.map((function(e){return St(e)})),n=Ut(n,t),n=qt(n,t)},Yt=function(e,t){for(var n=[],r=t[0].idBlocks,i=function(t){r.forEach((function(r){0!==r.length?r.every((function(n,r){return a=t,e[t+r].id===n}))&&(n.push({match:e.slice(t,t+r.length)}),t+=r.length-1):a=t;})),a=t;},a=0;a<e.length;a+=1)i(a);return n},Qt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof t&&(t=Xt(t)),!0===Dt(e,t))return [];var r=t.filter((function(e){return !0!==e.optional&&!0!==e.negative})).length,i=e.terms(),a=[];if(t[0].idBlocks){var o=Yt(i,t);if(o&&o.length>0)return Et(i,t,o)}if(!0===t[0].start){var s=Pt(i,t,0,i.length);return s&&s.match&&s.match.length>0&&(s.match=s.match.filter((function(e){return e})),a.push(s)),Et(i,t,a)}for(var l=0;l<i.length&&!(l+r>i.length);l+=1){var u=Pt(i.slice(l),t,l,i.length);if(u&&u.match&&u.match.length>0&&(l+=u.match.length-1,u.match=u.match.filter((function(e){return e})),a.push(u),!0===n))return Et(i,t,a)}return Et(i,t,a)},en=function(e,t){var n={};Qt(e,t).forEach((function(e){e.match.forEach((function(e){n[e.id]=!0;}));}));var r=e.terms(),i=[],a=[];return r.forEach((function(e){!0!==n[e.id]?a.push(e):a.length>0&&(i.push(a),a=[]);})),a.length>0&&i.push(a),i},tn={match:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Qt(this,e,n);return r=r.map((function(e){var n=e.match,r=e.groups,i=t.buildFrom(n[0].id,n.length,r);return i.cache.terms=n,i}))},has:function(e){return Qt(this,e,!0).length>0},not:function(e){var t=this,n=en(this,e);return n=n.map((function(e){return t.buildFrom(e[0].id,e.length)}))},canBe:function(e,t){for(var n=this,r=[],i=this.terms(),a=!1,o=0;o<i.length;o+=1){var s=i[o].canBe(e,t);!0===s&&(!0===a?r[r.length-1].push(i[o]):r.push([i[o]]),a=s);}return r=r.filter((function(e){return e.length>0})).map((function(e){return n.buildFrom(e[0].id,e.length)}))}},nn=function e(t,n,r){ie(this,e),this.start=t,this.length=n,this.isA="Phrase",Object.defineProperty(this,"pool",{enumerable:!1,writable:!0,value:r}),Object.defineProperty(this,"cache",{enumerable:!1,writable:!0,value:{}}),Object.defineProperty(this,"groups",{enumerable:!1,writable:!0,value:{}});};nn.prototype.buildFrom=function(e,t,n){var r=new nn(e,t,this.pool);return n&&Object.keys(n).length>0?r.groups=n:r.groups=this.groups,r},Object.assign(nn.prototype,tn),Object.assign(nn.prototype,At);var rn={term:"terms"};Object.keys(rn).forEach((function(e){return nn.prototype[e]=nn.prototype[rn[e]]}));var an=nn,on=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ie(this,e),Object.defineProperty(this,"words",{enumerable:!1,value:t});}return oe(e,[{key:"add",value:function(e){return this.words[e.id]=e,this}},{key:"get",value:function(e){return this.words[e]}},{key:"remove",value:function(e){delete this.words[e];}},{key:"merge",value:function(e){return Object.assign(this.words,e.words),this}},{key:"stats",value:function(){return {words:Object.keys(this.words).length}}}]),e}();on.prototype.clone=function(){var e=this,t=Object.keys(this.words).reduce((function(t,n){var r=e.words[n].clone();return t[r.id]=r,t}),{});return new on(t)};var sn=on,ln=function(e){e.forEach((function(t,n){n>0&&(t.prev=e[n-1].id),e[n+1]&&(t.next=e[n+1].id);}));},un=/(\S.+?[.!?\u203D\u2E18\u203C\u2047-\u2049])(?=\s+|$)/g,cn=/\S/,hn=/[ .][A-Z]\.? *$/i,dn=/(?:\u2026|\.{2,}) *$/,pn=/((?:\r?\n|\r)+)/,gn=/[a-z0-9\u00C0-\u00FF\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/i,mn=/^\s+/,fn=function(e,t){if(!0===hn.test(e))return !1;if(!0===dn.test(e))return !1;if(!1===gn.test(e))return !1;var n=e.replace(/[.!?\u203D\u2E18\u203C\u2047-\u2049] *$/,"").split(" "),r=n[n.length-1].toLowerCase();return !t.hasOwnProperty(r)},vn=function(e,t){var n=t.cache.abbreviations;e=e||"";var r=[],i=[];if(!(e=String(e))||"string"!=typeof e||!1===cn.test(e))return r;for(var a=function(e){for(var t=[],n=e.split(pn),r=0;r<n.length;r++)for(var i=n[r].split(un),a=0;a<i.length;a++)t.push(i[a]);return t}(e=e.replace(" "," ")),o=0;o<a.length;o++){var s=a[o];if(void 0!==s&&""!==s){if(!1===cn.test(s)){if(i[i.length-1]){i[i.length-1]+=s;continue}if(a[o+1]){a[o+1]=s+a[o+1];continue}}i.push(s);}}for(var l=0;l<i.length;l++){var u=i[l];i[l+1]&&!1===fn(u,n)?i[l+1]=u+(i[l+1]||""):u&&u.length>0&&(r.push(u),i[l]="");}if(0===r.length)return [e];for(var c=1;c<r.length;c+=1){var h=r[c].match(mn);null!==h&&(r[c-1]+=h[0],r[c]=r[c].replace(mn,""));}return r},bn=/\S/,yn=/^[!?.]+$/,wn=/(\S+)/,kn=/[a-z] ?\/ ?[a-z]*$/,Cn=[".","?","!",":",";","-","–","—","--","...","(",")","[","]",'"',"'","`"];Cn=Cn.reduce((function(e,t){return e[t]=!0,e}),{});for(var xn=function(e){if(!0===/^(re|un)-?[^aeiou]./.test(e))return !1;if(!0===/^([a-z\u00C0-\u00FF`"'/]+)(-|–|—)([a-z0-9\u00C0-\u00FF].*)/i.test(e))return !0;return !0===/^([0-9]{1,4})(-|–|—)([a-z\u00C0-\u00FF`"'/-]+$)/i.test(e)},An=function(e){var t=[],n=e.split(/[-–—]/),r="-",i=e.match(/[-–—]/);i&&i[0]&&(r=i);for(var a=0;a<n.length;a++)a===n.length-1?t.push(n[a]):t.push(n[a]+r);return t},Dn=function(e){var t=[],n=[];if("number"==typeof(e=e||"")&&(e=String(e)),function(e){return "[object Array]"===Object.prototype.toString.call(e)}(e))return e;for(var r=e.split(wn),i=0;i<r.length;i++)!0!==xn(r[i])?n.push(r[i]):n=n.concat(An(r[i]));for(var a="",o=0;o<n.length;o++){var s=n[o];!0===bn.test(s)&&!1===Cn.hasOwnProperty(s)&&!1===yn.test(s)?(t.length>0?(t[t.length-1]+=a,t.push(s)):t.push(a+s),a=""):a+=s;}return a&&(0===t.length&&(t[0]=""),t[t.length-1]+=a),t=(t=function(e){for(var t=1;t<e.length-1;t++)kn.test(e[t])&&(e[t-1]+=e[t]+e[t+1],e[t]=null,e[t+1]=null);return e}(t)).filter((function(e){return e}))},$n=function(e){return "[object Array]"===Object.prototype.toString.call(e)},Pn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=null;"string"!=typeof e&&("number"==typeof e?e=String(e):$n(e)&&(r=e)),r=(r=r||vn(e,t)).map((function(e){return Dn(e)})),n=n||new sn;var i=r.map((function(e){e=e.map((function(e){var t=new ct(e);return n.add(t),t})),ln(e);var t=new an(e[0].id,e.length,n);return t.cache.terms=e,t}));return i},En=function(e,t){var n=new sn;return e.map((function(e,r){var i=e.terms.map((function(i,a){var o=new ct(i.text);return o.pre=void 0!==i.pre?i.pre:"",void 0===i.post&&(i.post=" ",a>=e.terms.length-1&&(i.post=". ",r>=e.terms.length-1&&(i.post="."))),o.post=void 0!==i.post?i.post:" ",i.tags&&i.tags.forEach((function(e){return o.tag(e,"",t)})),n.add(o),o}));return ln(i),new an(i[0].id,i.length,n)}))},Hn=["Person","Place","Organization"],jn={Noun:{notA:["Verb","Adjective","Adverb"]},Singular:{isA:"Noun",notA:"Plural"},ProperNoun:{isA:"Noun"},Person:{isA:["ProperNoun","Singular"],notA:["Place","Organization","Date"]},FirstName:{isA:"Person"},MaleName:{isA:"FirstName",notA:["FemaleName","LastName"]},FemaleName:{isA:"FirstName",notA:["MaleName","LastName"]},LastName:{isA:"Person",notA:["FirstName"]},NickName:{isA:"Person",notA:["FirstName","LastName"]},Honorific:{isA:"Noun",notA:["FirstName","LastName","Value"]},Place:{isA:"Singular",notA:["Person","Organization"]},Country:{isA:["Place","ProperNoun"],notA:["City"]},City:{isA:["Place","ProperNoun"],notA:["Country"]},Region:{isA:["Place","ProperNoun"]},Address:{isA:"Place"},Organization:{isA:["Singular","ProperNoun"],notA:["Person","Place"]},SportsTeam:{isA:"Organization"},School:{isA:"Organization"},Company:{isA:"Organization"},Plural:{isA:"Noun",notA:["Singular"]},Uncountable:{isA:"Noun"},Pronoun:{isA:"Noun",notA:Hn},Actor:{isA:"Noun",notA:Hn},Activity:{isA:"Noun",notA:["Person","Place"]},Unit:{isA:"Noun",notA:Hn},Demonym:{isA:["Noun","ProperNoun"],notA:Hn},Possessive:{isA:"Noun"}},Tn={Verb:{notA:["Noun","Adjective","Adverb","Value"]},PresentTense:{isA:"Verb",notA:["PastTense","FutureTense"]},Infinitive:{isA:"PresentTense",notA:["PastTense","Gerund"]},Imperative:{isA:"Infinitive"},Gerund:{isA:"PresentTense",notA:["PastTense","Copula","FutureTense"]},PastTense:{isA:"Verb",notA:["FutureTense"]},FutureTense:{isA:"Verb"},Copula:{isA:"Verb"},Modal:{isA:"Verb",notA:["Infinitive"]},PerfectTense:{isA:"Verb",notA:"Gerund"},Pluperfect:{isA:"Verb"},Participle:{isA:"PastTense"},PhrasalVerb:{isA:"Verb"},Particle:{isA:"PhrasalVerb"},Auxiliary:{notA:["Noun","Adjective","Value"]}},In={Value:{notA:["Verb","Adjective","Adverb"]},Ordinal:{isA:"Value",notA:["Cardinal"]},Cardinal:{isA:"Value",notA:["Ordinal"]},Fraction:{isA:"Value",notA:["Noun"]},RomanNumeral:{isA:"Cardinal",notA:["Ordinal","TextValue"]},TextValue:{isA:"Value",notA:["NumericValue"]},NumericValue:{isA:"Value",notA:["TextValue"]},Money:{isA:"Cardinal"},Percent:{isA:"Value"}},Nn=["Noun","Verb","Adjective","Adverb","Value","QuestionWord"],Fn={Adjective:{notA:["Noun","Verb","Adverb","Value"]},Comparable:{isA:["Adjective"]},Comparative:{isA:["Adjective"]},Superlative:{isA:["Adjective"],notA:["Comparative"]},NumberRange:{isA:["Contraction"]},Adverb:{notA:["Noun","Verb","Adjective","Value"]},Date:{notA:["Verb","Adverb","Preposition","Adjective"]},Month:{isA:["Date","Singular"],notA:["Year","WeekDay","Time"]},WeekDay:{isA:["Date","Noun"]},Timezone:{isA:["Date","Noun"],notA:["Adjective","ProperNoun"]},Time:{isA:["Date"],notA:["AtMention"]},Determiner:{notA:Nn},Conjunction:{notA:Nn},Preposition:{notA:Nn},QuestionWord:{notA:["Determiner"]},Currency:{isA:["Noun"]},Expression:{notA:["Noun","Adjective","Verb","Adverb"]},Abbreviation:{},Url:{notA:["HashTag","PhoneNumber","Verb","Adjective","Value","AtMention","Email"]},PhoneNumber:{notA:["HashTag","Verb","Adjective","Value","AtMention","Email"]},HashTag:{},AtMention:{isA:["Noun"],notA:["HashTag","Verb","Adjective","Value","Email"]},Emoji:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Emoticon:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Email:{notA:["HashTag","Verb","Adjective","Value","AtMention"]},Acronym:{notA:["Plural","RomanNumeral"]},Negative:{notA:["Noun","Adjective","Value"]},Condition:{notA:["Verb","Adjective","Noun","Value"]}},Bn={Noun:"blue",Verb:"green",Negative:"green",Date:"red",Value:"red",Adjective:"magenta",Preposition:"cyan",Conjunction:"cyan",Determiner:"cyan",Adverb:"cyan"},Ln=function(e){return Object.keys(e).forEach((function(t){e[t].color?e[t].color=e[t].color:Bn[t]?e[t].color=Bn[t]:e[t].isA.some((function(n){return !!Bn[n]&&(e[t].color=Bn[n],!0)}));})),e},On=function(e){return Object.keys(e).forEach((function(t){for(var n=e[t],r=n.isA.length,i=0;i<r;i++){var a=n.isA[i];e[a]&&(n.isA=n.isA.concat(e[a].isA));}n.isA=function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))}(n.isA);})),e},zn=function(e){var t=Object.keys(e);return t.forEach((function(n){var r=e[n];r.notA=r.notA||[],r.isA.forEach((function(t){if(e[t]&&e[t].notA){var n="string"==typeof e[t].notA?[e[t].isA]:e[t].notA||[];r.notA=r.notA.concat(n);}}));for(var i=0;i<t.length;i++){var a=t[i];-1!==e[a].notA.indexOf(n)&&r.notA.push(a);}r.notA=function(e){return e.filter((function(e,t,n){return n.indexOf(e)===t}))}(r.notA);})),e},Mn=function(e){var t=Object.keys(e);return t.forEach((function(n){var r=e[n];r.lineage=[];for(var i=0;i<t.length;i++)-1!==e[t[i]].isA.indexOf(n)&&r.lineage.push(t[i]);})),e},_n=function(e){return e=function(e){return Object.keys(e).forEach((function(t){var n=e[t];n.isA=n.isA||[],"string"==typeof n.isA&&(n.isA=[n.isA]),n.notA=n.notA||[],"string"==typeof n.notA&&(n.notA=[n.notA]);})),e}(e),e=On(e),e=zn(e),e=Ln(e),e=Mn(e)},Vn=function(e,t){Object.keys(e).forEach((function(n){t[n]=e[n];}));},Gn=function(){var e={};return Vn(jn,e),Vn(Tn,e),Vn(In,e),Vn(Fn,e),e=_n(e)}(),Sn={Comparative:"true¦better",Superlative:"true¦earlier",PresentTense:"true¦is,sounds",Value:"true¦a few",Noun:"true¦a5b4c2f1here,ie,lit,m0no doubt,pd,tce;a,d;t,y;a,ca,o0;l,rp;a,l;d,l,rc",Copula:"true¦a1is,w0;as,ere;m,re",PastTense:"true¦be3came,d2had,lied,meant,sa2taken,w0;as,e0;nt,re;id;en,gan",Condition:"true¦if,lest,unless",Preposition:"true¦'o,-,aLbIcHdGexcept,fFiDmidQnotwithstandiRoBpSqua,sAt6u3vi2w0;/o,hereNith0;!in,oR;a,s-a-vis;n1p0;!on;like,til;h0ill,owards;an,r0;ough0u;!oJ;ans,ince,o that;',f0n2ut;!f;f,n0;!to;or,rom;espite,own,u3;hez,irca;ar1e0oAy;sides,tween;ri6;',bo7cross,ft6lo5m3propos,round,s1t0;!op;! long 0;as;id0ong0;!st;ng;er;ut",Gerund:"true¦accord0be0develop0go0result0stain0;ing",Negative:"true¦n0;ever,o0;!n,t",QuestionWord:"true¦how3wh0;at,e1ich,o0y;!m,se;n,re; come,'s",Plural:"true¦records",Conjunction:"true¦&,aFbBcuz,how9in caEno8o7p5supposing,t2v1wh0yet;eth9ile;ers4s;h0o;eref9o0;!uC;l0rovided that;us;r,therwi6; matt1r;!ev0;er;e0ut;cau1f0;ore;se;lthou1nd,s 0;far as,if;gh",Abbreviation:"true¦a0Jb0Gc0Ad08e05f02g01h00iYjWkanVlTmNnKoJpFque,rDs8t6u5v2w0;is0r,y0B;!c;a,b,e1i0ol,s,t;tro,vo;r,t;niv,safa,t;ce,e0;l,mp,nn,x;ask,e2fc,gt,i1q,r,s,t,u0;pt,rg;r,tu;c,nJp0;!t;b,d,e0;pGs,v;a,d,ennNhd,l,p,r1s0vt;!eud;ef,o0;b,f,n;ct,kla,nt;e0ov;b0e;!r;a4d,essrs,i1lle,me,r7s0t;!tr;n1s0;c,ter;!n;!j,r,sc;at,it,lb,ng,t0;!d;!s;an,d,r,u0;l,n;a,da,e,n0;c,f;on,wy;a,en,ov;e1ig,l0m,r,t,y;!a;b,m;a,g,ng,s1tc,x0;!p;p,q,t;ak,e0ist,r;c,f,pt,t;a3ca,l,m2o0pl,res,yn;!l0m1nn,rp;!o;dr;!l0pt;!if;a,c,l1r0;ig,os;!dg,vd;d4l3p2r1ss0tty,ug,ve;n,t;c,iz;prox,r,t;!ta;!j,m,v",Pronoun:"true¦'em,elle,h4i3me,ourselves,she5th1us,we,you0;!rself;e0ou;m,y;!l,t;e0im;!'s",Singular:"true¦0:15;1:12;2:18;a15b0Sc0Jd0Ce09f04gZhViUjel0kitty,lSmOnNoMpHquestionGrEs9t6u4w3;ay,om02;nc0Zs 3;doll0Kst0M; rex,a4h3ic,ragedy,v show;ere,i2;l0x return;i6ky,omeoMt3uper bowl,yst14;ep4ri2u3;de0Xff;faSmoS;st1ze;al0i2o3;om,se;! mark;a6i1la5r4u3;dPrpoH;eroga00ie0Gobl0U;te,y1;rt,te0N;bjWceJthers,verview;othi2umb1;a5ee08o3;del,m3nopo0rni2th1;!my;n,yf0;i3unch;ne;ci2nsect;ead start,o3uman right;l0me4u3;se;! run;adf0entlem6irl02laci1od,rand4u3;l0y; slam,fa3mo3;th1;an;a6ella,ly,ol0r4un3;di2;ee market,iWo3;nti1sP;mi0th1;conomy,gg,ner7ven4x3;ampTecu9;i2t;ad8e5inn1o3ragonf0ude;cumentGg3i0l0or;gy;ath,t3;ec3;tive;!dy;a9eili2h7i5o3redit card;ttage,u3;ri1sin;ty,vil w3;ar;andeli1ocol3;ate;n3rF;ary;aCel0lesJo8r5u3;n3tterf0;ti2;eakfa4o3;!th1;st;dy,tt5y3;!fri3;end;le;nki2r3;ri1;er;d5l0noma0u3;nt;ly; homin5verti3;si2;ng;em",FemaleName:"true¦0:J3;1:J7;2:IG;3:IF;4:IX;5:IK;6:JO;7:H0;8:JG;9:JK;A:HN;B:HY;C:IT;D:IP;E:JD;F:HC;G:I0;aGRbFLcDPdCYeBOfB4gADh9Ti9Gj8Gk7Gl60m49n3No3Jp37qu36r2Ds16t0Eu0Cv02wVxiTyOzH;aLeIineb,oHsof2;e3Uf2la,ra;h3iKlIna,ynH;ab,ep;da,ma;da,h3iHra;nab;aKeJi0Fol5BuIvH;etAonDO;i0na;le0sen2;el,gm3Jn,rGJs8W;aoHme0nyi;m62yAE;aMendDYhiDFiH;dele8lJnH;if48niHo0;e,f47;a,helmi0lHma;a,ow;ka0nB;aNeKiHusa5;cIktoriBMlAole7viH;anC3enJ0;kF9tor2;da,lA9nus,rHs0;a,nHoniH4;a,iFQ;leHnesH4;nIHrH;i1y;g8rHxH5;su5te;aYeUhRiNoLrIuHy3;i,la;acIZiHu0L;c2na,sH;hBPta;nHr0H;iBNya;aJffaEOnHs6;a,gtiH;ng;!nFQra;aIeHomasi0;a,l9Po8Ares1;l2ndolwethu;g9Go88rIssH;!a,ie;eHi,ri9;sa,za;bPlNmLnJrIs6tHwa0;ia0um;a63yn;iHya;a,ka,s6;arB6e3iHmEDra;!ka;a,iH;a,t6;at6it6;a0Fcarlet3We0BhXiTkye,neza0oRtNuIyH;bIBlvi1;e,ha,mayIEni7sIzH;an3MetAie,y;anHi9;!a,e,nH;aDe;aJeH;fHl5GphH;an4;cHZr5;b2fiA8m0OnHphi1;d3ia,ja,ya;er3lJmon1nIobh8PtH;a,i;dy;lEPv2;aMeIirHo0risF7y5;a,lDK;ba,e0i5lJrH;iHrDOyl;!d8Hfa;ia,lDX;hd,iMki3nJrIu0w0yH;la,ma,na;i,le8on,ron;aIda,ia,nHon;a,on;!ya;k6mH;!aa;lJrItaye81vH;da,inj;e0ife;en1i0ma;anA5bNd3Nh1RiBkMlLmJndIrHs6vannaD;aDi0;ra,y;aHi3;nt6ra;lDKma,ome;ee0in8Ru3;in1ri0;a05e00hYiVoIuH;by,thDH;bScRghQl2KnPsJwIxH;anAXie,y;an,e0;aIeHie,lE; merBLann9ll1marDBt7;!lHnn1;iHyn;e,nH;a,d9K;da,i,na;ayy8D;hel62io;bDKer7yn;a,cIkHmas,n9Fta,ya;ki,o;helGki;ea,iannGDoH;da,n1K;an0bJem9Agi0iInHta,y0;a88ee;han83na;a,eH;cEAkaD;bi0chIe,i0mo0nHquEKvCy0;di,ia;aEIelHiB;!e,le;een4ia0;aNeMhKipaluk,oJrHute66;iHudenCQ;scil3LyamvaB;lly,rt2;ilome0oebe,ylH;is,lis;arl,ggy,nelope,r5t3;ige,m0TnKo5rvaDGtIulH;a,etAin1;ricHsy,tBY;a,e,ia;do3i06;ctav2dIfCZis6lHphCZumC3yunbileg;a,ga,iv2;eHvAC;l2tA;aWeUiMoIurHy5;!ay,ul;a,eJor,rIuH;f,r;aDeCma;ll1mi;aNcLhariBOkKlaJna,sHta,vi;anHha;ur;!y;a,iDTki;hoGk9VolH;a,eDJ;!mh;hir,lHna,risFsreC;!a,lBT;asuLdKh2i6CnJomi9rgEPtHzanin zah3;aHhal4;li1s6;cy,etA;a,e8iEV;nngu30;a09ckenz4e01iMoJrignayani,uriDDyH;a,rH;a,lNna,tG;bi0i3llBInH;a,iH;ca,ka,qD3;a,cTkaSlNmi,nLrItzi,yH;ar;aIiam,lH;anEO;!l,nB;dy,eHh,n4;nhGrva;aKdJiCPlH;iHy;cent,e;red;!gros;!e5;ae5hH;ae5el3Z;ag5EgNi,lKrH;edi79iIjem,on,yH;em,l;em,sF;an4iHliF;nHsCE;a,da;!an,han;b0DcASd0Be,g09ha,i08ja,l06n04rLsoum60tKuIv82x9IyHz4;a,bell,ra,soB9;de,rH;a,eC;h8Fild1t4;a,cYgUiKjor4l7Sn4s6tJwa,yH;!aHbe6Wja8lAE;m,nBH;a,ha,in1;!aJbCBeIja,lEna,sHt64;!a,ol,sa;!l1H;! Jh,mInH;!a,e,n1;!awit,i;aliAHcJeduarBfernIjHlui5Y;o6Ful2;anB;ecil2la3;arJeIie,oHr44ueriA;!t;!ry;et42i37;el4Ui76y;dHon,ue5;akran7y;ak,en,iHk,lo3O;a,ka,nB;a,re,s4te;daHg4;!l3A;alEd4elHge,isDBon0;ei8in1yn;el,le;a0Ne0CiYoQuLyH;d2la,nH;!a,dIeBGnHsCL;!a,eBF;a,sCJ;aCWcJel0PiFlIna,pHz;e,i7;a,u,wa;iHy;a0Se,ja,l2JnB;is,l1SrJttIuHvel4;el5is1;e,ie;aKeIi9na,rH;a86i9;lHn1t7;ei;!in1;aSbb9CdRepa,lMnJsIv2zH;!a,be5LetAz4;a,etA;!a,dH;a,sHy;ay,ey,i,y;a,iJja,lHy;iHy;aA0e;!aH;!n5F;ia,ya;!nH;!a,ne;aPda,e0iNjYla,nMoKsJtHx4y5;iHt4;c2t2;e2LlCG;la,nHra;a,ie,o3;a,or1;a,gh,laH;!ni;!h,nH;a,d3e,n5P;cOdon97iNkes6mi9Ana,rMtJurIvHxmi,y5;ern1in2;a,e54ie,yn;as6iIoH;nya,ya;fa,s6;a,isF;a,la;ey,ie,y;a04eZhXiOlAKoNrJyH;lHra;a,ee,ie;istHy6D;a,en,iIyH;!na;!e,n59;nul,ri,urtnB0;aOerNlAZmJrHzzy;a,stH;en,in;!berlImernH;aq;eHi,y;e,y;a,stC;!na,ra;aHei3ongordzol;dij1w5;el7QiKjsi,lJnIrH;a,i,ri;d3na,za;ey,i,lBDs4y;ra,s6;bi7cAJdiat7IeB2iRlQmPnyakuma19rNss6KtKvi7yH;!e,lH;a,eH;e,i8L;a6DeIhHi4NlEri0y;ar6Ber6Bie,leCrB2y;!lyn8Gri0;a,en,iHl5Soli0yn;!ma,n3VsF;a5il1;ei8Ei,l4;a,tl6L;a07eYiVoNuH;anLdKliHst63;a8HeHsF;!n8tH;!a,te;e5Ji3Jy;a,i7;!anNcelEd6RelGhan7RlLni,sIva0yH;a,ce;eHie;fHlEph5U;a,in1;eHie;en,n1;!a,e,n41;lHng;!i1ClH;!i1B;anMle0nJrIsH;i8Csi8C;i,ri;!a,elGif2CnH;a,etAiHy;!e,f2A;a,e8EiInH;a,e8DiH;e,n1;cMd1mi,nIque4Xsmin3Ovie3y8zH;min9;a9eIiH;ce,e,n1s;!lHsFt0F;e,le;inIk4lEquelH;in1yn;da,ta;lRmPnOo0rNsIvaHzaro;!a0lu,na;aJiIlaHob84;!n9N;do3;!belHdo3;!a,e,l39;a77en1i0ma;a,di3es,gr6Yji;a8elBogH;en1;a,e8iHo0se;a0na;aSeOiJoHusFyacin2B;da,ll4rten23snH;a,i9Q;lImaH;ri;aIdHlaI;a,egard;ry;ath1CiJlInriet7rmi8sH;sa,t1B;en2Sga,mi;di;bi2Dil8IlNnMrJsItHwa,yl8Iz7H;i5St4;n5Yti;iHmo51ri52;etH;!te;aDnaD;a,ey,l4;a03eXiSlQoOrKunJwH;enHyne1Q;!dolE;ay,el;acIetHiselB;a,chC;e,ieH;!la;ld1AogooH;sh;adys,enHor2yn2H;a,da,na;aKgi,lIna,ov89selHta;a,e,le;da,liH;an;!n0;mLnJorgIrH;ald3Pi,m3Ctru8B;etAi4W;a,eHna;s26vieve;ma;bIil,le,mHrnet,yG;al5Ni5;i5FrielH;a,l1;aVeSiRloOoz2rH;anJeIiH;da,eB;da,ja;!cH;esIiHoi0O;n1s61;!ca;!rH;a,encH;e,ia;en,o0;lIn0rnH;!anB;ec2ic2;jr,n7rKtHy9;emIiHma,ouma7;ha,ma,n;eh;ah,iBrah,za0;cr4Nd0Ne0Mi0Lk7l04mWn4YrTsNtMuLvH;aJelIiH;!e,ta;in0Gyn;!ngel2S;geni1la,ni45;h5Sta;mLperanKtH;eIhHrel5;er;l30r9;za;a,eralB;iHma,nest2Jyn;cHka,n;a,ka;a,eMiJmH;aHie,y;!li8;lHn1;ee,iHy;a,e,ja;lHrald;da,y;aWeUiNlMma,no3oKsJvH;a,iH;na,ra;a,ie;iHuiH;se;a,en,ie,y;a0c2da,f,nMsJzaH;!betHve7;e,h;aHe,ka;!beH;th;!a,or;anor,nH;!a;!in1na;leCs6;vi;eIiHna,wi0;e,th;l,n;aYeMh2iLjeneKoHul30;lor5Tminiq4In3FrHtt4;a,eCis,la,othHthy;ea,y;ba;an0AnaDon8x4ya;anQbPde,eOiMja,lJmetr2nHsir5K;a,iH;ce,se;a,iIla,orHphi8;es,is;a,l6D;dHrdH;re;!d5Cna;!b2HoraDra;a,d3nH;!a,e;hl2i0l0HmNnLphn1rIvi1XyH;le,na;a,by,cIia,lH;a,en1;ey,ie;a,etAiH;!ca,el1Cka,z;arHia;is;a0Se0Oh05i03lVoKrIynH;di,th2;istHy05;al,i0;lPnMrIurH;tn1E;aJd2NiHn2Nri8;!nH;a,e,n1;!l1X;cepci59n4sH;tanHuelo;ce,za;eHleC;en,tA;aJeoIotH;il51;!pat3;ir9rJudH;etAiH;a,ne;a,e,iH;ce,sZ;a3er3ndH;i,y;aReNloe,rH;isJyH;stH;al;sy,tH;a1Ren,iHy;!an1e,n1;deJlseIrH;!i9yl;a,y;li8;nMrH;isKlImH;ai8;a,eHotA;n1tA;!sa;d3elGtH;al,elG;cIlH;esAi44;el2ilH;e,ia,y;itlZlYmilXndWrOsMtHy5;aKeJhHri0;erHleCrEy;in1;ri0;li0ri0;a33sH;a32ie;a,iNlLmeJolIrH;ie,ol;!e,in1yn;lHn;!a,la;a,eHie,o7y;ne,y;na,sF;a0Hi0H;a,e,l1;is7l4;in,yn;a0Ie02iZlXoUrH;andSeQiJoIyH;an0nn;nwEok9;an3DdgLg0XtH;n2XtH;!aInH;ey,i,y;ny;etH;!t9;an0e,nH;da,na;i9y;bbi9glarIlo05nH;i7n4;ka;ancHossom,ythe;a,he;an17lja0nHsm3I;i7tH;ou;aUcky,linTni7rPssOtJulaDvH;!erlH;ey,y;hJsy,tH;e,iHy9;e,na;!anH;ie,y;!ie;nHt6yl;adIiH;ce;etAi8;ay,da;!triH;ce,z;rbJyaH;rmH;aa;a3ie,o3ra;a2Sb2Md23g1Zi1Qj5l16m0Xn09oi,r04sUtTuPvOwa,yIzH;ra,u0;aKes6gJlIseH;!l;in;un;!nH;a,na;a,i2Ir2J;drJgus1RrIsteH;ja;el2;a,ey,i,y;aahua,he0;hIi2Gja,mi7s2DtrH;id;aMlIraqHt21;at;eIi9yH;!n;e,iHy;gh;!nH;ti;iJleIo6pi7;ta;en,n1tA;aHelG;!n1J;a00dje5eYgUiSjQnJohito,toHya;inetAnH;el5ia;!aKeIiHmJ;e,ka;!mHtA;ar4;!belIliFmU;sa;!le;a,eliH;ca;ka,sHta;a,sa;elHie;a,iH;a,ca,n1qH;ue;!tA;te;! JbImHstasiNya;ar2;el;cla3jul2pau5;aLberKeliJiHy;e,l2naH;!ta;a,ja;!ly;hGiIl2nB;da;a,ra;le;aWba,ePiMlKma,thJyH;a,c2sH;a,on,sa;ea;iHys0N;e,s0M;a,cIn1sHza;a,e,ha,on,sa;e,ia,ja;c2is6jaKksaKna,sJxH;aHia;!nd3;ia,saH;nd3;ra;ia;i0nIyH;ah,na;a,is,naDoud;la;c6da,leCmNnLsH;haDlH;inHyY;g,n;!h;a,o,slH;ey;ee;en;at6g4nIusH;ti0;es;ie;aWdiTelMrH;eJiH;anMenH;a,e,ne;an0;na;!aLeKiIyH;nn;a,n1;a,e;!ne;!iH;de;e,lEsH;on;yn;!lH;i8yn;ne;aKbIiHrL;!gaK;ey,i9y;!e;gaH;il;dKliyJradhIs6;ha;ya;ah;a,ya",Actor:"true¦aJbGcFdCengineIfAgardenIh9instructPjournalLlawyIm8nurse,opeOp5r3s1t0;echnCherapK;ailNcientJecretary,oldiGu0;pervKrgeon;e0oofE;ceptionGsearC;hotographClumbColi1r0sychologF;actitionBogrammB;cem6t5;echanic,inist9us4;airdress8ousekeep8;arm7ire0;fight6m2;eputy,iet0;ici0;an;arpent2lerk;ricklay1ut0;ch0;er;ccoun6d2ge7r0ssis6ttenda7;chitect,t0;ist;minist1v0;is1;rat0;or;ta0;nt",Honorific:"true¦a01bYcQdPeOfiJgIhon,jr,king,lHmCoffic00p7queen,r3s0taoiseach,vice6;e1fc,gt,ir,r,u0;ltRpt,rg;cond liInBrgeaJ;abbi,e0;ar1p9s,v0;!erend; admirX;astOhd,r0vt;esideDi1of0;!essM;me mini4nce0;!ss;a3essrs,i2lle,me,r1s0;!tr;!s;stK;gistrate,j,r6yF;i3lb,t;en,ov;eld mar3rst l0;ady,i0;eutena0;nt;shG;sq,xcellency;et,oct6r,utchess;apt6hance4mdr,o0pl;lonel,m2ngress0unci3;m0wom0;an;dr,mand5;ll0;or;!ain;ldg,rig0;!adi0;er;d0sst,tty,yatullah;j,m0v;!ir0;al",SportsTeam:"true¦0:1A;1:1H;2:1G;a1Eb16c0Td0Kfc dallas,g0Ihouston 0Hindiana0Gjacksonville jagua0k0El0Bm01newToQpJqueens parkIreal salt lake,sAt5utah jazz,vancouver whitecaps,w3yW;ashington 3est ham0Rh10;natio1Oredski2wizar0W;ampa bay 6e5o3;ronto 3ttenham hotspur;blue ja0Mrapto0;nnessee tita2xasC;buccanee0ra0K;a7eattle 5heffield0Kporting kansas0Wt3;. louis 3oke0V;c1Frams;marine0s3;eah15ounG;cramento Rn 3;antonio spu0diego 3francisco gJjose earthquak1;char08paA; ran07;a8h5ittsburgh 4ortland t3;imbe0rail blaze0;pirat1steele0;il3oenix su2;adelphia 3li1;eagl1philNunE;dr1;akland 3klahoma city thunder,rlando magic;athle0Mrai3;de0; 3castle01;england 7orleans 6york 3;city fc,g4je0FknXme0Fred bul0Yy3;anke1;ian0D;pelica2sain0C;patrio0Brevolut3;ion;anchester Be9i3ontreal impact;ami 7lwaukee b6nnesota 3;t4u0Fvi3;kings;imberwolv1wi2;rewe0uc0K;dolphi2heat,marli2;mphis grizz3ts;li1;cXu08;a4eicesterVos angeles 3;clippe0dodDla9; galaxy,ke0;ansas city 3nE;chiefs,roya0E; pace0polis colU;astr06dynamo,rockeTtexa2;olden state warrio0reen bay pac3;ke0;.c.Aallas 7e3i05od5;nver 5troit 3;lio2pisto2ti3;ge0;broncZnuggeM;cowbo4maver3;ic00;ys; uQ;arCelKh8incinnati 6leveland 5ol3;orado r3umbus crew sc;api5ocki1;brow2cavalie0india2;bengaWre3;ds;arlotte horAicago 3;b4cubs,fire,wh3;iteB;ea0ulR;diff3olina panthe0; c3;ity;altimore 9lackburn rove0oston 5rooklyn 3uffalo bilN;ne3;ts;cel4red3; sox;tics;rs;oriol1rave2;rizona Ast8tlanta 3;brav1falco2h4u3;nited;aw9;ns;es;on villa,r3;os;c5di3;amondbac3;ks;ardi3;na3;ls",Uncountable:"true¦0:1I;1:16;2:1X;a1Rb1Jc1Ad17e10f0Ug0Nh0Ii0Ej0Dknowled1Ql08mYnews,oXpTrOsDt8vi7w3;a5ea0Bi4oo3;d,l;ldlife,ne;rmth,t0;neg17ol0Ctae;e6h5oothpaste,r3una;affTou3;ble,sers,t;ermod1Mund0;a,nnis;aBcene0Aeri1hAil9kittl1now,o8p6t4u3;g10nshi0Q;ati1Le3;am,el;ace1Ee3;ci1ed;ap,cc0;k,v0;eep,ingl1;d0Dfe18l3nd,tish;m11t;a6e4ic3;e,ke0M;c3laxa0Isearch;ogni0Hrea0H;bi1in;aPe5hys2last9o3ress04;l3rk,w0;it2yA;a12trZ;bstetr2il,xygen;aAe8ilk,o5u3;mps,s3;ic;n3o0I;ey,o3;gamy;a3chan2;sl1t;chine3il,themat2; learn0Bry;aught0e5i4ogi0Su3;ck,g0I;ce,ghtn08ngui0QteratN;a3isM;th0;ewelAusti0L;ce,mp3nformaUtself;a3ortan0J;ti3;en0H;a6isto5o3;ck3mework,n3spitali0B;ey;ry;ir,libut,ppiD;ene6o4r3um,ymna0D;aCound;l3ssip;d,f; 3t2;editQpo3;ol;i7lour,o4urnit3;ure;od,rgive3uri0wl;ne3;ss;c9sh;conom2duca8lectr7n5quip6th2very3;body,o3thH;ne;joy3tertain3;ment;iciPon2;tiI;ar4iabet1raugh4;es;ts;aAelcius,h6iv2l5o3urrency;al,ld w3nfusiDttD;ar;ass2oth5;aos,e3;e4w3;ing;se;r7sh;a7eef,i4lood,owls,read,utt0;er;lliar4s3;on;ds;g3ss;ga3;ge;c8dvi7ero5ir4mnes3rt,thlet2;ty;craft;b2d3naut2;ynam2;ce;id,ou3;st2;ics",Infinitive:"true¦0:6S;1:76;2:5C;3:74;4:73;5:67;6:6F;7:6Y;8:6Q;9:72;A:70;B:5X;C:6X;D:6L;E:77;F:5B;a6Kb66c57d4De3Xf3Jg3Dh37i2Uj2Sk2Ql2Hm26n23o1Yp1Jr0Rs06tYuTvOwHyG;awn,ield;aJe1Zhist6iIoGre6D;nd0rG;k,ry;pe,sh,th0;lk,nHrGsh,tDve;n,raE;d0t;aJiHoG;te,w;eGsC;!w;l6Jry;nHpGr4se;gra4Pli41;dGi9lo5Zpub3Q;erGo;mi5Cw1I;aMeLhKig5SoJrHuGwi7;ne,rn;aGe0Mi5Uu7y;de,in,nsf0p,v5J;r2ZuD;ank,reatB;nd,st;lk,rg1Qs9;aZcWeVhTi4Dkip,lSmRnee3Lo52pQtJuGwitD;bmCck,ff0gge7ppHrGspe5;ge,pri1rou4Zvi3;ly,o36;aLeKoJrHuG;dy,mb6;aFeGi3;ngthBss,tD;p,re;m,p;in,ke,r0Qy;la58oil,rink6;e1Zi6o3J;am,ip;a2iv0oG;ck,rtBut;arDem,le5n1r3tt6;aHo2rG;atDew;le,re;il,ve;a05eIisk,oHuG;in,le,sh;am,ll;a01cZdu8fYgXje5lUmTnt,pQquPsKtJvGwa5V;eGiew,o36;al,l,rG;se,t;aFi2u44;eJi7oItG;!o2rG;i5uc20;l3rt;mb6nt,r3;e7i2;air,eHlGo43r0K;a8y;at;aFemb0i3Zo3;aHeGi3y;a1nt;te,x;a5Dr0J;act1Yer,le5u1;a13ei3k5PoGyc6;gni2Cnci6rd;ch,li2Bs5N;i1nG;ge,k;aTerSiRlOoMrIuG;b21ll,mp,rGsh;cha1s4Q;ai1eIiEoG;cGdu8greAhibCmi1te7vi2W;eAlaim;di5pa2ss,veE;iEp,rtr46sGur;e,t;aHead,uG;g,n4;n,y;ck,le;fo34mCsi7;ck,iErt4Mss,u1;bJccur,ff0pera9utweIverGwe;co47lap,ta22u1wG;helm;igh;ser3taF;eHotG;e,i8;ed,gle5;aMeLiIoHuG;ltip3Grd0;nit13ve;nHrr12sreprG;eseE;d,g6us;asu2lt,n0Nr4;intaFna4rHtG;ch,t0;ch,kGry;et;aMeLiJoGu1C;aHck,oGve;k,sB;d,n;ft,g35ke,mCnk,st2YveG;!n;a2Fc0Et;b0Nck,uG;gh,nD;iGno34;ck,ll,ss;am,oFuG;d4mp;gno2mQnGss3H;cOdica9flu0MhNsKtIvG;eGol3;nt,st;erGrodu8;a5fe2;i7tG;aGru5;ll;abCibC;lu1Fr1D;agi24pG;lemeEo22ro3;aKeIi2oHuG;nt,rry;n02pe,st;aGlp;d,t;nd6ppBrm,te;aKloAove1PrIuG;arGeAi15;ant39d;aGip,ow,umb6;b,sp;in,th0ze;aReaQiOlMoJrHuncG;ti3J;acGeshB;tu2;cus,lHrG;ce,eca7m,s30;d,l24;a1ZoG;at,od,w;gu2lGni1Xt,x;e,l;r,tu2;il,stBvG;or;a15cho,le5mSnPstNvalua9xG;a0AcLerKi7pGte19;a18eHi2laFoGreA;rt,se;ct,riG;en8;ci1t;el,han4;abGima9;li1J;ab6couXdHfor8ga4han8j03riDsu2t0vG;isi2Vy;!u2;body,er4pG;hasiGow0;ze;a07eUiLoKrHuG;mp;aHeAiG;ft;g,in;d4ubt;ff0p,re5sHvG;iZor8;aKcHliGmiApl1Btingui14;ke;oGuA;uGv0;ra4;gr1YppG;ear,ro3;cOeNfLliv0ma0Fny,pKsHterG;mi0G;cribe,er3iHtrG;oy;gn,re;a0Be0Ai5osC;eGi0By;at,ct;m,pB;iIlHrG;ea1;a2i06;de;ma4n8rGte;e,kB;a0Ae09h06i9l04oJrG;aHeGoAu0Hy;a9dC;ck,ve;llZmSnHok,py,uGv0;gh,nt;cePdu5fMsKtIvG;eGin8;rt,y;aFin0VrG;a7ibu9ol;iGtitu9;d0st;iHoGroE;rm;gu2rm;rn;biLfoKmaJpG;a2laF;in;re;nd;rt;ne;ap1e5;aGip,o1;im,w;aHeG;at,ck,w;llen4n4r4se;a1nt0;ll,ncIrGt0u1;eGry;!en;el;aSePloOoMrIuG;lGry;ly;igHuG;sh;htB;en;a7mb,o7rrGth0un8;ow;ck;ar,lHnefCtrG;ay;ie3ong;ng,se;band0Jc0Bd06ffo05gr04id,l01mu1nYppTrQsKttGvoid,waC;acIeHra5;ct;m0Fnd;h,k;k,sG;eIiHocia9uG;me;gn,st;mb6rt;le;chHgGri3;ue;!i3;eaJlIroG;aDve;ch;aud,y;l,r;noun8sw0tG;icipa9;ce;lHt0;er;e4ow;ee;rd;aRdIju7mCoR;it;st;!reA;ss;cJhie3knowled4tiva9;te;ge;ve;eIouEu1;se;nt;pt;on",Unit:"true¦0:19;a14b12c0Od0Ne0Lf0Gg0Ch09in0Hjoule0k02l00mNnMoLpIqHsqCt7volts,w6y4z3°2µ1;g,s;c,f,n;b,e2;a0Nb,d0Dears old,o1;tt0H;att0b;able4b3d,e2on1sp;!ne0;a2r0D;!l,sp;spo04; ft,uare 1;c0Id0Hf3i0Fkilo0Jm1ya0E;e0Mil1;e0li0H;eet0o0D;t,uart0;ascals,e2i1ou0Pt;c0Mnt0;rcent,t02;hms,uYz;an0JewtT;/s,b,e9g,i3l,m2p1²,³;h,s;!²;!/h,cro5l1;e1li08;! pFs1²;! 1;anEpD;g06s0B;gQter1;! 2s1;! 1;per second;b,i00m,u1x;men0x0;b,elvin0g,ilo2m1nR;!/h,ph,²;byZgXmeter1;! p2s1;! p1;er1; hour;e1g,r0z;ct1rtz0;aXogQ;al2b,igAra1;in0m0;!l1;on0;a4emtPl2t1;²,³; oz,uid ou1;nce0;hrenheit0rad0;b,x1;abyH;eciCg,l,mA;arat0eAg,m9oulomb0u1;bic 1p0;c5d4fo3i2meAya1;rd0;nch0;ot0;eci2;enti1;me4;!²,³;lsius0nti1;g2li1me1;ter0;ram0;bl,y1;te0;c4tt1;os1;eco1;nd0;re0;!s",Organization:"true¦0:46;a3Ab2Qc2Ad21e1Xf1Tg1Lh1Gi1Dj19k17l13m0Sn0Go0Dp07qu06rZsStFuBv8w3y1;amaha,m0Xou1w0X;gov,tu2S;a3e1orld trade organizati41;lls fargo,st1;fie22inghou16;l1rner br3D;-m11gree31l street journ25m11;an halNeriz3Wisa,o1;dafo2Gl1;kswagLvo;bs,kip,n2ps,s1;a tod2Rps;es35i1;lev2Xted natio2Uv; mobi2Kaco bePd bMeAgi frida9h3im horto2Tmz,o1witt2W;shiba,y1;ota,s r Y;e 1in lizzy;b3carpen33daily ma2Xguess w2holli0rolling st1Ms1w2;mashing pumpki2Ouprem0;ho;ea1lack eyed pe3Fyrds;ch bo1tl0;ys;l2s1;co,la m12;efoni07us;a6e4ieme2Gnp,o2pice gir5ta1ubaru;rbucks,to2N;ny,undgard1;en;a2Rx pisto1;ls;few25insbu26msu1X;.e.m.,adiohead,b6e3oyal 1yan2X;b1dutch she4;ank;/max,aders dige1Ed 1vl32;bu1c1Uhot chili peppe2Klobst28;ll;c,s;ant2Vizno2F;an5bs,e3fiz24hilip morrBi2r1;emier27octer & gamb1Rudenti14;nk floyd,zza hut;psi28tro1uge08;br2Qchina,n2Q; 2ason1Xda2G;ld navy,pec,range juli2xf1;am;us;a9b8e5fl,h4i3o1sa,wa;kia,tre dame,vart1;is;ke,ntendo,ss0K;l,s;c,st1Etflix,w1; 1sweek;kids on the block,york08;a,c;nd1Us2t1;ional aca2Fo,we0Q;a,cYd0O;aAcdonald9e5i3lb,o1tv,yspace;b1Nnsanto,ody blu0t1;ley crue,or0O;crosoft,t1;as,subisO;dica3rcedes2talli1;ca;!-benz;id,re;'s,s;c's milk,tt13z1Y;'ore09a3e1g,ittle caesa1Ktd;novo,x1;is,mark; pres5-z-boy,bour party;atv,fc,kk,m1od1K;art;iffy lu0Lo3pmorgan1sa;! cha1;se;hnson & johns1Sy d1R;bm,hop,n1tv;c,g,te1;l,rpol; & m,asbro,ewlett-packaTi3o1sbc,yundai;me dep1n1J;ot;tac1zbollah;hi;eneral 6hq,l5mb,o2reen d0Iu1;cci,ns n ros0;ldman sachs,o1;dye1g0B;ar;axo smith kliZencore;electr0Im1;oto0V;a3bi,da,edex,i1leetwood mac,oGrito-l0A;at,nancial1restoV; tim0;cebook,nnie mae;b06sa,u3xxon1; m1m1;ob0H;!rosceptics;aiml0Ae5isney,o3u1;nkin donuts,po0Wran dur1;an;j,w j1;on0;a,f leppa3ll,p2r spiegZstiny's chi1;ld;eche mode,t;rd;aEbc,hBi9nn,o3r1;aigsli5eedence clearwater reviv1ossra05;al;!ca c5l4m1o0Ast05;ca2p1;aq;st;dplMgate;ola;a,sco1tigroup;! systems;ev2i1;ck fil-a,na daily;r0Hy;dbury,pital o1rl's jr;ne;aGbc,eCfAl6mw,ni,o2p,r1;exiteeWos;ei3mbardiJston 1;glo1pizza;be;ng;ack & deckFo2ue c1;roX;ckbuster video,omingda1;le; g1g1;oodriN;cht3e ge0n & jer2rkshire hathaw1;ay;ryH;el;nana republ3s1xt5y5;f,kin robbi1;ns;ic;bXcSdidRerosmith,ig,lLmFnheuser-busEol,ppleAr7s3t&t,v2y1;er;is,on;hland2s1;n,ociated F; o1;il;by4g2m1;co;os; compu2bee1;'s;te1;rs;ch;c,d,erican3t1;!r1;ak; ex1;pre1;ss; 4catel2t1;air;!-luce1;nt;jazeera,qae1;da;as;/dc,a3er,t1;ivisi1;on;demy of scienc0;es;ba,c",Demonym:"true¦0:16;1:13;a0Wb0Nc0Cd0Ae09f07g04h02iYjVkTlPmLnIomHpDqatari,rBs7t5u4v3wel0Rz2;am0Fimbabwe0;enezuel0ietnam0H;g9krai1;aiwThai,rinida0Iu2;ni0Qrkmen;a4cot0Ke3ingapoOlovak,oma0Tpa05udRw2y0X;edi0Kiss;negal0Br08;mo0uU;o6us0Lw2;and0;a3eru0Hhilipp0Po2;li0Ertugu06;kist3lesti1na2raguay0;ma1;ani;amiZi2orweP;caragu0geri2;an,en;a3ex0Mo2;ngo0Erocc0;cedo1la2;gasy,y08;a4eb9i2;b2thua1;e0Dy0;o,t02;azakh,eny0o2uwaiti;re0;a2orda1;ma0Bp2;anN;celandic,nd4r2sraeli,ta02vo06;a2iT;ni0qi;i0oneV;aiDin2ondur0unN;di;amDe2hanai0reek,uatemal0;or2rm0;gi0;i2ren7;lipino,n4;cuadoVgyp6ngliJsto1thiopi0urope0;a2ominXut4;niH;a9h6o4roa3ub0ze2;ch;ti0;lom2ngol5;bi0;a6i2;le0n2;ese;lifor1m2na3;bo2eroo1;di0;angladeshi,el8o6r3ul2;gaG;aziBi2;ti2;sh;li2s1;vi0;aru2gi0;si0;fAl7merBngol0r5si0us2;sie,tr2;a2i0;li0;gent2me1;ine;ba1ge2;ri0;ni0;gh0r2;ic0;an",Possessive:"true¦anyAh5its,m3noCo1sometBthe0yo1;ir1mselves;ur0;!s;i8y0;!se4;er1i0;mse2s;!s0;!e0;lf;o1t0;hing;ne",Currency:"true¦$,aud,bScQdLeurKfJgbp,hkd,iIjpy,kGlEp8r7s3usd,x2y1z0¢,£,¥,ден,лв,руб,฿,₡,₨,€,₭,﷼;lotySł;en,uanR;af,of;h0t5;e0il5;k0q0;elM;iel,oubleLp,upeeL;e2ound st0;er0;lingI;n0soH;ceGn0;ies,y;e0i8;i,mpi7;n,r0wanzaCyatC;!onaBw;ls,nr;ori7ranc9;!o8;en3i2kk,o0;b0ll2;ra5;me4n0rham4;ar3;ad,e0ny;nt1;aht,itcoin0;!s",City:"true¦0:73;1:61;2:6G;3:5U;4:5R;a68b54c4Id4Ae46f3Yg3Jh38i2Zj2Uk2Dl22m1Kn19o16p0Uq0Sr0Ls01tPuOvLwDxiBy9z5;a7h5i4Muri4O;a5e5ongsh0;ng3J;greb,nzib5G;ang2e5okoha3Uunfu;katerin3Jrev0;a5n0O;m5Hn;arsBeAi6roclBu5;h0xi,zh5P;c7n5;d5nipeg,terth4;hoek,s1K;hi5Zkl3C;l63xford;aw;a6ern2i5ladivost5Molgogr6K;en3lni6R;lenc6Dncouv2Yr3ughn;lan bat1Drumqi,trecht;aDbilisi,eCheBi9o8r7u5;l21n63r5;in,ku;ipoli,ondh62;kyo,m34ron1QulouS;an5jua3l2Zmisoa6Era3;j4Xshui; hag65ssaloni2L;gucigal28hr0l av1W;briz,i6llinn,mpe5Ang5rtu,shk2X;i2Msh0;an,chu1n0p2Iyu0;aEeDh8kopje,owe1It7u5ydney;ra5zh51;ba0Jt;aten is59ockholm,rasbou6Auttga31;an8e6i5;jiazhua1llo1m60y0;f54n5;ya1zh4L;gh3Ot4U;att4Ao1Yv49;cramen18int DlBn5o paulo,ppo3Wrajevo; 7aa,t5;a 5ia3Io domin3I;a3fe,m1O;antonCdie3Gfrancisco,j5ped3Ssalv8;o5u0;se;em,v5z2B;ad0I;lou59peters29;aAe9i7o5;me,sar5t5A;io;ga,o5yadh;! de janei3I;cife,ykjavik;b4Uip4lei2Mnc2Swalpindi;ingdao,u5;ez2i0Q;aEeDhCiBo8r7u6yong5;ya1;eb5Aya1;ag54etor53;rt5zn0; 5la4Fo;au prin0Nelizabe29sa05;ls3Srae5Ctts2B;iladelph4Ynom pe1Doenix;r26tah tik3I;ler00naji,r4Pt5;na,r36;ak47des0Lm1Rr6s5ttawa;a3Ylo;an,d07;a8ew6i5ovosibir1Oyc;ng2Hs; 5cast39;del27orlea46taip16york;g8iro4Xn5pl2Zshv36v0;ch6ji1t5;es,o1;a1o1;a6o5p4;ya;no,sa0Y;aFeCi9o6u5;mb2Cni28sc40;gadishu,nt6s5;c17ul;evideo,re31;ami,l6n18s5;kolc,sissauga;an,waukee;cca,d5lbour2Pmph41;an,ell5i3;in,ín;cau,drAkass2Tl9n8r5shh4A;aca6ib5rakesh,se2N;or;i1Ty;a4EchEdal12i47;mo;id;aCeiAi8o6u5vRy2;anLckn0Rdhia3;n5s angel28;d2g bea1O;brev2De3Kma5nz,sb2verpo2A;!ss29;c5pzig;est0C; p6g5ho2Yn0Gusan27;os;az,la35;aHharFiClaipeBo9rak0Hu7y5;iv,o5;to;ala lump4n5;mi1sh0;be,hi0Llka2Zpavog4si5wlo2;ce;da;ev,n5rkuk;gSsha5;sa;k5toum;iv;bIdu3llakuric0Tmpa3Gn6ohsiu1ra5un1Lwaguc0T;c0Sj;d5o,p4;ah1Vy;a7e6i5ohannesZ;l1Xn0;dd37rusalem;ip4k5;ar2J;bad0mph1QnBrkutYs8ta01z5̇zm7;m6tapala5;pa;ir;fah0l6tanb5;ul;am2Zi2I;che2d5;ianap2Lo21;aBe8o5yder2W; chi mi6ms,nolulu,u5;st2;nh;f6lsin5rakli2;ki;ei;ifa,lifax,m7n5rb1Dva3;gAnov5oi;er;bu2Wilt2;aFdanEenDhCiPlasgBo9raz,u5;a5jr21;dal6ng5yaquil;zh1H;aja2Lupe;ld coa18then5;bu2P;ow;ent;e0Toa;sk;lw7n5za;dhi5gt1C;nag0S;ay;aisal26es,o8r6ukuya5;ma;ankfu5esno;rt;rt5sh0; wor6ale5;za;th;d5indhov0Nl paso;in5mont2;bur5;gh;aAe8ha0Visp4o7resd0Ju5;b5esseldorf,rb0shanbe;ai,l0G;ha,nggu0rtmu11;hradRl5troit;hi;donghHe5k08li0masc1Xr es sala1HugavpiY;gu,je2;aKebu,hAo5raio03uriti1P;lo7n6penhag0Ar5;do1Nk;akLst0V;gVm5;bo;aBen8i6ongqi1ristchur5;ch;ang m7ca5ttago1;go;g6n5;ai;du,zho1;n5ttogr12;digarh,g5;ch8sha,zh06;i9lga8mayenJn6pe town,r5;acCdiff;ber18c5;un;ry;ro;aUeMhJirmingh0ToIr9u5;chareRdapeRenos air7r5s0tu0;g5sa;as;es;a9is6usse5;ls;ba6t5;ol;ne;sil0Mtisla7zzav5;il5;le;va;goZst2;op6ubaneshw5;ar;al;iBl9ng8r5;g6l5n;in;en;aluru,hazi;fa5grade,o horizonte;st;ji1rut;ghd0BkGnAot9r7s6yan n4;ur;el,r07;celo3ranquil09;na;ou;du1g6ja lu5;ka;alo6k5;ok;re;ng;ers5u;field;a04b01cc00ddis abaZgartaYhmedWizawl,lQmNnHqaZrEsBt7uck5;la5;nd;he7l5;an5;ta;ns;h5unci2;dod,gab5;at;li5;ngt2;on;a6chora5kaNtwerp;ge;h7p5;ol5;is;eim;aravati,m0s5;terd5;am; 8buquerq7e5giers,maty;ppo,xandr5;ia;ue;basrah al qadim5mawsil al jadid5;ah;ab5;ad;la;ba;ra;idj0u dha5;bi;an;lbo6rh5;us;rg",Country:"true¦0:39;1:2M;a2Xb2Ec22d1Ye1Sf1Mg1Ch1Ai14j12k0Zl0Um0Gn05om3DpZqat1KrXsKtCu6v4wal3yemTz2;a25imbabwe;es,lis and futu2Y;a2enezue32ietnam;nuatu,tican city;.5gTkraiZnited 3ruXs2zbeE;a,sr;arab emirat0Kkingdom,states2;! of am2Y;k.,s.2; 28a.;a7haBimor-les0Bo6rinidad4u2;nis0rk2valu;ey,me2Ys and caic1U; and 2-2;toba1K;go,kel0Znga;iw2Wji2nz2S;ki2U;aCcotl1eBi8lov7o5pa2Cri lanka,u4w2yr0;az2ed9itzerl1;il1;d2Rriname;lomon1Wmal0uth 2;afr2JkLsud2P;ak0en0;erra leoEn2;gapo1Xt maart2;en;negKrb0ychellY;int 2moa,n marino,udi arab0;hele25luc0mart20;epublic of ir0Dom2Duss0w2;an26;a3eHhilippinTitcairn1Lo2uerto riM;l1rtugE;ki2Cl3nama,pua new0Ura2;gu6;au,esti2;ne;aAe8i6or2;folk1Hth3w2;ay; k2ern mariana1C;or0N;caragua,ger2ue;!ia;p2ther19w zeal1;al;mib0u2;ru;a6exi5icro0Ao2yanm05;ldova,n2roc4zamb9;a3gol0t2;enegro,serrat;co;c9dagasc00l6r4urit3yot2;te;an0i15;shall0Wtin2;ique;a3div2i,ta;es;wi,ys0;ao,ed01;a5e4i2uxembourg;b2echtenste11thu1F;er0ya;ban0Hsotho;os,tv0;azakh1Ee3iriba03o2uwait,yrgyz1E;rWsovo;eling0Jnya;a2erF;ma15p1B;c6nd5r3s2taly,vory coast;le of m19rael;a2el1;n,q;ia,oI;el1;aiSon2ungary;dur0Mg kong;aAermany,ha0Pibralt9re7u2;a5ern4inea2ya0O;!-biss2;au;sey;deloupe,m,tema0P;e2na0M;ce,nl1;ar;bTmb0;a6i5r2;ance,ench 2;guia0Dpoly2;nes0;ji,nl1;lklandTroeT;ast tim6cu5gypt,l salv5ngl1quatorial3ritr4st2thiop0;on0; guin2;ea;ad2;or;enmark,jibou4ominica3r con2;go;!n B;ti;aAentral african 9h7o4roat0u3yprQzech2; 8ia;ba,racao;c3lo2morPngo-brazzaville,okFsta r03te d'ivoiK;mb0;osD;i2ristmasF;le,na;republic;m2naTpe verde,yman9;bod0ero2;on;aFeChut00o8r4u2;lgar0r2;kina faso,ma,undi;azil,itish 2unei;virgin2; is2;lands;liv0nai4snia and herzegoviGtswaGuvet2; isl1;and;re;l2n7rmuF;ar2gium,ize;us;h3ngladesh,rbad2;os;am3ra2;in;as;fghaFlCmAn5r3ustr2zerbaijH;al0ia;genti2men0uba;na;dorra,g4t2;arct6igua and barbu2;da;o2uil2;la;er2;ica;b2ger0;an0;ia;ni2;st2;an",Region:"true¦0:2M;1:2S;2:2J;a2Pb2Cc1Yd1Tes1Sf1Qg1Kh1Gi1Bj17k12l0Zm0On07o05pZqWrTsKtFuCv9w5y3zacatec2T;akut0o0Du3;cat2k07;a4est 3isconsin,yomi1L;bengal,vi6;rwick2Ashington3;! dc;er4i3;rgin0;acruz,mont;dmurt0t3;ah,tar3; 2Ka0W;a5e4laxca1Qripu1Wu3;scaDva;langa1nnessee,x2E;bas0Um3smNtar24;aulip2Cil nadu;a8i6o4taf10u3ylh1E;ffYrr03s19;me1Bno1Puth 3;cVdU;ber0c3kkim,naloa;hu2ily;n4skatchew2xo3;ny; luis potosi,ta catari1;a3hode9;j3ngp06;asth2shahi;ingh24u3;e3intana roo;bec,en5reta0Q;ara7e5rince edward3unjab; i3;sl0A;i,nnsylv3rnambu0A;an0;!na;axa0Xdisha,h3klaho1Zntar3reg6ss0Ax0F;io;aIeDo5u3;evo le3nav0V;on;r3tt16va scot0;f8mandy,th3; 3ampton15;c5d4yo3;rk13;ako1M;aroli1;olk;bras1Lva0Bw3; 4foundland3;! and labrador;brunswick,hamp0Wjers3mexiRyork state;ey;galOyarit;a9eghala0Mi5o3;nta1r3;dov0elos;ch5dlanCn4ss3zor11;issippi,ouri;as geraOneso18;ig2oac2;dhy12harasht0Gine,ni4r3ssachusetts;anhao,i el,ylF;p3toba;ur;anca0Ie3incoln0IouisH;e3iR;ds;a5e4h3omi;aka06ul1;ntucky,ra01;bardino,lmyk0ns0Qr3;achay,el0nata0X;alis5har3iangxi;kh3;and;co;daho,llino6n3owa;d4gush3;et0;ia1;is;a5ert4i3un2;dalFm0D;fordZ;mpYrya1waii;ansu,eorg0lou7oa,u3;an4erre3izhou,jarat;ro;ajuato,gdo3;ng;cesterS;lori3uji2;da;sex;ageTe6o4uran3;go;rs3;et;lawaLrbyK;aEeaDh8o3rimea ,umbr0;ahui6l5nnectic4rsi3ventry;ca;ut;i02orado;la;e4hattisgarh,i3uvash0;apQhuahua;chn4rke3;ss0;ya;ra;lFm3;bridge6peche;a8ihar,r7u3;ck3ryat0;ingham3;shi3;re;emen,itish columb0;h0ja cal7lk6s3v6;hkorto3que;st2;an;ar0;iforn0;ia;dygea,guascalientes,lAndhr8r4ss3;am;izo1kans4un3;achal 6;as;na;a 3;pradesh;a5ber4t3;ai;ta;ba4s3;ka;ma",Place:"true¦a0Eb0Bc04d03e02f00gVhUiRjfk,kOlMmJneGoFpBque,rd,s9t6u5v4w1y0;akutOyz;ake isFis1y0;!o;!c;a,ostok,t;laanbaatar,p02safa,t;ahiti,e1he 0;bronx,hamptons;nn,x;a0fo,oho,t,under7yd;khalNsk;a2e1h0itcairn;l,x;k,nnN;!cif04;kla,nt,rd;b1w eng0;land;!r;a1co,i0t,uc;dNnn;gadZlibu,nhattZ;a0gw,hr;s,x;an1osrae,rasnoyar0ul;sk;!s;a1cn,da,nd0st;ianRochina;!x;arlem,kg,nd,oHwy;a3re0;at 0enwich;brita0lakH;in;!y village;co,l0ra;!a;urope,vergladC;ak,en,fw,ist,own4xb;al5dg,gk,h2l1o0rA;lo,nn;!t;a1ina0uuk;town;morro,tham;!if;cn,e1kk,l0rooklyn;vd;l air,verly hills;frica,lta,m7n3r2sia,tl1ve,zor0;es;!ant2;ct1iz;adyr,tarct0;ic0; oce0;an;ericas,s",MaleName:"true¦0:E5;1:D6;2:DO;3:AY;4:D2;5:CG;6:B6;7:CW;8:C8;9:DK;A:DL;B:A6;C:C2;aCObBLcAJd9He8Nf85g7Ih6Ui6Ej5Ek52l4Dm35n2To2Np2Fqu2Dr1Ls11t0Eu0Dv07wTxSyIzD;aDor0;cDh9Tkaria,n5W;hEkD;!aCM;ar5WeCL;aLoFuD;sDu2KvBY;if,uf;nFsEusD;ouf,sD;ef;aDg;s,tD;an,h0;hli,nBMssX;avi3ho4;aMeKiFoDyaC2;jcie8Clfgang,odrow,utD;!er;lDnst1;bFey,frD1lD;aBDiD;am,e,s;e9Fur;i,nde6sD;!l8t1;de,lErrAyD;l1ne;lDt3;aAAy;aGiDladimir,ojte7Z;cEha0kt69nceDrgAJva0;!nt;e3Vt67;lentDnA5;in4Y;ghBVlyss5Cnax,sm0;aXeShOiMoHrFuEyD;!l3ro7s1;n9r5C;avAWeDist0oy,um0;ntAOv5Zy;bGdFmDny;!as,mDoharu;aCTie,y;!d;iBy;mDt5;!my,othy;adFeoEia8GomD;!as;!do8P;!de5;dGrD;en9LrD;an9KeDy;ll,n9J;!dy;dgh,ha,iDnn3req,tsu4T;cB5ka;aTcotRePhLiJoHpenc3tDur1Vylve9Kzym1;anFeDua8D;f0phBTvDwa8C;e62ie;!islaw,l8;lom1nBFuD;leyma7ta;dDlBm1yabonga;!dhart7Bn8;aFeD;lDrm0;d1t1;h7Une,qu10un,wn,y7;aDbasti0k2Al4Rrg4Oth,ymoAU;m5n;!tD;!ie,y;lEmDnti2Eq5Bul;!ke5MmCu4;ik,vato7X;aYeUheAAiQoHuEyD;an,ou;b7NdEf5pe7SssD;!elBZ;ol3Fy;an,bKcJdIel,geHh0landBQmGnFry,sEyD;!ce;coe,s;!aAHnC;an,eo;l47r;e5Og3n8olfo,ri7A;co,ky;bCeB7;cDl8;ar6Pc6OhEkDo;!ey,ie,y;a99ie;gEid,ubAx,yDza;an1InY;gA8iD;naA4s;ch70fa4lHmGndFpha4sEul,wi2HyD;an,mo82;h7Vm5;alBDol2Uy;iATon;f,ph;ent2inD;cy,t1;aIeGhilFier72ol,rD;aka16eD;m,st1;!ip,lip;dALrcy,tD;ar,e3Gr1X;b4Kdra7Ft4ZulD;!o17;ctav3Fi3liv3mAFndrej,rHsEtDum9wA;is,to;aEc9k9m0vD;al5Z;ma;i,l53vL;aLeJiFoDu3A;aDel,j5l0ma0r3K;h,m;cEg4i49kD;!au,h7Uola;holBkDolB;!olB;al,d,il,ls1vD;il8Y;hom,thD;anDy;!a4i4;aZeWiMoHuEyD;l2Jr1;hamEr6XstaD;fa,p5C;ed,mH;di0We,hamFis2FntEsDussa;es,he;e,y;ad,ed,mD;ad,ed;cIgu4hai,kGlFnEtchD;!e6;a8Aik;house,o0Bt1;ae5YeA4olD;aj;ah,hDk8;aEeD;al,l;el,l;hElv2rD;le,ri6v2;di,met;ay0ck,hTjd,ks2DlRmadWnQrKs1tFuricExD;!imilian9Nwe6;e,io;eGhEiBtDus,yB;!eo,hew,ia;eDis;us,w;j,o;cHio,kGlFqu7Dsha6tDv2;iDy;!m,n;in,on;!el,oPus;!el9IoOus;iGu4;achDcolm,ik;ai,y;amEdi,eDmoud;sh;adDm5T;ou;aXeQiOlo3EoKuEyD;le,nd1;cGiFkDth3uk;aDe;!s;gi,s,z;as,iaD;no;g0nn7SrenFuDv8Jwe6;!iD;e,s;!zo;am,oD;n4r;a8Cevi,la5JnIoGst3thaFvD;eDi;nte;bo;!nD;!a6Sel;!ny;mFnErDur5Hwr5H;ry,s;ce,d1;ar,o5A;aLeGhaled,iDrist5Iu4Vy6X;er0p,rD;by,k,ollD;os;en0iGnDrmit,v44;!dEnDt5Z;e1Ay;a6ri59;r,th;cp3j5m66na73rEsp9them,uD;ri;im,l;a02eUiSoGuD;an,lDst2;en,iD;an,en,o,us;aNeLhnKkubBnIrGsD;eEhDi8Bue;!ua;!ph;dDge;an,i,on;!aDny;h,s,th5I;!ath5Hie,nC;!l,sDy;ph;o,qu2;an,mD;!mC;d,ffIrFsD;sDus;!e;a6BemEmai7oDry;me,ni0Y;i7Ty;!e60rD;ey,y;cKdAkImHrFsEvi3yD;!dAs1;on,p3;ed,od,rDv56;e5Nod;al,es4Xis1;a,e,oDub;b,v;k,ob,quD;es;aWbQchiPgNkeMlija,nuLonut,rJsFtDv0;ai,suD;ki;aEha0i7DmaDsac;el,il;ac,iaD;h,s;a,vinDw2;!g;k,nngu5S;!r;nacDor;io;ka;ai,rahD;im;aPeJoIuDyd9;be2KgGmber4WsD;eyEsD;a2e2;in,n;h,o;m3ra3Gsse2wa4B;aHctGitGnrErD;be2Dm0;iDy;!q11;or;th;bMlLmza,nKo,rFsEyD;a4JdA;an,s0;lGo50rFuDv8;hi4Gki,tD;a,o;is1y;an,ey;k,s;!im;ib;aVeRiPlenOoLrHuD;ilEsD;!tavo;herme,lerD;mo;aFegDov3;!g,orD;io,y;dy,h5Wnt;nzaErD;an,d1;lo;!n;lbe5Ano,oD;rg3Hvan5A;ne,oFrD;aDry;ld,rd5H;ffr8rge;brElArDv2;la28r3Sth,y;e3EielD;!i5;aTePiNlLorr0NrD;anFedDitz;!dCeDri2B;ri2A;cFkD;!ie,lD;in,yn;esLisD;!co,z36;etch3oD;yd;d4lDnn,onn;ip;deriFliEng,rnD;an06;pe,x;co;bi0di,hd;ar04dZfrYit0lSmKnHo2rFsteb0th0uge7vDymAzra;an,eD;ns,re36;gi,i0DnDrol,v2w2;est4Pie;oEriqDzo;ue;ch;aJerIiEmD;aIe2Z;lErD;!h0;!iD;o,s;s1y;nu4;be0Cd1iGliFmEt1viDwood;n,s;er,o;ot1Ys;!as,j4NsD;ha;a2en;!dCg9mGoEuEwD;a2Din;arD;do;o0Wu0W;l,nD;est;a01eRiOoHrGuFwEylD;an,l0;ay7ight;a7dl8nc0st2;ag0ew;minGnEri0ugDvydBy2D;!lB;!a2MnDov0;e6ie,y;go,iDykB;cDk;!k;armuEeDll1on,rk;go;id;anKj0lbeJmetri5nHon,rGsFvEwDxt3;ay7ey;en,in;hawn,mo0B;ek,ri0I;is,nDv3;is,y;rt;!dD;re;an,lNmLnKrGvD;e,iD;! lucDd;as,ca;en,iFne6rDyl;eDin,yl;l3Bn;n,o,us;!e,i4ny;iDon;an,en,on;e,lB;as;a09e07hYiar0lNoIrGuEyrD;il,us;rtD;!is;aDistob0U;ig;dy,lGnErD;ey,neli5y;or,rD;ad;by,e,in,l2t1;aIeFiDyK;fDnt;fo0Ft1;meEt5velaD;nd;nt;rFuEyD;!t1;de;enD;ce;aIeGrisEuD;ck;!tD;i0oph3;st3;er;d,rDs;b4leD;s,y;cDdric,s9;il;lGmer1rD;ey,lEro6y;ll;!os,t1;eb,v2;a07eZiVlaUoRrEuDyr1;ddy,rtK;aLeGiFuEyD;an,ce,on;ce,no;an,ce;nEtD;!t;dEtD;!on;an,on;dEndD;en,on;!foDl8y;rd;bErDyd;is;!by;i7ke;bFlEshD;al;al,lC;ek;nHrDshoi;at,nEtD;!r1C;aDie;rd14;!edict,iEjam2nC;ie,y;to;kaMlazs,nHrD;n8rDt;eDy;tt;ey;dDeE;ar,iD;le;ar17b0Vd0Rf0Pgust2hm0Mi0Jja0Il04m00nSputsiRrIsaHuFveEyDziz;a0kh0;ry;gust5st2;us;hi;aKchJiIjun,maHnFon,tDy0;hDu09;ur;av,oD;ld;an,nd0H;!el,ki;ie;ta;aq;as,dIgel0CtD;hoGoD;i7nD;!i09y;ne;ny;er,reDy;!as,i,s,w;iFmaDos;nu4r;el;ne,r,t;an,bePdAeJfHi,lGonFphXt1vD;aNin;on;so,zo;an,en;onTrD;edU;c,jaGksandFssaGxD;!andD;er,ru;ar,er;ndD;ro;rtN;ni;dAm9;ar;en;ad,eD;d,t;in;onD;so;aEi,olfDri0vik;!o;mDn;!a;dHeGraEuD;!bakr,lfazl;hDm;am;!l;allIelFoulaye,ulD;!lDrF;ah,o;! rD;ahm0;an;ah;av,on",LastName:"true¦0:9F;1:9V;2:9H;3:9X;4:9N;5:8J;6:9K;7:A0;8:9E;9:88;A:6E;B:77;C:6J;a9Ub8Lc7Kd6Xe6Rf6Dg5Vh58i54j4Pk45l3Nm2Rn2Eo26p1Nquispe,r17s0Ft05vVwOxNyGzD;aytsADhD;aDou,u;ng,o;aGeun7ZiDoshiA9un;!lD;diDmaz;rim,z;maDng;da,guc97mo6UsDzaB;aBhiA7;iao,u;aHeGiEoDright,u;jc8Sng;lDmm0nkl0sniewsB;liA1s3;b0iss,lt0;a5Rgn0lDng,tanabe;k0sh;aHeGiEoDukA;lk5roby5;dAllalDnogr2Zr0Zss0val37;ba,obos;lasEsel7N;lGn dFrg8EsEzD;qu7;ily9Oqu7silj9O;en b35ijk,yk;enzue95verde;aLeix1JhHi4j6ka3IoGrFsui,uD;om4ZrD;c4n0un1;an,embl8TynisB;dor95lst31m2rr9th;at5Mi7LoD;mErD;are6Ylaci64;ps3s0Y;hirAkah8Dnaka;a00chWeThPiNmKoItFuEvDzabo;en8Aobod34;ar7bot2lliv4zuB;aEein0oD;i67j3Lyan8V;l6rm0;kol5lovy5re6Psa,to,uD;ng,sa;iDy5Z;rn5tD;!h;l5YmDngh,rbu;mo6Do6J;aFeDimizu;hu,vchD;en7Cuk;la,r17;gu8mDoh,pulve8Trra4R;jDyD;on5;evi6Filtz,miDneid0roed0ulz,warz;dEtD;!z;!t;ar42h6ito,lFnDr2saBto,v2;ch7d0AtDz;a4Pe,os;as,ihAm3Zo0Q;aOeNiKoGuEyD;a66oo,u;bio,iz,sD;so,u;bEc7Bdrigue57g03j73mDosevelt,ssi,ta7Nux,w3Z;a4Be0O;ertsDins3;!on;bei0LcEes,vDzzo;as,e8;ci,hards3;ag4es,it0ut0y9;dFmEnDsmu7Zv5F;tan1;ir7os;ic,u;aSeLhJiGoErDut6;asad,if5Zochazk1W;lishc24pDrti62u55we66;e2Tov48;cEe09nD;as,to;as60hl0;aDillips;k,m,n5K;de3AetIna,rGtD;ersErovDtersC;!a,ic;en,on;eDic,ry,ss3;i8ra,tz,z;ers;h71k,rk0tEvD;ic,l3T;el,t2O;bJconnor,g2ClGnei5PrEzD;demir,turk;ella3MtDwe5N;ega,iz;iDof6GsC;vDyn1F;ei8;aPri1;aLeJguy1iFoDune44ym4;rodahl,vDwak;ak3Uik5otn56;eEkolDlsCx3;ic,ov6X;ls1miD;!n1;ils3mD;co42ec;gy,kaEray4varD;ro;jiDmu8shiD;ma;aXcVeQiPoIuD;lGnFrDssoli5T;atDpUr68;i,ov2;oz,te4B;d0l0;h4lIo0HrEsDza0Z;er,s;aFeEiDoz5r3Ete4B;!n6F;au,i8no,t4M;!l9;i2Rl0;crac5Ohhail5kke3Qll0;hmeGij0j2ElFndErci0ssiDyer19;!er;e3Bo2Z;n0Io;dAti;cartDlaughl6;hy;dMe6Dgnu5Ei0jer34kLmJnci59rFtEyD;er,r;ei,ic,su1N;iEkAqu9roqu6tinD;ez,s;a54c,nD;!o;a52mD;ad5;e5Oin1;rig4Ns1;aSeMiIoGuEyD;!nch;k2nDo;d,gu;mbarDpe2Rvr2;di;!nDu,yana1R;coln,dD;bDholm;erg;bed5TfeGhtFitn0kaEn6rDw2G;oy;!j;in1on1;bvDvD;re;iDmmy,rsCu,voie;ne,t11;aTennedy,h4iSlQnez46oJrGuEvar4woD;k,n;cerDmar58znets5;a,o2G;aDem0i2Zyeziu;sni3PvD;ch3U;bay4Frh0Jsk0TvaFwalDzl5;czDsB;yk;cFlD;!cDen3Q;huk;!ev2ic,s;e6uiveD;rt;eff0l2mu8nnun1;hn,lloe,minsBrEstra31to,ur,yDzl5;a,s0;j0GlsC;aMenLha2Pim0QoEuD;ng,r2;e2JhFnErge2Ju2NvD;anA;es,ss3;anEnsD;en,on,t3;nesDsC;en,s1;ki26s1;cGkob3RnsDrv06;en,sD;enDon;!s;ks3obs1;brahimAglesi3Ake4Ll0CnoZoneFshikEto,vanoD;u,v4A;awa;scu;aPeIitchcock,jaltal6oFrist46uD;!aDb0gh9ynh;m4ng;a23dz2fEjga2Sk,rDx3B;ak0Yvat;er,fm3B;iGmingw3NnErD;nand7re8;dDriks1;ers3;kkiEnD;on1;la,n1;dz2g1lvoLmJnsCqIrr0SsFuEyD;as36es;g1ng;anEhiD;mo0Q;i,ov08;ue;alaD;in1;rs1;aMeorgLheorghe,iJjonIoGrEuDw3;o,staf2Utierr7zm4;ayDg2iffitUub0;li1G;lub3Rme0JnD;calv9zale0I;aj,i;l,mDordaL;en7;iev3B;gnJlGmaFnd2No,rDs2Nuthi0;cDza;ia;ge;eaElD;agh0i,o;no;e,on;ab0erMiIjeldsted,lor9oGrFuD;cDent9ji3F;hs;an1Wiedm4;ntaDrt6st0urni0;na;lipEsD;ch0;ovD;!ic;hatAnandeVrD;arDei8;a,i;ov2;dHinste6riksCsDva0D;cob2ZpDtra2X;inoDosiM;za;en,s3;er,is3wards;aUeMiKjurhuJoHrisco0YuEvorakD;!oQ;arte,boEmitru,rDt2U;and,ic;is;g4he0Hmingu7n2Ord19tD;to;us;aDmitr29ssanayake;s,z; GbnaFlEmirDrvis1Lvi,w4;!ov2;gado,ic;th;bo0groot,jo03lEsilDvri9;va;a cruz,e3uD;ca;hl,mcevsBnErw6t2EviD;d5es,s;ieDku1S;ls1;ki;a05e00hNiobMlarkLoFrD;ivDuz;elli;h1lGntFop0rDs26x;byn,reD;a,ia;i,rer0O;em4liD;ns;!e;anu;aLeIiu,oGriDuJwe;stD;eDiaD;ns1;i,ng,uFwDy;!dhury;!n,onEuD;ng;!g;kEnDtterjee,v7;!d,g;ma,raboD;rty;bGl09ng2rD;eghetEnD;a,y;ti;an,ota0M;cer9lder3mpbeIrFstDvadi08;iDro;llo;doEt0uDvalho;so;so,zo;ll;es;a09eXhUiSlNoGrFyD;rne,tyD;qi;ank5iem,ooks,yant;gdan5nFruya,su,uchEyHziD;c,n5;ard;darDik;enD;ko;ov;aEondD;al;nEzD;ev2;co;ancRshwD;as;a01oDuiy4;umDwmD;ik;ckNethov1gu,ktLnJrD;gGisFnD;ascoDds1;ni;ha;er,mD;ann;gtDit7nett;ss3;asD;hi;er,ham;b2ch,ez,hMiley,kk0nHrDu0;bEnDua;es,i0;ieDosa;ri;dDik;a8yopadhyD;ay;ra;er;k,ng;ic;cosZdYguilXkhtXlSnJrGsl4yD;aEd6;in;la;aEsl4;an;ujo,ya;dFgelD;ovD;!a;ersGov,reD;aDjL;ss1;en;en,on,s3;on;eksejGiyGmeiFvD;ar7es;ez;da;ev;ar;ams;ta",WeekDay:"true¦fri2mon2s1t0wednesd3;hurs1ues1;aturd1und1;!d0;ay0;!s",Month:"true¦aBdec9feb7j2mar,nov9oct1sep0;!t8;!o8;an3u0;l1n0;!e;!y;!u1;!ru0;ary;!em0;ber;pr1ug0;!ust;!il",Date:"true¦ago,t2week0yesterd4; e0e0;nd;mr2o0;d0morrow;ay;!w",FirstName:"true¦aKblair,cGdevFgabrieEhinaDjBk8l7m3nelly,quinn,re2sh0;ay,e0iloh;a,lby;g6ne;a1el0ina,org5;!okuh9;naia,r0;ion,lo;ashawn,uca;asCe1ir0rE;an;lsAnyat2rry;am0ess6ie,ude;ie,m5;ta;le;an,on;as2h0;arl0eyenne;ie;ey,sidy;lex2ndr1ubr0;ey;a,ea;is",Person:"true¦ashton kutchTbScNdLeJgastOhHinez,jFkEleDmCnettKoBp9r4s3t2v0;a0irgin maH;lentino rossi,n go3;aylor,heresa may,iger woods,yra banks;addam hussain,carlett johanssKlobodan milosevic,uC;ay romano,e3o1ush limbau0;gh;d stewart,nald0;inho,o;ese witherspoFilly;a0ipJ;lmIris hiltD;prah winfrFra;essiaen,itt romnEubarek;bron james,e;anye west,iefer sutherland,obe bryant;aime,effers8k rowli0;ng;alle ber0itlBulk hogan;ry;ff0meril lagasse,zekiel;ie;a0enzel washingt2ick wolf;lt1nte;ar1lint0;on;dinal wols1son0;! palm2;ey;arack obama,rock;er",Verb:"true¦awak9born,cannot,fr8g7h5k3le2m1s0wors9;e8h3;ake sure,sg;ngth6ss6;eep tabs,n0;own;as0e2;!t2;iv1onna;ight0;en",PhrasalVerb:"true¦0:7E;1:72;2:7Q;3:7G;4:6V;5:7T;6:7I;7:6O;8:71;9:6P;A:5T;B:7C;C:7J;D:6Q;E:7L;F:7D;G:7S;H:46;a7Yb6Jc5Sd5Oe5Mf4Lg43h3Miron0j3Ik3Dl2Xm2Ln2Jo2Hp1ZquietDr1Ms0FtVuTvacuum 1wLyammerBzI;eroAip JonI;e0k0;by,up;aOeLhKiJorIrit5H;d 1k35;mp0n2Xpe0r7s7;eel Fip G;aJiIn2L;gh 0Crd0;n Fr 3S;it 60k7lk6rm 6Bsh 7Lt6Ov53;rgeBsI;e 9herA;aXeVhTiPoNrKuIype 68;ckArn I;d2in,o3Vup;aJiIot0y 2L;ckleDp G;ckDde 02;neDp Is4Q;d2o71up;ck KdJe Igh69me0p o0Kre0;aw3ba4d2in,up;e 60y 1;by,oC;ink Irow 6B;ba4ov8up;aIe 4Vll52;m 1r 01;ckBke Jlk I;ov8u53;aIba4d2in,o3Fup;ba4ft8p58w3;a0Nc0Me0Gh0Ci09l05m04n03o02pXquare WtOuMwI;earKiI;ngJtch I;aw3ba4o75; by;ck Iit 1m 1ss0;in,up;aNe10iMoKrIucH;aigh1ZiI;ke 6En3C;p Irm22;by,in,oC;nHr 1tc3V;cHmp0nd Ir6Xve6y 1;ba4d2up;d2oCup;arHeLiKlJrIurB;ingBuc7;a3Hit 47;l16n 1;e5Qll0;be4Prt0;ap 4Row F;ash 5Doke0;eep JiIow 9;c3Yp 1;in,oI;ff,v8;gn 4WngJt Iz7;d2o5up; al52le0;aKoIu4S;ot Iut0w 6B;aw3ba4f3IoC;cHdeAk56ve6;e Mll0nd LtI; Itl4G;d2in,o5upI;!on;aw3ba4d2in,o2Aup;o5to;al4Zout0rap4Z;il6v7;aTeQiPoLuI;b 4Sle0n Istl7;aIba4d2in5Ho3Tt3Bu3R;c29w3;ll Kot JuI;g2Vnd6;a29f32o5;arEin,o5;ng 51p6;aIel6inAnt0;c5Bd I;o33u0L;cHt0;aVeUiTlRoPrMsyc2JuI;ll Kt I;aIba4d2in,o1Rt3Fup;p3Kw3;ap3Jd2in,o5t3Dup;attleBess JiLoI;p 1;ah1Ron;iIp 5Fr3XurDwer 5F;nt0;ay4BuI;gAmp 9;ck Gg0leBn 9p48;el 4JncilA;c41ir 2Rn0ss KtJy I;ba4oC; d2c27;aw3ba4o1C;pIw3W;e3Vt F;arrowDerd0oI;d6teD;aQeNiMoKuI;ddl7lI;l 3I;cHp 1uth6ve I;al3Md2in,o5up;ss0x 1;asur7lJss I;a1Jup;t 9;ke Jn 9rIs1Sx0;k 9ry6;do,o47up;aVeTiOoIuck0;aMc3Gg LoIse0;k Ise3E;aft8ba4d2forw2Jin45ov8uI;nd8p;in,o0Q;d 9;e LghtKnJsIv1Y;ten G;e 1k 1; 1e36;arEd2;av1Mt 36velI; o3T;c7p 1sh ItchBugh6y20;in3To5;eJick6nock I;d2o3P;eIyA;l 2Pp I;aw3ba4d2fXin,o0Bto,up;aKoJuI;ic7mpA;ke30tD;c39zz 1;aUePiMoJuI;nkerDrry 1s0Z;lIneArse2W;d Ie 1;ba4d2fast,o05up;de Jt I;ba4on,up;aw3o5;aIlp0;d Kl 2Ar It 1;fIof;rom;in,oXu1H;cHm 1nJve Iz25;it,to;d Ig 2EkerK;d2in,o5;aWeQive Oloss 22oKrJunI; f0Q;in3Gow 2A; Iof 0Y;aJb1Dit,oIrEt0Su18;ff,n,v8;bo5ft8hOw3;aw3ba4d2in,oIup,w3;ff,n,ut;a1Dek0t I;aJb17d2oIrEup;ff,n,ut,v8;cJhIl1WrEt,w3;ead;ross;d aJnI;g 1;bo5;a0Ce05iWlSoOrKuI;cHel 1;k 1;eJighten IownBy 1;aw3oC;eIshe1N; 1z7;lKol I;aIwi1G;bo5rE;d 9low 1;aJeIip0;sh0;g 9ke0mIrI;e G;gPlNnLrJsIzzle0;h G;e Im 1;aw3ba4up;d0isI;h 1;e Il 19;aw3fN;ht ba4ure0;eNnJsI;s 1;cKd I;fIoC;or;e F;dWl 1;cMll Irm0t0W;ap05bKd2in,oJtI;hrough;ff,ut,v8;a4ehi20;e J;at0dge0nd Iy7;oCup;oKrI;ess 9op I;aw3bUin,o1D; 0Eubl7;aYhVlean 9oIross Fut 10;me LoJuntI; o1T;k 1l I;d2oC;aObNforLin,oKtJuI;nd8;ogeth8;ut,v8;th,wI;ard;a4y;pIrEw3;art;eIipA;ck FeI;r 1;lOncel0rLsKtch JveA; in;o1Cup;h Ft6;ry JvI;e 01;aw3o18;l ImD;aIba4d2o16up;rEw3;a0Ne0El07oYrNuI;bblKcklZil05lk 9ndlZrn 0Bst JtIy Gzz6;t F;in,o5up;e I;ov8;anReaPiIush6;ghMng I;aJba4d2forIin,o5up;th;bo5lIrEw3;ong;teI;n 1;k I;d2in,o5up;ch0;arPgDil 9n7oLssKttlJunce Ix F;aw3ba4;e 9; arE;k Ft 1;e 1;d2up; d2;d 1;aNeed0oIurt0;cKw I;aw3ba4d2o5up;ck;k I;in,oP;ck0nk0st6; oOaLef 1nd I;d2ov8up;er;up;r0t I;d2in,oIup;ff,ut;ff,nI;to;ck Oil0nKrgJsI;h F;ainBe F;g FkB; on;in,o5; o5;aw3d2o5up;ay;cRdNsk Kuction6; oC;ff;arEo5;ouI;nd;d I;d2oIup;ff,n;own;t G;o5up;ut",Modal:"true¦c5lets,m4ought3sh1w0;ill,o5;a0o4;ll,nt;! to,a;ay,ight,ust;an,o0;uld",Adjective:"true¦0:7P;1:84;2:83;3:8A;4:7W;5:5S;6:4N;7:4O;8:58;9:6I;A:81;a6Wb6Gc63d5Je54f4Hg49h3Wi39j37k36l2Vm2Ln2Bo1Wp1Dquack,r12s0Ft07uMvJwByear5;arp0eFholeEiDoB;man5oBu6P;d6Rzy;despr7Ls5S;!sa7;eClBste2A;co1Nl o4W;!k5;aCiBola4M;b89ce versa,ol5H;ca3gabo6Gnilla;ltUnHpCrb5Msu4tterB;!mo7G; Eb1SpDsBti1M;ca7etBide dKtairs;!ti2;er,i3U;f36to da1;aLbeco75convin29deIeHfair,ivers4knGprecedVrEsCwB;iel3Nritt6A;i1XuB;pervis0spec3Y;eBu5;cognHgul6Tl6T;own;ndi2v64xpect0;cid0rB;!grou5ZsB;iz0tood;b7pp0Dssu6UuthorB;iz0;i26ra;aGeEhDi6AoCrB;i1oubl0us3M;geth8p,rp6Vuc67;ough4Wril33;en60l32mpBrr2X;o6Ati2;boo,lBn;ent0;aWcVeThSiQmug,nobbi3LoOpNqueami3LtFuBymb6H;bDi gener5DpBrpri6D;erBre0N;! dup8b,i2C;du0seq52;anda77eGiFrBunni2y3F;aightCiB;ki2p0; fBfB;or5K;ll,r5S;aBreotyp0;dfa6Cmi2;a55ec2Gir1Hlend6Cot on; call0le,mb8phist1XrBu0Vvi48;d6Ary;gnifica3nB;ce51g7;am2Re8ocki2ut;cBda1em5lfi32ni1Wpa6Jre6;o1Er42;at5Gient28reec5G;cr0me;aJeEiCoB;bu60tt51uQy4;ghtBv4;!-2Bf9;ar,bel,condi1du6Dfres5AlEpublic42sCtard0vB;ea26;is4CoB;lu1na3;aQe1Cuc4A;b5TciBllyi2;al,st;aOeLicayu6lac5Ropuli5QrCuB;bl5Jmp0n51;eGiDoB;!b07fu5RmiBp8;ne3si2;mCor,sBva1;ti6;a53e;ci5MmB;a0EiB;er,um;ac20rBti1;feAma2XpleBv38;xi2;rBst;allelDtB;-tiBi4;me;!ed;bLffJkIld fashion0nHpGrg1Eth8utFvB;al,erB;!all,niCt,wB;eiBrouB;ght;do0Ter,g2Qsi4B;en,posi1; boa5Og2Oli6;!ay; gua5MbBli6;eat;eDsB;cBer0Eole1;e6u3O;d2Xse;aJeIiHoBua4X;nFrCtB;ab7;thB;!eB;rn;chala3descri58stop;ght5;arby,cessa44ighbor5xt;k0usia1A;aIeGiDoBultip7;bi7derBl0Vnth5ot,st;a1n;nBx0;dblo0RiaBor;tu37;ande3Qdi4NnaBre;ci2;cBgenta,in,j01keshift,le,mmoth,ny,sculi6;ab33ho;aKeFiCoBu15;uti14vi2;mCteraB;l,te;it0;ftEgBth4;al,eCitiB;ma1;nda3K;!-0C;ngu3Zst,tt8;ap1Xind5no0A;agg0uB;niMstifi0veni7;de4gno4Klleg4mQnEpso 20rB;a1rB;eleBita0J;va3; KaJbr0corIdGfluenQiQnFsEtCviB;go0Fti2;aAen3SoxB;ic3B;a6i2Vul0D;a1er,oce3;iCoB;or;reA;deq3Qppr33;fBsitu,vitro;ro3;mFpB;arDerfeAoBrop8;li1rtB;a3ed;ti4;eBi0S;d2Vn3C;aIeFiDoBumdr3I;ne36ok0rrBs08ur5;if2Z;ghfalut1QspB;an2X;aClB;liYpf9;li2;lEnDrB;d04roB;wi2;dy;f,low0;ainf9ener2Oiga24lHoGraDuB;ilBng ho;ty;cCtB;ef9is;ef9;ne,od;ea2Iob4;aTeNinMlKoFrB;a1VeDoz1MustB;raB;ti2;e2Gq10tf9;oDrB; keeps,eBm8tuna1;g03ign;liB;sh;aBue3;g31tte1P;al,i1;dFmCrB;ti7;a7ini6;ne;le; up;bl0i3l27r Cux,voB;ri1uri1;oBreac1E;ff;aLfficie3lKmHnFreAthere4veExB;aAcess,pe1QtraCuB;be2Nl0E;!va1E;n,ryday; BcouraEti0O;rou1sui1;erCiB;ne3;gi2;abo23dMe17i1;g8sB;t,ygB;oi2;er;aReJiDoBrea14ue;mina3ne,ubB;le,tf9;dact1Bfficu1OsCvB;er1K;creDeas0gruntl0hone1FordCtB;a3ressM;er5;et; HadpGfFgene1PliDrang0spe1PtCvoB;ut;ail0ermin0;be1Mca1ghB;tf9;ia3;an;facto;i5magBngeroUs0G;ed,i2;ly;ertaMhief,ivil,oDrB;aBowd0u0G;mp0vZz0;loImGnCrrBve0P;eAu1I;cre1fu0LgrDsCtB;empo0Dra0E;ta3;ue3;mer08pleB;te,x;ni4ss4;in;aNeIizarHlFoCrB;and new,isk,okN;gCna fiUttom,urgeoB;is;us;ank,indB;!i2;re;autif9hiDloCnBst,yoD;eUt;v0w;nd;ul;ckCnkru0WrrB;en;!wards; priori,b0Mc0Jd09fra08g04h03lYmWntiquVppSrMsIttracti06utheHvEwB;aCkB;wa0T;ke,re;ant garCerB;age;de;ntU;leep,piDsuDtonB;isB;hi2;ri2;ab,bitEroDtiB;fiB;ci4;ga3;raB;ry;are3etiNrB;oprB;ia1;at0;aJuB;si2;arEcohCeBiIl,oof;rt;olB;ic;mi2;ead;ainDgressiConiB;zi2;ve;st;id; IeGuFvB;aCerB;se;nc0;ed;lt;pt,qB;ua1;hoc,infinitB;um;cuCtu4u1;al;ra1;erLlKoIruHsCuB;nda3;e3oCtraA;ct;lu1rbi2;ng;te;pt;aBve;rd;aze,e;ra3;nt",Comparable:"true¦0:41;1:4I;2:45;3:2Y;4:4B;5:3X;a4Ob44c3Od3De35f2Rg2Fh24i1Vj1Uk1Rl1Jm1Dn17o15p0Vqu0Tr0KsTtMuIvFw7y6za13;ell27ou4;aBe9hi1Yi7r6;o4y;ck0Ode,l6n1ry,se;d,y;a6i4Mt;k,ry;n1Tr6sK;m,y;a7e6ulgar;nge5rda2xi4;g9in,st;g0n6pco3Mse5;like0t6;i1r6;ue;aAen9hi8i7ough,r6;anqu2Oen1ue;dy,g3Sme0ny,r09;ck,n,rs2P;d40se;ll,me,rt,s6wd45;te5;aVcarUeThRiQkin0FlMmKoHpGqua1FtAu7w6;eet,ift;b7dd13per0Gr6;e,re2H;sta2Ft3;aAe9iff,r7u6;pXr1;a6ict,o4;ig3Fn0U;a1ep,rn;le,rk;e22i3Fright0;ci28ft,l7o6re,ur;n,thi4;emn,id;a6el0ooth;ll,rt;e8i6ow,y;ck,g35m6;!y;ek,nd3D;ck,l0mp3;a6iTort,rill,y;dy,ll0Xrp;cu0Rve0Rxy;ce,ed,y;d,fe,int0l1Vv14;aBe9i8o6ude;mantic,o1Isy,u6;gh,nd;ch,pe,tzy;a6d,mo0H;dy,l;gg7ndom,p6re,w;id;ed;ai2i6;ck,et;aEhoDi1QlCoBr8u6;ny,r6;e,p3;egna2ic7o6;fouYud;ey,k0;li04or,te1B;ain,easa2;ny;in5le;dd,f6i0ld,ranQ;fi10;aAe8i7o6;b3isy,rm15sy;ce,mb3;a6w;r,t;ive,rr01;aAe8ild,o7u6;nda19te;ist,o1;a6ek,llX;n,s0ty;d,tuQ;aBeAi9o6ucky;f0Un7o1Du6ve0w17y0T;d,sy;e0g;g1Tke0tt3ve0;an,wd;me,r6te;ge;e7i6;nd;en;ol0ui1P;cy,ll,n6;sBt6;e6ima8;llege2r6;es7media6;te;ti4;ecu6ta2;re;aEeBiAo8u6;ge,m6ng1R;b3id;ll6me0t;ow;gh,l0;a6f04sita2;dy,v6;en0y;nd1Hppy,r6te5;d,sh;aGenFhDiClBoofy,r6;a9e8is0o6ue1E;o6ss;vy;at,en,y;nd,y;ad,ib,ooI;a2d1;a6o6;st0;t3uiY;u1y;aIeeb3iDlat,oAr8u6;ll,n6r14;!ny;aHe6iend0;e,sh;a7r6ul;get5mG;my;erce8n6rm;an6e;ciC;! ;le;ir,ke,n0Fr,st,t,ulA;aAerie,mp9sse7v6xtre0Q;il;nti6;al;ty;r7s6;tern,y;ly,th0;aFeCi9r7u6;ll,mb;u6y;nk;r7vi6;ne;e,ty;a6ep,nD;d6f,r;!ly;mp,pp03rk;aHhDlAo8r7u6;dd0r0te;isp,uel;ar6ld,mmon,ol,st0ward0zy;se;e6ou1;a6vW;n,r;ar8e6il0;ap,e6;sy;mi4;gey,lm8r6;e5i4;ful;!i4;aNiLlIoEr8u6;r0sy;ly;aAi7o6;ad,wn;ef,g7llia2;nt;ht;sh,ve;ld,r7un6;cy;ed,i4;ng;a7o6ue;nd,o1;ck,nd;g,tt6;er;d,ld,w1;dy;bsu9ng8we6;so6;me;ry;rd",TextOrdinal:"true¦bGeDf9hundredHmGnin7qu6s4t0zeroH;enGh1rFwe0;lfFn9;ir0ousandE;d,t4;e0ixt9;cond,ptAvent8xtA;adr9int9;et0th;e6ie8;i2o0;r0urt3;tie5;ft1rst;ight0lev1;e0h,ie2;en1;illion0;th",Cardinal:"true¦bHeEf8hundred,mHnineAone,qu6s4t0zero;en,h2rGw0;e0o;lve,n8;irt9ousandEree;e0ix5;pt1ven4xt1;adr0int0;illion;i3o0;r1ur0;!t2;ty;ft0ve;e2y;ight0lev1;!e0y;en;illion0;!s",Expression:"true¦a02b01dXeVfuck,gShLlImHnGoDpBshAtsk,u7voi04w3y0;a1eLu0;ck,p;!a,hoo,y;h1ow,t0;af,f;e0oa;e,w;gh,h0;! 0h,m;huh,oh;eesh,hh,it;ff,hew,l0sst;ease,z;h1o0w,y;h,o,ps;!h;ah,ope;eh,mm;m1ol0;!s;ao,fao;a4e2i,mm,oly1urr0;ah;! mo6;e,ll0y;!o;ha0i;!ha;ah,ee,o0rr;l0odbye;ly;e0h,t cetera,ww;k,p;'oh,a0uh;m0ng;mit,n0;!it;ah,oo,ye; 1h0rgh;!em;la",Adverb:"true¦a08by 06d02eYfShQinPjustOkinda,mMnJoEpCquite,r9s5t2up1very,well,ye0;p,s; to,wards5;h1iny bit,o0wiO;o,t6ward;en,us;everal,o0uch;!me1rt0; of;hYtimes,w09;a1e0;alT;ndomSthN;ar excellDer0oint blank; Nhaps;f3n0;ce0ly;! 0;ag02moW; courIten;ewKo0; longEt 0;onIwithstanding;aybe,eanwhiAore0;!ovB;! aboU;deed,steV;en0;ce;or2u0;lArther0;!moJ; 0ev3;examp0good,suH;le;n1v0;er; mas0ough;se;e0irect1; 1finite0;ly;ju8trop;far,n0;ow; DbroCd nauseam,gBl6ny3part,s2t 0w4;be6l0mo6wor6;arge,ea5; soon,ide;mo1w0;ay;re;l 1mo0one,ready,so,ways;st;b1t0;hat;ut;ain;ad;lot,posteriori",Determiner:"true¦aAboth,d8e5few,l3mu7neiCown,plenty,some,th2various,wh0;at0ich0;evB;at,e3is,ose;a,e0;!ast,s;a1i6l0very;!se;ch;e0u;!s;!n0;!o0y;th0;er"},Jn="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",Kn=Jn.split("").reduce((function(e,t,n){return e[t]=n,e}),{}),Un=function(e){if(void 0!==Kn[e])return Kn[e];for(var t=0,n=1,r=36,i=1;n<e.length;t+=r,n++,r*=36);for(var a=e.length-1;a>=0;a--,i*=36){var o=e.charCodeAt(a)-48;o>10&&(o-=7),t+=o*i;}return t},Rn=function(e,t,n){var r=Un(t);return r<e.symCount?e.syms[r]:n+r+1-e.symCount},Wn=function(e){var t={nodes:e.split(";"),syms:[],symCount:0};return e.match(":")&&function(e){for(var t=new RegExp("([0-9A-Z]+):([0-9A-Z]+)"),n=0;n<e.nodes.length;n++){var r=t.exec(e.nodes[n]);if(!r){e.symCount=n;break}e.syms[Un(r[1])]=Un(r[2]);}e.nodes=e.nodes.slice(e.symCount,e.nodes.length);}(t),function(e){var t=[];return function n(r,i){var a=e.nodes[r];"!"===a[0]&&(t.push(i),a=a.slice(1));for(var o=a.split(/([A-Z0-9,]+)/g),s=0;s<o.length;s+=2){var l=o[s],u=o[s+1];if(l){var c=i+l;","!==u&&void 0!==u?n(Rn(e,u,r),c):t.push(c);}}}(0,""),t}(t)},Zn=function(e){var t=e.split("|").reduce((function(e,t){var n=t.split("¦");return e[n[0]]=n[1],e}),{}),n={};return Object.keys(t).forEach((function(e){var r=Wn(t[e]);"true"===e&&(e=!0);for(var i=0;i<r.length;i++){var a=r[i];!0===n.hasOwnProperty(a)?!1===Array.isArray(n[a])?n[a]=[n[a],e]:n[a].push(e):n[a]=e;}})),n},qn={"20th century fox":"Organization","7 eleven":"Organization","motel 6":"Organization",g8:"Organization",vh1:"Organization",q1:"Date",q2:"Date",q3:"Date",q4:"Date",her:["Possessive","Pronoun"],his:["Possessive","Pronoun"],their:["Possessive","Pronoun"],themselves:["Possessive","Pronoun"],your:["Possessive","Pronoun"],our:["Possessive","Pronoun"],my:["Possessive","Pronoun"],its:["Possessive","Pronoun"]},Xn={Unit:function(e,t){e[t]=["Abbreviation","Unit"];},Cardinal:function(e,t){e[t]=["TextValue","Cardinal"];},TextOrdinal:function(e,t){e[t]=["Ordinal","TextValue"],e[t+"s"]=["TextValue","Fraction"];},Singular:function(e,t,n){e[t]="Singular";var r=n.transforms.toPlural(t,n);e[r]=e[r]||"Plural";},Infinitive:function(e,t,n){e[t]="Infinitive";for(var r=n.transforms.conjugate(t,n),i=Object.keys(r),a=0;a<i.length;a++){var o=r[i[a]];e[o]=e[o]||i[a];}},Comparable:function(e,t,n){e[t]="Comparable";for(var r=n.transforms.adjectives(t),i=Object.keys(r),a=0;a<i.length;a++){var o=r[i[a]];e[o]=e[o]||i[a];}},PhrasalVerb:function(e,t,n){e[t]=["PhrasalVerb","Infinitive"];for(var r=t.split(" "),i=n.transforms.conjugate(r[0],n),a=Object.keys(i),o=0;o<a.length;o++){var s=i[a[o]]+" "+r[1];e[s]=e[s]||["PhrasalVerb",a[o]],n.hasCompound[i[a[o]]]=!0;}},Demonym:function(e,t,n){e[t]="Demonym";var r=n.transforms.toPlural(t,n);e[r]=e[r]||["Demonym","Plural"];}},Yn=function(e,t,n){Object.keys(e).forEach((function(r){var i=e[r];"Abbreviation"!==i&&"Unit"!==i||(n.cache.abbreviations[r]=!0);var a=r.split(" ");a.length>1&&(n.hasCompound[a[0]]=!0),void 0===Xn[i]?void 0!==t[r]?("string"==typeof t[r]&&(t[r]=[t[r]]),"string"==typeof i?t[r].push(i):t[r]=t[r].concat(i)):t[r]=i:Xn[i](t,r,n);}));},Qn=function(e){var t=Object.assign({},qn);return Object.keys(Sn).forEach((function(n){var r=Zn(Sn[n]);Object.keys(r).forEach((function(e){r[e]=n;})),Yn(r,t,e);})),t},er=Yn,tr=function(e){for(var t=e.irregulars.nouns,n=Object.keys(t),r=0;r<n.length;r++){var i=n[r];e.words[i]="Singular",e.words[t[i]]="Plural";}for(var a=e.irregulars.verbs,o=Object.keys(a),s=function(t){var n=o[t];e.words[n]=e.words[n]||"Infinitive";var r=e.transforms.conjugate(n,e);r=Object.assign(r,a[n]),Object.keys(r).forEach((function(t){e.words[r[t]]=e.words[r[t]]||t,"Participle"===e.words[r[t]]&&(e.words[r[t]]=t);}));},l=0;l<o.length;l++)s(l);},nr={g:"Gerund",prt:"Participle",perf:"PerfectTense",pst:"PastTense",fut:"FuturePerfect",pres:"PresentTense",pluperf:"Pluperfect",a:"Actor"},rr={act:{a:"_or"},ache:{pst:"ached",g:"aching"},age:{g:"ageing",pst:"aged",pres:"ages"},aim:{a:"_er",g:"_ing",pst:"_ed"},arise:{prt:"_n",pst:"arose"},babysit:{a:"_ter",pst:"babysat"},ban:{a:"",g:"_ning",pst:"_ned"},be:{a:"",g:"am",prt:"been",pst:"was",pres:"is"},beat:{a:"_er",g:"_ing",prt:"_en"},become:{prt:"_"},begin:{g:"_ning",prt:"begun",pst:"began"},being:{g:"are",pst:"were",pres:"are"},bend:{prt:"bent"},bet:{a:"_ter",prt:"_"},bind:{pst:"bound"},bite:{g:"biting",prt:"bitten",pst:"bit"},bleed:{pst:"bled",prt:"bled"},blow:{prt:"_n",pst:"blew"},boil:{a:"_er"},brake:{prt:"broken"},break:{pst:"broke"},breed:{pst:"bred"},bring:{pst:"brought",prt:"brought"},broadcast:{pst:"_"},budget:{pst:"_ed"},build:{pst:"built",prt:"built"},burn:{prt:"_ed"},burst:{prt:"_"},buy:{pst:"bought",prt:"bought"},can:{a:"",fut:"_",g:"",pst:"could",perf:"could",pluperf:"could",pres:"_"},catch:{pst:"caught"},choose:{g:"choosing",prt:"chosen",pst:"chose"},cling:{prt:"clung"},come:{prt:"_",pst:"came",g:"coming"},compete:{a:"competitor",g:"competing",pst:"_d"},cost:{pst:"_"},creep:{prt:"crept"},cut:{prt:"_"},deal:{pst:"_t",prt:"_t"},develop:{a:"_er",g:"_ing",pst:"_ed"},die:{g:"dying",pst:"_d"},dig:{g:"_ging",pst:"dug",prt:"dug"},dive:{prt:"_d"},do:{pst:"did",pres:"_es"},draw:{prt:"_n",pst:"drew"},dream:{prt:"_t"},drink:{prt:"drunk",pst:"drank"},drive:{g:"driving",prt:"_n",pst:"drove"},drop:{g:"_ping",pst:"_ped"},eat:{a:"_er",g:"_ing",prt:"_en",pst:"ate"},edit:{pst:"_ed",g:"_ing"},egg:{pst:"_ed"},fall:{prt:"_en",pst:"fell"},feed:{prt:"fed",pst:"fed"},feel:{a:"_er",pst:"felt"},fight:{pst:"fought",prt:"fought"},find:{pst:"found"},flee:{g:"_ing",prt:"fled"},fling:{prt:"flung"},fly:{prt:"flown",pst:"flew"},forbid:{pst:"forbade"},forget:{g:"_ing",prt:"forgotten",pst:"forgot"},forgive:{g:"forgiving",prt:"_n",pst:"forgave"},free:{a:"",g:"_ing"},freeze:{g:"freezing",prt:"frozen",pst:"froze"},get:{pst:"got",prt:"gotten"},give:{g:"giving",prt:"_n",pst:"gave"},go:{prt:"_ne",pst:"went",pres:"goes"},grow:{prt:"_n"},guide:{pst:"_d"},hang:{pst:"hung",prt:"hung"},have:{g:"having",pst:"had",prt:"had",pres:"has"},hear:{pst:"_d",prt:"_d"},hide:{prt:"hidden",pst:"hid"},hit:{prt:"_"},hold:{pst:"held",prt:"held"},hurt:{pst:"_",prt:"_"},ice:{g:"icing",pst:"_d"},imply:{pst:"implied",pres:"implies"},is:{a:"",g:"being",pst:"was",pres:"_"},keep:{prt:"kept"},kneel:{prt:"knelt"},know:{prt:"_n"},lay:{pst:"laid",prt:"laid"},lead:{pst:"led",prt:"led"},leap:{prt:"_t"},leave:{pst:"left",prt:"left"},lend:{prt:"lent"},lie:{g:"lying",pst:"lay"},light:{pst:"lit",prt:"lit"},log:{g:"_ging",pst:"_ged"},loose:{prt:"lost"},lose:{g:"losing",pst:"lost"},make:{pst:"made",prt:"made"},mean:{pst:"_t",prt:"_t"},meet:{a:"_er",g:"_ing",pst:"met",prt:"met"},miss:{pres:"_"},name:{g:"naming"},patrol:{g:"_ling",pst:"_led"},pay:{pst:"paid",prt:"paid"},prove:{prt:"_n"},puke:{g:"puking"},put:{prt:"_"},quit:{prt:"_"},read:{pst:"_",prt:"_"},ride:{prt:"ridden"},reside:{pst:"_d"},ring:{pst:"rang",prt:"rung"},rise:{fut:"will have _n",g:"rising",prt:"_n",pst:"rose",pluperf:"had _n"},rub:{g:"_bing",pst:"_bed"},run:{g:"_ning",prt:"_",pst:"ran"},say:{pst:"said",prt:"said",pres:"_s"},seat:{pst:"sat",prt:"sat"},see:{g:"_ing",prt:"_n",pst:"saw"},seek:{prt:"sought"},sell:{pst:"sold",prt:"sold"},send:{prt:"sent"},set:{prt:"_"},sew:{prt:"_n"},shake:{prt:"_n"},shave:{prt:"_d"},shed:{g:"_ding",pst:"_",pres:"_s"},shine:{pst:"shone",prt:"shone"},shoot:{pst:"shot",prt:"shot"},show:{pst:"_ed"},shut:{prt:"_"},sing:{prt:"sung",pst:"sang"},sink:{pst:"sank",pluperf:"had sunk"},sit:{pst:"sat"},ski:{pst:"_ied"},slay:{prt:"slain"},sleep:{prt:"slept"},slide:{pst:"slid",prt:"slid"},smash:{pres:"_es"},sneak:{prt:"snuck"},speak:{fut:"will have spoken",prt:"spoken",pst:"spoke",perf:"have spoken",pluperf:"had spoken"},speed:{prt:"sped"},spend:{prt:"spent"},spill:{prt:"_ed",pst:"spilt"},spin:{g:"_ning",pst:"spun",prt:"spun"},spit:{prt:"spat"},split:{prt:"_"},spread:{pst:"_"},spring:{prt:"sprung"},stand:{pst:"stood"},steal:{a:"_er",pst:"stole"},stick:{pst:"stuck"},sting:{pst:"stung"},stink:{pst:"stunk",prt:"stunk"},stream:{a:"_er"},strew:{prt:"_n"},strike:{g:"striking",pst:"struck"},suit:{a:"_er",g:"_ing",pst:"_ed"},sware:{prt:"sworn"},swear:{pst:"swore"},sweep:{prt:"swept"},swim:{g:"_ming",pst:"swam"},swing:{pst:"swung"},take:{fut:"will have _n",pst:"took",perf:"have _n",pluperf:"had _n"},teach:{pst:"taught",pres:"_es"},tear:{pst:"tore"},tell:{pst:"told"},think:{pst:"thought"},thrive:{prt:"_d"},tie:{g:"tying",pst:"_d"},undergo:{prt:"_ne"},understand:{pst:"understood"},upset:{prt:"_"},wait:{a:"_er",g:"_ing",pst:"_ed"},wake:{pst:"woke"},wear:{pst:"wore"},weave:{prt:"woven"},wed:{pst:"wed"},weep:{prt:"wept"},win:{g:"_ning",pst:"won"},wind:{prt:"wound"},withdraw:{pst:"withdrew"},wring:{prt:"wrung"},write:{g:"writing",prt:"written",pst:"wrote"}},ir=Object.keys(rr),ar=function(e){var t=ir[e],n={};Object.keys(rr[t]).forEach((function(e){var r=rr[t][e];r=r.replace("_",t),n[nr[e]]=r;})),rr[t]=n;},or=0;or<ir.length;or++)ar(or);var sr=rr,lr={b:[{reg:/([^aeiou][aeiou])b$/i,repl:{pr:"$1bs",pa:"$1bbed",gr:"$1bbing"}}],d:[{reg:/(end)$/i,repl:{pr:"$1s",pa:"ent",gr:"$1ing",ar:"$1er"}},{reg:/(eed)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing",ar:"$1er"}},{reg:/(ed)$/i,repl:{pr:"$1s",pa:"$1ded",ar:"$1der",gr:"$1ding"}},{reg:/([^aeiou][ou])d$/i,repl:{pr:"$1ds",pa:"$1dded",gr:"$1dding"}}],e:[{reg:/(eave)$/i,repl:{pr:"$1s",pa:"$1d",gr:"eaving",ar:"$1r"}},{reg:/(ide)$/i,repl:{pr:"$1s",pa:"ode",gr:"iding",ar:"ider"}},{reg:/(t|sh?)(ake)$/i,repl:{pr:"$1$2s",pa:"$1ook",gr:"$1aking",ar:"$1$2r"}},{reg:/w(ake)$/i,repl:{pr:"w$1s",pa:"woke",gr:"waking",ar:"w$1r"}},{reg:/m(ake)$/i,repl:{pr:"m$1s",pa:"made",gr:"making",ar:"m$1r"}},{reg:/(a[tg]|i[zn]|ur|nc|gl|is)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/([bd]l)e$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}},{reg:/(om)e$/i,repl:{pr:"$1es",pa:"ame",gr:"$1ing"}}],g:[{reg:/([^aeiou][ou])g$/i,repl:{pr:"$1gs",pa:"$1gged",gr:"$1gging"}}],h:[{reg:/(..)([cs]h)$/i,repl:{pr:"$1$2es",pa:"$1$2ed",gr:"$1$2ing"}}],k:[{reg:/(ink)$/i,repl:{pr:"$1s",pa:"unk",gr:"$1ing",ar:"$1er"}}],m:[{reg:/([^aeiou][aeiou])m$/i,repl:{pr:"$1ms",pa:"$1mmed",gr:"$1mming"}}],n:[{reg:/(en)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}}],p:[{reg:/(e)(ep)$/i,repl:{pr:"$1$2s",pa:"$1pt",gr:"$1$2ing",ar:"$1$2er"}},{reg:/([^aeiou][aeiou])p$/i,repl:{pr:"$1ps",pa:"$1pped",gr:"$1pping"}},{reg:/([aeiu])p$/i,repl:{pr:"$1ps",pa:"$1p",gr:"$1pping"}}],r:[{reg:/([td]er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(er)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}}],s:[{reg:/(ish|tch|ess)$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}}],t:[{reg:/(ion|end|e[nc]t)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/(.eat)$/i,repl:{pr:"$1s",pa:"$1ed",gr:"$1ing"}},{reg:/([aeiu])t$/i,repl:{pr:"$1ts",pa:"$1t",gr:"$1tting"}},{reg:/([^aeiou][aeiou])t$/i,repl:{pr:"$1ts",pa:"$1tted",gr:"$1tting"}}],w:[{reg:/(.llow)$/i,repl:{pr:"$1s",pa:"$1ed"}},{reg:/(..)(ow)$/i,repl:{pr:"$1$2s",pa:"$1ew",gr:"$1$2ing",prt:"$1$2n"}}],y:[{reg:/([i|f|rr])y$/i,repl:{pr:"$1ies",pa:"$1ied",gr:"$1ying"}}],z:[{reg:/([aeiou]zz)$/i,repl:{pr:"$1es",pa:"$1ed",gr:"$1ing"}}]},ur={pr:"PresentTense",pa:"PastTense",gr:"Gerund",prt:"Participle",ar:"Actor"},cr=function(e,t){for(var n={},r=Object.keys(t.repl),i=0;i<r.length;i+=1){var a=r[i];n[ur[a]]=e.replace(t.reg,t.repl[a]);}return n},hr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e[e.length-1];if(!0===lr.hasOwnProperty(t))for(var n=0;n<lr[t].length;n+=1){var r=lr[t][n].reg;if(!0===r.test(e))return cr(e,lr[t][n])}return {}},dr=/[bcdfghjklmnpqrstvwxz]y$/,pr={Gerund:function(e){return "e"===e.charAt(e.length-1)?e.replace(/e$/,"ing"):e+"ing"},PresentTense:function(e){return "s"===e.charAt(e.length-1)?e+"es":!0===dr.test(e)?e.slice(0,-1)+"ies":e+"s"},PastTense:function(e){return "e"===e.charAt(e.length-1)?e+"d":"ed"===e.substr(-2)?e:!0===dr.test(e)?e.slice(0,-1)+"ied":e+"ed"}},gr=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n={};return t&&t.irregulars&&!0===t.irregulars.verbs.hasOwnProperty(e)&&(n=Object.assign({},t.irregulars.verbs[e])),void 0===(n=Object.assign({},hr(e),n)).Gerund&&(n.Gerund=pr.Gerund(e)),void 0===n.PastTense&&(n.PastTense=pr.PastTense(e)),void 0===n.PresentTense&&(n.PresentTense=pr.PresentTense(e)),n},mr=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/oud$/,/...p$/],fr=[/ary$/],vr={nice:"nicest",late:"latest",hard:"hardest",inner:"innermost",outer:"outermost",far:"furthest",worse:"worst",bad:"worst",good:"best",big:"biggest",large:"largest"},br=[{reg:/y$/i,repl:"iest"},{reg:/([aeiou])t$/i,repl:"$1ttest"},{reg:/([aeou])de$/i,repl:"$1dest"},{reg:/nge$/i,repl:"ngest"},{reg:/([aeiou])te$/i,repl:"$1test"}],yr=[/ght$/,/nge$/,/ough$/,/ain$/,/uel$/,/[au]ll$/,/ow$/,/old$/,/oud$/,/e[ae]p$/],wr=[/ary$/,/ous$/],kr={grey:"greyer",gray:"grayer",green:"greener",yellow:"yellower",red:"redder",good:"better",well:"better",bad:"worse",sad:"sadder",big:"bigger"},Cr=[{reg:/y$/i,repl:"ier"},{reg:/([aeiou])t$/i,repl:"$1tter"},{reg:/([aeou])de$/i,repl:"$1der"},{reg:/nge$/i,repl:"nger"}],xr={toSuperlative:function(e){if(vr.hasOwnProperty(e))return vr[e];for(var t=0;t<br.length;t++)if(br[t].reg.test(e))return e.replace(br[t].reg,br[t].repl);for(var n=0;n<fr.length;n++)if(!0===fr[n].test(e))return null;for(var r=0;r<mr.length;r++)if(!0===mr[r].test(e))return "e"===e.charAt(e.length-1)?e+"st":e+"est";return e+"est"},toComparative:function(e){if(kr.hasOwnProperty(e))return kr[e];for(var t=0;t<Cr.length;t++)if(!0===Cr[t].reg.test(e))return e.replace(Cr[t].reg,Cr[t].repl);for(var n=0;n<wr.length;n++)if(!0===wr[n].test(e))return null;for(var r=0;r<yr.length;r++)if(!0===yr[r].test(e))return e+"er";return !0===/e$/.test(e)?e+"r":e+"er"}},Ar=function(e){var t={},n=xr.toSuperlative(e);n&&(t.Superlative=n);var r=xr.toComparative(e);return r&&(t.Comparative=r),t},Dr={a:[[/(antenn|formul|nebul|vertebr|vit)a$/i,"$1ae"],[/([ti])a$/i,"$1a"]],e:[[/(kn|l|w)ife$/i,"$1ives"],[/(hive)$/i,"$1s"],[/([m|l])ouse$/i,"$1ice"],[/([m|l])ice$/i,"$1ice"]],f:[[/^(dwar|handkerchie|hoo|scar|whar)f$/i,"$1ves"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)f$/i,"$1ves"]],i:[[/(octop|vir)i$/i,"$1i"]],m:[[/([ti])um$/i,"$1a"]],n:[[/^(oxen)$/i,"$1"]],o:[[/(al|ad|at|er|et|ed|ad)o$/i,"$1oes"]],s:[[/(ax|test)is$/i,"$1es"],[/(alias|status)$/i,"$1es"],[/sis$/i,"ses"],[/(bu)s$/i,"$1ses"],[/(sis)$/i,"ses"],[/^(?!talis|.*hu)(.*)man$/i,"$1men"],[/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,"$1i"]],x:[[/(matr|vert|ind|cort)(ix|ex)$/i,"$1ices"],[/^(ox)$/i,"$1en"]],y:[[/([^aeiouy]|qu)y$/i,"$1ies"]],z:[[/(quiz)$/i,"$1zes"]]},$r=/(x|ch|sh|s|z)$/,Pr=function(e){var t=e[e.length-1];if(!0===Dr.hasOwnProperty(t))for(var n=0;n<Dr[t].length;n+=1){var r=Dr[t][n][0];if(!0===r.test(e))return e.replace(r,Dr[t][n][1])}return null},Er=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.irregulars.nouns;if(n.hasOwnProperty(e))return n[e];var r=Pr(e);return null!==r?r:$r.test(e)?e+"es":e+"s"},Hr=[[/([^v])ies$/i,"$1y"],[/ises$/i,"isis"],[/(kn|[^o]l|w)ives$/i,"$1ife"],[/^((?:ca|e|ha|(?:our|them|your)?se|she|wo)l|lea|loa|shea|thie)ves$/i,"$1f"],[/^(dwar|handkerchie|hoo|scar|whar)ves$/i,"$1f"],[/(antenn|formul|nebul|vertebr|vit)ae$/i,"$1a"],[/(octop|vir|radi|nucle|fung|cact|stimul)(i)$/i,"$1us"],[/(buffal|tomat|tornad)(oes)$/i,"$1o"],[/(eas)es$/i,"$1e"],[/(..[aeiou]s)es$/i,"$1"],[/(vert|ind|cort)(ices)$/i,"$1ex"],[/(matr|append)(ices)$/i,"$1ix"],[/(x|ch|ss|sh|z|o)es$/i,"$1"],[/men$/i,"man"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/([m|l])ice$/i,"$1ouse"],[/(cris|ax|test)es$/i,"$1is"],[/(alias|status)es$/i,"$1"],[/(ss)$/i,"$1"],[/(ics)$/i,"$1"],[/s$/i,""]],jr=function(e,t){var n,r=t.irregulars.nouns,i=(n=r,Object.keys(n).reduce((function(e,t){return e[n[t]]=t,e}),{}));if(i.hasOwnProperty(e))return i[e];for(var a=0;a<Hr.length;a++)if(!0===Hr[a][0].test(e))return e=e.replace(Hr[a][0],Hr[a][1]);return e},Tr={Participle:[{reg:/own$/i,to:"ow"},{reg:/(.)un([g|k])$/i,to:"$1in$2"}],Actor:[{reg:/(er)er$/i,to:"$1"}],PresentTense:[{reg:/(..)(ies)$/i,to:"$1y"},{reg:/(tch|sh)es$/i,to:"$1"},{reg:/(ss|zz)es$/i,to:"$1"},{reg:/([tzlshicgrvdnkmu])es$/i,to:"$1e"},{reg:/(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,to:"$1"},{reg:/(ow)s$/i,to:"$1"},{reg:/(op)s$/i,to:"$1"},{reg:/([eirs])ts$/i,to:"$1t"},{reg:/(ll)s$/i,to:"$1"},{reg:/(el)s$/i,to:"$1"},{reg:/(ip)es$/i,to:"$1e"},{reg:/ss$/i,to:"ss"},{reg:/s$/i,to:""}],Gerund:[{reg:/(..)(p|d|t|g){2}ing$/i,to:"$1$2"},{reg:/(ll|ss|zz)ing$/i,to:"$1"},{reg:/([^aeiou])ying$/i,to:"$1y"},{reg:/([^ae]i.)ing$/i,to:"$1e"},{reg:/(ea[dklnrtv])ing$/i,to:"$1"},{reg:/(ch|sh)ing$/i,to:"$1"},{reg:/(z)ing$/i,to:"$1e"},{reg:/(a[gdkvtc])ing$/i,to:"$1e"},{reg:/(u[rtcbn])ing$/i,to:"$1e"},{reg:/([^o]o[bdknprv])ing$/i,to:"$1e"},{reg:/([tbckg]l)ing$/i,to:"$1e"},{reg:/(c|s)ing$/i,to:"$1e"},{reg:/(..)ing$/i,to:"$1"}],PastTense:[{reg:/(ued)$/i,to:"ue"},{reg:/a([^aeiouy])ed$/i,to:"a$1e"},{reg:/([aeiou]zz)ed$/i,to:"$1"},{reg:/(e|i)lled$/i,to:"$1ll"},{reg:/(.)(sh|ch)ed$/i,to:"$1$2"},{reg:/(tl|gl)ed$/i,to:"$1e"},{reg:/(um?pt?)ed$/i,to:"$1"},{reg:/(ss)ed$/i,to:"$1"},{reg:/pped$/i,to:"p"},{reg:/tted$/i,to:"t"},{reg:/(..)gged$/i,to:"$1g"},{reg:/(..)lked$/i,to:"$1lk"},{reg:/([^aeiouy][aeiou])ked$/i,to:"$1ke"},{reg:/(.[aeiou])led$/i,to:"$1l"},{reg:/(..)(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,to:"$1$2"},{reg:/(.ut)ed$/i,to:"$1e"},{reg:/(.pt)ed$/i,to:"$1"},{reg:/(us)ed$/i,to:"$1e"},{reg:/(dd)ed$/i,to:"$1"},{reg:/(..[^aeiouy])ed$/i,to:"$1e"},{reg:/(..)ied$/i,to:"$1y"},{reg:/(.o)ed$/i,to:"$1o"},{reg:/(..i)ed$/i,to:"$1"},{reg:/(.a[^aeiou])ed$/i,to:"$1"},{reg:/([aeiou][^aeiou])ed$/i,to:"$1e"},{reg:/([rl])ew$/i,to:"$1ow"},{reg:/([pl])t$/i,to:"$1t"}]},Ir={Gerund:["ing"],Actor:["erer"],Infinitive:["ate","ize","tion","rify","then","ress","ify","age","nce","ect","ise","ine","ish","ace","ash","ure","tch","end","ack","and","ute","ade","ock","ite","ase","ose","use","ive","int","nge","lay","est","ain","ant","ent","eed","er","le","own","unk","ung","en"],PastTense:["ed","lt","nt","pt","ew","ld"],PresentTense:["rks","cks","nks","ngs","mps","tes","zes","ers","les","acks","ends","ands","ocks","lays","eads","lls","els","ils","ows","nds","ays","ams","ars","ops","ffs","als","urs","lds","ews","ips","es","ts","ns"]},Nr=Ir=Object.keys(Ir).reduce((function(e,t){return Ir[t].forEach((function(n){return e[n]=t})),e}),{}),Fr={nouns:{addendum:"addenda",alga:"algae",alumna:"alumnae",alumnus:"alumni",analysis:"analyses",antenna:"antennae",appendix:"appendices",avocado:"avocados",axis:"axes",bacillus:"bacilli",barracks:"barracks",beau:"beaux",bus:"buses",cactus:"cacti",chateau:"chateaux",child:"children",circus:"circuses",clothes:"clothes",corpus:"corpora",criterion:"criteria",curriculum:"curricula",database:"databases",deer:"deer",diagnosis:"diagnoses",echo:"echoes",embargo:"embargoes",epoch:"epochs",foot:"feet",formula:"formulae",fungus:"fungi",genus:"genera",goose:"geese",halo:"halos",hippopotamus:"hippopotami",index:"indices",larva:"larvae",leaf:"leaves",libretto:"libretti",loaf:"loaves",man:"men",matrix:"matrices",memorandum:"memoranda",modulus:"moduli",mosquito:"mosquitoes",mouse:"mice",nebula:"nebulae",nucleus:"nuclei",octopus:"octopi",opus:"opera",ovum:"ova",ox:"oxen",parenthesis:"parentheses",person:"people",phenomenon:"phenomena",prognosis:"prognoses",quiz:"quizzes",radius:"radii",referendum:"referenda",rodeo:"rodeos",sex:"sexes",shoe:"shoes",sombrero:"sombreros",stimulus:"stimuli",stomach:"stomachs",syllabus:"syllabi",synopsis:"synopses",tableau:"tableaux",thesis:"theses",thief:"thieves",tooth:"teeth",tornado:"tornados",tuxedo:"tuxedos",vertebra:"vertebrae"},verbs:sr},Br={conjugate:gr,adjectives:Ar,toPlural:Er,toSingular:jr,toInfinitive:function(e,t,n){if(!e)return "";if(!0===t.words.hasOwnProperty(e))for(var r=t.irregulars.verbs,i=Object.keys(r),a=0;a<i.length;a++)for(var o=Object.keys(r[i[a]]),s=0;s<o.length;s++)if(e===r[i[a]][o[s]])return i[a];if((n=n||function(e){var t=e.substr(e.length-3);if(!0===Nr.hasOwnProperty(t))return Nr[t];var n=e.substr(e.length-2);return !0===Nr.hasOwnProperty(n)?Nr[n]:"s"===e.substr(e.length-1)?"PresentTense":null}(e))&&Tr[n])for(var l=0;l<Tr[n].length;l++){var u=Tr[n][l];if(!0===u.reg.test(e))return e.replace(u.reg,u.to)}return e}},Lr=!1,Or=function(){function e(){ie(this,e),Object.defineProperty(this,"words",{enumerable:!1,value:{},writable:!0}),Object.defineProperty(this,"hasCompound",{enumerable:!1,value:{},writable:!0}),Object.defineProperty(this,"irregulars",{enumerable:!1,value:Fr,writable:!0}),Object.defineProperty(this,"tags",{enumerable:!1,value:Object.assign({},Gn),writable:!0}),Object.defineProperty(this,"transforms",{enumerable:!1,value:Br,writable:!0}),Object.defineProperty(this,"taggers",{enumerable:!1,value:[],writable:!0}),Object.defineProperty(this,"cache",{enumerable:!1,value:{abbreviations:{}}}),this.words=Qn(this),tr(this);}return oe(e,[{key:"verbose",value:function(e){return Lr=e,this}},{key:"isVerbose",value:function(){return Lr}},{key:"addWords",value:function(e){var t={};Object.keys(e).forEach((function(n){var r=e[n];n=n.toLowerCase().trim(),t[n]=r;})),er(t,this.words,this);}},{key:"addConjugations",value:function(e){return Object.assign(this.irregulars.verbs,e),this}},{key:"addPlurals",value:function(e){return Object.assign(this.irregulars.nouns,e),this}},{key:"addTags",value:function(e){return e=Object.assign({},e),this.tags=Object.assign(this.tags,e),this.tags=_n(this.tags),this}},{key:"postProcess",value:function(e){return this.taggers.push(e),this}},{key:"stats",value:function(){return {words:Object.keys(this.words).length,plurals:Object.keys(this.irregulars.nouns).length,conjugations:Object.keys(this.irregulars.verbs).length,compounds:Object.keys(this.hasCompound).length,postProcessors:this.taggers.length}}}]),e}(),zr=function(e){return JSON.parse(JSON.stringify(e))};Or.prototype.clone=function(){var e=new Or;return e.words=Object.assign({},this.words),e.hasCompound=Object.assign({},this.hasCompound),e.irregulars=zr(this.irregulars),e.tags=zr(this.tags),e.transforms=this.transforms,e.taggers=this.taggers,e};var Mr=Or,_r=Ne((function(e,t){t.all=function(){return this.parents()[0]||this},t.parent=function(){return this.from?this.from:this},t.parents=function(e){var t=[];return function e(n){n.from&&(t.push(n.from),e(n.from));}(this),t=t.reverse(),"number"==typeof e?t[e]:t},t.clone=function(e){var t=this.list.map((function(t){return t.clone(e)}));return this.buildFrom(t)},t.wordCount=function(){return this.list.reduce((function(e,t){return e+=t.wordCount()}),0)},t.wordcount=t.wordCount;})),Vr=Ne((function(e,t){t.first=function(e){return void 0===e?this.get(0):this.slice(0,e)},t.last=function(e){if(void 0===e)return this.get(this.list.length-1);var t=this.list.length;return this.slice(t-e,t)},t.slice=function(e,t){var n=this.list.slice(e,t);return this.buildFrom(n)},t.eq=function(e){var t=this.list[e];return void 0===t?this.buildFrom([]):this.buildFrom([t])},t.get=t.eq,t.firstTerms=function(){return this.match("^.")},t.firstTerm=t.firstTerms,t.lastTerms=function(){return this.match(".$")},t.lastTerm=t.lastTerms,t.termList=function(e){for(var t=[],n=0;n<this.list.length;n++)for(var r=this.list[n].terms(),i=0;i<r.length;i++)if(t.push(r[i]),void 0!==e&&void 0!==t[e])return t[e];return t};t.groups=function(e){return void 0===e?function(e){for(var t={},n={},r=function(t){for(var r=e.list[t],i=Object.keys(r.groups).map((function(e){return r.groups[e]})),a=0;a<i.length;a++){var o=i[a],s=o.group,l=o.start,u=o.length;n[s]||(n[s]=[]),n[s].push(r.buildFrom(l,u));}},i=0;i<e.list.length;i++)r(i);for(var a=Object.keys(n),o=0;o<a.length;o++){var s=a[o];t[s]=e.buildFrom(n[s]);}return t}(this):("number"==typeof e&&(e=String(e)),function(e,t){for(var n=[],r=function(r){var i=e.list[r],a=Object.keys(i.groups);(a=a.filter((function(e){return i.groups[e].group===t}))).forEach((function(e){n.push(i.buildFrom(i.groups[e].start,i.groups[e].length));}));},i=0;i<e.list.length;i++)r(i);return e.buildFrom(n)}(this,e)||this.buildFrom([]))},t.group=t.groups,t.sentences=function(e){var t=[];return this.list.forEach((function(e){t.push(e.fullSentence());})),"number"==typeof e?this.buildFrom([t[e]]):this.buildFrom(t)},t.sentence=t.sentences;})),Gr=function(e,t){if(e._cache&&!0===e._cache.set){for(var n=(s=[],l=[],t.forEach((function(e){!0!==e.optional&&!0!==e.negative&&(void 0!==e.tag&&s.push(e.tag),void 0!==e.word&&l.push(e.word));})),{tags:s,words:l}),r=n.words,i=n.tags,a=0;a<r.length;a++)if(void 0===e._cache.words[r[a]])return !1;for(var o=0;o<i.length;o++)if(void 0===e._cache.tags[i[o]])return !1}var s,l;return !0},Sr=Ne((function(e,t){t.match=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"!=typeof t&&"number"!=typeof t&&null!==t||(t={group:t});var n=Xt(e,t);if(0===n.length)return this.buildFrom([]);if(!1===Gr(this,n))return this.buildFrom([]);var r=this.list.reduce((function(e,t){return e.concat(t.match(n))}),[]);return void 0!==t.group&&null!==t.group&&""!==t.group?this.buildFrom(r).groups(t.group):this.buildFrom(r)},t.not=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t);if(0===n.length||!1===Gr(this,n))return this;var r=this.list.reduce((function(e,t){return e.concat(t.not(n))}),[]);return this.buildFrom(r)},t.matchOne=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t);if(!1===Gr(this,n))return this.buildFrom([]);for(var r=0;r<this.list.length;r++){var i=this.list[r].match(n,!0);return this.buildFrom(i)}return this.buildFrom([])},t.if=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t);if(!1===Gr(this,n))return this.buildFrom([]);var r=this.list.filter((function(e){return !0===e.has(n)}));return this.buildFrom(r)},t.ifNo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t),r=this.list.filter((function(e){return !1===e.has(n)}));return this.buildFrom(r)},t.has=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t);return !1!==Gr(this,n)&&this.list.some((function(e){return !0===e.has(n)}))},t.lookAhead=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e||(e=".*");var n=Xt(e,t),r=[];return this.list.forEach((function(e){r=r.concat(e.lookAhead(n));})),r=r.filter((function(e){return e})),this.buildFrom(r)},t.lookAfter=t.lookAhead,t.lookBehind=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e||(e=".*");var n=Xt(e,t),r=[];return this.list.forEach((function(e){r=r.concat(e.lookBehind(n));})),r=r.filter((function(e){return e})),this.buildFrom(r)},t.lookBefore=t.lookBehind,t.before=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t),r=this.if(n).list,i=r.map((function(e){var t=e.terms().map((function(e){return e.id})),r=e.match(n)[0],i=t.indexOf(r.start);return 0===i||-1===i?null:e.buildFrom(e.start,i)}));return i=i.filter((function(e){return null!==e})),this.buildFrom(i)},t.after=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Xt(e,t),r=this.if(n).list,i=r.map((function(e){var t=e.terms(),r=t.map((function(e){return e.id})),i=e.match(n)[0],a=r.indexOf(i.start);if(-1===a||!t[a+i.length])return null;var o=t[a+i.length].id,s=e.length-a-i.length;return e.buildFrom(o,s)}));return i=i.filter((function(e){return null!==e})),this.buildFrom(i)},t.hasAfter=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.filter((function(n){return n.lookAfter(e,t).found}))},t.hasBefore=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.filter((function(n){return n.lookBefore(e,t).found}))};})),Jr=function(e,t,n,r){var i=[];"string"==typeof e&&(i=e.split(" ")),t.list.forEach((function(a){var o=a.terms();!0===n&&(o=o.filter((function(n){return n.canBe(e,t.world)}))),o.forEach((function(n,a){i.length>1?i[a]&&"."!==i[a]&&n.tag(i[a],r,t.world):n.tag(e,r,t.world);}));}));},Kr={tag:function(e,t){return e?(Jr(e,this,!1,t),this):this},tagSafe:function(e,t){return e?(Jr(e,this,!0,t),this):this},unTag:function(e,t){var n=this;return this.list.forEach((function(r){r.terms().forEach((function(r){return r.unTag(e,t,n.world)}));})),this},canBe:function(e){if(!e)return this;var t=this.world,n=this.list.reduce((function(n,r){return n.concat(r.canBe(e,t))}),[]);return this.buildFrom(n)}},Ur={map:function(e){var t=this;if(!e)return this;var n=this.list.map((function(n,r){var i=t.buildFrom([n]);i.from=null;var a=e(i,r);return a&&a.list&&a.list[0]?a.list[0]:a}));return 0===(n=n.filter((function(e){return e}))).length?this.buildFrom(n):"object"!==re(n[0])||"Phrase"!==n[0].isA?n:this.buildFrom(n)},forEach:function(e,t){var n=this;return e?(this.list.forEach((function(r,i){var a=n.buildFrom([r]);!0===t&&(a.from=null),e(a,i);})),this):this},filter:function(e){var t=this;if(!e)return this;var n=this.list.filter((function(n,r){var i=t.buildFrom([n]);return i.from=null,e(i,r)}));return this.buildFrom(n)},find:function(e){var t=this;if(!e)return this;var n=this.list.find((function(n,r){var i=t.buildFrom([n]);return i.from=null,e(i,r)}));return n?this.buildFrom([n]):void 0},some:function(e){var t=this;return e?this.list.some((function(n,r){var i=t.buildFrom([n]);return i.from=null,e(i,r)})):this},random:function(e){if(!this.found)return this;var t=Math.floor(Math.random()*this.list.length);if(void 0===e){var n=[this.list[t]];return this.buildFrom(n)}return t+e>this.length&&(t=(t=this.length-e)<0?0:t),this.slice(t,t+e)}},Rr=function(e){return e.split(/[ -]/g)},Wr=function(e,t,n){for(var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e,r){var i=!0;void 0!==t[r]&&(i=t[r]),e=(e=(e||"").toLowerCase()).replace(/[,;.!?]+$/,"");var a=Rr(e).map((function(e){return e.trim()}));n[a[0]]=n[a[0]]||{},1===a.length?n[a[0]].value=i:(n[a[0]].more=n[a[0]].more||[],n[a[0]].more.push({rest:a.slice(1),value:i}));})),n}(e,t),i=[],a=function(e){for(var t=n.list[e],a=t.terms().map((function(e){return e.reduced})),o=function(e){void 0!==r[a[e]]&&(void 0!==r[a[e]].more&&r[a[e]].more.forEach((function(n){void 0!==a[e+n.rest.length]&&(!0===n.rest.every((function(t,n){return t===a[e+n+1]}))&&i.push({id:t.terms()[e].id,value:n.value,length:n.rest.length+1}));})),void 0!==r[a[e]].value&&i.push({id:t.terms()[e].id,value:r[a[e]].value,length:1}));},s=0;s<a.length;s++)o(s);},o=0;o<n.list.length;o++)a(o);return i},Zr=Ne((function(e,t){t.lookup=function(e){var t,n=this,r=[],i=(t=e)&&"[object Object]"===Object.prototype.toString.call(t);!0===i&&(e=Object.keys(e).map((function(t){return r.push(e[t]),t}))),"string"==typeof e&&(e=[e]),!0!==this._cache.set&&this.cache();var a=Wr(e,r,this),o=this.list[0];if(!0===i){var s={};return a.forEach((function(e){s[e.value]=s[e.value]||[],s[e.value].push(o.buildFrom(e.id,e.length));})),Object.keys(s).forEach((function(e){s[e]=n.buildFrom(s[e]);})),s}return a=a.map((function(e){return o.buildFrom(e.id,e.length)})),this.buildFrom(a)},t.lookUp=t.lookup;})),qr={cache:function(e){var t=this;e=e||{};var n={},r={};return this._cache.words=n,this._cache.tags=r,this._cache.set=!0,this.list.forEach((function(i,a){i.cache=i.cache||{},i.terms().forEach((function(i){n[i.reduced]&&!n.hasOwnProperty(i.reduced)||(n[i.reduced]=n[i.reduced]||[],n[i.reduced].push(a),Object.keys(i.tags).forEach((function(e){r[e]=r[e]||[],r[e].push(a);})),e.root&&(i.setRoot(t.world),n[i.root]=[a]));}));})),this},uncache:function(){return this._cache={},this.list.forEach((function(e){e.cache={};})),this.parents().forEach((function(e){e._cache={},e.list.forEach((function(e){e.cache={};}));})),this}},Xr=function(e){return e.charAt(0).toUpperCase()+e.substr(1)},Yr={replaceWith:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e?(!0===n&&(n={keepTags:!0}),!1===n&&(n={keepTags:!1}),n=n||{},this.uncache(),this.list.forEach((function(r){var i,a=e;if("function"==typeof e&&(a=e(r)),a&&"object"===re(a)&&"Doc"===a.isA)i=a.list,t.pool().merge(a.pool());else {if("string"!=typeof a)return;!1!==n.keepCase&&r.terms(0).isTitleCase()&&(a=Xr(a)),i=Pn(a,t.world,t.pool());var o=t.buildFrom(i);o.tagger(),i=o.list;}if(!0===n.keepTags){var s=r.json({terms:{tags:!0}}).terms;i[0].terms().forEach((function(e,n){s[n]&&e.tagSafe(s[n].tags,"keptTag",t.world);}));}r.replace(i[0],t);})),this):this.delete()},replace:function(e,t,n){return void 0===t?this.replaceWith(e,n):(this.match(e).replaceWith(t,n),this)}},Qr=Ne((function(e,t){var n=function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},r=function(e,t){var n=Pn(e,t.world)[0],r=t.buildFrom([n]);return r.tagger(),t.list=r.list,t};t.append=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t?this.found?(this.uncache(),this.list.forEach((function(r){var i;n(t)&&"Doc"===t.isA?i=t.list[0].clone():"string"==typeof t&&(i=Pn(t,e.world,e.pool())[0]),e.buildFrom([i]).tagger(),r.append(i,e);})),this):r(t,this):this},t.insertAfter=t.append,t.insertAt=t.append,t.prepend=function(e){var t=this;return e?this.found?(this.uncache(),this.list.forEach((function(r){var i;n(e)&&"Doc"===e.isA?i=e.list[0].clone():"string"==typeof e&&(i=Pn(e,t.world,t.pool())[0]),t.buildFrom([i]).tagger(),r.prepend(i,t);})),this):r(e,this):this},t.insertBefore=t.prepend,t.concat=function(){this.uncache();for(var e=this.list.slice(0),t=0;t<arguments.length;t++){var n=arguments[t];if("string"==typeof n){var r=Pn(n,this.world);e=e.concat(r);}else "Doc"===n.isA?e=e.concat(n.list):"Phrase"===n.isA&&e.push(n);}return this.buildFrom(e)},t.delete=function(e){var t=this;this.uncache();var n=this;return e&&(n=this.match(e)),n.list.forEach((function(e){return e.delete(t)})),this},t.remove=t.delete;})),ei={clean:!0,reduced:!0,root:!0},ti={text:function(e){var t=this;e=e||{};var n=!1;0===this.parents().length&&(n=!0),("root"===e||"object"===re(e)&&e.root)&&this.list.forEach((function(e){e.terms().forEach((function(e){null===e.root&&e.setRoot(t.world);}));}));var r=this.list.reduce((function(r,i,a){var o=!n&&0===a,s=!n&&a===t.list.length-1;return r+i.text(e,o,s)}),"");return !0!==ei[e]&&!0!==e.reduced&&!0!==e.clean&&!0!==e.root||(r=r.trim()),r}},ni=function(e,t,n){var r=function(e){var t=0,n=0,r={};return e.termList().forEach((function(e){r[e.id]={index:n,start:t+e.pre.length,length:e.text.length},t+=e.pre.length+e.text.length+e.post.length,n+=1;})),r}(e.all());(n.terms.index||n.index)&&t.forEach((function(e){e.terms.forEach((function(e){e.index=r[e.id].index;})),e.index=e.terms[0].index;})),(n.terms.offset||n.offset)&&t.forEach((function(e){e.terms.forEach((function(e){e.offset=r[e.id]||{};})),e.offset={index:e.terms[0].offset.index,start:e.terms[0].offset.start-e.text.indexOf(e.terms[0].text),length:e.text.length};}));},ri=Ne((function(e,t){var n={text:!0,terms:!0,trim:!0},r=function(e){return (e=Object.assign({},n,e)).unique&&(e.reduced=!0),e.offset&&(e.text=!0,e.terms&&!0!==e.terms||(e.terms={}),e.terms.offset=!0),(e.index||e.terms.index)&&(e.terms=!0===e.terms?{}:e.terms,e.terms.id=!0),e};t.json=function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("number"==typeof t&&this.list[t])return this.list[t].json(n);!0===(t=r(t)).root&&this.list.forEach((function(t){t.terms().forEach((function(t){null===t.root&&t.setRoot(e.world);}));}));var i=this.list.map((function(n){return n.json(t,e.world)}));if((t.terms.offset||t.offset||t.terms.index||t.index)&&ni(this,i,t),t.frequency||t.freq||t.count){var a={};this.list.forEach((function(e){var t=e.text("reduced");a[t]=a[t]||0,a[t]+=1;})),this.list.forEach((function(e,t){i[t].count=a[e.text("reduced")];}));}if(t.unique){var o={};i=i.filter((function(e){return !0!==o[e.reduced]&&(o[e.reduced]=!0,!0)}));}return i},t.data=t.json;})),ii=Ne((function(e){var t="[0m",n=function(e,t){for(e=e.toString();e.length<t;)e+=" ";return e};var r={green:"#7f9c6c",red:"#914045",blue:"#6699cc",magenta:"#6D5685",cyan:"#2D85A8",yellow:"#e6d7b3",black:"#303b50"},i={green:function(e){return "[32m"+e+t},red:function(e){return "[31m"+e+t},blue:function(e){return "[34m"+e+t},magenta:function(e){return "[35m"+e+t},cyan:function(e){return "[36m"+e+t},yellow:function(e){return "[33m"+e+t},black:function(e){return "[30m"+e+t}};e.exports=function(e){return "undefined"!=typeof window&&window.document?(function(e){var t=e.world.tags;e.list.forEach((function(e){console.log('\n%c"'+e.text()+'"',"color: #e6d7b3;"),e.terms().forEach((function(e){var i=Object.keys(e.tags),a=e.text||"-";e.implicit&&(a="["+e.implicit+"]");var o="'"+a+"'";o=n(o,8);var s=i.find((function(e){return t[e]&&t[e].color})),l="steelblue";t[s]&&(l=t[s].color,l=r[l]),console.log("   ".concat(o,"  -  %c").concat(i.join(", ")),"color: ".concat(l||"steelblue",";"));}));}));}(e),e):(console.log(i.blue("=====")),e.list.forEach((function(t){console.log(i.blue("  -----")),t.terms().forEach((function(t){var r=Object.keys(t.tags),a=t.text||"-";t.implicit&&(a="["+t.implicit+"]");var o="'"+(a=i.yellow(a))+"'";o=n(o,18);var s=i.blue("  ｜ ")+o+"  - "+function(e,t){return (e=e.map((function(e){if(!t.tags.hasOwnProperty(e))return e;var n=t.tags[e].color||"blue";return i[n](e)}))).join(", ")}(r,e.world);console.log(s);}));})),console.log(""),e)};})),ai=function(e){var t=e.json({text:!1,terms:!1,reduced:!0}),n={};t.forEach((function(e){n[e.reduced]||(e.count=0,n[e.reduced]=e),n[e.reduced].count+=1;}));var r=Object.keys(n).map((function(e){return n[e]}));return r.sort((function(e,t){return e.count>t.count?-1:e.count<t.count?1:0})),r},oi={debug:function(){return ii(this),this},out:function(e){if("text"===e)return this.text();if("normal"===e)return this.text("normal");if("json"===e)return this.json();if("offset"===e||"offsets"===e)return this.json({offset:!0});if("array"===e)return this.json({terms:!1}).map((function(e){return e.text})).filter((function(e){return e}));if("freq"===e||"frequency"===e)return ai(this);if("terms"===e){var t=[];return this.json({text:!1,terms:{text:!0}}).forEach((function(e){var n=e.terms.map((function(e){return e.text}));n=n.filter((function(e){return e})),t=t.concat(n);})),t}return "tags"===e?this.list.map((function(e){return e.terms().reduce((function(e,t){return e[t.clean||t.implicit]=Object.keys(t.tags),e}),{})})):"debug"===e?(ii(this),this):this.text()}},si={alpha:function(e,t){var n=e.text("clean"),r=t.text("clean");return n<r?-1:n>r?1:0},length:function(e,t){var n=e.text().trim().length,r=t.text().trim().length;return n<r?1:n>r?-1:0},wordCount:function(e,t){var n=e.wordCount(),r=t.wordCount();return n<r?1:n>r?-1:0}};si.alphabetical=si.alpha,si.wordcount=si.wordCount;var li={index:!0,sequence:!0,seq:!0,sequential:!0,chron:!0,chronological:!0},ui={sort:function(e){return "freq"===(e=e||"alpha")||"frequency"===e||"topk"===e?(n={},r={case:!0,punctuation:!1,whitespace:!0,unicode:!0},(t=this).list.forEach((function(e){var t=e.text(r);n[t]=n[t]||0,n[t]+=1;})),t.list.sort((function(e,t){var i=n[e.text(r)],a=n[t.text(r)];return i<a?1:i>a?-1:0})),t):li.hasOwnProperty(e)?function(e){var t={};return e.json({terms:{offset:!0}}).forEach((function(e){t[e.terms[0].id]=e.terms[0].offset.start;})),e.list=e.list.sort((function(e,n){return t[e.start]>t[n.start]?1:t[e.start]<t[n.start]?-1:0})),e}(this):"function"==typeof(e=si[e]||e)?(this.list=this.list.sort(e),this):this;var t,n,r;},reverse:function(){var e=[].concat(this.list);return e=e.reverse(),this.buildFrom(e)},unique:function(){var e=[].concat(this.list),t={};return e=e.filter((function(e){var n=e.text("reduced").trim()||e.text("implicit").trim();return !0!==t.hasOwnProperty(n)&&(t[n]=!0,!0)})),this.buildFrom(e)}},ci=/[\[\]{}⟨⟩:,،、‒–—―…‹›«»‐\-;\/⁄·*\•^†‡°¡¿※№÷×ºª%‰=‱¶§~|‖¦©℗®℠™¤₳฿]/g,hi=/['‘’“”"′″‴]+/g,di={whitespace:function(e){var t=e.list.map((function(e){return e.terms()}));t.forEach((function(e,n){e.forEach((function(r,i){!0!==r.hasDash()?(r.pre=r.pre.replace(/\s/g,""),r.post=r.post.replace(/\s/g,""),(e.length-1!==i||t[n+1])&&(r.implicit&&!0===Boolean(r.text)||!0!==r.hasHyphen()&&(r.post+=" "))):r.post=" - ";}));}));},punctuation:function(e){e.forEach((function(e){!0===e.hasHyphen()&&(e.post=" "),e.pre=e.pre.replace(ci,""),e.post=e.post.replace(ci,""),e.post=e.post.replace(/\.\.\./,""),!0===/!/.test(e.post)&&(e.post=e.post.replace(/!/g,""),e.post="!"+e.post),!0===/\?/.test(e.post)&&(e.post=e.post.replace(/[\?!]*/,""),e.post="?"+e.post);}));},unicode:function(e){e.forEach((function(e){!0!==e.isImplicit()&&(e.text=fe(e.text));}));},quotations:function(e){e.forEach((function(e){e.post=e.post.replace(hi,""),e.pre=e.pre.replace(hi,"");}));},adverbs:function(e){e.match("#Adverb").not("(not|nary|seldom|never|barely|almost|basically|so)").remove();},abbreviations:function(e){e.list.forEach((function(e){var t=e.terms();t.forEach((function(e,n){!0===e.tags.Abbreviation&&t[n+1]&&(e.post=e.post.replace(/^\./,""));}));}));}},pi={whitespace:!0,unicode:!0,punctuation:!0,emoji:!0,acronyms:!0,abbreviations:!0,case:!1,contractions:!1,parentheses:!1,quotations:!1,adverbs:!1,possessives:!1,verbs:!1,nouns:!1,honorifics:!1},gi={light:{},medium:{case:!0,contractions:!0,parentheses:!0,quotations:!0,adverbs:!0}};gi.heavy=Object.assign({},gi.medium,{possessives:!0,verbs:!0,nouns:!0,honorifics:!0});var mi={normalize:function(e){"string"==typeof(e=e||{})&&(e=gi[e]||{}),e=Object.assign({},pi,e),this.uncache();var t=this.termList();return e.case&&this.toLowerCase(),e.whitespace&&di.whitespace(this),e.unicode&&di.unicode(t),e.punctuation&&di.punctuation(t),e.emoji&&this.remove("(#Emoji|#Emoticon)"),e.acronyms&&this.acronyms().strip(),e.abbreviations&&di.abbreviations(this),(e.contraction||e.contractions)&&this.contractions().expand(),e.parentheses&&this.parentheses().unwrap(),(e.quotations||e.quotes)&&di.quotations(t),e.adverbs&&di.adverbs(this),(e.possessive||e.possessives)&&this.possessives().strip(),e.verbs&&this.verbs().toInfinitive(),(e.nouns||e.plurals)&&this.nouns().toSingular(),e.honorifics&&this.remove("#Honorific"),this}},fi=Ne((function(e,t){t.splitOn=function(e){if(!e)return this.parent().splitOn(this);var t=Xt(e),n=[];return this.list.forEach((function(e){var r=e.match(t);if(0!==r.length){var i=e;r.forEach((function(e){var t=i.splitOn(e);t.before&&n.push(t.before),t.match&&n.push(t.match),i=t.after;})),i&&n.push(i);}else n.push(e);})),this.buildFrom(n)},t.splitAfter=function(e){if(!e)return this.parent().splitAfter(this);var t=Xt(e),n=[];return this.list.forEach((function(e){var r=e.match(t);if(0!==r.length){var i=e;r.forEach((function(e){var t=i.splitOn(e);t.before&&t.match?(t.before.length+=t.match.length,n.push(t.before)):t.match&&n.push(t.match),i=t.after;})),i&&n.push(i);}else n.push(e);})),this.buildFrom(n)},t.split=t.splitAfter,t.splitBefore=function(e){if(!e)return this.parent().splitBefore(this);var t=Xt(e),n=[];return this.list.forEach((function(e){var r=e.match(t);if(0!==r.length){var i=e;r.forEach((function(e){var t=i.splitOn(e);t.before&&n.push(t.before),t.match&&t.after&&(t.match.length+=t.after.length),i=t.match;})),i&&n.push(i);}else n.push(e);})),this.buildFrom(n)},t.segment=function(e,t){e=e||{},t=t||{text:!0};var n=this,r=Object.keys(e);return r.forEach((function(e){n=n.splitOn(e);})),n.list.forEach((function(t){for(var n=0;n<r.length;n+=1)if(t.has(r[n]))return void(t.segment=e[r[n]])})),n.list.map((function(e){var n=e.json(t);return n.segment=e.segment||null,n}))};})),vi=function(e,t){var n=e.world;return e.list.forEach((function(e){e.terms().forEach((function(e){return e[t](n)}));})),e},bi={toLowerCase:function(){return vi(this,"toLowerCase")},toUpperCase:function(){return vi(this,"toUpperCase")},toTitleCase:function(){return vi(this,"toTitleCase")},toCamelCase:function(){return this.list.forEach((function(e){var t=e.terms();t.forEach((function(e,n){0!==n&&e.toTitleCase(),n!==t.length-1&&(e.post="");}));})),this}},yi=Ne((function(e,t){t.pre=function(e,t){return void 0===e?this.list[0].terms(0).pre:(this.list.forEach((function(n){var r=n.terms(0);!0===t?r.pre+=e:r.pre=e;})),this)},t.post=function(e,t){return void 0===e?this.list.map((function(e){var t=e.terms();return t[t.length-1].post})):(this.list.forEach((function(n){var r=n.terms(),i=r[r.length-1];!0===t?i.post+=e:i.post=e;})),this)},t.trim=function(){return this.list=this.list.map((function(e){return e.trim()})),this},t.hyphenate=function(){return this.list.forEach((function(e){var t=e.terms();t.forEach((function(e,n){0!==n&&(e.pre=""),t[n+1]&&(e.post="-");}));})),this},t.dehyphenate=function(){var e=/(-|–|—)/;return this.list.forEach((function(t){t.terms().forEach((function(t){e.test(t.post)&&(t.post=" ");}));})),this},t.deHyphenate=t.dehyphenate,t.toQuotations=function(e,t){return e=e||'"',t=t||'"',this.list.forEach((function(n){var r=n.terms();r[0].pre=e+r[0].pre;var i=r[r.length-1];i.post=t+i.post;})),this},t.toQuotation=t.toQuotations,t.toParentheses=function(e,t){return e=e||"(",t=t||")",this.list.forEach((function(n){var r=n.terms();r[0].pre=e+r[0].pre;var i=r[r.length-1];i.post=t+i.post;})),this};})),wi={join:function(e){this.uncache();for(var t=this.list[0],n=t.length,r={},i=1;i<this.list.length;i++){var a=this.list[i];r[a.start]=!0;var o=t.lastTerm();e&&(o.post+=e),o.next=a.start,a.terms(0).prev=o.id,t.length+=a.length,t.cache={};}var s=t.length-n;return this.parents().forEach((function(e){e.list.forEach((function(e){for(var n=e.terms(),r=0;r<n.length;r++)if(n[r].id===t.start){e.length+=s;break}e.cache={};})),e.list=e.list.filter((function(e){return !0!==r[e.start]}));})),this.buildFrom([t])}},ki=/[,\)"';:\-–—\.…]/,Ci=function(e,t){if(e.found){for(var n=e.termList(),r=0;r<n.length-1;r++){var i=n[r];if(ki.test(i.post))return}n.forEach((function(e){e.implicit=e.clean;})),n[0].text+=t,n.slice(1).forEach((function(e){e.text="";}));for(var a=0;a<n.length-1;a++){var o=n[a];o.post=o.post.replace(/ /,"");}}},xi={contract:function(){var e=this.not("@hasContraction"),t=e.match("(we|they|you) are");return Ci(t,"'re"),t=e.match("(he|she|they|it|we|you) will"),Ci(t,"'ll"),t=e.match("(he|she|they|it|we) is"),Ci(t,"'s"),t=e.match("#Person is"),Ci(t,"'s"),t=e.match("#Person would"),Ci(t,"'d"),t=e.match("(is|was|had|would|should|could|do|does|have|has|can) not"),Ci(t,"n't"),t=e.match("(i|we|they) have"),Ci(t,"'ve"),t=e.match("(would|should|could) have"),Ci(t,"'ve"),t=e.match("i am"),Ci(t,"'m"),t=e.match("going to"),this}},Ai=Object.assign({},_r,Vr,Sr,Kr,Ur,Zr,qr,Yr,Qr,ti,ri,oi,ui,mi,fi,bi,yi,wi,xi),Di={};[["terms","."],["hyphenated","@hasHyphen ."],["adjectives","#Adjective"],["hashTags","#HashTag"],["emails","#Email"],["emoji","#Emoji"],["emoticons","#Emoticon"],["atMentions","#AtMention"],["urls","#Url"],["adverbs","#Adverb"],["pronouns","#Pronoun"],["conjunctions","#Conjunction"],["prepositions","#Preposition"]].forEach((function(e){Di[e[0]]=function(t){var n=this.match(e[1]);return "number"==typeof t&&(n=n.get(t)),n};})),Di.emojis=Di.emoji,Di.atmentions=Di.atMentions,Di.words=Di.terms,Di.phoneNumbers=function(e){var t=this.splitAfter("@hasComma");return t=t.match("#PhoneNumber+"),"number"==typeof e&&(t=t.get(e)),t},Di.money=function(e){var t=this.match("#Money #Currency?");return "number"==typeof e&&(t=t.get(e)),t},Di.places=function(e){var t=this.match("(#City && @hasComma) (#Region|#Country)"),n=this.not(t).splitAfter("@hasComma");return (n=n.concat(t)).sort("index"),n=n.match("#Place+"),"number"==typeof e&&(n=n.get(e)),n},Di.organizations=function(e){var t=this.clauses();return t=t.match("#Organization+"),"number"==typeof e&&(t=t.get(e)),t},Di.entities=function(e){var t=this.clauses(),n=t.people();return (n=(n=(n=n.concat(t.places())).concat(t.organizations())).not(["someone","man","woman","mother","brother","sister","father"])).sort("sequence"),"number"==typeof e&&(n=n.get(e)),n},Di.things=Di.entities,Di.topics=Di.entities;var $i=Di,Pi=/^(under|over)-?/,Ei=function(e,t,n){var r=n.words,i=e[t].reduced+" "+e[t+1].reduced;return void 0!==r[i]&&!0===r.hasOwnProperty(i)?(e[t].tag(r[i],"lexicon-two",n),e[t+1].tag(r[i],"lexicon-two",n),1):t+2<e.length&&void 0!==r[i+=" "+e[t+2].reduced]&&!0===r.hasOwnProperty(i)?(e[t].tag(r[i],"lexicon-three",n),e[t+1].tag(r[i],"lexicon-three",n),e[t+2].tag(r[i],"lexicon-three",n),2):t+3<e.length&&void 0!==r[i+=" "+e[t+3].reduced]&&!0===r.hasOwnProperty(i)?(e[t].tag(r[i],"lexicon-four",n),e[t+1].tag(r[i],"lexicon-four",n),e[t+2].tag(r[i],"lexicon-four",n),e[t+3].tag(r[i],"lexicon-four",n),3):0},Hi=function(e,t){for(var n=t.words,r=t.hasCompound,i=0;i<e.length;i+=1){var a=e[i].clean;if(!0===r[a]&&i+1<e.length){var o=Ei(e,i,t);if(o>0){i+=o;continue}}if(void 0===n[a]||!0!==n.hasOwnProperty(a))if(a===e[i].reduced||!0!==n.hasOwnProperty(e[i].reduced)){if(!0===Pi.test(a)){var s=a.replace(Pi,"");!0===n.hasOwnProperty(s)&&e[i].tag(n[s],"noprefix-lexicon",t);}}else e[i].tag(n[e[i].reduced],"lexicon",t);else e[i].tag(n[a],"lexicon",t);}return e},ji=/[\'‘’‛‵′`´]$/,Ti=/^(m|k|cm|km|m)\/(s|h|hr)$/,Ii=[[/^[\w\.]+@[\w\.]+\.[a-z]{2,3}$/,"Email"],[/^#[a-z0-9_\u00C0-\u00FF]{2,}$/,"HashTag"],[/^@1?[0-9](am|pm)$/i,"Time"],[/^@1?[0-9]:[0-9]{2}(am|pm)?$/i,"Time"],[/^@\w{2,}$/,"AtMention"],[/^(https?:\/\/|www\.)\w+\.[a-z]{2,3}/,"Url"],[/^[\w./]+\.(com|net|gov|org|ly|edu|info|biz|ru|jp|de|in|uk|br)/,"Url"],[/^'[0-9]{2}$/,"Year"],[/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])$/,"Time"],[/^[012]?[0-9](:[0-5][0-9])?(:[0-5][0-9])? ?(am|pm)$/i,"Time"],[/^[012]?[0-9](:[0-5][0-9])(:[0-5][0-9])? ?(am|pm)?$/i,"Time"],[/^[PMCE]ST$/,"Time"],[/^utc ?[+-]?[0-9]+?$/,"Time"],[/^[a-z0-9]*? o\'?clock$/,"Time"],[/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/i,"Date"],[/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,4}$/,"Date"],[/^[0-9]{1,4}\/[0-9]{1,2}\/[0-9]{1,4}$/,"Date"],[/^[0-9]{1,4}-[a-z]{2,9}-[0-9]{1,4}$/i,"Date"],[/^gmt[+-][0-9][0-9]?$/i,"Timezone"],[/^utc[+-][0-9][0-9]?$/i,"Timezone"],[/^ma?c\'.*/,"LastName"],[/^o\'[drlkn].*/,"LastName"],[/^ma?cd[aeiou]/,"LastName"],[/^(lol)+[sz]$/,"Expression"],[/^woo+a*?h?$/,"Expression"],[/^(un|de|re)\\-[a-z\u00C0-\u00FF]{2}/,"Verb"],[/^[0-9]{1,4}\.[0-9]{1,2}\.[0-9]{1,4}$/,"Date"],[/^[0-9]{3}-[0-9]{4}$/,"PhoneNumber"],[/^(\+?[0-9][ -])?[0-9]{3}[ -]?[0-9]{3}-[0-9]{4}$/,"PhoneNumber"],[/^[-+]?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6][-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(k|m|b|bn)?\+?$/,["Money","Value"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]\+?$/,["Money","Value"]],[/^[-+]?[\$£]?[0-9]([0-9,.])+?(usd|eur|jpy|gbp|cad|aud|chf|cny|hkd|nzd|kr|rub)$/i,["Money","Value"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?\+?$/,["Cardinal","NumericValue"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?(st|nd|rd|r?th)$/,["Ordinal","NumericValue"]],[/^\.[0-9]+\+?$/,["Cardinal","NumericValue"]],[/^[-+]?[0-9]+(,[0-9]{3})*(\.[0-9]+)?%\+?$/,["Percent","Cardinal","NumericValue"]],[/^\.[0-9]+%$/,["Percent","Cardinal","NumericValue"]],[/^[0-9]{1,4}\/[0-9]{1,4}(st|nd|rd|th)?s?$/,["Fraction","NumericValue"]],[/^[0-9.]{1,2}[-–][0-9]{1,2}$/,["Value","NumberRange"]],[/^[0-9.]{1,3}(st|nd|rd|th)?[-–][0-9\.]{1,3}(st|nd|rd|th)?$/,"NumberRange"],[/^[0-9.]+([a-z]{1,4})$/,"Value"]],Ni=/^[IVXLCDM]{2,}$/,Fi=/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/,Bi="Adjective",Li="Infinitive",Oi="PresentTense",zi="Singular",Mi="PastTense",_i="Expression",Vi={a:[[/.[aeiou]na$/,"Noun"],[/.[oau][wvl]ska$/,"LastName"],[/.[^aeiou]ica$/,zi],[/^([hyj]a)+$/,_i]],c:[[/.[^aeiou]ic$/,Bi]],d:[[/[aeiou](pp|ll|ss|ff|gg|tt|rr|bb|nn|mm)ed$/,Mi],[/.[aeo]{2}[bdgmnprvz]ed$/,Mi],[/.[aeiou][sg]hed$/,Mi],[/.[aeiou]red$/,Mi],[/.[aeiou]r?ried$/,Mi],[/.[bcdgtr]led$/,Mi],[/.[aoui]f?led$/,Mi],[/.[iao]sed$/,Mi],[/[aeiou]n?[cs]ed$/,Mi],[/[aeiou][rl]?[mnf]ed$/,Mi],[/[aeiou][ns]?c?ked$/,Mi],[/[aeiou][nl]?ged$/,Mi],[/.[tdbwxz]ed$/,Mi],[/[^aeiou][aeiou][tvx]ed$/,Mi],[/.[cdlmnprstv]ied$/,Mi],[/[^aeiou]ard$/,zi],[/[aeiou][^aeiou]id$/,Bi],[/.[vrl]id$/,Bi]],e:[[/.[lnr]ize$/,Li],[/.[^aeiou]ise$/,Li],[/.[aeiou]te$/,Li],[/.[^aeiou][ai]ble$/,Bi],[/.[^aeiou]eable$/,Bi],[/.[ts]ive$/,Bi]],h:[[/.[^aeiouf]ish$/,Bi],[/.v[iy]ch$/,"LastName"],[/^ug?h+$/,_i],[/^uh[ -]?oh$/,_i]],i:[[/.[oau][wvl]ski$/,"LastName"]],k:[[/^(k){2}$/,_i]],l:[[/.[gl]ial$/,Bi],[/.[^aeiou]ful$/,Bi],[/.[nrtumcd]al$/,Bi],[/.[^aeiou][ei]al$/,Bi]],m:[[/.[^aeiou]ium$/,zi],[/[^aeiou]ism$/,zi],[/^h*u*m+$/,_i],[/^\d+ ?[ap]m$/,"Date"]],n:[[/.[lsrnpb]ian$/,Bi],[/[^aeiou]ician$/,"Actor"],[/[aeiou][ktrp]in$/,"Gerund"]],o:[[/^no+$/,_i],[/^(yo)+$/,_i],[/^woo+[pt]?$/,_i]],r:[[/.[bdfklmst]ler$/,"Noun"],[/[aeiou][pns]er$/,zi],[/[^i]fer$/,Li],[/.[^aeiou][ao]pher$/,"Actor"],[/.[lk]er$/,"Noun"],[/.ier$/,"Comparative"]],t:[[/.[di]est$/,"Superlative"],[/.[icldtgrv]ent$/,Bi],[/[aeiou].*ist$/,Bi],[/^[a-z]et$/,"Verb"]],s:[[/.[^aeiou]ises$/,Oi],[/.[rln]ates$/,Oi],[/.[^z]ens$/,"Verb"],[/.[lstrn]us$/,zi],[/.[aeiou]sks$/,Oi],[/.[aeiou]kes$/,Oi],[/[aeiou][^aeiou]is$/,zi],[/[a-z]\'s$/,"Noun"],[/^yes+$/,_i]],v:[[/.[^aeiou][ai][kln]ov$/,"LastName"]],y:[[/.[cts]hy$/,Bi],[/.[st]ty$/,Bi],[/.[gk]y$/,Bi],[/.[tnl]ary$/,Bi],[/.[oe]ry$/,zi],[/[rdntkbhs]ly$/,"Adverb"],[/...lly$/,"Adverb"],[/[bszmp]{2}y$/,Bi],[/.(gg|bb|zz)ly$/,Bi],[/.[ai]my$/,Bi],[/[ea]{2}zy$/,Bi],[/.[^aeiou]ity$/,zi]]},Gi="Adjective",Si="Infinitive",Ji="PresentTense",Ki="Singular",Ui="PastTense",Ri="Adverb",Wi="Plural",Zi="Verb",qi="LastName",Xi=[null,null,{ea:Ki,ia:"Noun",ic:Gi,ly:Ri,"'n":Zi,"'t":Zi},{oed:Ui,ued:Ui,xed:Ui," so":Ri,"'ll":"Modal","'re":"Copula",azy:Gi,eer:"Noun",end:Zi,ped:Ui,ffy:Gi,ify:Si,ing:"Gerund",ize:Si,lar:Gi,mum:Gi,nes:Ji,nny:Gi,oid:Gi,ous:Gi,que:Gi,rol:Ki,sis:Ki,zes:Ji},{amed:Ui,aped:Ui,ched:Ui,lked:Ui,nded:Ui,cted:Ui,dged:Ui,akis:qi,cede:Si,chuk:qi,czyk:qi,ects:Ji,ends:Zi,enko:qi,ette:Ki,fies:Ji,fore:Ri,gate:Si,gone:Gi,ices:Wi,ints:Wi,ines:Wi,ions:Wi,less:Ri,llen:Gi,made:Gi,nsen:qi,oses:Ji,ould:"Modal",some:Gi,sson:qi,tage:Si,teen:"Value",tion:Ki,tive:Gi,tors:"Noun",vice:Ki},{tized:Ui,urned:Ui,eased:Ui,ances:Wi,bound:Gi,ettes:Wi,fully:Ri,ishes:Ji,ities:Wi,marek:qi,nssen:qi,ology:"Noun",ports:Wi,rough:Gi,tches:Ji,tieth:"Ordinal",tures:Wi,wards:Ri,where:Ri},{auskas:qi,keeper:"Actor",logist:"Actor",teenth:"Value"},{opoulos:qi,borough:"Place",sdottir:qi}],Yi={":(":!0,":)":!0,":P":!0,":p":!0,":O":!0,":3":!0,":|":!0,":/":!0,":\\":!0,":$":!0,":*":!0,":@":!0,":-(":!0,":-)":!0,":-P":!0,":-p":!0,":-O":!0,":-3":!0,":-|":!0,":-/":!0,":-\\":!0,":-$":!0,":-*":!0,":-@":!0,":^(":!0,":^)":!0,":^P":!0,":^p":!0,":^O":!0,":^3":!0,":^|":!0,":^/":!0,":^\\":!0,":^$":!0,":^*":!0,":^@":!0,"):":!0,"(:":!0,"$:":!0,"*:":!0,")-:":!0,"(-:":!0,"$-:":!0,"*-:":!0,")^:":!0,"(^:":!0,"$^:":!0,"*^:":!0,"<3":!0,"</3":!0,"<\\3":!0},Qi=/^(\u00a9|\u00ae|[\u2319-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,ea={lexicon:Hi,punctuation:function(e,t,n){var r=e[t];if(ji.test(r.text)&&!ji.test(r.pre)&&!ji.test(r.post)&&r.clean.length>2){var i=r.clean[r.clean.length-2];if("s"===i)return void r.tag(["Possessive","Noun"],"end-tick",n);"n"===i&&r.tag(["Gerund"],"chillin",n);}Ti.test(r.text)&&r.tag("Unit","per-sec",n);},regex:function(e,t){for(var n=e.text,r=0;r<Ii.length;r+=1)if(!0===Ii[r][0].test(n)){e.tagSafe(Ii[r][1],"prefix #"+r,t);break}e.text.length>=2&&Ni.test(n)&&Fi.test(n)&&e.tag("RomanNumeral","xvii",t);},suffix:function(e,t){!function(e,t){var n=e.clean.length,r=7;n<=r&&(r=n-1);for(var i=r;i>1;i-=1){var a=e.clean.substr(n-i,n);if(!0===Xi[a.length].hasOwnProperty(a)){var o=Xi[a.length][a];e.tagSafe(o,"suffix -"+a,t);break}}}(e,t),function(e,t){var n=e.clean,r=n[n.length-1];if(!0===Vi.hasOwnProperty(r))for(var i=Vi[r],a=0;a<i.length;a+=1)if(!0===i[a][0].test(n)){e.tagSafe(i[a][1],"endReg ".concat(r," #").concat(a),t);break}}(e,t);},emoji:function(e,t){var n,r=e.pre+e.text+e.post;!0===function(e){return !(":"!==e.charAt(0)||null===e.match(/:.?$/)||e.match(" ")||e.length>35)}(r=(r=r.trim()).replace(/[.!?,]$/,""))&&(e.tag("Emoji","comma-emoji",t),e.text=r,e.pre=e.pre.replace(":",""),e.post=e.post.replace(":","")),e.text.match(Qi)&&(e.tag("Emoji","unicode-emoji",t),e.text=r),!0===(n=(n=r).replace(/^[:;]/,":"),Yi.hasOwnProperty(n))&&(e.tag("Emoticon","emoticon-emoji",t),e.text=r);}},ta=function(e,t){var n=e.world;ea.lexicon(t,n);for(var r=0;r<t.length;r+=1){var i=t[r];ea.punctuation(t,r,n),ea.regex(i,n),ea.suffix(i,n),ea.emoji(i,n);}return e},na={beforeThisWord:{there:"Verb",me:"Verb",man:"Adjective",only:"Verb",him:"Verb",were:"Noun",took:"Noun",himself:"Verb",went:"Noun",who:"Noun",jr:"Person"},afterThisWord:{i:"Verb",first:"Noun",it:"Verb",there:"Verb",not:"Verb",because:"Noun",if:"Noun",but:"Noun",who:"Verb",this:"Noun",his:"Noun",when:"Noun",you:"Verb",very:"Adjective",old:"Noun",never:"Verb",before:"Noun"},beforeThisPos:{Copula:"Noun",PastTense:"Noun",Conjunction:"Noun",Modal:"Noun",Pluperfect:"Noun",PerfectTense:"Verb"},afterThisPos:{Adjective:"Noun",Possessive:"Noun",Determiner:"Noun",Adverb:"Verb",Pronoun:"Verb",Value:"Noun",Ordinal:"Noun",Modal:"Verb",Superlative:"Noun",Demonym:"Noun",Honorific:"Person"}},ra=Object.keys(na.afterThisPos),ia=Object.keys(na.beforeThisPos),aa=function(e,t){for(var n=function(n){var r=e[n];if(!0===r.isKnown())return "continue";var i=e[n-1];if(i){if(!0===na.afterThisWord.hasOwnProperty(i.clean)){var a=na.afterThisWord[i.clean];return r.tag(a,"after-"+i.clean,t),"continue"}var o=ra.find((function(e){return i.tags[e]}));if(void 0!==o){var s=na.afterThisPos[o];return r.tag(s,"after-"+o,t),"continue"}}var l=e[n+1];if(l){if(!0===na.beforeThisWord.hasOwnProperty(l.clean)){var u=na.beforeThisWord[l.clean];return r.tag(u,"before-"+l.clean,t),"continue"}var c=ia.find((function(e){return l.tags[e]}));if(void 0!==c){var h=na.beforeThisPos[c];return r.tag(h,"before-"+c,t),"continue"}}},r=0;r<e.length;r+=1)n(r);},oa=/^[A-Z][a-z'\u00C0-\u00FF]/,sa=/[0-9]/,la=function(e){var t=e.world;e.list.forEach((function(e){for(var n=e.terms(),r=1;r<n.length;r++){var i=n[r];!0===oa.test(i.text)&&!1===sa.test(i.text)&&void 0===i.tags.Date&&i.tag("ProperNoun","titlecase-noun",t);}}));},ua=/^(re|un)-?[a-z\u00C0-\u00FF]/,ca=/^(re|un)-?/,ha=function(e,t){var n=t.words;e.forEach((function(e){if(!0!==e.isKnown()&&!0===ua.test(e.clean)){var r=e.clean.replace(ca,"");r&&r.length>3&&void 0!==n[r]&&!0===n.hasOwnProperty(r)&&e.tag(n[r],"stem-"+r,t);}}));},da={isSingular:[/(ax|test)is$/i,/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,/(octop|vir)i$/i,/(rl)f$/i,/(alias|status)$/i,/(bu)s$/i,/(al|ad|at|er|et|ed|ad)o$/i,/(ti)um$/i,/(ti)a$/i,/sis$/i,/(?:(^f)fe|(lr)f)$/i,/hive$/i,/s[aeiou]+ns$/i,/(^aeiouy|qu)y$/i,/(x|ch|ss|sh|z)$/i,/(matr|vert|ind|cort)(ix|ex)$/i,/(m|l)ouse$/i,/(m|l)ice$/i,/(antenn|formul|nebul|vertebr|vit)a$/i,/.sis$/i,/^(?!talis|.*hu)(.*)man$/i],isPlural:[/(^v)ies$/i,/ises$/i,/ives$/i,/(antenn|formul|nebul|vertebr|vit)ae$/i,/(octop|vir|radi|nucle|fung|cact|stimul)i$/i,/(buffal|tomat|tornad)oes$/i,/(analy|ba|diagno|parenthe|progno|synop|the)ses$/i,/(vert|ind|cort)ices$/i,/(matr|append)ices$/i,/(x|ch|ss|sh|s|z|o)es$/i,/is$/i,/men$/i,/news$/i,/.tia$/i,/(^f)ves$/i,/(lr)ves$/i,/(^aeiouy|qu)ies$/i,/(m|l)ice$/i,/(cris|ax|test)es$/i,/(alias|status)es$/i,/ics$/i]},pa=["Uncountable","Pronoun","Place","Value","Person","Month","WeekDay","Holiday"],ga=[/ss$/,/sis$/,/[^aeiou][uo]s$/,/'s$/],ma=[/i$/,/ae$/],fa=function(e,t){if(e.tags.Noun&&!e.tags.Acronym){var n=e.clean;if(e.tags.Singular||e.tags.Plural)return;if(n.length<=3)return void e.tag("Singular","short-singular",t);if(pa.find((function(t){return e.tags[t]})))return;if(da.isPlural.find((function(e){return e.test(n)})))return void e.tag("Plural","plural-rules",t);if(da.isSingular.find((function(e){return e.test(n)})))return void e.tag("Singular","singular-rules",t);if(!0===/s$/.test(n)){if(ga.find((function(e){return e.test(n)})))return;return void e.tag("Plural","plural-fallback",t)}if(ma.find((function(e){return e.test(n)})))return;e.tag("Singular","singular-fallback",t);}},va=["academy","administration","agence","agences","agencies","agency","airlines","airways","army","assoc","associates","association","assurance","authority","autorite","aviation","bank","banque","board","boys","brands","brewery","brotherhood","brothers","building society","bureau","cafe","caisse","capital","care","cathedral","center","central bank","centre","chemicals","choir","chronicle","church","circus","clinic","clinique","club","co","coalition","coffee","collective","college","commission","committee","communications","community","company","comprehensive","computers","confederation","conference","conseil","consulting","containers","corporation","corps","corp","council","crew","daily news","data","departement","department","department store","departments","design","development","directorate","division","drilling","education","eglise","electric","electricity","energy","ensemble","enterprise","enterprises","entertainment","estate","etat","evening news","faculty","federation","financial","fm","foundation","fund","gas","gazette","girls","government","group","guild","health authority","herald","holdings","hospital","hotel","hotels","inc","industries","institut","institute","institute of technology","institutes","insurance","international","interstate","investment","investments","investors","journal","laboratory","labs","liberation army","limited","local authority","local health authority","machines","magazine","management","marine","marketing","markets","media","memorial","mercantile exchange","ministere","ministry","military","mobile","motor","motors","musee","museum","news","news service","observatory","office","oil","optical","orchestra","organization","partners","partnership","people's party","petrol","petroleum","pharmacare","pharmaceutical","pharmaceuticals","pizza","plc","police","polytechnic","post","power","press","productions","quartet","radio","regional authority","regional health authority","reserve","resources","restaurant","restaurants","savings","school","securities","service","services","social club","societe","society","sons","standard","state police","state university","stock exchange","subcommittee","syndicat","systems","telecommunications","telegraph","television","times","tribunal","tv","union","university","utilities","workers"].reduce((function(e,t){return e[t]="Noun",e}),{}),ba=function(e){return !!e.tags.Noun&&(!(e.tags.Pronoun||e.tags.Comma||e.tags.Possessive)&&!!(e.tags.Organization||e.tags.Acronym||e.tags.Place||e.titleCase()))},ya=/^[A-Z]('s|,)?$/,wa=/([A-Z]\.){2}[A-Z]?/i,ka={I:!0,A:!0},Ca={neighbours:aa,case:la,stem:ha,plural:fa,organizations:function(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(void 0!==va[r.clean]&&!0===va.hasOwnProperty(r.clean)){var i=e[n-1];if(void 0!==i&&!0===ba(i)){i.tagSafe("Organization","org-word-1",t),r.tagSafe("Organization","org-word-2",t);continue}var a=e[n+1];if(void 0!==a&&"of"===a.clean&&e[n+2]&&ba(e[n+2])){r.tagSafe("Organization","org-of-word-1",t),a.tagSafe("Organization","org-of-word-2",t),e[n+2].tagSafe("Organization","org-of-word-3",t);continue}}}},acronyms:function(e,t){e.forEach((function(e){!0!==e.tags.RomanNumeral&&(!0===wa.test(e.text)&&e.tag("Acronym","period-acronym",t),e.isUpperCase()&&function(e,t){var n=e.reduced;return !!e.tags.Acronym||!t.words[n]&&!(n.length>5)&&e.isAcronym()}(e,t)?(e.tag("Acronym","acronym-step",t),e.tag("Noun","acronym-infer",t)):!ka.hasOwnProperty(e.text)&&ya.test(e.text)&&(e.tag("Acronym","one-letter-acronym",t),e.tag("Noun","one-letter-infer",t)),e.tags.Organization&&e.text.length<=3&&e.tag("Acronym","acronym-org",t),e.tags.Organization&&e.isUpperCase()&&e.text.length<=6&&e.tag("Acronym","acronym-org-case",t));}));}},xa=function(e,t){var n=e.world;return Ca.neighbours(t,n),Ca.case(e),Ca.stem(t,n),t.forEach((function(t){!1===t.isKnown()&&t.tag("Noun","noun-fallback",e.world);})),Ca.organizations(t,n),Ca.acronyms(t,n),t.forEach((function(t){Ca.plural(t,e.world);})),e},Aa=/n't$/,Da={"won't":["will","not"],wont:["will","not"],"can't":["can","not"],cant:["can","not"],cannot:["can","not"],"shan't":["should","not"],dont:["do","not"],dun:["do","not"]},$a=function(e,t){return !0===Da.hasOwnProperty(e.clean)?Da[e.clean]:"ain't"===e.clean||"aint"===e.clean?function(e,t){var n=t.terms(),r=n.indexOf(e),i=n.slice(0,r).find((function(e){return e.tags.Noun}));return i&&i.tags.Plural?["are","not"]:["is","not"]}(e,t):!0===Aa.test(e.clean)?[e.clean.replace(Aa,""),"not"]:null},Pa=/([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z]{1,2})$/i,Ea={ll:"will",ve:"have",re:"are",m:"am","n't":"not"},Ha=function(e){var t=e.text.match(Pa);return null===t?null:Ea.hasOwnProperty(t[2])?[t[1],Ea[t[2]]]:null},ja={wanna:["want","to"],gonna:["going","to"],im:["i","am"],alot:["a","lot"],ive:["i","have"],imma:["I","will"],"where'd":["where","did"],whered:["where","did"],"when'd":["when","did"],whend:["when","did"],howd:["how","did"],whatd:["what","did"],dunno:["do","not","know"],brb:["be","right","back"],gtg:["got","to","go"],irl:["in","real","life"],tbh:["to","be","honest"],imo:["in","my","opinion"],til:["today","i","learned"],rn:["right","now"],twas:["it","was"],"@":["at"]},Ta=function(e){return ja.hasOwnProperty(e.clean)?ja[e.clean]:null},Ia=/([a-z\u00C0-\u00FF]+)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]s$/i,Na={that:!0,there:!0},Fa={here:!0,there:!0,everywhere:!0},Ba=function(e,t,n){var r=e.text.match(Ia);if(null!==r){if(!0===function(e,t){if(e.tags.Possessive)return !0;if(e.tags.Pronoun||e.tags.QuestionWord)return !1;if(Na.hasOwnProperty(e.reduced))return !1;var n=t.get(e.next);if(!n)return !0;if(n.tags.Verb)return !!n.tags.Infinitive||!!n.tags.PresentTense;if(n.tags.Noun)return !0!==Fa.hasOwnProperty(n.reduced);var r=t.get(n.next);return !(!r||!r.tags.Noun||r.tags.Pronoun)||(n.tags.Adjective||n.tags.Adverb||n.tags.Verb,!1)}(e,t.pool))return e.tag("#Possessive","isPossessive",n),null;if(null!==r)return function(e,t){var n=t.terms(),r=n.indexOf(e);return n.slice(r+1,r+3).find((function(e){return e.tags.PastTense}))}(e,t)?[r[1],"has"]:[r[1],"is"]}return null},La=/[a-z\u00C0-\u00FF]'d$/,Oa={how:!0,what:!0},za=function(e,t){if(La.test(e.clean)){for(var n=e.clean.replace(/'d$/,""),r=t.terms(),i=r.indexOf(e),a=r.slice(i+1,i+4),o=0;o<a.length;o++){var s=a[o];if(s.tags.Verb)return s.tags.PastTense?[n,"had"]:!0===Oa[n]?[n,"did"]:[n,"would"]}return [n,"would"]}return null},Ma=/^([0-9]{1,3}(?:st|nd|rd|th)?)[-–—]([0-9]{1,3}(?:st|nd|rd|th)?)$/i,_a=function(e){if(!0===e.tags.PhoneNumber)return null;var t=e.text.match(Ma);return null!==t?[t[1],"to",t[2]]:null},Va=/^(l|c|d|j|m|n|qu|s|t)[\u0027\u0060\u00B4\u2018\u2019\u201A\u201B\u2032\u2035\u2039\u203A]([a-z\u00C0-\u00FF]+)$/i,Ga={l:"le",c:"ce",d:"de",j:"je",m:"me",n:"ne",qu:"que",s:"se",t:"tu"},Sa=function(e){var t=e.text.match(Va);if(null===t||!1===Ga.hasOwnProperty(t[1]))return null;var n=[Ga[t[1]],t[2]];return n[0]&&n[1]?n:null},Ja=/^[0-9]+$/,Ka=/^[0-9]+(st|nd|rd|th)$/,Ua=function(e,t){var n=Pn(e.join(" "),t.world,t.pool())[0],r=n.terms();return Hi(r,t.world),r.forEach((function(e){e.implicit=e.text,e.text="",e.clean="",e.pre="",e.post="",Ja.test(e.implicit)?e.tag("Cardinal","num-range",t.world):Ka.test(e.implicit)?e.tag("Ordinal","ord-range",t.world):0===Object.keys(e.tags).length&&(e.tags.Noun=!0);})),n},Ra=function(e){var t=e.world;return e.list.forEach((function(n){for(var r=n.terms(),i=0;i<r.length;i+=1){var a=r[i],o=$a(a,n);if(null!==(o=(o=(o=(o=(o=(o=o||Ha(a))||Ta(a))||Ba(a,n,t))||za(a,n))||_a(a))||Sa(a))){var s=Ua(o,e);!0===n.has("#NumberRange")&&e.buildFrom([s]).tag("NumberRange"),s.terms(0).text=a.text,n.buildFrom(a.id,1,e.pool()).replace(s,e,!0);}}})),e},Wa=function(e,t){var n=e._cache.tags[t]||[];return n=n.map((function(t){return e.list[t]})),e.buildFrom(n)},Za=function(e){var t=Wa(e,"Infinitive");return t.found&&((t=(t=t.ifNo("@hasQuestionMark")).ifNo("(i|we|they)")).match("[#Infinitive] (#Determiner|#Possessive) #Noun",0).tag("Imperative","shut-the"),t.match("^[#Infinitive] #Adverb?$",0).tag("Imperative","go-fast"),t.match("[(do && #Infinitive)] not? #Verb",0).tag("Imperative","do-not"),t.match("[#Infinitive] (it|some)",0).tag("Imperative","do-it")),(t=function(e,t){var n=e._cache.words[t]||[];return n=n.map((function(t){return e.list[t]})),e.buildFrom(n)}(e,"like")).match("#Adverb like").notIf("(really|generally|typically|usually|sometimes|often|just) [like]").tag("Adverb","adverb-like"),(t=Wa(e,"Adjective")).match("#Determiner #Adjective$").notIf("(#Comparative|#Superlative)").terms(1).tag("Noun","the-adj-1"),(t=Wa(e,"FirstName")).match("#FirstName (#Noun|@titleCase)").ifNo("^#Possessive").ifNo("(#Pronoun|#Plural)").ifNo("@hasComma .").lastTerm().tag("#LastName","firstname-noun"),(t=(t=Wa(e,"Value")).match("#Value #PresentTense").ifNo("#Copula")).found&&(!0===t.has("(one|1)")?t.terms(1).tag("Singular","one-presentTense"):t.terms(1).tag("Plural","value-presentTense")),e.match("^(well|so|okay)").tag("Expression","well-"),e.match("#Value [of a second]",0).unTag("Value","of-a-second"),e.match("#Value [seconds]",0).unTag("Value","30-seconds").tag(["Unit","Plural"]),(t=Wa(e,"Gerund")).match("(be|been) (#Adverb|not)+? #Gerund").not("#Verb$").tag("Auxiliary","be-walking"),e.match("(try|use|attempt|build|make) #Verb").ifNo("(@hasComma|#Negative|#PhrasalVerb|#Copula|will|be)").lastTerm().tag("#Noun","do-verb"),(t=(t=Wa(e,"Possessive")).match("#Possessive [#Infinitive]",0)).lookBehind("(let|made|make|force|ask)").found||t.tag("Noun","her-match"),e},qa=function(e){for(var t={},n=0;n<e.length;n++)t[e[n]]=!0;return Object.keys(t)},Xa=[{match:"too much",tag:"Adverb Adjective",reason:"bit-4"},{match:"u r",tag:"Pronoun Copula",reason:"u r"},{match:"#Copula (pretty|dead|full|well|sure) (#Adjective|#Noun)",tag:"#Copula #Adverb #Adjective",reason:"sometimes-adverb"},{match:"(#Pronoun|#Person) (had|#Adverb)? [better] #PresentTense",group:0,tag:"Modal",reason:"i-better"},{match:"[#Gerund] #Adverb? not? #Copula",group:0,tag:"Activity",reason:"gerund-copula"},{match:"[#Gerund] #Modal",group:0,tag:"Activity",reason:"gerund-modal"},{match:"holy (shit|fuck|hell)",tag:"Expression",reason:"swears-expression"},{match:"#Noun #Actor",tag:"Actor",reason:"thing-doer"},{match:"#Conjunction [u]",group:0,tag:"Pronoun",reason:"u-pronoun-2"},{match:"[u] #Verb",group:0,tag:"Pronoun",reason:"u-pronoun-1"},{match:"#Noun [(who|whom)]",group:0,tag:"Determiner",reason:"captain-who"},{match:"a bit much",tag:"Determiner Adverb Adjective",reason:"bit-3"},{match:"#Verb #Adverb? #Noun [(that|which)]",group:0,tag:"Preposition",reason:"that-prep"},{match:"@hasComma [which] (#Pronoun|#Verb)",group:0,tag:"Preposition",reason:"which-copula"},{match:"#Copula just [like]",group:0,tag:"Preposition",reason:"like-preposition"},{match:"#Noun [like] #Noun",group:0,tag:"Preposition",reason:"noun-like"},{match:"[had] #Noun+ #PastTense",group:0,tag:"Condition",reason:"had-he"},{match:"[were] #Noun+ to #Infinitive",group:0,tag:"Condition",reason:"were-he"},{match:"^how",tag:"QuestionWord",reason:"how-question"},{match:"[how] (#Determiner|#Copula|#Modal|#PastTense)",group:0,tag:"QuestionWord",reason:"how-is"},{match:"^which",tag:"QuestionWord",reason:"which-question"},{match:"[so] #Noun",group:0,tag:"Conjunction",reason:"so-conj"},{match:"[(who|what|where|why|how|when)] #Noun #Copula #Adverb? (#Verb|#Adjective)",group:0,tag:"Conjunction",reason:"how-he-is-x"}],Ya={adverbAdjective:["dark","bright","flat","light","soft","pale","dead","dim","faux","little","wee","sheer","most","near","good","extra","all"],personDate:["april","june","may","jan","august","eve"],personMonth:["january","april","may","june","jan","sep"],personAdjective:["misty","rusty","dusty","rich","randy","young"],personVerb:["pat","wade","ollie","will","rob","buck","bob","mark","jack"],personPlace:["darwin","hamilton","paris","alexandria","houston","kobe","santiago","salvador","sydney","victoria"],personNoun:["art","baker","berg","bill","brown","charity","chin","christian","cliff","daisy","dawn","dick","dolly","faith","franco","gene","green","hall","hill","holly","hope","jean","jewel","joy","kelvin","king","kitty","lane","lily","melody","mercedes","miles","olive","penny","ray","reed","robin","rod","rose","sky","summer","trinity","van","viola","violet","wang","white"]},Qa="(".concat(Ya.personDate.join("|"),")"),eo=[{match:"#Holiday (day|eve)",tag:"Holiday",reason:"holiday-day"},{match:"[sun] the #Ordinal",tag:"WeekDay",reason:"sun-the-5th"},{match:"[sun] #Date",group:0,tag:"WeekDay",reason:"sun-feb"},{match:"#Date (on|this|next|last|during)? [sun]",group:0,tag:"WeekDay",reason:"1pm-sun"},{match:"(in|by|before|during|on|until|after|of|within|all) [sat]",group:0,tag:"WeekDay",reason:"sat"},{match:"(in|by|before|during|on|until|after|of|within|all) [wed]",group:0,tag:"WeekDay",reason:"wed"},{match:"(in|by|before|during|on|until|after|of|within|all) [march]",group:0,tag:"Month",reason:"march"},{match:"[sat] #Date",group:0,tag:"WeekDay",reason:"sat-feb"},{match:"#Preposition [(march|may)]",group:0,tag:"Month",reason:"in-month"},{match:"this [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"next [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"last [(march|may)]",group:0,tag:"Month",reason:"this-month"},{match:"[(march|may)] the? #Value",group:0,tag:"Month",reason:"march-5th"},{match:"#Value of? [(march|may)]",group:0,tag:"Month",reason:"5th-of-march"},{match:"[(march|may)] .? #Date",group:0,tag:"Month",reason:"march-and-feb"},{match:"#Date .? [(march|may)]",group:0,tag:"Month",reason:"feb-and-march"},{match:"#Adverb [(march|may)]",group:0,tag:"Verb",reason:"quickly-march"},{match:"[(march|may)] #Adverb",group:0,tag:"Verb",reason:"march-quickly"},{match:"#Value of #Month",tag:"Date",reason:"value-of-month"},{match:"#Cardinal #Month",tag:"Date",reason:"cardinal-month"},{match:"#Month #Value to #Value",tag:"Date",reason:"value-to-value"},{match:"#Month the #Value",tag:"Date",reason:"month-the-value"},{match:"(#WeekDay|#Month) #Value",tag:"Date",reason:"date-value"},{match:"#Value (#WeekDay|#Month)",tag:"Date",reason:"value-date"},{match:"(#TextValue && #Date) #TextValue",tag:"Date",reason:"textvalue-date"},{match:"in [".concat(Qa,"]"),group:0,tag:"Date",reason:"in-june"},{match:"during [".concat(Qa,"]"),group:0,tag:"Date",reason:"in-june"},{match:"on [".concat(Qa,"]"),group:0,tag:"Date",reason:"in-june"},{match:"by [".concat(Qa,"]"),group:0,tag:"Date",reason:"by-june"},{match:"after [".concat(Qa,"]"),group:0,tag:"Date",reason:"after-june"},{match:"#Date [".concat(Qa,"]"),group:0,tag:"Date",reason:"in-june"},{match:"".concat(Qa," #Value"),tag:"Date",reason:"june-5th"},{match:"".concat(Qa," #Date"),tag:"Date",reason:"june-5th"},{match:"".concat(Qa," #ProperNoun"),tag:"Person",reason:"june-smith",safe:!0},{match:"".concat(Qa," #Acronym? (#ProperNoun && !#Month)"),tag:"Person",reason:"june-smith-jr"},{match:"#Cardinal [second]",tag:"Unit",reason:"one-second"},{match:"#Month #NumberRange",tag:"Date",reason:"aug 20-21"},{match:"(#Place|#Demonmym|#Time) (standard|daylight|central|mountain)? time",tag:"Timezone",reason:"std-time"},{match:"(eastern|mountain|pacific|central|atlantic) (standard|daylight|summer)? time",tag:"Timezone",reason:"eastern-time"},{match:"#Time [(eastern|mountain|pacific|central|est|pst|gmt)]",group:0,tag:"Timezone",reason:"5pm-central"},{match:"(central|western|eastern) european time",tag:"Timezone",reason:"cet"}],to="(".concat(Ya.personAdjective.join("|"),")"),no=[{match:"[all] #Determiner? #Noun",group:0,tag:"Adjective",reason:"all-noun"},{match:"#Adverb [".concat(to,"]"),group:0,tag:"Adjective",reason:"really-rich"},{match:"".concat(to," #Person"),tag:"Person",reason:"randy-smith"},{match:"".concat(to," #Acronym? #ProperNoun"),tag:"Person",reason:"rusty-smith"},{match:"#Copula [(just|alone)]$",group:0,tag:"Adjective",reason:"not-adverb"},{match:"#Singular is #Adverb? [#PastTense$]",group:0,tag:"Adjective",reason:"is-filled"},{match:"[#PastTense] #Singular is",group:0,tag:"Adjective",reason:"smoked-poutine"},{match:"[#PastTense] #Plural are",group:0,tag:"Adjective",reason:"baked-onions"},{match:"well [#PastTense]",group:0,tag:"Adjective",reason:"well-made"},{match:"#Copula [fucked up?]",tag:"Adjective",reason:"swears-adjective"},{match:"#Singular (seems|appears) #Adverb? [#PastTense$]",group:0,tag:"Adjective",reason:"seems-filled"},{match:"(a|an) [#Gerund]",group:0,tag:"Adjective",reason:"a|an"},{match:"as [#Gerund] as",group:0,tag:"Adjective",reason:"as-gerund-as"},{match:"more [#Gerund] than",group:0,tag:"Adjective",reason:"more-gerund-than"},{match:"(so|very|extremely) [#Gerund]",group:0,tag:"Adjective",reason:"so-gerund"},{match:"(it|he|she|everything|something) #Adverb? was #Adverb? [#Gerund]",group:0,tag:"Adjective",reason:"it-was-gerund"},{match:"(found|found) it #Adverb? [#Gerund]",group:0,tag:"Adjective",reason:"found-it-gerund"},{match:"a (little|bit|wee) bit? [#Gerund]",group:0,tag:"Adjective",reason:"a-bit-gerund"},{match:"#Copula #Adjective? [(out|in|through)]$",group:0,tag:"Adjective",reason:"still-out"},{match:"^[#Adjective] (the|your) #Noun",group:0,tag:"Infinitive",reason:"shut-the"}],ro="(".concat(Ya.adverbAdjective.join("|"),")"),io=[{match:"[still] #Adjective",group:0,tag:"Adverb",reason:"still-advb"},{match:"[still] #Verb",group:0,tag:"Adverb",reason:"still-verb"},{match:"[so] #Adjective",group:0,tag:"Adverb",reason:"so-adv"},{match:"[way] #Comparative",group:0,tag:"Adverb",reason:"way-adj"},{match:"[way] #Adverb #Adjective",group:0,tag:"Adverb",reason:"way-too-adj"},{match:"[all] #Verb",group:0,tag:"Adverb",reason:"all-verb"},{match:"(#Verb && !#Modal) [like]",group:0,tag:"Adverb",reason:"verb-like"},{match:"(barely|hardly) even",tag:"Adverb",reason:"barely-even"},{match:"[even] #Verb",group:0,tag:"Adverb",reason:"even-walk"},{match:"even left",tag:"#Adverb #Verb",reason:"even-left"},{match:"(#PresentTense && !#Copula) [(hard|quick|long|bright|slow|fast|backwards|forwards)]",group:0,tag:"Adverb",reason:"lazy-ly"},{match:"[much] #Adjective",group:0,tag:"Adverb",reason:"bit-1"},{match:"#Copula [#Adverb]$",group:0,tag:"Adjective",reason:"is-well"},{match:"a [(little|bit|wee) bit?] #Adjective",group:0,tag:"Adverb",reason:"a-bit-cold"},{match:"[".concat(ro,"] #Adjective"),group:0,tag:"Adverb",reason:"dark-green"},{match:"#Adverb [#Adverb]$",group:0,tag:"Adjective",reason:"kinda-sparkly"},{match:"#Adverb [#Adverb] (and|or|then)",group:0,tag:"Adjective",reason:"kinda-sparkly-and"}],ao="(".concat(Ya.personVerb.join("|"),")"),oo=[{match:"[#Adjective] #Possessive #Noun",group:0,tag:"Verb",reason:"gerund-his-noun"},{match:"[#Adjective] (us|you)",group:0,tag:"Gerund",reason:"loving-you"},{match:"(slowly|quickly) [#Adjective]",group:0,tag:"Gerund",reason:"slowly-adj"},{match:"(#Modal|i|they|we|do) not? [like]",group:0,tag:"PresentTense",reason:"modal-like"},{match:"do (simply|just|really|not)+ [(#Adjective|like)]",group:0,tag:"Verb",reason:"do-simply-like"},{match:"does (#Adverb|not)? [#Adjective]",group:0,tag:"PresentTense",reason:"does-mean"},{match:"i (#Adverb|do)? not? [mean]",group:0,tag:"PresentTense",reason:"i-mean"},{match:"#Noun #Adverb? [left]",group:0,tag:"PastTense",reason:"left-verb"},{match:"(this|that) [#Plural]",group:0,tag:"PresentTense",reason:"this-verbs"},{match:"[#Copula (#Adverb|not)+?] (#Gerund|#PastTense)",group:0,tag:"Auxiliary",reason:"copula-walking"},{match:"[(has|had) (#Adverb|not)+?] #PastTense",group:0,tag:"Auxiliary",reason:"had-walked"},{match:"[#Adverb+? (#Modal|did)+ (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"modal-verb"},{match:"[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"would-have"},{match:"[(has|had) (#Adverb|not)+?] #PastTense",group:0,tag:"Auxiliary",reason:"had-walked"},{match:"[(do|does|will|have|had)] (not|#Adverb)? #Verb",group:0,tag:"Auxiliary",reason:"have-had"},{match:"[about to] #Adverb? #Verb",group:0,tag:["Auxiliary","Verb"],reason:"about-to"},{match:"#Modal (#Adverb|not)+? be (#Adverb|not)+? #Verb",group:0,tag:"Auxiliary",reason:"would-be"},{match:"(were|was) being [#PresentTense]",group:0,tag:"PastTense",reason:"was-being"},{match:"[#Modal (#Adverb|not)+? have (#Adverb|not)+? had (#Adverb|not)+?] #Verb",group:0,tag:"Auxiliary",reason:"would-have"},{match:"(#Modal|had|has) (#Adverb|not)+? been (#Adverb|not)+? #Verb",group:0,tag:"Auxiliary",reason:"had-been"},{match:"[(be|being|been)] #Participle",group:0,tag:"Auxiliary",reason:"being-foo"},{match:"(#Verb && @hasHyphen) up",tag:"PhrasalVerb",reason:"foo-up"},{match:"(#Verb && @hasHyphen) off",tag:"PhrasalVerb",reason:"foo-off"},{match:"(#Verb && @hasHyphen) over",tag:"PhrasalVerb",reason:"foo-over"},{match:"(#Verb && @hasHyphen) out",tag:"PhrasalVerb",reason:"foo-out"},{match:"#PhrasalVerb [#PhrasalVerb]",group:0,tag:"Particle",reason:"phrasal-particle"},{match:"#Verb (him|her|it|us|himself|herself|itself|everything|something) [(up|down)]",group:0,tag:"Adverb",reason:"phrasal-pronoun-advb"},{match:"[will #Adverb? not? #Adverb? be] #Gerund",group:0,tag:"Copula",reason:"will-be-copula"},{match:"will #Adverb? not? #Adverb? [be] #Adjective",group:0,tag:"Copula",reason:"be-copula"},{match:"[march] (up|down|back|to|toward)",group:0,tag:"Infinitive",reason:"march-to"},{match:"#Modal [march]",group:0,tag:"Infinitive",reason:"must-march"},{match:"(let|make|made) (him|her|it|#Person|#Place|#Organization)+ [#Singular] (a|an|the|it)",group:0,tag:"Infinitive",reason:"let-him-glue"},{match:"will [#Adjective]",group:0,tag:"Verb",reason:"will-adj"},{match:"#Pronoun [#Adjective] #Determiner #Adjective? #Noun",group:0,tag:"Verb",reason:"he-adj-the"},{match:"#Copula [#Adjective to] #Verb",group:0,tag:"Verb",reason:"adj-to"},{match:"[open] #Determiner",group:0,tag:"Infinitive",reason:"open-the"},{match:"[#PresentTense] (are|were|was) #Adjective",group:0,tag:"Plural",reason:"compromises-are-possible"},{match:"#Modal [".concat(ao,"]"),group:0,tag:"Verb",reason:"would-mark"},{match:"#Adverb [".concat(ao,"]"),group:0,tag:"Verb",reason:"really-mark"},{match:"(to|#Modal) [mark]",group:0,tag:"PresentTense",reason:"to-mark"},{match:"".concat(ao," #Person"),tag:"Person",reason:"rob-smith"},{match:"".concat(ao," #Acronym #ProperNoun"),tag:"Person",reason:"rob-a-smith"},{match:"[shit] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear1-verb"},{match:"[damn] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear2-verb"},{match:"[fuck] (#Determiner|#Possessive|them)",group:0,tag:"Verb",reason:"swear3-verb"}],so=[{match:"(west|north|south|east|western|northern|southern|eastern)+ #Place",tag:"Region",reason:"west-norfolk"},{match:"#City [(al|ak|az|ar|ca|ct|dc|fl|ga|id|il|nv|nh|nj|ny|oh|pa|sc|tn|tx|ut|vt|pr)]",group:0,tag:"Region",reason:"us-state"},{match:"portland [or]",group:0,tag:"Region",reason:"portland-or"},{match:"#ProperNoun+ (district|region|province|county|prefecture|municipality|territory|burough|reservation)",tag:"Region",reason:"foo-district"},{match:"(district|region|province|municipality|territory|burough|state) of #ProperNoun",tag:"Region",reason:"district-of-Foo"},{match:"in [#ProperNoun] #Place",group:0,tag:"Place",reason:"propernoun-place"},{match:"#Value #Noun (st|street|rd|road|crescent|cr|way|tr|terrace|avenue|ave)",tag:"Address",reason:"address-st"}],lo="(".concat(Ya.personNoun.join("|"),")"),uo="(".concat(Ya.personMonth.join("|"),")"),co="(".concat(Ya.personPlace.join("|"),")"),ho=[{match:"[(1st|2nd|first|second)] #Honorific",group:0,tag:"Honorific",reason:"ordinal-honorific"},{match:"[(private|general|major|corporal|lord|lady|secretary|premier)] #Honorific? #Person",group:0,tag:"Honorific",reason:"ambg-honorifics"},{match:"#Copula [(#Noun|#PresentTense)] #LastName",group:0,tag:"FirstName",reason:"copula-noun-lastname"},{match:"(lady|queen|sister) #ProperNoun",tag:"FemaleName",reason:"lady-titlecase",safe:!0},{match:"(king|pope|father) #ProperNoun",tag:"MaleName",reason:"pope-titlecase",safe:!0},{match:"[(will|may|april|june|said|rob|wade|ray|rusty|drew|miles|jack|chuck|randy|jan|pat|cliff|bill)] #LastName",group:0,tag:"FirstName",reason:"maybe-lastname"},{match:"#FirstName [#Determiner #Noun] #LastName",group:0,tag:"NickName",reason:"first-noun-last"},{match:"#Possessive [#FirstName]",group:0,tag:"Person",reason:"possessive-name"},{match:"#ProperNoun (b|c|d|e|f|g|h|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z) #ProperNoun",tag:"Person",reason:"titlecase-acronym-titlecase",safe:!0},{match:"#Acronym #LastName",tag:"Person",reason:"acronym-latname",safe:!0},{match:"#Person (jr|sr|md)",tag:"Person",reason:"person-honorific"},{match:"#Person #Person the? #RomanNumeral",tag:"Person",reason:"roman-numeral"},{match:"#FirstName [/^[^aiurck]$/]",group:0,tag:["Acronym","Person"],reason:"john-e"},{match:"#Honorific #Person",tag:"Person",reason:"honorific-person"},{match:"#Honorific #Acronym",tag:"Person",reason:"Honorific-TitleCase"},{match:"#Noun van der? #Noun",tag:"Person",reason:"van der noun",safe:!0},{match:"(king|queen|prince|saint|lady) of #Noun",tag:"Person",reason:"king-of-noun",safe:!0},{match:"(prince|lady) #Place",tag:"Person",reason:"lady-place"},{match:"(king|queen|prince|saint) #ProperNoun",tag:"Person",reason:"saint-foo"},{match:"[#ProperNoun] #Person",group:0,tag:"Person",reason:"proper-person",safe:!0},{match:"al (#Person|#ProperNoun)",tag:"Person",reason:"al-borlen",safe:!0},{match:"#FirstName de #Noun",tag:"Person",reason:"bill-de-noun"},{match:"#FirstName (bin|al) #Noun",tag:"Person",reason:"bill-al-noun"},{match:"#FirstName #Acronym #ProperNoun",tag:"Person",reason:"bill-acronym-title"},{match:"#FirstName #FirstName #ProperNoun",tag:"Person",reason:"bill-firstname-title"},{match:"#Honorific #FirstName? #ProperNoun",tag:"Person",reason:"dr-john-Title"},{match:"#FirstName the #Adjective",tag:"Person",reason:"name-the-great"},{match:"#FirstName (green|white|brown|hall|young|king|hill|cook|gray|price)",tag:"Person",reason:"bill-green"},{match:"".concat(lo," #Person"),tag:"Person",reason:"ray-smith",safe:!0},{match:"".concat(lo," #Acronym? #ProperNoun"),tag:"Person",reason:"ray-a-smith",safe:!0},{match:"#Infinitive #Determiner? #Adjective? #Noun? (to|for) [".concat(uo,"]"),group:0,tag:"Person",reason:"ambig-person"},{match:"#Infinitive [".concat(uo,"]"),group:0,tag:"Person",reason:"infinitive-person"},{match:"[".concat(uo,"] #Modal"),group:0,tag:"Person",reason:"ambig-modal"},{match:"[may] be",group:0,tag:"Verb",reason:"may-be"},{match:"#Modal [".concat(uo,"]"),group:0,tag:"Person",reason:"modal-ambig"},{match:"#Copula [".concat(uo,"]"),group:0,tag:"Person",reason:"is-may"},{match:"[".concat(uo,"] #Copula"),group:0,tag:"Person",reason:"may-is"},{match:"that [".concat(uo,"]"),group:0,tag:"Person",reason:"that-month"},{match:"with [".concat(uo,"]"),group:0,tag:"Person",reason:"with-month"},{match:"for [".concat(uo,"]"),group:0,tag:"Person",reason:"for-month"},{match:"this [".concat(uo,"]"),group:0,tag:"Month",reason:"this-may"},{match:"next [".concat(uo,"]"),group:0,tag:"Month",reason:"next-may"},{match:"last [".concat(uo,"]"),group:0,tag:"Month",reason:"last-may"},{match:"#Date [".concat(uo,"]"),group:0,tag:"Month",reason:"date-may"},{match:"[".concat(uo,"] the? #Value"),group:0,tag:"Month",reason:"may-5th"},{match:"#Value of [".concat(uo,"]"),group:0,tag:"Month",reason:"5th-of-may"},{match:"#ProperNoun (van|al|bin) #ProperNoun",tag:"Person",reason:"title-van-title",safe:!0},{match:"#ProperNoun (de|du) la? #ProperNoun",tag:"Person",reason:"title-de-title",safe:!0},{match:"#Singular #Acronym #LastName",tag:"#Person",reason:"title-acro-noun",safe:!0},{match:"#FirstName (#Noun && #ProperNoun) #ProperNoun?",tag:"Person",reason:"firstname-titlecase"},{match:"#FirstName #Acronym #Noun",tag:"Person",reason:"n-acro-noun",safe:!0},{match:"#FirstName [(de|di|du|van|von) #Person]",group:0,tag:"LastName",reason:"de-firstname"},{match:"[".concat(co,"] (#ProperNoun && !#Place)"),group:0,tag:"FirstName",reason:"place-firstname"}],po=[];po=(po=(po=(po=(po=(po=(po=(po=(po=(po=po.concat(Xa)).concat(eo)).concat(no)).concat([{match:"there (are|were) #Adjective? [#PresentTense]",group:0,tag:"Plural",reason:"there-are"},{match:"#Determiner [sun]",group:0,tag:"Singular",reason:"the-sun"},{match:"#Verb (a|an) [#Value]",group:0,tag:"Singular",reason:"did-a-value"},{match:"the [(can|will|may)]",group:0,tag:"Singular",reason:"the can"},{match:"#FirstName #Acronym? (#Possessive && #LastName)",tag:"Possessive",reason:"name-poss"},{match:"#Organization+ #Possessive",tag:"Possessive",reason:"org-possessive"},{match:"#Place+ #Possessive",tag:"Possessive",reason:"place-possessive"},{match:"(#Verb && !#Modal) (all|every|each|most|some|no) [#PresentTense]",group:0,tag:"Noun",reason:"all-presentTense"},{match:"#Determiner [#Adjective] #Copula",group:0,tag:"Noun",reason:"the-adj-is"},{match:"#Adjective [#Adjective] #Copula",group:0,tag:"Noun",reason:"adj-adj-is"},{match:"(had|have|#PastTense) #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"adj-presentTense"},{match:"^#Adjective [#PresentTense]",group:0,tag:"Noun",reason:"start adj-presentTense"},{match:"#Value #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"one-big-reason"},{match:"#PastTense #Adjective+ [#PresentTense]",group:0,tag:"Noun",reason:"won-wide-support"},{match:"(many|few|several|couple) [#PresentTense]",group:0,tag:"Noun",reason:"many-poses"},{match:"#Adverb #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"very-big-dream"},{match:"#Adjective [#Infinitive] #Noun",group:0,tag:"Noun",reason:"good-wait-staff"},{match:"#Adjective #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"adorable-little-store"},{match:"#Preposition #Adjective [#PresentTense]",group:0,tag:"Noun",reason:"of-basic-training"},{match:"#Adjective [#Gerund]",group:0,tag:"Noun",reason:"early-warning"},{match:"#Gerund #Adverb? #Comparative [#PresentTense]",group:0,tag:"Noun",reason:"higher-costs"},{match:"#Infinitive (this|that|the) [#Infinitive]",group:0,tag:"Noun",reason:"do-this-dance"},{match:"(his|her|its) [#Adjective]",group:0,tag:"Noun",reason:"his-fine"},{match:"some [#Verb] #Plural",group:0,tag:"Noun",reason:"determiner6"},{match:"more #Noun",tag:"Noun",reason:"more-noun"},{match:"(#Noun && @hasComma) #Noun (and|or) [#PresentTense]",group:0,tag:"Noun",reason:"noun-list"},{match:"(right|rights) of .",tag:"Noun",reason:"right-of"},{match:"a [bit]",group:0,tag:"Noun",reason:"bit-2"},{match:"#Possessive #Ordinal [#PastTense]",group:0,tag:"Noun",reason:"first-thought"},{match:"#Gerund #Determiner [#Infinitive]",group:0,tag:"Noun",reason:"running-a-show"},{match:"#Determiner #Adverb [#Infinitive]",group:0,tag:"Noun",reason:"the-reason"},{match:"(the|this|those|these) #Adjective [#Verb]",group:0,tag:"Noun",reason:"the-adj-verb"},{match:"(the|this|those|these) #Adverb #Adjective [#Verb]",group:0,tag:"Noun",reason:"determiner4"},{match:"#Determiner [#Adjective] (#Copula|#PastTense|#Auxiliary)",group:0,tag:"Noun",reason:"the-adj-2"},{match:"(the|this|a|an) [#Infinitive] #Adverb? #Verb",group:0,tag:"Noun",reason:"determiner5"},{match:"#Determiner [#Infinitive] #Noun",group:0,tag:"Noun",reason:"determiner7"},{match:"#Determiner #Adjective #Adjective? [#Infinitive]",group:0,tag:"Noun",reason:"a-nice-inf"},{match:"the [#Verb] #Preposition .",group:0,tag:"Noun",reason:"determiner1"},{match:"#Determiner [#Verb] of",group:0,tag:"Noun",reason:"the-verb-of"},{match:"#Adjective #Noun+ [#Infinitive] #Copula",group:0,tag:"Noun",reason:"career-move"},{match:"#Determiner #Noun of [#Verb]",group:0,tag:"Noun",reason:"noun-of-noun"},{match:"#Determiner [(western|eastern|northern|southern|central)] #Noun",group:0,tag:"Noun",reason:"western-line"},{match:"#Possessive [#Gerund]",group:0,tag:"Noun",reason:"her-polling"},{match:"(his|her|its) [#PresentTense]",group:0,tag:"Noun",reason:"its-polling"},{match:"(#Determiner|#Value) [(linear|binary|mobile|lexical|technical|computer|scientific|formal)] #Noun",group:0,tag:"Noun",reason:"technical-noun"},{match:"(the|those|these|a|an) [#Participle] #Noun",group:0,tag:"Adjective",reason:"blown-motor"},{match:"(the|those|these|a|an) #Adjective? [#Infinitive]",group:0,tag:"Noun",reason:"det-inf"},{match:"(the|those|these|a|an) #Adjective? [#PresentTense]",group:0,tag:"Noun",reason:"det-pres"},{match:"(the|those|these|a|an) #Adjective? [#PastTense]",group:0,tag:"Noun",reason:"det-past"},{match:"(this|that) [#Gerund]",group:0,tag:"Noun",reason:"this-gerund"},{match:"at some [#Infinitive]",group:0,tag:"Noun",reason:"at-some-inf"},{match:"(#Noun && @hasHyphen) #Verb",tag:"Noun",reason:"hyphen-verb"},{match:"is no [#Verb]",group:0,tag:"Noun",reason:"is-no-verb"},{match:"[#Verb] than",group:0,tag:"Noun",reason:"correction"},{match:"(go|goes|went) to [#Infinitive]",group:0,tag:"Noun",reason:"goes-to-verb"},{match:"(a|an) #Noun [#Infinitive] (#Preposition|#Noun)",group:0,tag:"Noun",reason:"a-noun-inf"},{match:"(a|an) #Noun [#Infinitive]$",group:0,tag:"Noun",reason:"a-noun-inf2"},{match:"do [so]",group:0,tag:"Noun",reason:"so-noun"},{match:"#Copula [#Infinitive] #Noun",group:0,tag:"Noun",reason:"is-pres-noun"},{match:"#Determiner #Adverb? [close]",group:0,tag:"Adjective",reason:"a-close"},{match:"#Determiner [(shit|damn|hell)]",group:0,tag:"Noun",reason:"swears-noun"},{match:"(the|these) [#Singular] (were|are)",group:0,tag:"Plural",reason:"singular-were"},{match:"#Gerund #Adjective? for [#Infinitive]",group:0,tag:"Noun",reason:"running-for"},{match:"#Gerund #Adjective to [#Infinitive]",group:0,tag:"Noun",reason:"running-to"},{match:"(many|any|some|several) [#PresentTense] for",group:0,tag:"Noun",reason:"any-verbs-for"},{match:"(have|had) [#Adjective] #Preposition .",group:0,tag:"Noun",reason:"have-fun"},{match:"co #Noun",tag:"Actor",reason:"co-noun"}])).concat(io)).concat([{match:"1 #Value #PhoneNumber",tag:"PhoneNumber",reason:"1-800-Value"},{match:"#NumericValue #PhoneNumber",tag:"PhoneNumber",reason:"(800) PhoneNumber"},{match:"#Demonym #Currency",tag:"Currency",reason:"demonym-currency"},{match:"[second] #Noun",group:0,tag:"Ordinal",reason:"second-noun"},{match:"#Value+ [#Currency]",group:0,tag:"Unit",reason:"5-yan"},{match:"#Value [(foot|feet)]",group:0,tag:"Unit",reason:"foot-unit"},{match:"(minus|negative) #Value",tag:"Value",reason:"minus-value"},{match:"#Value [#Abbreviation]",group:0,tag:"Unit",reason:"value-abbr"},{match:"#Value [k]",group:0,tag:"Unit",reason:"value-k"},{match:"#Unit an hour",tag:"Unit",reason:"unit-an-hour"},{match:"#Value (point|decimal) #Value",tag:"Value",reason:"value-point-value"},{match:"(#Value|a) [(buck|bucks|grand)]",group:0,tag:"Currency",reason:"value-bucks"},{match:"#Determiner [(half|quarter)] #Ordinal",group:0,tag:"Value",reason:"half-ordinal"},{match:"a #Value",tag:"Value",reason:"a-value"},{match:"[#Value+] #Currency",group:0,tag:"Money",reason:"15 usd"},{match:"(hundred|thousand|million|billion|trillion|quadrillion)+ and #Value",tag:"Value",reason:"magnitude-and-value"},{match:"!once [(a|an)] (#Duration|hundred|thousand|million|billion|trillion)",group:0,tag:"Value",reason:"a-is-one"}])).concat(oo)).concat(so)).concat([{match:"#Noun (&|n) #Noun",tag:"Organization",reason:"Noun-&-Noun"},{match:"#Organization of the? #ProperNoun",tag:"Organization",reason:"org-of-place",safe:!0},{match:"#Organization #Country",tag:"Organization",reason:"org-country"},{match:"#ProperNoun #Organization",tag:"Organization",reason:"titlecase-org"},{match:"#ProperNoun (ltd|co|inc|dept|assn|bros)",tag:"Organization",reason:"org-abbrv"},{match:"the [#Acronym]",group:0,tag:"Organization",reason:"the-acronym",safe:!0},{match:"(world|global|international|national|#Demonym) #Organization",tag:"Organization",reason:"global-org"},{match:"#Noun+ (public|private) school",tag:"School",reason:"noun-public-school"}])).concat(ho);var go=[];po.forEach((function(e){e.reg=Xt(e.match);var t=function(e){var t=[];if(1===e.reg.filter((function(e){return void 0!==e.fastOr})).length){var n=e.reg.findIndex((function(e){return void 0!==e.fastOr}));Object.keys(e.reg[n].fastOr).forEach((function(r){var i=Object.assign({},e);i.reg=i.reg.slice(0),i.reg[n]=Object.assign({},i.reg[n]),i.reg[n].word=r,delete i.reg[n].operator,delete i.reg[n].fastOr,t.push(i);}));}return t}(e);t.length>0?go=go.concat(t):go.push(e);})),go.forEach((function(e){var t,n,r;return e.required=(t=e.reg,n=[],r=[],t.forEach((function(e){!0!==e.optional&&!0!==e.negative&&(void 0!==e.tag&&n.push(e.tag),void 0!==e.word&&r.push(e.word));})),{tags:qa(n),words:qa(r)}),e}));var mo=go,fo=function(e){mo.forEach((function(t){var n=[];t.required.words.forEach((function(t){n.push(e._cache.words[t]||[]);})),t.required.tags.forEach((function(t){n.push(e._cache.tags[t]||[]);}));var r=function(e){if(0===e.length)return [];var t={};e.forEach((function(e){e=qa(e);for(var n=0;n<e.length;n++)t[e[n]]=t[e[n]]||0,t[e[n]]+=1;}));var n=Object.keys(t);return (n=n.filter((function(n){return t[n]===e.length}))).map((function(e){return Number(e)}))}(n);if(0!==r.length){var i=r.map((function(t){return e.list[t]})),a=e.buildFrom(i).match(t.reg,t.group);a.found&&(!0===t.safe?a.tagSafe(t.tag,t.reason):a.tag(t.tag,t.reason));}}));},vo=function(e){return fo(e),Za(e),e},bo=function(e){var t=e.termList();return e=ta(e,t),e=xa(e,t),(e=Ra(e)).cache(),(e=vo(e)).uncache(),e.world.taggers.forEach((function(t){t(e);})),e},yo=function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return oe(n,[{key:"stripPeriods",value:function(){return this.termList().forEach((function(e){!0===e.tags.Abbreviation&&e.next&&(e.post=e.post.replace(/^\./,""));var t=e.text.replace(/\./,"");e.set(t);})),this}},{key:"addPeriods",value:function(){return this.termList().forEach((function(e){e.post=e.post.replace(/^\./,""),e.post="."+e.post;})),this}}]),n}(e);return t.prototype.unwrap=t.prototype.stripPeriods,e.prototype.abbreviations=function(e){var n=this.match("#Abbreviation");return "number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e},wo=/\./,ko=function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return oe(n,[{key:"stripPeriods",value:function(){return this.termList().forEach((function(e){var t=e.text.replace(/\./g,"");e.set(t);})),this}},{key:"addPeriods",value:function(){return this.termList().forEach((function(e){var t=e.text.replace(/\./g,"");t=t.split("").join("."),!1===wo.test(e.post)&&(t+="."),e.set(t);})),this}}]),n}(e);return t.prototype.unwrap=t.prototype.stripPeriods,t.prototype.strip=t.prototype.stripPeriods,e.prototype.acronyms=function(e){var n=this.match("#Acronym");return "number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e},Co=function(e){return e.prototype.clauses=function(t){var n=this.if("@hasComma").notIf("@hasComma @hasComma").notIf("@hasComma . .? (and|or) .").notIf("(#City && @hasComma) #Country").notIf("(#WeekDay && @hasComma) #Date").notIf("(#Date && @hasComma) #Year").notIf("@hasComma (too|also)$").match("@hasComma"),r=this.splitAfter(n),i=r.quotations(),a=(r=r.splitOn(i)).parentheses(),o=(r=r.splitOn(a)).if("#Copula #Adjective #Conjunction (#Pronoun|#Determiner) #Verb").match("#Conjunction"),s=(r=r.splitBefore(o)).if("if .{2,9} then .").match("then"),l=(r=(r=(r=(r=(r=(r=r.splitBefore(s)).splitBefore("as well as .")).splitBefore("such as .")).splitBefore("in addition to .")).splitAfter("@hasSemicolon")).splitAfter("@hasDash")).filter((function(e){return e.wordCount()>5&&e.match("#Verb+").length>=2}));if(l.found){var u=l.splitAfter("#Noun .* #Verb .* #Noun+");r=r.splitOn(u.eq(0));}return "number"==typeof t&&(r=r.get(t)),new e(r.list,this,this.world)},e},xo=function(e){var t=function(e){se(n,e);var t=he(n);function n(e,r,i){var a;return ie(this,n),(a=t.call(this,e,r,i)).contracted=null,a}return oe(n,[{key:"expand",value:function(){return this.list.forEach((function(e){var t=e.terms(),n=t[0].isTitleCase();t.forEach((function(e,n){e.set(e.implicit||e.text),e.implicit=void 0,n<t.length-1&&""===e.post&&(e.post+=" ");})),n&&t[0].toTitleCase();})),this}}]),n}(e);return e.prototype.contractions=function(e){var n=this.match("@hasContraction+");return "number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e.prototype.expanded=e.prototype.isExpanded,e.prototype.contracted=e.prototype.isContracted,e},Ao=function(e){var t=function(e){var t=e.splitAfter("@hasComma").splitOn("(and|or) not?").not("(and|or) not?"),n=e.match("[.] (and|or)",0);return {things:t,conjunction:e.match("(and|or) not?"),beforeLast:n,hasOxford:n.has("@hasComma")}},n=function(e){se(r,e);var n=he(r);function r(){return ie(this,r),n.apply(this,arguments)}return oe(r,[{key:"conjunctions",value:function(){return this.match("(and|or)")}},{key:"parts",value:function(){return this.splitAfter("@hasComma").splitOn("(and|or) not?")}},{key:"items",value:function(){return t(this).things}},{key:"add",value:function(e){return this.forEach((function(n){var r=t(n).beforeLast;r.append(e),r.termList(0).addPunctuation(",");})),this}},{key:"remove",value:function(e){return this.items().if(e).remove()}},{key:"hasOxfordComma",value:function(){return this.filter((function(e){return t(e).hasOxford}))}},{key:"addOxfordComma",value:function(){var e=this.items(),t=e.eq(e.length-2);return t.found&&!1===t.has("@hasComma")&&t.post(", "),this}},{key:"removeOxfordComma",value:function(){var e=this.items(),t=e.eq(e.length-2);return t.found&&!0===t.has("@hasComma")&&t.post(" "),this}}]),r}(e);return n.prototype.things=n.prototype.items,e.prototype.lists=function(e){var t=this.if("@hasComma+ .? (and|or) not? ."),r=t.match("(#Noun|#Adjective|#Determiner|#Article)+ #Conjunction not? (#Article|#Determiner)? #Adjective? #Noun+").if("#Noun"),i=t.match("(#Adjective|#Adverb)+ #Conjunction not? #Adverb? #Adjective+"),a=t.match("(#Verb|#Adverb)+ #Conjunction not? #Adverb? #Verb+"),o=r.concat(i);return o=(o=o.concat(a)).if("@hasComma"),"number"==typeof e&&(o=t.get(e)),new n(o.list,this,this.world)},e},Do=function(e){return !0===e.has("#Plural")||!0!==e.has("(#Pronoun|#Place|#Value|#Person|#Uncountable|#Month|#WeekDay|#Holiday|#Possessive)")},$o={hour:"an",heir:"an",heirloom:"an",honest:"an",honour:"an",honor:"an",uber:"an"},Po={a:!0,e:!0,f:!0,h:!0,i:!0,l:!0,m:!0,n:!0,o:!0,r:!0,s:!0,x:!0},Eo=[/^onc?e/i,/^u[bcfhjkqrstn][aeiou]/i,/^eul/i],Ho=function(e){if(e.has("#Person")||e.has("#Place"))return "";if(e.has("#Plural"))return "the";var t=e.text("normal").trim();if($o.hasOwnProperty(t))return $o[t];var n=t.substr(0,1);if(e.has("^@isAcronym")&&Po.hasOwnProperty(n))return "an";for(var r=0;r<Eo.length;r++)if(Eo[r].test(t))return "a";return /^[aeiou]/i.test(t)?"an":"a"},jo={isSingular:[/(ax|test)is$/i,/(octop|vir|radi|nucle|fung|cact|stimul)us$/i,/(octop|vir)i$/i,/(rl)f$/i,/(alias|status)$/i,/(bu)s$/i,/(al|ad|at|er|et|ed|ad)o$/i,/(ti)um$/i,/(ti)a$/i,/sis$/i,/(?:(^f)fe|(lr)f)$/i,/hive$/i,/(^aeiouy|qu)y$/i,/(x|ch|ss|sh|z)$/i,/(matr|vert|ind|cort)(ix|ex)$/i,/(m|l)ouse$/i,/(m|l)ice$/i,/(antenn|formul|nebul|vertebr|vit)a$/i,/.sis$/i,/^(?!talis|.*hu)(.*)man$/i],isPlural:[/(antenn|formul|nebul|vertebr|vit)ae$/i,/(octop|vir|radi|nucle|fung|cact|stimul)i$/i,/men$/i,/.tia$/i,/(m|l)ice$/i]},To=/s$/,Io=function(e){return !jo.isSingular.find((function(t){return t.test(e)}))&&(!0===To.test(e)||(!!jo.isPlural.find((function(t){return t.test(e)}))||null))},No={he:"his",she:"hers",they:"theirs",we:"ours",i:"mine",you:"yours",her:"hers",their:"theirs",our:"ours",my:"mine",your:"yours"},Fo=function(e){var t=e.text("text").trim();return No.hasOwnProperty(t)?(e.replaceWith(No[t],!0),void e.tag("Possessive","toPossessive")):/s$/.test(t)?(t+="'",e.replaceWith(t,!0),void e.tag("Possessive","toPossessive")):(t+="'s",e.replaceWith(t,!0),void e.tag("Possessive","toPossessive"))},Bo=function(e){var t={main:e};if(e.has("#Noun (of|by|for) .")){var n=e.splitAfter("[#Noun+]",0);t.main=n.eq(0),t.post=n.eq(1);}return t},Lo={json:function(e){var t=null;"number"==typeof e&&(t=e,e=null),e=e||{text:!0,normal:!0,trim:!0,terms:!0};var n=[];return this.forEach((function(t){var r=t.json(e)[0];r.article=Ho(t),n.push(r);})),null!==t?n[t]:n},adjectives:function(){var e=this.lookAhead("^(that|who|which)? (was|is|will)? be? #Adverb? #Adjective+");return (e=(e=e.concat(this.lookBehind("#Adjective+ #Adverb?$"))).match("#Adjective")).sort("index")},isPlural:function(){return this.if("#Plural")},hasPlural:function(){return this.filter((function(e){return Do(e)}))},toPlural:function(e){var t=this,n=this.world.transforms.toPlural;return this.forEach((function(r){if(!r.has("#Plural")&&!1!==Do(r)){var i=Bo(r).main,a=i.text("reduced");if((i.has("#Singular")||!0!==Io(a))&&(a=n(a,t.world),i.replace(a).tag("#Plural"),e)){var o=i.lookBefore("(an|a) #Adjective?$").not("#Adjective");!0===o.found&&o.remove();}}})),this},toSingular:function(e){var t=this,n=this.world.transforms.toSingular;return this.forEach((function(r){if(!r.has("^#Singular+$")&&!1!==Do(r)){var i=Bo(r).main,a=i.text("reduced");if((i.has("#Plural")||!0===Io(a))&&(a=n(a,t.world),i.replace(a).tag("#Singular"),e)){var o=r,s=r.lookBefore("#Adjective");s.found&&(o=s);var l=Ho(o);o.insertBefore(l);}}})),this},toPossessive:function(){return this.forEach((function(e){Fo(e);})),this}},Oo=function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return n}(e);return Object.assign(t.prototype,Lo),e.prototype.nouns=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.match("(#City && @hasComma) (#Region|#Country)"),i=this.not(r).splitAfter("@hasComma"),a=(i=i.concat(r)).quotations();return a.found&&(i=i.splitOn(a.eq(0))),i=i.match("#Noun+ (of|by)? the? #Noun+?"),!0!==n.keep_anaphora&&(i=(i=(i=(i=i.not("#Pronoun")).not("(there|these)")).not("(#Month|#WeekDay)")).not("(my|our|your|their|her|his)")),i=i.not("(of|for|by|the)$"),"number"==typeof e&&(i=i.get(e)),new t(i.list,this,this.world)},e},zo=/\(/,Mo=/\)/,_o=function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return oe(n,[{key:"unwrap",value:function(){return this.list.forEach((function(e){var t=e.terms(0);t.pre=t.pre.replace(zo,"");var n=e.lastTerm();n.post=n.post.replace(Mo,"");})),this}}]),n}(e);return e.prototype.parentheses=function(e){var n=[];return this.list.forEach((function(e){for(var t=e.terms(),r=0;r<t.length;r+=1){var i=t[r];if(zo.test(i.pre))for(var a=r;a<t.length;a+=1)if(Mo.test(t[a].post)){var o=a-r+1;n.push(e.buildFrom(i.id,o)),r=a;break}}})),"number"==typeof e?(n=n[e]?[n[e]]:[],new t(n,this,this.world)):new t(n,this,this.world)},e},Vo=function(e){var t=function(e){se(n,e);var t=he(n);function n(e,r,i){var a;return ie(this,n),(a=t.call(this,e,r,i)).contracted=null,a}return oe(n,[{key:"strip",value:function(){return this.list.forEach((function(e){e.terms().forEach((function(e){var t=e.text.replace(/'s$/,"");e.set(t||e.text);}));})),this}}]),n}(e);return e.prototype.possessives=function(e){var n=this.match("#Noun+? #Possessive");return "number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e},Go={'"':'"',"＂":"＂","'":"'","“":"”","‘":"’","‟":"”","‛":"’","„":"”","⹂":"”","‚":"’","«":"»","‹":"›","‵":"′","‶":"″","‷":"‴","〝":"〞","`":"´","〟":"〞"},So=RegExp("("+Object.keys(Go).join("|")+")"),Jo=function(e,t){var n=e.verb,r=n.text("reduced");if(n.has("#Infinitive"))return r;var i=null;return n.has("#PastTense")?i="PastTense":n.has("#Gerund")?i="Gerund":n.has("#PresentTense")?i="PresentTense":n.has("#Participle")?i="Participle":n.has("#Actor")&&(i="Actor"),t.transforms.toInfinitive(r,t,i)},Ko=function(e){var t=e.verb;if(t.has("(are|were|does)")||e.auxiliary.has("(are|were|does)"))return !0;if(t.has("(is|am|do|was)")||e.auxiliary.has("(is|am|do|was)"))return !1;var n=function(e){return e.lookBehind("#Noun+").last()}(t);return !!n.has("(we|they|you)")||(!!n.has("#Plural")||!n.has("#Singular")&&null)},Uo=function(e,t){var n=e.verb;if(!e.negative.found){if(e.auxiliary.found)return e.auxiliary.eq(0).append("not"),void(e.auxiliary.has("#Modal have not")&&e.auxiliary.replace("have not","not have"));if(n.has("(#Copula|will|has|had|do)"))n.append("not");else {if(n.has("#PastTense")){var r=Jo(e,t);return n.replaceWith(r,!0),void n.prepend("did not")}if(n.has("#PresentTense")){var i=Jo(e,t);return n.replaceWith(i,!0),void(Ko(e)?n.prepend("do not"):n.prepend("does not"))}if(n.has("#Gerund")){var a=Jo(e,t);return n.replaceWith(a,!0),void n.prepend("not")}Ko(e)?n.prepend("does not"):n.prepend("do not");}}},Ro=function(e){var t=e.lookBehind(),n=t.nouns(null,{keep_anaphora:!0}).last();return n.found||(n=(n=t.match("(that|this|each)").last()).tag("#Noun").nouns()),n},Wo=function(e){var t={adverb:e.match("#Adverb+"),negative:e.match("#Negative"),auxiliary:e.match("#Auxiliary+").not("(#Negative|#Adverb)"),particle:e.match("#Particle"),verb:e.match("#Verb+").not("(#Adverb|#Negative|#Auxiliary|#Particle)"),original:e,subject:Ro(e)};if(!t.verb.found)return Object.keys(t).forEach((function(e){t[e]=t[e].not(".");})),t.verb=e,t;if(t.adverb&&t.adverb.found){var n=t.adverb.text("reduced")+"$";e.has(n)&&(t.adverbAfter=!0);}return t},Zo=function(e){var t=!1,n=Ko(e),r=e.negative.found;e.verb.lookBehind("(i|we) (#Adverb|#Verb)?$").found&&(t=!0);var i={PastTense:"was",PresentTense:"is",FutureTense:"will be",Infinitive:"is",Gerund:"being",Actor:"",PerfectTense:"been",Pluperfect:"been"};return !0===t&&(i.PresentTense="am",i.Infinitive="am"),n&&(i.PastTense="were",i.PresentTense="are",i.Infinitive="are"),r&&(i.PastTense+=" not",i.PresentTense+=" not",i.FutureTense="will not be",i.Infinitive+=" not",i.PerfectTense="not "+i.PerfectTense,i.Pluperfect="not "+i.Pluperfect,i.Gerund="not "+i.Gerund),i},qo=function(e){var t=e.verb.text();return {PastTense:t+" have",PresentTense:t,FutureTense:t,Infinitive:t}},Xo=function(e,t){var n=e.verb;if(n.has("#Copula")||"be"===n.out("normal")&&e.auxiliary.has("will"))return Zo(e);if(e.auxiliary.has("are")&&n.has("#Gerund")){var r=e.original.clone(),i=r.clone().replace("are","were"),a=r.clone().replace("are","will be"),o=Jo(e,t);return {PastTense:i.text(),PresentTense:r.text(),FutureTense:a.text(),Infinitive:o}}if(n.has("#Modal"))return qo(e);var s=e.verb.termList(0).hasHyphen(),l=Jo(e,t);if(!l)return {};var u=t.transforms.conjugate(l,t);if(u.Infinitive=l,e.particle.found){var c=e.particle.text(),h=!0===s?"-":" ";Object.keys(u).forEach((function(e){return u[e]+=h+c}));}var d=e.negative.found;return d&&(u.PastTense="did not "+u.Infinitive,u.PresentTense="does not "+u.Infinitive,u.Gerund="not "+u.Gerund),u.FutureTense||(u.FutureTense=d?"will not "+u.Infinitive:"will "+u.Infinitive),d&&(u.Infinitive="not "+u.Infinitive),u},Yo=function(e,t){if(!e.auxiliary.has("(have|had)")||!e.verb.has("#Participle")){var n=Xo(e,t),r=n.Participle||n.PastTense;r&&e.verb.replaceWith(r,!1),e.auxiliary.has("am .+? being")&&(e.auxiliary.remove("am"),e.auxiliary.replace("being","have been")),e.auxiliary.has("have")||e.auxiliary.append("have"),e.verb.tag("Participle","toParticiple"),e.auxiliary.replace("can","could"),e.auxiliary.replace("be have","have been"),e.auxiliary.replace("not have","have not"),e.auxiliary.tag("Auxiliary");}},Qo=function(e){return !!e.auxiliary.has("(could|should|would|may|can|must)")||(!!e.auxiliary.has("am .+? being")||!!e.auxiliary.has("had .+? been"))},es=function(e){return e.auxiliary.remove("(will|are|am|being)"),e.auxiliary.remove("(did|does)"),e.auxiliary.remove("(had|has|have)"),e.particle.remove(),e.negative.remove(),e},ts={json:function(e){var t=this,n=null;"number"==typeof e&&(n=e,e=null),e=e||{text:!0,normal:!0,trim:!0,terms:!0};var r=[];return this.forEach((function(n){var i=n.json(e)[0],a=Wo(n);i.parts={},Object.keys(a).forEach((function(e){a[e]&&"Doc"===a[e].isA?i.parts[e]=a[e].text("normal"):i.parts[e]=a[e];})),i.isNegative=n.has("#Negative"),i.conjugations=Xo(a,t.world),r.push(i);})),null!==n?r[n]:r},adverbs:function(){var e=[];this.forEach((function(t){var n=Wo(t).adverb;n.found&&(e=e.concat(n.list));}));var t=this.lookBehind("#Adverb+$");return t.found&&(e=t.list.concat(e)),(t=this.lookAhead("^#Adverb+")).found&&(e=e.concat(t.list)),this.buildFrom(e)},isPlural:function(){var e=this,t=[];return this.forEach((function(n){var r=Wo(n);!0===Ko(r,e.world)&&t.push(n.list[0]);})),this.buildFrom(t)},isSingular:function(){var e=this,t=[];return this.forEach((function(n){var r=Wo(n);!1===Ko(r,e.world)&&t.push(n.list[0]);})),this.buildFrom(t)},conjugate:function(){var e=this,t=[];return this.forEach((function(n){var r=Wo(n),i=Xo(r,e.world);t.push(i);})),t},toPastTense:function(){var e=this;return this.forEach((function(t){var n=Wo(t);if(Qo(n))Yo(n,e.world);else if(!(t.has("#Imperative")||t.has("be")&&t.lookBehind("to$").found))if(n.verb.has("#Gerund")&&n.auxiliary.has("(is|will|was)"))t.replace("is","was");else {var r=Xo(n,e.world).PastTense;r&&(n=es(n)).verb.replaceWith(r,!1);}})),this},toPresentTense:function(){var e=this;return this.forEach((function(t){var n=Wo(t),r=Xo(n,e.world),i=r.PresentTense;if(t.lookBehind("(i|we) (#Adverb|#Verb)?$").found&&(i=r.Infinitive),i){if(n.auxiliary.has("(have|had) been"))return n.auxiliary.replace("(have|had) been","am being"),void(r.Particle&&(i=r.Particle||r.PastTense));n.verb.replaceWith(i,!1),n.verb.tag("PresentTense"),(n=es(n)).auxiliary.remove("#Modal");}})),this},toFutureTense:function(){var e=this;return this.forEach((function(t){var n=Wo(t);if(!Qo(n)){var r=Xo(n,e.world).FutureTense;r&&((n=es(n)).auxiliary.remove("#Modal"),n.verb.replaceWith(r,!1),n.verb.tag("FutureTense"));}})),this},toInfinitive:function(){var e=this;return this.forEach((function(t){var n=Wo(t),r=Xo(n,e.world).Infinitive;r&&(t.replaceWith(r,!1),t.tag("Infinitive"));})),this},toGerund:function(){var e=this;return this.forEach((function(t){var n=Wo(t),r=Xo(n,e.world).Gerund;r&&(t.replaceWith(r,!1),t.tag("Gerund"));})),this},toParticiple:function(){var e=this;return this.forEach((function(t){var n=Wo(t),r=!n.auxiliary.found;Yo(n,e.world),r&&(n.verb.prepend(n.auxiliary.text()),n.auxiliary.remove());})),this},isNegative:function(){return this.if("#Negative")},isPositive:function(){return this.ifNo("#Negative")},isImperative:function(){return this.if("#Imperative")},toNegative:function(){var e=this;return this.list.forEach((function(t){var n=e.buildFrom([t]),r=Wo(n);Uo(r,n.world);})),this},toPositive:function(){var e=this.match("do not #Verb");return e.found&&e.remove("do not"),this.remove("#Negative")},subject:function(){var e=[];return this.forEach((function(t){var n=Ro(t);n.list[0]&&e.push(n.list[0]);})),this.buildFrom(e)}},ns=[yo,ko,Co,xo,Ao,Oo,_o,Vo,function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return oe(n,[{key:"unwrap",value:function(){return this}}]),n}(e);return e.prototype.quotations=function(e){var n=[];return this.list.forEach((function(e){for(var t=e.terms(),r=0;r<t.length;r+=1){var i=t[r];if(So.test(i.pre))for(var a=(i.pre.match(So)||[])[0],o=Go[a],s=r;s<t.length;s+=1)if(-1!==t[s].post.indexOf(o)){var l=s-r+1;n.push(e.buildFrom(i.id,l)),r=s;break}}})),"number"==typeof e?(n=n[e]?[n[e]]:[],new t(n,this,this.world)):new t(n,this,this.world)},e.prototype.quotes=e.prototype.quotations,e},function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return n}(e);return Object.assign(t.prototype,ts),t.prototype.negate=t.prototype.toNegative,e.prototype.verbs=function(e){var n=this.match("(#Adverb|#Auxiliary|#Verb|#Negative|#Particle)+"),r=(n=(n=n.not("^#Adverb+")).not("#Adverb+$")).match("(#Adverb && @hasComma) #Adverb"),i=n.not(r).splitAfter("@hasComma"),a=i.match("#PastTense #Gerund");return a.has("(been|am|#Auxiliary) #Gerund")||(i=i.splitBefore(a.match("#Gerund"))),(i=i.concat(r)).sort("index"),(i=i.if("#Verb")).has("(is|was)$")&&(i=i.splitBefore("(is|was)$")),i.has("#PresentTense #Adverb #PresentTense")&&(i=i.splitBefore("#Adverb #PresentTense")),"number"==typeof e&&(i=i.get(e)),new t(i.list,this,this.world)},e},function(e){var t=function(e){se(n,e);var t=he(n);function n(){return ie(this,n),t.apply(this,arguments)}return n}(e);return e.prototype.people=function(e){var n=this.splitAfter("@hasComma");return n=n.match("#Person+"),"number"==typeof e&&(n=n.get(e)),new t(n.list,this,this.world)},e}],rs=function(e){return Object.keys($i).forEach((function(t){return e.prototype[t]=$i[t]})),ns.forEach((function(t){return t(e)})),e},is={misc:Ai,selections:$i},as=function(){function e(t,n,r){var i=this;ie(this,e),this.list=t,Object.defineProperty(this,"from",{enumerable:!1,value:n,writable:!0}),void 0===r&&void 0!==n&&(r=n.world),Object.defineProperty(this,"world",{enumerable:!1,value:r,writable:!0}),Object.defineProperty(this,"_cache",{enumerable:!1,writable:!0,value:{}}),Object.defineProperty(this,"found",{get:function(){return i.list.length>0}}),Object.defineProperty(this,"length",{get:function(){return i.list.length}}),Object.defineProperty(this,"isA",{get:function(){return "Doc"}});}return oe(e,[{key:"tagger",value:function(){return bo(this)}},{key:"pool",value:function(){return this.list.length>0?this.list[0].pool:this.all().list[0].pool}}]),e}();as.prototype.buildFrom=function(e){return e=e.map((function(e){return e.clone(!0)})),new as(e,this,this.world)},as.prototype.fromText=function(e){var t=Pn(e,this.world,this.pool());return this.buildFrom(t)},Object.assign(as.prototype,is.misc),Object.assign(as.prototype,is.selections),rs(as);var os={untag:"unTag",and:"match",notIf:"ifNo",only:"if",onlyIf:"if"};Object.keys(os).forEach((function(e){return as.prototype[e]=as.prototype[os[e]]}));var ss=as,ls=function(e){var t=e.termList();return Hi(t,e.world),e.world.taggers.forEach((function(t){t(e);})),e};var us=function e(t){var n=t,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;t&&n.addWords(t);var r=Pn(e,n),i=new ss(r,null,n);return i.tagger(),i};return r.tokenize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=n;t&&((r=r.clone()).words={},r.addWords(t));var i=Pn(e,r),a=new ss(i,null,r);return (t||a.world.taggers.length>0)&&ls(a),a},r.extend=function(e){return e(ss,n,this,an,ct,sn),this},r.fromJSON=function(e){var t=En(e,n);return new ss(t,null,n)},r.clone=function(){return e(n.clone())},r.verbose=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return n.verbose(e),this},r.world=function(){return n},r.parseMatch=function(e,t){return Xt(e,t)},r.version="13.10.4",r.import=r.load,r.plugin=r.extend,r}(new Mr);function cs(e){return e<=1?4:e<=7?2/6*(e-1)+4:e<=8?1*(e-7)+6:3/8*(e-8)+7}function hs(e){let t=0,n=us(e.text);n.has("#Verb")&&(t+=.5),n.has("#Acronym")&&(t+=.8);let r=function(e){let t=e.length;if(t<5)return 0;for(let n of ne){if(n.length>=t-3)return 0;if(n==e.substring(0,n.length))return n.length}return 0}(e.text);return r>1&&(t+=r/10),Math.min(1,Math.min(t,1))}function ds(e,t){return cs(e.text.length)*(t+1)}function ps(e){return 1e3/(e/60*4.7)}class gs extends V{constructor(){super(...arguments),this.isShadowPragma=!0;}as(e){if(!e)return;let t=(e=N(e)).cloneNode(!0);return e.html(" ").attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),super.as(e)}get shadow(){return N(this.element.shadowRoot.firstChild)}injectStyle(e,t){return this.element.shadowRoot.appendChild(R`<style id='${t||T.rk5()}-styles'>${e}</style>`),this}injectStyles(...e){for(let t of e)this.injectStyle(t);return this}}function ms(){return new gs(...arguments)}class fs{constructor(e){let t=null,n=null;const r=new Promise(((r,i)=>(t=i,n=r,e(r,i))));return r.cancel=t,r.resolve=n,r}}class vs{constructor(e){this.afkChain=new Map,this.activeChain=new Map,this.idleTime=e,this.isIdle=!1;["load","mousemove"].forEach((e=>{window.addEventListener(e,te((()=>this.reset()),1e3));}));}generateActionKey(e){return null==e&&(e=this.afkChain.size),e}onAfk(e,t){return this.afkChain.set(this.generateActionKey(t),e),this}onActive(e,t){return this.activeChain.set(this.generateActionKey(t),e),this}reset(){return console.log("this reseting timer"),clearTimeout(this.t),this.t=setTimeout((()=>this.idle()),this.idleTime),this.active(),this}idle(){return !this.isIdle&&(this.isIdle=!0,bs(this.afkChain),this)}active(){return !!this.isIdle&&(this.isIdle=!1,bs(this.activeChain),this)}}function bs(e){for(const[t,n]of e.entries())n();}function ys(e,t){if("SCRIPT"!=e.nodeName&&"STYLE"!=e.nodeName){t(e);for(var n=0;n<e.childNodes.length;n++)ys(e.childNodes[n],t);}}function ws(e){return e.addClass("wfying"),new Promise((t=>{console.time("wfying...");var n=[];function r(e,t){null!==e&&t.parentNode.insertBefore(e,t);}function i(e){e.parentNode.removeChild(e);}function a(e){if(!(t=e)||""===t.trim())return null;var t,n=document.createElement("w");return n.appendChild(o(e)),n}function o(e){return document.createTextNode(e)}ys(e,(function(e){3==e.nodeType&&n.push(e);}));for(var s=0;s<n.length;s++){var l=n[s],u=l.nodeValue.split(" ");r(a(u[0]),l);for(var c=1;c<u.length;c++)r(o(" "),l),r(a(u[c]),l);i(l);}e.removeClass("wfying"),t(),console.timeEnd("wfying...");}))}const ks=8,Cs=8;function xs(e=0,t=0){return t>ks?e:e*(ks-t)/Cs+e}function As(e,t,n){for(var r=[e],i=e;i<t;)r.push(i+=n||1);return r}function Ds(e,t){let n=(t=N(t)).rect().x,r=t.rect().y,i=t.rect().width,a=t.rect().height,o=n<e.x&&n+i>e.x,s=r<e.y&&r+a>e.y;return o&&s}function $s(e){return e.css("opacity 0"),e.addClass("collapsed"),e.setData({collapsed:!0}),e}function Ps(t){(t=N(t)).show(),anime({targets:t,opacity:1,duration:110,easing:"easeInOutSine"}),t.removeClass("collapsed"),t.setData({collapsed:!1});}function Es(e,t=0){if(!e)return !1;var n=e.getBoundingClientRect(),r=n.top,i=n.height;e=e.parentNode;if(n.bottom<0)return !1;if(r>document.documentElement.clientHeight)return !1;do{if(!e.getBoundingClientRect)return;if(r<=(n=e.getBoundingClientRect()).bottom==!1)return !1;if(r+i<=n.top)return !1;e=e.parentNode;}while(e!=document.body);return !0}function Hs(e){return e&&e.parent&&!Es(e.element)?Hs(e.parent):e}Object.freeze({__proto__:null,PinkyPromise:fs,Idle:vs,range:As,isClickWithin:Ds,collapse:$s,expand:Ps,fadeTo:function(e,t,n=500){return (e=N(e)).css(`\n    transition opacity ${n}ms \n    opacity ${t}\n  `),new Promise((r=>{setTimeout((()=>{0==t?e.hide():e.show(),r();}),n);}))},visibleY:Es,firstVisibleParent:Hs,isOnScreen:Z,isMostlyInScreen:function(e,t=.5){return e?Z(e=W(e),t*e.rect().height):console.error(`couldnt not evaluate if [${e}] is on screen`)},scrollTo:q,onScroll:X,_scroller:Y,crush:cs,generateDifficultyIndex:hs,wordValue:ds,charsMsAt:ps,_shadow:ms,ShadowPragma:gs,wfy:ws,airway:xs});class Ts extends V{constructor(){super(arguments),this.isPragmaLector=!0,this.createEvents("load","beforeRead","read","pause"),this.on("load",(()=>this._loaded=!0)),this.async=U().define({async beforeRead(){},async beforeSummon(){}});}whenLoad(){return new Promise(((e,t)=>{this._loaded?e(this):this.on("load",(()=>e(this)));}))}appendToRoot(...e){for(let t of e)this.root.appendChild(t);return this}get root(){let e=this.element.getRootNode();return e===document?document.body:e}get lector(){return this}get mark(){return this._mark}set mark(e){this.adopt(e),this._mark=e;}get settings(){return this._settings}set settings(e){this.adopt(e),this._settings=e;}get isReading(){return this.w.isReading}get currentWord(){return this.w.currentWord}get currentParent(){return this.currentWord.parent}connectTo(e){return this.w=e,this.add(e),this}removeWord(e){let t=this.w.get(e);console.log("removing",e,t),null==t||t.currentWord,this.currentWord,this.w.remove(e);}addWord(e,t=!1){var n;return e.value=null!==(n=e.value)&&void 0!==n?n:0,this.w.add(e),this}toggle(){return this.isReading?this.pause():this.read()}async read(){return this.w.hasKids?(await this.async.beforeRead(),new Promise((async(e,t)=>{await this.summonToCurrentWord(),this.w.read(!0),this.triggerEvent("read"),e();}))):console.error("nothing to read")}summonToCurrentWord(){return this.resetMark()}async summonTo(e=0){return await this.resetMark(),0!==e&&(this.currentParent.value+=e),this.currentWord?this.currentWord.summon():new Promise((e=>e()))}async resetMark(){return await this.async.beforeSummon(),new Promise((e=>{if(this._resettingMark)return e();this._resettingMark=!0,this.whenLoad().then((()=>{this.currentWord&&this.currentWord.getData("wordAtom")&&this.currentWord.summon().then((t=>{this._resettingMark=!1,e(t);}));}));}))}goToNext(){this.summonTo(1);}goToPre(){this.summonTo(-1);}pause(){return this.triggerEvent("pause"),this.w.pause()}setFont(e){this.w.css(`font-family ${e}`);}}class Is extends V{constructor(e){super(e),this.isPragmaWord=!0,this.do((function(){this.hasKids&&this.parent&&(this.parent.value=this.key);}));}destroy(){return null}get lector(){if(this.parent)return this.parent.lector;T.throwSoft("could not find lector for");}get txt(){return this.text}get index(){return parseInt(this.key)}get mark(){return this.parent?this.parent.mark:null}set mark(e){return this.parent&&(this.parent.mark=e),null}get isReading(){return null!=this.currentPromise}get currentWord(){var e;if(!this.hasKids)return this;let t=this.get(null!==(e=this.value)&&void 0!==e?e:this.childMap.keys().next().value);return t?t.currentWord:T.throwSoft(`Could not find current Word of ${this.key}`)}getFromBottom(e){return this.get(this.kidsum-e)}sibling(e){if(!this.parent)return null;let t=this.parent.get(this.index+e);var n,r;return t||("function"!=typeof this.parent.sibling?null:e<0?null===(n=this.parent.sibling(-1))||void 0===n?void 0:n.getFromBottom(e):null===(r=this.parent.sibling(1))||void 0===r?void 0:r.get(e))}get next(){return this.sibling(1)}get pre(){return this.sibling(-1)}isInTheSameLine(e){return null!=this.sibling(e)&&(this.sibling(e).top-this.top)**2<10}get isFirstInLine(){return !this.isInTheSameLine(-1)}get isLastInLine(){return !this.isInTheSameLine(1)}time(e=250){return ps(e)*ds(this,hs(this))}pause(){return new fs((e=>{this.currentPromise?(this.currentPromise.catch((t=>{this.mark.pause().catch((e=>{console.warn("prevent pause event from bubbling. Chill on the keyboard bro",e);})).then((()=>{this.currentPromise=null,e("done pausing");}));})),this.currentPromise.cancel("pause")):e("already paused");}))}set currentPromise(e){if(this.parent)return this.parent.currentPromise=e;this.currentPromiseVal=new fs(((t,n)=>{e.catch((e=>{console.warn(e);})).then((()=>{t(),this.currentPromiseVal=null;}));}));}get currentPromise(){return this.parent?this.parent.currentPromise:this.currentPromiseVal}promiseRead(e){return this.currentPromise=new fs(((t,n)=>{function r(){let r=e?500:null;console.time(this.text),this.mark.guide(this,r).then((()=>{console.timeEnd(this.text),this.parent.value=this.index+1,t(` read [ ${this.text} ] `);})).catch((e=>{console.warn("rejected promise read",e),n(e);}));}let i=this;e?new Promise((e=>{e();})).then((e=>{r.bind(i)();})):r.bind(i)();})),this.currentPromise}read(e=!1){return this.currentPromise?new Promise(((e,t)=>{e("already reading");})):this.hasKids?this.currentWord?this.currentWord.read(e):(this.next.value=0,this.next.read()):(this.promiseRead(e),new fs((e=>{this.currentPromise.then((()=>(e(),this.currentPromise=null,this.parent.read()))).catch((t=>e("pause")));})))}summon(e=!1){return new fs((t=>{this.parent.pause().catch((()=>console.log("no need to pause"))).then((()=>{this.mark.mark(this,50,!1).then((()=>{t();})),e||(this.parent.value=this.index);}));}))}}const Ns={hotbox:e=>`background ${e}`,underneath:e=>` background transparent\n                        border-bottom 3px solid ${e}\n                        border-radius 4px`,faded:e=>`\n      background: rgb(255,255,255);\n      background: -moz-linear-gradient(90deg, rgba(255,255,255,0) 0%, ${e} 25%, ${e} 75%, rgba(255,255,255,0) 100%);\n      background: -webkit-linear-gradient(90deg, rgba(255,255,255,0) 0%, ${e} 25%, ${e} 75%, rgba(255,255,255,0) 100%);\n      background: linear-gradient(90deg, rgba(255,255,255,0) 0%, ${e} 25%, ${e} 75%, rgba(255,255,255,0) 100%);\n    `};const Fs=(e,t=e._mode,n=e._color)=>{if(!n)return console.error("could not mode_ify");let r=function(e,t){return "border 0\n               border-radius 3px\n               z-index 10\n               opacity 1\n               mix-blend-mode darken;"+Ns[e](t)}(t=(t||"hotbox").toString().toLowerCase(),n);return e&&e.css(r),r},Bs={"#a8f19a":"Grass","#eddd6e":"Pasta","#edd1b0":"Floor","#96adfc":"Water"},Ls={HotBox:"marker is a block",Underneath:"marker is slim and underneat the words",Faded:"marker's boundaries loose their essence"},Os={color:"#eddd6e",mode:"Faded",fovea:4,wpm:250,page:1,scale:100};class zs extends V{constructor(){super("marker"),this.element=N("marker."),this.hide(),this.css("\n  position absolute\n  outline solid 0px red\n  background-color #ffdf6c\n  width 10px\n  height 20px\n  z-index 10\n  opacity 1\n  mix-blend-mode darken\n  border-radius 3px\n"),this.currentlyMarking=null,window.addEventListener("resize",(()=>{this.mark(this.last_marked,0);})),this.runningFor=0,this.pausing=!1,this.setColor(Os.color),this.setMode(Os.mode),this.setWpm(Os.wpm),this.setFovea(Os.fovea),this.createEvents("changeLine","changeLine:down","changeLine:up","mark"),this.createWire("lastMark");}hide(){this._hidden||(this._hidden=!0,this.element.hide());}show(){this._hidden&&(this._hidden=!1,this.element.show());}set last_marked(e){this.value=e;}get last_marked(){return this.value}get settings(){return this.parent?this.parent.settings:console.error("mark has no settings attached")}get cw(){return 30*this._fovea}get wpm(){return this._wpm||260}setMode(e){this._mode=e,Fs(this);}setWpm(e){this._wpm=e;}setColor(e){this._color=e,Fs(this);}setFovea(e){this._fovea=e,this.css(`width ${this.cw}px`);}pause(){return new Promise(((e,t)=>{if(this.pausing)return t("already pausing");if(this.pausing=!0,this.currentlyMarking&&this.current_anime&&this.last_marked){let n=this.last_marked;this.runningFor=0,this.current_anime.complete(),this.current_anime.remove("marker"),this.mark(n,80,!1).then((()=>{e("paused");})).catch((e=>{t("could not mark");})).then((e=>{this.pausing=!1;}));}}))}_compareBlueprintsAndTriggerEvents(e,t){e&&t&&window.requestAnimationFrame((()=>{e.top+e.height<t.top?(this.triggerEvent("changeLine"),this.triggerEvent("changeLine:down")):e.top>t.top+t.height&&(this.triggerEvent("changeLine"),this.triggerEvent("changeLine:up"));}));}_correctBlueprint(e,t){console.time("correcting blueprint");let n=this.correctBlueprint(e,t);return console.timeEnd("correcting blueprint"),n}moveTo(t,n,r=(()=>{}),i=!0){return this.show(),this.currentlyMarking?new Promise(((e,t)=>e())):new Promise(((a,o)=>{i&&(t=this._correctBlueprint(t,this.lastMark)),this.currentlyMarking=t,this.triggerEvent("beforeMark",t),this.current_anime=anime({targets:this.element,left:t.left,top:t.top,height:t.height,width:t.width,easing:t.ease||"easeInOutExpo",duration:n,complete:e=>{this.triggerEvent("mark",t),this._compareBlueprintsAndTriggerEvents(this.lastMark,t),this.lastMark=this.currentlyMarking,this.currentlyMarking=null,r(),a();}});}))}mark(e,t=200,n=!1,r="easeInOutExpo",i=!1){if(!(e instanceof V))return new Promise((e=>{console.warn("cannot mark"),e("error");}));let a=n?e.width+5:this.cw;return this.moveTo({top:e.top,left:e.x(a),height:e.height,width:a,ease:r},t,(()=>{this.last_marked=e;}),i)}guide(e,t){return e instanceof V?new fs(((n,r)=>{let i=e.isFirstInLine?"easeInOutCubic":"linear";return this.moveTo({top:e.top,left:e.x(this.width)-e.width/2,height:e.height,width:this.cw,ease:i},t||this.calcDuration(e,1)).then((()=>{this.last_marked=e,this.runningFor+=1,this.mark(e,this.calcDuration(e,2),!1,"linear",!0).then((()=>{n();}));}))})):new Promise(((e,t)=>{console.warn("cannot guide thru"),t("error");}))}calcDuration(e,t=1){if(!(e instanceof V))return this.throw(`Could not calculate marking duration for [${e}] since it does not appear to be a Pragma Object`);if(1!=t&&2!=t)return this.throw(`Could not calculate duration for ${e.text} since dw was not 1 or 2`);if(e.isFirstInLine)return Math.max(80,650-this.wpm);if(!this.last_marked)return 0;const n=1==t?.4:.6;let r=(1==t?this.last_marked:e).time(this.wpm);return [e=>e*n,xs].forEach((e=>{r=e(r,this.runningFor);})),r}}var Ms={"arrow-down":'<svg width="78" height="42" viewBox="0 0 78 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M38.7444 41.8242L0.316898 5.9643L5.69674 0.943914L38.7444 31.7834L71.792 0.94392L77.1719 5.96431L38.7444 41.8242Z" fill="white"/>\n</svg>\n',"zoomout-white-af":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3711H6.22266V12.4452H16.593V10.3711Z" fill="white"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407V20.7407Z" fill="white"/>\n</svg>\n',"Underneath-icon":'<svg width="40" height="25" viewBox="0 0 40 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M40 23.375H0" stroke="white" stroke-width="2.5"/>\n<path d="M13.945 9.34375H16.1712L17 13.455L17.2762 15.795H17.5037L17.845 13.455L18.82 9.34375H21.03L22.0537 13.455L22.395 15.795H22.59L22.8662 13.455L23.76 9.34375H25.84L23.76 17.875H21.2737L20.315 13.715L20.0062 11.4238H19.7787L19.47 13.715L18.5112 17.875H16.025L13.945 9.34375Z" fill="white"/>\n</svg>',clickBoat:'<svg width="365" height="143" viewBox="0 0 365 143" fill="none" xmlns="http://www.w3.org/2000/svg">\n<line x1="4.32031" y1="13.5" x2="131.017" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="147.859" y1="13.5" x2="274.556" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="291.398" y1="13.5" x2="361.5" y2="13.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="3.5" y1="97.5" x2="185.972" y2="97.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="207.734" y1="97.5" x2="361.498" y2="97.5" stroke="#2B6CCE" stroke-width="7" stroke-linecap="round"/>\n<line x1="3.5" y1="139.5" x2="236.826" y2="139.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="4.32031" y1="55.5" x2="140.86" y2="55.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<line x1="158.523" y1="55.5" x2="361.501" y2="55.5" stroke="#6F6F6F" stroke-width="7" stroke-linecap="round"/>\n<rect x="31.168" width="99.2472" height="26" rx="5" fill="#A6F29A"/>\n<path d="M319.32 130.43C318.449 129.183 317.578 127.001 315.836 124.194C314.965 122.635 312.352 119.517 311.481 118.27C310.9 117.022 310.9 116.399 311.191 115.152C311.481 113.281 313.223 111.722 315.256 111.722C316.707 111.722 318.159 112.969 319.32 113.904C319.901 114.528 320.772 115.775 321.353 116.399C321.933 117.022 321.933 117.334 322.514 117.958C323.095 118.893 323.385 119.517 323.095 118.27C322.804 116.711 322.514 114.216 321.933 111.722C321.643 109.851 321.353 109.539 321.062 108.292C320.772 106.733 320.482 105.797 320.191 104.238C319.901 103.303 319.611 100.808 319.32 99.5608C319.03 98.0017 319.03 95.1953 320.191 93.9481C321.062 93.0126 322.804 92.7008 323.966 93.3244C325.417 94.2599 326.289 96.4426 326.579 97.3781C327.16 98.9371 327.74 101.12 328.031 103.614C328.611 106.733 329.482 111.41 329.482 112.345C329.482 111.098 329.192 108.915 329.482 107.668C329.773 106.733 330.353 105.485 331.515 105.173C332.386 104.862 333.257 104.862 334.128 104.862C334.999 105.173 335.87 105.797 336.45 106.421C337.612 108.292 337.612 112.345 337.612 112.033C337.902 110.786 337.902 108.292 338.483 107.044C338.773 106.421 339.935 105.797 340.515 105.485C341.386 105.173 342.548 105.173 343.419 105.485C343.999 105.485 345.161 106.421 345.451 107.044C346.032 107.98 346.322 111.098 346.612 112.345C346.612 112.657 346.903 111.098 347.483 110.162C348.645 108.292 352.71 107.668 353 112.033C353 114.216 353 113.904 353 115.463C353 117.022 353 117.958 353 119.205C353 120.452 352.71 123.259 352.419 124.506C352.129 125.441 351.258 127.624 350.387 128.871C350.387 128.871 347.193 132.613 346.903 134.484C346.612 136.355 346.612 136.355 346.612 137.602C346.612 138.85 346.903 140.409 346.903 140.409C346.903 140.409 344.58 140.72 343.419 140.409C342.257 140.097 340.806 137.914 340.515 136.979C339.935 136.043 339.064 136.043 338.483 136.979C337.902 138.226 336.45 140.409 335.289 140.409C333.257 140.72 329.192 140.409 326.289 140.409C326.289 140.409 326.869 137.29 325.708 136.043C324.837 135.108 323.385 133.549 322.514 132.613L319.32 130.43Z" fill="white"/>\n<path d="M319.32 130.43C318.449 129.183 317.578 127.001 315.836 124.194C314.965 122.635 312.352 119.517 311.481 118.27C310.9 117.022 310.9 116.399 311.191 115.152C311.481 113.281 313.223 111.722 315.256 111.722C316.707 111.722 318.159 112.969 319.32 113.904C319.901 114.528 320.772 115.775 321.353 116.399C321.933 117.022 321.933 117.334 322.514 117.958C323.095 118.893 323.385 119.517 323.095 118.27C322.804 116.711 322.514 114.216 321.933 111.722C321.643 109.851 321.353 109.539 321.062 108.292C320.772 106.733 320.482 105.797 320.191 104.238C319.901 103.303 319.611 100.808 319.32 99.5608C319.03 98.0017 319.03 95.1953 320.191 93.9481C321.062 93.0126 322.804 92.7008 323.966 93.3244C325.417 94.2599 326.289 96.4426 326.579 97.3781C327.16 98.9371 327.74 101.12 328.031 103.614C328.611 106.733 329.482 111.41 329.482 112.345C329.482 111.098 329.192 108.915 329.482 107.668C329.773 106.733 330.353 105.485 331.515 105.173C332.386 104.862 333.257 104.862 334.128 104.862C334.999 105.173 335.87 105.797 336.45 106.421C337.612 108.292 337.612 112.345 337.612 112.033C337.902 110.786 337.902 108.292 338.483 107.044C338.773 106.421 339.935 105.797 340.515 105.485C341.386 105.173 342.548 105.173 343.419 105.485C343.999 105.485 345.161 106.421 345.451 107.044C346.032 107.98 346.322 111.098 346.612 112.345C346.612 112.657 346.903 111.098 347.483 110.162C348.645 108.292 352.71 107.668 353 112.033C353 114.216 353 113.904 353 115.463C353 117.022 353 117.958 353 119.205C353 120.452 352.71 123.259 352.419 124.506C352.129 125.441 351.258 127.624 350.387 128.871C350.387 128.871 347.193 132.613 346.903 134.484C346.612 136.355 346.612 136.355 346.612 137.602C346.612 138.85 346.903 140.409 346.903 140.409C346.903 140.409 344.58 140.72 343.419 140.409C342.257 140.097 340.806 137.914 340.515 136.979C339.935 136.043 339.064 136.043 338.483 136.979C337.902 138.226 336.45 140.409 335.289 140.409C333.257 140.72 329.192 140.409 326.289 140.409C326.289 140.409 326.869 137.29 325.708 136.043C324.837 135.108 323.385 133.549 322.514 132.613L319.32 130.43Z" stroke="black" stroke-width="4.50615" stroke-linecap="round" stroke-linejoin="round"/>\n<path d="M343.418 131.367V120.766" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n<path d="M337.615 131.367L337.324 120.766" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n<path d="M331.805 120.766V131.367" stroke="black" stroke-width="4.50615" stroke-linecap="round"/>\n</svg>\n',"mode-icon":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M22.75 3.5H5.25C4.78603 3.50053 4.34122 3.68508 4.01315 4.01315C3.68508 4.34122 3.50053 4.78603 3.5 5.25V22.75C3.50053 23.214 3.68508 23.6588 4.01315 23.9868C4.34122 24.3149 4.78603 24.4995 5.25 24.5H22.75C23.214 24.4995 23.6588 24.3149 23.9868 23.9868C24.3149 23.6588 24.4995 23.214 24.5 22.75V5.25C24.4995 4.78603 24.3149 4.34122 23.9868 4.01315C23.6588 3.68508 23.214 3.50053 22.75 3.5ZM19.25 22.75V19.25H15.75V22.75H12.25V19.25H8.75V15.75H12.25V12.25H8.75V8.75H12.25V5.25H15.75V8.75H19.25V5.25H22.75V22.75H19.25Z" fill="#909090"/>\n<path d="M15.75 8.75H12.25V12.25H15.75V8.75Z" fill="#909090"/>\n<path d="M15.75 15.75H12.25V19.25H15.75V15.75Z" fill="#909090"/>\n<path d="M19.25 12.25H15.75V15.75H19.25V12.25Z" fill="#909090"/>\n</svg>',"back-icon":'<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M7.75117e-08 6.5L6.14035 7.3223e-08L7 0.91L1.7193 6.5L7 12.09L6.14035 13L7.75117e-08 6.5Z" fill="white"/>\n</svg>',"zoomin-white-af":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3708H12.4449V6.22266H10.3708V10.3708H6.22266V12.4449H10.3708V16.593H12.4449V12.4449H16.593V10.3708Z" fill="white"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407V20.7407Z" fill="white"/>\n</svg>\n',increase:'<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.5 0L17 7.89474L15.81 9L8.5 2.21053L1.19 9L0 7.89474L8.5 0Z" fill="white"/>\n</svg>',"spacebar-3d":'<svg width="267" height="64" viewBox="0 0 267 64" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect x="0.5" y="0.5" width="259.977" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="6.52344" y="4.5" width="259.977" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M71.3017 47.4182C69.3269 47.4182 67.6426 47.0465 66.2487 46.303C64.8547 45.5364 63.6699 44.4909 62.6941 43.1667L64.8547 41.3545C65.7143 42.4929 66.6668 43.3641 67.7123 43.9682C68.7577 44.549 69.9891 44.8394 71.4062 44.8394C73.1487 44.8394 74.4729 44.4212 75.379 43.5848C76.3082 42.7485 76.7729 41.6333 76.7729 40.2394C76.7729 39.0778 76.4244 38.1833 75.7274 37.5561C75.0305 36.9288 73.8805 36.4293 72.2774 36.0576L70.2911 35.6045C68.0608 35.0934 66.3532 34.3268 65.1683 33.3045C64.0067 32.2591 63.4259 30.7955 63.4259 28.9136C63.4259 27.8449 63.6234 26.8924 64.0183 26.0561C64.4133 25.2197 64.9593 24.5227 65.6562 23.9652C66.3764 23.4076 67.2244 22.9894 68.2002 22.7106C69.1992 22.4086 70.2911 22.2576 71.4759 22.2576C73.3113 22.2576 74.8795 22.5944 76.1805 23.2682C77.5047 23.9419 78.6199 24.9293 79.5259 26.2303L77.3305 27.8333C76.6567 26.904 75.8436 26.1722 74.8911 25.6379C73.9385 25.1035 72.7537 24.8364 71.3365 24.8364C69.78 24.8364 68.5487 25.1732 67.6426 25.847C66.7598 26.4975 66.3183 27.4848 66.3183 28.8091C66.3183 29.9707 66.6901 30.8535 67.4335 31.4576C68.2002 32.0384 69.3502 32.503 70.8835 32.8515L72.8699 33.3045C75.2628 33.8389 76.9936 34.652 78.0623 35.7439C79.131 36.8359 79.6653 38.2879 79.6653 40.1C79.6653 41.2152 79.4678 42.2258 79.0729 43.1318C78.7012 44.0379 78.1552 44.8045 77.435 45.4318C76.7148 46.0591 75.832 46.547 74.7865 46.8955C73.7643 47.2439 72.6027 47.4182 71.3017 47.4182ZM84.4415 29.0182H87.2293V31.9455H87.3687C87.8334 30.8071 88.5071 29.9707 89.3899 29.4364C90.296 28.8788 91.3763 28.6 92.6309 28.6C93.746 28.6 94.7566 28.8207 95.6627 29.2621C96.5687 29.7035 97.3354 30.3308 97.9627 31.1439C98.6132 31.9571 99.1011 32.9444 99.4263 34.1061C99.7748 35.2677 99.949 36.5687 99.949 38.0091C99.949 39.4495 99.7748 40.7505 99.4263 41.9121C99.1011 43.0737 98.6132 44.0611 97.9627 44.8742C97.3354 45.6874 96.5687 46.3146 95.6627 46.7561C94.7566 47.1975 93.746 47.4182 92.6309 47.4182C90.1915 47.4182 88.4374 46.303 87.3687 44.0727H87.2293V53.9697H84.4415V29.0182ZM91.8642 44.9091C93.444 44.9091 94.6869 44.4212 95.593 43.4455C96.499 42.4465 96.9521 41.1455 96.9521 39.5424V36.4758C96.9521 34.8727 96.499 33.5833 95.593 32.6076C94.6869 31.6086 93.444 31.1091 91.8642 31.1091C91.2369 31.1091 90.6329 31.202 90.0521 31.3879C89.4945 31.5505 89.0066 31.7828 88.5884 32.0848C88.1703 32.3869 87.8334 32.7586 87.5778 33.2C87.3455 33.6182 87.2293 34.0712 87.2293 34.5591V41.25C87.2293 41.8308 87.3455 42.3535 87.5778 42.8182C87.8334 43.2596 88.1703 43.6429 88.5884 43.9682C89.0066 44.2702 89.4945 44.5025 90.0521 44.6652C90.6329 44.8278 91.2369 44.9091 91.8642 44.9091ZM117.724 47C116.679 47 115.924 46.7212 115.459 46.1636C115.018 45.6061 114.739 44.9091 114.623 44.0727H114.449C114.054 45.1879 113.403 46.0242 112.497 46.5818C111.591 47.1394 110.511 47.4182 109.256 47.4182C107.351 47.4182 105.864 46.9303 104.796 45.9545C103.75 44.9788 103.228 43.6545 103.228 41.9818C103.228 40.2859 103.843 38.9848 105.074 38.0788C106.329 37.1727 108.269 36.7197 110.894 36.7197H114.449V34.9424C114.449 33.6646 114.1 32.6889 113.403 32.0152C112.706 31.3414 111.638 31.0045 110.197 31.0045C109.105 31.0045 108.188 31.2485 107.444 31.7364C106.724 32.2242 106.12 32.8747 105.632 33.6879L103.959 32.1197C104.447 31.1439 105.226 30.3192 106.294 29.6455C107.363 28.9485 108.71 28.6 110.337 28.6C112.52 28.6 114.216 29.1343 115.424 30.203C116.633 31.2717 117.237 32.7586 117.237 34.6636V44.5606H119.293V47H117.724ZM109.709 45.0485C110.406 45.0485 111.045 44.9672 111.626 44.8045C112.207 44.6419 112.706 44.4096 113.124 44.1076C113.543 43.8056 113.868 43.4571 114.1 43.0621C114.333 42.6672 114.449 42.2374 114.449 41.7727V38.8106H110.755C109.152 38.8106 107.979 39.0429 107.235 39.5076C106.515 39.9722 106.155 40.646 106.155 41.5288V42.2606C106.155 43.1434 106.468 43.8288 107.096 44.3167C107.746 44.8045 108.617 45.0485 109.709 45.0485ZM129.963 47.4182C128.708 47.4182 127.581 47.1975 126.582 46.7561C125.583 46.3146 124.735 45.6874 124.038 44.8742C123.365 44.0611 122.842 43.0737 122.47 41.9121C122.122 40.7505 121.947 39.4495 121.947 38.0091C121.947 36.5687 122.122 35.2677 122.47 34.1061C122.842 32.9444 123.365 31.9571 124.038 31.1439C124.735 30.3308 125.583 29.7035 126.582 29.2621C127.581 28.8207 128.708 28.6 129.963 28.6C131.751 28.6 133.18 28.9949 134.249 29.7848C135.341 30.5515 136.154 31.5621 136.688 32.8167L134.353 34.0015C134.028 33.0722 133.494 32.352 132.75 31.8409C132.007 31.3298 131.078 31.0742 129.963 31.0742C129.126 31.0742 128.394 31.2136 127.767 31.4924C127.14 31.748 126.617 32.1197 126.199 32.6076C125.781 33.0722 125.467 33.6414 125.258 34.3152C125.049 34.9657 124.944 35.6859 124.944 36.4758V39.5424C124.944 41.1222 125.363 42.4232 126.199 43.4455C127.059 44.4444 128.313 44.9439 129.963 44.9439C132.216 44.9439 133.842 43.8985 134.841 41.8076L136.863 43.1667C136.282 44.4677 135.411 45.5015 134.249 46.2682C133.111 47.0348 131.682 47.4182 129.963 47.4182ZM147.354 47.4182C146.123 47.4182 145.008 47.1975 144.009 46.7561C143.033 46.3146 142.185 45.6874 141.465 44.8742C140.768 44.0379 140.222 43.0505 139.827 41.9121C139.455 40.7505 139.27 39.4495 139.27 38.0091C139.27 36.5919 139.455 35.3025 139.827 34.1409C140.222 32.9793 140.768 31.9919 141.465 31.1788C142.185 30.3424 143.033 29.7035 144.009 29.2621C145.008 28.8207 146.123 28.6 147.354 28.6C148.562 28.6 149.643 28.8207 150.595 29.2621C151.548 29.7035 152.361 30.3192 153.035 31.1091C153.708 31.8758 154.22 32.7934 154.568 33.8621C154.94 34.9308 155.126 36.104 155.126 37.3818V38.7061H142.197V39.5424C142.197 40.3091 142.313 41.0293 142.545 41.703C142.801 42.3535 143.149 42.9227 143.591 43.4106C144.055 43.8985 144.613 44.2818 145.264 44.5606C145.937 44.8394 146.692 44.9788 147.529 44.9788C148.667 44.9788 149.654 44.7116 150.491 44.1773C151.35 43.6429 152.012 42.8763 152.477 41.8773L154.464 43.3061C153.883 44.5374 152.977 45.5364 151.745 46.303C150.514 47.0465 149.05 47.4182 147.354 47.4182ZM147.354 30.9348C146.588 30.9348 145.891 31.0742 145.264 31.353C144.636 31.6086 144.09 31.9803 143.626 32.4682C143.184 32.9561 142.836 33.5369 142.58 34.2106C142.325 34.8611 142.197 35.5813 142.197 36.3712V36.6152H152.129V36.2318C152.129 34.6288 151.687 33.351 150.804 32.3985C149.945 31.4227 148.795 30.9348 147.354 30.9348ZM159.72 21.2121H162.508V31.9455H162.647C163.112 30.8071 163.785 29.9707 164.668 29.4364C165.574 28.8788 166.654 28.6 167.909 28.6C169.024 28.6 170.035 28.8207 170.941 29.2621C171.847 29.7035 172.614 30.3308 173.241 31.1439C173.891 31.9571 174.379 32.9444 174.704 34.1061C175.053 35.2677 175.227 36.5687 175.227 38.0091C175.227 39.4495 175.053 40.7505 174.704 41.9121C174.379 43.0737 173.891 44.0611 173.241 44.8742C172.614 45.6874 171.847 46.3146 170.941 46.7561C170.035 47.1975 169.024 47.4182 167.909 47.4182C165.47 47.4182 163.716 46.303 162.647 44.0727H162.508V47H159.72V21.2121ZM167.142 44.9091C168.722 44.9091 169.965 44.4212 170.871 43.4455C171.777 42.4465 172.23 41.1455 172.23 39.5424V36.4758C172.23 34.8727 171.777 33.5833 170.871 32.6076C169.965 31.6086 168.722 31.1091 167.142 31.1091C166.515 31.1091 165.911 31.202 165.33 31.3879C164.773 31.5505 164.285 31.7828 163.867 32.0848C163.448 32.3869 163.112 32.7586 162.856 33.2C162.624 33.6182 162.508 34.0712 162.508 34.5591V41.25C162.508 41.8308 162.624 42.3535 162.856 42.8182C163.112 43.2596 163.448 43.6429 163.867 43.9682C164.285 44.2702 164.773 44.5025 165.33 44.6652C165.911 44.8278 166.515 44.9091 167.142 44.9091ZM193.003 47C191.957 47 191.202 46.7212 190.738 46.1636C190.296 45.6061 190.017 44.9091 189.901 44.0727H189.727C189.332 45.1879 188.681 46.0242 187.775 46.5818C186.869 47.1394 185.789 47.4182 184.534 47.4182C182.629 47.4182 181.143 46.9303 180.074 45.9545C179.028 44.9788 178.506 43.6545 178.506 41.9818C178.506 40.2859 179.121 38.9848 180.353 38.0788C181.607 37.1727 183.547 36.7197 186.172 36.7197H189.727V34.9424C189.727 33.6646 189.378 32.6889 188.681 32.0152C187.984 31.3414 186.916 31.0045 185.475 31.0045C184.383 31.0045 183.466 31.2485 182.722 31.7364C182.002 32.2242 181.398 32.8747 180.91 33.6879L179.238 32.1197C179.725 31.1439 180.504 30.3192 181.572 29.6455C182.641 28.9485 183.989 28.6 185.615 28.6C187.799 28.6 189.495 29.1343 190.703 30.203C191.911 31.2717 192.515 32.7586 192.515 34.6636V44.5606H194.571V47H193.003ZM184.988 45.0485C185.684 45.0485 186.323 44.9672 186.904 44.8045C187.485 44.6419 187.984 44.4096 188.403 44.1076C188.821 43.8056 189.146 43.4571 189.378 43.0621C189.611 42.6672 189.727 42.2374 189.727 41.7727V38.8106H186.033C184.43 38.8106 183.257 39.0429 182.513 39.5076C181.793 39.9722 181.433 40.646 181.433 41.5288V42.2606C181.433 43.1434 181.747 43.8288 182.374 44.3167C183.024 44.8045 183.896 45.0485 184.988 45.0485ZM198.55 47V29.0182H201.338V32.3288H201.512C201.837 31.4692 202.418 30.7025 203.254 30.0288C204.091 29.355 205.241 29.0182 206.704 29.0182H207.785V31.8061H206.147C204.637 31.8061 203.452 32.0965 202.592 32.6773C201.756 33.2348 201.338 33.9434 201.338 34.803V47H198.55Z" fill="white"/>\n</svg>\n',"speed-icon":'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M22.4979 15.7501C22.4969 13.7461 21.9163 11.7851 20.8261 10.1035L19.7422 11.1875C20.564 12.5675 20.9978 14.1439 20.9979 15.7501L22.4979 15.7501Z" fill="#909090"/>\n<path d="M21 7.8105L19.9394 6.75L13.5143 13.1752C13.057 12.8997 12.5338 12.7528 12 12.75C11.4067 12.75 10.8266 12.9259 10.3333 13.2556C9.83994 13.5852 9.45543 14.0538 9.22836 14.602C9.0013 15.1501 8.94189 15.7533 9.05765 16.3353C9.1734 16.9172 9.45912 17.4518 9.87868 17.8713C10.2982 18.2909 10.8328 18.5766 11.4147 18.6924C11.9967 18.8081 12.5999 18.7487 13.1481 18.5216C13.6962 18.2946 14.1648 17.9101 14.4944 17.4167C14.8241 16.9234 15 16.3433 15 15.75C14.9972 15.2162 14.8503 14.693 14.5748 14.2357L21 7.8105ZM12 17.25C11.7033 17.25 11.4133 17.162 11.1666 16.9972C10.92 16.8324 10.7277 16.5981 10.6142 16.324C10.5007 16.0499 10.4709 15.7483 10.5288 15.4574C10.5867 15.1664 10.7296 14.8991 10.9393 14.6893C11.1491 14.4796 11.4164 14.3367 11.7074 14.2788C11.9983 14.2209 12.2999 14.2506 12.574 14.3642C12.8481 14.4777 13.0824 14.67 13.2472 14.9166C13.412 15.1633 13.5 15.4533 13.5 15.75C13.4995 16.1477 13.3414 16.529 13.0602 16.8102C12.779 17.0914 12.3977 17.2495 12 17.25Z" fill="#909090"/>\n<path d="M12 6.75002C13.6061 6.75077 15.1822 7.18457 16.5625 8.00574L17.6527 6.91554C16.0679 5.89651 14.2378 5.32343 12.3548 5.2566C10.4719 5.18976 8.60573 5.63164 6.95268 6.53575C5.29964 7.43986 3.92082 8.77277 2.96128 10.3943C2.00174 12.0158 1.49695 13.8659 1.50001 15.75L3.00001 15.75C3.00273 13.3639 3.95182 11.0763 5.63906 9.38906C7.32629 7.70182 9.6139 6.75274 12 6.75002Z" fill="#909090"/>\n</svg>\n',decrease:'<svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M8.5 9L2.13343e-07 1.10526L1.19 -1.40286e-06L8.5 6.78947L15.81 -1.24738e-07L17 1.10526L8.5 9Z" fill="white"/>\n</svg>\n',plus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"/></svg>',"Faded-icon":'<svg width="41" height="28" viewBox="0 0 41 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M40.1053 26H0" stroke="white" stroke-width="2.50658"/>\n<path d="M40.1053 2.1875H0" stroke="white" stroke-width="2.50658"/>\n<path d="M13.9656 11.5457H16.026L16.7931 15.3507L17.0487 17.5164H17.2593L17.5751 15.3507L18.4775 11.5457H20.5228L21.4703 15.3507L21.7862 17.5164H21.9666L22.2223 15.3507L23.0495 11.5457H24.9745L23.0495 19.4414H20.7484L19.8611 15.5913L19.5754 13.4707H19.3648L19.0791 15.5913L18.1917 19.4414H15.8907L13.9656 11.5457Z" fill="white"/>\n</svg>',"zoom-in":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3708H12.4449V6.22266H10.3708V10.3708H6.22266V12.4449H10.3708V16.593H12.4449V12.4449H16.593V10.3708Z" fill="white" fill-opacity="0.6"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407Z" fill="white" fill-opacity="0.6"/>\n</svg>\n',speedBoat:'<svg width="442" height="77" viewBox="0 0 442 77" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect y="71" width="64" height="268.075" rx="7.58491" transform="rotate(-90 0 71)" fill="#262626"/>\n<path d="M159.213 51L159.213 46.2113L147.188 46.2113L147.188 43.6248L157.744 26.6023L162.009 26.6023L162.009 43.7995L165.644 43.7995L165.644 46.2113L162.009 46.2113L162.009 51L159.213 51ZM149.81 43.7995L159.213 43.7995L159.213 28.8743L159.073 28.8743L149.81 43.7995ZM185.729 51L169.44 51L169.44 47.994L177.585 40.6537C178.773 39.5818 179.752 38.4865 180.521 37.368C181.29 36.2262 181.674 35.0261 181.674 33.7678L181.674 33.3483C181.674 31.8803 181.29 30.7501 180.521 29.9578C179.752 29.1422 178.61 28.7344 177.095 28.7344C175.604 28.7344 174.45 29.1189 173.635 29.8879C172.842 30.6336 172.248 31.6356 171.852 32.8939L169.231 31.9152C169.464 31.1929 169.778 30.4938 170.174 29.818C170.594 29.1189 171.118 28.5014 171.747 27.9655C172.376 27.4295 173.134 26.9984 174.019 26.6722C174.928 26.3459 175.977 26.1828 177.165 26.1828C178.377 26.1828 179.449 26.3576 180.381 26.7071C181.336 27.0567 182.129 27.546 182.758 28.1752C183.41 28.8043 183.9 29.55 184.226 30.4122C184.575 31.2744 184.75 32.2182 184.75 33.2435C184.75 34.1756 184.61 35.0494 184.331 35.865C184.074 36.6806 183.701 37.4612 183.212 38.2069C182.746 38.9526 182.175 39.6866 181.499 40.409C180.847 41.1081 180.113 41.8072 179.297 42.5062L172.481 48.4484L185.729 48.4484L185.729 51ZM198.403 51.4194C196.912 51.4194 195.63 51.1398 194.558 50.5806C193.487 49.998 192.601 49.1708 191.902 48.0988C191.203 47.0269 190.69 45.7103 190.364 44.1491C190.038 42.5878 189.875 40.8051 189.875 38.8011C189.875 36.8204 190.038 35.0494 190.364 33.4882C190.69 31.9036 191.203 30.5753 191.902 29.5034C192.601 28.4315 193.487 27.6159 194.558 27.0567C195.63 26.4741 196.912 26.1828 198.403 26.1828C199.895 26.1828 201.176 26.4741 202.248 27.0567C203.32 27.6159 204.206 28.4315 204.905 29.5034C205.604 30.5753 206.116 31.9036 206.443 33.4882C206.769 35.0494 206.932 36.8204 206.932 38.8011C206.932 40.8051 206.769 42.5878 206.443 44.1491C206.116 45.7103 205.604 47.0269 204.905 48.0988C204.206 49.1708 203.32 49.998 202.248 50.5806C201.176 51.1398 199.895 51.4194 198.403 51.4194ZM198.403 48.8678C199.382 48.8678 200.221 48.6814 200.92 48.3086C201.619 47.9124 202.178 47.3648 202.598 46.6657C203.041 45.9667 203.367 45.1278 203.577 44.1491C203.786 43.1471 203.891 42.0285 203.891 40.7935L203.891 36.8088C203.891 35.597 203.786 34.4902 203.577 33.4882C203.367 32.4861 203.041 31.6356 202.598 30.9365C202.178 30.2375 201.619 29.7015 200.92 29.3287C200.221 28.9325 199.382 28.7344 198.403 28.7344C197.425 28.7344 196.586 28.9325 195.887 29.3287C195.188 29.7015 194.617 30.2375 194.174 30.9365C193.755 31.6356 193.44 32.4861 193.23 33.4882C193.02 34.4902 192.916 35.597 192.916 36.8088L192.916 40.7935C192.916 42.0285 193.02 43.1471 193.23 44.1491C193.44 45.1278 193.755 45.9667 194.174 46.6657C194.617 47.3648 195.188 47.9124 195.887 48.3086C196.586 48.6814 197.425 48.8678 198.403 48.8678ZM198.403 40.8634C197.588 40.8634 197.017 40.7003 196.691 40.3741C196.388 40.0478 196.236 39.6517 196.236 39.1856L196.236 38.4166C196.236 37.9506 196.388 37.5544 196.691 37.2282C197.017 36.902 197.588 36.7389 198.403 36.7389C199.219 36.7389 199.778 36.902 200.081 37.2282C200.407 37.5544 200.57 37.9506 200.57 38.4166L200.57 39.1856C200.57 39.6517 200.407 40.0478 200.081 40.3741C199.778 40.7003 199.219 40.8634 198.403 40.8634Z" fill="white"/>\n<path d="M51.9814 28.5721H47.1988C46.6156 25.8892 44.2827 23.9062 41.4832 23.9062C38.6836 23.9062 36.3507 25.8892 35.7675 28.5721H19.3203V30.905H35.7675C36.3507 33.5879 38.6836 35.5709 41.4832 35.5709C44.2827 35.5709 46.6156 33.5879 47.1988 30.905H51.9814V28.5721ZM41.4832 33.238C39.5002 33.238 37.9838 31.7216 37.9838 29.7386C37.9838 27.7556 39.5002 26.2392 41.4832 26.2392C43.4662 26.2392 44.9826 27.7556 44.9826 29.7386C44.9826 31.7216 43.4662 33.238 41.4832 33.238Z" fill="white"/>\n<path d="M19.3203 47.2371H24.1028C24.6861 49.9199 27.019 51.9029 29.8185 51.9029C32.618 51.9029 34.951 49.9199 35.5342 47.2371H51.9814V44.9041H35.5342C34.951 42.2213 32.618 40.2383 29.8185 40.2383C27.019 40.2383 24.6861 42.2213 24.1028 44.9041H19.3203V47.2371ZM29.8185 42.5712C31.8015 42.5712 33.3179 44.0876 33.3179 46.0706C33.3179 48.0536 31.8015 49.57 29.8185 49.57C27.8355 49.57 26.3191 48.0536 26.3191 46.0706C26.3191 44.0876 27.8355 42.5712 29.8185 42.5712Z" fill="white"/>\n<line x1="69.6643" y1="22.6992" x2="69.6643" y2="57.6778" stroke="#545454" stroke-width="1.66447"/>\n<path d="M237.284 23.9062L247.548 33.4395L246.111 34.7742L237.284 26.5756L228.457 34.7742L227.02 33.4395L237.284 23.9062Z" fill="white"/>\n<path d="M237.283 57.7187L227.019 48.1855L228.456 46.8508L237.283 55.0494L246.11 46.8508L247.547 48.1855L237.283 57.7187Z" fill="white"/>\n<path d="M125.589 44.4384C125.587 41.6723 124.786 38.9656 123.281 36.6445L121.785 38.1407C122.919 40.0456 123.518 42.2214 123.518 44.4384H125.589Z" fill="#6F6F6F"/>\n<path d="M123.52 33.4833L122.056 32.0195L113.188 40.8881C112.557 40.5078 111.835 40.305 111.098 40.3012C110.279 40.3012 109.478 40.5441 108.797 40.9991C108.116 41.4541 107.586 42.1008 107.272 42.8574C106.959 43.6141 106.877 44.4466 107.037 45.2499C107.196 46.0531 107.591 46.7909 108.17 47.3701C108.749 47.9492 109.487 48.3435 110.29 48.5033C111.093 48.6631 111.926 48.5811 112.682 48.2677C113.439 47.9543 114.086 47.4235 114.541 46.7426C114.996 46.0616 115.239 45.261 115.239 44.442C115.235 43.7052 115.032 42.983 114.652 42.3519L123.52 33.4833ZM111.098 46.5125C110.688 46.5125 110.288 46.391 109.948 46.1635C109.607 45.936 109.342 45.6127 109.185 45.2344C109.028 44.856 108.987 44.4397 109.067 44.0381C109.147 43.6365 109.344 43.2676 109.634 42.978C109.923 42.6885 110.292 42.4913 110.694 42.4114C111.096 42.3315 111.512 42.3725 111.89 42.5292C112.269 42.6859 112.592 42.9513 112.819 43.2918C113.047 43.6323 113.168 44.0326 113.168 44.442C113.168 44.991 112.949 45.5172 112.561 45.9054C112.173 46.2935 111.647 46.5118 111.098 46.5125Z" fill="#6F6F6F"/>\n<path d="M111.098 32.0158C113.315 32.0168 115.491 32.6156 117.396 33.749L118.901 32.2442C116.713 30.8377 114.187 30.0467 111.588 29.9544C108.989 29.8622 106.413 30.4721 104.132 31.72C101.85 32.9679 99.9469 34.8077 98.6224 37.0458C97.298 39.2839 96.6013 41.8376 96.6055 44.4383H98.6759C98.6797 41.1448 99.9897 37.9872 102.319 35.6584C104.647 33.3295 107.805 32.0195 111.098 32.0158Z" fill="#6F6F6F"/>\n<rect x="301.5" y="8.5" width="59" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="307.5" y="12.5" width="59" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M335.739 53.2221V43.8578H327.002V40.811H335.739V31.4468H339.144V40.811H347.881V43.8578H339.144V53.2221H335.739Z" fill="white"/>\n<rect x="376.5" y="8.5" width="59" height="59" rx="4.5" stroke="#6F6F6F"/>\n<rect x="382.5" y="12.5" width="59" height="59" rx="4.5" fill="#161616" stroke="#6F6F6F"/>\n<path d="M404.103 45.48V40.3661H419.623V45.48H404.103Z" fill="white"/>\n</svg>\n',"zoom-out":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16.593 10.3711H6.22266V12.4452H16.593V10.3711Z" fill="white" fill-opacity="0.6"/>\n<path d="M20.1682 18.6667C21.8791 16.6349 22.8166 14.0636 22.8148 11.4074C22.8148 9.15124 22.1458 6.94573 20.8923 5.0698C19.6389 3.19386 17.8573 1.73174 15.7728 0.868342C13.6884 0.00494269 11.3948 -0.220962 9.18194 0.219195C6.96912 0.659352 4.93651 1.7458 3.34116 3.34116C1.7458 4.93651 0.659352 6.96912 0.219195 9.18194C-0.220962 11.3948 0.00494269 13.6884 0.868342 15.7728C1.73174 17.8573 3.19386 19.6389 5.0698 20.8923C6.94573 22.1458 9.15124 22.8148 11.4074 22.8148C14.0636 22.8166 16.6349 21.8791 18.6667 20.1682L26.5335 28L28 26.5335L20.1682 18.6667ZM11.4074 20.7407C9.56145 20.7407 7.75695 20.1934 6.22209 19.1678C4.68723 18.1422 3.49095 16.6846 2.78454 14.9791C2.07812 13.2737 1.89329 11.3971 2.25342 9.58657C2.61354 7.77608 3.50246 6.11304 4.80775 4.80775C6.11304 3.50246 7.77608 2.61354 9.58657 2.25342C11.3971 1.89329 13.2737 2.07812 14.9791 2.78454C16.6846 3.49095 18.1422 4.68723 19.1678 6.22209C20.1934 7.75695 20.7407 9.56145 20.7407 11.4074C20.738 13.8819 19.7538 16.2543 18.004 18.004C16.2543 19.7538 13.8819 20.738 11.4074 20.7407Z" fill="white" fill-opacity="0.6"/>\n</svg>\n',"HotBox-icon":'<svg width="41" height="27" viewBox="0 0 41 27" fill="none" xmlns="http://www.w3.org/2000/svg">\n<mask id="path-1-inside-1" fill="white">\n<rect y="0.6875" width="40.0952" height="26.3125" rx="1.25298"/>\n</mask>\n<rect y="0.6875" width="40.0952" height="26.3125" rx="1.25298" stroke="white" stroke-width="5.0119" mask="url(#path-1-inside-1)"/>\n<path d="M13.9617 11.2273H16.0216L16.7884 15.0314L17.044 17.1965H17.2545L17.5703 15.0314L18.4724 11.2273H20.5173L21.4645 15.0314L21.7803 17.1965H21.9607L22.2163 15.0314L23.0433 11.2273H24.9678L23.0433 19.1211H20.7428L19.8557 15.272L19.57 13.1519H19.3595L19.0738 15.272L18.1867 19.1211H15.8863L13.9617 11.2273Z" fill="white"/>\n</svg>\n',"color-icon":'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M19.75 0.5L2.25 0.5C1.78605 0.500579 1.34127 0.685139 1.0132 1.0132C0.685139 1.34127 0.500579 1.78605 0.5 2.25L0.5 19.75C0.500579 20.214 0.685139 20.6587 1.0132 20.9868C1.34127 21.3149 1.78605 21.4994 2.25 21.5L19.75 21.5C20.214 21.4994 20.6587 21.3149 20.9868 20.9868C21.3149 20.6587 21.4994 20.214 21.5 19.75L21.5 2.25C21.4994 1.78605 21.3149 1.34127 20.9868 1.0132C20.6587 0.685139 20.214 0.500579 19.75 0.5ZM2.25 19.75L19.75 2.25L19.75 19.75L2.25 19.75Z" fill="#919191"/>\n</svg>',"exit-icon":'<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M16 1.4L14.6 0L8 6.6L1.4 0L0 1.4L6.6 8L0 14.6L1.4 16L8 9.4L14.6 16L16 14.6L9.4 8L16 1.4Z" fill="white"/>\n</svg>\n',"fovea-icon":'<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M26.249 14L19.249 21L18.0117 19.7628L23.7745 14L18.0117 8.23725L19.249 7L26.249 14Z" fill="#909090"/>\n<path d="M14 19.25C13.8851 19.2502 13.7713 19.2276 13.6651 19.1836C13.559 19.1396 13.4625 19.075 13.3814 18.9937L9.00641 14.6187C8.92512 14.5374 8.86064 14.441 8.81664 14.3349C8.77265 14.2287 8.75 14.1149 8.75 14C8.75 13.8851 8.77265 13.7714 8.81664 13.6652C8.86064 13.5591 8.92512 13.4626 9.00641 13.3814L13.3814 9.00641C13.4626 8.92512 13.5591 8.86064 13.6652 8.81664C13.7713 8.77265 13.8851 8.75 14 8.75C14.1149 8.75 14.2287 8.77265 14.3349 8.81664C14.441 8.86064 14.5374 8.92512 14.6187 9.00641L18.9937 13.3814C19.0749 13.4626 19.1394 13.5591 19.1834 13.6652C19.2274 13.7714 19.2501 13.8851 19.2501 14C19.2501 14.1149 19.2274 14.2287 19.1834 14.3349C19.1394 14.441 19.0749 14.5374 18.9937 14.6187L14.6187 18.9937C14.5375 19.075 14.4411 19.1396 14.3349 19.1836C14.2288 19.2276 14.115 19.2502 14 19.25ZM10.8624 14L14 17.1377L17.1377 14L14 10.8624L10.8624 14Z" fill="#909090"/>\n<path d="M1.75 14L8.75 7L9.98725 8.23725L4.2245 14L9.98725 19.7628L8.75 21L1.75 14Z" fill="#909090"/>\n</svg>',"settings-icon-white":'<svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M27.0474 3.86392H23.0869C22.6039 1.64217 20.672 0 18.3536 0C16.0353 0 14.1033 1.64217 13.6203 3.86392H0V5.79588H13.6203C14.1033 8.01763 16.0353 9.65979 18.3536 9.65979C20.672 9.65979 22.6039 8.01763 23.0869 5.79588H27.0474V3.86392ZM18.3536 7.72784C16.7114 7.72784 15.4557 6.47206 15.4557 4.8299C15.4557 3.18773 16.7114 1.93196 18.3536 1.93196C19.9958 1.93196 21.2516 3.18773 21.2516 4.8299C21.2516 6.47206 19.9958 7.72784 18.3536 7.72784Z" fill="white"/>\n<path d="M0 19.3193H3.96052C4.44351 21.5411 6.37547 23.1832 8.69382 23.1832C11.0122 23.1832 12.9441 21.5411 13.4271 19.3193H27.0474V17.3874H13.4271C12.9441 15.1656 11.0122 13.5234 8.69382 13.5234C6.37547 13.5234 4.44351 15.1656 3.96052 17.3874H0V19.3193ZM8.69382 15.4554C10.336 15.4554 11.5918 16.7112 11.5918 18.3533C11.5918 19.9955 10.336 21.2513 8.69382 21.2513C7.05165 21.2513 5.79588 19.9955 5.79588 18.3533C5.79588 16.7112 7.05165 15.4554 8.69382 15.4554Z" fill="white"/>\n</svg>\n'};class _s extends V{init(e){return this.setting=e,this.as((e=>N(`\n    <div id='${e.key}-editor' class='editor collapsable' data-setting-target='editor'>\n        <div data-setting-target='back'> \n            <div class="back-icon">${Ms["back-icon"]}</div> \n            <div class="back-copy">${e.displayName||e.getData("setting")} </div>\n        </div>\n\n        <div class='editor-content' data-editor-target='content'>\n        </div>\n    </div>\n    `.trim()))(e)).appendTo(e.element),this.createEvents("hide"),this.createWire("content"),this.on("contentChange",(e=>{this._setContent(e);})),this.editorContent=this.element.find('[data-editor-target="content"]'),this.element.findAll("[data-setting-target='back']").forEach((e=>e.listenTo("mousedown",(()=>{this.triggerEvent("hide");})))),this.on("hide",(()=>{e.close(),this._collapse();})),this._collapse(),this}_collapse(){$s(this.element),setTimeout((()=>{this.element.hide();}),100);}_setContent(e,...t){"string"==typeof e?this.editorContent.html(e):e instanceof V&&(this.editorContent.append(e,...t),this.triggerEvent("contentChange"));}}let Vs=({key:e,title:t,htmlTemp:n=((e,t)=>`<div class='title' id='${e}-title'>${t}</div>`)})=>N(`div.section#${e}-section`).html(n(e,t)).append((e=>N(`div#${e}-display.display`,0).setData({settingTarget:"display",pragmaTarget:`${e} monitor`}))(e)),Gs=(e,t)=>N(`div.setting.inline#${t}`).setData({setting:t}).append(Vs({key:t,title:e.displayName}));class Ss extends V{init(e,t,{displayName:n,displayTemplate:r=((e,t)=>e.html(t)),settingTemplate:i}={}){e.adopt(this),e.create(this,t),this._displayTemplate=r,this.displayName=n||t,this.createEvents("input").on("input",(function(e){this.updateDisplay(e);})).on(`${t}Change`,((e,t,n=!1)=>{n||e===t||this.triggerEvent("input",e,t);})),this.as((i||Gs)(this,t));}updateDisplay(e){pragmaSpace.onDocLoad((()=>{this.element.findAll("[data-setting-target='display']").forEach((t=>this._displayTemplate(t,e)));}));}}let Js=({key:e,title:t,htmlTemp:n=((e,t)=>`<div class='title' id='${e}-title'>${t}</div>`)})=>N(`div.collapsed-section.collapsable#${e}-section`).html(n(e,t)).append((e=>N(`div#${e}-display.display`,0).setData({settingTarget:"display"}))(e)),Ks=(e,t)=>N(`div.setting.collapsable#${t}`).setData({setting:t}).append(Js({key:t,title:e.displayName}));class Us extends Ss{init(e,t,{displayName:n=t,settingTemplate:r=Ks,displayTemplate:i}){super.init(e,t,{displayName:n,settingTemplate:r,displayTemplate:i}),this.element.find(".collapsed-section").listenTo("mousedown",(()=>{this.open();})),this.editor=new _s(this);}open(){this.parent.element.findAll(".setting.collapsable").forEach((e=>{e!==this.element&&$s(e);})),this.element.findAll(".collapsed-section").forEach((e=>{$s(e);})),setTimeout((()=>{this.addClass("expanded"),this._ogHeight=this.height,this.editor.element.show(),this.css(`height ${this.editor.element.scrollHeight}px`),Ps(this.editor);}),10);}close(){this.parent.element.findAll(".setting.collapsable").forEach((e=>{e!==this.element&&Ps(e);})),this.element.findAll(".collapsed-section").forEach((e=>{Ps(e);})),this.removeClass("expanded"),this.element.style.height=null;}}let Rs=(e,t)=>U(`\n        <div class="option" data-editor-option=${t.getData("option")}>\n        </div>\n    `.trim()).run((function(){if("string"==typeof e)return this.element.html(e);this.append(e);})).element,Ws=e=>e.key.toString(),Zs=function(e,t){return this.as(N(t(e,this))).setId(T.rk5()).addClass("option"),this.setData({option:this.option}),this};class qs extends V{static fromTemplate(e,t){let n="function"==typeof e?e:Ws,r=Rs;return "object"==typeof e&&(n=e.contentTemplate||Ws,r=e.wrapperTemplate||Rs),new qs(t,n,r).setKey(t)}init(e,t,n){this.createWire("optionTemplate"),this.option=e,this._contentTemplate=t,this._wrapperTemplate=n,this.render();}render(){return this.run((function(){Zs.bind(this)(this._contentTemplate(this),this._wrapperTemplate);}))}}class Xs extends Us{init(e,t,n={}){super.init(e,t,n);let r=n.options?n.options:n;if("object"==typeof r){let e=[];for(let[t,i]of Object.entries(r))e.push(qs.fromTemplate(n,t).setData({description:i}).render());r=e;}else r=r.map((e=>qs.fromTemplate(n,e)));this.adopt(...r),this.createEvent("select"),this.createWire("currentOption"),this.on("input",(e=>{let t=this.find(e);if(!t)return console.error(`couldnt find option for ${e}`);this.currentOption=t;})),this.on("currentOptionChange",((e,t)=>{t&&e.key==t.key||this.triggerEvent("select",e,t);})),this.on("select",(e=>{this.parent.update(this.getData("setting"),e.getData("option"));})),r.forEach((e=>e.listenTo("mousedown",(()=>this.setCurrentOption(e))))),this.editor._setContent(...r);}}class Ys extends V{constructor(e,t,{valueSanitizer:n=(e=>e),monitorTemplate:r=(e=>e),size:i=4}={}){super(),this._size=i,this._monitorTemplate=r,this.createWire("val"),this.on("valChange",((n,r)=>{n!=r&&(e[t]=n),this.updateFront(e[t]);})),this.as(N("input").attr("type","text").setData({settingTarget:"display"}).addClass("edible-display")),this.adopt(this.element),this.element.listenTo("focus",(function(){this.value="",this.parent._listenToEsc=document.addEventListener("keydown",(e=>{"Enter"===e.key&&this.blur();}));})),this.element.listenTo("focusout",(function(){this.parent.setVal(n(this.value)),document.removeEventListener("keydown",this.parent._listenToEsc);})),this._setSize(i);}updateFront(e){this.element.value=this._monitorTemplate(e),this.element.placeholder=e;}_setSize(e){return this.element.attr("maxlength",e).attr("size",e),this}}class Qs extends Ss{init(e,t,{displayName:n,settingTemplate:r,monitorTemplate:i,valueSanitizer:a=(e=>parseInt(e)),size:o=4,plusElement:s,minusElement:l,step:u=1}={}){if(r&&(this._content=r),this._monitorTemplate=i,this._valueSanitizer=a,this._size=o,super.init(e,t,{displayName:n,settingTemplate:(e,t)=>this._content(t)}),this.on("input",(e=>{this.setData({value:e}),this.parent.update(this.getData("setting"),e,this);})),this.element.setId(t).addClass("setting","setting-int","section"),s){this.arrows||(this.arrows=N("div.arrows").appendTo(this.element));let e=N("function"==typeof s?s(this):s).listenTo("mousedown",(()=>{this[t]+=u||1;}));this.arrows.append(e);}if(l){this.arrows||(this.arrows=N("div.arrows").appendTo(this.element));let e=N("function"==typeof l?l(this):l).listenTo("mousedown",(()=>{this[t]-=u||1;}));this.arrows.append(e);}}_content(e){return this._edible=new Ys(this,e,{valueSanitizer:this._valueSanitizer,monitorTemplate:this._monitorTemplate,size:this._size}),U().append(N(`div.section#${e}-section`).append(N("div#title.",this.displayName||e)).append(this._edible))}updateDisplay(e){pragmaSpace.onDocLoad((()=>{this._edible.updateFront(e);}));}}function el(e,t,n={}){return U("infinity paginator").from(function(e,t={}){return (new V).from(T.createTemplate({pageTemplate:e,firstPage:t.first,lastPage:t.last,fetch:"function"==typeof t.fetch?t.fetch:e=>{T.throwSoft("no fetch source specified");},onCreate:"function"==typeof t.onCreate?t.onCreate:e=>console.log("created",e),onFetch:t.onFetch,onPageAdd:null,onPageRender:null,onPageActive:"function"==typeof t.onPageActive?t.onPageActive:function(e,t){console.log("active",e);},onPageInactive:"function"==typeof t.onPageInactive?t.onPageInactive:function(e,t){console.log("inactive",e);},onPageDestroy:t.onPageDestroy})).run((function(){let e=N(this.pageTemplate).hide();this.pageTemplate=e.cloneNode(!1),this._clonePage=function(){let e=N(this.pageTemplate.cloneNode(!1)).show();return this.adopt(e),e.lec=this.parent,T.createEventChains(e,"fetch"),e},this.isPageAvailable=e=>(!this.firstPage||e>=this.firstPage)&&(!this.lastPage||e<=this.lastPage),this.create=function(e=this.value,n="append"){let r=this._clonePage();new Promise((n=>{this.onCreate(r,e);let i=this.fetch(e),a=t.onFetch||function(e,t){e.html(t),n(e);};const o=t=>{let r=this.pages.get(e);r&&(a(r,t),n(r));};i instanceof Promise?i.then((e=>{o(e);})):o(i);})).then((t=>{t.fetchChain.exec(),this.onPageRender&&this.onPageRender(t,e);})),r[`${n}To`](this.parent.element),this.addPage(r,e);},this.pages=new Map,this.destroy=function(e){let t=this.pages.get(e),n=n=>{t=this.pages.get(e),this.delPage(e),t.destroy();};if(console.log("REMOV"),this.onPageDestroy){let r=this.onPageDestroy(t,e);if(r instanceof Promise)return r.then(n)}n();},this.addPage=function(e,t){t=null===t?this.pages.size:t,this.onPageAdd&&this.onPageAdd(e,t),this.pages.set(t,e);},this.delPage=function(e){return this.pages.delete(e)},this.activate=function(...e){e.forEach((e=>{let t=this.pages.get(e);t&&(t.active=!0,this.onPageActive(t,e));}));},this.inactivate=function(...e){e.forEach((e=>{let t=this.pages.get(e);t&&(t.active=!1,this.onPageInactive(t,e));}));},this.export("pageTemplate","_clonePage","create","destroy","pages","addPage","delPage","activate","firstPage","lastPage","isPageAvailable","inactivate");}))}(t,T.objDiff({streamer:e,fetch:e.fetch},n))).setValue(0).run({initialConfig(){this._watching=!0;const e={headspace:n.headspace||10,timeout:n.timeout||5};this.fill=function(){this.fetching=!0;let t=As(this.value>=e.headspace?this.value-e.headspace:0,this.value+e.headspace);t=t.filter((e=>this.isPageAvailable(e)));let n=Array.from(this.pages.keys()),r=T.aryDiff(t,n),i=T.aryDiff(n,t),a=r.filter((e=>e>this.value)),o=T.aryDiff(r,a);for(let e of a)this.create(e,"append");for(let e of o.reverse())this.create(e,"prepend");for(let e of i)this.destroy(e);setTimeout((e=>{this.fetching=!1;}),e.timeout);};},scrollSetup(){this.goTo=function(e,t){let n=this;console.log("this value",this.value,"target value",e),this.value!==e&&(this.value=e);let r=this.pages.get(e);r.onRender((function(){n._watching=!1,q(r,"auto").then((()=>{n._watching=!0,console.timeEnd("going to",e);}));}));},this.export("goTo");},findActivePages(){this.findActivePage=function(e,t){return new fs((t=>{t(function(e,t){let n=null,r=999999999999;const i=t+window.innerHeight/2;for(let[t,a]of e){let e=a.top+a.height/2,o=Math.abs(e-i);o<=r&&(r=o,n=t);}return n}(this.pages,e));}))};let e=!1,t=!1;const n=(r,i)=>{if(!this.fetching&&this._watching){if(e)return t={pos:r,dp:i};e=!0,this.findActivePage(r,i).then((r=>{this.value=r,e=!1,t&&(n(t.pos,t.dp),t=null);}));}};var r;r=(e,t)=>{n(e,t);},Y.on("userScrollEnd",te(r)),X(((e,t)=>{Math.abs(t)>40&&e<350&&n(e,t);}));}}).do((function(){if(0===this.dv)return;this.activate(this.value);let e=this.value-(this.dv||1);this.inactivate(e),this.fill();}))}var tl={full:"@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);body{background-color:#161616}.flex,.inline-icon,.inline-icon-2{display:flex;justify-content:center;align-items:center}.inline-icon,.inline-icon-2{width:22px}.inline-icon svg,.inline-icon-2 svg{width:22px}.inline-icon-2{width:25px}.inline-icon-2 svg{width:25px}.clickable{cursor:pointer}.meta{opacity:.5}.blurred-bg{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:9999999999999999999;background:rgba(255,255,255,0.15);backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px)}.popUp{width:400px;height:390px;background:#161616;border-radius:4px;position:absolute;top:30%;left:50%;margin-left:-200px;padding:30px 30px;box-sizing:border-box;transition:all ease .5s;font-family:'IBM Plex Mono',monospace !important}.popUp .next-btn,.popUp .back-btn{position:absolute;right:-50px;width:40px;height:40px;background:#161616;border-radius:50px;top:50%;margin-top:-25px;cursor:pointer}.popUp .next-btn .next-icon,.popUp .back-btn .next-icon,.popUp .back-btn .back-icon,.popUp .next-btn .exit-icon,.popUp .back-btn .exit-icon{text-align:center;position:absolute;top:46%;left:52%;transform:translate(-50%,-50%) rotate(180deg)}.popUp .next-btn .next-icon>svg,.popUp .back-btn .next-btn .back-icon>svg,.popUp .back-btn .next-icon>svg,.popUp .back-btn .back-icon>svg,.popUp .next-btn .exit-icon>svg,.popUp .back-btn .exit-icon>svg{width:10px;height:auto}.popUp .next-btn .exit-icon,.popUp .back-btn .exit-icon{transform:translate(-50%,-50%);top:55%;left:50%}.popUp .next-btn .exit-icon>svg,.popUp .back-btn .exit-icon>svg{width:15px;height:auto}.popUp .back-btn{left:-50px}.popUp .back-btn .back-icon{transform:translate(-50%,-50%);top:56%;left:47%}.popUp .popUpContent{width:100%;display:flex;height:100%;box-sizing:border-box;transition:all ease .5s;justify-content:center;align-items:center}.popUp .popUpContent .boat{width:100%;height:fit-content;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-around;align-items:center;align-content:stretch;text-align:center;transition:all ease .5s}.popUp .popUpContent .boat-title{font-family:'IBM Plex Mono',monospace !important;font-size:27px !important;color:whitesmoke;margin:0;font-weight:400;margin-top:30px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.popUp .popUpContent .boat .spacebar-icon>svg{width:230px}.popUp .popUpContent .boat .speed-icon>svg{width:315px}.popUp .popUpContent .boat .click-icon>svg{width:315px}.displayN{display:none !important}.fadein-onload,.popUp .popUpContent .boat{-webkit-animation:fadein .5s;-moz-animation:fadein .5s;-ms-animation:fadein .5s;-o-animation:fadein .5s;animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fadein-onload from,.popUp .popUpContent .boat from{opacity:0}.fadein-onload to,.popUp .popUpContent .boat to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}",slider:'@charset "utf-8";.pragma-slider{user-select:none;cursor:grab}.pragma-slider:active{cursor:grabbing}.pragma-slider-bg{width:100%;height:5px;background:#6F6F6F;border-radius:15px}.pragma-slider-bar{height:100%;width:100%;background:#2B6CCE;position:relative;transition:all .05s ease;border-radius:15px}.pragma-slider-thumb{width:5px;height:18px;background:#2b6cce;transition:all .05s ease;position:absolute;right:0;top:50%;bottom:50%;margin:auto}.slider-display{text-align:center;padding-bottom:20px}',main:'@charset "utf-8";@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300&display=swap);@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;600;700&display=swap);.glass-block,.lector-mini-settings,.glass-block-border{background:rgba(35,35,35,0.55);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);border-radius:5px;padding:20px 40px;color:whitesmoke}.glass-block-border{border:1px solid rgba(255,255,255,0.18)}.fixed-bottom-box,.lector-mini-settings{position:fixed;bottom:20px}.lector-mini-settings{right:-10px;padding-right:40px}.lector-mini-settings .section{margin-top:25px;margin-bottom:25px}.settings-input{display:flex;flex-direction:column;align-items:center}.pragma-input-text{font-family:\'IBM Plex Mono\',monospace;font-size:22px;border-style:none;outline:none;color:whitesmoke;border-radius:2px;background-color:transparent;text-align:center}.pragma-input-text:hover{background:#393939}.active-select-template{display:flex;flex-direction:row;flex-wrap:no wrap;justify-content:space-around;align-items:center;width:100%}.active-select-template .option{user-select:none;cursor:pointer}.active-select-template .active{opacity:1 !important;background-color:gray;position:relative;transform-style:preserve-3d}.active-select-template .active::after{height:32px;top:-6px;left:-10px}.active-select-template .active::before{width:30px;height:30px;top:-4px;border-radius:2px;left:-4px;background-color:#6F6F6F;position:absolute;border-radius:50%;content:"";z-index:-1;transform:translateZ(-1px);transition:ease all .2s;-webkit-transition:all 1s;-moz-transition:all 1s;animation:sheen 1s forwards}.active-select-template .inactive{background-color:#1a1a1a}.word-element{cursor:pointer;transition:all .05s ease;border-radius:1px;border-bottom:1px solid transparent;margin-bottom:-1px}.word-element.hover-0{background-color:#2b6cce37;outline:2px solid #2b6cce37;border-radius:0}.word-element.hover-1{background-color:rgba(184,184,184,0.249)}.word-element.hover-2{background-color:rgba(184,184,184,0.119)}.word-element.hover-3{background-color:rgba(184,184,184,0.043)}.word-element.mark-is-here{border-bottom:1px solid #2b6cce;background-color:#2b6cce19}.fade-onload,#mark-indicator{-webkit-animation:fadein .5s;-moz-animation:fadein .5s;-ms-animation:fadein .5s;-o-animation:fadein .5s;animation:fadein .5s}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-ms-keyframes fadein{.fade-onload from,#mark-indicator from{opacity:0}.fade-onload to,#mark-indicator to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}.mark-obscurer{background-color:#262626}#mark-indicator{position:fixed;bottom:20px;left:50%;padding:7px;margin-left:-20px;border-radius:5px;background-color:#262626;cursor:pointer;width:15px;height:15px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:center;align-items:center;align-content:center}#mark-indicator>svg{height:auto;width:15px}#mark-indicator.upwards{top:20px;transform:rotate(180deg)}',settings:"@charset \"utf-8\";@import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&family=IBM+Plex+Sans:wght@300;400;700&display=swap);.collapsable,.settings #popup{overflow:hidden;transition:all .15s ease;height:auto;flex:1}.collapsable.collapsed,.settings #popup.collapsed{flex:0}.box-container,.settings #popup,.bar{background-color:#262626;border-radius:4px;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;align-content:stretch;height:auto;padding:10px 15px;width:166px}.bar{width:fit-content;flex-direction:row;justify-content:space-between;align-items:center}.settings{z-index:999999999999999;font-family:'IBM Plex Sans',sans-serif;font-size:18px;bottom:10px;left:10px;color:whitesmoke;position:fixed}.settings #popup{display:block;position:absolute;bottom:55px}.settings #wpm{width:120px;padding-left:8px;margin-left:15px;border-left:1px solid gray}.settings [data-setting-target=back]{cursor:pointer;height:24px;display:flex;align-items:center;margin-bottom:27px}.settings [data-setting-target=back]::after{content:'';height:2px;width:120%;background-color:#6f6f66;position:absolute;top:40px;left:0}.settings [data-setting-target=back] .back-icon{margin-right:10px;margin-right:18px;margin-left:7px}.settings [data-setting-target=back] .back-copy{margin-bottom:3px}.settings #page-bar{position:fixed;right:10px;bottom:10px}.settings #zoom-bar{position:fixed;right:10px;top:20px;padding:8px 5px}.settings #zoom-bar .setting{height:fit-content}.settings #zoom-bar .setting .arrows{display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:stretch;height:70px}.settings #zoom-bar .setting .arrows>svg{height:auto;width:24px}.edible-display{background:#39393950;padding:1px 5px !important;font-family:'IBM Plex Mono',monospace;font-size:18px;border-style:none;outline:none;color:whitesmoke;border-radius:2px;text-align:center}.edible-display:hover{background:#7b7b7b35}.setting{display:flex;flex-wrap:nowrap;justify-content:flex-start;height:30px;user-select:none;-webkit-user-select:none}.setting.collapsable,.settings #popup.setting{height:40px}.setting.inline{height:30px;width:100%}.setting.expanded{height:200px}.setting.collapsed{height:0;flex:0}.setting .section,.setting .collapsed-section{width:100%;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-items:center;align-content:stretch;cursor:pointer}.setting .editor-content .option{display:flex;margin:15px 0;cursor:pointer;opacity:70%}.setting .editor-content .option.selected{opacity:100%}.setting .color-blob{width:22px;height:22px;border-radius:30px;margin-right:10px}.setting .color-blob.selected{border:10px solid red}.setting .mode-icon{margin-right:20px}.setting .arrows{display:flex;flex-direction:column;padding:5px;justify-content:center;align-items:center}.setting .arrows svg,.setting .arrows div{opacity:.7;cursor:pointer;padding:2px 0}.setting .arrows svg:hover,.setting .arrows div:hover{opacity:1}[data-setting='mode'] [data-option='Underneath']{margin:0 0 20px 0 !important;display:flex;align-items:center}.-selector *,.-settings-section-list .option.selected *,.settings>#popup #color .option.selected *,.settings>#popup #mode .option.selected *,.-color-selector *{z-index:99}.-selector::before,.-settings-section-list .option.selected::before,.settings>#popup #color .option.selected::before,.settings>#popup #mode .option.selected::before,.-color-selector::before{content:'';height:50px;width:120%;background-color:#515151;position:absolute;z-index:0 !important;left:0;margin-top:-11px}.-selector::after,.-settings-section-list .option.selected::after,.settings>#popup #color .option.selected::after,.settings>#popup #mode .option.selected::after,.-color-selector::after{content:'';width:5px;height:50px;background-color:#2b6cce;position:absolute;left:0;margin-top:-11px}.-color-selector::before,.settings>#popup #color .option.selected::before{height:40px}.-color-selector::after,.settings>#popup #color .option.selected::after{height:40px}.-settings-section-list .option,.settings>#popup #color .option,.settings>#popup #mode .option{transition:all ease .2s;align-items:stretch !important}.lottie{position:relative;transition:all ease 0,5s}.lottie[data-loading=true]::before{content:\"\";position:absolute;margin:auto;width:25px;left:50%;height:25px}.lottie.click-lottie{margin-top:-10px;height:200px}"};function nl(e={}){this._n=function(){let e=this.range||{min:1,max:100};return 100/(e.max||100-e.min||1)},this.do((function(){this.updateTo(this.value);})),this.updateTo=function(e){this.element.setData({value:e}),this._setBarTo(e*this._n());},this._setBarTo=e=>{this._bar.css(`width ${e}%`),this._thumb.offset();},this._clipValue=e=>{let t=Math.round(e/this._n());this._lv!==t&&(this.value=t);},this._input=N("div.").addClass("pragma-slider-bg"),this._bar=N("div.").addClass("pragma-slider-bar"),this._thumb=N("div.pragma-slider-thumb"),this._bar.append(this._thumb),this._input.append(this._bar);let t=function(){this._clicked=!0;};this._input.listenTo("mousedown",t),this._thumb.listenTo("mousedown",t),document.addEventListener("mouseup",(()=>{this._input._clicked=!1;}));let n=!1;document.addEventListener("mousemove",(e=>{this._input._clicked&&!n&&(window.requestAnimationFrame((()=>{n=!1;let t=e.pageX-this._input.offset().left,r=Math.round(100*Math.min(t/this._input.rect().width,1));this._clipValue(r);})),n=!0);})),this.adopt(this._input),this.append(this._input),this.element.addClass("pragma-slider");}function rl(){T.createChains(this,"idle","active"),this.setIdleTime=function(e=5e3){var t,n;return this._idler=(t=()=>{this.idleChain.exec();},n=()=>{this.activeChain.exec();},new vs(e).onAfk((()=>{t&&t();})).onActive((()=>{n&&n();}))),this},this.extend("onIdle",(function(){return this._onIdle(...arguments),this})),this.extend("onActive",(function(){return this._onActive(...arguments),this}));}T.addStyles(tl.slider);class il extends V{constructor(e,t=70,n=100){super(),this.target=e,this._duration=t,this.target.css(`transition transform ${this._duration}ms ease; transform-origin top`),this.createWire("scale"),this.scale=n,this.on("scaleChange",(function(e,t){if(e==t)return !1;this.value=this.scale,this._scaleTo(this.scale);}));}setTarget(e){return this.target=e,this}set scaleStep(e){this._scaleStep=e;}get scaleStep(){return this._scaleStep||5}scaleUp(){this.scale+=this.scaleStep;}scaleDown(){this.scale-=this.scaleStep;}scaleTo(e){this.scale=e;}_scaleTo(e){return this.target.css(this._buildScaleCSS(e)),this.currentPromise=new Promise((e=>{setTimeout((()=>{e(),this.currentPromise=null;}),this._duration+25);})),this.currentPromise}_buildScaleCSS(e){return `transform scale(${e/100})`}}let al=e=>"\n    <div data-setting-target='display' class=\"slider-display\">\n        8\n    </div>\n    <div data-setting-target='slider'> =====|-- </div>\n".trim();class ol extends Us{init(e,t,n={contentTemplate:al}){super.init(...arguments),this.slider=U().run(nl).run((function(){n.min&&n.max&&this.setRange(n.min,n.max);})).do((()=>{this[t]=this.slider.value;})),this.editor._setContent(al()),this.editor.element.findAll("[data-setting-target='slider']").forEach((e=>{e.html(""),this.slider.appendTo(e);})),this.on("input",(e=>{this.setData({value:e}),this.parent.update(this.getData("setting"),e,this),this.slider.updateTo(e);}));}}var sl=["+","="],ll=["-"],ul="shift+down",cl="shift+up",hl="]",dl="[",pl="ctrl+=",gl="ctrl+-";class ml extends V{constructor(){super(),this.init();}init(){this.settingsMap=new Map,this.pragmaMap=new Map,this.createEvents("update","load");}_set(e,t){return t!==this.settingsMap.get(e)&&this.settingsMap.set(e,t)}create(e,t){const n=t,r=e._events.get(`${t}Change`);if(this.pragmaMap.set(t,e),!r){let n=e[t];e.createWire(t),e[t]=n;}this.adopt(e),e.on(`${t}Change`,((r,i)=>{console.log(`[${t} pragma]`,r,i),this.update(n,r,e);}));}update(e,t,n){t&&(e={[e]:t});for(let[t,r]of Object.entries(e))n||this.pragmaMap.get(t)[`set${t.capitalize()}`](r),this._set(t,r)&&this.triggerEvent("update",t,r,n);}get(...e){return 0==e.length&&(e=Array.from(this.pragmaMap.keys())),e.reduce(((e,t)=>("string"==typeof e?e={[e]:this.settingsMap.get(e)}:e[t]=this.settingsMap.get(t),e)))}toObj(){let e=new Map;for(let[t,n]of this.pragmaMap)e.set(t,n[t]);return e}toJSON(){return JSON.stringify(this.toObj())}}let fl=N("div.settings");function vl(e){const t={changeColor(t=this.value){N("body").findAll("[data-lector-marker-color]").forEach((e=>{e.css(`${e.getData("lectorMarkerColor")} ${t}`);})),e.mark.setColor(t);},changeFovea(t=this.value){e.mark.setFovea(t);},changeWpm(t=this.value){e.mark.setWpm(t);},changeFont(t=this.value){e.setFont(t);},changeMode(t=this.value){e.mark.setMode(t),N("body").findAll("[data-lector-marker-mode]").forEach((n=>{Fs(n,t,e.mark._color);}));},changePage(t=this.value){console.log("[ PAGINATOR ] change page to ",t),e.paginator&&e.paginator.goTo(t);},changeScale(t=this.value){e.scaler&&e.scaler.scaleTo(t);}};function n(e,t){e.addClass("selected"),t&&t.removeClass("selected");}function r(e){if(null==e)return;let t=N("div.color-blob.").css(`background-color ${e}`).setId(`${e}`).html(" ");return N("div#color.").append(t).html()}e.settings=(new ml).as(fl).on("update",(function(e,t,n){console.log("[SETTING]","syncing",this.toObj());})).run((function(){e.appendToRoot(this.element);}));let i=new Xs(e.settings,"color",{displayName:"Color",options:Bs,contentTemplate:e=>`${r(e.getData("option"))}\n\t\t\t<span> ${e.getData("description")} </span>\n  \t\t`.trim(),displayTemplate:(e,t)=>e.html(r(t))}).on("select",n).on("select",(e=>{t.changeColor(e.option);}));function a(e,t=""){return `<div class="mode-icon${t?"-"+t:""}" id="${e}">${Ms[`${e}-icon`]}</div>`}let o=new Xs(e.settings,"mode",{displayName:"Mode",options:Ls,contentTemplate:e=>`\n    ${a(e.getData("option"))} <span> ${e.getData("option")} </span>\n  `.trim(),displayTemplate:(e,t)=>{e.html(a(t,"menu"));}}).on("select",n).on("select",(function(e){t.changeMode(e.getData("option"));})),s=new Qs(e.settings,"wpm",{displayName:"Speed",plusElement:Ms.increase,minusElement:Ms.decrease,step:5}).run((function(){this.element.find("#title").html(Ms["speed-icon"]).addClass("inline-icon-2");})).setWpmRange(20,2e3).on("input",(e=>{t.changeWpm(e);})).bind(sl,(function(){this.wpm+=5;})).bind(ll,(function(){this.wpm-=5;})),l=new ol(e.settings,"fovea",{displayName:"Fovea",displayTemplate:(e,t)=>{e.html(`${t}<span class='meta'>°</span>`);},min:2,max:10}).on("input",(e=>{t.changeFovea(e);})).bind(hl,(function(){this.fovea+=1;})).bind(dl,(function(){this.fovea-=1;})),u=new Qs(e.settings,"page",{displayName:"Page"}).run((function(){this.createEvent("update"),this.element.find("#title").destroy(),this.element.append(N("div#meta.flex.meta").html("/420"));})).on("update",(function(e){this.setPageSilently(e),this.triggerEvent("pageChange",e,!0);})).on("input",(function(e,n){"boolean"!=typeof n&&(console.log("INPUT",e,n),t.changePage(e)),this.setPage(e);})).bind(ul,(function(){this.triggerEvent("input",this.page+1);}),"keyup").bind(cl,(function(){this.triggerEvent("input",this.page-1);}),"keyup"),c=N("div.bar#page-bar").append(u),h=new Qs(e.settings,"scale",{plusElement:Ms["zoomin-white-af"],minusElement:Ms["zoomout-white-af"],step:5}).setScaleRange(20,200).run((function(){this.element.find("#scale-section").destroy();})).on("input",(e=>{t.changeScale(e);})).bind(pl,(function(){this.setScale(this.scale+5);})).bind(gl,(function(){this.setScale(this.scale-5);})),d=N("div.bar#zoom-bar").append(h),p=U("popup").append(i,o,l),g=N("div.inline-icon.clickable#settings-icon").html(Ms["settings-icon-white"]),m=U("settings-bar").addClass("bar").append(g,s);e.settings.append(p,m,c,d),p.createWire("hidden").on("hiddenChange",(function(e){e?this.element.hide():this.element.show();})),p.setHidden(!0),document.addEventListener("mousedown",(e=>{if(Ds(e,g))return p.setHidden(!p.hidden);p.setHidden(!Ds(e,p));})),e.on("load",(function(){let t=U("fader").run(rl,(function(){this.elements=[],this.include=function(){let e=Array.from(arguments);return e.forEach((e=>e.listenTo("mouseover",(function(){this._hovered=this;})).listenTo("mouseout",(function(){this._hovered=!1;})))),this.elements=this.elements.concat(e),this};})).setIdleTime(3e3).include(e.settings).onIdle((function(){this.elements.forEach((e=>{e._hovered||e.css("opacity 0");}));})).onActive((function(){this.elements.forEach((e=>e.css("opacity 1")));}));if(e.settings.fader=t,e.paginator){let t=e.paginator;u.setPageRange(t.firstPage,t.lastPage),u._edible._setSize(t.lastPage.toString().length),u.element.find("#meta").html(`/${t.lastPage}`);}else c.hide();e.settings.update(Os);}));}class bl extends V{constructor(){super(),this.background,this.popUp,this.popUpContent,this.nextBtn,this.backBtn;}render(){this.background=N("div.blurred-bg").appendTo("body"),this.popUpContent=N("div.popUpContent"),this.popUp=U("popUpPragma").as(N("div.popUp")).appendTo(this.background).append(this.popUpContent),this.nextBtn=N("div.next-btn").html(`<div class="next-icon">${Ms["back-icon"]}</div>`).appendTo(this.popUp),this.backBtn=N("div.back-btn").html(`<div class="back-icon">${Ms["back-icon"]}</div>`).appendTo(this.popUp);}}class yl extends V{async init(e,t){yl.loadedScript||K.load("//unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js","lottie"),yl.loadedScript=!0,this.createEvent("load"),this.createElement(e,t);}createElement(e,t=T.rk8()){let n=this;this.as(R`
        <lottie-player
          id="${t}"
          class="lottie"
          src="${e}"
          background="transparent"
          speed="1"
          loop
          autoplay
        >
        </lottie-player>
      `.setData({loading:!0}).css("\n                transition all ease 0.3s\n                opacity 0\n            ").listenTo("load",(function(){this.setData({loading:!1}),this.css("opacity 1"),n.triggerEvent("load");})));}}t(yl,"loadedScript",!1);const wl={click:"https://assets9.lottiefiles.com/private_files/lf30_thomociq.json",space:"https://assets4.lottiefiles.com/private_files/lf30_mohfpxha.json",speed:"https://assets8.lottiefiles.com/private_files/lf30_7sexuvbq.json"};class kl extends bl{constructor(){super(),this.render(),this.addContent();}addContent(){let e=[];function t(t,n){let r=N("div.boat.").html(`\n                            <h1 class="boat-title">${n}</h1>\n                        `).append(function(){return new yl(...arguments)}(wl[t],t).addClass(`${t}-lottie`)).hide();return e.push(r),r}t("click","Place the pointer by clicking on words").show(),t("space","Press space to start & stop the pointer"),t("speed","Change speed through the menu or keyboard"),this.popUpContent.append(...e),this.popUp.adopt(...e).value=0,this.nextBtn.listenTo("mousedown",(()=>{this.popUp.value++,this.popUp.children[this.popUp.value].show(),this.popUp.children[this.popUp._lv].hide(),2==this.popUp.value&&(this.popUp.value=0,this.nextBtn.html(`<div class="exit-icon">${Ms["exit-icon"]}</div>`).listenTo("mousedown",(()=>{this.background.hide(),this.popUpContent.hide();})));})),this.backBtn.listenTo("mousedown",(()=>{0==this.popUp.value?this.popUp.value=2:this.popUp.value--,this.popUp.children[this.popUp.value].show(),this.popUp.children[this.popUp._lv].hide();}));}}var Cl=Object.freeze({__proto__:null,scrollingThresholdToPauseMark:50,scrollingThresholdToScroll:250});const xl={onboarding:!1,wfy:!0,settings:!1,defaultsStyles:!0,fullStyles:!1,debug:!1,hintPointer:!0,autoscroll:!0,disableWhenNotInView:!1,global:!1,experimental:!1,scaler:!1,stream:!1,paginate:!1};function Al(){console.log=console.time=console.timeEnd=console.warn=console.error=()=>{};}function Dl(){console.log("dev mode");}function $l(e,t){return new Promise(((n,r)=>{e.element.onRender((()=>{if(!e.settings)return r("no settings present");let i=e.settings.pragmaMap.get(t);if(i)return n(i);r("could not find setting");}));}))}const Pl=(e,t)=>{let n=U().define({scrollIfNeeded(){return new Promise((async(t,n)=>{console.log("[|] checking if should auto scroll...");let r=e.currentWord;return this.isAutoScrolling?n():!r||Z(r.element,250)?t(!1):(console.log("[|] performing auto scroll"),this.isAutoScrolling=!0,await this.autoScroll(),console.log("[$] done auto scrolling"),this.isAutoScrolling=!1,void t(!0))}))},autoScroll:async()=>await q(e.currentWord)}),r=new zs(e).run((function(){this.autoScroller=n;})).define({correctBlueprint(e,t){if(!t)return e;let n=e.top+e.height/2;return t.height/2<e.height&&n>=t.top&&n<=t.height+t.top&&(e.height=t.height,e.top=t.top),e}}).run((function(){e.appendToRoot(this.element),t.autoscroll&&(e.async.define({beforeSummon:()=>new Promise((async e=>{console.log("before read.... scrolling if needed"),n.scrollIfNeeded().then((()=>{console.log("before read.... wait 100 ms"),setTimeout((()=>{console.log("continuing"),e();}),100);})).catch((()=>{console.warn("tried to scroll, but already scrolling");}));}))}),this.on("changeLine",(()=>{console.log("change line, scrolling if needed"),n.scrollIfNeeded();})));}));if(!t.hintPointer)return r;let i,a=new Set,o=N("div#mark-indicator").listenTo("click",(()=>{console.log("current word",e.currentWord),e.summonToCurrentWord();})).html(`${Ms["arrow-down"]}`),s=!1,l=U().define({unminimizeMark(){for(let e of a)e&&(console.log(e),e.removeClass("mark-is-here"),a.delete(e));e.mark.show(),this.minimized=!1;},minimizeMark(){var t;e.mark.hide(),null===(t=e.currentWord)||void 0===t||t.addClass("mark-is-here"),a.add(e.currentWord),this.minimized=!0;}}).run((function(){this.minimized=!0,e.on("load",(()=>{e.mark.on("mark",(()=>{this.minimized&&this.unminimizeMark();}));}));}));var u;return u=()=>{i&&clearTimeout(i),i=setTimeout((()=>{!function(){console.time("indicating mark");let t=1,n=-1;function r(e){if(Z(e))return !1;let r=Hs(e);if(r===e)return null;var i=e=>e.element.top;return {surface:r,from:i(e)<=(r.isPragmaWord?i(r):window.scrollY)?t:n}}if(!e.isReading){let n=e.currentWord,i=!!n&&r(n);if(console.log("obscured by",i),i){let n=i.from===t;return i.surface.isPragmaLector?(s||(o.appendTo(e),s=!0),o[n?"addClass":"removeClass"]("upwards")):i.surface.addClass("mark-obscurer")[n?"addClass":"removeClass"]("from-top")[n?"removeClass":"addClass"]("from-bottom"),console.timeEnd("indicating mark")}}console.log("DESTROYING INDICATOR",o),o.destroy(),s=!1,e.element.findAll(".mark-obscurer").forEach((e=>e.removeClass("mark-obscurer","obscures-mark-from-top","obscures-mark-from-bottom"))),console.timeEnd("indicating mark");}();}),750);},Y.on("scrollEnd",te(u)),U().define({saveMark(){this._savedMark||(this._savedMark=!0,Y.onNext("scrollEnd",(()=>{this._savedMark=!1;})),e.pause());}}).run((function(){X(((t,r,i)=>{console.log(Math.abs(r),Cl),e.isReading?(Math.abs(r)>50||!Es(e.mark.element))&&this.saveMark():(l.minimizeMark(),n.isAutoScrolling=!1);}));})),r},El=(e,t,n={shallow:!1})=>{let r=new Is(t).as(e).setValue(0);function i(e,t="add"){function n(e,n){e[`${t}Class`](`hover-${n}`);}!function e(t,r=1,i=0){if(n(t,i),t.isInTheSameLine(1)&&r>i){e(t.next,r,i+1);}}(e,2),function e(t,r=1,i=0){if(i>0&&n(t,i),t.isInTheSameLine(-1)&&r>i){e(t.pre,r,i+1);}}(e,2);}let a=r.element.findAll("w");return null!=t&&0===a.length&&(r.setData({wordAtom:!0}),r.addClass("word-element"),r.listenTo("click",(function(){this.summon();})).listenTo("mouseover",(function(){i(this);})).listenTo("mouseout",(function(){i(this,"remove");}))),n.shallow||a.forEach(((e,t)=>{let n=El(e,t,{shallow:!0});r.add(n);})),r},Hl=async(e,t={})=>{e=N(e),t.wfy&&await ws(e);let n=El(e),r=new Ts("lector").as(e).setValue(0).connectTo(n);return console.log("lector root is",r.root),r.mark=Pl(r,t),t.settings&&vl(r),t.onboarding&&(r._popUp=new kl),t.global&&(window.globalLectorController||(window.globalLectorController=U().define({getActiveLector(){let e=this._activeLector;if(e&&Z(e))return e;if(!this.lectors)return null;for(let e of this.lectors)Z(e)&&(this._activeLector=e);return e},addLector(e){this.lectors||(this.lectors=new Set),e.listenTo("click",(()=>{this._activeLector&&this._activeLector!==e&&this._activeLector.pause(),this._activeLector=e,e.resetMark();})),this.lectors.add(e);}})),window.globalLectorController.addLector(r)),t.experimental&&globalThis.pragmaSpace.mousetrapIntegration&&function(e=t.global){let n;if(e){if(!window.globalLectorController)return console.error("could not listen on global scope");window.globalLectorController.binded||window.globalLectorController.define({bind(e,t,n){let r=`${e}:${n}`;this.bindMap.get(r)||(this.bindMap.set(r,t),this._binder.bind(e,(()=>(console.log("triggerting",e,"as",this.getActiveLector(),t),t.bind(this.getActiveLector())())),n)),console.log("global bind......",e),console.log(this.bindMap);}}).run((function(){this.binded=!0,this.bindMap=new Map,this._binder=U();})),n=window.globalLectorController;}else n=r;console.log("binding.........................",n.bind.toString()),n.bind("right",(function(){this.goToNext();})),n.bind("left",(function(){this.goToPre();})),n.bind("space",(function(){return !1}),"keydown"),n.bind("space",(function(){return console.log("[space]",this),this.toggle(),!1}),"keyup");}(),r};const jl=async(t,n={})=>{((n=T.objDiff(xl,n)).debug?Dl:Al)();const r=n.styleInjector?(...e)=>{for(let t of e)n.styleInjector(t,tl[t]);}:(...e)=>{for(let t of e)T.addStyles(tl[t],t);};if(n.defaultStyles&&r("main","slider","settings"),n.fullStyles&&r("full"),!((i=n).stream||i.paginate||i.scaler)){let e=await Hl(t,n);return pragmaSpace.onDocLoad((()=>{e.triggerEvent("load");})),e}var i;if(!n.experimental)return console.warn("EXPERIMENTAL FEATURES TURNED OFF");let a;if(n.stream&&n.paginate&&"stream"===n.paginate.from&&"infiniteScroll"===n.paginate.as){console.log("setting up streamer service");let e=(o=n.stream,U("streamer").setValue(0).run((function(){this.fetch=o,this.getContent=function(){return this.fetch(this.value)};}))),r=el(e,t,n.paginate.config||{});console.log("crating reader..."),a=(await Hl(N(t).parentElement,n)).adopt(r,e),console.log("lector is",a),a.paginator=r,$l(a,"page").then((e=>{a.paginator.do((function(){e.triggerEvent("update",this.value);}));})).catch(),r.fill();}var o;if(n.scaler){a||(a=await Hl(t,n));let r=new il(a.element);"font-size"===n.scaler&&r.define({_buildScaleCSS:e=>`font-size ${e/100}em`}),a.adopt(r),a.scaler=r,$l(a,"scale").then((t=>{a.scaler.on("scaleChange",(n=>{a.scaler.currentPromise&&(anime({targets:a.mark.element,opacity:0,duration:40}),a.scaler.currentPromise.then((()=>{anime({targets:a.mark.element,opacity:1,duration:150,easing:"easeInOutSine"}),a.resetMark();}))),t.setScale(n);}));}));}return pragmaSpace.onDocLoad((()=>{a.triggerEvent("load");})),a};Object.freeze({__proto__:null,Settings:ml,addSettingsToLector:vl});

      class ShadowPragma extends q$1 {
          as(e) {
              if (!e) return

              e = j$1(e);
              let clone = e.cloneNode(true);

              e.html('')
                  .attachShadow({ mode: 'open' });

              e.shadowRoot.appendChild(clone);
              return super.as(e)
          }

          get root() {
              return this.element.shadowRoot
          }
          get shadow() {
              return j$1(this.element.shadowRoot.firstChild)
          }

          _injectCSS(css, name) {
              this.root.append(Y$1`<style id='${name}-styles'>${css}</style>`);
              return this
          }
          injectStyle(style) {
              return this._injectCSS(styles[style], style)
          }

          injectStyles(...styles) {
              for (let style of styles) this.injectStyle(style);
              return this
          }
      }

      class HOST {
          static is(...hosts){
              return hosts.includes(window.location.host)
          }

          static get() {
              return window.location.host
          }

          static getURL() {
              return window.location.href
          }
      }

      const SYNC = new Object;
      let methods = ['get', 'set'];
      methods.forEach(meth => SYNC[meth] = (...params) => { return chrome.storage.sync[meth](...params) });

      const germs = [
          "script", "iframe"
      ];

      function sanitizeDocument(doc) {
          console.time('🔫 sanitizing doc');
          doc.querySelectorAll(germs.join(", "))
              .forEach(germ => germ.remove());
          console.timeEnd('🔫 sanitizing doc');
          return doc
      }

      M$1.addStyles(`
    .revert-all {
        all: initial !important;
    }
`);

      window.Mousetrap = mousetrap;

      let popper = G$1`
<div xfready id=lector class='fade-onload'>
    <div id='exit' class='button'>${SVG('close-icon')}</div>
    <div id='reader-rapper'> 
        <div id='reader' class='article'> 
        </div>
    </div>
</div>
`;

      class LectorPragma extends ShadowPragma {
        constructor(xfready) {
          console.time('lector construction');
          super();
          this.xfready = xfready;

          this.as(j$1(`div.`)).shadow.append(popper);

          globalThis.pragmaSpace.integrateMousetrap(mousetrap);
          window.Mousetrap = mousetrap;

          this.injectStyles('sanitized_elements', 'syntax_highlight', 'lector');
          this.createEvents('load', 'article:load', 'article:parse', 'render', 'destroy');

          // document.body.appendChild(element)

          this.shadow.find('#exit').listenTo('click', () => {
            this.exit();
          });

          this.reader = this.shadow.find('#reader').addClass('loading');

          console.timeEnd('lector construction');
          // this.element.find("#reader").html(article.content)
        }

        async loadArticle(reload = false) {
          if (!reload && this.article) return this
          var article = new readability.Readability(sanitizeDocument(document.cloneNode(true))).parse();
          this.article = article;
          this.triggerEvent('article:load', article);
          return this
        }

        // async parseArticle() {
        //     if (this._parsed) eturn true

        //     console.log('article is', this.article)

        //     this.reader.html(this.article.content)
        //                .removeClass('collapsed')

        //     await wfy(this.reader)

        //     this.article.content = this.reader.html()
        //     console.log('triggering event with', this.article)
        //     this.triggerEvent('article:parse', this.article)
        //     this._parsed = true
        // }

        async parseArticle() {
          if (this._parsed) return true
          console.time('wfying....');
          // console.log('article is', this.article)

          // this.reader.html(this.article.content)
          //    .removeClass('collapsed')

          let wfiedHTML = await window.bridge.request({
            wfy: {
              html: this.article.content,
              url: HOST.getURL(),
            },
          });
          // console.log(wfiedHTML)

          this.reader.html(wfiedHTML);
          // this.reader.replaceWith(_e(wfiedHTML))

          this.article.content = this.reader.html();
          console.timeEnd('wfying....');

          console.time('triggering parse....');
          this.triggerEvent('article:parse', this.article);
          this._parsed = true;
          console.timeEnd('triggering parse....');
          // window.bridge.request({ parse: code.textContent }).then(_html => {
          // console.log("parsed", code)
          // code.html(Xfready.sanitizeHtml(_html))
          // console.log("parsed", code)
          // code.html('ue')
          // })
        }

        destroy() {
          return new Promise(resolve => {
            this.exit();
            resolve();
          })
        }

        load() {
          console.time('loading lec....');
          if (this.loaded) return console.warn('lec already loaded')

          setTimeout(async () => {
            this.loadArticle();
            await this.parseArticle();
            // console.log(article)

            // this.reader.appendTo('html')
            let exitButton = this.shadow.find('#exit');

            let xfreadySettings = await this.xfready.getSettings();
            let onboarding = !xfreadySettings?.onboardingShown;
            onboarding = false;
            //   this.xfready.updateSettings({ onboardingShown: true })

            this.lec = (
              await jl(this.reader, {
                debug: true,
                wfy: false,
                onboarding: false,
                scaler: 'font-size',
                experimental: true,

                fullStyles: true,
                defaultStyles: true,
                settings: true,
                autoscroll: true,
                hintPointer: false,
                global: true,

                onboarding,
                // debug: true,
                styleInjector: (style, name) => {
                  this._injectCSS(name, style);
                },
              })
            )
              .run(function () {
                this.mark.addClass('billion-z-index');
                this.settings?.fader?.include(exitButton);
              })
              .run(() => {
                this.shadow.find('#reader').removeClass('loading');

                console.log('lec: ', this.lec);
                this.loaded = true;
                this.triggerEvent('load', this.lec);
                console.timeEnd('loading lec....');
              });

            let ogSettings = xfreadySettings?.lectorPrefs;
            console.info('og settings are ', ogSettings);

            this.lec.settings
              .on('update', () => {
                // console.info(this.toObj())
                let lectorPrefs = Object.fromEntries(this.lec.settings.toObj());
                this.xfready.updateSettings({ lectorPrefs });
              })
              .run(function () {
                if (ogSettings) this.update(ogSettings);
              });

            // let clone = _e(this.lec.mark.element.cloneNode(true)).appendTo(this.reader)
            // this.lec.mark.element.destroy()
            // this.lec.mark.element.replaceWith(clone)
            // clone.replaceWith(this.lec.mark.element)
          }, 0);
          return this
        }

        render() {
          console.time('RENDERING');

          this.ogBody = j$1('body').addClass('revert-all').clone();

          this.ogScrollTop = window.scrollY;

          document.body.scrollIntoView({ behavior: 'smooth' });
          j$1('body').html('').append(this);
          // this.shadow.show()

          setTimeout(() => {
            this.reader.findAll('code').forEach(code => {
              console.log('PARSE:', code.html());
              window.bridge.request({ parse: code.textContent }).then(_html => {
                console.log('parsed', code);
                code.html(Xfready.sanitizeHtml(_html));
                // console.log("parsed", code)
                // code.html('ue')
              });
              // .appendTo(this.reader)
            });
            this.triggerEvent('render');
            console.timeEnd('RENDERING');
            // _e('body').destroy()
          }, 10);
          // window.bridge.request({ parse: this.element.html() }).then(_html => {
          // console.log('html', _html)
          // this.reader.html(' ')

          // Xfready.sanitizeHtml(_html)
          // html`<div>
          // <h1> READING </h1> <div>${_html}</div></div>`.prependTo(this.reader)

          // this.element.find("#reader").html()
          // this.html(html.value)
          // })
          // hljs.highlightAll()

          return this
        }

        exit() {
          // this.lec.destroy()

          // console.log('og body is', this.ogBody)

          if (this.ogBody) {
            j$1('body').replaceWith(this.ogBody.removeClass('revert-all'));

            window.scroll({
              top: this.ogScrollTop,
            });
          }
          this.element.destroy();
          // _e('html').append(this.ogBody)
          // this.ogBody.appendTo(_e('html'))
          // .removeClass(`xfready-lector-open`)
          this.triggerEvent('destroy');
          return this
        }
      }

      // let injected = false
      function _lector() {
        // if (!injected) {
        // let styles = [ ]
        // styles.forEach(s => injectStyle(s))
        // console.log("injecting", styles)
        // injectStyle("sanitized_elements")
        // injectStyle("syntax_highlight")
        // injectStyle("lector")
        // injected = true
        // }

        return new LectorPragma(...arguments)
      }

      let panel = () => G$1`
    <div class='article-panel'>
        <div class='time-url'>
            <h3 class='time blue no-select' id='time'></h3>
            <p class='url' id='url'></p>
        </div>
        <h3 class='title' id='title'>
        </h3>
        <div class='save-read'>
            <div class='button-gray' id='save'>
                ${SVG('empty-heart-icon')}
                ${SVG('full-heart-icon')}
                <span id='save-text'>Save</span>
            </div>
            <div class='button-gray' id='read'>
                ${SVG('close-icon')}
                ${SVG('read-icon')} 
                <span id='read-text'> Read </span>
            </div>
        </div>
    </div>
`.define({
          title: "#title",
          url: "#url",
          eta: "#time",
          saved: "#save",
          savedText: "#save-text",
          readText: "#read-text",
          love: "#empty-heart-icon",
          readButton: '#read',


          save() {
              this.saved.addClass('saved');
              this.savedText.html('Saved');
          },

          unsave() {
              this.saved.removeClass('saved');
              this.savedText.html('Save');
          },


          read() {
              // switch layout to exit
              this.readText.html('Exit');
              this.readButton.addClass('exit');
          },

          exit() {
              // switch layout to read
              this.readText.html('Read');
              this.readButton.removeClass('exit');
          }
      });

      let template = () => Y$1`
        <div xfready id=popup class='fade-onload'>
            <div class='article-panel'>
            </div>
            <div class='upload-dash'>
                <a href='${FREADY_LINKS.upload}' target="_blank" class='hyperbutton upload'>${SVG('upload-icon')}Upload PDF</a>
                <a href='${FREADY_LINKS.dashboard}' target="_blank" class='hyperbutton dashboard'>${SVG('home-icon')}Dashboard</a>
            </div>
            <div class='xfready-footer'>
                <a href="${FREADY_LINKS.home}">${SVG('logo')}</a>
                <div id='show-on-websites' class='hyperbutton visibility'>
                    <div class="checkbox">
                        ${SVG('checked-checkbox')} 
                        ${SVG('empty-checkbox')}
                    </div>
                    Show on websites
                </div>
            </div>
        </div>
    `;
      let _popper = (element) => _p().as(element).define({
              showCheckbox: "#checked-checkbox",
              visibility: "#show-on-websites",

              showOnWebsites() {
                  this.showCheckbox.removeClass('fade-out');
                  // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
              },
              hideOnWebsites() {
                  this.showCheckbox.addClass('fade-out');
                  // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
              },
          });


      const source$1 = 'popup'; // set source to popup
      class Popup extends ShadowPragma {

          constructor(xfready) {
              super();

              // this.as(this.popper.element)
              // this.popper.element = this.shadow


              this.as(template());
              this.popper = _popper(this.shadow); // kinda patch solution for the shadow dom

              // this.popper = _p().as(this.shadow)

              this.panel = panel();

              this.xfready = xfready
                              .on('article:ready', article => this.slurpArticle(article))
                              .on('link:load', article => {
                                  article.saved ? this.panel.save() : this.panel.unsave();
                              })
                              .on('article:read', () => {
                                  this.panel.read();

                                  setTimeout(() => {
                                      this.hide();
                                  }, 200);
                              })
                              .on('article:exit', () => this.panel.exit());
              

              this.shadow.find(".article-panel").replaceWith(this.panel.element);

              this.injectStyles('main', 'popup');

              
              // pragmaSpace.onDocLoad(() => {
                  // this.lector = _lector()
                                  // .on('article:load', slurpArticle)
                                  // .on('article:parse', createArticle)
                                  // .loadArticle()
              // })

              // this.panel.title.listenTo('click', () => )
              this.panel.saved.listenTo('click', () => {
                  let action = this.xfready.link?.saved ? 'unsave' : 'save';

                  this.xfready[action]({ source: source$1 });
                  this.panel[action](); // this.panel.save / this.panel.unsave
                  // saveArticle(this.lector.article)
              });


              this.shadow.find("#read").listenTo('click', () => {
                  this.xfready.toggleReadOrExit({ source: source$1 });
                  // this.lector
                          // .load()
                          // .render()
              });

              document.addEventListener('click', e => {
                  if (e.target?.shadowRoot !== this.root
                      && e.target?.shadowRoot !== this.xfready.alma?.root
                  ) this.hide();
              });
              

              console.log(this.popper);
              console.log(this.popper.visibility);
              this.popper.visibility.listenTo('click', () => {       // CHECKBOX display on websites
                  if (this._showOnWebsites) this.hideOnWebsites(); else this.showOnWebsites();
                  const showOnWebsites = this._showOnWebsites;

                  this.xfready.updateSettings({ showOnWebsites });
                  // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
                  // console.log('CLICKED')
              });
          }

          showOnWebsites() {
              this._showOnWebsites = true;
              this.popper.showOnWebsites();
          }

          hideOnWebsites() {
              this._showOnWebsites = false;
              this.popper.hideOnWebsites();
          }

          toggle() {
              if (this.shown) return this.hide()
              return this.show()
          }

          hide() {
              if (this.show === false) return this

              this.shown = false;
              this.element.hide();
              return this
          }

          show() {
              this.shown = true;
              this.element.show();
              return this
          }

          destroy() {
              return new Promise(resolve => {
                  this.hide();
                  this.element.destroy();
                  resolve();
              })
          }


          async slurpArticle(article) {
              this.panel.title.html(article.title);
              this.panel.eta.html(article.eta);
              this.panel.url.html(authoredBy$1());

              // SYNC.get('preferences', preferences => {
                  // this.panel.eta.html(Math.round((article.length/4.7)/(preferences.wpm || 250)) + "'")
              // })
          }

      }
      function _popup(){
          return new Popup(...arguments)
      }

      function authoredBy$1(article) {
          return HOST.get()
      }

      // let element = html`
      //         <div xfready id='alma' class='alma'>
      //             <div class='time'>51'</div>
      //             ${SVG('read-icon-new')}
              
      //             ${SVG('empty-heart-icon')}
      //             ${SVG('full-heart-icon')}
      //             ${SVG('close-icon')}

      //             <div class='press-space fade-onload'>Press ${SVG('new-space-white')} to read</div>
      //         </div>

      // `

      let element = G$1`
    <div xfready id='alma' class='alma'>
        <div class="eta-popup">
            <div class='time'></div>
            ${SVG('logo-icon-white')}
        </div>

        ${SVG('read-icon-new')}
    
        ${SVG('empty-heart-icon')}
        ${SVG('full-heart-icon')}
        ${SVG('close-icon')}

        <div class='press-space displayN'>Press ${SVG('new-space-white')} to read</div>
    </div>
`.define({
          close: "#close-icon",
          read: "#read-icon-new",
          emptyLove: "#empty-heart-icon",
          fullLove: "#full-heart-icon",
          time: ".time",
          etaPopup: ".eta-popup",
          pressSpace: ".press-space",

          save() {
              this.addClass('saved');
              // this.saved.addClass('saved')
              // this.savedText.html('Saved')
          },
          unsave() {
              this.removeClass('saved');
              // this.addClass('saved')
              // this.saved.removeClass('saved')
              // this.savedText.html('Save')
          }
      });


      const source = 'alma';

      class Alma extends ShadowPragma {

          init(xfready) {

              this.xfready = xfready;

              this.xfready.on('article:ready', slurpArticle);

              this.xfready.on('link:load', article => {
                  article.saved ? element.save() : element.unsave();
              });

              this.as(j$1(`<div><div class='templ'></div></div>`));
              this.shadow.find(".templ").replaceWith(element.element);


              this.injectStyles('main', 'alma');

              element.close.listenTo('click', () => {
                  this.hide();
              });


              const triggerRead = (params) => {
                  this.read(params);
                  this.hide();
              };

              element.read.listenTo('mouseenter', ()=>{
                  element.pressSpace.removeClass('displayN');

                  setTimeout(() => {
                      hideElement(element.pressSpace);


                      // setTimeout(() => {
                      //     element.pressSpace.addClass('displayN')
                      // }, 200);
                      
                  }, 4000);

              });

              element.read.listenTo('mouseleave',()=>{
                  console.log('leaving');
                  hideElement(element.pressSpace);
              });

              element.read.listenTo('click', () => triggerRead() );
              mousetrap.bind("space", () => {
                  triggerRead({ source: 'space' });
                  return false
              });


              element.emptyLove.listenTo('click', ()=>{
                  this.save();
              });

              element.fullLove.listenTo('click', ()=>{
                  this.unsave();
              });

              element.etaPopup.listenTo('click',()=>{
                  //this.hide()
                  this.xfready.popup.show();
              });
          }

          hide() {
              return new Promise((resolve) => {
                  this.shadow.addClass('fade-out');
                  mousetrap.unbind('space');

                  setTimeout(() => {
                      this.element.hide();
                      resolve();
                  }, 200);
              })
          }

          read(params = { source }) {
              console.log('-------------------- Alma is reading from', params);
              this.xfready.read(params);
          }

          save(params = { source }){
              element.save();
              this.xfready.save(params);
          }

          unsave(params = { source }){
              element.unsave();
              this.xfready.unsave(params);
          }

          destroy() {
              return this.hide().then(() => {
                  this.element.destroy();
              })
          }
      }


      function _alma(){
          return new Alma(...arguments)
      }

      async function slurpArticle(article) {
          element.time.html(article.eta);
      }

      function hideElement(element){
          element.removeClass('fade-onload');
          element.addClass('fade-out');

          setTimeout(() => {
              element.removeClass('fade-out');
              element.addClass('displayN');
          }, 100);
      }

      var REGEXPS = {
          // NOTE: These two regular expressions are duplicated in
          // Readability.js. Please keep both copies in sync.
          unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
          okMaybeItsACandidate: /and|article|body|column|main|shadow/i,

          likelyDomains: WHITELIST_URL_REGEX,
          likelyPathContents: WHITELIST_PATH_REGEX
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
          //
          //
          console.time("readable done in");
          if (typeof options == "function") {
              options = { visibilityChecker: options };
          }

          var defaultOptions = { minScore: 30, minContentLength: MIN_ARTICLE_LENGTH, visibilityChecker: isNodeVisible };
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
          const domainCred = addDomainCred(window.location);

          const result = [].some.call(nodes, function (node) {
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

              score += Math.sqrt(textContentLength - options.minContentLength) * Math.sqrt(domainCred);

              if (score > options.minScore) {
                  return true;
              }
              return false;
          });

          function floor(n) { return Math.round((n + Number.EPSILON) * 100) / 100 }

          console.timeEnd("readable done in");
          // score range

          // let base = Math.min(Math.max(score, 0), 30) * 3
          // let accuracy = Math.min(Math.sqrt(Math.abs(score - 30)), 10)
          //let certainty = floor(base+accuracy) 

          let certainty = Math.max(Math.min(100, score > 0 ? Math.sqrt(score) * 15 : 0), 0);

          console.log(`🌴 - from Fready \n\n This page resembles %c${floor(certainty)}% %cof an article.`, "font-size:13px", "font-size:11px");

          if (result) console.log(`\n✅ This is an article, have a beautiful read!\n\n\tarticle's overall score: ${Math.min(floor(1.5 * score), 100)}\n\tbonus: +${Math.min(floor(1.2 * domainCred), 100)}`);



          return result
      }


      function addDomainCred(location) {
          // domain match gives more cred than subdomain
          //console.log(location.pathname)
          //if pw does not contain numbers, and at most 1 capital letter, add add dom cred + 1
          //else - 0.1
          let rd = (accu, pw) => {
              //console.log(pw.search(/\w/), pw, pw.search(/\w/)==0)
              if (pw.length > 1 && pw.length < 13 && pw.search(/\w/) == 0 && pw == pw.toLowerCase()) {
                  //console.log("adding", pw, Math.sqrt(pw.length))
                  return accu + Math.sqrt(pw.length)
              } else {
                  //console.log("deducting", pw, Math.sqrt(pw.length)/2)
                  return accu - Math.sqrt(pw.length / 2)
              }
          };

          let urlFormation = location.pathname.concat(location.search).split('-').reduce(rd, 0) / 6;
          let cred = 4 * REGEXPS.likelyDomains.test(location.host) + 2 * REGEXPS.likelyPathContents.test(location.pathname) + urlFormation;
          //console.log(cred)
          //console.log(urlFormation)
          //console.log(`ADDING DOMAIN CRED FOR ${location}`, cred)
          return cred
      }

      function checkURL(url) {
          let ary = url.replace("https://", "").replace("http://", "").split("/");
          let host = ary[0].replace("www.", "");
          let sub = (ary[1].split("?"))[0];
          console.log(host);
          console.log(sub);
          return !(BLACKLIST_URLS.some(voo => {
              if (host.includes(voo)) {
                  console.log('BLACKLIST domain');
                  return true
              }
          })) && !(BLACKLIST_SUBS.some(voo => {
              if (sub == voo) {
                  console.log('BLACKLIST subsdomain');
                  return true
              }
          }))
      }


      class ArticleAI extends q$1 {
          // init() {
          // }

          _isDocFreadable(doc=document) {
              return checkURL(HOST.getURL()) && isProbablyReaderable(doc)
          }
      }

      function _articleAI() {
          return new ArticleAI
      }

      function clearBadge() {
        return setBadge()
      }

      function setBadge(badge) {
        console.log('badge setting', badge);
        return window.bridge.request({ badge })
      }

      function setColorScheme(colorScheme = 'dark') {
        return window.bridge.request({ colorScheme })
      }

      function initColorScheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setColorScheme('dark');
        } else setColorScheme('light');

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
          const scheme = e.matches ? 'dark' : 'light';
          setColorScheme(scheme);
        });
      }

      class Xfready extends q$1 {
        async init() {
          initColorScheme();

          window.bridge
            .on('message:click', async (data, respond) => {
              if (!this._injected) await this.inject({ skipAlma: true });
              this.popup.toggle();
            })
            .on('message:reload', async (data, respond) => {
              this.updateView();
            });

          this.createEvents(
            'lector:create',
            'lector:destroy',
            'link:load',
            'link:create',
            'article:ready',
            'read'
          )
            .on('article:ready', article => setBadge(article.eta))
            .on('updateSetting:showOnWebsites', setting => {
              if (setting === false) this._ejectAlma();
            })
            .on('read', (url, params) => {
              window.bridge.request('links:read', {
                url,
                params,
              });
            });

          this.ai = _articleAI();
          this.updateView();
        }

        updateView() {
          if (this.ai._isDocFreadable()) {
            this.inject();
          } else {
            this.eject();
          }
        }

        eject() {
          if (!this._injected) return

          this._ejectAlma();

          this.popup?.destroy().then(() => {
            this.popup = null;
            console.log('destroyed popup');
          });

          this.lector?.destroy().then(() => {
            this._lector = null;
            console.log('destroyed lector');
          });
          // this.popup?.destroy()
          // this.lector?.destroy()
          this.link = null;
          this._element = null;

          this._injected = false;
        }

        _injectAlma() {
          this.alma = _alma(this).appendTo(this);
        }

        _ejectAlma() {
          this.alma?.destroy().then(() => {
            this.alma = null;
            console.log('destroyed alma');
          });
        }

        async inject({ skipAlma = false } = {}) {
          if (this._injected) return

          this._injected = true;
          this.as('html');

          let showOnWebsites = (await this.getSettings())?.showOnWebsites !== false;

          if (!skipAlma && showOnWebsites) {
            this._injectAlma();
          }

          if (!this.popup)
            this.popup = _popup(this)
              .appendTo(this)
              .hide()
              .run(function () {
                this[`${showOnWebsites ? 'show' : 'hide'}OnWebsites`]();
              });

          this.on('lector:create', lector => {
            lector.on('article:load', article => {
              SYNC.get('preferences', preferences => {
                console.log('preferences are', preferences);
                article.eta = Math.round(article.length / 4.7 / (preferences.wpm ?? 250)) + "'";
                // article.etaMinutes =
                this.triggerEvent('article:ready', article);
              });
            });
          });

          // set existing link if there is one
          this.link = await window.bridge.request('links:get', HOST.getURL());
          console.log('existing article is', this.link);

          // pragmaSpace.onDocLoad(() => {
          this.lector = _lector(this)
            // .on('article:load')
            .on('article:parse', article => {
              this.article = article;
              // this.createLink(article)
            })
            .on('destroy', article => {
              this.triggerEvent('article:exit');
            });
          // .on('render', article => {
          //     this.triggerEvent('link:read', this.link)
          // })

          if (this.link) this.triggerEvent('link:load', this.link);

          this.lector.loadArticle();
        }

        async createLink(article, { saved = null, skipBody = false, source = 'xfready' } = {}) {
          console.time('creating link..............');

          await this.link;
          // console.log(`link is ${this.link?.inTheCloud ? '' : ' -- NOT --'} in the cloud`)
          if (skipBody && !this.link?.inTheCloud) {
            skipBody = false;
            // console.log('link is already in the cloud!')
          }

          if (saved === null && this.link && this.link.saved) saved = true;

          let link = {
            url: HOST.getURL(),
            saved,
          };

          if (!skipBody) {
            if (!article) return console.error('no article to create...', article)

            link.body = article.content;
            link.meta = {
              title: article.title,
              by: authoredBy(),
              words: Math.round(article.length / 4.7),
              pages: 1,
            };
          }

          this.link = link;
          this.triggerEvent('link:load', this.link);

          console.log('links:create', link);
          console.timeEnd('creating link..............');
          return new Promise(async resolve => {
            // create link
            await window.bridge.request('links:create', { link, source });

            // wait a bit and then get the link back
            // setTimeout(() => {
            this.link = await window.bridge.request('links:get', HOST.getURL());
            // })

            this.triggerEvent('link:create', this.link, { source });
            resolve(this.link);
          })
          // return )
        }

        toggleReadOrExit() {
          if (this._isReading) return this.exit()
          return this.read(...arguments)
        }

        async read(params) {
          this._isReading = true;
          await this.lector.load();
          this.lector.onNext('article:parse', article => {
            // this.article = article
            this.createLink(article);
          });
          this.triggerEvent('read', HOST.getURL(), params);
          return this.lector.render()
        }

        exit() {
          clearBadge();
          this._isReading = false;
          return this.lector.exit()
        }

        async save(params = {}) {
          // saveArticle(this.lector.article)
          console.log('saving...');
          // console.log('article is', this.article)
          await this.lector.parseArticle();
          console.log('now after parsearticle is', this.article);
          // this.triggerEvent('save', HOST.getURL(), params)
          return this.createLink(this.article, { saved: true, skipBody: true, ...params })
        }

        unsave(params = {}) {
          // this.triggerEvent('save', HOST.getURL(), params)
          return this.createLink(this.article, { saved: false, skipBody: true, ...params })
        }

        // static general helpers, handled by the 'core' of xfready
        static sanitizeHtml(input) {
          var doc = new DOMParser().parseFromString(input.toString(), 'text/html');
          return j$1(doc.body).html()
        }

        set lector(n) {
          this._lector = n;
          this._lector.xfready = this;
          this.triggerEvent('lector:create', this._lector);
        }

        get lector() {
          return this._lector
        }

        getLector() {
          return new Promise((resolve, reject) => {
            if (this._lector) resolve(this._lector);

            this.on('newLector', lector => {
              resolve(lector);
            });
          })
        }

        async getSettings() {
          return new Promise(r => SYNC.get('settings', data => r(data.settings)))
        }

        async updateSettings(update) {
          let settings = (await this.getSettings()) || {};
          // SYNC.get('settings', settings => {
          console.info('settings in the db are', settings);

          /// support for both Objects and Maps
          if (update.constructor !== Map) update = Object.entries(update);

          for (let [key, val] of update) {
            settings[key] = val;
            this.triggerEvent(`updateSetting:${key}`, val);
          }

          console.log('updating settings to ', settings);
          SYNC.set({ settings });
          // })
        }
      }

      function authoredBy(article) {
        return HOST.get()
      }

      class Bridge extends q$1 {
          init(port=chrome.runtime.connect()){
              this.createEvents("portMessage", "send", 'message');
              this.connectToPort(port);
          }

          connectToPort(port=chrome.runtime.connect()) {
              this.port = port; 

              this.port.onMessage.addListener(msg => {
                  console.log('received', msg);
                  this.triggerEvent('portMessage', msg);
              });

              chrome.runtime.onMessage.addListener(
                  (data, sender, respond) => {
                      let responded = false;
                      let _r = function() {
                          responded = true;
                          respond(...arguments);
                      };

                      this.triggerEvent('message', data, _r, sender);
                      if (typeof data === 'string') this.triggerEvent(`message:${data}`, data, _r, sender);
                      if (typeof data === 'object') this.triggerEvent(`message:${Object.keys(data)[0]}`, data, _r, sender);

                      if (!responded) respond(200);
                  }
              );
          }

          awaitResponse(key) {
              return new Promise(resolve => this.on("portMessage", (msg) => {
                  // console.log(msg.key, key)
                  if (msg.key === key) {
                      resolve(msg.data);
                      return cb => {
                          cb.selfDestruct();
                      }
                  }
                  // this.awaitResponse(key).then(msg => resolve(msg.data))
              }))
          }

          send(message, key=util.rk8(), retryOnFail=true) {
              try {
                  this.port.postMessage({
                      message,
                      key
                  });
              } catch {
                  if (retryOnFail) {
                      this.connectToPort();
                      this.send(message, key, false);
                  }
                  console.error('failed to post message');
              }

              this.triggerEvent("send", key, message);

              return key
          }
          
          request(message, data=null) {
              if (data) message = { [message]: data };
              return new Promise((resolve, reject) => {
                  let key = this.send(message);

                  this.triggerEvent("send", key, message);
                  this.awaitResponse(key).then(data => resolve(data));
              })
          }
      }

      function _bridge() {
          return new Bridge(...arguments)
      }

      // window.bridge.request("links:index").then(data => {
      //     console.log("parsed", data)
      //     // console.log("parsed", code)
      //     // code.html('ue')
      // })

      // alert(document.querySelector("embed[name='application/x-google-chrome-pdf']"))

      function grabUserFromJolene() {
          let jolene = JSON.parse(_e("head").find("meta[name='jolene']").attr('content'));
          console.log('jolene is', jolene);

          let creds = {
              name: jolene.name,
              permissions: jolene.permissions,
              misc: jolene.misc
          };

          return new Promise(resolve => resolve(creds))
      }


      class User {
          static data = {};

          static setData(data){
              for (let [key, value] of Object.entries(data)) {
                  User.data[key] = value;
              }
          }

          static sync(data=null){
              if (data) {
                  // sync to local storage
                  return new Promise(resolve => chrome.storage.sync.set({ user: data }, function () {
                      User.setData(data);
                      resolve(data);
                  }))
              }

              // else set users params to whatever they are in this instance
              return new Promise(resolve => chrome.storage.sync.get('user', function (data) {
                  User.setData(data);
                  resolve(data);
              }))
          }

          static get(key=null, maxTries=3) {
              return new Promise(resolve => {
                  if (maxTries<=0 || key in User.data) return resolve(User.data[key])

                  User.sync();
                  return User.get(key, maxTries-1).then((data) => resolve(data))
              })
          }
      }

      User.sync();

      if (HOST.is("fready.co", "www.fready.co", "localhost:3000")) {
          // console.log('user data', User.data)
          grabUserFromJolene().then(async data => {
              console.log('data', data);
              await User.sync(data);
              console.log("DATA", data);
          });
      }



      // (async () => {
          // let api_key = await User.get('api_key')
          // console.log("USER DATA", User.data)
          // let name = await User.get('name')
          // console.log(`* ${name} in XFREADY *`)
      // })()


      // if (HOST.is("fready", "localhost:3000")) {
      //     grabUserFromJolene().then(async data => {
      //         console.log("DATA", data)
      //         await User.sync(data)

      //         let api_key = await User.get('api_key')
      //     })
      // }

      Promise.resolve().then(function () { return pragmajs; }).then(pragmajs => {
          for (let [key, value] of Object.entries(pragmajs)) {
              window[key] = value;
          }
          
      });

      window.bridge = _bridge();

      window.xfready = new Xfready()
                          .on('lector:create', lector => {
                              console.group('constructing lector');
                              console.time("CONSTRUCT LECTOR from DOCUMENT...");
                              console.log(_FREADY_API_URL);
                              lector.on('load', () => {
                                  console.log(lector.reader);
                                  console.timeEnd("CONSTRUCT LECTOR from DOCUMENT...");
                                  console.groupEnd('constructing lector');
                              });
                          });

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

      Object.defineProperty(exports, '__esModule', { value: true });

})));
