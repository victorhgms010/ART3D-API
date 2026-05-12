# Art3D - App React Native + API Node.js

Projeto mobile em React Native/Expo integrado com backend Node.js/Express.

## Start do app

```bash
npm install
npx expo start
```

## Start do backend

```bash
cd backend
npm install
npm run dev
```

## Novidades adicionadas

- Splash screen animada com o slogan: **Art3D seu mundo de impressão**
- Tela de cadastro/login
- Saudação no topo: **Olá, nome cadastrado**
- Catálogo com imagens para cada produto
- Carrinho de compras integrado ao backend
- Checkout com Pix, cartão de crédito e cartão de débito
- Retorno do pedido no app, no terminal do servidor e no Postman

## Rotas principais para testar no Postman

### Cadastro
POST `http://localhost:3333/api/auth/register`

```json
{
  "nome": "Victor Hugo",
  "email": "victor@email.com",
  "senha": "123456"
}
```

### Login
POST `http://localhost:3333/api/auth/login`

```json
{
  "email": "victor@email.com",
  "senha": "123456"
}
```

### Listar produtos
GET `http://localhost:3333/api/products`

### Adicionar item ao carrinho
POST `http://localhost:3333/api/cart/items`

```json
{
  "productId": 1,
  "quantidade": 1
}
```

### Ver carrinho
GET `http://localhost:3333/api/cart`

### Finalizar compra
POST `http://localhost:3333/api/orders/checkout`

```json
{
  "customer": {
    "nome": "Victor Hugo",
    "email": "victor@email.com"
  },
  "payment": {
    "method": "Pix",
    "details": "QR Code Pix simulado gerado pelo backend."
  }
}
```

### Ver pedidos finalizados
GET `http://localhost:3333/api/orders`
