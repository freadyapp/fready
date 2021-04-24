import { Pragma, html, _e, util } from "pragmajs"
import { Xfready } from "./xfready"
import Mousetrap from "mousetrap"
import { Readability } from '@mozilla/readability'
import { injectStyle } from "../.build_assets/index";
import { Lector } from "lectorjs"

// window.Mousetrap = Mousetrap
// console.log('readabilitys')
// console.log(Readability)

let template = () => html`
<div xfready id=lector class='fade-onload'>
    <div id='exit' class='button'> Exit </div>
    <div id='reader-rapper'> 
        <div id='reader' class='article collapsable collapsed'> 
        </div>
    </div>
</div>
`.hide()

let parser = new DOMParser()

function escapeHtml(unsafe) {
return unsafe
        // .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        // .replace(/"/g, "&quot;")
        // .replace(/'/g, "&#039;");
}

const wregex = /(\w+)/gm


const obsKey = util.rk(5)
const obs = {
    "<": `;;#${obsKey}0;`,
    ">": `;;#${obsKey}1;`
}

let obsegex = {}
for (let [key, value] of Object.entries(obs)) {
    obsegex[key] = new RegExp(value, "gm")
}

const esc = (str) => str.replace(/</g, obs["<"])
                            .replace(/>/g, obs[">"])

const unesc = (str) => {
    const r = (key) => obsegex[key]
    return str.replaceAll(r("<"), "<")
              .replaceAll(r(">"), ">")
}

function wegex(str) {
    // return str
    return str.replaceAll(wregex, (match, re) => esc("<w>") + escapeHtml(re) + esc("</w> "))
}

function wfyInner(desc) {
    if (desc == undefined) return desc
    if (desc.tagName == "CODE" || desc.tagName == "PRE") return desc
    if (desc.tagName == undefined) {
        // if text, wfy it and return node
        desc.textContent = wegex(desc.textContent)
        return desc
    }
    let og = desc
    let childMap = new Map()
    desc = og.cloneNode(true)

    let childTag = (key) => `{{{{@XFREADY:${key}:}}}}`

    desc.childNodes.forEach((element, i) => {
        let key = i.toString()
        childMap.set(key, element.cloneNode(true))
        element.replaceWith(childTag(key))
    })


    let txt = desc.innerHTML
    const regex = /\{{4}@XFREADY:(.+?(?=\:)).+?(?=\}{4})\}{4}/gm

    function replaceElement(match, key){
        let child = childMap.get(key)
        let inner = wfyInner(child)

        // console.log(inner.innerHTML)
        // inner.innerHTML = inner.textContent.replaceAll(wregex, (match, re) => `<w>${re}</w>`)
        // console.log(inner.innerHTML)
        let outer = inner.outerHTML
        if (outer) return outer 
        return parser.parseFromString(unesc(inner.textContent), "text/html").documentElement.innerHTML 
    }
    
    const parse = txt.replaceAll(regex, replaceElement)
    // console.log(parser.parseFromString(parse, "text/html").documentElement.innerHTML)
    og.innerHTML = parse
    // og.innerHTML = parser.parseFromString((parse), "text/html").documentElement.innerHTML
    return og 
}

export function wfyElement(element) {
    console.log('wfy element', element)
    // element = _e(element)
    // let nodes = element.findAll("*")
    // let nodes = element.childrenArray
    // console.log('children', nodes)
    // if (nodes.length != 0) nodes.forEach(desc => wfyElement(desc))

    return wfyInner(element)
}

export function wfy(element) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.time('wfying...')
            wfyElement(element)
            element.removeClass('loading')
            resolve()
            console.timeEnd('wfying...')
        }, 200)
    })
}


export class LectorPragma extends Pragma {
    constructor() {
        super()
        globalThis.pragmaSpace.integrateMousetrap(Mousetrap)
        window.Mousetrap = Mousetrap
        console.log(Mousetrap)
        console.time('creating lec....')
        this.createEvents('load', 'render', 'destroy')

        // document.body.appendChild(element)
        this.as(template())

        this.element.find('#exit').listenTo('click', () => {
            this.exit()
        })

        this.ogBody = _e('body').cloneNode(true)
        this.reader = this.element.find("#reader")
                       .addClass("loading")

        setTimeout(async () => {
            var article = new Readability(document.cloneNode(true)).parse()
            console.log(article)
            this.reader.html(article.content)
                       .removeClass('collapsed')

            await wfy(this.reader)

            this.lec = Lector(this.reader, {
                wfy: false,
                onboarding: true,
                scaler: true,
                experimental: true,

                fullStyles: true,
                defaultStyles: true,
                settings: true,
            }).run(function() {
                this.mark.addClass('billion-z-index')
            })

            // let clone = _e(this.lec.mark.element.cloneNode(true)).appendTo(this.reader)
            // this.lec.mark.element.destroy()
            // this.lec.mark.element.replaceWith(clone)
            // clone.replaceWith(this.lec.mark.element)

            console.log("lec: ", this.lec)
            this.triggerEvent('load')
            console.timeEnd('creating lec....')
        }, 0)

        // this.element.find("#reader").html(article.content)
    }



    render() {
        console.log('RENDERING')

        _e('body').addClass(`xfready-lector-open`)
                    // .html(' ')
                    .append(this)


        this.element.show()

        setTimeout(() => {
            this.reader.findAll('code').forEach(code => {
                console.log("PARSE:", code.html())
                window.bridge.request({ parse: code.textContent }).then(_html => {
                    console.log("parsed", code)
                    code.html(Xfready.sanitizeHtml(_html))
                    // console.log("parsed", code)
                    // code.html('ue')
                })
                // .appendTo(this.reader)
            })
            this.triggerEvent('render')

        }, 0)
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
        this.element.destroy()
        
        console.log('og body is', this.ogBody)
        _e('html').append(this.ogBody)
        // this.ogBody.appendTo(_e('html'))
                    // .removeClass(`xfready-lector-open`)
        this.triggerEvent('destroy')
        return this
    }
}

let injected = false
export function _lector() {
    if (!injected) {
        let styles = [ "sanitized_elements", "syntax_highlight", "lector"]
        console.log('injecting', styles)
        styles.forEach(s => injectStyle(s))
        // console.log("injecting", styles)
        // injectStyle("sanitized_elements")
        // injectStyle("syntax_highlight")
        // injectStyle("lector")
        injected = true
    }

    return new LectorPragma
}
