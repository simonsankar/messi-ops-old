import React from "react";

import { Grid, Image } from "semantic-ui-react";

export const RecordItem = () => {
  return (
    <div className="record-item">
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image
              className="record-img"
              circular
              size="small"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt265gDR-meyzXdUbLBQIYoP6-EcIx0DpCizAO1jgcxW2Yi_hEgw"
              }
            />
          </Grid.Column>
          <Grid.Column width={10} />
        </Grid.Row>
        <Grid.Row />
      </Grid>
    </div>
  );
};
export const RecordItemAlt = () => {
  return <div className="record-item-alt">rec</div>;
};
