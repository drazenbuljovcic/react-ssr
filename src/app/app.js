import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import configStore from './store';

import routes from './routes';

require('../styles/main.sass');
require('./vendor.js');

console.clear();
ReactDOM.render((
  <Provider store={configStore()}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
  ),
  document
)
