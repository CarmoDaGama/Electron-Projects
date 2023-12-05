const { BrowserWindow } = require("electron");
const { getConnection } = require("./ui/database");

let window;

const createProduct = async (product) => {
  try {
    const conn = await getConnection();
    product.price = parseFloat(product.price);
    const result = await conn.query("INSERT INTO product SET ?", product);
    product.id = result.insertId;
    new Notification({
      title: "Electron Mysql",
      body: "New Product Saved successfully",
    }).show();

    return product;
  } catch (error) {
    console.log(error);
  }
};
function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  window.loadFile("src/ui/index.html");
}

module.exports = {
  createWindow,
  createProduct,
};
