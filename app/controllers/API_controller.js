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

        this.url = 'http://localhost:3000/api'
        this.createEvents("message", "send")

        let methods = ['post', 'put', 'get']
        methods.forEach(method => {
            this[method] = (...params) => this.request(method.toUpperCase(), ...params)
        })
    }

    // request(){
        // fetch('http://localhost:3000/api')
            // .then(response => response.text())
            // .then(data => console.log(data));
    // }

    async request(method='GET', suburl="", data = {}) {
        // Default options are marked with *


        let api_key = await digCredential('misc').then(({api_key}) => api_key)
        data.api_key = api_key 

        console.log('api key is', api_key)

        let params = method === 'GET' ? toURLParams(data) : {}

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

        console.log("done " + method+"ing to", this.url+suburl, data)
        // let text = response.text()
        try {
            return response.json() 
        } catch {
            return response.text() 
        }
        // return response.json(); // parses JSON response into native JavaScript objects
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
