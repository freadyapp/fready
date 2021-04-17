import { Pragma, html, _e } from "pragmajs"
import { Xfready } from "./xfready"
import Mousetrap from "mousetrap"
import { Readability } from '@mozilla/readability'
import { injectStyle } from "../.build_assets/index";
import { Lector } from "lectorjs"


console.log('readabilitys')
console.log(Readability)

let template = () => html`
<div xfready id=lector class='fade-onload'>
    <div id='exit' class='button'> Exit </div>
    <div id='reader-rapper'> 
        <div id='reader' class='article collapsable collapsed'> 
        </div>
    </div>
</div>
`.hide()

function wfyInner(desc) {
    if (!desc) return false
    desc = _e(desc)
    let txt = desc.textContent
    if (txt.length === 0) return false

    let inner = ""
    for (let txt of desc.textContent.split(" ")) {
        // console.log(txt)
        let noWhiteSpace = txt.replace(/\s/g, "")
        inner += noWhiteSpace.length != 0 ? "<w>" + txt.split(" ").join("</w> <w>") + "</w> " : txt
    }

    desc.html(inner)
}

export function wfyElement(element) {
    console.log('wfy element', element)
    // element = _e(element)
    // let nodes = element.findAll("*")
    let nodes = element.childrenArray
    console.log('children', nodes)
    if (nodes.length == 0) return wfyInner(element)
    nodes.forEach(desc => wfyElement(desc))
}

export function wfy(element) {
    wfyElement(_e(element))
}


export class LectorPragma extends Pragma {
    constructor() {
        super()
        console.log("creating new lector", this)
        // document.body.appendChild(element)
        this.as(template())

        this.element.find('#exit').listenTo('click', () => {
            this.exit()
        })

        this.reader = this.element.find("#reader")
        setTimeout(() => {
            var article = new Readability(document.cloneNode(true)).parse()
            console.log(article)
            this.reader.html(article.content)
                       .removeClass('collapsed')

            wfy(this.reader)
            // this.lec = Lector(this.reader, {
                // wfy: false,
            
            // })
                    //    .addClass('article')
        }, 0)

        // this.element.find("#reader").html(article.content)
    }



    render() {
        console.log('RENDERING')
        this.element.show()

        _e('body').addClass(`xfready-lector-open`)
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
        this.element.hide()
        _e('body').removeClass(`xfready-lector-open`)
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
