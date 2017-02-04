import React, { Component } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { Row, Col, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar nameApp="Carteirada" />
        <Grid>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <SideBar />
          </Col>
          <Col xs={12} md={8}>{this.props.children}</Col>
        </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
