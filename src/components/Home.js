import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid } from 'semantic-ui-react';
class Home extends Component {
  render() {
    return (
      <div className="ops">
        <Container>
          <Grid className="ops-container">
            <Grid.Row>
              <Grid.Column
                className="ops-column"
                computer={8}
                tablet={8}
                mobile={16}
              >
                <div className="ops-header">
                  <div className="ops-messi">"Messi"</div>
                  <div className="ops-ops">Ops"</div>
                </div>
              </Grid.Column>
              <Grid.Column computer={8} tablet={8} mobile={16} />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
