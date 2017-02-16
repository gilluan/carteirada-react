import React, { Component } from 'react';
import {  ListGroup, ListGroupItem,  } from 'react-bootstrap'

class PostItem extends Component {

  render() {
    return (
          <ListGroupItem header={this.props.item.title} href="#">{this.props.item.body}</ListGroupItem>
    );
  }
}

export default PostItem;
