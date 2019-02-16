import React, { Component } from 'react';
import CallToAction from "./callToActionContainer.js"
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    maxWidth: '800px',
    backgroundImage: '',
  }
})
class Home extends Component {
  render() {
    const { classes } = this.props;
    // const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <CallToAction />
      </div>
    );
  }
}

export default withStyles(styles)(Home);
