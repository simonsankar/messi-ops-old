import React from "react";

import { Grid, Image, Responsive, List } from "semantic-ui-react";
import LM from "../../images/Messi.png";
import NJ from "../../images/Neymar.png";
import LS from "../../images/Suarez.png";

const MSNSingle = ({ img }) => {
  return (
    <div className="msn-single">
      <Grid container>
        <Grid.Row divided>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            as={Grid.Column}
            computer={3}
            verticalAlign="middle"
          >
            <Image
              className="msn-image"
              size="small"
              src={img === 1 ? LM : img === 2 ? NJ : LS}
            />
          </Responsive>
          <Grid.Column
            computer={10}
            tablet={12}
            mobile={16}
            className="msn-single-details"
          >
            <h3 className="msn-single-title">Title of the record</h3>
            <p className="msn-single-desc">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            </p>
          </Grid.Column>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <h4 className="msn-single-subtitle">
              Most goals in a Calendar Year
            </h4>
            <List divided relaxed as="ol" inverted size="large">
              <List.Item as="li">
                <List.Content>
                  <List.Header className="record-list-first">
                    Lionel Messi ♔<span className="record-list-value">91</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Gerd Muller
                    <span className="record-list-value">85</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Pele
                    <span className="record-list-value">75</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Cristiano Ronaldo
                    <span className="record-list-value">69</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Ferenc Deak
                    <span className="record-list-value">66</span>
                  </List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export default MSNSingle;
