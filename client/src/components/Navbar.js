import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  

  render() {
    const listarConta = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/contas" className="nav-link">
            Contas
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Adicionar
          </Link>
        </li>
      </ul>
    )

    

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          { listarConta }
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)