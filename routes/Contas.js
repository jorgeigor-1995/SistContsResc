const express = require('express');
const contas = express.Router();
const cors = require('cors');
const mongoose = require('mongoose');

const ContaSchema = require('../models/Conta');
const Conta = mongoose.model('conta', ContaSchema);
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
            res.json({ status: conta.nome + 'Registered!' });
        }
          
  })
})

  contas.get('/list', (req, res) => {
    Conta.find({})
      .then(conta => {
        if (conta) {
          var contas = { conta: conta };
          res.json(contas);
        } else {
          res.status(400).json({ error: 'Nenhuma conta cadastrada' });
        }
      })
      .catch(err => {
        res.status(400).json({ error: err });
      })
  })

  contas.get('/edit', (req, res) => {
    var _id = req.params._id;
    Conta.findById(_id, function (erro, conta) {
      if (erro) {
          res.sendStatus(404)
          return;
      }
      var resultado = { conta: conta };
      res.json(resultado);
    });
    })

  contas.post('/update', (req, res) => {
    var _id = req.params.id;
            Conta.findById(_id, function (erro, conta) {
              conta.nome = req.body.conta.nome;
              conta.total_receber = req.body.total_receber;
              conta.status = req.body.conta.status;
                conta.save(function (err) {
                    if (err) {
                        console.log("Error! " + err.message);
                        return err;
                    }
                    else {
                      res.json({ status: conta.nome + 'atualizada!' });                    
                    }
                    
                });
            });
  })


  module.exports = contas;
