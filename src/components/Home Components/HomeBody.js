import React, { Component } from 'react';

import { Container, Grid, Embed } from 'semantic-ui-react';
import PostList from '../Blog Components/PostList';

class HomeBody extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Container>
            <Grid className="home-container">
              <Grid.Row columns={2} verticalAlign="top" divided>
                <Grid.Column computer={10} tablet={8} mobile={16}>
                  <div className="home-header">Blog Posts</div>
                  <PostList />
                </Grid.Column>
                <Grid.Column computer={6} tablet={8} mobile={16}>
                  <div className="home-header">Don't know</div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
export default HomeBody;
