import React from "react";

import { Grid, Image, Responsive, List } from "semantic-ui-react";

export const RecordItem = () => {
  return (
    <div className="records__item">
      <Grid container padded="vertically">
        <Grid.Row divided>
          <Responsive
            minWidth={Responsive.onlyComputer.minWidth}
            as={Grid.Column}
            computer={3}
            verticalAlign="middle"
          >
            <Image
              className="records__item__img"
              circular
              size="small"
              src={
                "https://static.lexpress.fr/medias_2376/w_600,h_600,c_fill,g_north/v1382711302/lionel-messi-barcelone_1216698.jpg"
              }
            />
          </Responsive>
          <Grid.Column
            computer={10}
            tablet={12}
            mobile={16}
            className="records__item__details"
          >
            <h3 className="records__item__title">Title of the record</h3>
            <p className="records__item__desc">
              As Messi maintained his goalscoring form into the second half of
              the season, the year 2012 saw him break several longstanding
              records. On 7 March, two weeks after scoring four goals in a
              league fixture against Valencia, he scored five times in a
              Champions League last 16-round match against Bayer Leverkusen, an
              unprecedented achievement in the history of the competition.
            </p>
          </Grid.Column>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <h4 className="records__item__subtitle">
              Most goals in a Calendar Year
            </h4>
            <List divided relaxed as="ol" inverted size="large">
              <List.Item as="li">
                <List.Content>
                  <List.Header className="records__item__list--first">
                    Lionel Messi 🜲
                    <span className="records__item__list__value records__item__list__value--first">
                      91
                    </span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Gerd Muller
                    <span className="records__item__list__value">85</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Pele
                    <span className="records__item__list__value">75</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Cristiano Ronaldo
                    <span className="records__item__list__value">69</span>
                  </List.Header>
                </List.Content>
              </List.Item>
              <List.Item as="li">
                <List.Content>
                  <List.Header>
                    Ferenc Deak
                    <span className="records__item__list__value">66</span>
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
    <div className="records__item records__item--alt">
      <Grid container padded="vertically">
        <Grid.Row>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <h5 className="records__item__subtitle">
              Most European Golden Shoes
            </h5>
            <List divided relaxed as="ol" inverted size="large">
              <List.Item as="li">
                <List.Content>
                  <List.Header className="records__item__list--first">
                    Lionel Messi 🜲
                    <span className="records__item__list__value records__item__list__value--first">
                      6
                    </span>
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
          <Grid.Column
            computer={10}
            tablet={12}
            mobile={16}
            className="records__item__details"
          >
            <h3 className="records__item__title">Title of the record</h3>
            <p className="records__item__desc">
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
          <Responsive
            as={Grid.Column}
            computer={3}
            verticalAlign="middle"
            minWidth={Responsive.onlyComputer.minWidth}
          >
            <Image
              floated="right"
              verticalAlign="middle"
              className="records__item__img"
              circular
              size="small"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt265gDR-meyzXdUbLBQIYoP6-EcIx0DpCizAO1jgcxW2Yi_hEgw"
              }
            />
          </Responsive>
        </Grid.Row>
      </Grid>
    </div>
  );
};
