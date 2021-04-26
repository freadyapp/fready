import { Pragma } from "pragmajs"

export class Bridge extends Pragma {
    constructor(port=chrome.runtime.connect()){
        super()

        this.port = port 
        this.createEvents("message", "send")
        this.port.onMessage.addListener(msg => {
            console.log('received', msg)
            this.triggerEvent('message', msg)
        })
    }

    awaitResponse(key) {
        return new Promise(resolve => this.on("message", (msg) => {
            // console.log(msg.key, key)
            if (msg.key === key) {
                resolve(msg.data)
                return cb => {
                    cb.selfDestruct()
                }
            }
            // this.awaitResponse(key).then(msg => resolve(msg.data))
        }))
    }

    send(message, key=util.rk8()) {
        this.port.postMessage({
            message,
            key
        })

        this.triggerEvent("send", key, message)

        return key
    }
    
    request(message, data=null) {
        if (data) message = { [message]: data }
        return new Promise((resolve, reject) => {
            let key = this.send(message)

            this.triggerEvent("send", key, message)
            this.awaitResponse(key).then(data => resolve(data))
        })
    }
}

export function _bridge() {
    return new Bridge(...arguments)
}

// window.bridge.request("links:index").then(data => {
//     console.log("parsed", data)
//     // console.log("parsed", code)
//     // code.html('ue')
// })