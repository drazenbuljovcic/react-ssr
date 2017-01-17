import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './Page';
import Main from './components/Main';
import NotFound from './components/NotFound';

const routes = (
    <Route path="/" component={Page}>
        <IndexRoute component={Main}/>
        <Route path="*" component={NotFound} />
    </Route>
)
export default routes;