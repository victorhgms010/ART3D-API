const { getCart, setCart, getOrders, addOrder } = require('../data/cart.data');
const productsService = require('./products.service');

function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function getCartSummary() {
  const items = getCart();
  const totalNumber = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);

  return {
    items,
    quantidadeItens: items.reduce((sum, item) => sum + item.quantidade, 0),
    total: formatCurrency(totalNumber),
    totalNumber,
  };
}

function addItem(productId, quantidade = 1) {
  const product = productsService.findProductById(productId);

  if (!product) {
    return null;
  }

  const cart = getCart();
  const itemIndex = cart.findIndex((item) => item.productId === Number(productId));

  if (itemIndex >= 0) {
    cart[itemIndex].quantidade += Number(quantidade) || 1;
    setCart(cart);
    return getCartSummary();
  }

  const item = {
    id: Date.now(),
    productId: product.id,
    nome: product.nome,
    preco: product.preco,
    categoria: product.categoria,
    imageKey: product.imageKey,
    quantidade: Number(quantidade) || 1,
  };

  setCart([...cart, item]);
  return getCartSummary();
}

function updateItem(productId, quantidade) {
  const cart = getCart();
  const nextQuantity = Number(quantidade);

  if (nextQuantity <= 0) {
    return removeItem(productId);
  }

  const itemIndex = cart.findIndex((item) => item.productId === Number(productId));
  if (itemIndex === -1) return null;

  cart[itemIndex].quantidade = nextQuantity;
  setCart(cart);
  return getCartSummary();
}

function removeItem(productId) {
  const cart = getCart();
  const exists = cart.some((item) => item.productId === Number(productId));

  if (!exists) return null;

  setCart(cart.filter((item) => item.productId !== Number(productId)));
  return getCartSummary();
}

function clearCart() {
  setCart([]);
  return getCartSummary();
}

function checkout(customer = {}, payment = {}) {
  const summary = getCartSummary();

  if (!summary.items.length) {
    return null;
  }

  const order = {
    id: Date.now(),
    status: 'PEDIDO_FINALIZADO',
    message: 'Compra finalizada com sucesso. Pedido recebido pelo servidor.',
    customer: {
      nome: customer.nome || 'Cliente App Art3D',
      telefone: customer.telefone || 'Não informado',
      email: customer.email || 'Não informado',
    },
    payment: { method: payment.method || 'Pix', status: 'PAGAMENTO_SIMULADO', details: payment.details || 'Retorno de pagamento simulado para testes no Postman.' },
    items: summary.items,
    quantidadeItens: summary.quantidadeItens,
    total: summary.total,
    createdAt: new Date().toISOString(),
  };

  addOrder(order);
  clearCart();
  return order;
}

module.exports = {
  getCartSummary,
  addItem,
  updateItem,
  removeItem,
  clearCart,
  checkout,
  getOrders,
};
