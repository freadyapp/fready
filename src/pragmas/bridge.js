import { Pragma } from "pragmajs"

export class Bridge extends Pragma {
    init(port=chrome.runtime.connect()){
        this.createEvents("portMessage", "send", 'message')
        this.connectToPort(port)
    }

    connectToPort(port=chrome.runtime.connect()) {
        this.port = port 

        this.port.onMessage.addListener(msg => {
            console.log('received', msg)
            this.triggerEvent('portMessage', msg)
        })

        chrome.runtime.onMessage.addListener(
            (data, sender, respond) => {
                let responded = false
                let _r = function() {
                    responded = true
                    respond(...arguments)
                }

                this.triggerEvent('message', data, _r, sender)
                if (typeof data === 'string') this.triggerEvent(`message:${data}`, data, _r, sender)
                if (typeof data === 'object') this.triggerEvent(`message:${Object.keys(data)[0]}`, data, _r, sender)

                if (!responded) respond(200)
            }
        )
    }

    awaitResponse(key) {
        return new Promise(resolve => this.on("portMessage", (msg) => {
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

    send(message, key=util.rk8(), retryOnFail=true) {
        try {
            this.port.postMessage({
                message,
                key
            })
        } catch {
            if (retryOnFail) {
                this.connectToPort()
                this.send(message, key, false)
            }
            console.error('failed to post message')
        }

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