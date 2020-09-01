import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';
import Form from './form/form.js';
import Login from './login/login';

// <Provider store={store}><App></App> </Provider>

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Main>
        <Login></Login>
      </Main>
      <Footer></Footer>

    </div>
  );
}

export default App;
