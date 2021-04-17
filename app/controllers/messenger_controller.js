
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
            this.triggerEvent(typeof request === 'object' ? Object.keys(request)[0] : request, request, sender.tab, respond)
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

    onObj(cmd, ...cbs) {
        if (!this._events.has(`receive:${cmd}`)) {
            this.on("receive", (msg, port) => {
                if (typeof msg.message !== 'object' && !(cmd in msg.message)) return
                console.log("OBJECT IS", msg.message)
                this.triggerEvent(`receive:${cmd}`, msg.message[cmd], port.sender.tab, (data) => port.postMessage({ data, key: msg.key }))
            })
        }

        this.on(`receive:${cmd}`, ...cbs)

        return this
    }

    log() {
        console.log(`messenger#${this.key}: `, ...arguments)
    }
}

let messenger = new Messenger

