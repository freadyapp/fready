
let __dev__ = true

const _XFREADY_ENV = __dev__ ? "development" : 'production'
const _FREADY_ROOT_URL = __dev__ ? "http://localhost:3000" : "https://www.fready.co"
const _FREADY_API_URL = _FREADY_ROOT_URL + '/api'

const FREADY_LINKS = {
    welcome: _FREADY_ROOT_URL + "/welcome",
    dashboard: _FREADY_ROOT_URL + "/dashboard",
    upload: _FREADY_ROOT_URL + "/beta/dashboard?onboarding=true"
}
