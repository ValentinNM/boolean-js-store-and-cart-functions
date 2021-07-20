const store = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

const appleStore = {
  location: "London",
  products: [
    {
      name: "iPhone 6S",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 450
      },
      price: 600
    },
    {
      name: "iPhone 10",
      type: "mobile",
      stock: {
        incomingDelivery: false,
        quantity: 20
      },
      price: 1000
    },
    {
      name: "iPhone 12",
      type: "mobile",
      stock: {
        incomingDelivery: true,
        quantity: 0
      },
      price: 1400
    },
    {
      name: "iPad Pro",
      type: "tablet",
      stock: {
        incomingDelivery: true,
        quantity: 100
      },
      price: 600
    },
    {
      name: "iPad mini",
      type: "tablet",
      stock: {
        incomingDelivery: false,
        quantity: 300
      },
      price: 600
    },
    {
      name: "MacBook Pro",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 80
      },
      price: 2400
    },
    {
      name: "MacBook Air",
      type: "computer",
      stock: {
        incomingDelivery: false,
        quantity: 200
      },
      price: 1800
    },
    {
      name: "iMac",
      type: "computer",
      stock: {
        incomingDelivery: true,
        quantity: 15
      },
      price: 2300
    }
  ]
};

const jeepStore = {
  location: "London",
  products: [
    {
      name: "Roof Rack",
      type: "accessory",
      stock: {
        incomingDelivery: false,
        stock: 350
      },
      price: 3500
    },
    {
      name: "Spare Tyre",
      type: "accessory",
      stock: {
        incomingDelivery: true,
        stock: 100
      },
      price: 800
    },
    {
      name: "Jeep Wrangler Unlimited Polar",
      type: "car",
      stock: {
        incomingDelivery: true,
        stock: 40
      },
      price: 37500
    },
    {
      name: "Jeep Wrangler Unlimited Dragon",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 120
      },
      price: 69000
    },
    {
      name: "Jeep Grand Cherokee",
      type: "car",
      stock: {
        incomingDelivery: false,
        stock: 250
      },
      price: 52000
    }
  ]
};

// Each section needs it's own for loop
// DO NOT change any of the code
//
// For sections with "A list of..." the output should be an array full of objects
// Output:
// => [{...}, {...}, {...}]
//
// For sections with "An object..." the output should be an object
// Output:
// => {...}

// STORE EXERCISES

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost more than £1000

const products = store.products; // global scope var
const filteredExpensiveProducts = [];

function filterExpensiveProducts(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const price = product.price;

    if (price > 1000) {
      filteredExpensiveProducts.push(product);
    }
  }
  return filteredExpensiveProducts;
}

// Example of what it should look like:
const expensiveProducts = filterExpensiveProducts(products);

console.log("expensiveProducts: ", expensiveProducts);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that cost less than £1000

// const cheapProducts = function();

// console.log("cheapProducts: ", cheapProducts);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have an incoming delivery

// const productsThatNeedToBeReceived = ;

// function findIncomingDeliveries(products) {
//   console.log("inside findIncomingDeliveries: ", products);
//   let incomingDeliveries = [];
//   for (let i = 0; i < products.length; i++) {
//     const product = products[i];
//     const incomingDeliveryStatus = products.stock.incomingDelivery;
//     // if (incomingDeliveryStatus == true) {
//     //   incomingDeliveries.push(products);
//     //   console.log("incomingDeliveries inside if: ", incomingDeliveries);
//     // }
//   }
//   console.log("incomingDeliveries: ", incomingDeliveries);
//   return incomingDeliveries;
// }

// const productsThatNeedToBeReceived = findIncomingDeliveries(products);
// console.log("productsThatNeedToBeReceived: ", productsThatNeedToBeReceived);

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that are out of stock

// const outOfStockProducts = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products that have a quantity that is less than 100 and have no incoming delivery

// const productsThatNeedToBeOrdered = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "tablet"

// const tablets = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of products of the type "computer"

// const computers = function();

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iMac"

// const iMac = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPhone 12"

// const iPhone12 = function();

// ----- Section -----

// Write a function here...
// - that takes an array as a parameter
// - returns an object that represents an "iPad Mini"

// function findIpadMini() {
//   console.log("Inside findIpadMini: ", array);
// }

// const iPadMini = findIpadMini([]);

// ----- CHALLENGE -----

// Write a function here...
// - that takes an array as a parameter
// - returns an array of unique product types
//    => ["mobile", "computer", "tablet"]

// const productTypes = function();

// CART EXERCISES

const cart = [
  {
    product: {
      name: "iPhone 12",
      type: "mobile",
      price: 1400
    },
    quantity: 4
  },
  {
    product: {
      name: "iPad mini",
      type: "tablet",
      price: 600
    },
    quantity: 2
  },
  {
    product: {
      name: "MacBook Air",
      type: "computer",
      price: 1800
    },
    quantity: 2
  },
  {
    product: {
      name: "iMac",
      type: "computer",
      price: 2300
    },
    quantity: 2
  }
];

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the total price of the items in the cart

// const totalPrice = function()

// const product = cart.product;      /// to ask Steven !!!
// console.log("display product: ", product);

function totalPrice(cart) {
  let totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i].product;
    const quantity = cart[i].quantity;
    const price = item.price * quantity;

    totalAmount = totalAmount + price;
  }
  return totalAmount;
}

const displayTotalPrice = totalPrice(cart);
console.log("this is the displayTotalPrice in £: ", displayTotalPrice);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a number that rerpresents the quantity of the items in the cart

// const quantityOfItemsInCart = function()

function quantityOfItemsInCart(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const quantity = item.quantity;

    total = total + quantity;
  }
  return total;
}

const totalQuantInCart = quantityOfItemsInCart(cart);
console.log("this is totalQuantInCart: ", totalQuantInCart);

// ----- Section ----- **

// Write a function here...
// - that takes an object as a parameter
// - returns a string of the information about a product in the cart
//      => "iPhone 12 | Mobile - £1400 x 2 || £2800"

// let userInput = prompt("Please chose one out of the 4 items");
// userInput = userInput - 1;

function receiptRow(item) {
  // console.log("this are the items in ReceiptRow: ", item);
  const name = item.product.name;
  const type = item.product.type;
  const price = item.product.price;
  const quant = item.quantity;
  const quantity = item.quantity * price;
  const quantityPerCategoryPrice = `${type} - £${price} x ${quant}`;
  const row = `${name} | ${quantityPerCategoryPrice} | ${quantity}`;
  return row;
}

const showreceiptRow = receiptRow(cart[0]);
console.log("this is showreceiptRow: ", showreceiptRow);
// alert(showreceiptRow);

// ----- Section ----- **

// Write a function here...
// - that takes an array as a parameter
// - returns a string with the variosu rows on the reciept
// TIP: Re-use the above function for "receiptRow"

// const receiptMessage = function()
function receiptMessage(cart) {
  for (let i = 0; i < cart.length; i++) {
    console.log("Iteneration # ", i + 1);
    const showreceiptRow = receiptRow(cart[i]);
    const individualItemDescribed = showreceiptRow;
    // individualItemDescribed = ` ${showreceiptRow} \n`;
    console.log("showreceiptRow inside for:  ", showreceiptRow);
  }
  return showreceiptRow;
}
// console.log("what:", showreceiptRow);

const printedreceiptMessage = receiptMessage(cart);
console.log("receiptMessage: ", printedreceiptMessage);
