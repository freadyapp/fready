import { Pragma, html, _e } from "pragmajs"
import { Xfready } from "./xfready"
import { Readability } from '@mozilla/readability'
import hljs from 'highlight.js';


console.log('readabilitys')
console.log(Readability)
let template = () => html`
<div xfready id=lector class='fade-onload'>
    <div id='reader-rapper'> 
        <div id='reader' class='article'> 
            <h1> Super intense article </h1>
            <p> Yeet commit while your feet shit </p>
        </div>
    </div>
    <div id='exit' class='button'> Exit </div>
</div>
`.hide()

export class Lector extends Pragma {
    constructor() {
        super()
        console.log("created new lector", this)
        // document.body.appendChild(element)
        this.as(template())

        this.element.find('#exit').listenTo('click', () => {
            this.exit()
        })

        var article = new Readability(document.cloneNode(true)).parse();
        console.log(article)

        this.reader = this.element.find("#reader")
        this.reader.html(article.content)
        // this.element.find("#reader").html(article.content)
    }



    render() {
        console.log('RENDERING')
        this.element.show()

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

        _e('body').addClass(`xfready-lector-open`)
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
        injectStyle("sanitized_elements")
        injectStyle("syntax_highlight")
        injected = true
    }

    return new Lector
}
