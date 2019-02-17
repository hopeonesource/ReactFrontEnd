import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


const AboutHero = (props) => {
  const { classes } = props;

  return (
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Hope One Source
            </Typography>
            <Image align="center"
              src="https://uc72ae760d176baa9c1841172ab2.previews.dropboxusercontent.com/p/thumb/AAXAPUauznm3qLQGV9U9mznlG-Ru7A2q5ncT6jQNIucaSUkNpI-7cO9n3kTVfO9zcJK_EjRL0c-scZL30XmCKIanoKBxQySyQAGV7Mp-vGMpubeC2Uclz0f4qXesIEdvc_2Ap4nMvoW1TNYO4IQSSoRLLIoz23pv2UACTbeqIlR64dzrN88gC6bCW1Ul4Uns08oREcXkum5tUQtvvhUe-snCG1uGjHM8ZAQsk4Tzg-aa9JS48BN8Pt8oIfnVqs5IRwgKkM5UNZ13Y_wCMP2tKtrt/p.jpeg?size_mode=5"
            />
            </div>
          </div>
  );
}


export default withStyles(styles)(AboutHero);
