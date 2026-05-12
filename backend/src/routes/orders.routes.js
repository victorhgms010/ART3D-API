const { Router } = require('express');
const ordersController = require('../controllers/orders.controller');

const ordersRoutes = Router();

ordersRoutes.get('/', ordersController.index);
ordersRoutes.post('/checkout', ordersController.checkout);

module.exports = ordersRoutes;
