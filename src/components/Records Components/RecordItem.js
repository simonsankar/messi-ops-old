import React from 'react';

import { Grid, Image, Header, List } from 'semantic-ui-react';

export const RecordItem = () => {
  return (
    <div className="record-item">
      <Grid container>
        <Grid.Row divided>
          <Grid.Column width={3} verticalAlign="middle">
            <Image
              className="record-img"
              circular
              size="small"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt265gDR-meyzXdUbLBQIYoP6-EcIx0DpCizAO1jgcxW2Yi_hEgw'
              }
            />
          </Grid.Column>
          <Grid.Column width={10} className="record-details">
            <h3 className="record-title">Title of the record</h3>
            <p className="record-desc">
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
          <Grid.Column width={3}>
            <h4 className="record-subtitle">Most goals in a Calendar Year</h4>
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
export const RecordItemAlt = () => {
  return (
    <div className="record-item record-item-alt">
      <Grid container>
        <Grid.Row>
          <Grid.Column width={3}>
            <h5 className="record-subtitle">Most goals in a Calendar Year</h5>
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
                  <List.Header>Gerd Muller</List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>Pele</List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>Lionel Messi</List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>Lionel Messi</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10} className="record-details">
            <h3 className="record-title">Title of the record</h3>
            <p className="record-desc">
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
          <Grid.Column width={3} verticalAlign="middle">
            <Image
              floated="right"
              verticalAlign="middle"
              className="record-img"
              size="small"
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt265gDR-meyzXdUbLBQIYoP6-EcIx0DpCizAO1jgcxW2Yi_hEgw'
              }
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
