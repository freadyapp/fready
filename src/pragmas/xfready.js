import { Pragma, _e } from "pragmajs"
import { _popup } from "./popup"

export class Xfready extends Pragma {
    constructor() {
        super()
        this.as('html')
        // this.setElement('body')
        // pragmaSpace.onDocLoad(() => {
        _popup().appendTo(this)
        this.createEvents('lector:create', 'lector:destroy')
        // })
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

    getLector() {
        return new Promise((resolve, reject) => {
            if (this._lector) resolve(this._lector)

            this.on('newLector', (lector) => {
                resolve(lector)
            })
        })
    }

}
