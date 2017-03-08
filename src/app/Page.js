import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devReload: false
    }
  }

  componentDidMount() {
    console.log(this.props.env)
    if(this.props.env === 'development')
      this.setState({devReload: true})
  }

  maybeInjectReloadScriptForDevelopment() {
    if(this.state.devReload && !this.state.devScriptInjected) {
      let s = document.createElement('script');
      s.setAttribute('src', '/reload/reload.js');
      document.body.appendChild(s);

      s.onload = () => {
        this.setState({devScriptInjected: true});
        console.log('Development mode with autoreload.')
      };    
    }
  }

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
            { React.cloneElement(this.props.children, this.props) }
          </div>
          <script src="/vendor.bundle.js" />
          <script src="/app.bundle.js" />
          { this.maybeInjectReloadScriptForDevelopment() }
        </body>
      </html>
    )
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Page);
