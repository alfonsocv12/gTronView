const { BrowserWindow } = require("@electron/remote");
const { contextBridge } = require('electron');
// const { hello } = require('./src/sendDomData');

contextBridge.exposeInMainWorld(
    'api',
    {
        platform: process.platform,
        topic: {
            ipcRenderer: require('electron').ipcRenderer
        }
    }
)

window.addEventListener("DOMContentLoaded", () => {
    // Add Functions
});
