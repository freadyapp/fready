import { _p, _e, block } from 'pragmajs'
import { SVG } from "../.build_assets/index"
import { _lector } from "./lectorPragma"
import Mousetrap, { trigger } from "mousetrap"
// import { Xfready } from "./xfready"
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

        <div class='press-space displayN'>Press ${SVG('new-space-white')} to read</div>
    </div>
`.define({
    close: "#close-icon",
    read: "#read-icon-new",
    emptyLove: "#empty-heart-icon",
    fullLove: "#full-heart-icon",
    time: ".time",
    etaPopup: ".eta-popup",
    pressSpace: ".press-space",

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


const source = 'alma'

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


        const triggerRead = (params) => {
            this.read(params)
            this.hide()
        }

        element.read.listenTo('mouseenter', ()=>{
            element.pressSpace.removeClass('displayN')

            setTimeout(() => {
                hideElement(element.pressSpace)


                // setTimeout(() => {
                //     element.pressSpace.addClass('displayN')
                // }, 200);
                
            }, 4000);

        })

        element.read.listenTo('mouseleave',()=>{
            console.log('leaving')
            hideElement(element.pressSpace)
        })

        element.read.listenTo('click', triggerRead)
        element.read.listenTo('click', () => triggerRead() )
        Mousetrap.bind("space", () => {
            triggerRead({ source: 'space' })
            return false
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
        return new Promise((resolve) => {
            this.shadow.addClass('fade-out')
            Mousetrap.unbind('space')

            setTimeout(() => {
                this.element.hide()
                resolve()
            }, 200)
        })
    }

    read(params = { source }) {
        console.log('-------------------- Alma is reading from', params)
        this.xfready.read(params)
    }

    save(params = { source }){
        element.save()
        this.xfready.save(params)
    }

    unsave(params = { source }){
        element.unsave()
        this.xfready.unsave(params)
    }

    destroy() {
        return this.hide().then(() => {
            this.element.destroy()
        })
    }
}


export function _alma(){
    return new Alma(...arguments)
}

async function slurpArticle(article) {
    element.time.html(article.eta)
}

function hideElement(element){
    element.removeClass('fade-onload')
    element.addClass('fade-out')

    setTimeout(() => {
        element.removeClass('fade-out')
        element.addClass('displayN')
    }, 100);
}