const {remote} = require('electron');
const main = remote.require('./main')

const productForm = document.querySelector('#productForm');
const productsList = document.querySelector("#products");
const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const productDescription = document.querySelector("#description");
let products = [];

productForm.addEventListener('submit', async (e) => {
    try {
        e.preventDefault();
        const product = {
            name: productName.value,
            price: productPrice.value,
            description: productDescription.value
        }
        const savedProduct = await main.createProduct(product);
        console.log(savedProduct);

        productForm.reset();
        productName.focus();
    } catch (error) {
        console.log(error);
    }
} )