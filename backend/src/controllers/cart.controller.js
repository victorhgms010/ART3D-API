const cartService = require('../services/cart.service');

function index(request, response) {
  return response.json(cartService.getCartSummary());
}

function store(request, response) {
  const { productId, quantidade } = request.body;
  const cart = cartService.addItem(productId, quantidade);

  if (!cart) {
    return response.status(404).json({ message: 'Produto não encontrado para adicionar ao carrinho.' });
  }

  console.log('Produto adicionado ao carrinho:', { productId, quantidade: quantidade || 1, cart });

  return response.status(201).json({
    message: 'Produto adicionado ao carrinho com sucesso.',
    cart,
  });
}

function update(request, response) {
  const cart = cartService.updateItem(request.params.productId, request.body.quantidade);

  if (!cart) {
    return response.status(404).json({ message: 'Produto não encontrado no carrinho.' });
  }

  return response.json({ message: 'Quantidade atualizada.', cart });
}

function remove(request, response) {
  const cart = cartService.removeItem(request.params.productId);

  if (!cart) {
    return response.status(404).json({ message: 'Produto não encontrado no carrinho.' });
  }

  return response.json({ message: 'Produto removido do carrinho.', cart });
}

function clear(request, response) {
  return response.json({ message: 'Carrinho limpo.', cart: cartService.clearCart() });
}

module.exports = {
  index,
  store,
  update,
  remove,
  clear,
};
