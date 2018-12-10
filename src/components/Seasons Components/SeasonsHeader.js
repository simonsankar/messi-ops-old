import React, { Component } from "react";

import { Grid, Container, Header } from "semantic-ui-react";

class SeasonHeader extends Component {
  render() {
    return (
      <div className="seasons-header">
        <Grid container>
          <Grid.Column>
            <Header>Seasons</Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SeasonHeader;
