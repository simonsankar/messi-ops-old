import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { BlogAlpha, BlogOmega, BlogDelta } from './BlogItems';
export default class BlogBody extends Component {
  render() {
    return (
      <div className="blog-body">
        <Grid container>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogAlpha />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogOmega />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogOmega />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogAlpha />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogOmega />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogDelta />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogAlpha />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogDelta />
          </Grid.Column>
          <Grid.Column stretched computer={4} tablet={5} mobile={8}>
            <BlogOmega />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
