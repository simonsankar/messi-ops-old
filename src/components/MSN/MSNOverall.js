import React from "react";

import { Grid } from "semantic-ui-react";
import MSNCareer from "./MSNCareer";

const MSNOverall = () => {
  return (
    <div className="msn__overall">
      <Grid container centered stackable>
        <Grid.Column computer={4} tablet={16} mobile={16}>
          <MSNCareer
            stats={{
              title: "All Competitions",
              apps: 450,
              goals: 364,
              assists: 171
            }}
          />
        </Grid.Column>
        <Grid.Column computer={4} tablet={5} mobile={16}>
          <MSNCareer
            stats={{
              title: "La Liga",
              apps: 299,
              goals: 250,
              assists: 115
            }}
          />
        </Grid.Column>
        <Grid.Column computer={4} tablet={5} mobile={16}>
          <MSNCareer
            stats={{
              title: "Champions League",
              apps: 87,
              goals: 62,
              assists: 28
            }}
          />
        </Grid.Column>
        <Grid.Column computer={4} tablet={5} mobile={16}>
          <MSNCareer
            stats={{
              title: "Other Cups",
              apps: 63,
              goals: 52,
              assists: 28
            }}
          />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MSNOverall;
