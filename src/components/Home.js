import React, { Component } from 'react';
import FormPost from '../containers/posts/FormPost'
import ListPostsContainer from '../containers/posts/ListPostsContainer'

class Home extends Component {


  render() {

    return (
      <div>
       <FormPost />
       <ListPostsContainer />
      </div>

    );
  }
}

export default Home;
