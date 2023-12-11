const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 4000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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

const createUser = async (user) => {
  const newUser = await prisma.user.create({ data: user });
  return newUser;
};

const listUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};
const testCRUD = () => {
  
  createUser({
    name: "George Harrison-3",
    email: "george.harrison-3@example.com",
  }).then((val) => console.log(val));

  listUsers().then((val) => console.log(val));
    
}
app.whenReady().then(() => {
  
  ipcMain.handle("ping", () => process.env.PORT);
  ipcMain.handle("createUser", async (event, ...args) => {
    //const result = await somePromise(...args);
    createUser(...args).then((val) => console.log(val));
  });
  ipcMain.handle("listUsers", async () => {
    let result;
    listUsers().then((val) =>  {result = val;});
    return result;
  } );
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
