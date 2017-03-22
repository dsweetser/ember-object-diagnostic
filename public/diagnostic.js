/// Ember Object Diagnostic ///

// Use Ember Objects and Classes to represent a shopping cart!
// Your abstractions will be `Cart` and `Order`.
//
// An Order should have
//  -  a unit price
//  -  a quantity
//  -  a computed property called `orderPrice`, equal to price times quantity
//
// A Cart should have
//  -  an `addToCart` method, which adds a given Item to an array
//      called `orders` (HINT: You'll probably need to look through the
//      documentation for this one.)
//  -  a computed property called `totalPrice`, equal to the sum of
//      the `orderPrice` values for everything in the cart); it should be
//      recalculated any time an Order is added to the cart, removed from the
//      cart, or modified.
//
// Once you've created the necessary Ember Classes, create a new Cart instance,
//  and fill that cart up with three new product orders having the following
//  quantities, product names, and prices:
//  -  Order 1 : 2 hats ($5 each)
//  -  Order 2 : 1 desk lamp ($20 each)
//  -  Order 3 : 3 hand towels ($8 each)

const Order = Ember.Object.extend({
  orderPrice: function () {
    return this.get('price')*this.get('quantity');
  },
});

const Cart = Ember.Object.extend({
  orders: [],
  // adds items to the orders array
  addToCart: function (order) {
    this.get('orders').pushObject(order);
  },
  // adds totals from orders array
  totalPrice: function () {
    let total = 0
    this.orders.forEach(function(order) {
      total += order.orderPrice();
    });
    return total;
  }
});

const hat = Order.create({
  price: 5,
  quantity: 2,
});

const deskLamp = Order.create({
  price: 20,
  quantity: 1,
})

const towels = Order.create({
  price: 8,
  quantity: 3,
})

let newCart = Cart.create({})
