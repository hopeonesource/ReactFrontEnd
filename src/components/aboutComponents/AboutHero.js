import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { withStyles } from "@material-ui/core/styles";
import team from "../../images/team.jpg";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url(${team})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: '80vh',
    filter: "grayscale(100%)"
  },
  heroContent: {
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  headspacing: {
    marginTop: "25vh",
    color: 'white'
  },
  flex: {
    direction: "column",
    justify:"center",
    alignItems:"center"
  }
});

const AboutHero = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
      <Grid className={classes.flex} container>
        <Grid item xs={14} sm={12} md={12}>
        <Typography
          className={classes.headspacing}
          variant="h2"
          align="center"
          gutterBottom
        >
          About HopeOneSource
        </Typography>
        </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withStyles(styles)(AboutHero);
