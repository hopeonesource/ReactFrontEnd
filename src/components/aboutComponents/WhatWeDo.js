import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ToggleDisplay from 'react-toggle-display';
import Stats from "./Stats";

const styles = theme => ({
  headspacing: {
    marginTop: "50px",
    paddingLeft: "25px",
    paddingRight: "25px"
  },
  bodyspacing: {
    marginBottom: "20px",
    paddingLeft: "25px",
    paddingRight: "25px"
  }
});

class WhatWeDo extends Component{

  state = { show: false }

  handleClick() {
  this.setState({
    show: !this.state.show
  });
}

  render(){
    const { classes } = this.props;
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
            Lorem ipsum dolor sit amet, {" "}
          <ToggleDisplay show={this.state.show}>
            consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ToggleDisplay>
          <IconButton aria-label="MoreHoriz" onClick={ () => this.handleClick() }>
            <MoreHorizIcon fontSize="small" />
          </IconButton>
       </Typography>
        <Stats />
      </div>
    );
  };
};

export default withStyles(styles)(WhatWeDo);
