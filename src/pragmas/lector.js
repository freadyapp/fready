import { Pragma, html, _e } from "pragmajs"
import { Readability } from '@mozilla/readability'

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
        this.element.find("#reader").html(article.content)

    }

    render() {
        this.element.show()
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
        injected = true
    }

    return new Lector
}
