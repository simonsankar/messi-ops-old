import React from "react";
import messi from "../../images/messi-home.png";
import {
  Container,
  Grid,
  List,
  Image,
  Responsive,
  Rating,
  Transition,
} from "semantic-ui-react";

const HomeHeader = ({ currentSeason }) => {
  console.log(currentSeason);
  return (
    <div className="hero">
      <Container>
        <Grid className="hero__container">
          <Grid.Row verticalAlign="middle">
            <Grid.Column
              className="hero__column"
              computer={8}
              tablet={8}
              mobile={16}
              verticalAlign="middle"
            >
              <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                <Transition
                  visible={true}
                  animation="zoom"
                  duration="700"
                  transitionOnMount
                >
                  <div>
                    <div className="hero__messi">"Messi</div>
                    <div className="hero__ops">Ops"</div>
                  </div>
                </Transition>
              </Responsive>
              <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                <Transition
                  visible={true}
                  animation="zoom"
                  duration="700"
                  transitionOnMount
                >
                  <div style={{ marginTop: "20px" }}>
                    <div className="hero__messi hero__messi--mobile">
                      "Messi
                    </div>
                    <div className="hero__ops hero__ops--mobile">Ops"</div>
                  </div>
                </Transition>
              </Responsive>
            </Grid.Column>
            <Grid.Column computer={8} tablet={8} mobile={16}>
              <Grid>
                <Grid.Row columns={2} verticalAlign="middle">
                  <Grid.Column width={10} textAlign="left">
                    <div className="hero__img">
                      <Transition
                        visible={true}
                        animation="fade right"
                        duration="700"
                        transitionOnMount
                      >
                        <Image
                          className="hero__image"
                          src={messi}
                          size="medium"
                        />
                      </Transition>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={6} textAlign="left">
                    <List
                      className="hero__list"
                      animated
                      verticalAlign="middle"
                      inverted
                      size="huge"
                    >
                      <span>
                        <strong>2019/2020</strong> - La Liga
                      </span>
                      <div className="hero__list--dash hero__list--dash-long" />

                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Goals</List.Header>0
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Assists</List.Header>0
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Appearances</List.Header>0
                        </List.Content>
                      </List.Item>
                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Positions</List.Header>
                          RW/CF/CAM
                        </List.Content>
                      </List.Item>
                      <div className="hero__list--bar" />
                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Years</List.Header>
                          32
                        </List.Content>
                      </List.Item>
                      <div className="hero__list--dash" />
                      <List.Item>
                        <List.Content className="hero__list__content">
                          <List.Header>Skills</List.Header>
                          <Rating
                            className="hero__list__skills"
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
