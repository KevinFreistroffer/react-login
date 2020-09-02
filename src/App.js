import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.scss';
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';
import Form from './form/form.js';
import Login from './login/login';
import Loading from './loading/loading';
import { setLoadingValues } from './redux/actions';


function App(props) {
  useEffect(() => {
    props.setLoadingValues(false, props.text);
  });

  return (
    <div className="App">
      {props.loading ? <Loading></Loading> :
        <Fragment>
          <Header></Header>
          <Main>
            <Login></Login>
          </Main>
          <Footer></Footer>
        </Fragment>}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    loading: state.loadingReducer.loading,
    text: state.loadingReducer.text,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoadingValues: (loading = false, text = '') => dispatch(setLoadingValues(loading, text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
