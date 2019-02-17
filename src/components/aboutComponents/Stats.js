import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: "800px",
    margin: "auto",
    textAlign: "center"
  },
  statSpacing: {
    padding: "16px"
  },
  grow: {
    flexGrow: 1
  },
  largeIcon: {
    fontSize: "48px"
  }
};

function Stats(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.statSpacing}>
          <TextsmsIcon className={classes.largeIcon} />
          <Typography variant="h4">500,000+</Typography>
          <Typography variant="subtitle1">SMS messages sent in 2019</Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.statSpacing}>
          <FavoriteIcon className={classes.largeIcon} />
          <Typography variant="h4">1600+</Typography>
          <Typography variant="subtitle1">
            Community members in need registered for the service
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} className={classes.statSpacing}>
          <SupervisorAccountIcon className={classes.largeIcon} />
          <Typography variant="h4">200+</Typography>
          <Typography variant="subtitle1">
            Service providers using the messages
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Stats);
