const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("events", {
  login: () => ipcRenderer.invoke("login"),
  logout: () => ipcRenderer.invoke("logout"),
  intoPos: () => ipcRenderer.invoke("intoPos"),
  backToMainWin: () => ipcRenderer.invoke("backToMainWin"),
});
