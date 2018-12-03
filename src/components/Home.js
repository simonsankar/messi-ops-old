import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container, Grid, Menu, Responsive } from "semantic-ui-react";

class Home extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
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
                <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                  <div className="ops-header">
                    <div className="ops-messi">"Messi"</div>
                    <div className="ops-ops">Ops"</div>
                  </div>
                </Responsive>
                <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
                  <div className="ops-header">
                    <div className="ops-messi ops-messi-mobile">"Messi"</div>
                    <div className="ops-ops ops-ops-mobile">Ops"</div>
                  </div>
                </Responsive>
              </Grid.Column>
              <Grid.Column
                computer={8}
                tablet={8}
                mobile={16}
                textAlign="right"
                verticalAlign="middle"
              >
                <Menu
                  className="side-menu"
                  pointing
                  secondary
                  vertical
                  floated="right"
                >
                  <Menu.Item
                    className="side-item"
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="messages"
                    active={activeItem === "messages"}
                    onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="friends"
                    active={activeItem === "friends"}
                    onClick={this.handleItemClick}
                  />
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
