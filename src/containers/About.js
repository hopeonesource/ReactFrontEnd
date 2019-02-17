import React from "react";
import AboutHero from "../components/aboutComponents/AboutHero";
import OurSponsors from "../components/aboutComponents/OurSponsors";
import OurTeam from "../components/aboutComponents/OurTeam";
import WhatWeDo from "../components/aboutComponents/WhatWeDo";
import WhoWeAre from "../components/aboutComponents/WhoWeAre";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: "800px",
    margin: "auto",
    marginTop: "16px"
  },
  grow: {
    flexGrow: 1
  }
};

function About(props) {
  const { classes } = props;
  return (
    <div>
      <AboutHero />
      <div className={classes.root}>
        <WhoWeAre />
        <WhatWeDo />
        <OurTeam />
        <OurSponsors />
      </div>
    </div>
  );
}

export default withStyles(styles)(About);
