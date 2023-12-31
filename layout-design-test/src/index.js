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
  
  ipcMain.handle("paymentConfirm", async (event, ...args) => {
    generate(...args);
  });
};
let products = [
  {
    ProdutoMovimentacaoId: 0,
    DocumentoId: 1,
    Documento: {
      DocumentoId: 1,
      ClienteId: 1,
      Cliente: {
        ClienteId: 1,
        Nome: 'Gama',
        Nif: "99999999",
      },
      TipoDocumentoId: 1,
      Tipo: {
        Nome: "FACTURA RECIBO",
        Sigla: "FR",
        TipoDocumentoId: 1,
      },
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: 0,
      Descricao: "",
      NomeCliente: "Gama",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: 1,
      DescontoGlobal: 0,
      Imposto: 8680,
      Retencao: 0,
      TotalIliquido: 53320,
      Total: 140000,
      DescontoTotal: 0,
      QtdLinhas: 4,
    },
    ProdutoEstoqueId: 8,
    ProdutoEstoque: {
      ProductoId: 4,
      Produto: {
        ProdutoId: "4",
        Nome: "Ocolus de Sol",
        CategoriaId: 2,
        Categoria: {
          CategoriaId: 2,
          Nome: "ABC",
        },
        ImpostoId: 1,
        Imposto: {},
        MotivoIsencaoId: 1,
        MotivoIsencao: {},
        Preco: 11000,
        Custo: 0,
        Imagem: null,
        CodigoDeBarra: "01",
        Retencao: 0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 8,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "004",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: "2023-12-31T09:35:37.107Z",
      DataDeExpiracao: "2023-12-31T09:35:37.107Z",
      DataDeRegistro: "2023-12-31T09:35:37.107Z",
      Quantidade: 44,
      UmLote: false,
      Estado: "Activo",
    },
    Preco: 11000,
    Retencao: 0,
    Quantidade: 1,
    Total: 11000,
    Imposto: 1540.0000000000002,
    Desconto: 0,
    TotaIliquido: 9460,
    DescontoPercentagem: 0,
  },
  {
    ProdutoMovimentacaoId: 1,
    DocumentoId: 1,
    Documento: {
      DocumentoId: 1,
      ClienteId: 1,
      Cliente: {
        ClienteId: 1,
        Nome: "Gama",
        Nif: "99999999",
      },
      TipoDocumentoId: 1,
      Tipo: {
        Nome: "FACTURA RECIBO",
        Sigla: "FR",
        TipoDocumentoId: 1,
      },
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: 0,
      Descricao: "",
      NomeCliente: "Gama",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: 1,
      DescontoGlobal: 0,
      Imposto: 8680,
      Retencao: 0,
      TotalIliquido: 53320,
      Total: 140000,
      DescontoTotal: 0,
      QtdLinhas: 4,
    },
    ProdutoEstoqueId: 6,
    ProdutoEstoque: {
      ProductoId: 2,
      Produto: {
        ProdutoId: "2",
        Nome: "Relógio Digital",
        CategoriaId: 2,
        Categoria: {
          CategoriaId: 2,
          Nome: "ABC",
        },
        ImpostoId: 1,
        Imposto: {},
        MotivoIsencaoId: 1,
        MotivoIsencao: {},
        Preco: 7000,
        Custo: 0,
        Imagem: null,
        CodigoDeBarra: "02",
        Retencao: 0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 6,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "002",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: "2023-12-31T09:35:37.107Z",
      DataDeExpiracao: "2023-12-31T09:35:37.107Z",
      DataDeRegistro: "2023-12-31T09:35:37.107Z",
      Quantidade: 95,
      UmLote: false,
      Estado: "Activo",
    },
    Preco: 7000,
    Retencao: 0,
    Quantidade: 2,
    Total: 14000,
    Imposto: 980.0000000000001,
    Desconto: 0,
    TotaIliquido: 6020,
    DescontoPercentagem: 0,
    TotalIliquido: 14000,
  },
  {
    ProdutoMovimentacaoId: 2,
    DocumentoId: 1,
    Documento: {
      DocumentoId: 1,
      ClienteId: 1,
      Cliente: {
        ClienteId: 1,
        Nome: "Gama",
        Nif: "99999999",
      },
      TipoDocumentoId: 1,
      Tipo: {
        Nome: "FACTURA RECIBO",
        Sigla: "FR",
        TipoDocumentoId: 1,
      },
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: 0,
      Descricao: "",
      NomeCliente: "Gama",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: 1,
      DescontoGlobal: 0,
      Imposto: 8680,
      Retencao: 0,
      TotalIliquido: 53320,
      Total: 140000,
      DescontoTotal: 0,
      QtdLinhas: 4,
    },
    ProdutoEstoqueId: 5,
    ProdutoEstoque: {
      ProductoId: 1,
      Produto: {
        ProdutoId: "1",
        Nome: "Sapatilha Nike",
        CategoriaId: 2,
        Categoria: {
          CategoriaId: 2,
          Nome: "ABC",
        },
        ImpostoId: 1,
        Imposto: {},
        MotivoIsencaoId: 1,
        MotivoIsencao: {},
        Preco: 17000,
        Custo: 0,
        Imagem: null,
        CodigoDeBarra: "01",
        Retencao: 0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 5,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: "2023-12-31T09:35:37.107Z",
      DataDeExpiracao: "2023-12-31T09:35:37.107Z",
      DataDeRegistro: "2023-12-31T09:35:37.107Z",
      Quantidade: 69,
      UmLote: false,
      Estado: "Activo",
    },
    Preco: 17000,
    Retencao: 0,
    Quantidade: 2,
    Total: 34000,
    Imposto: 2380,
    Desconto: 0,
    TotaIliquido: 14620,
    DescontoPercentagem: 0,
    TotalIliquido: 34000,
  },
  {
    ProdutoMovimentacaoId: 3,
    DocumentoId: 1,
    Documento: {
      DocumentoId: 1,
      ClienteId: 1,
      Cliente: {
        ClienteId: 1,
        Nome: "Gama",
        Nif: "99999999",
      },
      TipoDocumentoId: 1,
      Tipo: {
        Nome: "FACTURA RECIBO",
        Sigla: "FR",
        TipoDocumentoId: 1,
      },
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: 0,
      Descricao: "",
      NomeCliente: "Gama",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: 1,
      DescontoGlobal: 0,
      Imposto: 8680,
      Retencao: 0,
      TotalIliquido: 53320,
      Total: 140000,
      DescontoTotal: 0,
      QtdLinhas: 4,
    },
    ProdutoEstoqueId: 11,
    ProdutoEstoque: {
      ProductoId: 3,
      Produto: {
        ProdutoId: "3",
        Nome: "Perfume Raffeine",
        CategoriaId: 2,
        Categoria: {
          CategoriaId: 2,
          Nome: "ABC",
        },
        ImpostoId: 1,
        Imposto: {},
        MotivoIsencaoId: 1,
        MotivoIsencao: {},
        Preco: 27000,
        Custo: 0,
        Imagem: null,
        CodigoDeBarra: "01",
        Retencao: 0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 11,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: "2023-12-31T09:35:37.107Z",
      DataDeExpiracao: "2023-12-31T09:35:37.107Z",
      DataDeRegistro: "2023-12-31T09:35:37.107Z",
      Quantidade: 33,
      UmLote: false,
      Estado: "Activo",
    },
    Preco: 27000,
    Retencao: 0,
    Quantidade: 3,
    Total: 81000,
    Imposto: 3780.0000000000005,
    Desconto: 0,
    TotaIliquido: 23220,
    DescontoPercentagem: 0,
    TotalIliquido: 81000,
  },
];
const generate =  (listproduct) => {
  let jsonFileName = path.join(__dirname, "listJson.json");
  fs.writeFileSync(jsonFileName, JSON.stringify(listproduct));
  
  cmd(
    `"${pathRunnerUtils}" -json-file "${jsonFileName}" "${path.join(__dirname, "ticket.pdf")}"`
  )
    .then((value) => {
      console.log(`Value: ${value}`);
      if (true){
        pdfWindow = new BrowserWindow({
          width: 900,
          height: 900,
          webPreferences: {
            //preload: path.join(__dirname, "preload.js"),
          },
          show: false,
          //frame: false,
        });
        pdfWindow.loadFile(path.join(__dirname, "ticket.pdf"));
        pdfWindow.maximize();
        console.log("Showed Report Pdf!");
      }else{
        console.log("Error on Deserializing Object!");        
      }
    })
    .catch((reason) => {
      console.log(reason);
    });
  
};
const cmd = async (command) => {
  const { stdout, stderr } = await exec(command);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
  return stdout;
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

