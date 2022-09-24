import { productList } from "./products.js";

for (let product in productList) {
  let title = productList[product].title;
  let price = productList[product].price;
  let image = productList[product].images[0];

  const cardsContainer = document.querySelector('.cards-container')

  const productCard = document.createElement('div');
  productCard.setAttribute("id", product)
  productCard.classList.add('product-card')
  productCard.addEventListener("click", openInfoScreen);

  const ProductImg = document.createElement('img');
  ProductImg.setAttribute('src', image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div');
  
  const productPrice = document.createElement('p')
  productPrice.innerText = "$" + price;  
  const productName = document.createElement('p')
  productName.innerText = title;
  
  const productInfoFigure = document.createElement('figure');
  const cartImg = document.createElement('img');
  cartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
  cardsContainer.appendChild(productCard)
  productCard.append(ProductImg, productInfo)
  productInfo.append(productInfoDiv, productInfoFigure);
  productInfoDiv.append(productPrice, productName);
  productInfoFigure.appendChild(cartImg);
}

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menuHamIcon");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const menuCarrito = document.querySelector(".order-detail");
const orderBackArrow= document.querySelector(".order-back-arrow");

const productScreen = document.querySelector('.product-detail')
const closeProduct = document.querySelector(".product-detail-close");

orderBackArrow.addEventListener("click", closeInfoScreen);
navEmail.addEventListener("click", toggleDM);
menuHamIcon.addEventListener("click", toggleMM);
shoppingCart.addEventListener("click", toggleCart);
closeProduct.addEventListener("click", closeInfoScreen);

function toggleDM() {
  if (menuCarrito.classList.contains("inactive") && productScreen.classList.contains("inactive")) {
    desktopMenu.classList.toggle("inactive");
  } else {
    menuCarrito.classList.add("inactive");
    productScreen.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
  }
}

function toggleMM() {
  if (menuCarrito.classList.contains("inactive") && productScreen.classList.contains("inactive")) {
    mobileMenu.classList.toggle("inactive");
  } else {
    menuCarrito.classList.add("inactive");
    productScreen.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
  }
}

function toggleCart() {
  if (desktopMenu.classList.contains("inactive") && mobileMenu.classList.contains("inactive") && productScreen.classList.contains("inactive")) {
    menuCarrito.classList.toggle("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productScreen.classList.add("inactive");
    menuCarrito.classList.toggle("inactive");
  }
}

function openInfoScreen() {
  let id = Number(this.getAttribute("id")); 

  let itemImage = document.querySelector(".itemImg");
  let itemName = document.querySelector(".itemName");
  let itemPrice = document.querySelector(".itemPrice");
  let itemDescription = document.querySelector(".itemDescription");

  itemImage.setAttribute("src", productList[id].images[0]);
  itemName.innerText = productList[id].title;
  itemPrice.innerText = "$" + productList[id].price;
  itemDescription.innerText = productList[id].description;

  if (desktopMenu.classList.contains("inactive") && mobileMenu.classList.contains("inactive") && menuCarrito.classList.contains("inactive")) {
    productScreen.classList.remove("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    menuCarrito.classList.add("inactive");
    productScreen.classList.remove("inactive");
  }
}

function closeInfoScreen() {
  productScreen.classList.add("inactive");
  menuCarrito.classList.add("inactive")
}