import React from "react";

import { Grid, Image, Responsive, List } from "semantic-ui-react";

const renderList = (list) => {
  return list.map((item, index) => {
    let highlight =
      index === 0
        ? {
            name: `records__item__list--first`,
            amt: `records__item__list__value records__item__list__value--first`,
          }
        : {
            header: ``,
            amt: `records__item__list__value`,
          };
    return (
      <List.Item key={`${item.name}${index}`} as="li">
        <List.Content>
          <List.Header className={highlight.name}>
            {item.name}
            <span className={highlight.amt}>{item.amt}</span>
          </List.Header>
        </List.Content>
      </List.Item>
    );
  });
};

export const RecordItem = ({ record }) => {
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
            <h3 className="records__item__title">{record.title}</h3>
            <p className="records__item__desc">{record.description}</p>
          </Grid.Column>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <h4 className="records__item__subtitle">{record.name}</h4>
            <List divided relaxed as="ol" inverted size="large">
              {renderList(record.list)}
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
export const RecordItemAlt = ({ record }) => {
  return (
    <div className="records__item records__item--alt">
      <Grid container padded="vertically">
        <Grid.Row>
          <Grid.Column computer={3} tablet={4} mobile={16}>
            <h5 className="records__item__subtitle">{record.name}</h5>
            <List divided relaxed as="ol" inverted size="large">
              {renderList(record.list)}
            </List>
          </Grid.Column>
          <Grid.Column
            computer={10}
            tablet={12}
            mobile={16}
            className="records__item__details"
          >
            <h3 className="records__item__title">{record.title}</h3>
            <p className="records__item__desc">{record.description}</p>
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
