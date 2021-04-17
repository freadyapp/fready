console.log("injecting base")

chrome.runtime.sendMessage("command:inject", (response) => {
    console.log("hello from xfready!")
    console.log(response)
})