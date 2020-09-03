import React, { Component, createRef, forwardRef } from 'react';
import { connect } from 'react-redux';
import { setLoadingValues } from '../redux/actions';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { CircularProgress } from '@material-ui/core';
import Loading from '../loading/loading';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SubmitButton = forwardRef((props, ref) => {
    return <Button type="submit" onClick={props.submit}>
        {props.submitting ? <CircularProgress color='inherit' size={20} /> : 'Login'}
    </Button>
});

const modalBodyStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.25)',
};
const modalContentStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '300px',
    height: '300px',
    margin: 'auto auto',
    backgroundColor: 'white',
    padding: '3rem',
    color: 'white !important',
};

const modalTextStyles = {
    fontWeight: 'bold',
    fontSize: '1.25rem'
};

const modalDismissStyles = {
    color: 'rgba(0,0,0,0.5)',
    cursor: 'pointer',
};

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
            anchorEl: null,
            modalOpen: false,
        }

        this.usernameRef = createRef();
        this.passwordRef = createRef();
        this.submitButtonRef = createRef();

    }

    componentDidMount() {

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
        console.log('submit() setting state');


        await this.validate();

        if (this.state.usernameError === '' && this.state.passwordError === '') {
            this.setState({
                submitting: true,
                anchorEl: event.target,
            });

            if (this.state.username == 'username' && this.state.password === 'password') {
                alert('Logged in!');
                this.setState({
                    formError: '',
                    submitting: false,
                });
            } else {
                // display Modal
                this.setState({
                    formError: 'Invalid username and or password.',
                    submitting: false,
                    modalOpen: true,
                });
            }
        }
    }



    render() {
        const body = (<p>{this.state.formError}</p>);
        const text = <p>abcdefg</p>

        return (<form id="login-form">
            <label htmlFor="username"> Username
        <input type="text" id="login-username-input" ref={this.usernameRef} name="username" placeholder="Username" onChange={this.onChange} onBlur={this.onBlur} />
            </label>
            {this.state.usernameError !== '' ? <div className="error control-error">{this.state.usernameError}</div> : false}
            <label htmlFor="username"> Password
        <input type="password" id="login-password-input" ref={this.passwordRef} name="password" placeholder="Password" onChange={this.onChange} onBlur={this.onBlur} />
            </label>
            {this.state.passwordError !== '' ? <div className="error control-error">{this.state.passwordError}</div> : false}
            <SubmitButton submit={this.submit} submitting={this.state.submitting}></SubmitButton>
            {/* <Button type="submit" onClick={this.submit}>
                {this.state.submitting ? <CircularProgress color='inherit' size={20} /> : 'Login'}
            </Button> */}
            <Modal
                open={this.state.modalOpen}
                children={text}
                onClose={() => { }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div id="modal-body" style={modalBodyStyles}>
                    <div id="modal-content" style={modalContentStyles}>
                        <p style={modalTextStyles}>{this.state.formError}</p>
                        <p style={modalDismissStyles} onClick={() => this.setState({ modalOpen: false })}>Dismiss</p>
                    </div>
                </div>
            </Modal>
        </form >);
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