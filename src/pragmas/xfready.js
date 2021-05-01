import { Pragma, _e } from "pragmajs"
import { _lector } from "./lectorPragma"
import { _popup } from "./popup"
import { _alma } from "./alma"
import { _articleAI } from "./articleAI"

import { HOST, SYNC } from "../misc/helpers"

export class Xfready extends Pragma {

    async init() {

        // this.setElement('body')
        // pragmaSpace.onDocLoad(() => {
        
        window.bridge
            .on('message:click', async (data, respond) => {
                if (!this._injected) await this.inject({ skipAlma: true })
                this.popup.toggle()
            })
            .on('message:reload', async (data, respond) => {
                this.updateView()
            })

        this.ai = _articleAI()
        this.updateView()
        
    }

    updateView() {
        if (this.ai._isDocFreadable()){
            this.inject()
        } else {
            this.eject()
        }
    }

    eject() {
        if (!this._injected) return console.warn('not injected')

        this.alma?.destroy().then(() => {
            this.alma = null
            console.log('destroyed alma')
        })

        this.popup?.destroy().then(() => {
            this.popup = null
            console.log('destroyed popup')
        })

        this.lector?.destroy().then(() => {
            this._lector = null
            console.log('destroyed lector')
        })
        // this.popup?.destroy()
        // this.lector?.destroy()
        this.link = null
        this._element = null

        this._injected = false
    }

    async inject({ skipAlma=false } = {}) {
        if (this._injected) return console.warn('already injected')

        this._injected = true
        this.createEvents('lector:create', 'lector:destroy', 'link:load', 'article:ready')
        this.as('html')

        if (!skipAlma) this.alma = _alma(this).appendTo(this)

        if (!this.popup) this.popup = _popup(this)
                                        .appendTo(this)
                                        .hide()
                        

        this.on('lector:create', lector => {
            lector.on('article:load', article => {
                SYNC.get('preferences', preferences => {
                    console.log('preferences are', preferences)
                    article.eta = (Math.round((article.length / 4.7) / (preferences.wpm ?? 250)) + "'")
                    this.triggerEvent('article:ready', article)
                })
            })
        })


        // set existing link if there is one
        this.link = await window.bridge.request("links:get", HOST.getURL())
        console.log('existing article is', this.link)

        // pragmaSpace.onDocLoad(() => {
        this.lector = _lector()
            // .on('article:load')
            .on('article:parse', article => {
                this.article = article
                this.createLink(article)
            })
            .on('destroy', article => {
                this.triggerEvent('article:exit')
            })
            .on('render', article => {
                this.triggerEvent('article:read')
            })

        if (this.link) this.triggerEvent('link:load', this.link)
        
        this.lector.loadArticle()
    }

    async createLink(article, { saved=null, skipBody=false }={}) {
        console.time('creating link..............')

        await this.link
        // console.log(`link is ${this.link?.inTheCloud ? '' : ' -- NOT --'} in the cloud`)
        if (skipBody && !this.link?.inTheCloud) {
            skipBody = false
            // console.log('link is already in the cloud!')
        }

        if (saved===null && this.link && this.link.saved) saved = true

        
        let link = {
            url: HOST.getURL(),
            saved,
        }

        if (!skipBody){
            if (!article) return console.error('no article to create...', article)
            
            link.body = article.content
            link.meta = {
                title: article.title,
                by: authoredBy(article),
                words: Math.round((article.length/4.7)),
                pages: 1
            }
        }

        this.link = link
        this.triggerEvent('link:load', this.link)

        console.log("links:create", link)
        console.timeEnd('creating link..............')
        return new Promise( async resolve => {
            // create link
            await window.bridge.request("links:create", { link })

            // wait a bit and then get the link back
            // setTimeout(() => {
            this.link = await window.bridge.request("links:get", HOST.getURL())
            // })

            resolve(this.link)
        })
        // return )
    }

    toggleReadOrExit() {
        if (this._isReading) return this.exit()
        return this.read()
    }

    async read() {
        this._isReading = true
        await this.lector.load()
        return this.lector.render()
    }

    exit() {
        this._isReading = false
        return this.lector.exit()
    }

    async save() {
        // saveArticle(this.lector.article)
        console.log('saving...')
        // console.log('article is', this.article)
        await this.lector.parseArticle()
        console.log('now after parsearticle is', this.article)
        return this.createLink(this.article, { saved: true, skipBody: true })
    }

    unsave() {
        return this.createLink(this.article, { saved: false, skipBody: true })
    }

    // static general helpers, handled by the 'core' of xfready
    static sanitizeHtml(input){
        var doc = new DOMParser().parseFromString(input.toString(), "text/html");
        return _e(doc.body).html()
    }

    set lector(n) {
        this._lector = n
        this._lector.xfready = this
        this.triggerEvent('lector:create', this._lector)
    }

    get lector() {
        return this._lector
    }

    getLector() {
        return new Promise((resolve, reject) => {
            if (this._lector) resolve(this._lector)

            this.on('newLector', (lector) => {
                resolve(lector)
            })
        })
    }

}

function authoredBy(article) {
    return HOST.get()
}
