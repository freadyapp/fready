
// chrome.runtime.sendMessage("inject", (response) => {
//     console.log("hello from xfready!")
//     console.log(response)
// })

// console.log("injected base")

chrome.runtime.sendMessage("command:inject", (response) => {
    console.log("hello from xfready!")
    console.log(response)
})

console.log("injected base")
