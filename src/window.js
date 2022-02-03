const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = () => {
    // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
    return new BrowserWindow({
        width: 1024,
        height: 768,
        icon: path.join(__dirname, "assets/icons/png/64x64.png"),
        // title: 'Gtron View',
        // titleBarStyle: 'hidden',
        //frame: false,
        minWidth: 500,
        minHeight: 700,
        backgroundColor: "#fff",
        webPreferences: {
            nativeWindowOpen: true,
            devTools: true, // false if you want to remove dev tools access for the user
            contextIsolation: true,
            //enableRemoteModule: true, // required for print function [removed since Electron 12, uses https://github.com/electron/remote]
            webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
            preload: path.join(__dirname, "../preload.js"), // required for print function
        },
    });
};
