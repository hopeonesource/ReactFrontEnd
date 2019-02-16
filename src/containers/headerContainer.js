import React, { Component } from 'react';
import ButtonAppBar from '../ButtonAppBar';
import { Typography } from '@material-ui/core';

class Header extends Component {
  render() {
    return (
      <div>
      <ButtonAppBar />
      <Typography variant='h2'>Welcome to Hope One Source</Typography>
      </div>
    );
  }
}

export default Header;
