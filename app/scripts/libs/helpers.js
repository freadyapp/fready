class HOST {
    static is(...hosts){
        return hosts.includes(window.location.host)
    }
}
