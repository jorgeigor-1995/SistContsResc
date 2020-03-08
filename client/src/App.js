import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Contas from './components/ListaContas'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/contas" component={Contas} />
            <Route exact path="/register" component={Register} />
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
