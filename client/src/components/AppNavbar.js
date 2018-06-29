// @flow
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

type Props = {}

type State = {
  isOpen: boolean,
};

class AppNavbar extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <h1>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              ShoppingList
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              navbar
            >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/wdudek82">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </h1>
    );
  }
}

export default AppNavbar;
