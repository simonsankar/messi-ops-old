import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";

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
                  "https://i.pinimg.com/736x/d7/60/fb/d760fbc1a6bf51234fd2fa5365f0ec81--messi-leo-lionel-messi.jpg"
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
