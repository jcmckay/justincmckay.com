import React, { Component } from 'react';
import Nav from './components/nav';
import Header from './components/header';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
