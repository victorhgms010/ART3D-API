function validateProduct(request, response, next) {
  const { nome, preco, descricao, categoria } = request.body;

  if (!nome || !preco || !descricao || !categoria) {
    return response.status(400).json({
      message: 'Campos obrigatórios: nome, preco, descricao e categoria.',
    });
  }

  return next();
}

module.exports = validateProduct;
