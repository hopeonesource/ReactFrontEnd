import React, { Component } from 'react';
import CallToAction from "./callToActionContainer.js"
import { withStyles } from '@material-ui/core/styles';
import Hero from './testHeroContainer.js'



class Home extends Component {
  render() {

    // const classes = this.props.classes;
    return (
      <div >
        <Hero />
      </div>
    );
  }
}

export default (Home);
