//import * as pragmajs from "pragmajs"
//import styles from "./styles.json"
//import icons from "./icons.json"

//function injectStyle(name){
    //if (! name in styles) return console.error(`could not find ${name}.scss in xfready2/src/styles`) 
    //pragmajs.util.addStyles(styles[name])
//}

//function SVG(name, fill) {
    //if (! name in icons) return console.error(`could not find ${name}.scss in xfready2/src/styles`)
    //let i = icons[name]
    //if (fill) return pragmajs._e(i).css(`fill ${fill}`).html()
    //return i
//}


//function compose(){
    //let _page = _p().as('body')
    //console.time()
    //_page.element.findAll("[pragma]").forEach(element => {
        //let pragmas = new Map

        //Object.keys(element.attributes).filter(v => {
            //return element.attributes[v].name[0] == "#"
        //}).forEach(v => pragmas.set(element.attributes[v].name.slice(1), element))

        //for (let [key, element] of pragmas) {
            //_page.adopt(
                //_p(key)
                    //.as(element.setId(key))
                    //.run(function() {
                        //_page[util.snake2camel(key)] = this
                    //})
            //)

            //console.timeLog()
        //}
        
    //})

    //_page.element.findAll("[element]").forEach(element => {
        //let elements = new Map

        //Object.keys(element.attributes).filter(v => {
            //return element.attributes[v].name[0] == "#"
        //}).forEach(v => elements.set(element.attributes[v].name.slice(1), element))

        //for (let [key, element] of elements) {
            //_page.adopt(
                //_e(element)
                    //.setId(key)
            //)
        //}
    //})

    //console.timeEnd()
    //window._page = _page
//}

//// globalifying pragma, and functions
//for (let [key, val] of Object.entries({ ...pragmajs, ...{ injectStyle, SVG, compose } })) {
    //window[key] = val
//}

//export { icons, styles, SVG, injectStyle, pragmajs, compose }




import * as pragmajs from "pragmajs"
import * as pragmas from "../pragmas/index"
import styles from "./styles.json"
import icons from "./icons.json"

const global = {
    injectStyle,
    SVG,
    compose,
    pragmas
}

export {
    injectStyle,
    SVG,
    compose,
    pragmas
}

function injectStyle(name) {
    if (!name in styles) return console.error(`could not find ${name}.scss in docs/src/styles`)
    pragmajs.util.addStyles(styles[name])
}

function SVG(name, fill) {
    if (!name in icons) return console.error(`could not find ${name}.svg in docs/src/icons`)
    let i = icons[name]
    if (fill) return pragmajs._e(i).css(`fill ${fill}`).html()
    return i
}


function compose() {
    let loader = _e("body").query('[loader]')
    if (loader) {
        loader = _e(loader)
        let transitionTime = parseFloat(loader.getData("transition")) || 0.2

        loader.css(`
            transition all ${transitionTime}s ease
        `)

        pragmaSpace.onDocLoad(() => {
            loader.css('opacity 0')
            setTimeout(() => {
                loader.hide()
            }, transitionTime * 1000)
        })
    }
    let _page = _p().as('body')
    console.time("load time")
    _page.element.findAll("[pragma]").forEach(element => {
        let pragmas = new Map

        Object.keys(element.attributes).filter(v => {
            return element.attributes[v].name[0] == "#"
        }).forEach(v => pragmas.set(element.attributes[v].name.slice(1), element))

        for (let [key, element] of pragmas) {
            _page.adopt(
                _p(key)
                    .as(element)
                    .run(function () {
                        key = util.snake2camel(key)
                        if (key in _page) {
                            console.log(key)
                            if (Array.isArray(_page[key])) return _page[key] = _page[key].push(this)
                            _page[key] = [_page[key], this]
                            return
                        }

                        _page[key] = this
                    })
            )
        }

    })

    _page.element.findAll("[element]").forEach(element => {
        let elements = new Map

        Object.keys(element.attributes).filter(v => {
            return element.attributes[v].name[0] == "#"
        }).forEach(v => elements.set(element.attributes[v].name.slice(1), element))

        for (let [key, element] of elements) {
            _page.adopt(
                _e(element)
                    .setId(key)
            )
        }
    })

    console.timeEnd("load time")
    window._page = _page
}

// globalifying pragma, and functions
for (let [key, val] of Object.entries({ ...pragmajs, ...global })) {
    window[key] = val
}

export { icons, styles, pragmajs }
