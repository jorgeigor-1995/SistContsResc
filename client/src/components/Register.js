import React, { Component } from 'react'
import { register } from './ContaFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      total_receber: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newConta = {
      nome: this.state.nome,
      total_receber: this.state.total_receber
    }

    register(newConta).then(res => {
      if(res) this.props.history.push(`/contas`)
      else return false;
    })
  }

  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Adicionar conta</h1>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  name="nome"
                  placeholder="Entre com o nome"
                  value={this.state.nome}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="total a receber">Total a receber</label>
                <input
                  type="text"
                  className="form-control"
                  name="total_receber"
                  placeholder="Entre com valor a receber"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Adicionar!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register