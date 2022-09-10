const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Screen',
  price: 350,
  image: "https://images.pexels.com/photos/7948010/pexels-photo-7948010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: 'Computer',
  price: 1500,
  image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Screen',
  price: 350,
  image: "https://images.pexels.com/photos/7948010/pexels-photo-7948010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: 'Computer',
  price: 1500,
  image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: 'Screen',
  price: 350,
  image: "https://images.pexels.com/photos/7948010/pexels-photo-7948010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: 'Computer',
  price: 1500,
  image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})


for (product of productList) {
  const cardsContainer = document.querySelector('.cards-container')

  const productCard = document.createElement('div');
  productCard.classList.add('product-card')

  const ProductImg = document.createElement('img');
  ProductImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div');
  
  const productPrice = document.createElement('p')
  productPrice.innerText = "$" + product.price;  
  const productName = document.createElement('p')
  productName.innerText = product.name;
  
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

const itemCard = document.querySelector('.product-card')
const productScreen = document.querySelector('.product-detail')

navEmail.addEventListener("click", toggleDM);
menuHamIcon.addEventListener("click", toggleMM);
shoppingCart.addEventListener("click", toggleCart);
itemCard.addEventListener("click", toggleInfoScreen);

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

function toggleInfoScreen() {
  if (desktopMenu.classList.contains("inactive") && mobileMenu.classList.contains("inactive") && menuCarrito.classList.contains("inactive")) {
    productScreen.classList.toggle("inactive");
  } else {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    menuCarrito.classList.add("inactive");
    productScreen.classList.toggle("inactive");
  }
}