import React from 'react';
import actions from '../actions/actions';

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  changeInput(e) {
    this.setState({
      text: e.target.value
    })
  }

  changeText(e) {
    e.preventDefault();
    this.props.dispatch(actions.addText(this.state.text));
    this.state.text = '';
  }
  
  render() {
    return (
     <div>
        <input value={this.state.text} onChange={this.changeInput.bind(this)} type="text" />
        <button onClick={this.changeText.bind(this)}>Change text</button>
      </div>
    )
  }
}