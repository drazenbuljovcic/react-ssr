import React, { Component } from 'react'

export default class Page extends Component {
  render() {
    return (
      <html>
        <head>
            <title>React SSR w/ Express Boilerplate</title>
            <link rel='stylesheet' type="text/css" href="app.bundle.css" />
        </head>
        <body>
          <div>
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
