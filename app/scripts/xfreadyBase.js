// chrome.runtime.sendMessage("command:inject", (response) => {
    // console.log("hello from xfready!")
    // console.log(response)
// })

chrome.runtime.sendMessage('command:request', (response) => {
    console.log('send request')
})