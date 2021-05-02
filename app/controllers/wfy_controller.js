function isEmptyOrSpaces(str) {
    return !str || str.trim() === '';
}

const excludeNodes = [ 'SCRIPT', 'STYLE', 'PRE' ]

class WfyController extends Pragma {
    constructor(html) {
        super()
        const document = new JSDOM(html).window.document
        this.document = document
    }

    walkDOM(node, callback) {
        if (!excludeNodes.includes(node.nodeName)) {
            callback(node);
            for (var i = 0; i < node.childNodes.length; i++) {
                this.walkDOM(node.childNodes[i], callback);
            }
        }
    }

    insertBefore(new_element, element) {
        if (new_element === null) return
        element.parentNode.insertBefore(new_element, element);
    }

    removeElement(element) {
        element.parentNode.removeChild(element);
    }

    makeW(txt) {
        if (isEmptyOrSpaces(txt)) return null;
        var s = this.document.createElement('w');
        s.appendChild(this.makeText(txt));
        return s;
    }

    makeText(txt) { return this.document.createTextNode(txt) }

    wfy(element=this.document) {
        return new Promise(resolve => {
            // setTimeout(() => {
            console.time('wfying...')
            // wfyElement(element)
            var textNodes = [];
            this.walkDOM(element, function (n) {
                if (n.nodeType == 3) {
                    textNodes.push(n);
                }
            })
            // simple utility functions to avoid a lot of typing:


            for (var i = 0; i < textNodes.length; i++) {
                var n = textNodes[i];
                var txt = n.nodeValue;
                var words = txt.split(' ');

                // Insert span surrounded words:
                this.insertBefore(this.makeW(words[0]), n);
                for (var j = 1; j < words.length; j++) {
                    this.insertBefore(this.makeText(' '), n); // join the words with spaces
                    this.insertBefore(this.makeW(words[j]), n);
                }

                // Now remove the original text node:
                this.removeElement(n);
            }

            resolve(this.document.body.innerHTML)
            console.timeEnd('wfying...')
        })
    }
}

//     (async () => {
//         console.time('sheeesh')
//         console.log(document.body.outerHTML)
//         await wfy(document.body)
//         console.timeEnd('sheeesh')
//         console.log(document.body.outerHTML)
//     })()
// }