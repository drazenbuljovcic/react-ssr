//Init
import path from 'path';
import http from 'http';
import express from 'express';
import reload from 'reload';
//React 
import React from 'react';
import ReactDOMServer from 'react-dom/server';
//React Router
import { match, RouterContext } from 'react-router';
import routes from '../src/app/routes';
//Redux
import { Provider } from 'react-redux';
import configStore from '../src/app/store';
// Webpack dev server with hmr
import webpack from 'webpack';
import WebpackHMRConfig from '../webpack-hmr.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app  = express(),
      server = http.createServer(app),
      port = process.env.PORT || 3000;
reload(server, app); //put before error handlers so the script in the view does't return 404

if(process.env.NODE_ENV === 'dev-hmr') {
  const compiler = webpack(WebpackHMRConfig);

  app.use(webpackDevMiddleware(
    compiler,
    {
      noInfo: true,
      publicPath: WebpackHMRConfig.output.publicPath
    }
  ));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, '../dist')));

// React routing wildcard
// Throw every request to be matched react's routes
// SERVER SIDE RENDERED
app.get('*', (req, res) => {
  match({
    routes: routes,
    location: req.url
  }, (error, redirectLocation, renderProps) => {
    // in case of error display the error message
    if (error) 
      return res.status(500).send(err.message);

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation)
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    res.send(ReactDOMServer
        .renderToString(
          <Provider store={configStore()}>
            <RouterContext {...renderProps} />
          </Provider>
        )
    );
  });
});

server.listen(port, (error) => {
  if (error) throw error;
  console.log(`Express server listening on port ${port}`);
});
