import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/form';
import './styles.scss';
import { setLoadingValues } from '../redux/actions';

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

const mapStateToProps = (state) => {
    return {
        loading: state.loadingReducer.loading,
        text: state.loadingReducer.text,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoadingValues: (loading, text) => dispatch(setLoadingValues(loading, text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)