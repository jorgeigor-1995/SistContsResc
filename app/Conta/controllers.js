
const Conta = require('./model');

exports.new = async (req, res) => {
  const contaData = req.body;

  conta = new Conta(contaData);
  conta.save(function (err) {
    if (err) {
      res.send('error: ' + err);
    } else {
      res.json({ status: conta.nome + 'Registered!' });
    }

  })
}

 exports.index = async (req, res) => {
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
}

exports.get = async (req, res) => {
  const data = await Conta.findOne({
    _id: req.params.id,
  });
    res.json(data);
}

 exports.update = async (req, res) => {
  
  const conta =  await Conta.findOne({ _id: req.params.id}); 

  conta.save( req.body ,function (err) {
      if (err) {
        console.log("Error! " + err.message);
        return err;
      }
      else {
        res.json({ status: conta.nome + 'atualizada!' });
      }

    });
  };

exports.delete = async (req, res) => {
  const idConta = req.params.id;
  Conta.deleteOne({ _id: idConta }, function (erro) {
    if (erro) {
      console.log("Error! " + err.message);
      return err;
    }
    else {
      res.json({ status: 'Conta Deletada!' });
    }
  })
}


