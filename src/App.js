import React, { Component } from 'react';
import './App.css';
import Header from './containers/headerContainer.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutExample from './containers/AboutExample';
import HomeExample from './containers/HomeExample';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={HomeExample} />
            <Route exact path="/about" component={AboutExample} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
