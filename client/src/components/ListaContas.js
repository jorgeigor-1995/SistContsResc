import React, { Component, Fragment } from "react";

import Conta from './Conta';
import { edit, deleteConta } from './ContaFunctions';

export default class Lista extends Component {



    constructor() {
        super();
        this.state = {
            lista: [{
                '_id': '',
                'nome': '',
                'total_receber': '',
                'data': '',
                'status': ''
            }],
            showComp: false
        };

    }




    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ lista: res.conta }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/conta/list');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        return body;
    };

    ifDoStatus(status) {
        if (status) {
            return 'ativa';
        } else return 'paga';
    }

    ///////
    hiddenComp(){
        this.setState({
            showComp: true
        })
    }

    

    render() {

        return (
            <Fragment>
                { this.state.showComp?
                    <Conta/>
                    :null
                }
                
                
                <div className="container">
                    <div className="jumbotron mt-5">
                        <div className="col-sm-8 mx-auto">
                            <h1 className="text-center">Lista de Contas</h1>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">nome</th>
                                    <th scope="col">data</th>
                                    <th scope="col">status</th>
                                    <th scope="col">total a receber</th>
                                    <th scope="col"></th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.lista.map(conta => {
                                    return (
                                        <tr key={conta._id}>
                                            <td> {conta.nome}</td>
                                            <td> {conta.data}</td>
                                            <td> {this.ifDoStatus(conta.status)}</td>
                                            <td> {conta.total_receber}</td>
                                            <td>
                                                <button
                                                    onClick={() => {
                                                        this.hiddenComp();
                                                        edit(conta._id);
                                                    }}
                                                    className="button muted-button">
                                                    Edit
                                                    </button>
                                                <button onClick={() => deleteConta(conta._id)} className="button muted-button">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        );
    }


}





