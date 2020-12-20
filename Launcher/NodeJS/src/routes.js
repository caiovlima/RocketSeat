const express = require('express');
const routes = express.Router();

//definindo minhas controllers
const ProductController = require('./controllers/ProductController');
const PersonController = require('./controllers/PersonController');

//rota get, bate na index do controller, retornando tudo
routes.get('/products', ProductController.index);
//rota post, bate na store criando obj no db
routes.post('/products',ProductController.store);
//rota  get que bate no show e traz produto específico
routes.get('/products/:id', ProductController.show);
//rota do update
routes.put('/products/:id', ProductController.update);
//rota de destroy
routes.delete('/products/:id', ProductController.destroy)

//rotas person controller
routes.get('/person', PersonController.index);
routes.post('/person', PersonController.store);
routes.get('/person/:id', PersonController.show);
routes.put('/person/:id', PersonController.update);
routes.delete('/person/:id', PersonController.destroy);

module.exports = routes;