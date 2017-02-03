import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'

class NavBar extends Component {
  render() {
    return (
        <Navbar inverse collapseOnSelect>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="#">{this.props.nameApp}</a>
           </Navbar.Brand>
         </Navbar.Header>
        </Navbar>
    );
  }
}

export default NavBar;
