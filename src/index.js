import { _e } from "pragmajs"
// import { pragmajs } from "../app/scripts/libs/xfready2.umd"
import { injectStyle } from "./.build_assets/index"
import { Xfready } from "./pragmas/xfready"

export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

export function xfready2Test(){
    console.log("hello from _xfready2")
}

import("pragmajs").then(pragmajs => {
    for (let [key, value] of Object.entries(pragmajs)) {
        window[key] = value
        
    }
})

console.log('READY STATE', document.readyState)
console.log('injecting styles...')
injectStyle("main")
window.xfready = new Xfready()

// window.pragmajs = await import('pragmajs')
// window.pragmajs.globalify()

// _e("body").hide()
