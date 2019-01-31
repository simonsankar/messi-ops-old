import React, { Component } from "react";

import MSNSingle from "./MSNSingle";
export default class MSNBody extends Component {
  render() {
    return (
      <div>
        <MSNSingle img={1} />
        <MSNSingle img={2} />
        <MSNSingle img={3} />
      </div>
    );
  }
}
