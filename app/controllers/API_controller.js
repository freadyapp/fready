async function digCredential(key){
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get('user', data => {
            if (!data.user) return reject('nobody logged in') 
            resolve(key ? data.user[key] : data)
        })
    })
}

function toURLParams(obj){
    return new URLSearchParams(obj).toString()
}

class APIController extends Pragma {
    constructor() {
        super()

        this.url = _FREADY_API_URL
        this.createEvents("message", "send")

        this.bin = []

        let methods = ['post', 'put', 'get']
        methods.forEach(method => {
            this[method] = (...params) => this.request(method.toUpperCase(), ...params)
        })
        this.log()
    }

    isLoggedIn() {
        return new Promise (
            resolve => digCredential()
                            .catch(() => resolve(false))
                            .then(() => resolve(true))
                        )
    }
    log() {
        console.log('[' + this.constructor.name + ']', ...arguments)
    }
    // request(){
        // fetch('http://localhost:3000/api')
            // .then(response => response.text())
            // .then(data => console.log(data));
    // }

    async request(method='GET', suburl="", data = {}) {
        if (this._requesting) return new Promise(resolve => {
            console.log("BINNING REQUEST", ...arguments)
            setTimeout(() => this.request(...arguments).then(d => resolve(d)), 750)
        })
        // if (this._requesting) return new Promise(() => this.bin.push(arguments))

        // Default options are marked with *

        let api_key = (await digCredential('misc'))?.api_key
        if (!api_key) return console.log("you're not logged in!")

        this.log(`${method}ing`, suburl, data)
        let start = performance.now()
        this._requesting = true
        data.api_key = api_key 

        // console.log('api key is', api_key)

        let params = method === 'GET' ? toURLParams(data) : ''

        console.log('params are', params)
        const response = await fetch((this.url+suburl+`?${params}`), {
            method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: method==="GET" ? null : JSON.stringify(data) // body data type must match "Content-Type" header
        })


        // this._requesting = false
        // let text = response.text()

        let ret = await response.text()
        
        try {
            ret = JSON.parse(ret)
        } catch {}
        
        this._requesting = false
        this.log(`[${method}] ${this.url+suburl} =>`, ret, `took ${performance.now()-start}ms`)
        return ret
    }

}

let API = new APIController

// class APIController extends Pragma {
//     constructor() {
//         super()

//         this.url = 'http://localhost:3000/api'

//         this.createEvents("message", "send")

//         let methods = ['post', 'put', 'get']
//         // methods.forEach(method => {
//         // this[method] = () => this.request(method.toUpperCase(), ...arguments)
//         // })
//     }

//     // request(){
//     // fetch('http://localhost:3000/api')
//     // .then(response => response.text())
//     // .then(data => console.log(data));
//     // }

//     async request(method = 'GET', suburl = "", data = {}) {
//         // Default options are marked with *
//         const response = await fetch(this.url + suburl, {
//             method, // *GET, POST, PUT, DELETE, etc.
//             mode: 'cors', // no-cors, *cors, same-origin
//             // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//             // credentials: 'same-origin', // include, *same-origin, omit
//             headers: {
//                 'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },

//             redirect: 'follow', // manual, *follow, error
//             referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//             body: ((method === 'GET') ? null : JSON.stringify(data)) // body data type must match "Content-Type" header
//         })

//         let = response.text()
//         try {
//             return JSON.parse(text)
//         } catch (error) {
//             return text
//         }
//     }

// }

// let API = new APIController
