import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = {

  spacing: {
    marginBottom: 20,
    paddingRight: 20,
    paddingLeft: 20,
    // padding: 8
  },
  centered: {
    display: "block",
    margin: "auto",
    width: "60%",
    height: "50%"
  },
  headspacing: {
    marginTop: "50px",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  bodyspacing: {
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "content-box",
    marginBottom: "30px"
  }
};

function OurSponsors(props) {
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
        Our Sponsors
      </Typography>

      <Grid className={classes.bodyspacing} container>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="Cisco"
                className={classes.centered}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/2000px-Cisco_logo.svg.png"
              />
              &nbsp;
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="Lockr"
                className={classes.centered}
                src="https://www.lockr.io/sites/all/themes/lockr/logo_dark.png"
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="IEEE"
                className={classes.centered}
                src="https://brand-experience.ieee.org/wp-content/uploads/2016/12/20040816-300x168.jpeg"
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="Blackstone Federal Services"
                className={classes.centered}
                src="http://ww1.prweb.com/prfiles/2016/12/05/13901779/BTG%20square%20logo-01.png"
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="Corporation for National & Community Service"
                className={classes.centered}
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Cncs-logo_1.jpg"
              />
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <div className={classes.spacing}>
            <a href="https://www.hopeonesource.org/our-sponsors">
              <img
                alt="Americorps Vista"
                className={classes.centered}
                src="https://www.nationalservice.gov/sites/default/files/upload/acvista_0.png"
              />
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(OurSponsors);
