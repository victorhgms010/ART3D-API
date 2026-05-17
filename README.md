````md
# Art3D - App React Native + API Node.js

Projeto mobile em React Native/Expo integrado com backend Node.js/Express.

## Start do app

```bash
npm install
npx expo start
````

## Start do backend

```bash
cd backend
npm install
npm run dev
```

## Nova funcionalidade: Geolocalização

O aplicativo agora possui a tela **Localização**, disponível no menu lateral.

Essa funcionalidade permite que o usuário:

* autorize o acesso à localização atual do aparelho;
* visualize latitude e longitude com precisão aproximada;
* consulte a distância estimada até o atendimento da Art3D em Cataguases/MG;
* abra a rota diretamente no aplicativo de mapas do dispositivo.

A implementação utiliza o pacote oficial **expo-location**, mantendo o projeto compatível com Expo Go e com o fluxo padrão:

```bash
npm install
npx expo start
```

Também foram adicionadas permissões nativas no `app.json`:

* Android: `ACCESS_COARSE_LOCATION` e `ACCESS_FINE_LOCATION`
* iOS: `NSLocationWhenInUseUsageDescription`

Caso o usuário negue a permissão, o app exibe uma mensagem orientando a liberação do acesso nas configurações do aparelho.

## Novidades adicionadas

* Splash screen animada com o slogan: **Art3D seu mundo de impressão**
* Tela de cadastro/login
* Saudação no topo: **Olá, nome cadastrado**
* Catálogo com imagens para cada produto
* Carrinho de compras integrado ao backend
* Checkout com Pix, cartão de crédito e cartão de débito
* Retorno do pedido no app, no terminal do servidor e no Postman
* API RESTful completa integrada via Fetch API
* Tela de geolocalização com permissão nativa, precisão, distância estimada e abertura de rota no mapa
* CORS configurável por variável de ambiente
* Preços salvos como número e formatados apenas na apresentação

---

# Rotas principais para testar no Postman

## Autenticação

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

### Listar usuários

GET `http://localhost:3333/api/auth/users`

---

# Produtos

### Listar produtos

GET `http://localhost:3333/api/products`

### Buscar produto por ID

GET `http://localhost:3333/api/products/1`

### Criar produto

POST `http://localhost:3333/api/products`

```json
{
  "nome": "Chaveiro Art3D",
  "preco": 15.90,
  "categoria": "Chaveiros"
}
```

### Atualizar produto

PUT `http://localhost:3333/api/products/1`

```json
{
  "nome": "Chaveiro Personalizado",
  "preco": 18.90
}
```

### Remover produto

DELETE `http://localhost:3333/api/products/1`

---

# Carrinho

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

### Atualizar quantidade do item

PUT `http://localhost:3333/api/cart/items/1`

```json
{
  "quantidade": 5
}
```

### Remover item do carrinho

DELETE `http://localhost:3333/api/cart/items/1`

### Limpar carrinho

DELETE `http://localhost:3333/api/cart/clear`

---

# Pedidos

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

### Buscar pedido por ID

GET `http://localhost:3333/api/orders/1`

### Atualizar status do pedido

PUT `http://localhost:3333/api/orders/1`

```json
{
  "status": "Pago"
}
```

### Remover pedido

DELETE `http://localhost:3333/api/orders/1`

---

# Métodos HTTP Utilizados

| Método | Função                |
| ------ | --------------------- |
| GET    | Buscar informações    |
| POST   | Criar informações     |
| PUT    | Atualizar informações |
| DELETE | Remover informações   |

---

# Tecnologias Utilizadas

## Frontend

* React Native
* Expo
* JavaScript
* Fetch API

## Backend

* Node.js
* Express
* Nodemon
* Cors

---

# Empresa

**Art3D - Seu mundo de impressão**

```
```
