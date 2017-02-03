import React, { Component } from 'react';
import NavBar from './stories/NavBar';
import { ButtonToolbar, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar nameApp="Carteirada" />
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>Primary Button</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
