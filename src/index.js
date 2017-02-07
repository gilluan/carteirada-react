import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import posts from './reducers/posts';

let store = createStore(posts);

render(
  <Root store={store} />,
  document.getElementById('root')
);
