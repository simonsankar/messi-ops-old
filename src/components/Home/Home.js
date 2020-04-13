import React from "react";
// import { connect } from "react-redux";
// import { getCurrentSeason } from "../../actions/getCurrentSeason";

import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeBody />
    </>
  );
};

// Hooks instead
// const mapStateToProps = ({ currentSeason }) => ({ currentSeason });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ getCurrentSeason }, dispatch);
export default Home;
