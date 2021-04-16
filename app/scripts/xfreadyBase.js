chrome.runtime.sendMessage("inject", (response) => {
    console.log("hello from xfready!")
    console.log(response)
})