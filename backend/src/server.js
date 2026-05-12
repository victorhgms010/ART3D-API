const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const config = require('./config/server.config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(config.port, () => {
  console.log(`API Art3D rodando em http://localhost:${config.port}`);
});
