import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './Home';
import Report from './Report';

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
         <IndexRoute component={Home} />

         <Route path="/report" component={Report}></Route>
        </Route>

      </Router>
    );
  }
}

export default Root;
