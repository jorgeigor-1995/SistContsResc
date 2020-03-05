const express = require('express');
const contas = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');


const Conta = mongoose.model("conta");
contas.use(cors());

contas.post('/adicionar-conta', (req, res) => {
    const today = new Date();
    const contaData = {
      nome: req.body.nome,
      total_receber: req.body.total_receber,
      status: true,
      data: today
    }
    
    conta = new Conta(contaData);
    conta.save(function (err) {
        if (err) {
            res.send('error: ' + err);
        }else {
            res.json({ status: pessoa.nome + 'Registered!' });
        }
          
  })
})

  contas.post('/listar', (req, res) => {
    Conta.find({})
      .then(pessoa => {
        if (pessoa) {
          console.log()
        } else {
          res.status(400).json({ error: 'Nenhuma conta cadastrada' })
        }
      })
      .catch(err => {
        res.status(400).json({ error: err })
      })
  })


  module.exports = contas;
