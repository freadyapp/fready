
// chrome.runtime.sendMessage("inject", (response) => {
//     console.log("hello from xfready!")
//     console.log(response)
// })

// console.log("injected jase")

chrome.runtime.sendMessage("command:inject", (response) => {
    console.log("hello from xfready!")
    console.log(response)
})

console.log("injected base")
