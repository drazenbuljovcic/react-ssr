import React from 'react';
export default class Text extends React.Component{
    handleSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
        )
    }
}