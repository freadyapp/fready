import { Pragma, html, _e, block } from "pragmajs"
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"
import { HOST, SYNC } from "../misc/helpers"

let panel = block`
    <div class='article-panel'>
        <div class='button-gray' id='exit'> x </div>
        <div class='time-url'>
            <h3 class='time blue no-select' id='time'></h3>
            <p class='url' id='url'></p>
        </div>
        <h3 class='title' id='title'>
        </h3>
        <div class='save-read'>
            <div class='button-gray' id='save'>${SVG('empty-heart-icon')} <span id='save-text'> Save </span></div>
            <div class='button-gray' id='read'>${SVG('read-icon')} <span id='read-text'> Read </span></div>
        </div>
    </div>
`.define({
    title: "#title",
    url: "#url",
    eta: "#time",
    saved: "#save",
    savedText: "#save-text",
    love: "#empty-heart-icon",

    save() {
        this.saved.css('background #FF4136')
        this.savedText.html('Saved')
    },
    unsave() {
        this.saved.css('background #67686F')
        this.savedText.html('Save')
    }
})

let template = html`
        <div xfready id=popup class='fade-onload'>
            <div class='article-panel'>
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

    constructor(xfready) {
        super()

        this.xfready = xfready
        this.xfready.on('lector:create', lector => { 
            lector.on('load article', slurpArticle)
        })

        this.xfready.on('link:load', article => {
            article.saved ? panel.save() : panel.unsave()
        })
        

        this.as(template)
        this.shadow.find(".article-panel").replaceWith(panel.element)

        this.injectStyles('main', 'popup')

        
        // pragmaSpace.onDocLoad(() => {
            // this.lector = _lector()
                            // .on('load article', slurpArticle)
                            // .on('parse article', createArticle)
                            // .loadArticle()
        // })

        // panel.title.listenTo('click', () => )
        panel.saved.listenTo('click', () => {
            let action = this.xfready.link?.saved ? 'unsave' : 'save'

            this.xfready[action]()
            panel[action]() // panel.save / panel.unsave
            // saveArticle(this.lector.article)
        })


        this.shadow.find("#read").listenTo('click', () => {
            this.xfready.read()
            // this.lector
                    // .load()
                    // .render()
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

async function slurpArticle(article) {

    panel.title.html(article.title)
    panel.url.html(authoredBy(article))

    SYNC.get('preferences', preferences => {
        panel.eta.html(Math.round((article.length/4.7)/(preferences.wpm || 250)) + "'")
    })


    // return {
    //     url: HOST.getURL(),
    //     body: article.content,
    //     saved,
    //     meta: {
    //         title: article.title,
    //         by: authoredBy(article),
    //         words: article.length/5,
    //         pages: 1
    //     }
    // }
}

export function _popup(){
    return new Popup(...arguments)
}

function authoredBy(article) {
    return HOST.get()
}