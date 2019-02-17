import React, { Component } from "react";
import ActionButton from "../components/homeComponents/actionButtonComponent.js";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  container: {
    // maxWidth: '100%',
    // maxHeight: '100%',
    // backgroundImage:`url(${logo})`,
    backgroundSize: "cover"
  }
});

class CallToAction extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <ActionButton text={"Need Services?"} />
        <ActionButton text={"Provide Services?"} />
      </div>
    );
  }
}

export default withStyles(styles)(CallToAction);
