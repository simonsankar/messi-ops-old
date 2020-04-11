import React, { Component } from "react";

import MSNSingle from "./MSNSingle";
import MSNOverall from "./MSNOverall";

export default class MSNBody extends Component {
  render() {
    return (
      <>
        <MSNOverall />
        <MSNSingle player={1} />
        <MSNSingle player={2} />
        <MSNSingle player={3} />
      </>
    );
  }
}
