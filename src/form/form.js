import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import { setLoadingValuesAction, setUserValuesAction } from '../redux/actions';
import Button from '@material-ui/core/Button';
import './styles.scss';
import { CircularProgress } from '@material-ui/core';

const SubmitButton = forwardRef((props, ref) => {
  return (
    <Button type='submit' onClick={props.submit}>
      {props.submitting ? (
        <CircularProgress color='inherit' size={20} />
      ) : (
        'Login'
      )}
    </Button>
  );
});

const Form = (props) => {
  return (
    <form id='login-form'>
      <label htmlFor='login-username-input'>Username</label>
      {props.usernameInput}
      {props.usernameError !== '' ? (
        <div className='error-text'>{props.usernameError}</div>
      ) : (
        false
      )}
      <label htmlFor='username'>Password</label>
      {props.passwordInput}
      {props.passwordError !== '' ? (
        <div className='error-text'>{props.passwordError}</div>
      ) : (
        false
      )}
      <SubmitButton
        submit={props.onSubmit}
        submitting={props.submitting}
      ></SubmitButton>
    </form>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
