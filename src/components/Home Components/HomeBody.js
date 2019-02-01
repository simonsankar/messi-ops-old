import React, { Component } from "react";

import { Container, Grid } from "semantic-ui-react";
import HomeCareer from "./HomeCareer";
import PostList from "../Blog Components/PostList";

class HomeBody extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Container>
            <Grid className="home-container">
              <Grid.Row columns={2} verticalAlign="top" divided>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <div className="home-header">Career Numbers</div>
                  <HomeCareer
                    stats={{
                      title: "All Time Career",
                      apps: 786,
                      goals: 639,
                      assists: 264
                    }}
                  />
                  <HomeCareer
                    stats={{
                      title: "All Time Club",
                      apps: 658,
                      goals: 574,
                      assists: 224
                    }}
                  />
                  <HomeCareer
                    stats={{
                      title: "League",
                      apps: 434,
                      goals: 399,
                      assists: 159
                    }}
                  />
                  <HomeCareer
                    stats={{
                      title: "UEFA Champions League",
                      apps: 129,
                      goals: 106,
                      assists: 28
                    }}
                  />
                  <HomeCareer
                    stats={{
                      title: "International",
                      apps: 128,
                      goals: 65,
                      assists: 40
                    }}
                  />
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <div className="home-header">Recent Blog Posts</div>
                  <PostList />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}
export default HomeBody;
