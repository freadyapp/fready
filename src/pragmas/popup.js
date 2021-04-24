import { Pragma, html, _e } from "pragmajs"
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"

let element = html`
    <div xfready id=popup class='fade-onload'>
        <div class='article-panel'>
            <div class='time-url'>
                <h1 class='time blue no-select' id='time'>15'</h1>
                <p class='url' id='url'>en.wikipedia.org</p>
            </div>
            <h1 class='title' id='title'>
                Legality of bitcoin by country or territory
                and the legality of marijuana by country and yeyeters
            </h1>
            <div class='save-read'>
                <div class='button-gray' id='exit'>${SVG('empty-heart-icon')} Save </div>
                <div class='button-gray' id='read'>${SVG('read-icon')} Read </div>
            </div>
        </div>
        <div class='upload-dash'>
            <div class='hyperbutton upload'>${SVG('upload-icon')}Upload PDF</div>
            <div class='hyperbutton dashboard'>${SVG('home-icon')}Dashboard</div>
        </div>
        <div class='xfready-footer'>
            ${SVG('logo')}
            <div class='hyperbutton visibility'>
                <div class="checkbox">
                    ${SVG('checked-checkbox')} 
                    ${SVG('empty-checkbox')}
                </div>
                Show on websites
            </div>
        </div>
        
    </div>
`

function shadow(e) {

    e = _e(e)
    let clone = e.cloneNode(true)
    e.html(' ')

    e.attachShadow({ mode: 'open' })
    e.shadowRoot.appendChild(clone)

    e.shadowRoot.appendChild(
        _e(`<style>${styles['popup']}</style>`)
    )
    
    console.log(e, e.shadowRoot)
    return e
}

export class Popup extends Pragma {
    constructor() {
        super()
        console.log("created new popup", this)
        // document.body.appendChild(element)
        this.as(shadow(element))

        this.lector = null

        this.shadow = this.element.shadowRoot
        console.log('this shadows first child', this.shadow.firstChild)
        this.shadow.find = query => _e(this.shadow.firstChild).find(query)

        this.shadow.find("#read").listenTo('click', () => {
            xfready.lector = _lector().render()
        })

        this.shadow.find("#exit").listenTo('click', () => {
            this.element.hide()
        })

        this.shadow.find('.visibility').listenTo('click', ()=> {       // CHECKBOX display on websites
            this.shadow.find('#checked-checkbox').toggleClass('fade-out')
            console.log('CLICKED')
        })
    }
}

export function _popup(){
    return new Popup
}