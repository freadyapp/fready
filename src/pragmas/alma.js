import {Pragma, _p, _e, html} from 'pragmajs'
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"


let element = html`
    <div xfready-alma id='alma' class='alma'>
        <div class='panel'>
            <div class='time'>51'</div>
            <div class='button-gray'>
                ${SVG('read-icon-clean')}
                <span id='read-text'> Read </span> 
            </div>
        </div>
       
        ${SVG('empty-heart-icon')}
        ${SVG('arrow-down')}
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