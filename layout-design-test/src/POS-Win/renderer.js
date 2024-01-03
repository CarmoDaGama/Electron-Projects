

 import { MyNumberFormatter } from "../assets/js/myHelpers.js";
 
let listOptionsMenu = document.querySelectorAll(".navigation li");
let toggle = document.querySelector(".toggle");
let iconMenu = document.querySelector("span.icon");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".tabHome");
let tabHome = document.querySelector(".tabHome");
let btnPayment = document.querySelector("#btnPayment");
let btnCancelPayment = document.querySelector(".paymentFooter .cancel");
let btnConfirmPayment = document.querySelector(".paymentFooter .confirmPayment");
let lblOrdersTitle = document.querySelector(".ordersHeader .title");
let lblOrdersSubTitle = document.querySelector(".ordersHeader div .subTitle");
let clientName = document.querySelector("#clientName");
let hereFormatter = new MyNumberFormatter();


/* ******************* NAVIGATION MENU ******************** */
function activeLink() {
  listOptionsMenu.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

listOptionsMenu.forEach((item) => item.addEventListener("click", activeLink));

iconMenu.onclick = () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

function openPage(pageName) {
  var i, tabContent;
  tabContent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
}

const toggleTab = (...elements) => {
  elements.forEach(element => {
    element.classList.toggle("active");
  })
  document.querySelector(".productCards").classList.toggle("disabled");
}

btnCardsTab.addEventListener("click", ()=> {
  toggleTab(btnCardsTab, btnGridTab);
});
btnGridTab.addEventListener("click", () => {
  toggleTab(btnCardsTab, btnGridTab);
});
/* ******************* END NAVIGATION MENU ******************** */


/* ******************* PAYMENT MENU ******************** */
btnPayment.addEventListener("click", () => {

  let productsCover = document.querySelector(".cover");
  document.querySelector(".orders").classList.toggle("moveRight");

  productsCover.classList.toggle("active");
  lblOrdersSubTitle.style.display = "block";
  lblOrdersSubTitle.innerHTML = lblOrdersTitle.innerHTML;
  lblOrdersTitle.innerHTML = "Confirmação";
  btnPayment.style.display = "none";
  setPaymentLabel();
});

const setPaymentLabel = () => {
  inputResul.value = `${hereFormatter.defaultFormat(currentDocument.Total)}`;
}
btnCancelPayment.addEventListener('click', () => {
  
  let productsCover = document.querySelector(".cover");
  document.querySelector(".orders").classList.toggle("moveRight");
  productsCover.classList.toggle("active");
  
  lblOrdersTitle.innerHTML = lblOrdersSubTitle.innerHTML;
  lblOrdersSubTitle.style.display = "none";
  btnPayment.style.display = "block";
})
 function verifyPaymentMethodSelected() {
  if(!btnCardMethod.classList.contains("checked") && 
     !btnCashMethod.classList.contains("checked"))
  {
    myModalAlert("Selecione um metodo de pagamento!");
    return false;
  } else {
    return true;
  }
}
btnConfirmPayment.addEventListener("click", async () => {
  if (verifyPaymentMethodSelected()) {
    myModalAlert("Success!");
    toNullImg(ordersFromDatabase);
    await events.paymentConfirm(ordersFromDatabase);
    clearOperation();
    // console.log(currentDocument);
    // console.log((ordersFromDatabase));
    // console.log(JSON.stringify(ordersFromDatabase));
  }
});
function toNullImg(products){
  products.forEach(p => {
    p.ProdutoEstoque.Produto.Imagem = null;
  })
}
/** [{"ProdutoMovimentacaoId":0,"DocumentoId":1,"Documento":{"DocumentoId":1,"ClienteId":1,"Cliente":{"ClienteId":1,"Nome":"Gama"},"TipoDocumentoId":1,"Tipo":{},"TurnoId":1,"Turno":{},"EstoqueId":1,"Estoque":{},"Estado":"ABERTO","EstadoImpressao":"1","Descricao":"","NomeCliente":"Gama","InvoiceNo":"","Hash":"","Mascara":"","Liquidado":false,"NumeroOrdem":1,"DescontoGlobal":0,"Imposto":3360,"Retencao":0,"TotalIliquido":20640,"Total":48000,"DescontoTotal":0,"QtdLinhas":2},"ProdutoEstoqueId":1,"ProdutoEstoque":{"ProdutoEstoqueId":1,"ProductoId":1,"Produto":{"ProdutoId":"1","Nome":"Sapatilha Nike","CategoriaId":2,"Categoria":{"CategoriaId":2,"Nome":"ABC"},"ImpostoId":1,"Imposto":{},"MotivoIsencaoId":1,"MotivoIsencao":{},"Preco":17000,"Custo":0,"Imagem":"../assets/img/product-1.png","CodigoDeBarra":"01","Retencao":0,"ControleEstoque":true,"Vender":true,"Estado":"Activo","Tipo":"Producto"},"EstoqueId":1,"Estoque":{},"NumeroDeSerie":"001","QuantidadeMaxima":100,"QuantidadeMinima":0,"DataDeFabricacao":"2023-12-22T13:14:29.566Z","DataDeExpiracao":"2023-12-22T13:14:29.566Z","DataDeRegistro":"2023-12-22T13:14:29.566Z","Quantidade":69,"UmLote":false,"Estado":"Activo"},"Preco":17000,"Retencao":0,"Quantidade":2,"Total":34000,"Imposto":2380,"Desconto":0,"TotaIliquido":14620,"DescontoPercentagem":0,"TotalIliquido":34000},{"ProdutoMovimentacaoId":1,"DocumentoId":1,"Documento":{"DocumentoId":1,"ClienteId":1,"Cliente":{"ClienteId":1,"Nome":"Gama"},"TipoDocumentoId":1,"Tipo":{},"TurnoId":1,"Turno":{},"EstoqueId":1,"Estoque":{},"Estado":"ABERTO","EstadoImpressao":"","Descricao":"","NomeCliente":"Gama","InvoiceNo":"","Hash":"","Mascara":"","Liquidado":false,"NumeroOrdem":1,"DescontoGlobal":0,"Imposto":3360,"Retencao":0,"TotalIliquido":20640,"Total":48000,"DescontoTotal":0,"QtdLinhas":2},"ProdutoEstoqueId":2,"ProdutoEstoque":{"ProductoId":2,"Produto":{"ProdutoId":"2","Nome":"Relógio Digital","CategoriaId":2,"Categoria":{"CategoriaId":2,"Nome":"ABC"},"ImpostoId":1,"Imposto":{},"MotivoIsencaoId":1,"MotivoIsencao":{},"Preco":7000,"Custo":0,"Imagem":"../assets/img/product-2.png","CodigoDeBarra":"02","Retencao":0,"ControleEstoque":true,"Vender":true,"Estado":"Activo","Tipo":"Producto"},"ProdutoEstoqueId":2,"EstoqueId":1,"Estoque":{},"NumeroDeSerie":"002","QuantidadeMaxima":100,"QuantidadeMinima":0,"DataDeFabricacao":"2023-12-22T13:14:29.566Z","DataDeExpiracao":"2023-12-22T13:14:29.566Z","DataDeRegistro":"2023-12-22T13:14:29.566Z","Quantidade":95,"UmLote":false,"Estado":"Activo"},"Preco":7000,"Retencao":0,"Quantidade":2,"Total":14000,"Imposto":980.0000000000001,"Desconto":0,"TotaIliquido":6020,"DescontoPercentagem":0,"TotalIliquido":14000}] */
btnCashMethod.addEventListener('click', () => {
  btnCardMethod.classList.remove("checked");
  btnCashMethod.classList.add("checked");
  document.querySelector("#btnCardMethod .check").classList.remove("active");
  document.querySelector("#btnCashMethod .check").classList.add("active");
});

btnCardMethod.addEventListener("click", () => {
  btnCashMethod.classList.remove("checked");
  btnCardMethod.classList.add("checked");
  document.querySelector("#btnCashMethod .check").classList.remove('active');
  document.querySelector("#btnCardMethod .check").classList.add('active');
});
/* ******************* END PAYMENT MENU ******************** */


/* ******************* CALC INPUT ******************** */
// This function clears all the values
const clearScreen = () => {
    document.getElementById("result").value = "";
}
btnClear.addEventListener("click", clearScreen);
let listInputsCalc = document.querySelectorAll("table tbody tr td input");
listInputsCalc.forEach(inputCalc => {
  if(inputCalc.id === ''){
    inputCalc.addEventListener("click", () => { display(inputCalc.value) });
  }
})
// This function displays the values


let objRegExp = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
var isNumeric = function (val, decimals) {
  // decimals is not used yet
  return objRegExp.test(val);
};
let inputResul = document.getElementById("result");
//inputResul.addEventListener("keyup", logKey);

function logKey(e) {
   let nValue = document.getElementById("result").value + e.key;
   if (!isNumeric(nValue)) {
     inputResul.value = inputResul.value.slice(inputResul.value.length, 1);
   }
  //console.log(e.key);
}
function display(value) {
    let nValue = document.getElementById("result").value + value;
    if(isNumeric(nValue)) { 
      document.getElementById("result").value = nValue;
    }
}
/* ******************* END CALC INPUT ******************** */

/* ***************** MODAL AREA **************** */
// Get the modal
var modal = $('#modalDialog');
var modalMsg = $("#modalDialogMsg");
var modalPrint = $("#modalDialogPrint");

// Get the button that opens the modal
var btn = $("#btnPayment");

// Get the <span> element that closes the modal
var span = $(".close");

$(document).ready(function(){
    modalPrint.show();
    // When the user clicks the button, open the modal 
    btn.on('click', function() {
        modal.show();
        clientName.focus();
        clientName.select();
    });
    
    // When the user clicks on <span> (x), close the modal
    span.on('click', function() {
        modal.fadeOut();
        modalMsg.fadeOut();
    });
});

// When the user clicks anywhere outside of the modal, close it
$('body').bind('click', function(e){
    if($(e.target).hasClass("modal")){
        modal.fadeOut();
    }
});
msgOk.addEventListener('click', () => {  
        modalMsg.fadeOut();
})
function myModalAlert(msg){
  
    lblMsg.innerHTML = `<h4>${msg}</h4>`;
    modalMsg.show();
    console.log(lblMsg);
}
/* ***************** END MODAL AREA **************** */


/* ***************** CLIENT AREA **************** */
var btnSave = document.querySelector(".btn.btn-primary");

const saveClient = (clName) => {
  let clientDetails = document.querySelector(".clientDetails #result");
  clientDetails.value = clName;
  currentDocument.NomeCliente = clName;
  currentDocument.Cliente.ClienteId = 1,
  currentDocument.Cliente.Nome = clName;
  currentDocument.Cliente.Nif = "99999999";
};

btnSave.addEventListener('click', () => {
    saveClient(clientName.value);
    modal.fadeOut();
})

clientName.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    saveClient(clientName.value);
    modal.fadeOut();
  }
});
/* ***************** END CLIENT AREA **************** */



/* ******************* DOCUMENTS ******************** */
let docType = {
  Nome: "FACTURA RECIBO",
  Sigla: "FR",
};

let currentDocument = null;

const loadDocType = () => {
  docType = {Nome: "FACTURA RECIBO", Sigla: "FR", TipoDocumentoId: 1}
  setLabelsInPage();
}
const notExistsDocument = () => {
  return currentDocument === null || currentDocument === undefined || currentDocument.DocumentoId == 0;
}
const createCurrentDocument = () => {
  if(notExistsDocument()){
    currentDocument = {
      DocumentoId: 1,
      DataFacturacao: undefined,
      DataVencimento: undefined,
      DataUltimaActualizacao: undefined,
      ClienteId: 1,
      Cliente: {},
      TipoDocumentoId: docType.TipoDocumentoId,
      Tipo: docType,
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: 0,
      Descricao: "",
      NomeCliente: "",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: 1,
      DescontoGlobal: 0,
      Imposto: getTotalTax(),
      Retencao: getTotalRetention(),
      TotalIliquido: getTotalNetTotal(),
      Total: getGrossTotal(),
      DescontoTotal: getTotalDiscount(),
      QtdLinhas: getTotalLines(),
    };
  }
}
const updateCurrentDocument = () => {  
  currentDocument.Imposto = getTotalTax();
  currentDocument.Retencao = getTotalRetention();
  currentDocument.TotalIliquido= getTotalNetTotal();
  currentDocument.Total = getGrossTotal();
  currentDocument.DescontoTotal = getTotalDiscount();
  currentDocument.QtdLinhas = getTotalLines();
  setLabelsInPage();
  setPaymentLabel();
}

const setLabelsInPage = () => {
  if(!notExistsDocument()){
    lblTotal.innerHTML = `AKZ ${hereFormatter.defaultFormat(currentDocument.Total)}`;
    lblDiscount.innerHTML = `AKZ ${hereFormatter.defaultFormat(currentDocument.DescontoTotal)}`;
    lblDocTitle.innerHTML = `
    ${docType.Nome} 
    #${new Intl.NumberFormat("pt-PT", {
      minimumIntegerDigits: 3,
      minimumFractionDigits: 0,
    }).format(currentDocument.NumeroOrdem)} `;
  }

  //minimumIntegerDigits
}
const loadOpennedDocument = () => {
  loadDocType();
}

/* ******************* END DOCUMENTS ******************** */



/* ******************* PRODUCTS ******************** */
let listProductsCard = document.querySelector(".productCards")
let productFromDatabase = [];
const loadProductFromDatabase = () => {
  /** */
  productFromDatabase = [
    {
      ProdutoEstoqueId: 1,
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
        Preco: 17000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-1.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 69,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 7000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-2.png",
        CodigoDeBarra: "02",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 2,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "002",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 95,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 27000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-3.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 3,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 33,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 11000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-4.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 4,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "004",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 44,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 17000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-1.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
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
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 69,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 7000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-2.png",
        CodigoDeBarra: "02",
        Retencao: 0.0,
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
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 95,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 27000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-3.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 7,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 33,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 11000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-4.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
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
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 44,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 17000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-1.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 9,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "001",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 69,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 7000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-2.png",
        CodigoDeBarra: "02",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 10,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "002",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 95,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 27000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-3.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
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
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 33,
      UmLote: false,
      Estado: "Activo",
    },
    {
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
        Preco: 11000.0,
        Custo: 0.0,
        Imagem: "../assets/img/product-4.png",
        CodigoDeBarra: "01",
        Retencao: 0.0,
        ControleEstoque: true,
        Vender: true,
        Estado: "Activo",
        Tipo: 0,
      },
      ProdutoEstoqueId: 12,
      EstoqueId: 1,
      Estoque: {},
      NumeroDeSerie: "004",
      QuantidadeMaxima: 100,
      QuantidadeMinima: 0,
      DataDeFabricacao: new Date(),
      DataDeExpiracao: new Date(),
      DataDeRegistro: new Date(),
      Quantidade: 44,
      UmLote: false,
      Estado: "Activo",
    },
  ];
};
const noSearch = (search) =>{
  return search === '' || search === null || search === undefined;
}
const loadProductsInPage = (search) => {
  loadProductFromDatabase();
  listProductsCard.innerHTML = '';
  
    productFromDatabase.forEach((product) => {
      if (noSearch(search) || product.Produto.Nome.toLowerCase().includes(search.toLowerCase())) {
        let newProductCard = document.createElement("div");
        newProductCard.classList.add("card");
        newProductCard.dataset.id = product.ProdutoEstoqueId;
        newProductCard.innerHTML = `
          <div class="details">
            <label class="descriptions">${product.Produto.Nome}</label>
            <label class="price">AKZ ${product.Produto.Preco}</label>
            <small>${product.Quantidade} produtos disponiveis</small>
          </div>
          <img src="${product.Produto.Imagem}" alt="">
        `;

        listProductsCard.appendChild(newProductCard);
      }
    });
  let allCards = document.querySelectorAll(".productCards .card");
  
  allCards.forEach((item) => {
    item.addEventListener(
      "click",
      () => {
        addProductInList(getProdutStockInPageById(item.dataset.id))
        if(orderList.children.length > 0 && btnPayment.disabled){
          btnPayment.disabled = false;
        }
      }
    );
  });
}

const getProdutStockInPageById = (produtoEstoqueId) => {
  let result = null;
  productFromDatabase.forEach(product => {
    if(product.ProdutoEstoqueId == produtoEstoqueId){
      result = product;
      return;
    }
  });

  return result;
}
productSearch.addEventListener('keyup', (e) => {
  loadProductsInPage(productSearch.value);
});

/* ******************* END PRODUCTS ******************** */



/* ******************* ORDERS ******************** */
let ordersFromDatabase = [];
let orderList = document.querySelector(".ordersContainer .ordersList");

const loadOrdersFromDatabase = () => {
  ordersFromDatabase = [
    {      
        ProdutoMovimentacaoId: 1,
        DocumentoId:1,
        Documento: currentDocument,
        ProdutoEstoqueId:1,
        ProdutoEstoque:{},
        Preco: 1900.0,
        Retencao: 0.0,
        Quantidade: 1,
        Total: 1900,
        Imposto: 14,
        Desconto: 0.0,
        TotaIliquido: 1900 - (1900*0.14),
        DescontoPercentagem: 0,
    }
  ];
}

const getTotalTax = () => {
  let totalTax = 0.0;
  ordersFromDatabase.forEach((order) => {
    totalTax += order.Imposto;
  })
  return totalTax;
}
const getTotalRetention = () => {
  let totalR = 0.0;
  ordersFromDatabase.forEach((order) => {
    totalR += order.Retencao;
  })
  return totalR;
}
const getTotalNetTotal  = () => {
  let totalNet = 0.0;
  ordersFromDatabase.forEach((order) => {
    totalNet += order.TotaIliquido;
  })
  return totalNet;
}
const getGrossTotal = () => {
  let total = 0.0;
  ordersFromDatabase.forEach((order) => {
    total += order.Total;
  })
  return total;
}
const getTotalDiscount  = () => {
  let totalD = 0.0;
  ordersFromDatabase.forEach((order) => {
    totalD += order.Desconto;
  })
  return totalD;
}
const getTotalLines = () => {
  let totalLine = 0.0;
  ordersFromDatabase.forEach((order) => {
    totalLine += 1;
  });
  return totalLine;
};
const orderFromDatabaseContains = (productoId) => {
  let existedOrder = null;
  ordersFromDatabase.forEach((order) => {
    if(order.ProdutoEstoque.ProductoId == productoId){
      existedOrder = order;
      return;
    }
  });
  return existedOrder;
}
const addOrderInDatabase = (productInStock) => {
  createCurrentDocument();
  let existedOrder = orderFromDatabaseContains(productInStock.ProductoId);
  
  if (existedOrder === null || existedOrder === undefined) {
    let newOrder = {
      ProdutoMovimentacaoId: getTotalLines() + 1,
      DocumentoId: currentDocument.DocumentoId,
      Documento: currentDocument,
      ProdutoEstoqueId: productInStock.ProdutoEstoqueId,
      ProdutoEstoque: productInStock,
      Preco: productInStock.Produto.Preco,
      Retencao: 0.0,
      Quantidade: 1,
      Total: productInStock.Produto.Preco,
      Imposto: 0.14 * productInStock.Produto.Preco,
      Desconto: 0.0,
      TotaIliquido:
        productInStock.Produto.Preco - productInStock.Produto.Preco * 0.14,
      DescontoPercentagem: 0,
    };
    ordersFromDatabase.push(newOrder);
  } else {
    existedOrder.Quantidade++;
    existedOrder.TotalIliquido =
      productInStock.Produto.Preco * existedOrder.Quantidade;
    existedOrder.Total = productInStock.Produto.Preco * existedOrder.Quantidade;
  }
  updateCurrentDocument();
}

const addProductInList = (productInStock) => {
  addOrderInDatabase(productInStock);
  //loadOrdersFromDatabase();
  loadOrderList();

}
function loadOrderList(){
   orderList.innerHTML = "";
   ordersFromDatabase.forEach((order) => {
     let newOrder = document.createElement("div");
     newOrder.classList.add("order");
     newOrder.dataset.id = order.ProdutoMovimentacaoId;
     newOrder.innerHTML = `
      <div class="memberUp">
          <div class="info">
              <img src="${order.ProdutoEstoque.Produto.Imagem}" alt="">
              <div class="datails">
                  <label class="description">
                      ${order.ProdutoEstoque.Produto.Nome}
                  </label>
                  <small class="price">AKZ 20220</small>
              </div>
          </div>
          <label id="orderTotal">AKZ ${order.Preco}</label>
          <div class="quantity">
              <span class="minus">&lt;</span>
              <span>${order.Quantidade}</span>
              <span class="plus">&gt;</span>
          </div>
          <span id="orderRemove"><ion-icon name="trash-outline" data-id="${order.ProdutoMovimentacaoId}"></ion-icon></span>
      </div>
    `;
    
     orderList.appendChild(newOrder);
     let orderToRemve = newOrder.children[0].children[3]; 
     let decreaseQtd = newOrder.children[0].children[2].children[0];
     let elementQtd = newOrder.children[0].children[2].children[1];
     let increaseQtd = newOrder.children[0].children[2].children[2];

     orderToRemve.addEventListener("click", () => {
         removeOrder(newOrder.dataset.id);
     });
     decreaseQtd.addEventListener("click", () => {
         decreaseOrder(newOrder.dataset.id);
     });
     increaseQtd.addEventListener("click", () => {
       increaseOrder(newOrder.dataset.id);
     });
  });
   updateCurrentDocument();
}
function removeOrder(produtoMovimentacaoId){
  let orderToRemove = ordersFromDatabase.findIndex((value) => value.ProdutoMovimentacaoId == produtoMovimentacaoId);
  
  let newOrdersFromDatabase = [];
  ordersFromDatabase.forEach((order) => {
    if (order.ProdutoMovimentacaoId != produtoMovimentacaoId) {
      newOrdersFromDatabase.push(order);
    }
  });
  ordersFromDatabase = null;
  ordersFromDatabase = newOrdersFromDatabase;
  loadOrderList();
}
function decreaseOrder(produtoMovimentacaoId) {
  ordersFromDatabase.forEach((order) => {
    if (order.ProdutoMovimentacaoId == produtoMovimentacaoId) {
      order.Quantidade--;
      order.Total = calcTotalOrder(order);
      if(order.Quantidade == 0){
        removeOrder(produtoMovimentacaoId);
      }
      console.log(ordersFromDatabase);
    }
  });
  
  loadOrderList();
}
function increaseOrder(produtoMovimentacaoId) {
  ordersFromDatabase.forEach((order) => {
    if (order.ProdutoMovimentacaoId == produtoMovimentacaoId) {
      order.Quantidade++;
      order.Total = calcTotalOrder(order);
      console.log(ordersFromDatabase);
    }
  });
  
  loadOrderList();
}
function calcTotalOrder(order){
  return order.Preco * order.Quantidade;
}
/* ******************* END ORDERS ******************** */


/* **************** INITIALIZATION AREA *************** */

const InitPage = () =>{
  document.getElementById("defaultOpen").click();
  iconMenu.click();
  currentDate.innerHTML = new Date().toDateString();
  orderList.innerHTML = "";
  loadOpennedDocument();
  loadProductsInPage();
  btnPayment.disabled = true;
}
function clearOperation(){
  orderList.innerHTML = "";
  ordersFromDatabase = [];
  currentDocument = null;
  setLabelsInPage();
  inputResul.value= `${hereFormatter.defaultFormat(0)}`;
}
InitPage();
/* **************** INITIALIZATION AREA *************** */

