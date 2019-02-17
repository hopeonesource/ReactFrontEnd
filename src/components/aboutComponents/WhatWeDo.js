import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Stats from "./Stats";

const styles = theme => ({
  headspacing: {
    marginTop: "50px",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  bodyspacing: {
    marginBottom: "50px",
    paddingLeft: "25px",
    paddingRight: "25px"
  }
});

const WhatWeDo = props => {
  const { classes } = props;

  return (
    <div>
      <Typography
        className={classes.headspacing}
        variant="h2"
        align="left"
        color="textPrimary"
        gutterBottom
      >
        What We Do
      </Typography>
      <Typography
        className={classes.bodyspacing}
        variant="body1"
        align="left"
        color="textPrimary"
        gutterBottom
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Stats />
    </div>
  );
};

export default withStyles(styles)(WhatWeDo);
