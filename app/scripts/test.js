// alert(document.querySelector("embed[name='application/x-google-chrome-pdf']"))

function syncUser() {
    let jolene = JSON.parse(_e("head").find("meta[name='jolene']").attr('content'))
    console.log('jolene is', jolene)

    let creds = jolene.misc
    console.log('user creds', creds)

    bridge.request({ syncUserData: creds }).then(data => {
        console.log("response", data)
    })
}

syncUser()