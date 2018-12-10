import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

export default class SeasonsDetails extends Component {
  render() {
    return (
      <div className="seasons-details">
        <Grid container>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              Hello
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
