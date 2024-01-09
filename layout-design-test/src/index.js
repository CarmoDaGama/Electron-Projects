const { app, BrowserWindow, Menu, nativeTheme, ipcMain } = require("electron");
const path = require('path');
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);
const pathRunnerUtils = "C:\\Users\\CarmoDaGama\\source\\repos\\KivembaSoft\\SistamaGestaoKSoft23\\InstallerRunnerConfigScript\\bin\\Debug\\InstallerRunnerConfigScript";
require("dotenv").config();
const fs = require("node:fs");



if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', ()  => {
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
  externLinkEvents(mainWindow);
  mainWindow.webContents.openDevTools();
};
function externLinkEvents(mainWindow) {
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
  ipcMain.handle("getPrinterList", async () => {
    return await getPrinterList();
  });
  ipcMain.handle("backToMainWin", () => {
    mainWindow.loadFile(path.join(__dirname, "indexMain.html"));
  });

  ipcMain.handle("vewDocument", async (event, ...args) => {
    generatePdfDoc(...args);
  });

  ipcMain.handle("printDocument", async (event, ...args) => {
    printPdfDoc(...args);
  });
}
const printPdfDoc = (listproduct) => {
  let jsonFileName = path.join(__dirname, "listJson.json");
  fs.writeFileSync(jsonFileName, JSON.stringify(listproduct));
  let docFirst = listproduct[0].Documento;
  let pdfFileName = path.join(
    __dirname,
    docFirst?.Tipo?.Sigla + docFirst?.NumeroOrdem + "_ticket.pdf"
  );
  cmd(`"${pathRunnerUtils}" -print "${jsonFileName}" "${pdfFileName}"`)
    .then((value) => {
      console.log(`Value: ${value}`);      
    })
    .catch((reason) => {
      console.log(reason);
    });
};

const generatePdfDoc = (listproduct) => {
  let jsonFileName = path.join(__dirname, "listJson.json");
  fs.writeFileSync(jsonFileName, JSON.stringify(listproduct));
  let docFirst = listproduct[0].Documento;
  let pdfFileName = path.join(
    __dirname,
    docFirst?.Tipo?.Sigla + docFirst?.NumeroOrdem + "_ticket.pdf"
  );
  cmd(`"${pathRunnerUtils}" -json-file "${jsonFileName}" "${pdfFileName}"`)
    .then((value) => {
      console.log(`Value: ${value}`);
      if (true) {
        pdfWindow = new BrowserWindow({
          width: 900,
          height: 900,
          webPreferences: {
            //preload: path.join(__dirname, "preload.js"),
          },
          show: false,
          //frame: false,
        });
        pdfWindow.loadFile(pdfFileName);
        pdfWindow.maximize();
        console.log("Showed Report Pdf!");
      } else {
        console.log("Error on Deserializing Object!");
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
};

/**======================= UTILS ============================ */
const commandShell = async (command) => {
  const util = require("node:util");
  const exec = util.promisify(require("node:child_process").exec);
  const { stdout, stderr } = await exec(command);
  return { stderr, stdout };
};

async function getPrinterList() {
  const { stdout, stderr } = await commandShell("wmic printer list brief");
  if (stderr) {
    return;
  }
  var printers = [];

  let vt_stdout = stdout.split("  ");
  j = 0;
  vt_stdout = vt_stdout.filter((item) => item);
  for (i = 0; i < vt_stdout.length; i++) {
    if (vt_stdout[i] == " \r\r\n" || vt_stdout[i] == "\r\r\n") {
      printers[j] = vt_stdout[i + 1];
      j++;
    }
  }
  return printers;
}

const cmd = async (command) => {
  const { stdout, stderr } = await exec(command);
  return stdout;
};
/**======================= END UTILS ============================ */