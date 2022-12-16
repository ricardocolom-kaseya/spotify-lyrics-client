const { contextBridge, ipcRenderer } = require('electron')

const API = {
    sendCode: (code) => ipcRenderer.send("set-spotify-code", code),
}

contextBridge.exposeInMainWorld('electron', {
    sendCode: (code) => {
        ipcRenderer.send("set-spotify-code", code)
        console.log('here')
    },
})