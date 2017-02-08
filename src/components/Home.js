import React, { Component } from 'react';
import FormPost from '../containers/posts/FormPost'
import ListPosts from './posts/ListPosts'
class Home extends Component {


  render() {

    return (
      <div>
       <FormPost />
       <ListPosts />
      </div>

    );
  }
}

export default Home;
