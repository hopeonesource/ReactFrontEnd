import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import frank from "../../images/frank.png";
import nick from "../../images/nick.png";
import needImage from "../../images/needImage.png";
const styles = theme => ({
  spacing: {
    padding: "8px 10px 8px 10px",
    display: "flex",
    flexDirection: "row",
    boxShadow: "none"
  },
  centered: {
    display: "inline-block",
    height: "100px",
    width: "100px",
    padding: "10px",
    borderRadius: "50%"
  },
  position: {
    color: "#413f3f"
  },
  headspacing: {
    marginTop: "50px",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  bodyspacing: {
    paddingLeft: "20px",
    paddingRight: "20px",
    boxSizing: "content-box",
    marginBottom: "20px"
  }
});
const OurTeam = props => {
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
        Our Team
      </Typography>
      <Typography
        className={classes.bodyspacing}
        variant="subtitle1"
        align="left"
        color="textPrimary"
        gutterBottom
      >
        Members with 1+ year of service.
      </Typography>

      <Grid className={classes.bodyspacing} container>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img
              alt="Tim Underwood"
              className={classes.centered}
              src={needImage}
            />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Tim Underwood
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Team Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img
              alt="Chris Teitzel"
              className={classes.centered}
              src={needImage}
            />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Chris Teitzel
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Architect Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img
              alt="Tom Gertin"
              className={classes.centered}
              src={needImage}
            />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Tom Gertin
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                GIS & Data Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img
              alt="Anthony Glynn"
              className={classes.centered}
              src={needImage}
            />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                {" "}
                Anthony Glynn
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Development Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img alt="Nick Hanson" className={classes.centered} src={nick} />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                {" "}
                Nick Hanson
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Communications Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img alt="Frank Adames" className={classes.centered} src={frank} />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Frank Adames
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Technical Lead
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img alt="default" className={classes.centered} src={needImage} />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Name
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Position Title
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img alt="default" className={classes.centered} src={needImage} />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Name
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Position Title
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.spacing}>
            <img alt="default" className={classes.centered} src={needImage} />
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Name
              </Typography>
              <Typography
                variant="body2"
                className={classes.position}
                gutterBottom
              >
                Position Title
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(styles)(OurTeam);
