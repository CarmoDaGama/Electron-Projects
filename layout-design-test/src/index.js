const { app, BrowserWindow, Menu, nativeTheme, ipcMain } = require("electron");
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    show: false,
    //frame: false,
  });
  nativeTheme.themeSource = 'light';
  Menu.setApplicationMenu(null);
  mainWindow.loadFile(path.join(__dirname, "Login-Win", 'index.html'));
  mainWindow.maximize();
  mainWindow.show();
  
  ipcMain.handle("login", () => {
    mainWindow.loadFile(path.join(__dirname, "indexMain.html"));
  });
  ipcMain.handle("logout", () => {
    mainWindow.loadFile(path.join(__dirname, "Login-Win", "index.html"));
  });
  ipcMain.handle("intoPos", () => {
    mainWindow.loadFile(path.join(__dirname, "POS-Win", "index.html"));
  });
  ipcMain.handle("backToMainWin", () => {
    mainWindow.loadFile(path.join(__dirname, "indexMain.html"));
  });
  
  
};

const generate = () => {
  // console.log(`echo "${privateKey()}" > ${path.join(__dirname, "pKey.txt")}`);
  // cmd(`echo "${privateKey()}" > ${path.join(__dirname, "pKey.txt")}`);

  cmd(
    '"C:\\Users\\CarmoDaGama\\source\\repos\\KivembaSoft\\SistamaGestaoKSoft23\\InstallerRunnerConfigScript\\bin\\Debug\\InstallerRunnerConfigScript" "listJson.json" "ticket.pdf"'
  );
  //console.log(`PATH: ${path.join(__dirname, "index.html")}`);
};
const cmd = (command) => {
  const { exec } = require("node:child_process");
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready',() => {
  
   createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
