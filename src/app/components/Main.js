import React from 'react';
import Content from './Content';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
        <Content dispatch={this.props.dispatch} />
      </div>
    )
  }
}