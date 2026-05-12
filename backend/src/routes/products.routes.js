const { Router } = require('express');
const productsController = require('../controllers/products.controller');
const validateProduct = require('../utils/validateProduct');

const productsRoutes = Router();

productsRoutes.get('/', productsController.index);
productsRoutes.get('/:id', productsController.show);
productsRoutes.post('/', validateProduct, productsController.store);
productsRoutes.put('/:id', validateProduct, productsController.update);
productsRoutes.patch('/:id', productsController.update);
productsRoutes.delete('/:id', productsController.remove);

module.exports = productsRoutes;
