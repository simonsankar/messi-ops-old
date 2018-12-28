import React from "react";
import {
  Container,
  Grid,
  List,
  Image,
  Responsive,
  Rating
} from "semantic-ui-react";
import msn from "../../images/MSN-splash.png";

const HomeHeader = () => {
  return (
    <div className="hero">
      <Container>
        <Grid className="hero-container">
          <Grid.Row verticalAlign="middle">
            <Grid.Column
              className="hero-column"
              computer={8}
              tablet={8}
              mobile={16}
              verticalAlign="middle"
            >
              <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <div>
                  <div className="hero-messi hero-messi-small">
                    "Messi. Suarez. Neymar.
                  </div>
                  <div className="hero-ops hero-ops-small">
                    ..spells danger ..spells goals"
                  </div>
                </div>
              </Responsive>
              <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                <div style={{ marginTop: "20px" }}>
                  <div className="hero-messi hero-messi-mobile">
                    "Messi. Suarez. Neymar.
                  </div>
                  <div className="hero-ops hero-ops-mobile">
                    ..spells danger ..spells goals"
                  </div>
                </div>
              </Responsive>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <div className="hero-img">
                <Image className="hero-image" src={msn} fluid />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeHeader;
