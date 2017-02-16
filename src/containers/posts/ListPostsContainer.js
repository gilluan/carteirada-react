import React, { Component } from 'react';
import { connect } from 'react-redux'
import ListPosts from './ListPosts'

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}


const ListPostsContainer = connect(mapStateToProps)(ListPosts);

export default ListPostsContainer;
