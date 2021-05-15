let __dev__ = false

const _XFREADY_ENV = __dev__ ? 'development' : 'production'
const _FREADY_ROOT_URL = __dev__ ? 'http://localhost:3000' : 'https://www.fready.co'
const _FREADY_API_URL = _FREADY_ROOT_URL + '/api'

const FREADY_LINKS = {
  welcome: _FREADY_ROOT_URL + '/introducing-xfready2',
  dashboard: _FREADY_ROOT_URL + '/dashboard?ref=xfready',
  upload: _FREADY_ROOT_URL + '/beta/dashboard?onboarding=true&ref=xfready',
  home: _FREADY_ROOT_URL + '/home?ref=xfready',
  bye: _FREADY_ROOT_URL + '/bye-bye:c',
}

// article ai

const MIN_ARTICLE_LENGTH = 140
const BLACKLIST_URLS = [
  'google',
  'youtube',
  'instagram',
  'facebook',
  'tiktok',
  'reddit',
  'netflix',
  'shopify',
  'webflow',
  'duckduckgo',
  'chrome:',
  'fready',
  'gmail',
  'brightspace',
  'canvas',
  'canva',
  'gmail',
  'mailchimp',
  'amazon',
  'pinterest',
  'imgur',
  'docs.google',
  'stackoverflow',
  'github',
  'stackexchange',
  'localhost',
]

const WHITELIST_URL_REGEX = /wikipedia|wiki|blog|medium|news|investopedia|technologyreview|techcrunch|developer.mozilla/i
const WHITELIST_PATH_REGEX = /topic|article|news|blog|read|doc|about|info|wiki/i

const BLACKLIST_SUBS = ['', null, 'home', 'contact', 'splash', 'dashboard', 'pricing']

if (!__dev__) {
  //console.log = console.error = console.warn = console.time = console.timeEnd = () => {}
}

