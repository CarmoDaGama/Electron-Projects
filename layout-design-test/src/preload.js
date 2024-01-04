const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("events", {
  login: () => ipcRenderer.invoke("login"),
  logout: () => ipcRenderer.invoke("logout"),
  intoPos: () => ipcRenderer.invoke("intoPos"),
  backToMainWin: () => ipcRenderer.invoke("backToMainWin"),
  getPrinterList: () => ipcRenderer.invoke("getPrinterList"),
  vewDocument: (products) => ipcRenderer.invoke("vewDocument", products),
  printDocument: (products) => ipcRenderer.invoke("printDocument", products),
});
