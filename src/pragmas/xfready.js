import { Pragma, _e } from "pragmajs"
import { _lector } from "./lectorPragma"
import { _popup } from "./popup"

import { HOST, SYNC } from "../misc/helpers"
export class Xfready extends Pragma {
    constructor() {
        super()
        this.createEvents('lector:create', 'lector:destroy')
        this.as('html')
        // this.setElement('body')
        // pragmaSpace.onDocLoad(() => {
        this.popup = _popup(this)
                        .appendTo(this)

        // })

        // pragmaSpace.onDocLoad(() => {
        this.lector = _lector()
            // .on('load article', slurpArticle)
            .on('parse article', createArticle)

        this.lector.loadArticle()
        // })

    }

    async read() {
        await this.lector.load()
        return this.lector.render()
    }

    save() {
        saveArticle(this.lector.article)
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

async function saveArticle(article) {
    console.log(`saving article... as ${HOST.getURL()}`, article)
    return createArticle(article, true)
}



async function createArticle(article, saved=false) {
    console.log('creating new article')
    
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

    return window.bridge.request("links:create", { link })
}

function authoredBy(article) {
    return HOST.get()
}