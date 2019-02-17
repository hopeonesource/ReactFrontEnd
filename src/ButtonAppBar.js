import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import { Typography } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../src/logo.png";
const styles = theme => ({
  hamburgerSpacing: {
    marginRight: "16px",
    fontSize: "24px"
  },
  spacing: {
    margin: "8px",
    textDecoration: "none",
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "grey",
    borderBottom: "2px solid transparent",
    margin: "0 16px",
    padding: "4px",
    fontWeight: "bold",
    "&:hover": {
      color: "#bd2937",
      borderBottom: "2px solid #bd2937"
    }
  },
  root: {},
  sideBySide: {
    display: "flex",
    flexDirection: "row",
    padding: "16px",
    alignItems: "center"
  },
  grow: {
    [theme.breakpoints.up("md")]: {
      flexGrow: 1
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "auto"
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    color: "#bd2937",
    textDecoration: "none"
  },
  titleIcon: {
    [theme.breakpoints.up("md")]: {
      height: 72,
      widht: 225
    },
    [theme.breakpoints.down("sm")]: {
      height: 48,
      widht: 150
    }
  },
  highlightedLink: {
    textDecoration: "none",
    margin: "0 16px",
    padding: "4px",
    color: "#bd2937",
    borderBottom: "2px solid #bd2937",
    fontWeight: "bold"
  },
  list: {
    paddingTop: "32px"
  },
  mobileLink: {
    textDecoration: "none",
    borderLeft: "2px solid transparent",
    padding: "4px",
    fontWeight: "bold"
  },
  highlightedMobileLink: {
    textDecoration: "none",
    paddingLeft: "16px",
    color: "#bd2937",
    borderLeft: "2px solid #bd2937",
    fontWeight: "bold"
  }
});

class ButtonAppBar extends React.Component {
  state = {
    highlighted: "",
    drawerOpen: false
  };
  render() {
    const { classes } = this.props;
    if (
      this.state.highlighted !== "about" &&
      window.location.pathname.toLowerCase().includes("about")
    ) {
      this.setState({ highlighted: "about" });
    }
    if (
      this.state.highlighted !== "news" &&
      window.location.pathname.toLowerCase().includes("news")
    ) {
      this.setState({ highlighted: "news" });
    }
    if (
      this.state.highlighted !== "involved" &&
      window.location.pathname.toLowerCase().includes("involved")
    ) {
      this.setState({ highlighted: "involved" });
    }

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button>
            <a
              className={classes.mobileLink}
              href="https://www.hopeonesource.org/user"
            >
              <ListItemText primary={"Sign In"} />
            </a>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <Link
              to="/"
              className={
                this.state.highlighted === ""
                  ? classes.highlightedMobileLink
                  : classes.mobileLink
              }
              onClick={() => this.setState({ highlighted: "" })}
            >
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className={
                this.state.highlighted === "about"
                  ? classes.highlightedMobileLink
                  : classes.mobileLink
              }
              to="/about"
              onClick={() => this.setState({ highlighted: "about" })}
            >
              <ListItemText primary="About" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className={
                this.state.highlighted === "news"
                  ? classes.highlightedMobileLink
                  : classes.mobileLink
              }
              to="/news"
              onClick={() => this.setState({ highlighted: "news" })}
            >
              <ListItemText primary="News & Updates" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link
              className={
                this.state.highlighted === "involved"
                  ? classes.highlightedMobileLink
                  : classes.mobileLink
              }
              to="/involved"
              onClick={() => this.setState({ highlighted: "involved" })}
            >
              <ListItemText primary="Get Involved" />
            </Link>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="primary"
          className={classes.sideBySide}
        >
          <Typography className={classes.grow} variant="h5">
            <Link
              className={classes.title}
              to="/"
              onClick={() => this.setState({ highlighted: "" })}
            >
              <img alt="title" className={classes.titleIcon} src={logo} />
            </Link>
          </Typography>
          <Hidden smDown>
            <Link
              className={
                this.state.highlighted === "about"
                  ? classes.highlightedLink
                  : classes.link
              }
              to="/about"
            >
              ABOUT
            </Link>
            <Link
              color="inherit"
              className={
                this.state.highlighted === "news"
                  ? classes.highlightedLink
                  : classes.link
              }
              to="/news"
            >
              NEWS & UPDATES
            </Link>
            <Link
              className={
                this.state.highlighted === "involved"
                  ? classes.highlightedLink
                  : classes.link
              }
              to="/get-involved"
            >
              GET INVOLVED
            </Link>
            <a
              className={classes.link}
              href="https://www.hopeonesource.org/user"
            >
              SIGN IN
            </a>
          </Hidden>
          <Hidden mdUp>
            <DehazeIcon
              className={classes.hamburgerSpacing}
              onClick={() =>
                this.setState({ drawerOpen: !this.state.drawerOpen })
              }
            />
            <Drawer
              anchor="right"
              open={this.state.drawerOpen}
              onClose={() => this.setState({ drawerOpen: false })}
            >
              <div
                tabIndex={0}
                role="button"
                onClick={() => this.setState({ drawerOpen: false })}
                onKeyDown={() => this.setState({ drawerOpen: false })}
              >
                {sideList}
              </div>
            </Drawer>
          </Hidden>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);
