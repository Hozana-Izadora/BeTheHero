// Importar o express
const express = require('express');
const cors = require('cors');
// Importar o arquivo de  rotas
const routes = require('./routes');
// Instanciar a aplicação
const app = express();
app.use(cors()); 
app.use(express.json());
app.use(routes);

// Usar a porta 3333(node)
app.listen(3333);



/**
 * Métodos HTTTP:
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * Delete: Deletar uma informação no backend 
 */







