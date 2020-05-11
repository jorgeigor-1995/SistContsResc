const express = require('express');
const rotas = express.Router();

const controller = require('./controller');


rotas.post('/adicionar-conta', controller.new);
rotas.get('/list', controller.index);
rotas.get('/:id', controller.get);
rotas.post('/update/:id', controller.update);
rotas.delete('/:id', controller.delete);