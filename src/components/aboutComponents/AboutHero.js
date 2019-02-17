import React from "react";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import { withStyles } from "@material-ui/core/styles";
import team from "../../images/team.jpg";

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
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  headspacing: {
    marginTop: "25vh",
    paddingLeft: "25px",
    paddingRight: "25px",
    color: 'white'
  },
});

const AboutHero = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography
          className={classes.headspacing}
          variant="h2"
          align="center"
          gutterBottom
        >
          About HopeOneSource
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(AboutHero);
