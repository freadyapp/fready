export class HOST {
    static is(...hosts){
        return hosts.includes(window.location.host)
    }

    static get() {
        return window.location.host
    }

    static getURL() {
        return window.location.href
    }
}

export const SYNC = new Object
let methods = ['get', 'set']
methods.forEach(meth => SYNC[meth] = (...params) => { return chrome.storage.sync[meth](...params) })
