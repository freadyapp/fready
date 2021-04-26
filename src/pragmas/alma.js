import {Pragma, _p, _e, html} from 'pragmajs'
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"


let element = html`
        <div xfready id='alma' class='alma'>
            <div class='time'>51'</div>
            ${SVG('read-icon-new')}
        
            ${SVG('empty-heart-icon')}
            ${SVG('close-icon')}

            <div class='press-space'>Press ${SVG('new-space-white')} to read</div>
        </div>

`

export class Alma extends ShadowPragma {

    constructor(){
        super()

        this.as(element)

        this.injectStyles('main', 'alma')
    }
}

export function _alma(){
    return new Alma
}