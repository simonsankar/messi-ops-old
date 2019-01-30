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
                  "http://3.bp.blogspot.com/-26CUMGhLqq4/T0xdnioLFcI/AAAAAAAAAJk/c814tyNYh3Y/s1600/MESSI.jpg"
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
