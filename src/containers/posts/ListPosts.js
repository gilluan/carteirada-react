import React, { Component } from 'react';
import {  ListGroup, ListGroupItem,  } from 'react-bootstrap'
import PostItem from '../../components/PostItem'

const ListPosts  = ({ todos }) => (
      <div>
        <ListGroup>
          {todos.map(e => {
              return <PostItem key={e.title} item={e} />
          })}
        </ListGroup>
      </div>
);

export default ListPosts;
