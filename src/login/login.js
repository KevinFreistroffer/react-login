import React, { Component } from 'react';
import Form from '../form/form';
import './styles.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="login">
                <h2>Login</h2>
                <div id="credentials">
                    <p>Username: username</p>
                    <p>Password: password</p>
                </div>
                <Form></Form>
            </div>
        );
    }
}

export default Login;