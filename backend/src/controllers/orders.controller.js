const cartService = require('../services/cart.service');

function checkout(request, response) {
  const order = cartService.checkout(request.body.customer, request.body.payment);

  if (!order) {
    return response.status(400).json({ message: 'Não é possível finalizar compra com carrinho vazio.' });
  }

  console.log('Compra finalizada no servidor:', order);

  return response.status(201).json({
    message: 'Pedido criado com sucesso no backend.',
    order,
  });
}

function index(request, response) {
  return response.json(cartService.getOrders());
}

module.exports = {
  checkout,
  index,
};
