import React from "react";
import { Grid, Image, Responsive, Transition } from "semantic-ui-react";

import msn from "../../images/MSN-splash.png";

const HomeHeader = () => {
  return (
    <div className="msn">
      <Grid container padded="vertically" className="msn__container">
        <Grid.Row verticalAlign="middle">
          <Grid.Column
            className="msn__column"
            computer={8}
            tablet={8}
            mobile={16}
            verticalAlign="middle"
          >
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
              <Transition
                visible
                animation="zoom"
                duration="700"
                transitionOnMount
              >
                <div>
                  <div className="msn__title ">"Messi. Suarez. Neymar.</div>
                  <div className="msn__sub">..spells danger ..spells goal"</div>
                </div>
              </Transition>
            </Responsive>
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
              <Transition
                visible
                animation="zoom"
                duration="700"
                transitionOnMount
              >
                <div style={{ marginTop: "20px" }}>
                  <div className="msn__title msn__title--mobile">
                    "Messi. Suarez. Neymar.
                  </div>
                  <div className="msn__sub msn__sub--mobile">
                    ..spells danger ..spells goals"
                  </div>
                </div>
              </Transition>
            </Responsive>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <div className="msn__img__container">
              <Transition
                visible
                animation="fade up"
                duration="700"
                transitionOnMount
              >
                <Image className="msn__img" src={msn} fluid />
              </Transition>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default HomeHeader;
