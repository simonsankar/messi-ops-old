import React from "react";

import { Grid, Image, Responsive, List, Rating } from "semantic-ui-react";
import LM from "../../images/Messi.png";
import LS from "../../images/Suarez.png";
import NJ from "../../images/Neymar.png";

const MSNSingle = ({ player }) => {
  return (
    <div className="msn-single">
      <Grid container stackable>
        <Grid.Row divided>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            as={Grid.Column}
            computer={3}
            verticalAlign="middle"
          >
            <Image
              className="msn-single-img"
              size="small"
              src={player === 1 ? LM : player === 2 ? LS : NJ}
            />
          </Responsive>
          <Grid.Column
            computer={7}
            tablet={10}
            mobile={16}
            className="msn-single-details"
          >
            <h3 className="msn-single-title">
              {player === 1
                ? "Lionel Messi"
                : player === 2
                ? "Luis Suarez"
                : "Neymar Jr."}
              <small>
                {player === 1 ? " 10" : player === 2 ? " 9" : " 11"}
              </small>
            </h3>
            <p className="msn-single-desc">
              Consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
              vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
              venenatis vitae, justo. Nullam dictum felis eu pede mollis
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
              nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </p>
          </Grid.Column>
          <Grid.Column
            computer={6}
            tablet={6}
            mobile={16}
            verticalAlign="middle"
            textAlign="center"
          >
            {player === 1 ? (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="medium"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    158
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>153
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>66
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    RW/CF/CAM
                  </List.Content>
                </List.Item>
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
            ) : player === 2 ? (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="medium"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    149
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>121
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>59
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    RW/CF/ST
                  </List.Content>
                </List.Item>
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
            ) : (
              <List
                horizontal
                className="hero-list"
                animated
                verticalAlign="middle"
                inverted
                size="medium"
              >
                <List.Item>
                  <List.Content>
                    <List.Header>Appearances</List.Header>
                    151
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Goals</List.Header>90
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header>Assists</List.Header>46
                  </List.Content>
                </List.Item>

                <List.Item>
                  <List.Content>
                    <List.Header>Positions</List.Header>
                    LW/RW
                  </List.Content>
                </List.Item>
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
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default MSNSingle;
