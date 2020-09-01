import React, { Component } from 'react';
import './styles.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<header>
            <h1>React Login Form</h1>
        </header>);
    }
}

export default Header;