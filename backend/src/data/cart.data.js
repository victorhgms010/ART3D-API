let cart = [];
let orders = [];

function getCart() {
  return cart;
}

function setCart(nextCart) {
  cart = nextCart;
}

function getOrders() {
  return orders;
}

function addOrder(order) {
  orders = [...orders, order];
  return order;
}

module.exports = {
  getCart,
  setCart,
  getOrders,
  addOrder,
};
