import { Pragma, _e } from "pragmajs"
import { _popup } from "./popup"

export class Xfready extends Pragma {
    constructor() {
        super()
        console.log("created new xfready", this)
        this.as('html')
        // this.setElement('body')
        // pragmaSpace.onDocLoad(() => {
        _popup().appendTo(this)
        // })
    }

    static sanitizeHtml(input){
        var doc = new DOMParser().parseFromString(input.toString(), "text/html");
        console.log("SANITIZED", doc.body)
        return _e(doc.body).html()
    }
}
