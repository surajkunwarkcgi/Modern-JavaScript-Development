//importing module
// import { addToCart, shippingCost as cost } from './shoppingCart.js';
// console.log('import');
// addToCart('bread', 6);

import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.shippingCost);
