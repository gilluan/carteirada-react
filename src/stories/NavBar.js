import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">Carteirada</a>
           </Navbar.Brand>
         </Navbar.Header>
         <Nav>
           <NavItem eventKey={1} href="#">Inicio</NavItem>
         </Nav>
        </Navbar>
    );
  }
}

export default NavBar;
