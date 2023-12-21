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

// import { testAlert } from "../assets/js/myMain.js";
// testAlert("***Carmo Da Gama***");


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
});

btnCancelPayment.addEventListener('click', () => {
  
  let productsCover = document.querySelector(".cover");
  document.querySelector(".orders").classList.toggle("moveRight");
  productsCover.classList.toggle("active");
  
  lblOrdersTitle.innerHTML = lblOrdersSubTitle.innerHTML;
  lblOrdersSubTitle.style.display = "none";
  btnPayment.style.display = "block";
})

btnCashMethod.addEventListener('click', () => {
  if(!btnCashMethod.classList.contains('checked')){
    btnCardMethod.classList.toggle("checked");
    btnCashMethod.classList.toggle("checked");
      document
        .querySelector("#btnCashMethod .check")
        .classList.toggle("active");
      document
        .querySelector("#btnCardMethod .check")
        .classList.toggle("active");
    
  }
  console.log(document.querySelector("#btnCashMethod .check"));
});
btnCardMethod.addEventListener("click", () => {
  if (!btnCardMethod.classList.contains("checked")) {
      btnCashMethod.classList.toggle("checked");
      btnCardMethod.classList.toggle("checked");
      document.querySelector("#btnCashMethod .check").classList.toggle('active');
      document.querySelector("#btnCardMethod .check").classList.toggle('active');
  }
});
/* ******************* END PAYMENT MENU ******************** */


/* ******************* CALC INPUT ******************** */
// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    let nValue = document.getElementById("result").value + value;
    if(isNumeric(nValue)) { 
      document.getElementById("result").value = nValue;
    }
}
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
  console.log(e.key);
}
/* ******************* END CALC INPUT ******************** */

/* ***************** MODAL AREA **************** */
// Get the modal
var modal = $('#modalDialog');

// Get the button that opens the modal
var btn = $("#btnPayment");

// Get the <span> element that closes the modal
var span = $(".close");

$(document).ready(function(){
    // When the user clicks the button, open the modal 
    btn.on('click', function() {
        modal.show();
        clientName.focus();
        clientName.select();
    });
    
    // When the user clicks on <span> (x), close the modal
    span.on('click', function() {
        modal.fadeOut();
    });
});

// When the user clicks anywhere outside of the modal, close it
$('body').bind('click', function(e){
    if($(e.target).hasClass("modal")){
        modal.fadeOut();
    }
});

/* ***************** END MODAL AREA **************** */


/* ***************** CLIENT AREA **************** */
var btnSave = document.querySelector(".btn.btn-primary");

const saveClient = (clName) => {
  let clientDetails = document.querySelector(".clientDetails #result");
  clientDetails.value = clName;
};

btnSave.addEventListener('click', () => {
    saveClient(clientName.value);
    modal.fadeOut();
})

clientName.addEventListener("keypress", (e) => {
  if (e.key === "enter") {
    saveClient(clientName.value);
    modal.fadeOut();
    alert("ttt");
  }
});
/* ***************** END CLIENT AREA **************** */



/* ******************* DOCUMENTS ******************** */
let docType = {
  name: "FACTURA RECIBO",
  acronym: "FR",
};

let currentDocument = null;

const loadDocType = () => {
  docType = {Nome: "FACTURA RECIBO", Sigla: "FR", TipoDocumentoId: 1}
  lblDocTitle.innerHTML = ` ${docType.Nome} #0000 `;
}
const notExistsDocument = () => {
  return currentDocument === null || currentDocument === undefined || currentDocument.DocumentoId == 0;
}
const createCurrentDocument = () => {
  if(notExistsDocument()){
    currentDocument = {
      DocumentoId: 0,
      DataFacturacao: undefined,
      DataVencimento: undefined,
      DataUltimaActualizacao: undefined,
      ClienteId: 1,
      Cliente: {},
      TipoDocumentoId: docType.TipoDocumentoId,
      Tipo: {},
      TurnoId: 1,
      Turno: {},
      EstoqueId: 1,
      Estoque: {},
      Estado: "ABERTO",
      EstadoImpressao: "",
      Descricao: "",
      NomeCliente: "",
      InvoiceNo: "",
      Hash: "",
      Mascara: "",
      Liquidado: false,
      NumeroOrdem: "",
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
      setTotalsInPage();
}

const setTotalsInPage = () => {
  lblTotal.innerHTML = `AKZ ${currentDocument.Total}`;
  lblDiscount.innerHTML = `AKZ ${currentDocument.DescontoTotal}`;
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
        Tipo: "Producto",
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
      ProdutoMovimentacaoId: getTotalLines(),
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
  console.log(ordersFromDatabase);
}

const addProductInList = (productInStock) => {
  addOrderInDatabase(productInStock);
  //loadOrdersFromDatabase();
  let orderList = document.querySelector(".ordersContainer .ordersList");
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
                    <small class="price">AKZ ${order.Preco}</small>
                </div>
            </div>
            <input type="text" id="qtd" placeholder="Qtd" value="${order.Quantidade}">
            <label id="orderTotal">AKZ ${order.Total}</label>
        </div>
        <div class="memberDown">
            <input type="text" id="orderNote" placeholder="Nota...">
            <span id="orderRemove" data-id="${order.ProdutoMovimentacaoId}"><ion-icon name="trash-outline"></ion-icon></span>
        </div>
    `;
    orderList.appendChild(newOrder);
  })

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
}

InitPage();
/* **************** INITIALIZATION AREA *************** */

