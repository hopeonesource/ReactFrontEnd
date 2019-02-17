import React, { Component } from "react";
import Hero from "./heroContainer.js";
import Welcome from "../components/homeComponents/welcomeComponent.js";
import Card from '../components/cardView';

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Welcome />
        <Card />
      </div>
    );
  }
}

export default Home;
