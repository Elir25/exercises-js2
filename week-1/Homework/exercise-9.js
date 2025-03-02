/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105
};
product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
product3 = {
  id: 3,
  name: "phone case",
  price: 11.70,
  stock: 17
};
product4 = {
  id: 4,
  name: "body lotion",
  price: 30.50,
  stock: 5
};


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

/*3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice*/
function addToShoppingCart(id){
    let theseProducts = products.find(item => item.id === id)
    if (theseProducts.stock <= 0) {
      console.log("Can not add this product since it's out of stock");
      return;
    }
    shoppingCart.selectedProducts.push(theseProducts);
    shoppingCart.totalPrice += theseProducts.price;
}

//4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

function removeFromShoppingCart(id){
  let filterOne = shoppingCart.selectedProducts.filter(item => item.id !== id);
  shoppingCart.selectedProducts = filterOne 
  let minusId = products.find(item => item.id === id)
  shoppingCart.totalPrice = shoppingCart.totalPrice - minusId.price;

}

//5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
//In addition will substract 1 in the product stock of bought products

//6. If there is not enough stock, the product cannot be added to the shopping cart
function shop(){
  //Recorrer productos para restar 1 a cada stock de ese products
  shoppingCart.selectedProducts.forEach(p => p.stock = p.stock - 1)
  shoppingCart.totalPrice = 0
  shoppingCart.selectedProducts = []
  
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p=>p.name));

