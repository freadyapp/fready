import { Pragma, _p, _e, html } from 'pragmajs'
import { HOST } from '../misc/helpers';

var REGEXPS = {
    // NOTE: These two regular expressions are duplicated in
    // Readability.js. Please keep both copies in sync.
    unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
    okMaybeItsACandidate: /and|article|body|column|main|shadow/i,

    likelyDomains: WHITELIST_URL_REGEX,
    likelyPathContents: WHITELIST_PATH_REGEX
}

function isNodeVisible(node) {
    // Have to null-check node.style and node.className.indexOf to deal with SVG and MathML nodes.
    return (!node.style || node.style.display != "none")
        && !node.hasAttribute("hidden")
        //check for "fallback-image" so that wikimedia math images are displayed
        && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
}

/**
 * Decides whether or not the document is reader-able without parsing the whole thing.
 * @param {Object} options Configuration object.
 * @param {number} [options.minContentLength=140] The minimum node content length used to decide if the document is readerable.
 * @param {number} [options.minScore=20] The minumum cumulated 'score' used to determine if the document is readerable.
 * @param {Function} [options.visibilityChecker=isNodeVisible] The function used to determine if a node is visible.
 * @return {boolean} Whether or not we suspect Readability.parse() will suceeed at returning an article object.
 */
function isProbablyReaderable(doc, options = {}) {
    // For backward compatibility reasons 'options' can either be a configuration object or the function used
    // to determine if a node is visible.
    //
    //
    console.time("readable done in")
    if (typeof options == "function") {
        options = { visibilityChecker: options };
    }

    var defaultOptions = { minScore: 30, minContentLength: MIN_ARTICLE_LENGTH, visibilityChecker: isNodeVisible };
    options = Object.assign(defaultOptions, options);

    var nodes = doc.querySelectorAll("p, pre");

    // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
    // Some articles' DOM structures might look like
    // <div>
    //   Sentences<br>
    //   <br>
    //   Sentences<br>
    // </div>
    var brNodes = doc.querySelectorAll("div > br");
    if (brNodes.length) {
        var set = new Set(nodes);
        [].forEach.call(brNodes, function (node) {
            set.add(node.parentNode);
        });
        nodes = Array.from(set);
    }

    var score = 0;
    // This is a little cheeky, we use the accumulator 'score' to decide what to return from
    // this callback:
    const domainCred = addDomainCred(window.location)

    const result = [].some.call(nodes, function (node) {
        if (!options.visibilityChecker(node)) {
            return false;
        }

        var matchString = node.className + " " + node.id;
        if (REGEXPS.unlikelyCandidates.test(matchString) &&
            !REGEXPS.okMaybeItsACandidate.test(matchString)) {
            return false;
        }

        if (node.matches("li p")) {
            return false;
        }

        var textContentLength = node.textContent.trim().length;
        if (textContentLength < options.minContentLength) {
            return false;
        }

        score += Math.sqrt(textContentLength - options.minContentLength) * Math.sqrt(domainCred)

        if (score > options.minScore) {
            return true;
        }
        return false;
    });

    function floor(n) { return Math.round((n + Number.EPSILON) * 100) / 100 }

    console.timeEnd("readable done in")
    // score range

    // let base = Math.min(Math.max(score, 0), 30) * 3
    // let accuracy = Math.min(Math.sqrt(Math.abs(score - 30)), 10)
    //let certainty = floor(base+accuracy) 

    let certainty = Math.max(Math.min(100, score > 0 ? Math.sqrt(score) * 15 : 0), 0)

    console.log(`🌴 - from Fready \n\n This page resembles %c${floor(certainty)}% %cof an article.`, "font-size:13px", "font-size:11px")

    if (result) console.log(`\n✅ This is an article, have a beautiful read!\n\n\tarticle's overall score: ${Math.min(floor(1.5 * score), 100)}\n\tbonus: +${Math.min(floor(1.2 * domainCred), 100)}`)



    return result
}


function addDomainCred(location) {
    // domain match gives more cred than subdomain
    //console.log(location.pathname)
    //if pw does not contain numbers, and at most 1 capital letter, add add dom cred + 1
    //else - 0.1
    let rd = (accu, pw) => {
        //console.log(pw.search(/\w/), pw, pw.search(/\w/)==0)
        if (pw.length > 1 && pw.length < 13 && pw.search(/\w/) == 0 && pw == pw.toLowerCase()) {
            //console.log("adding", pw, Math.sqrt(pw.length))
            return accu + Math.sqrt(pw.length)
        } else {
            //console.log("deducting", pw, Math.sqrt(pw.length)/2)
            return accu - Math.sqrt(pw.length / 2)
        }
    }

    let urlFormation = location.pathname.concat(location.search).split('-').reduce(rd, 0) / 6
    let cred = 4 * REGEXPS.likelyDomains.test(location.host) + 2 * REGEXPS.likelyPathContents.test(location.pathname) + urlFormation
    //console.log(cred)
    //console.log(urlFormation)
    //console.log(`ADDING DOMAIN CRED FOR ${location}`, cred)
    return cred
}

function checkURL(url) {
    let ary = url.replace("https://", "").replace("http://", "").split("/")
    let host = ary[0].replace("www.", "")
    let sub = (ary[1].split("?"))[0]
    console.log(host)
    console.log(sub)
    return !(BLACKLIST_URLS.some(voo => {
        if (host.includes(voo)) {
            console.log('BLACKLIST domain')
            return true
        }
    })) && !(BLACKLIST_SUBS.some(voo => {
        if (sub == voo) {
            console.log('BLACKLIST subsdomain')
            return true
        }
    }))
}


class ArticleAI extends Pragma {
    // init() {
    // }

    _isDocFreadable(doc=document) {
        return checkURL(HOST.getURL()) && isProbablyReaderable(doc)
    }
}

export function _articleAI() {
    return new ArticleAI
}
