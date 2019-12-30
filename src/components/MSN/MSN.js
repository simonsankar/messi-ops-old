import React, { Component } from "react";

import MSNHeader from "./MSNHeader";
import MSNBody from "./MSNBody";
import Footer from "../Footer/Footer";

class MSN extends Component {
  render() {
    return (
      <div>
        <MSNHeader />
        <MSNBody />
        <Footer />
      </div>
    );
  }
}

export default MSN;
