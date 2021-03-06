import { _e, _p } from "pragmajs"
// import { pragmajs } from "../app/scripts/libs/xfready2.umd"
import { injectStyle } from "./.build_assets/index"
import { Xfready } from "./pragmas/xfready"
import { _bridge } from "./pragmas/bridge"
import { User } from "./pragmas/user"

export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

import("pragmajs").then(pragmajs => {
    for (let [key, value] of Object.entries(pragmajs)) {
        window[key] = value
    }
    
})

window.bridge = _bridge()

window.xfready = new Xfready()
                    .on('lector:create', lector => {
                        console.group('constructing lector')
                        console.time("CONSTRUCT LECTOR from DOCUMENT...")
                        console.log(_FREADY_API_URL)
                        lector.on('load', () => {
                            console.log(lector.reader)
                            console.timeEnd("CONSTRUCT LECTOR from DOCUMENT...")
                            console.groupEnd('constructing lector')
                        })
                    })

// window.pragmajs = await import('pragmajs')
// window.pragmajs.globalify()

// _e("body").hide()
