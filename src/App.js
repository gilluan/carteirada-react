import React, { Component } from 'react';
import NavBar from './stories/NavBar';
import { ButtonToolbar, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
          <Button bsSize="large" active>Button</Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default App;
