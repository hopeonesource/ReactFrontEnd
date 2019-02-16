import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function ActionButton(props) {
  const { classes } = props;
  return (
    <div>
      <Fab color="primary" variant="extended" aria-label="Delete" className={classes.fab}>
        {props.text}
      </Fab>
    </div>
  );
}

export default withStyles(styles)(ActionButton);
