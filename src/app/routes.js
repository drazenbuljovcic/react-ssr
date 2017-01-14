import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import NotFound from './components/NotFound';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Main}/>
        <Route path="*" component={NotFound} />
    </Route>
)
export default routes;