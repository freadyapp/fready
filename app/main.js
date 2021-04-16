// import { jolene } from "./3rdParty/jolene.js"
// const xfready = import("./build/xfready2.umd.js")

// self.importScripts("./build/jolene.js")
// importScripts("libs/xfready2.umd")
const controllers = [ "install", "pragma" ]
controllers.forEach(script => {
    importScripts(`./controllers/${script}_controller.js`)
})

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
    // jolene()
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


chrome.runtime.onConnect.addListener(function (port) {
    console.log("CONNECTED", port)
    port.onMessage.addListener(function (msg) {
        console.log("CONNECTED", port, "SEND", msg)
        port.postMessage({ question: "Who's there?", key: msg.key });
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request === "inject"){
        console.log(request, sender)
        injectScripts(sender.tab.id, "libs/xfready2.umd", "libs/helpers", "libs/bridge", "user")
        sendResponse({ tab: sender.tab.id })
    }
})

