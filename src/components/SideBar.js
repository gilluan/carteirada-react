import React, { Component } from 'react';
import {  Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';

class SideBar extends Component {
  render() {
    return (
        <Nav bsStyle="pills" stacked >
          <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
          <NavItem eventKey={2} title="/report"><Link to="/report">Relatórios</Link></NavItem>
        </Nav>
    );
  }
}

export default SideBar;
