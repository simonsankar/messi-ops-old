import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Button,
  Menu,
  Segment,
  Container,
  Responsive
} from "semantic-ui-react";
const paths = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "blog",
    path: "/blog"
  },
  {
    name: "seasons",
    path: "/seasons"
  },
  {
    name: "records",
    path: "/records"
  },
  {
    name: "arguments against",
    path: "/args"
  },
  {
    name: "abilities",
    path: "/abilities"
  },
  {
    name: "quotes",
    path: "/quotes"
  },
  {
    name: "comps",
    path: "/comps"
  },
  {
    name: "msn",
    path: "/msn"
  }
];

class Naviagtion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  renderMenuItemList() {
    const { pathname } = this.props.location;
    return paths.map((el, index) => {
      if (index === 4) {
        return (
          <Menu.Item
            key={el.path}
            as={Link}
            to={el.path}
            name={el.name}
            active={pathname === el.path}
            className="debunked"
          />
        );
      }
      return (
        <Menu.Item
          key={el.path}
          as={Link}
          to={el.path}
          name={el.name}
          active={pathname === el.path}
        />
      );
    });
  }
  renderMenuItemListMobile() {
    const { pathname } = this.props.location;
    return paths.map(el => {
      return (
        <Menu.Item
          onClick={() => this.toggleShow()}
          key={el.path}
          as={Link}
          to={el.path}
          name={el.name}
          active={pathname === el.path}
        />
      );
    });
  }
  toggleShow() {
    const tgl = !this.state.show;
    this.setState({
      show: tgl
    });
  }
  render() {
    const { pathname } = this.props.location;
    if (pathname === "/msn") {
      return (
        <Segment.Group size="mini" className="squared-msn">
          {/* Desktop */}
          <Responsive minWidth={Responsive.onlyTablet.maxWidth}>
            <Segment inverted className="squared-msn">
              <Container>
                <Menu size="tiny" inverted secondary pointing fluid stackable>
                  <Menu.Item
                    position="left"
                    key="messi-ops"
                    as={Link}
                    to="/"
                    name="Messi Ops"
                  />
                  {this.renderMenuItemList()}
                </Menu>
              </Container>
            </Segment>
          </Responsive>
          {/* Mobile and Tablet*/}
          <Responsive maxWidth={Responsive.onlyComputer.minWidth}>
            <Segment.Group className="squared-msn">
              <Segment inverted className="squared-msn">
                <Menu size="mini" inverted secondary pointing>
                  <Menu.Item header color="blue">
                    Messi Ops
                  </Menu.Item>
                  <Menu.Item
                    position="right"
                    as={Button}
                    icon="bars"
                    onClick={() => this.toggleShow()}
                  />
                </Menu>
              </Segment>
              {this.state.show && (
                <Segment className="navbar-mobile fade-in">
                  <Menu size="mini" secondary pointing fluid stackable>
                    {this.renderMenuItemListMobile()}
                  </Menu>
                </Segment>
              )}
            </Segment.Group>
          </Responsive>
        </Segment.Group>
      );
    } else {
      return (
        <Segment.Group size="mini" className="squared">
          {/* Desktop */}
          <Responsive minWidth={Responsive.onlyTablet.maxWidth}>
            <Segment inverted className="squared">
              <Container>
                <Menu size="tiny" inverted secondary pointing fluid stackable>
                  <Menu.Item
                    position="left"
                    key="messi-ops"
                    as={Link}
                    to="/"
                    name="Messi Ops"
                  />
                  {this.renderMenuItemList()}
                </Menu>
              </Container>
            </Segment>
          </Responsive>
          {/* Mobile and Tablet*/}
          <Responsive maxWidth={Responsive.onlyComputer.minWidth}>
            <Segment.Group className="squared">
              <Segment inverted className="squared">
                <Menu size="mini" inverted secondary pointing>
                  <Menu.Item header color="blue">
                    Messi Ops
                  </Menu.Item>
                  <Menu.Item
                    position="right"
                    as={Button}
                    icon="bars"
                    onClick={() => this.toggleShow()}
                  />
                </Menu>
              </Segment>
              {this.state.show && (
                <Segment className="navbar-mobile fade-in">
                  <Menu size="mini" secondary pointing fluid stackable>
                    {this.renderMenuItemListMobile()}
                  </Menu>
                </Segment>
              )}
            </Segment.Group>
          </Responsive>
        </Segment.Group>
      );
    }
  }
}
export default withRouter(Naviagtion);
