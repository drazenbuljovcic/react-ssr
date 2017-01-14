//Init
import path from 'path';
import http from 'http';
import express from 'express';
import reload from 'reload';

const app  = express(),
      server = http.createServer(app),
      port = process.env.PORT || 3000;
reload(server, app); //put before error handlers so the script in the view does't return 404
    
// Webpack
// import webpack from 'webpack';
// import WebpackConfig from '../webpack.config.js';
// import webpackDevMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';

// const compiler = webpack(WebpackConfig);

//React Router
import React from 'react';
import { match, RouterContext } from 'react-router';
import routes from '../src/app/routes';
import ReactDOMServer from 'react-dom/server';

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname, '../dist')));
// Middlewares
// app.use(webpackDevMiddleware(
//   compiler,
//   {
//     noInfo: true,
//     publicPath: WebpackConfig.output.publicPath
//   }
// ));
// app.use(webpackHotMiddleware(compiler));


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

    res.render('index', {
       markup: ReactDOMServer.renderToString(<RouterContext {...renderProps} />)
    })

  });
})

server.listen(port, (error) => {
  if (error) throw error;
  console.log(`Express server listening on port ${port}`);
});
