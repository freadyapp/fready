
class Bridge extends Pragma {
    constructor(port=chrome.runtime.connect()){
        super()

        this.port = port 
        this.createEvents("message", "send")
        this.port.onMessage.addListener(msg => {
            this.triggerEvent('message', msg)
        })
    }

    awaitResponse(key) {
        return new Promise(resolve => this.onNext("message", (msg) => {
            // console.log(msg.key, key)
            if (msg.key === key) return resolve(msg)
            this.awaitResponse(key).then(msg => resolve(msg))
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
    
    request(message) {
        return new Promise((resolve, reject) => {
            let key = this.send(message)

            this.triggerEvent("send", key, message)
            this.awaitResponse(key).then(data => resolve(data))
        })
    }
}

bridge = new Bridge()
window.bridge = bridge 