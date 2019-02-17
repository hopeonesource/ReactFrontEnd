import React, { Component } from "react";
import Hero from "./heroContainer.js";
import Welcome from "../components/homeComponents/welcomeComponent.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
      </div>
    );
  }
}

export default Home;
