import React from 'react';

import Header from './components/Header';

export default class Page extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>React SSR w/ Express Boilerplate</title>
          <link rel='stylesheet' type="text/css" href="app.bundle.css" />
        </head>
        <body>
          <Header />
          <div id="main">
            { this.props.children }
          </div>
          <script src="vendor.bundle.js" />
          <script src="app.bundle.js" />
          <script src="/reload/reload.js" />
        </body>
      </html>
    )
  }
}
