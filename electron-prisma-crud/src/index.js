const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

require('dotenv').config()
const port = process.env.PORT || 4000; 


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    width: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "index.html"));
  //win.loadURL("https://github.com");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => process.env.PORT);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});