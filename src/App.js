import React, { Component } from 'react';
import './App.css';
import Header from './containers/headerContainer.js';
import Home from './containers/homeContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
