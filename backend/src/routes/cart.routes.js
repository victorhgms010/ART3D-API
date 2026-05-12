const { Router } = require('express');
const cartController = require('../controllers/cart.controller');

const cartRoutes = Router();

cartRoutes.get('/', cartController.index);
cartRoutes.post('/items', cartController.store);
cartRoutes.put('/items/:productId', cartController.update);
cartRoutes.patch('/items/:productId', cartController.update);
cartRoutes.delete('/items/:productId', cartController.remove);
cartRoutes.delete('/', cartController.clear);

module.exports = cartRoutes;
