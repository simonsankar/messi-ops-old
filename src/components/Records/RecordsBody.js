import React, { Component } from "react";

import { RecordItem, RecordItemAlt } from "./RecordItem";
export default class RecordsBody extends Component {
  render() {
    return (
      <>
        <RecordItem />
        <RecordItemAlt />
        <RecordItem />
        <RecordItemAlt />
      </>
    );
  }
}
