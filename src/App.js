import React, { Component } from "react";
import "./App.css";
import Header from "./containers/headerContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./containers/About";
import HomeExample from "./containers/HomeExample";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div>
              <Header />
              <Route exact path="/" component={HomeExample} />
              <Route exact path="/about" component={About} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
