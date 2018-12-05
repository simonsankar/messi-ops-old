import React, { Component } from "react";

import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeBody />
      </div>
    );
  }
}

export default Home;
