import React, { Component } from 'react';
import './styles.scss';
import Form from '../form/form.js';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<main>
            {this.props.children}
        </main>);
    }
}

export default Main;