import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
};

function HomeExample(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant='h6'>Welcome to the home example!</Typography>
    </div>
  );
}


export default withStyles(styles)(HomeExample);