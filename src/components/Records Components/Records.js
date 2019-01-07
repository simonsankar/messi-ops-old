import React, { Component } from "react";

import RecordsHeader from "./RecordsHeader";
import { RecordItem, RecordItemAlt } from "./RecordItem";

class Records extends Component {
  render() {
    return (
      <div className="records">
        <RecordsHeader />
        <RecordItem />
        <RecordItemAlt />
        <RecordItem />
        <RecordItemAlt />
      </div>
    );
  }
}

export default Records;
