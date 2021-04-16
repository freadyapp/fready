// import { jolene } from "./3rdParty/jolene.js"
// const xfready = import("./build/xfready2.umd.js")

// self.importScripts("./build/jolene.js")

const controllers = [ "install" ]
controllers.forEach(script => {
    importScripts(`./controllers/${script}_controller.js`)
})

function reddenPage() {
    // jolene()
    document.body.style.backgroundColor = 'red';
    console.log('redden')
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: reddenPage
    });
})



