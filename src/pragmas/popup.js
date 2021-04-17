import { Pragma, html } from "pragmajs"
import { _lector } from "./lector"

let element = html`
<div xfready id=popup class='fade-onload'>
    <h1> This is freadys popup </h1>
    <div class='button' id='read'> Read </div>
    <div class='button' id='exit'> X </div>
</div>
`

export class Popup extends Pragma {
    constructor() {
        super()
        console.log("created new popup", this)
        // document.body.appendChild(element)
        this.as(element)

        this.lector = null
        this.element.find("#read").listenTo('click', () => {
            this.lector = _lector().appendTo(_e("html"))
                                    .render()
        })

        this.element.find("#exit").listenTo('click', () => {
            this.element.hide()
        })
    }
}

export function _popup(){
    return new Popup
}