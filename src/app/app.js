import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import App from './components/App';

require('../styles/main.sass');
require('./vendor.js');

ReactDOM.render((
  <Router history={browserHistory}>
    {routes}
  </Router>
  ),
  document.getElementById('app')
)
