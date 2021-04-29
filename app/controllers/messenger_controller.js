class Messenger extends Pragma {

    constructor() {
        super()
        this.log('created')

        this.connections = new Map()
        this.createEvents('connect', 'disconnect', 'receive')

        chrome.runtime.onConnect.addListener(port => {
            this.log("connected")
            this.connect(port)
        })

        chrome.runtime.onMessage.addListener((request, sender, respond) => {
            // console.log(request, sender)
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

        // this.log(`CONNECTED`, port)

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

    onMsg(cmd, ...cbs) {
        if (!this._events.has(`receive:${cmd}`)) {
            this.on("receive", (msg, port) => {
                let data;
                if (typeof msg.message === 'string' && msg.message === cmd){
                    data = msg.message
                } else if (typeof msg.message !== 'object' || !(cmd in msg.message)) return
                else  {
                    data = msg.message[cmd]
                }
                // console.log("OBJECT IS", msg.message)
                this.triggerEvent(`receive:${cmd}`, data, port.sender.tab, (data) => port.postMessage({ data, key: msg.key }))
            })
        }

        this.on(`receive:${cmd}`, ...cbs)

        return this
    }

    request() { return this.sendTo(...arguments) }

    sendTo(tab, data) {
        this.log(`sending to ${tab}`, data)
        return new Promise(resolve => {
            chrome.tabs.sendMessage(tab.id, data, resolve)
        })
    }

    log() {
        console.log(`messenger#${this.key}: `, ...arguments)
    }
}

let messenger = new Messenger

