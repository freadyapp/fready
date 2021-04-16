
class Messenger extends Pragma {

    constructor() {
        super()
        console.log('created messenger')

        this.connections = new Map()
        this.createEvents('connect', 'disconnect', 'receive')

        chrome.runtime.onConnect.addListener(port => {
            console.log("NEW")
            this.connect(port)
        })

        chrome.runtime.onMessage.addListener((request, sender, respond) => {
            console.log(request, sender)
            this.triggerEvent(request, respond, sender.tab, request)
            //  if (request === "inject"){
                // injectScripts(sender.tab.id, "libs/xfready2.umd", "libs/helpers", "libs/bridge", "user")
                // sendResponse({ tab: sender.tab.id })
            // }
        })
    }


    registerConnection(port) {
        this.connections.set(port.sender.tab.id, port)
        port.onDisconnect.addListener(port => {
            this.disconnect(port)
        })
    }

    destoryConnection(port){
        this.connections.delete(port.sender.tab.id)
    }

    connect(port) {
        this.registerConnection(port)
        this.triggerEvent('connect', port)

        this.log(`CONNECTED`,port)

        port.onMessage.addListener(msg => {
            this.receive(port, msg)
        })
    }

    disconnect(port) {
        this.destoryConnection(port)
        this.triggerEvent('disconnect', port)

        this.log(`DIsCONNECTED`,port)
    }

    receive(port, msg){
        this.triggerEvent('receive', msg, port)
        this.log('recieved', msg, 'from', port)
    }

    log() {
        console.log(`messenger#${this.key}: `, ...arguments)
    }

}


let messenger = new Messenger

