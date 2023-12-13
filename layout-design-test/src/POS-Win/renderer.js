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
  let productCards = document.querySelector(".productCards");
  productCards.classList.toggle("disabled");
  tabHome.classList.toggle("togglePayment");
})
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
}

btnCardsTab.addEventListener("click", ()=> {
  toggleTab(btnCardsTab, btnGridTab);
});
btnGridTab.addEventListener("click", () => {
  toggleTab(btnCardsTab, btnGridTab);
});