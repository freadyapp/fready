import { Pragma, html, _e } from "pragmajs"

let template = () => html`
<div xfready id=lector class='fade-onload'>
    <div class='reader'> 
        <h1> Super intense article </h1>
        <p> Yeet commit while your feet shit </p>
        <div class='button'> Read </div>
        <div id='exit' class='button'> Exit </div>
    </div>
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

export function _lector() {
    return new Lector
}
