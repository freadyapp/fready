import { Pragma, html } from "pragmajs"

let element = html`
<div xfready popup class='fade-onload'>
    <h1> This is freadys popup </h1>
</div>
`

export class Popup extends Pragma {
    constructor() {
        super()
        console.log("created new popup", this)
        this.as(element)
    }
}

export function _popup(){
    return new Popup
}
