import React from 'react';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';

const styles = {
  spacing: {
    margin: '8px',
    textDecoration: 'none',
    color: 'white',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.grow} variant='h5'>
            <Link className={classes.spacing} to='/'>
              Hope One Source
            </Link>
          </Typography>
          <Link className={classes.spacing} to='/about'>About</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(ButtonAppBar);