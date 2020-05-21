import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true,
      });
    } else {
      this.setState({
        headerShow: false,
      });
    }
  };

  toggleDrawer = (value) => {
    this.setState({
      drawerOpen: value,
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow
            ? "rgba(31, 18, 4, 0.9)"
            : "transparent",
          boxShadow: "none",
          padding: "10px 0",
        }}
      >
        <Toolbar>
          <div
            className="header-logo"
            style={{
              color: "rgb(242, 239, 218)",
            }}
          >
            <div className="font-one">Coffee Addict</div>
            <div
              className="font-two"
              style={{
                textTransform: "uppercase",
              }}
            >
              Family cafe since 1991
            </div>
          </div>
          <IconButton
            aria-label="Menu"
            style={{
              color: "rgb(242, 239, 218)",
            }}
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}
