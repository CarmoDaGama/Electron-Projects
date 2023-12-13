const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 4000;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createWindow = () => {
  const win = new BrowserWindow({
    width: 900,
    width: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });


  win.loadFile(path.join(__dirname, "index.html"));
  //win.loadURL("https://github.com");
  generate();
};

  function privateKey(){
    return ``;
  }
const generate = () => {
  console.log(`echo "${privateKey()}" > ${path.join(__dirname, "pKey.txt")}`);
  cmd(`echo "${privateKey()}" > ${path.join(__dirname, "pKey.txt")}`);
}
const cmd = ( command) => {
  const { exec } = require("node:child_process");
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
}
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
     return await createUser(...args);
    //.then((val) => console.log(val));
  });
  ipcMain.handle("listUsers", async () => {
    const result = await listUsers();    
    return result;
  });
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
