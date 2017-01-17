import React from 'react';
import { connect } from 'react-redux';

import Content from './Content';

class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <Content dispatch={this.props.dispatch} />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Main);