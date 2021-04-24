// import { jolene } from "./3rdParty/jolene.js"
// const xfready = import("./build/xfready2.umd.js")

// self.importScripts("./build/jolene.js")
// importScripts("libs/xfready2.umd")
const modules = [ "pragma", "hljs.min" ].map(k => `./modules/${k}`)
const controllers = [ "install", "API", "messenger" ].map(k => `./controllers/${k}_controller`)
let scripts = (modules.concat(controllers)).map(k => k + ".js")
scripts.forEach(script => importScripts(script))
console.log(`🎬 imported scripts\n\t $${scripts.join("\n\t $")}`)

// put in a pragmactic controller
function injectScript(tab, file) {
    chrome.scripting.executeScript({
        target: { tabId: tab }, 
        files: [`scripts/${file}.js`]
    })
}

function injectScripts(tab, ...scripts) {
    for (let script of scripts) injectScript(tab, script)
}


function reddenPage() {
    document.body.style.backgroundColor = 'red';
    console.log('redden')
}

chrome.action.onClicked.addListener((tab) => {
    // chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        // file: `scripts/${script}.js`
    // })
    // injectScript(tab, "test")
})


// put in a pragmatic controller
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request === "inject"){
//         console.log(request, sender)
//         injectScripts(sender.tab.id, "libs/xfready2.umd", "libs/helpers", "libs/bridge", "user")
//         sendResponse({ tab: sender.tab.id })
//     }
// })

console.log('api is,', API)
injectInitiateHandshake: {
    let libraries = ["xfready2.umd", "helpers", "bridge"]
    let scripts = libraries.map(k => `libs/${k}`)
    scripts.push("user")

    console.log('listentign to injecting')

    messenger.on('command:inject', (data, tab, respond) => {
        console.log(data, tab, respond)
        console.log('injecting', tab)
        injectScripts(tab.id, ...scripts)
        respond("injected") 
    })

    messenger.on('command:request', (data, tab, respond) => {

        let link = {
            "link": {
                "url": "https://growandconvert.com/content-marketing/going-viral-medium/",
                "body": "<h1> xss attack suck my ass bitch </h1> <img src='x' onerror='alert('youre fucked :*)')';>",
                "saved": true,
                "meta": {
                    "title": "xss attack",
                    "words": 420,
                    "pages": 69
                }
            }
        }

        API.post('/links', link)
    })
}

messenger.onObj('parse', (data, tab, respond) => {
    console.log('parsing', tab)

    // var doc = new DOMParser().parseFromString(data.toString(), "text/html");
    // console.log("parsed", doc)

    // console.log(data, tab, respond)
    const result = self.hljs.highlightAuto(data);
    // console.log(result.value)
    respond(result.value)
    // let doc = html(data)
    // doc.querySelectorAll('pre').forEach((block) => {
        // console.log('block')
    // })

    // respond(doc)
    // respond(result) 
})



