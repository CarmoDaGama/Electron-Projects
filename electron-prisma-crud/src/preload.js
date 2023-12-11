const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  listUsers: () => ipcRenderer.invoke("listUsers"),
  createUser: (user) => ipcRenderer.invoke("createUser", user),
});
