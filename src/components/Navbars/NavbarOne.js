import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";

import facebookImg from '../../assets/img/stor/Facebook.png';

import amazonImg from '../../assets/img/stor/Amazon-btn.png';

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class NavbarOne extends React.Component {

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {

    const amazonStyle = {
      float: 'center',
      marginTop: '0px',
      width: '100px'
    };

    const facebookStyle = {
      float: 'center',
      marginTop: '0px',
      width: '90px'
    };

    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
          <Container>
            <div className="col px-0">
              <Row>
                <Col lg="2"></Col>
                <Col lg="9">

              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >

                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/stor/gaeilge.jpg")}
                        />
                         <p> Stór Seanfhocal </p>
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Home</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">The Author</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Reviews</span>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink className="nav-link-icon"
                      href="https://www.facebook.com/seanfhocail.leabhar"
                      id="tooltip333589074" target="_blank"
                    >
                      <img src={facebookImg} style={facebookStyle} alt='facebook' />
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Follow us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>

                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem>
                    <NavLink>
                      <img src={amazonImg} style={amazonStyle}  alt='' />
                    </NavLink>
                  </NavItem>
                </Nav>
                {/**
                 <Nav>
                  <span> </span>
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://www.amazon.com"
                      target="_blank"
                    >
                    <span className="nav-link-inner--text ml-1">
                      Buy Now
                    </span>
                  </Button>
                </Nav>
                **/}
              </UncontrolledCollapse>
              </Col>
                <Col lg="2"></Col>
              </Row>
            </div>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavbarOne;
