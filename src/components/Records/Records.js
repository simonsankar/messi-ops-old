import React, { Component } from "react";

import RecordsHeader from "./RecordsHeader";
import RecordsBody from "./RecordsBody";

class Records extends Component {
  render() {
    return (
      <div className="records">
        <RecordsHeader />
        <RecordsBody />
      </div>
    );
  }
}

export default Records;
