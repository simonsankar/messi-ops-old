import React, { Component } from 'react';

import { RecordItem, RecordItemAlt } from './RecordItem';

class Records extends Component {
  render() {
    return (
      <div>
        <h1>Records</h1>
        <RecordItem />
        <RecordItemAlt />
        <RecordItem />
        <RecordItemAlt />
      </div>
    );
  }
}

export default Records;
