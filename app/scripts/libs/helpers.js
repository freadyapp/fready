class HOST {
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
