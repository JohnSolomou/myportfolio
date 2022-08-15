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
            <LinkContainer to="contact">
              <Nav.Link>contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>

    // function Navigation() {
    //   return (
    //     <Navbar
    //       collapseOnSelect
    //       expand="lg"
    //       bg="dark-hero"
    //       variant="dark"
    //       className="center  sticky-top"
    //     >
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav " className="m-2 " />
    //       <Navbar.Collapse
    //         className="  justify-content-end "
    //         id="responsive-navbar-nav"
    //       >
    //         <div className="brackets ">
    //           <Nav className="ml-auto">
    //             <LinkContainer >About</LinkContainer>
    //             <LinkContainer >Work</LinkContainer>
    //             <LinkContainer >contact</LinkContainer>
    //           </Nav>
    //         </div>
    //       </Navbar.Collapse>
    //     </Navbar>

    // <div>
    //   <nav id="home" className="navbar navbar-expand-md navbar-dark dark-hero">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbar-collapse"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse flex-row-reverse"
    //       id="navbar-collapse"
    //     >
    //       <div className="brackets">
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <a className="nav-link" href="#about">
    //               about
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#work">
    //               work
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#contact">
    //               contact
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}
export default Navigation;
