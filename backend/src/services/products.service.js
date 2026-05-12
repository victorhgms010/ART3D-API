const { getProducts, setProducts } = require('../data/products.data');

function listProducts() {
  return getProducts();
}

function findProductById(id) {
  return getProducts().find((product) => product.id === Number(id));
}

function createProduct(productData) {
  const products = getProducts();
  const nextId = products.length ? Math.max(...products.map((product) => product.id)) + 1 : 1;

  const product = {
    id: nextId,
    nome: productData.nome,
    preco: productData.preco,
    descricao: productData.descricao,
    categoria: productData.categoria,
    destaque: Boolean(productData.destaque),
  };

  setProducts([...products, product]);
  return product;
}

function updateProduct(id, productData) {
  const products = getProducts();
  const productIndex = products.findIndex((product) => product.id === Number(id));

  if (productIndex === -1) {
    return null;
  }

  const updatedProduct = {
    ...products[productIndex],
    ...productData,
    id: Number(id),
  };

  products[productIndex] = updatedProduct;
  setProducts(products);
  return updatedProduct;
}

function deleteProduct(id) {
  const products = getProducts();
  const productExists = products.some((product) => product.id === Number(id));

  if (!productExists) {
    return false;
  }

  setProducts(products.filter((product) => product.id !== Number(id)));
  return true;
}

module.exports = {
  listProducts,
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
