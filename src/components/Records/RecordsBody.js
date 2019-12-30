import React, { Component } from "react";

import { RecordItem, RecordItemAlt } from "./RecordItem";
export default class RecordsBody extends Component {
  render() {
    return (
      <div>
        <div className="record-item-list">
          <RecordItem />
          <RecordItemAlt />
          <RecordItem />
          <RecordItemAlt />
        </div>
      </div>
    );
  }
}
