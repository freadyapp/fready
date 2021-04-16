export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

export function xfready2Test(){
    console.log("hello from _xfready2")
}

import("pragmajs").then(pragmajs => {
    for (let [key, value] of Object.entries(pragmajs)) {
        window[key] = value
    }
})

// window.pragmajs = await import('pragmajs')
// window.pragmajs.globalify()