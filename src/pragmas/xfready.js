import { Pragma, _e } from "pragmajs"
import { _lector } from "./lectorPragma"
import { _popup } from "./popup"
import {_alma} from "./alma"

import { HOST, SYNC } from "../misc/helpers"
export class Xfready extends Pragma {
    constructor() {
        super()
        this.createEvents('lector:create', 'lector:destroy', 'link:load')
        this.as('html')
        // this.setElement('body')
        // pragmaSpace.onDocLoad(() => {

        // _alma().appendTo(this)
        this.createEvents('lector:create', 'lector:destroy')
        this.popup = _popup(this)
                        .appendTo(this)

        // })
        // if (existingArticle && existingArticle.saved) panel.save()

        
        // })
        this.init()

    }
    async init() {
        // set existing link if there is one
        console.log('existing article is', this.link)

        // pragmaSpace.onDocLoad(() => {
        this.lector = _lector()
            // .on('load article')
            .on('parse article', article => {
                this.article = article
                this.createLink(article)
            })

        this.link = await window.bridge.request("links:get", HOST.getURL())
        if (this.link) this.triggerEvent('link:load', this.link)
        console.log('loading article')
        this.lector.loadArticle()
    }

    async createLink(article, saved=null) {

        await this.link
        if (saved===null && this.link && this.link.saved) saved = true
        console.log('creating new link')
        
        let link = {
            url: HOST.getURL(),
            body: article.content,
            saved,
            meta: {
                title: article.title,
                by: authoredBy(article),
                words: Math.round((article.length/4.7)),
                pages: 1
            }
        }

        this.link = link
        this.triggerEvent('link:load', this.link)

        return window.bridge.request("links:create", { link })
    }
    

    async read() {
        await this.lector.load()
        return this.lector.render()
    }

    async save() {
        // saveArticle(this.lector.article)
        console.log('saving...')
        console.log('article is', this.article)
        await this.lector.parseArticle()
        console.log('now after parsearticle is', this.article)
        return this.createLink(this.article, true)
    }

    unsave() {
        return this.createLink(this.article, false)
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