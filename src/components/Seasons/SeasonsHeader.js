import React, { Component } from "react";

import { Grid, Header } from "semantic-ui-react";

class SeasonHeader extends Component {
  render() {
    return (
      <div className="seasons__header">
        <Grid container padded="vertically">
          <Grid.Column>
            <Header>Seasons</Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SeasonHeader;
