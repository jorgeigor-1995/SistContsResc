import axios from 'axios'

export const register = newConta => {
  return axios
    .post('conta/adicionar-conta', {
      nome: newConta.nome,
      total_receber: newConta.total_receber,
    })
    .then(response => {
      console.log('Registered')
    })
}

export const edit = id => {
  return axios
      .get('conta/edit', {
        _id: id
      })
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
}

export const update = tempConta => {
  return axios
      .post('conta/update', {
        _id: tempConta._id,
        nome: tempConta.nome,
        total_receber: tempConta.total_receber
    })
    .then(response => {
      console.log('Atualizado');
    })
}


