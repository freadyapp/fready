import { Pragma } from "pragmajs"
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
}
