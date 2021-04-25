import { Pragma, html, _e } from "pragmajs"
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"

let element = html`
    <div xfready id=popup class='fade-onload'>
        <div class='article-panel'>
            <div class='time-url'>
                <h3 class='time blue no-select' id='time'>15'</h3>
                <p class='url' id='url'>en.wikipedia.org</p>
            </div>
            <h3 class='title' id='title'>
                Legality of bitcoin by country or territory
                and the legality of marijuana by country and yeeters
            </h3>
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

export class Popup extends ShadowPragma {

    constructor() {
        super()

        this.as(element)
        this.injectStyles('main', 'popup')

        this.shadow.find("#read").listenTo('click', () => {

            xfready.lector = _lector()
                                .on('parse article', createArticle)
                                .load()
                                .render()
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

function createArticle(article, saved=true) {
    console.log('creating new article')
    
    let link = {
        url: HOST.getURL(),
        body: article.content,
        saved,
        meta: {
            title: article.title,
            by: article.byline || article.siteName || HOST.get(),
            words: article.length/5,
            pages: 1
        }
    }

    window.bridge.request("links:create", { link })
}
export function _popup(){
    return new Popup
}
