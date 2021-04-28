function __onDocLoad__() {
    chrome.runtime.sendMessage("command:inject", (response) => {
        // let name 
        chrome.storage.sync.get('user', data => {
            let name = data.user.name

console.log(`%c
    @@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@
    @@@@@@@@@@@.
    @@@@@@@@@
    @@@@@@  (@@@@@@
    @@@@    (@@@,
    @.      (@


   🌴 injected the Fready Chrome Extension!
      Have a nice read${name ? `, ${name}` : ''}!
`, "border-left: 2px solid #2b6cce;"
            )
        })
    })
}

if (document.readyState === "complete") {
    __onDocLoad__()
} else {
    document.addEventListener('readystatechange', () => {
        if (document.readyState === "complete") __onDocLoad__()
    })
}
