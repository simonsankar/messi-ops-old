import React, { Component } from 'react';

import { Container, Grid } from 'semantic-ui-react';
import PostList from '../Blog Components/PostList';

class HomeBody extends Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Grid className="home-container">
            <Grid.Row columns={2} verticalAlign="top" divided>
              <Grid.Column computer={10} tablet={8} mobile={16}>
                <div className="home-header">
                  Posts <span className="home-header-line" />
                </div>
                <PostList />
              </Grid.Column>
              <Grid.Column computer={6} tablet={8} mobile={16}>
                <div className="home-header">Recent Videos</div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default HomeBody;
