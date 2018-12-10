import React, { Component } from 'react';

import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import Footer from '../Footer Components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Home;
