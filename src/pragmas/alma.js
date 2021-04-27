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
            ${SVG('full-heart-icon')}
            ${SVG('close-icon')}

            <div class='press-space fade-onload'>Press ${SVG('new-space-white')} to read</div>
        </div>

`

export class Alma extends ShadowPragma {

    constructor(){
        super()

        this.as(element)

        this.injectStyles( 'alma', 'main')

        console.log(this.element)

        this.shadow.find('#close-icon').listenTo('click', () => {
            this.shadow.addClass('fade-out')

            setTimeout(() => {
                this.element.hide()
 
            }, 2000);
        })

        this.shadow.find('#empty-heart-icon').listenTo('click', ()=>{
            this.save()
        })
        this.shadow.find('#full-heart-icon').listenTo('click', ()=>{
            this.unsave()
        })
    }

    save(){
        console.log('saving')
        this.shadow.addClass('save')
    }
    unsave(){
        console.log('unsaving')
        this.shadow.removeClass('save')
    }
}

export function _alma(){
    return new Alma
}