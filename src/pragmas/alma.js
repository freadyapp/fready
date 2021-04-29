import {Pragma, _p, _e, html} from 'pragmajs'
import { SVG, styles } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import { Xfready } from "./xfready"
import { ShadowPragma } from "../misc/shadowPragma"


// let element = html`
//         <div xfready id='alma' class='alma'>
//             <div class='time'>51'</div>
//             ${SVG('read-icon-new')}
        
//             ${SVG('empty-heart-icon')}
//             ${SVG('full-heart-icon')}
//             ${SVG('close-icon')}

//             <div class='press-space fade-onload'>Press ${SVG('new-space-white')} to read</div>
//         </div>

// `

let element = block`
    <div xfready id='alma' class='alma'>
        <div class="eta-popup">
            <div class='time'></div>
            ${SVG('logo-icon-white')}
        </div>

        ${SVG('read-icon-new')}
    
        ${SVG('empty-heart-icon')}
        ${SVG('full-heart-icon')}
        ${SVG('close-icon')}

        <div class='press-space fade-onload'>Press ${SVG('new-space-white')} to read</div>
    </div>
`.define({
    close: "#close-icon",
    read: "#read-icon-new",
    emptyLove: "#empty-heart-icon",
    fullLove: "#full-heart-icon",
    time: ".time",
    etaPopup: ".eta-popup",

    save() {
        this.addClass('saved')
        // this.saved.addClass('saved')
        // this.savedText.html('Saved')
    },
    unsave() {
        this.removeClass('saved')
        // this.addClass('saved')
        // this.saved.removeClass('saved')
        // this.savedText.html('Save')
    }
})



export class Alma extends ShadowPragma {

    init(xfready) {

        this.xfready = xfready

        this.xfready.on('article:ready', slurpArticle)

        this.xfready.on('link:load', article => {
            article.saved ? element.save() : element.unsave()
        })

        this.as(_e(`<div><div class='templ'></div></div>`))
        this.shadow.find(".templ").replaceWith(element.element)


        this.injectStyles('main', 'alma')

        element.close.listenTo('click', () => {
            this.hide()
        })

        element.read.listenTo('click', ()=>{
            this.read()
            this.hide()
        })

        element.emptyLove.listenTo('click', ()=>{
            this.save()
        })

        element.fullLove.listenTo('click', ()=>{
            this.unsave()
        })

        element.etaPopup.listenTo('click',()=>{
            //this.hide()
            this.xfready.popup.show()
        })
    }

    hide() {
        this.shadow.addClass('fade-out')

        setTimeout(() => {
            this.element.hide()

        }, 200);
    }

    read() {
        this.xfready.read()
    }

    save(){
        element.save()
        this.xfready.save()
    }

    unsave(){
        element.unsave()
        this.xfready.unsave()
    }
}

export function _alma(){
    return new Alma(...arguments)
}

async function slurpArticle(article) {
    element.time.html(article.eta)
}