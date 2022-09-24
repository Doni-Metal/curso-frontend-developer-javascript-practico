const response = await fetch('https://api.escuelajs.co/api/v1/products');
const productList = await response.json();

for (let index in productList) {
  productList[index].id = index;
}
console.log(productList[0].price)
export { productList };
