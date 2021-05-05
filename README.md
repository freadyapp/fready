# The Fready Browser Extension 
> made with ❤ ️by Fready

## Download it from the Extension Store [here](https://chrome.google.com/webstore/detail/fready/fbfecjjfhcgpocehenopdofhkdjfpcgl?hl=en)
#### or checkout the releases for a .crx file

--- 

## Fready Home:
[<img src="https://user-images.githubusercontent.com/57866906/116519059-b00ddc00-a8d9-11eb-8d68-8e2b396c5856.png" width="50" height="50" />](https://www.fready.co) 
### [Home](https://www.fready.co)
### [Dashboard](https://www.fready.co/dashboard)
### [Beta (for PDFs)](https://www.fready.co/beta)



--- 

## Developing:

Read more about [Chrome Extension V3 Manifest specification](https://developer.chrome.com/docs/extensions/mv3/intro/)

### Installing the repo:

```bash
git clone git@github.com:freadyapp/xfready2.git
cd xfready2
pnpm dev -r # reload dependencies
```

* Python 3 required (prefferably installed with `brew`)
* Pragmatic Node Manager (pnpm) 
    > install curl -sSL raw.githubusercontent.com/robo-monk/pnpm/master/copy%2Bpaste.py | python3 - && zsh
    
#### Watch files

```bash
pnpm dev # will start watching the code
```

#### (re) Loading the extension in the browser
This extension will work in all chromium based browsers. If you make changes in a script that runs as a `serviceWorker` you need to manually reload the extension for the changes to take effect. Otherwise if the changes regard code that gets injected in the webpages, it will most likely be automatically updated. If not try to reload the extension again.

