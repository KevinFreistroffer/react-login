import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setUserValuesAction, setLoadingValuesAction } from '../redux/actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.username !== '' && this.props.username === '') {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {}

  signOut = () => {
    this.props.setUserValues('', '');
    this.props.setLoadingValues(true, 'Signing out!');
    setTimeout(() => {
      this.props.history.push('/');
      this.props.setLoadingValues(false, '');
    }, 2000);
  };

  render() {
    if (this.props.username !== '') {
      return (
        <div id='dashboard'>
          <header>
            <p className='signed-in-as'>
              Signed in as&nbsp;<span>{this.props.username}</span>
            </p>
            <p className='sign-out' onClick={this.signOut}>
              Sign out?
            </p>
          </header>
          This component only shows if logged in. Logged in is only true if
          redux returns a user. Dashboard
        </div>
      );
    } else {
      return <Redirect to='/login' />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.username,
    password: state.userReducer.password,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserValues: (username, password) =>
      dispatch(setUserValuesAction(username, password)),
    setLoadingValues: (isOpen, text) =>
      dispatch(setLoadingValuesAction(isOpen, text)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
