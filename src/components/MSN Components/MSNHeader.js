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
    <div className="msn">
      <Container>
        <Grid className="msn-container">
          <Grid.Row verticalAlign="middle">
            <Grid.Column
              className="msn-column"
              computer={8}
              tablet={8}
              mobile={16}
              verticalAlign="middle"
            >
              <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <div>
                  <div className="msn-title msn-title-small">
                    "Messi. Suarez. Neymar.
                  </div>
                  <div className="msn-sub msn-sub-small">
                    ..spells danger ..spells goals"
                  </div>
                </div>
              </Responsive>
              <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                <div style={{ marginTop: "20px" }}>
                  <div className="msn-title msn-title-small-mobile">
                    "Messi. Suarez. Neymar.
                  </div>
                  <div className="msn-sub msn-sub-small-mobile">
                    ..spells danger ..spells goals"
                  </div>
                </div>
              </Responsive>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <div className="msn-img">
                <Image className="msn-image" src={msn} fluid />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeHeader;
