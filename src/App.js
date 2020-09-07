import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.scss';
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';

import Login from './login/login';
import Loading from './loading/loading';
import { setLoadingValuesAction } from './redux/actions';
import Dashboard from './dashboard/dashboard';

function App(props) {
  return (
    <div className='App'>
      {props.loading ? (
        <Loading></Loading>
      ) : (
        <Fragment>
          <Header></Header>
          <Main>
            <Router>
              <Switch>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/dashboard'>
                  <Dashboard />
                </Route>
                <Route path='/'>
                  <Login />
                </Route>
              </Switch>
            </Router>
          </Main>
          <Footer></Footer>
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loadingReducer.loading,
    text: state.loadingReducer.text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingValuesAction: (loading = false, text = '') =>
      dispatch(setLoadingValuesAction(loading, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
