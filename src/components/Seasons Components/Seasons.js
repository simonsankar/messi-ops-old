import React, { Component } from 'react';

import { Container, Grid, Card, Image } from 'semantic-ui-react';
import SeasonsHeader from './SeasonHeader';

class Seasons extends Component {
  render() {
    return (
      <div className="seasons">
        <SeasonsHeader />
        <Container className="seasons-container">
          <Grid>
            <Grid.Row>
              <Grid.Column width={3}>
                <Card>
                  <Image src="https://i.pinimg.com/236x/85/1c/06/851c06c393f320792e6330dfb01d4bf8--lionel-messi.jpg" />
                  <Card.Content>
                    <Card.Header>2016/2016</Card.Header>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Seasons;
