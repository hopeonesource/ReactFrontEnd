import React, { Component } from "react";
import "./App.css";
import Header from "./containers/headerContainer.js";
import Home from "./containers/homeContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Card from './components/cardView'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#ffffff"
    }
  }
});
class App extends Component {
  render () {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App
