import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import { Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <Typography variant='h2'>Welcome to Hope One Source</Typography>
      </div>
    );
  }
}

export default App;
