
let __dev__ = true

const _XFREADY_ENV = __dev__ ? "development" : 'production'
const _FREADY_ROOT_URL = __dev__ ? "http://localhost:3000" : "https://www.fready.co"
const _FREADY_API_URL = _FREADY_ROOT_URL + '/api'

const FREADY_LINKS = {
    welcome: _FREADY_ROOT_URL + "/welcome",
    dashboard: _FREADY_ROOT_URL + "/dashboard",
    upload: _FREADY_ROOT_URL + "/beta/dashboard?onboarding=true"
}

const BLACKLIST_URLS = [
    'google', 'youtube', 'instagram', 'facebook', 'tiktok', 'reddit', 'netflix', 'shopify', 'webflow',
    'duckduckgo', 'chrome:', 'fready', 'gmail', 'brightspace', 'canvas', 'canva', 'gmail', 'mailchimp', 'amazon',
    'pinterest', 'imgur', 'docs.google', 'stackoverflow', 'github', 'stackexchange'
]

const WHITELIST_URLS = [
    'investopedia'
]

const BLACKLIST_SUBS = ["", null, 'home', 'contact', 'splash', "dashboard", 'pricing']

if (!__dev__) {
    console.log = console.error = console.warn = console.time = console.timeEnd = () => {}
}

// try {
//     export {
//         __dev__,
//         _XFREADY_ENV,
//         _FREADY_API_URL,
//         FREADY_LINKS,
//         BLACKLIST_SUBS,
//         BLACKLIST_URLS
//     }
// } catch {}
