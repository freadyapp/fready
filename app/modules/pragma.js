class ActionChain {
    constructor(self) {
        this.self = self
        this.actions = new Map()

        //API extension
        this.delete = this.destroy
    }

    addWithKey(cb, key = null) {
        key = key || this.actions.size
        this.actions.set(key, cb)
        return key
    }

    add(...cbs) {
        let keys = []
        for (let cb of cbs) {
            keys.push(this.addWithKey(cb))
        }

        return keys.length > 1 ? keys : keys[0]
    }

    forAction(cb) {
        for (let [key, action] of this.actions) {
            cb(key, action)
        }
    }

    exec(...args) {
        this.execAs(this.self, ...args)
    }

    destroy(...keys) {
        keys.forEach(k => this.actions.delete(k))
    }

    execAs(self, ...args) {
        this.forAction((key, act) => {
            let retVal = null

            if (typeof act.bind === 'function') {
                retVal = act.bind(self)(...args)
            } else {
                retVal = act(...args)
            }

            if (typeof retVal === 'function') {
                // TODO make this a class

                let self = {
                    key: key,
                    action: act,
                    replaceWith: cb => {
                        // TODO implement
                    },
                    selfDestruct: () => {
                        this.destroy(key)
                    }
                }

                retVal(self)
            }
        })
    }
}



class Node {
    constructor(key) {
        this._childMap = new Map()
        this.key = typeof key === 'string' ? key : rk8()
        // API
        this.containsKey = this.childMap.has
    }
    set childMap(n) {
        for (let [key, child] of n) {
            if (child instanceof Node) {
                this.add(child)
            }
        }
    }
    get childMap() {
        return this._childMap
    }

    get kidsum() { return this.childMap.size }
    get hasKids() { return this.kidsum > 0 }
    get shape() { return this.shapePrefix() }

    get master() {
        if (this.parent == null || this.parent.parent == null) return this.parent
        return this.parent.master
    }

    get children() {
        return Array.from(this.childMap.values())
    }

    get depthKey() {
        if (this.parent) {
            return this.parent.depthKey + "<~<" + this.key
        }
        return this.key
    }

    get allChildren() {
        if (!this.hasKids) return null
        let childs = this.children
        for (let child of childs) {
            let descs = child.allChildren
            if (descs) childs = childs.concat(descs)
        }
        return childs
    }

    get(key) {
        return this.childMap.get(key)
    }

    find(key) {
        // key = key.toString()
        // recursively find a key
        // return false
        // console.log('trying to find', key)
        // console.log(this.childMap)
        if (this.childMap.has(key)) return this.childMap.get(key)
        for (let value of this.childMap.values()) {
            let v
            try { v = value.find(key) } catch { } // if the value 
            // is typeof element and key is not valid selector..
            if (v) return v
        }
    }

    adopt(...children) {
        for (let child of children) {
            this.add(child)
        }
        return this
    }

    add(node, replace = false) {
        if (!node) return console.error(`Could not add [${node}] to [${this.id}]`)
        if (!replace && this.childMap.has(node.key)) {
            node.key = `${node.key}<${rk5()}`
            return this.add(node)
        }
        node.parent = this
        this.childMap.set(node.key, node)
        // this.children.push(spragma)
    }

    delete(key) { return this.remove(key) }
    remove(key) {
        let node = this.childMap.get(key)
        if (node) this.childMap.delete(key)
    }

    shapePrefix(prefix = "") {
        let shape = `${prefix}| ${this.type} - ${this.key} \n`
        if (this.hasKids) {
            prefix += "| "
            for (let child of this.children) {
                shape += child.shapePrefix(prefix)
            }
        }
        return shape
    }
}

function mimic(obj, mimic, props) {
    for (let prop of (props || Object.keys(mimic))) {
        let desc = Object.getOwnPropertyDescriptor(mimic, prop)
        if (!desc) break
        Object.defineProperty(obj, prop, desc)
    }
}

function rk5() {
    return Math.random().toString(36).substring(3, 6) + Math.random().toString(36).substring(5, 8)
}
function rk8() { return rk(8) }

function rk(l = 7) {
    if (l < 5) return rk5()
    return (rk5() + rk(l - 5)).substring(0, l)
}

function generateRandomKey(l) {
    return rk(l)
}

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

function _newChain(name, obj) {
    let chainName = `${name}Chain`
    let eventName = `on${name.capitalize()}`

    obj[chainName] = new ActionChain(obj)

    obj[eventName] = function (cb, key) {
        obj[chainName].addWithKey(cb, key)
    }

    return {
        chainName: chainName,
        eventName: eventName
    }
}

function createChains(obj, ...chains) {
    for (let chain of chains) {
        _newChain(chain, obj)
    }
}

function _newEventChain(name, obj) {
    let refs = _newChain(name, obj)
    let done = `is${name.capitalize()}ed`

    obj[refs.chainName].add(() => {
        obj[done] = true
    })

    obj[refs.eventName] = function (cb) {
        if (obj[done]) return cb(obj)
        obj[refs.chainName].add(cb)
    }
}

// DEPRECATE
function createEventChains(obj, ...chains) {
    for (let chain of chains) {
        _newEventChain(chain, obj)
    }
}

function _isRangeBounded(range) {
    return range && range.min != undefined && range.max != undefined
}

function _retValObj(val, set) {
    return {
        val: val,
        set: set
    }
}
function _rangeBoundVal(v, range) {
    v = range.min ? Math.max(range.min, v) : v
    v = range.max ? Math.min(range.max, v) : v
    // console.log(v)
    return v
    // r ? Math.max(r[0], Math.min(v, r[1])) : v
}

function _loopBoundVal(v, range) {
    if (!(_isRangeBounded(range)))
        return console.error(`Could not loop value, since range (${JSON.stringify(range)}) is unbounded`)

    if (v == undefined) v = range.min

    v = v > range.max ? range.min : v
    v = v < range.min ? range.max : v
    return v
}

function _processValue2(v, range, loop) {
    if (loop) return _retValObj(_loopBoundVal(v, loop), true)
    if (range) {
        let r = _rangeBoundVal(v, range)
        return _retValObj(r, r === v)
    }

    return _retValObj(v, true)
}

function _processValue(v, range, _loop) {
    if (!range) return _retValObj(v, true)
    if (_loop) return _retValObj(_loopBoundVal(v, range), true)
    let r = _rangeBoundVal(v, range)
    return _retValObj(r, r == v)
}

class Pragma extends Node {
    constructor(map, parent) {
        super()
        createEventChains(this, 'export')

        this.actionChain = new ActionChain()
        this._events = new Map()

        // console.log("-------------")
         this.key = map

    }

    _addToEventChain(name, ...cbs) {
        let chain = this._events.get(name)
        if (chain) {
            let keys = chain.add(...cbs)
            this._events.set(name, chain)
            return keys
        }

        return null
    }

    createEvent(eventTitle, ...cbs) {
        let actions = new ActionChain(this)
        this._events.set(eventTitle, actions)
        if (cbs.length > 0) this.on(eventTitle, cbs)

        return this
    }

    createEvents(...events) {
        events.forEach(event => {
            this.createEvent(event)
        })

        return this
    }

    triggerEvents(eventAry, ...args) {
        eventAry.forEach(event => {
            this.triggerEvent(event, ...args)
        })
        return this
    }

    triggerEvent(eventName, ...args) {
        if (!this._events.has(eventName)) return console.error(`pragma doesnt have ${event} - cannot .triggerEvent("${event}")]`, this)
        this._events.get(eventName).execAs(this, ...args)

        return this
    }

    _on(event, ...cbs) {
        if (!this._events.has(event)) this.createEvent(event) 
        let keys = this._addToEventChain(event, ...cbs)
        if (keys === null) return console.error(`pragma doesnt have ${event} - cannot .on("${event}")`, this)
        return keys
    }

    on() {
        this._on(...arguments)
        return this
    }

    _onNext(event, cb) {
        let cbOnce = function () {
            cb(...arguments)
            return thisCallback => {
                thisCallback.selfDestruct()
            }
        }

        let key = this._on(event, cbOnce)
    }

    onNext() {
        this._onNext(...arguments)
        return this
    }

    createWires(...wireNames) { wireNames.forEach(wire => this.createWire(wire)); return this }
    createWire(wireName) {

        let events = {
            change: `${wireName}Change`,
            set: `${wireName}Set`
        }

        this.createEvents(events.change, events.set)


        Object.defineProperty(this, wireName, {
            set: newValue => {
                let pv = _processValue2(newValue, this[`_${wireName}Range`], this[`_${wireName}Loop`])
                const oldValue = this[`_${wireName}`]
                if (pv.set && (pv.val !== oldValue)) {
                    this[`_${wireName}`] = pv.val
                    this.triggerEvent(events.change, pv.val, oldValue)
                }

                this.triggerEvent(events.set, newValue, oldValue)
            },
            get: () => {
                return this[`_${wireName}`]
            }
        })

        this[`set${wireName.capitalize()}`] = value => {
            this[`${wireName}`] = value
            return this
        }

        this[`set${wireName.capitalize()}Silently`] = value => {
            this[`_${wireName}`] = value
            return this
        }

        this[`set${wireName.capitalize()}Loop`] = (min, max) => {
            this[`_${wireName}Loop`] = { min: min, max: max }
            return this
        }

        this[`set${wireName.capitalize()}Range`] = (min, max) => {
            this[`_${wireName}Range`] = { min: min, max: max }
            return this
        }

        return this
    }

    // -------------------- VALUE THINGS

    setRange(min = null, max = null) {
        this.range = this.range || {}
        this.range.min = min === null ? this.range.min : min
        this.range.max = max === null ? this.range.max : max
        return this
    }

    breakLoop() { this._loopVal = false; return this }
    setLoop(min, max) {
        this.setRange(min, max)
        this._loopVal = true
        return this
    }

    get dv() {
        return this.v - this._lv
    }
    get value() {
        return this.v
    }

    setValue(n) { this.value = n; return this }

    set value(n) {
        let pv = _processValue(n, this.range, this._loopVal)

        if (pv.set) {
            this._lv = this.v
            this.v = pv.val
            this.exec()
        }
    }


    //  -------------------------------

    exec() {
        this.actionChain.execAs(this, ...arguments)
        return this
    }

    setKey(key) { this.key = key; return this }
    set key(key) {
        // console.log('setting key to ', key)
        this._KEY = key == null ? generateRandomKey() : key
    }

    get key() { return this._KEY }

    set id(n) {
        // console.log('setting key to from id ', n)
        // this.key = n
    }

    get id() {
        return null
    }

    buildAry(aryOfMaps) {
        for (let map of aryOfMaps) {
            this.add(new Pragma(map, this))
        }
        return this
    }

    build(...maps) {
        return this.buildAry(maps)
    }

    // FOR HTML DOM
    as(query = null, innerHTML) {
        query = query || `div#${this.id}.pragma`
        // this.element = _e(query, innerHTML)
        return this
    }

    // FOR TEMPLATES
    addExport(exp) {
        this.exports = this.exports || new Set()
        this.exports.add(exp)
    }

    export(...attrs) {
        for (let a of attrs) {
            this.addExport(a)
        }
    }

    import(...pragmas) {
        let exportChain = new ActionChain()

        for (let pragma of pragmas) {
            if (typeof pragma === 'function') {
                pragma = pragma()
            }

            if (pragma.exports) {
                // if ('exportChain' in pragma.exports)
                mimic(this, pragma, pragma.exports)
            }

            if (pragma.exportChain) {
                exportChain.add(_ => {
                    pragma.exportChain.exec(this)
                })
            }
        }

        exportChain.exec()
        return this
    }

    // TODO DEPRECATE
    from(pragma) {
        if (pragma.exports) {
            mimic(this, pragma, pragma.exports)
            //for (let attr of pragma.exports){
            //// this[attr] = pragma[attr]
            //let desc = Object.getOwnPropertyDescriptor(pragma, attr) 
            //if (!desc) break

            //Object.defineProperty(this, attr, desc)
            //}
        }

        if (pragma.exportChain) pragma.exportChain.exec(this)
        return this
    }

    wireTo(pragma) {
        let self = this
        pragma.do(function () {
            // console.log(this)
            // console.log(p.value)
            // this.value = pragma.value
            self.value = this.value
        })
        return this
    }

    // ADD SCRIPT TO RUN WHEN VALUE CHANGES
    do() {
        this.actionChain.add(...arguments)
        return this
    }


    // RUN SCRIPTS WITH THIS SCOPE


    run(...scripts) {
        let sample = scripts[0]
        if (typeof sample === 'function') {
            this._runAry(scripts)
        } else if (typeof sample === 'object') {
            this._runAry(Object.values(sample))
        } else {
            console.error(`Could not run [${scripts}] as [${this}]`)
        }
        return this
    }

    _runAry(scripts) {
        for (let script of scripts) {
            this.runAs(script)
        }
    }

    runAs(script) {
        return script.bind(this)()
    }

    containAry(childs, action = 'append') {
        for (let child of childs) {
            super.add(child)
        }
        return this
    }

    contain(...childs) {
        return this.containAry(childs)
    }

    containFirst(...childs) {
        // TODO FIX 
        return this.containAry(childs.reverse(), 'prepend')
    }
}
