import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { setLoadingValues } from '../redux/actions';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { CircularProgress } from '@material-ui/core';
import Loading from '../loading/loading';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
            submitting: false,
            formError: '',
        }

        this.usernameRef = createRef();
        this.passwordRef = createRef();
    }



    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {

            if (this.state.usernameError !== '' || this.state.passwordError !== '') {
                this.validate();
            }
        });
    }

    onBlur = (event) => {
        this.validate(['username']);
        // if (event.target.name == 'username' && event.target.value != '') {
        //     console.log('validate username');
        // }

        // if (event.target.name == 'password' && event.target.value != '') {
        //     console.log('validate password');
        // }

    }

    validate = async () => {
        let usernameError = '';
        let passwordError = '';

        this.setState({ submitting: true }, () => {

            if (this.usernameRef.current.value != null) {
                if (this.usernameRef.current.value === '') {
                    // username required
                    usernameError = 'Username is required';
                }
            }

            if (this.passwordRef.current.value != null) {
                if (this.passwordRef.current.value === '') {
                    passwordError = 'Password is required';
                } else if (this.passwordRef.current.value.length < 6) {
                    passwordError = 'Password must be at least 6 characters.';
                }
            }

            this.setState({
                usernameError,
                passwordError,
                submitting: false,
            });
        });
    }



    submit = async (event) => {
        event.preventDefault();

        await this.validate();

        if (this.state.usernameError === '' && this.state.passwordError === '') {
            this.setState({
                submitting: true,
            });

            if (this.state.username == 'username' && this.state.password === 'password') {
                alert('Logged in!');
                this.setState({
                    formError: '',
                    submitting: false,
                });
            } else {
                this.setState({
                    formError: 'Invalid username and or password.',
                    submitting: false,
                });
            }
        }
    }



    render() {
        return (<form id="login-form">
            <label htmlFor="username"> Username
        <input type="text" id="login-username-input" ref={this.usernameRef} name="username" placeholder="Username" onChange={this.onChange} onBlur={this.onBlur} />
            </label>
            {this.state.usernameError !== '' ? <div className="error control-error">{this.state.usernameError}</div> : false}
            <label htmlFor="username"> Password
        <input type="password" id="login-password-input" ref={this.passwordRef} name="password" placeholder="Password" onChange={this.onChange} onBlur={this.onBlur} />
            </label>
            {this.state.passwordError !== '' ? <div className="error control-error">{this.state.passwordError}</div> : false}
            {this.state.formError !== '' ? <div className="error form-error">{this.state.formError}</div> : false}
            <Button type="submit" disabled={this.state.usernameError !== '' || this.state.passwordError !== ''} onClick={this.submit}>
                {this.state.submitting ? <CircularProgress color='inherit' size={20} /> : 'Login'}
            </Button>
        </form>);
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps state', state);
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

export default connect(mapStateToProps, mapDispatchToProps)(Form)