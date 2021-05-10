import { html, Pragma, _e } from 'pragmajs'
import { _lector } from './lectorPragma'
import { _popup } from './popup'
import { _alma } from './alma'
import { _articleAI } from './articleAI'

import { HOST, SYNC } from '../misc/helpers'

function clearBadge() {
  return setBadge()
}

function setBadge(badge) {
  console.log('badge setting', badge)
  return window.bridge.request({ badge })
}

function setColorScheme(colorScheme = 'dark') {
  return window.bridge.request({ colorScheme })
}

function initColorScheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setColorScheme('dark')
  } else setColorScheme('light')

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const scheme = e.matches ? 'dark' : 'light'
    setColorScheme(scheme)
  })
}

export class Xfready extends Pragma {
  async init() {
    initColorScheme()

    window.bridge
      .on('message:click', async (data, respond) => {
        if (!this._injected) await this.inject({ skipAlma: true })
        this.popup.toggle()
      })
      .on('message:reload', async (data, respond) => {
        this.updateView()
      })

    this.createEvents(
      'lector:create',
      'lector:destroy',
      'link:load',
      'link:create',
      'article:ready',
      'read'
    )
      .on('article:ready', article => setBadge(article.eta))
      .on('updateSetting:showOnWebsites', setting => {
        if (setting === false) this._ejectAlma()
      })
      .on('read', (url, params) => {
        window.bridge.request('links:read', {
          url,
          params,
        })
      })

    this.ai = _articleAI()
    this.updateView()
  }

  updateView() {
    if (this.ai._isDocFreadable()) {
      this.inject()
    } else {
      this.eject()
    }
  }

  eject() {
    if (!this._injected) return

    this._ejectAlma()

    this.popup?.destroy().then(() => {
      this.popup = null
      console.log('destroyed popup')
    })

    this.lector?.destroy().then(() => {
      this._lector = null
      console.log('destroyed lector')
    })
    // this.popup?.destroy()
    // this.lector?.destroy()
    this.link = null
    this._element = null

    this._injected = false
  }

  _injectAlma() {
    this.alma = _alma(this).appendTo(this)
  }

  _ejectAlma() {
    this.alma?.destroy().then(() => {
      this.alma = null
      console.log('destroyed alma')
    })
  }

  async inject({ skipAlma = false } = {}) {
    if (this._injected) return

    this._injected = true
    this.as('html')

    let showOnWebsites = (await this.getSettings())?.showOnWebsites !== false

    if (!skipAlma && showOnWebsites) {
      this._injectAlma()
    }

    if (!this.popup)
      this.popup = _popup(this)
        .appendTo(this)
        .hide()
        .run(function () {
          this[`${showOnWebsites ? 'show' : 'hide'}OnWebsites`]()
        })

    this.on('lector:create', lector => {
      lector.on('article:load', article => {
        SYNC.get('preferences', preferences => {
          console.log('preferences are', preferences)
          article.eta = Math.round(article.length / 4.7 / (preferences.wpm ?? 250)) + "'"
          // article.etaMinutes =
          this.triggerEvent('article:ready', article)
        })
      })
    })

    // set existing link if there is one
    this.link = await window.bridge.request('links:get', HOST.getURL())
    console.log('existing article is', this.link)

    // pragmaSpace.onDocLoad(() => {
    this.lector = _lector(this)
      // .on('article:load')
      .on('article:parse', article => {
        this.article = article
        // this.createLink(article)
      })
      .on('destroy', article => {
        this.triggerEvent('article:exit')
      })
    // .on('render', article => {
    //     this.triggerEvent('link:read', this.link)
    // })

    if (this.link) this.triggerEvent('link:load', this.link)

    this.lector.loadArticle()
  }

  async createLink(article, { saved = null, skipBody = false, source = 'xfready' } = {}) {
    console.time('creating link..............')

    await this.link
    // console.log(`link is ${this.link?.inTheCloud ? '' : ' -- NOT --'} in the cloud`)
    if (skipBody && !this.link?.inTheCloud) {
      skipBody = false
      // console.log('link is already in the cloud!')
    }

    if (saved === null && this.link && this.link.saved) saved = true

    let link = {
      url: HOST.getURL(),
      saved,
    }

    if (!skipBody) {
      if (!article) return console.error('no article to create...', article)

      link.body = article.content
      link.meta = {
        title: article.title,
        by: authoredBy(article),
        words: Math.round(article.length / 4.7),
        pages: 1,
      }
    }

    this.link = link
    this.triggerEvent('link:load', this.link)

    console.log('links:create', link)
    console.timeEnd('creating link..............')
    return new Promise(async resolve => {
      // create link
      await window.bridge.request('links:create', { link, source })

      // wait a bit and then get the link back
      // setTimeout(() => {
      this.link = await window.bridge.request('links:get', HOST.getURL())
      // })

      this.triggerEvent('link:create', this.link, { source })
      resolve(this.link)
    })
    // return )
  }

  toggleReadOrExit() {
    if (this._isReading) return this.exit()
    return this.read(...arguments)
  }

  async read(params) {
    this._isReading = true
    await this.lector.load()
    this.lector.onNext('article:parse', article => {
      // this.article = article
      this.createLink(article)
    })
    this.triggerEvent('read', HOST.getURL(), params)
    return this.lector.render()
  }

  exit() {
    clearBadge()
    this._isReading = false
    return this.lector.exit()
  }

  async save(params = {}) {
    // saveArticle(this.lector.article)
    console.log('saving...')
    // console.log('article is', this.article)
    await this.lector.parseArticle()
    console.log('now after parsearticle is', this.article)
    // this.triggerEvent('save', HOST.getURL(), params)
    return this.createLink(this.article, { saved: true, skipBody: true, ...params })
  }

  unsave(params = {}) {
    // this.triggerEvent('save', HOST.getURL(), params)
    return this.createLink(this.article, { saved: false, skipBody: true, ...params })
  }

  // static general helpers, handled by the 'core' of xfready
  static sanitizeHtml(input) {
    var doc = new DOMParser().parseFromString(input.toString(), 'text/html')
    return _e(doc.body).html()
  }

  set lector(n) {
    this._lector = n
    this._lector.xfready = this
    this.triggerEvent('lector:create', this._lector)
  }

  get lector() {
    return this._lector
  }

  getLector() {
    return new Promise((resolve, reject) => {
      if (this._lector) resolve(this._lector)

      this.on('newLector', lector => {
        resolve(lector)
      })
    })
  }

  async getSettings() {
    return new Promise(r => SYNC.get('settings', data => r(data.settings)))
  }

  async updateSettings(update) {
    let settings = (await this.getSettings()) || {}
    // SYNC.get('settings', settings => {
    console.info('settings in the db are', settings)

    /// support for both Objects and Maps
    if (update.constructor !== Map) update = Object.entries(update)

    for (let [key, val] of update) {
      settings[key] = val
      this.triggerEvent(`updateSetting:${key}`, val)
    }

    console.log('updating settings to ', settings)
    SYNC.set({ settings })
    // })
  }
}

function authoredBy(article) {
  return HOST.get()
}
