import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  spacing: {
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    padding: 8
  },
  centered: {
    display: 'block',
    margin: 'auto',
    height: 200,
    width: 200,
  },
  headspacing: {
    marginTop: '50px',
  },
};

function OurSponsors(props) {
  const { classes } = props;
  return (
    <div>
    <Typography className={classes.headspacing} variant="h2" align="left" color="textPrimary" gutterBottom>
      Our Sponsors
    </Typography>

    <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='body1'>Sponsors</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/2000px-Cisco_logo.svg.png"/>
            &nbsp;
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='h6'>Project Manager!</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="https://www.lockr.io/sites/all/themes/lockr/logo_dark.png"/>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12}  sm={6}md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='h6'>Project Manager!</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="https://brand-experience.ieee.org/wp-content/uploads/2016/12/20040816-300x168.jpeg"/>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='h6'>Project Manager!</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="http://ww1.prweb.com/prfiles/2016/12/05/13901779/BTG%20square%20logo-01.png"/>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='h6'>Project Manager!</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="https://upload.wikimedia.org/wikipedia/commons/4/41/Cncs-logo_1.jpg"/>
            </a>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.spacing}>
            {/* <Typography variant='h6'>Project Manager!</Typography> */}
            <a href="https://www.hopeonesource.org/our-sponsors">
            <img className={classes.centered} src="https://www.nationalservice.gov/sites/default/files/upload/acvista_0.png"/>
            </a>
          </Paper>
        </Grid>
    </Grid>
    </div>
  );
}


export default withStyles(styles)(OurSponsors);
