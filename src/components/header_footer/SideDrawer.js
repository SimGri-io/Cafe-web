import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List
        component="nav"
        style={{
          fontFamily: "Open Sans Condensed, sans-serif",
          fontSize: "20px",
          padding: "2rem 1rem",
          height: "100vh",
          backgroundColor: "rgb(43, 25, 23)",
          color: "rgb(242, 239, 218)",
        }}
      >
        <ListItem button onClick={() => scrollToElement("welcome")}>
          Welcome
        </ListItem>
        <ListItem button onClick={() => scrollToElement("mission")}>
          Our Mission
        </ListItem>
        <ListItem button onClick={() => scrollToElement("about")}>
          Our Coffee
        </ListItem>
        <ListItem button onClick={() => scrollToElement("products")}>
          Products
        </ListItem>
        <ListItem button onClick={() => scrollToElement("contacts")}>
          Contacts
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
