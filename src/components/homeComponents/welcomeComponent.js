import React, { Component } from 'react';
import Purpose from "./welcomeComponents/purposeComponent.js";
import Involved from "./welcomeComponents/getInvolvedComponent.js";

import mapText from "./welcomeComponents/mapTextComponent.js";
import map from "./welcomeComponents/mapComponent.js";
import success from "./welcomeComponents/successComponent.js";
import successVideo from "./welcomeComponents/successVideoComponent.js";


//import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Welcome(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>

      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}><Purpose /></Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>map</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>mapText</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}>success</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>successVideo</Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs>
          <Paper className={classes.paper}><Involved /></Paper>
        </Grid>
      </Grid>

    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);






// function Intro (props) {
//   return (
//     <div> button intro here </div>
//   )
// }

// export default Intro;
