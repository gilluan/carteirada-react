import React, { Component } from 'react';
import {  ListGroup, ListGroupItem,  } from 'react-bootstrap'

class ListPosts extends Component {

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem header="Title 1" href="#">Body 1</ListGroupItem>
          <ListGroupItem header="Title 2" href="#">Body 2</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default ListPosts;
