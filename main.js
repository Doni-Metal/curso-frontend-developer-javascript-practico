const productList = [];
productList.push({
  name: 'Bike',
  price: 120.00,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "Bicicleta para montaña"
})
productList.push({
  name: 'Screen',
  price: 350.00,
  image: "https://images.pexels.com/photos/7948010/pexels-photo-7948010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Excelent TV Screen"
})
productList.push({
  name: 'Computer',
  price: 1500.00,
  image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "The MAC that everyone wants"
})
productList.push({
  name: 'Bike',
  price: 120.00,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "Bicicleta para montaña"
})
productList.push({
  name: 'Screen',
  price: 350.00,
  image: "https://images.pexels.com/photos/7948010/pexels-photo-7948010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "Excelent TV Screen"
})
productList.push({
  name: 'Computer',
  price: 1500.00,
  image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  description: "The MAC that everyone wants"
})

for (product in productList) {
  let name = productList[product].name;
  let price = productList[product].price;
  let image = productList[product].image;

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
  productName.innerText = name;
  
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

const productScreen = document.querySelector('.product-detail')
const closeProduct = document.querySelector(".product-detail-close");

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

  itemImage.setAttribute("src", productList[id].image);
  itemName.innerText = productList[id].name;
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
}