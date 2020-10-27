/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Navbars extends React.Component {
  render() {
    return (
      <>
        <section>
          {/* Navbar primary */}
          <Navbar className="navbar-dark bg-primary mt-4" expand="lg">
            <Container>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Primary Color
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar-primary">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-primary">
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/argon-react.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar-primary">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Discover <span className="sr-only">(current)</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                      Profile
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>Settings
                    <i className="ni ni-settings-gear-65" />
                      <span className="nav-link-inner--text d-lg-none">
                        Settings
                      </span>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="navbar-primary_dropdown_1"
                      right
                    >
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Action
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Another action
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Something else here
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </section>
      </>
    );
  }
}

export default Navbars;
