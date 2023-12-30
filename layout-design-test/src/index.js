const { app, BrowserWindow, Menu, nativeTheme, ipcMain } = require("electron");
const path = require('path');
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const pathRunnerUtils = "C:\\Users\\CarmoDaGama\\source\\repos\\KivembaSoft\\SistamaGestaoKSoft23\\InstallerRunnerConfigScript\\bin\\Debug\\InstallerRunnerConfigScript";
require("dotenv").config();
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
    generate(mainWindow);
  });
  ipcMain.handle("backToMainWin", () => {
    mainWindow.loadFile(path.join(__dirname, "indexMain.html"));
  });
  
  
};

const generate =  (window) => {
  console.log('into Generate Method!')
  cmd(
    `"${pathRunnerUtils}" "${path.join(__dirname, "listJson.json")}" "${path.join(__dirname, "ticket.pdf")}"`
  )
    .then((value) => {
      window.loadFile(path.join(__dirname, "ticket.pdf"))
      console.log("End Generate Method!");
    })
    .catch((reason) => {
      console.log("=======ERROR Generate Method!");
      console.log(reason);
    });
  
};
const cmd = async (command) => {
  const { stdout, stderr } = await exec(command);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
};

app.on('ready',() => {
  
   createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

