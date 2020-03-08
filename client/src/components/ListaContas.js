import React, { Component, Fragment } from "react";

import Conta from './Conta';
import { ConnectionStates } from "mongoose";

export default class Lista extends Component {
    
    
    
    constructor() {
        super();
        this.state = {
            lista: [{ 
                '_id': '',
                'nome': '', 
                'data': '',
                'status': ''          
            }],        
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

    ifDoStatus(status){
        if(status){
            return 'ativa';
        }else return 'paga';
    }

    ///////
    editarConta(idConta){
        return "idConta";
    }

    
      
    
    render() {
        
        return (
            <Fragment>

                 <Conta/>
                 
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
                        <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.state.lista.map(conta => {
                        return (
                            <tr key= { conta._id }>
                            <td> { conta.nome }</td>
                            <td> { conta.data }</td>
                            <td> { this.ifDoStatus(conta.status) }</td>
                            <td> <button  type="button" onClick={<Conta idConta={ conta._id } /> }  >Edit!</button></td>
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





