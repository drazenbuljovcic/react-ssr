//Init
import path from 'path';
import http from 'http';
import express from 'express';
import reload from 'reload';
//React Router
import React from 'react';
import { match, RouterContext } from 'react-router';
import routes from '../src/app/routes';
import ReactDOMServer from 'react-dom/server';

const app  = express(),
      server = http.createServer(app),
      port = process.env.PORT || 3000;
reload(server, app); //put before error handlers so the script in the view does't return 404


app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname));

app.use(express.static(path.resolve(__dirname, '../dist')));

// React routing wildcard
// Throw every request to be matched react's routes
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
