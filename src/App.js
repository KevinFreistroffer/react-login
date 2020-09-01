import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './header/header.js';
import Main from './main/main.js';
import Footer from './footer/footer.js';
import Form from './form/form.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

    </div>
  );
}

export default App;
