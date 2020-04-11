import React, { Component } from "react";

import { Grid } from "semantic-ui-react";
class MSNCareer extends Component {
  render() {
    const { stats } = this.props;
    return (
      <Grid className="msn__career">
        <Grid.Row className="msn__career__title">
          <Grid.Column textAlign="center">
            <span>{stats.title}</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="msn__career__stats" columns={3}>
          <Grid.Column textAlign="center">
            <div className="msn__career__type">Apps</div>
            <div className="msn__career__value">{stats.apps}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="msn__career__type">Goals</div>
            <div className="msn__career__value">{stats.goals}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="msn__career__type">Assists</div>
            <div className="msn__career__value">{stats.assists}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MSNCareer;
