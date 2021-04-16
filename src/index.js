import { globalify } from "pragmajs"
globalify()

export * from "./.build_assets/index" // globalifies pragmajs, exports packages assets

export function xfready2Test(){
    console.log("hello from _xfready2")
}