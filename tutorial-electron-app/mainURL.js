const { app, BrowserWindow } = require("electron");

const win = new BrowserWindow({ width: 800, height: 1500 });
win.loadURL("https://github.com");

const contents = win.webContents;
console.log(contents);


// quitting the app when no windows are open on non-macOS platforms
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})