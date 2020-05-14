import React from "react";

import { Grid, Header, Icon, Popup } from "semantic-ui-react";

const SeasonHeader = () => {
  return (
    <div className="seasons__header">
      <Grid container padded="vertically">
        <Grid.Column>
          <Header>
            Seasons
            <Popup
              size="large"
              inverted
              hoverable
              basic
              trigger={
                <Icon className="pulse" name="info" size="mini" circular />
              }
              position="bottom left"
            >
              <Popup.Header style={{ fontFamily: "UniversLT" }}>
                Context matters
              </Popup.Header>
              <Popup.Content style={{ width: "100%" }}>
                <p>
                  Data shown here is primarily Messi's but also those who where
                  individually brilliant to add context to how superior Messi's
                  numbers stacks up seeing that his role in mordern day football
                  is supplier + finisher.
                </p>
                <p>
                  Having other strikers/playermakers who were chart toppers in
                  their own leagues/clubs helps us understand the sheer
                  brilliance Messi has provided throughout the years.
                </p>
              </Popup.Content>
            </Popup>
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default SeasonHeader;
