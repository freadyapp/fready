import { Pragma, html, _e, block } from "pragmajs"
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"
import { HOST, SYNC } from "../misc/helpers"

let panel = () => block`
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

let template = () => html`
        <div xfready id=popup class='fade-onload'>
            <div class='article-panel'>
            </div>
            <div class='upload-dash'>
                <a href='${FREADY_LINKS.upload}' target="_blank" class='hyperbutton upload'>${SVG('upload-icon')}Upload PDF</a>
                <a href='${FREADY_LINKS.dashboard}' target="_blank" class='hyperbutton dashboard'>${SVG('home-icon')}Dashboard</a>
            </div>
            <div class='xfready-footer'>
                <a href="${FREADY_LINKS.home}">${SVG('logo')}</a>
                <div id='show-on-websites' class='hyperbutton visibility'>
                    <div class="checkbox">
                        ${SVG('checked-checkbox')} 
                        ${SVG('empty-checkbox')}
                    </div>
                    Show on websites
                </div>
            </div>
        </div>
    `
let _popper = (element) => _p().as(element).define({
        showCheckbox: "#checked-checkbox",
        visibility: "#show-on-websites",

        showOnWebsites() {
            this.showCheckbox.removeClass('fade-out')
            // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
        },
        hideOnWebsites() {
            this.showCheckbox.addClass('fade-out')
            // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
        },
    })

export class Popup extends ShadowPragma {

    constructor(xfready) {
        super()

        // this.as(this.popper.element)
        // this.popper.element = this.shadow


        this.as(template())
        this.popper = _popper(this.shadow) // kinda patch solution for the shadow dom

        // this.popper = _p().as(this.shadow)

        this.panel = panel()

        this.xfready = xfready
                        .on('article:ready', article => this.slurpArticle(article))
                        .on('link:load', article => {
                            article.saved ? this.panel.save() : this.panel.unsave()
                        })
                        .on('article:read', () => this.panel.read())
                        .on('article:exit', () => this.panel.exit())
        

        this.shadow.find(".article-panel").replaceWith(this.panel.element)

        this.injectStyles('main', 'popup')

        
        // pragmaSpace.onDocLoad(() => {
            // this.lector = _lector()
                            // .on('article:load', slurpArticle)
                            // .on('article:parse', createArticle)
                            // .loadArticle()
        // })

        // this.panel.title.listenTo('click', () => )
        this.panel.saved.listenTo('click', () => {
            let action = this.xfready.link?.saved ? 'unsave' : 'save'

            this.xfready[action]()
            this.panel[action]() // this.panel.save / this.panel.unsave
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
        

        console.log(this.popper)
        console.log(this.popper.visibility)
        this.popper.visibility.listenTo('click', () => {       // CHECKBOX display on websites
            console.log('CLCLCLCLCLCIIICK')

            if (this._showOnWebsites) this.hideOnWebsites(); else this.showOnWebsites();
            const showOnWebsites = this._showOnWebsites

            this.xfready.updateSettings({ showOnWebsites })
            // this.shadow.find('#checked-checkbox').toggleClass('fade-out')
            // console.log('CLICKED')
        })
    }

    showOnWebsites() {
        this._showOnWebsites = true
        this.popper.showOnWebsites()
    }

    hideOnWebsites() {
        this._showOnWebsites = false
        this.popper.hideOnWebsites()
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

    destroy() {
        return new Promise(resolve => {
            this.hide()
            this.element.destroy()
            resolve()
        })
    }


    async slurpArticle(article) {
        this.panel.title.html(article.title)
        this.panel.eta.html(article.eta)
        this.panel.url.html(authoredBy(article))

        // SYNC.get('preferences', preferences => {
            // this.panel.eta.html(Math.round((article.length/4.7)/(preferences.wpm || 250)) + "'")
        // })
    }

}
export function _popup(){
    return new Popup(...arguments)
}

function authoredBy(article) {
    return HOST.get()
}