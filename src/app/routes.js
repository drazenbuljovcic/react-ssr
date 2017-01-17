import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './Page';

import Main from './components/Main';
import About from './components/About';

import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={Page}>
    <IndexRoute component={Main}/>
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)
export default routes;