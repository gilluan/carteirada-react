import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <Jumbotron>
       <h1>Home</h1>
       <p>Aplicacao de exemplo com react</p>
       <p><Button bsStyle="primary">Iniciar Jornada</Button></p>
     </Jumbotron>
    );
  }
}

export default Home;
