import React from "react";

import { Container, Grid } from "semantic-ui-react";
const HomeBody = () => {
  return (
    <div className="home">
      <Container>
        <Grid className="home-container">
          <Grid.Row columns={2} verticalAlign="top" divided>
            <Grid.Column computer={10} tablet={8} mobile={16}>
              <div className="home-header">
                Posts <span className="home-header-line" />
              </div>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Grid.Column>
            <Grid.Column computer={6} tablet={8} mobile={16}>
              <div className="home-header">Recent Videos</div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};
export default HomeBody;
