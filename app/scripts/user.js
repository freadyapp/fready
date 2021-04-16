// alert(document.querySelector("embed[name='application/x-google-chrome-pdf']"))

function grabUserFromJolene() {
    let jolene = JSON.parse(_e("head").find("meta[name='jolene']").attr('content'))
    console.log('jolene is', jolene)

    let creds = {
        name: jolene.name,
        permissions: jolene.permissions,
        misc: jolene.misc
    }

    return new Promise(resolve => resolve(creds))
}


class User {
    static data = {}

    static setData(data){
        for (let [key, value] of Object.entries(data)) {
            User.data[key] = value
        }
    }

    static sync(data=null){
        if (data) {
            // sync to local storage
            return new Promise(resolve => chrome.storage.sync.set({ user: data }, function () {
                User.setData(data)
                resolve(data)
            }))
        }

        // else set users params to whatever they are in this instance
        return new Promise(resolve => chrome.storage.sync.get('user', function (data) {
            User.setData(data)
            resolve(data)
        }))
    }

    static get(key=null, maxTries=3) {
        return new Promise(resolve => {
            if (maxTries<=0 || key in User.data) return resolve(User.data[key])

            User.sync()
            return User.get(key, maxTries-1).then((data) => resolve(data))
        })
    }
}

User.sync()


if (HOST.is("fready", "localhost:3000")) {
    grabUserFromJolene().then(async data => {
        await User.sync(data)
        console.log("DATA", data)
        
    })
}

(async () => {
    let api_key = await User.get('api_key')
    console.log("USER DATA", User.data)
    let name = await User.get('name')
    console.log(`* ${name} in XFREADY *`)
})()


// if (HOST.is("fready", "localhost:3000")) {
//     grabUserFromJolene().then(async data => {
//         console.log("DATA", data)
//         await User.sync(data)

//         let api_key = await User.get('api_key')
//     })
// }

