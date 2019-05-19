import React from "react";

import messi from "../../images/messi-home.png";
import {
  Container,
  Grid,
  List,
  Image,
  Responsive,
  Rating,
  Transition
} from "semantic-ui-react";

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
                <Transition
                  visible="true"
                  animation="zoom"
                  duration="700"
                  transitionOnMount
                >
                  <div>
                    <div className="hero-messi">"Messi</div>
                    <div className="hero-ops">Ops"</div>
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
                    <div className="hero-messi hero-messi-mobile">"Messi</div>
                    <div className="hero-ops hero-ops-mobile">Ops"</div>
                  </div>
                </Transition>
              </Responsive>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <Grid>
                <Grid.Row columns={2} verticalAlign="middle">
                  <Grid.Column width={10} textAlign="left">
                    <div className="hero-img">
                      <Transition
                        visible="true"
                        animation="fade right"
                        duration="700"
                        transitionOnMount
                      >
                        <Image
                          className="hero-image"
                          src={messi}
                          size="medium"
                        />
                      </Transition>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={6} textAlign="left">
                    <List
                      className="hero-list"
                      animated
                      verticalAlign="middle"
                      inverted
                      size="large"
                    >
                      <span>
                        <strong>2018/2019</strong> - La Liga
                      </span>
                      <div className="hero-list-dash hero-list-dash-long" />

                      <List.Item>
                        <List.Content>
                          <List.Header>Goals</List.Header>36
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Assists</List.Header>13
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Appearances</List.Header>
                          33(3)
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content>
                          <List.Header>Positions</List.Header>
                          RW/CF/CAM
                        </List.Content>
                      </List.Item>
                      <div className="hero-list-bar" />
                      <List.Item>
                        <List.Content>
                          <List.Header>Years</List.Header>
                          31
                        </List.Content>
                      </List.Item>
                      <div className="hero-list-dash" />
                      <List.Item>
                        <List.Content>
                          <List.Header>Skills</List.Header>
                          <Rating
                            className="hero-skills"
                            defaultRating={5}
                            maxRating={5}
                            disabled
                          />{" "}
                          5/5
                        </List.Content>
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeHeader;
