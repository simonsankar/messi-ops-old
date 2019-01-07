import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
class HomeCareer extends Component {
  render() {
    const { stats } = this.props;
    return (
      <Grid className="career">
        <Grid.Row className="career-title">
          <Grid.Column textAlign="center">
            <span>{stats.title}</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="career-stats" columns={3}>
          <Grid.Column textAlign="center">
            <div className="career-type">Apps</div>
            <div className="career-value">{stats.apps}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="career-type">Goals</div>
            <div className="career-value">{stats.goals}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="career-type">Assists</div>
            <div className="career-value">{stats.assists}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default HomeCareer;
