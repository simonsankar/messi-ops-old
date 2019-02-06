import React from "react";
import {
  Container,
  Grid,
  Image,
  Responsive,
  Transition
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
                <Transition
                  visible="true"
                  animation="zoom"
                  duration="700"
                  transitionOnMount
                >
                  <div>
                    <div className="msn-title ">"Messi. Suarez. Neymar.</div>
                    <div className="msn-sub">
                      ..spells danger ..spells goals"
                    </div>
                  </div>
                </Transition>
              </Responsive>
              <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                <Transition
                  visible="true"
                  animation="zoom"
                  duration="700"
                  transitionOnMount
                >
                  <div style={{ marginTop: "20px" }}>
                    <div className="msn-title msn-title-mobile">
                      "Messi. Suarez. Neymar.
                    </div>
                    <div className="msn-sub msn-sub-mobile">
                      ..spells danger ..spells goals"
                    </div>
                  </div>
                </Transition>
              </Responsive>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <div className="msn-img">
                <Transition
                  visible="true"
                  animation="fade up"
                  duration="700"
                  transitionOnMount
                >
                  <Image className="msn-image" src={msn} fluid />
                </Transition>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeHeader;
