import React from 'react'
import AboutHero from '../components/aboutComponents/AboutHero'
import OurSponsors from '../components/aboutComponents/OurSponsors'
import OurTeam from '../components/aboutComponents/OurTeam'
import WhatWeDo from '../components/aboutComponents/WhatWeDo'
import WhoWeAre from '../components/aboutComponents/WhoWeAre'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: '800px',
    margin: 'auto'
  },
  grow: {
    flexGrow: 1,
  }
};

function About(props) {
  const { classes } = props;
  return(
    <div className={classes.root}>
      <AboutHero />
      <WhoWeAre />
      <WhatWeDo />
      <OurSponsors />
      <OurTeam />
    </div>
  )
}

export default withStyles(styles)(About);
