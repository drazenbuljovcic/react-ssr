import React from 'react';
import Link from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <ul>
                    <li><Link path="/">Home</Link></li>
                    <li><Link path="/about">About</Link></li>
                </ul>
            </header>
        )
    }
}