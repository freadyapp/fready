import { Pragma, html, _e } from "pragmajs"
import { styles } from "../.build_assets/index"

export class ShadowPragma extends Pragma {
    constructor() {
        super()
    }

    as(e) {
        if (!e) return

        e = _e(e)
        let clone = e.cloneNode(true)

        e.html(' ')
            .attachShadow({ mode: 'open' })

        e.shadowRoot.appendChild(clone)
        return super.as(e)
    }

    get shadow() {
        return _e(this.element.shadowRoot.firstChild)
    }

    injectStyle(style) {
        this.shadow.append(html`<style id='${style}-styles'>${styles[style]}</style>`)
        return this
    }

    injectStyles(...styles) {
        for (let style of styles) this.injectStyle(style)
        return this
    }
}
