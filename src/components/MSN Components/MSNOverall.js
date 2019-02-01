import React, { Component } from "react";

import { Grid } from "semantic-ui-react";
import HomeCareer from "../Home Components/HomeCareer";

export default class MSNOverall extends Component {
  render() {
    return (
      <div className="msn-overall">
        <Grid container centered>
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <HomeCareer
              stats={{
                title: "All Competitions",
                apps: 151,
                goals: 90,
                assists: 46
              }}
            />
          </Grid.Column>
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <HomeCareer
              stats={{
                title: "La Liga",
                apps: 151,
                goals: 90,
                assists: 46
              }}
            />
          </Grid.Column>
          <Grid.Column computer={5} tablet={5} mobile={16}>
            <HomeCareer
              stats={{
                title: "Other Cups",
                apps: 151,
                goals: 90,
                assists: 46
              }}
            />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
