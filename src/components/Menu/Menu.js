import React, { Component } from 'react';
import Link from 'gatsby-link';

import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Menu from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Visibility from 'semantic-ui-react/dist/commonjs/behaviors/Visibility';
import Responsive from 'semantic-ui-react/dist/commonjs/addons/Responsive';
import Sidebar from 'semantic-ui-react/dist/commonjs/modules/Sidebar';

import Logo from '../Logo/Logo';

import './Menu.css';

function MenuLink(props) {
  return (
    <Link {...props}>{props.children}</Link>
  );
}

class TopMenu extends Component {
  state = {
    fixed: false,
    opened: false,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  toggleMenu = () => this.setState({ opened: !this.state.opened });

  render() {
    const { fixed, opened } = this.state;
    const { forceLogo, page } = this.props;

    return (
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Responsive as={Container} minWidth={720}>
          <Menu
            fixed={fixed ? 'top' : null}
            inverted
            pointing={!fixed}
            secondary={!fixed}
            size="large"
            style={{ border: '0' }}
          >
            <Menu.Menu position="left">
              {fixed || forceLogo ? (
                <Menu.Item
                  as={MenuLink}
                  to="/"
                  className="logo"
                >
                  <Logo />
                </Menu.Item>
              ) : null}
              <Menu.Item
                active={page === 'home'}
                as={MenuLink}
                to="/"
              >
                Home
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position={fixed ? 'left' : 'right'}>
              <Menu.Item
                active={page === 'documentation'}
                as={MenuLink}
                to="/documentation"
              >
                Documentation
              </Menu.Item>
              <Menu.Item as="a" href="mailto:support@usethyme.com">Support</Menu.Item>
              <Menu.Item as="a" href="https://github.com/ThymeApp/thyme">Project's Source</Menu.Item>
              <Menu.Item as="a" href="/thyme">Use Thyme</Menu.Item>
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive maxWidth={720}>
          <Menu
            fixed={'top'}
            inverted
            size="large"
            style={{ border: '0' }}
          >
            <Menu.Item>
              <Button icon onClick={this.toggleMenu}>
                <Icon name="bars" />
              </Button>
            </Menu.Item>
          </Menu>
          <Sidebar vertical visible={opened}>
            <Menu inverted vertical secondary pointing>
              <Menu.Item
                active={page === 'home'}
                as={MenuLink}
                to="/"
              >
                Home
              </Menu.Item>
              <Menu.Item
                active={page === 'documentation'}
                as={MenuLink}
                to="/documentation"
              >
                Documentation
              </Menu.Item>
              <Menu.Item as="a" href="mailto:support@usethyme.com">Support</Menu.Item>
              <Menu.Item as="a" href="https://github.com/ThymeApp/thyme">Project's Source</Menu.Item>
              <Menu.Item as="a" href="/thyme">Use Thyme</Menu.Item>
            </Menu>
          </Sidebar>
        </Responsive>
      </Visibility>
    );
  }
}
export default TopMenu;
