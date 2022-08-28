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
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log("error");
    }
  }
}

// display design
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `<article class="product">
          <div class="img-container">
            <img
              src="/images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fa-solid fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>400</h4>
        </article>`;
    });
  }
}

// local storgae
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  products.getProducts().then((products) => displayProducts(products));
});
