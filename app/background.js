importScripts('./scripts/env.js') // get the env variables
const modules = ['pragma', 'hljs.min', 'jsdom'].map(k => `./modules/${k}`)
const controllers = ['install', 'API', 'messenger', 'wfy'].map(k => `./controllers/${k}_controller`)
let scripts = modules.concat(controllers).map(k => k + '.js')
scripts.forEach(script => importScripts(script))
console.log(`🎬 imported scripts\n\t $${scripts.join('\n\t $')}`)

const SYNC = new Object()
let methods = ['get', 'set']
methods.forEach(
  meth =>
    (SYNC[meth] = (...params) => {
      return chrome.storage.sync[meth](...params)
    })
)

// put in a pragmactic controller
function injectScript(tab, file) {
  chrome.scripting.executeScript({
    target: { tabId: tab },
    files: [`scripts/${file}.js`],
  })
}

function injectScripts(tab, ...scripts) {
  for (let script of scripts) injectScript(tab, script)
}

API.define({
  async syncLinks() {
    let links = await API.get('/links')
    if (!links) return null // user is not logged in

    let linkMap = {}
    links.forEach(
      link =>
        (linkMap[link.loc] = {
          id: link.id,
          saved: link.saved,
          // meta: link.meta,
          inTheCloud: true,
        })
    )

    return SYNC.set({ links: linkMap })
  },

  async doAndSyncLinks(cb, timeout = 500) {
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
    return await API.doAndSyncLinks(async () => API.post('/links', link))
  },

  async updateLink(link) {
    let promise = API.post('/links', link)
    await promise

    return await API.syncLinks()
  },

  async saveLink(link) {
    console.log('saving link', link)
    SYNC.get('links', ({ links }) => {
      console.log('saving link...', links[link])
      console.log('id is', links[link].id)
    })

    return 'ok'
  },

  async readLink(link) {
    if (!link) return
    // if (link.id) return API.get(`/links/read/${link.id}`, link.params)
    if (link.url)
      API.get(`/link/read`, {
        url: link.url,
        source: link.params?.source,
      })
    return 'ok'
  },
})

API.syncLinks()
API.syncPrefs()

chrome.action.onClicked.addListener(tab => {
  messenger.sendTo(tab, 'click').then(resp => console.log(resp))
})

chrome.tabs.onUpdated.addListener((tabId, change) => {
  if (change.url)
    messenger
      .sendToId(tabId, 'reload')
      .catch(msg => console.log(`could not update ${tabId}`))
      .then(resp => console.log(`> ${resp} updated ${tabId}, ${change.url}`))
  return false
})

chrome.runtime.onInstalled.addListener(async reason => {
  if (!(await API.isLoggedIn())) {
    chrome.tabs.create({
      url: FREADY_LINKS.welcome,
      index: 0,
    })
  }
})

chrome.runtime.setUninstallURL(FREADY_LINKS.bye)

function linksApiConfiguration() {
  this.onMsg('links:create', async (data, tab, respond) => {
    respond(await API.createLink(data))
  })

  this.onMsg('links:update', async (data, tab, respond) => {
    console.log('update', data)
    respond(await API.updateLink(data))
  })

  this.onMsg('links:index', async (data, tab, respond) => {
    console.log('indexing', data)
    respond(await API.get('/links'))
  })

  this.onMsg('links:get', async (data, tab, respond) => {
    console.log('getting link by', data)
    respond(
      await new Promise(resolve =>
        SYNC.get('links', ({ links }) => {
          resolve(links && data ? links[data] : links)
        })
      )
    )
  })

  this.onMsg('links:save', async (data, tab, respond) => {
    console.log('saving link as', data)
    respond(await API.saveLink(data))
  })

  this.onMsg('links:read', async (data, tab, respond) => {
    console.log('READING!!! article', data)
    respond(await API.readLink(data))
  })
}

// let preScripts = {
//     injectLottieCDN: "document.body.appendChild(document.createElement('script')).src = 'https://example.com/script.js';"
// }

messenger
  .run(linksApiConfiguration)
  .on('command:inject', (data, tab, respond) => {
    console.log(data, tab, respond)
    console.log('injecting', tab)
    injectScripts(tab.id, 'env', 'libs/xfready2.umd')
    respond('injected')
  })
  .onMsg('injectLib', (scriptName, tab, respond) => {
    injectScripts(tab.id, 'libs/' + scriptName)
  })
  .onMsg('parse', (data, tab, respond) => {
    console.log('parsing', tab)
    const result = self.hljs.highlightAuto(data)
    respond(result.value)
  })
  .onMsg('wfy', async ({ html, url }, tab, respond) => {
    console.log('wfying...', tab)

    let controller = new WfyController(html, url)
    let outHTML = await controller.wfy()
    respond(outHTML)
  })
  .onMsg('colorScheme', (style, tab, respond) => {
    let path = {}
    ;[16, 32].forEach(size => (path[size] = `assets/icon/${style}/${size}.png`))

    chrome.action.setIcon({ path }, (...params) => console.log('data', params))
    respond('ok')
  })

// .onMsg('badge', (text, tab, respond) => {
//     // const tabId = tab.id
//     // console.log('setting badge to ', text, tabId)
//     // text = text.toString()
//     // console.log(chrome.action.setBadgeText.toString())

//     // chrome.action.disable({tabId})
//     // let color = "#303343"
//     // chrome.action.setBadgeBackgroundColor({ color, tabId })
//     // chrome.action.setBadgeText({ text, tabId }, () => {
//     respond('ok')
//     // })
// })
