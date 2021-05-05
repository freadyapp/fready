const germs = [
    "script", "iframe"
]

export function sanitizeDocument(doc) {
    console.time('🔫 sanitizing doc')
    doc.querySelectorAll(germs.join(", "))
        .forEach(germ => germ.remove())
    console.timeEnd('🔫 sanitizing doc')
    return doc
}
