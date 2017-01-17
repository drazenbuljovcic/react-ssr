import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Provider from 'react-redux';

import routes from './routes';

require('../styles/main.sass');
require('./vendor.js');

ReactDOM.render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ),
  document
)
