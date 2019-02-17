import React, { Component } from "react";
import "./App.css";
import Header from "./containers/headerContainer.js";
import Home from "./containers/homeContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
