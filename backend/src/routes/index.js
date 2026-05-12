const { Router } = require('express');
const productsRoutes = require('./products.routes');
const cartRoutes = require('./cart.routes');
const ordersRoutes = require('./orders.routes');
const authRoutes = require('./auth.routes');

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({
    message: 'API Art3D online',
    endpoints: {
      products: '/api/products',
      cart: '/api/cart',
      addCartItem: 'POST /api/cart/items',
      checkout: 'POST /api/orders/checkout',
      orders: '/api/orders',
      health: '/api/health',
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
    },
  });
});

routes.get('/health', (request, response) => {
  return response.json({ status: 'ok' });
});

routes.use('/auth', authRoutes);
routes.use('/products', productsRoutes);
routes.use('/cart', cartRoutes);
routes.use('/orders', ordersRoutes);

module.exports = routes;
