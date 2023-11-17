const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('node:path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

ipcMain.handle('dark-mode:toggle', () => {
  if(nativeTheme.shouldUseDarkColors){
    nativeTheme.themeSource = 'light';
  }else{
    nativeTheme.themeSource = 'dark';
  }
  return nativeTheme.shouldUseDarkColors;
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system';
})

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0){
      createWindow();
    }
  })

  app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
      app.quit();
    }
  })
})