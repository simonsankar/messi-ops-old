import React, { Component } from "react";

import { Card, Grid } from "semantic-ui-react";

import BlogHeader from "./BlogHeader";
import { BlogAlpha } from "./BlogItems";

export default class Blog extends Component {
  render() {
    return (
      <div>
        <BlogHeader />

        <Grid container padded="vertically">
          <Grid.Row>
            <Grid.Column>
              <Card.Group itemsPerRow={4}>
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
                <BlogAlpha />
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
