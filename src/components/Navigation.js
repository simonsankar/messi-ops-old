import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  Button,
  Menu,
  Segment,
  Container,
  Responsive
} from 'semantic-ui-react';
const paths = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'seasons',
    path: '/seasons'
  },
  {
    name: 'records',
    path: '/records'
  },
  {
    name: 'arguments against',
    path: '/arguments'
  },
  {
    name: 'msn',
    path: '/msn'
  },
  {
    name: 'posts',
    path: '/posts'
  },
  {
    name: 'abilities',
    path: '/abilities'
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
    return paths.map(el => {
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
    return (
      <Segment.Group size="mini" className="squared">
        {' '}
        {/* Desktop */}{' '}
        <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
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
                {this.renderMenuItemList()}{' '}
              </Menu>{' '}
            </Container>{' '}
          </Segment>{' '}
        </Responsive>{' '}
        {/* Mobile */}{' '}
        <Responsive maxWidth={Responsive.onlyTablet.minWidth}>
          <Segment.Group className="squared">
            <Segment inverted className="squared">
              <Menu size="mini" inverted secondary pointing>
                <Menu.Item header color="blue">
                  Messi Ops
                </Menu.Item>{' '}
                <Menu.Item
                  position="right"
                  as={Button}
                  icon="bars"
                  onClick={() => this.toggleShow()}
                />{' '}
              </Menu>{' '}
            </Segment>{' '}
            {this.state.show && (
              <Segment className="navbar-mobile fade-in">
                <Menu size="mini" secondary pointing fluid stackable>
                  {' '}
                  {this.renderMenuItemListMobile()}{' '}
                </Menu>{' '}
              </Segment>
            )}{' '}
          </Segment.Group>{' '}
        </Responsive>{' '}
      </Segment.Group>
    );
  }
}
export default withRouter(Naviagtion);
