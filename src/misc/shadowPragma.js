import { Pragma, html, _e } from "pragmajs"
import { styles } from "../.build_assets/index"

export class ShadowPragma extends Pragma {
    as(e) {
        if (!e) return

        e = _e(e)
        let clone = e.cloneNode(true)

        e.html('')
            .attachShadow({ mode: 'open' })

        e.shadowRoot.appendChild(clone)
        return super.as(e)
    }

    get root() {
        return this.element.shadowRoot
    }
    get shadow() {
        return _e(this.element.shadowRoot.firstChild)
    }

    _injectCSS(css, name) {
        this.root.append(html`<style id='${name}-styles'>${css}</style>`)
        return this
    }
    injectStyle(style) {
        return this._injectCSS(styles[style], style)
    }

    injectStyles(...styles) {
        for (let style of styles) this.injectStyle(style)
        return this
    }
}
