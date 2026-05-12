const productsService = require('../services/products.service');

function index(request, response) {
  return response.json(productsService.listProducts());
}

function show(request, response) {
  const product = productsService.findProductById(request.params.id);

  if (!product) {
    return response.status(404).json({ message: 'Produto não encontrado.' });
  }

  return response.json(product);
}

function store(request, response) {
  const product = productsService.createProduct(request.body);
  return response.status(201).json(product);
}

function update(request, response) {
  const product = productsService.updateProduct(request.params.id, request.body);

  if (!product) {
    return response.status(404).json({ message: 'Produto não encontrado.' });
  }

  return response.json(product);
}

function remove(request, response) {
  const deleted = productsService.deleteProduct(request.params.id);

  if (!deleted) {
    return response.status(404).json({ message: 'Produto não encontrado.' });
  }

  return response.status(204).send();
}

module.exports = {
  index,
  show,
  store,
  update,
  remove,
};
