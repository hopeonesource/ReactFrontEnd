import React, { Component } from 'react';
import Intro from "../components/homeComponents/introComponent.js";
import Welcome from "../components/homeComponents/welcomeComponent.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Welcome />
      </div>
    );
  }
}

export default Home;
