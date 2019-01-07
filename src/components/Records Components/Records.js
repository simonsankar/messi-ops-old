import React, { Component } from "react";

import RecordsHeader from "./RecordsHeader";
import RecordsBody from "./RecordsBody";
import Footer from "../Footer Components/Footer";

class Records extends Component {
  render() {
    return (
      <div className="records">
        <RecordsHeader />
        <RecordsBody />
        <Footer />
      </div>
    );
  }
}

export default Records;
