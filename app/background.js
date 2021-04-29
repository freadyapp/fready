importScripts("./scripts/env.js") // get the env variables 
const modules = [ "pragma", "hljs.min", "jsdom" ].map(k => `./modules/${k}`)
const controllers = [ "install", "API", "messenger", "wfy" ].map(k => `./controllers/${k}_controller`)
let scripts = (modules.concat(controllers)).map(k => k + ".js")
scripts.forEach(script => importScripts(script))
console.log(`🎬 imported scripts\n\t $${scripts.join("\n\t $")}`)

const SYNC = new Object
let methods = [ 'get', 'set' ]
methods.forEach(meth => SYNC[meth] = (...params) => { return chrome.storage.sync[meth](...params) })

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

chrome.action.onClicked.addListener((tab) => {
    // chrome.scripting.executeScript({
        // target: { tabId: tab.id },
        // file: `scripts/${script}.js`
    // })
    // injectScript(tab, "test")
})

chrome.runtime.onInstalled.addListener(reason => {
    chrome.tabs.create({
        url: FREADY_LINKS.welcome,
        index: 0
    })

    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.runtime.setUninstallURL(_FREADY_ROOT_URL+"/:c");
    }
})
// put in a pragmatic controller
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request === "inject"){
//         console.log(request, sender)
//         injectScripts(sender.tab.id, "libs/xfready2.umd", "libs/helpers", "libs/bridge", "user")
//         sendResponse({ tab: sender.tab.id })
//     }
// })

function linksApiConfiguration() {
    this.onMsg('links:create', async (data, tab, respond) =>{
        respond(await API.createLink(data))
        // respond(await API.post('/links', data))
    })

    this.onMsg('links:update', async (data, tab, respond) =>{
        console.log('update', data)
        respond(await API.updateLink(data))
        // respond(await API.post('/links', data))
    })

    this.onMsg('links:index', async (data, tab, respond) =>{
        console.log('indexing', data)
        respond(await API.get('/links'))
    })

    this.onMsg('links:get', async (data, tab, respond) => {
        console.log('getting link by', data)
        respond(await new Promise(resolve => SYNC.get('links', ({links}) => {
            resolve(data ? links[data] : links)
        })))
    })

    this.onMsg('links:save', async (data, tab, respond) => {
        console.log('saving link as', data)
        respond(await API.saveLink(data))
    })

    console.log('messenger is', this)
}


API.define({
    async syncLinks() {
        let links = await API.get('/links')

        let linkMap = {} 
        links.forEach(link => linkMap[link.loc] = {
            id: link.id,
            saved: link.saved,
            meta: link.meta,
            inTheCloud: true
        })

        return SYNC.set({ links: linkMap })
    },

    async doAndSyncLinks(cb, timeout=500) {
        API.log('doing and syncing link afterwards....')
        let resp = await cb()
        setTimeout(() => API.syncLinks(), timeout)
        return resp
    },

    async syncPrefs() {
        let preferences = await API.get('/preferences')
        console.log('prefs are', preferences)
        return SYNC.set({ preferences })
    },

    async createLink(link) {
        API.log('creating new link', link)
        return await API.doAndSyncLinks(
            async () => API.post('/links', link)
        )
        // let promise = API.post('/links', link)
        // let resp = await promise
        // setTimeout(() => API.syncLinks(), 500)
        // return resp
    },

    async updateLink(link) {
        let promise = API.post('/links', link)
        await promise

        return await API.syncLinks()
    },

    async saveLink(link) {
        console.log('saving link', link)
        SYNC.get('links', ({links}) => {
            console.log('saving link...', links[link])
            console.log('id is', links[link].id)
        })

        // let promise = API.post('/links', link)
        // return promise
        return 'ok'
    }
})

API.syncLinks()
API.syncPrefs()

injectInitiateHandshake: {
    // let libraries = ["xfready2.umd"]
    // let scripts = libraries.map(k => `libs/${k}`)
    // scripts.push("user")

    console.log('listentign to injecting')

    messenger.on('command:inject', (data, tab, respond) => {
        console.log(data, tab, respond)
        console.log('injecting', tab)
        injectScripts(tab.id, "env", "libs/xfready2.umd")
        respond("injected") 
    })

    messenger.run(linksApiConfiguration)
    messenger.on('command:request', (data, tab, respond) => {

        // let link = {
        //     "link": {
        //         "url": "https://growandconvert.com/content-marketing/going-viral-medium/",
        //         "body": "<h1> xss attack suck my ass bitch </h1> <img src='x' onerror='alert('youre fucked :*)')';>",
        //         "saved": true,
        //         "meta": {
        //             "title": "xss attack",
        //             "words": 420,
        //             "pages": 69
        //         }
        //     }
        // }

        // API.post('/links', link)
    })


}

messenger.onMsg('parse', (data, tab, respond) => {
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

messenger.onMsg('wfy', async (html, tab, respond) => {
    console.log('wfying...', tab)

    // await WfyController.wfy(html)
    let controller = new WfyController(html)
    let outHTML = await controller.wfy()
    console.log('out html > ', outHTML)
    // var doc = new DOMParser().parseFromString(data.toString(), "text/html");
    // console.log("parsed", doc)

    // console.log(data, tab, respond)
    // const result = self.hljs.highlightAuto(data);
    // console.log(result.value)
    respond(outHTML)
    // let doc = html(data)
    // doc.querySelectorAll('pre').forEach((block) => {
    // console.log('block')
    // })

    // respond(doc)
    // respond(result) 
})
