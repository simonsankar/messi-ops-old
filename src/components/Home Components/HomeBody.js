import React from "react";

import { Container, Grid } from "semantic-ui-react";
const HomeBody = () => {
  return (
    <div className="home">
      <Container>
        <Grid className="home-container">
          <Grid.Row columns={2} verticalAlign="top">
            <Grid.Column computer={10} tablet={8} mobile={16}>
              Posts
            </Grid.Column>
            <Grid.Column computer={6} tablet={8} mobile={16}>
              Vids
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default HomeBody;
