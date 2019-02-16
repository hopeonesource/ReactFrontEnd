import React, { Component } from 'react';
import './App.css';
import Header from './containers/headerContainer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './containers/About';
import HomeExample from './containers/HomeExample';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomeExample} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
