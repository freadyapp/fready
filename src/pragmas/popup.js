import { Pragma, html, _e, block } from "pragmajs"
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"
import { HOST, SYNC } from "../misc/helpers"

let panel = block`
    <div class='article-panel'>
        <div class='time-url'>
            <h3 class='time blue no-select' id='time'></h3>
            <p class='url' id='url'></p>
        </div>
        <h3 class='title' id='title'>
        </h3>
        <div class='save-read'>
            <div class='button-gray' id='save'>
                ${SVG('empty-heart-icon')}
                ${SVG('full-heart-icon')}
                <span id='save-text'>Save</span>
            </div>
            <div class='button-gray' id='read'>
                ${SVG('close-icon')}
                ${SVG('read-icon')} 
                <span id='read-text'> Read </span>
            </div>
        </div>
    </div>
`.define({
    title: "#title",
    url: "#url",
    eta: "#time",
    saved: "#save",
    savedText: "#save-text",
    readText: "#read-text",
    love: "#empty-heart-icon",
    readButton: '#read',

    save() {
        this.saved.addClass('saved')
        this.savedText.html('Saved')
    },
    unsave() {
        this.saved.removeClass('saved')
        this.savedText.html('Save')
    },

    read() {
        // switch layout to exit
        this.readText.html('Exit')
        this.readButton.addClass('exit')



    },

    exit() {
        // switch layout to read
        this.readText.html('Read')
        this.readButton.removeClass('exit')

    }
})

let template = html`
        <div xfready id=popup class='fade-onload'>
            <div class='article-panel'>
            </div>
            <div class='upload-dash'>
                <a href='${FREADY_LINKS.upload}' class='hyperbutton upload'>${SVG('upload-icon')}Upload PDF</a>
                <a href='${FREADY_LINKS.dashboard}' class='hyperbutton dashboard'>${SVG('home-icon')}Dashboard</a>
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

        this.as(template)

        this.xfready = xfready

        this.xfready.on('article:ready', slurpArticle)

        this.xfready.on('link:load', article => {
            article.saved ? panel.save() : panel.unsave()
        })

        this.xfready.on('article:read', () => panel.read())
        this.xfready.on('article:exit', () => panel.exit())
        

        this.shadow.find(".article-panel").replaceWith(panel.element)

        this.injectStyles('main', 'popup')

        
        // pragmaSpace.onDocLoad(() => {
            // this.lector = _lector()
                            // .on('article:load', slurpArticle)
                            // .on('article:parse', createArticle)
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
            this.xfready.toggleReadOrExit()
            // this.lector
                    // .load()
                    // .render()
        })

        document.addEventListener('click', e => {
            if (e.target?.shadowRoot !== this.root
                && e.target?.shadowRoot !== this.xfready.alma?.root
                ) this.hide()
        })
        

        this.shadow.find('.visibility').listenTo('click', ()=> {       // CHECKBOX display on websites
            this.shadow.find('#checked-checkbox').toggleClass('fade-out')
            console.log('CLICKED')
        })
    }

    toggle() {
        if (this.shown) return this.hide()
        return this.show()
    }

    hide() {
        if (this.show === false) return this

        this.shown = false
        this.element.hide()
        return this
    }

    show() {
        this.shown = true
        this.element.show()
        return this
    }


}

async function slurpArticle(article) {
    panel.title.html(article.title)
    panel.eta.html(article.eta)
    panel.url.html(authoredBy(article))

    // SYNC.get('preferences', preferences => {
        // panel.eta.html(Math.round((article.length/4.7)/(preferences.wpm || 250)) + "'")
    // })
}

export function _popup(){
    return new Popup(...arguments)
}

function authoredBy(article) {
    return HOST.get()
}