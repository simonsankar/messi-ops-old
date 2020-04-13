import React from "react";

import { Grid, Header } from "semantic-ui-react";

const SeasonHeader = () => {
  return (
    <div className="seasons__header">
      <Grid container padded="vertically">
        <Grid.Column>
          <Header>Seasons</Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SeasonHeader;
