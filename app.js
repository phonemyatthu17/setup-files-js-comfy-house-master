// variables

const cartBtn = document.querySelector(".cart-btn");
const closeCart = document.querySelector(".close-cart");
const clearCart = document.querySelector(".clear-cart");
const cartDom = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartContent = document.querySelector(".cart-content");
const cartItem = document.querySelector(".cart-item");
const cartTotal = document.querySelector(".cart-total");
const productsDom = document.querySelector(".products-center");

// cart
let cart = [];

// getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      return result;
    } catch (error) {
      console.log("error");
    }
  }
}

// display design
class UI {}

// local storgae
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  products.getProducts().then((data) => console.log(data));
});
