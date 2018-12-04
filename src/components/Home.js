import React, { Component } from "react";

import {
  Container,
  Grid,
  List,
  Image,
  Responsive,
  Rating
} from "semantic-ui-react";

class Home extends Component {
  render() {
    return (
      <div className="ops">
        <Container>
          <Grid className="ops-container">
            <Grid.Row verticalAlign="middle">
              <Grid.Column
                className="ops-column"
                computer={8}
                tablet={8}
                mobile={16}
                verticalAlign="middle"
              >
                <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                  <div className="ops-header">
                    <div className="ops-messi">"Messi"</div>
                    <div className="ops-ops">Ops"</div>
                  </div>
                </Responsive>
                <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                  <div className="ops-header">
                    <div className="ops-messi ops-messi-mobile">"Messi"</div>
                    <div className="ops-ops ops-ops-mobile">Ops"</div>
                  </div>
                </Responsive>
              </Grid.Column>
              <Grid.Column computer={8} tablet={8} mobile={16}>
                <Grid>
                  <Grid.Row columns={2} verticalAlign="middle">
                    <Grid.Column width={10} textAlign="left">
                      <div className="ops-img">
                        <Image
                          className="filter-image"
                          // floated="left"
                          src="https://i.pinimg.com/originals/e4/4e/52/e44e52eb4b35495d011a0072cb76488d.png"
                          size="medium"
                        />
                      </div>
                    </Grid.Column>
                    <Grid.Column width={6} textAlign="left">
                      <List
                        className="side-list"
                        animated
                        verticalAlign="middle"
                        inverted
                        size="large"
                      >
                        <span>
                          <strong>2018/2019</strong> - La Liga
                        </span>
                        <div className="side-list-dash side-list-dash-long" />

                        <List.Item>
                          <List.Content>
                            <List.Header>Goals</List.Header>9
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>Assists</List.Header>7
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>Appearances</List.Header>
                            12
                          </List.Content>
                        </List.Item>
                        <List.Item>
                          <List.Content>
                            <List.Header>Positions</List.Header>
                            RW/CF/CAM
                          </List.Content>
                        </List.Item>
                        <div className="side-list-bar" />
                        <List.Item>
                          <List.Content>
                            <List.Header>Years</List.Header>
                            31
                          </List.Content>
                        </List.Item>
                        <div className="side-list-dash" />
                        <List.Item>
                          <List.Content>
                            <List.Header>Skills</List.Header>
                            <Rating
                              className="skills"
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
  }
}

export default Home;
