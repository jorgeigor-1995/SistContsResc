import React, { Component, Fragment } from "react";

import { update, edit } from './ContaFunctions';
import Lista from './ListaContas'

export default class Conta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: [{
                '_id': '',
                'nome': '',
                'data': '',
                'status': ''
            }]

        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const tempConta = {
            nome: this.state.lista.nome,
            total_receber: this.state.lista.total_receber,
            status: this.state.lista.status
        }

        update(tempConta).then(res => {
            if (res) this.props.history.push(`/contas`)
            else return false;
        })
    }


    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ lista: res }))
            .catch(err => console.log(err));
    }

    callApi = async (id) => {
        const response = await edit(id);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        return body;
    };




    render() {
        return (
            <Fragment>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
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
                                        value={this.state.lista.total_receber}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Estado</label>

                                    <select className="form-control" name="status" value={this.state.lista.total_receber}
                                        onChange={this.onChange}>
                                        <option value="true">Div. Ativa</option>
                                        <option value="false">Div. Paga</option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-primary btn-block"
                                >
                                    Atualizar!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
