import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCurrentSeason } from "../../actions/getCurrentSeason";

import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";

class Home extends Component {
  componentDidMount() {
    // this.props.getCurrentSeason();
    // console.log("current season", this.props.currentSeason);
  }
  componentDidUpdate(prevProps) {
    // if (prevProps.currentSeason !== this.props.currentSeason) {
    // console.log(this.props.currentSeason);
    // }
  }
  render() {
    // const { currentSeason } = this.props;
    return (
      <>
        <HomeHeader />
        <HomeBody />
      </>
    );
  }
}

const mapStateToProps = ({ currentSeason }) => ({ currentSeason });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentSeason }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
