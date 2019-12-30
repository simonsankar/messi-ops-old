import React, { Component } from "react";

import { Grid, Header } from "semantic-ui-react";

class RecordsHeader extends Component {
  render() {
    return (
      <div className="records-header">
        <Grid container>
          <Grid.Column>
            <Header>Records</Header>
            <div className="records-content">
              Messi has lots of records. Te vel eruditi alienum ponderum. Nibh
              quaeque deseruisse an his, quo ne scripta mandamus. An primis
              voluptaria ius, has cu vide meis principes, vitae commodo
              gloriatur vix ne. An erat epicurei intellegat vim, per an possit
              urbanitas definitionem.
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default RecordsHeader;
