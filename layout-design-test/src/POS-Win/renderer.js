let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("click", activeLink));

let toggle = document.querySelector(".toggle");
let iconMenu = document.querySelector("span.icon");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".tabHome");
let tabHome = document.querySelector(".tabHome");
let btnPayment = document.querySelector("#btnPayment");

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

  //document.getElementById(pageName).style.display = "grid";
}
btnPayment.addEventListener("click", () => {
  let productsCover = document.querySelector(".cover");
  document.querySelector(".orders").classList.toggle("moveRight");
 
  productsCover.classList.toggle("active"); 
});

document.getElementById("defaultOpen").click();
iconMenu.click();

// Variables
const dropdown = document.querySelector('.dropdown');
const input = document.querySelector('input');
const listOfOptions = document.querySelectorAll('.option');
const body = document.body;

// Functions
const toggleDropdown = (event) => {
  event.stopPropagation();
  dropdown.classList.toggle('opened');
};

const selectOption = (event) => {
  input.value = event.currentTarget.textContent;
};

const closeDropdownFromOutside = () => {
  if (dropdown.classList.contains('opened')) {
    dropdown.classList.remove('opened');
  }
};
// Event Listeners

body.addEventListener('click', closeDropdownFromOutside);

listOfOptions.forEach((option) => {
  option.addEventListener('click', selectOption);
});

dropdown.addEventListener('click', toggleDropdown);

toggleTab = (...elements) => {
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


/*========CALC INPUT===========*/
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