import React, { Component } from "react";

import { Grid, Header } from "semantic-ui-react";

class ArgumentsAgainstHeader extends Component {
  render() {
    return (
      <div className="args-header">
        <Grid container>
          <Grid.Column>
            <Header>Arguments Against</Header>
            <div className="args-content">
              Eviserating frequently argued senseless points against why he is
              the greatest to ever do it with logic and evidence of course.
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ArgumentsAgainstHeader;
