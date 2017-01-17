import React from 'react';
export default class Text extends React.Component{
    handleSubmit(e) {
        alert();
        console.log('button pressed');
    }
    render() {
        return (
            <div>
                Hello world!
            </div>
        )
    }
}