import { Pragma, html } from "pragmajs"
import { SVG } from "../.build_assets/index"
import { _lector } from "./lectorPragma"

let element = html`
    <div xfready id=popup class='fade-onload'>
        <div class='article-panel'>
            <div class='time-url'>
                <h1 class='time blue'>15'</h1>
                <p class='url'>www.en.wikipedia.org</p>
            </div>
            <h1 class='title'>Legality of bitcoin by country or territory</h1>
            <div class='save-read'>
                <div class='button-gray' id='exit'> Save </div>
                <div class='button-gray' id='read'> Read </div>
            </div>
        </div>
        <div class='upload-dash'>
            <div class='hyperbutton upload'>Upload PDF</div>
            <div class='hyperbutton dashboard'>Dashboard</div>
        </div>
        <div class='xfready-footer'>
            ${SVG('logo-gray')}
            <div class='hyperbutton visibility'>
                [] Show on websites
            </div>
        </div>
        
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