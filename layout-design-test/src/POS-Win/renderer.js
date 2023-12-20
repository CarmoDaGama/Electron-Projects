let docType = {
  name: "FACTURA RECIBO",
  sigla: "FR"
}

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
document.getElementById("defaultOpen").click();
iconMenu.click();


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
console.log(clientName);
/* ***************** END CLIENT AREA **************** */


/* ******************* PRODUCTS MENU ******************** */
let productCards = document.querySelectorAll(".productCards .card");
let orderList = document.querySelector(".ordersContainer .ordersList");
orderList.innerHTML = "";
const addProductInList = () => {
  let orderList = document.querySelector(".ordersContainer .ordersList");
  let newOrder = document.createElement("div");
  newOrder.classList.add("order");
  newOrder.innerHTML = `
    <div class="memberUp">
          <div class="info">
              <img src="../assets/img/logo.png" alt="">
              <div class="datails">
                  <label class="description">
                      Product
                  </label>
                  <small class="price">AKZ 20220</small>
              </div>
          </div>
          <input type="text" id="qtd" placeholder="Qtd" value="2">
          <label id="orderTotal">AKZ 40440</label>
      </div>
      <div class="memberDown">
          <input type="text" id="orderNote" placeholder="Nota...">
          <span id="orderRemove"><ion-icon name="trash-outline"></ion-icon></span>
      </div>
  `;
  orderList.appendChild(newOrder);

}
  productCards.forEach((item) => {
    item.addEventListener("click", addProductInList)
    // console.log(item.children[0].querySelector(".details .descriptions"));
    // // item.children[0].children.forEach((nItem) => {
    // //   nItem.addEventListener("click", addProductInList);
    // // })
    // item.children[1].addEventListener("click", addProductInList);
  });
/* ******************* END PRODUCTS MENU ******************** */