import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class SeasonsDetails extends Component {
  render() {
    return (
      <div className="seasons-details">
        <Grid container>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Image
                className="seasons-img"
                size="tiny"
                circular
                src={
                  'https://sport.nessma.tv/uploads/1/2018-03/b4bb17f318d6f04949c95827a6ae7f91.jpg'
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              Table 1
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              Table 2
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
