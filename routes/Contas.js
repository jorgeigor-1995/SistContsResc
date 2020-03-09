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
    } else {
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
  const _id = req.body._ip;
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
  const _id = req.body._ip;
  Conta.findById(_id, function (erro, conta) {
    conta.nome = req.body.nome;
    conta.total_receber = req.body.total_receber;
    conta.status = req.body.status;
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

contas.post('/delete', (req, res) => {
  const idConta = String(req.body.idConta);
  Conta.deleteOne({ _id: idConta }, function (erro) {
    if (erro) {
      console.log("Error! " + err.message);
      return err;
    }
    else {
      res.json({ status: 'Conta Deletada!' });
    }
  })
})


module.exports = contas;
