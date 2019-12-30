import React, { Component } from "react";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
export default class Blog extends Component {
  render() {
    return (
      <div>
        <BlogHeader />
        <BlogBody />
      </div>
    );
  }
}
