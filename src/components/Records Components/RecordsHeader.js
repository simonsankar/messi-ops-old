import React, { Component } from "react";

import { Grid, Container, Header } from "semantic-ui-react";

class RecordsHeader extends Component {
  render() {
    return (
      <div className="records-header">
        <Grid container>
          <Grid.Column>
            <Header>Records</Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default RecordsHeader;
