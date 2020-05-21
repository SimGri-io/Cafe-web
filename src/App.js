import React, { Component } from "react";
import "./css/App.css";
import Header from "./components/header_footer/Header";
import Welcome from "./components/welcome/index";
import Mission from "./components/mission";
import Coffee from "./components/coffee";
import Products from "./components/products";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "3600px" }}>
        <Header />
        <Element name="welcome">
          <Welcome />
        </Element>
        <Element name="mission">
          <Mission />
        </Element>
        <Element name="about">
          <Coffee />
        </Element>
        <Element name="products">
          <Products />
        </Element>
        <Element name="contacts">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
