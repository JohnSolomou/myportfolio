import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { LinkContainer } from "react-router-bootstrap";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark-hero"
      variant="dark"
      className="center  sticky-top navbstrap"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav " className="m-2 " />
      <Navbar.Collapse
        className="  justify-content-end "
        id="responsive-navbar-nav"
      >
        <div className="brackets navbstrap">
          <Nav className="ml-auto ">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/work">
              <Nav.Link>Work</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
