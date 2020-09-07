import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import Form from '../form/form';
import ErrorModal from './ErrorModal';
import './styles.scss';
import { setLoadingValuesAction, setUserValuesAction } from '../redux/actions';
import { Redirect, withRouter } from 'react-router-dom';

const UsernameInput = React.forwardRef((props, ref) => {
  return (
    <input
      type='text'
      defaultValue={props.username}
      id='login-username-input'
      className={props.usernameError !== '' ? 'control-error' : ''}
      ref={ref}
      name='username'
      placeholder='Username'
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
});

const PasswordInput = React.forwardRef((props, ref) => {
  return (
    <input
      type='password'
      defaultValue={props.password}
      id='login-password-input'
      className={props.passwordError !== '' ? 'control-error' : ''}
      ref={ref}
      name='password'
      placeholder='Password'
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
});

class Login extends Component {
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
    };
    this.titleRef = createRef();
    this.usernameRef = createRef();
    this.passwordRef = createRef();
  }

  componentWillUnmount() {
    this.setState({
      username: '',
      usernameError: '',
      password: '',
      passwordError: '',
      submitting: false,
      formError: '',
      anchorEl: null,
      modalOpen: false,
    });
  }

  onChange = (event) => {
    event.persist();
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      async () => {
        if (
          this.state.usernameError !== '' ||
          this.state.passwordError !== ''
        ) {
          await this.validate();
        }
      }
    );
  };

  onBlur = (event) => {
    event.persist();
    this.validate().then((_) => {});
  };

  validate = async () => {
    return new Promise((resolve, reject) => {
      let usernameError = '';
      let passwordError = '';

      if (
        this.state.username === '' ||
        this.usernameRef.current === null ||
        (this.usernameRef.current !== null &&
          this.usernameRef.current.value === '')
      ) {
        usernameError = 'Username is required';
      } else {
        usernameError = '';
      }

      if (
        this.state.password === '' ||
        this.passwordRef.current === null ||
        (this.passwordRef.current !== null &&
          this.passwordRef.current.value === '')
      ) {
        passwordError = 'Password is required';
      } else if (
        (this.state.password !== '' && this.state.password.length < 6) ||
        (this.passwordRef.current !== null &&
          this.passwordRef.value !== '' &&
          this.passwordRef.current.value.length < 6)
      ) {
        passwordError = 'Password must be 6 characters long.';
      } else {
        passwordError = '';
      }

      this.setState(
        {
          usernameError,
          passwordError,
        },
        () => resolve()
      );
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitting: true });
    await this.validate();

    if (this.state.usernameError === '' && this.state.passwordError === '') {
      if (
        this.state.username === 'username' &&
        this.state.password === 'password'
      ) {
        this.setState({ submitting: false });
        this.props.setUserValues(this.state.username, this.state.password);
        this.props.history.push('/dashboard');
        return;
      } else {
        this.setState({ formError: 'Invalid username and or password' });
      }
    }

    this.setState({ submitting: false });
  };

  render() {
    return (
      <div id='login'>
        <h1 className='title'>Login</h1>
        <div id='credentials'>
          <p>Username: username</p>
          <p>Password: password</p>
        </div>
        <Form
          username={this.state.username}
          password={this.state.password}
          usernameError={this.state.usernameError}
          passwordError={this.state.passwordError}
          usernameInput={
            <UsernameInput
              username={this.state.username}
              usernameError={this.state.usernameError}
              ref={this.usernameRef}
              onChange={this.onChange}
              onBlur={this.onBlur}
              onSubmit={this.onSubmit}
            />
          }
          passwordInput={
            <PasswordInput
              password={this.state.password}
              passwordError={this.state.passwordError}
              ref={this.passwordRef}
              onChange={this.onChange}
              onBlur={this.onBlur}
              onSubmit={this.onSubmit}
            />
          }
          usernameRef={this.usernameRef}
          passwordRef={this.passwordRef}
          submitting={this.state.submitting}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onSubmit={this.onSubmit}
        ></Form>
        <ErrorModal
          text={this.state.formError}
          isOpen={this.state.formError !== ''}
          closeModal={() => {
            this.setState({ formError: '' });
          }}
        ></ErrorModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loadingReducer.loading,
    text: state.loadingReducer.text,
    username: state.userReducer.username,
    password: state.userReducer.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingValuesAction: (loading, text) =>
      dispatch(setLoadingValuesAction(loading, text)),
    setUserValues: (username, password) =>
      dispatch(setUserValuesAction(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
