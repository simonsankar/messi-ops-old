import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
class MSNCareer extends Component {
  render() {
    const { stats } = this.props;
    return (
      <Grid className="msn-career">
        <Grid.Row className="msn-career-title">
          <Grid.Column textAlign="center">
            <span>{stats.title}</span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="msn-career-stats" columns={3}>
          <Grid.Column textAlign="center">
            <div className="msn-career-type">Apps</div>
            <div className="msn-career-value">{stats.apps}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="msn-career-type">Goals</div>
            <div className="msn-career-value">{stats.goals}</div>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <div className="msn-career-type">Assists</div>
            <div className="msn-career-value">{stats.assists}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MSNCareer;
