import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark-hero"
      variant="dark"
      className="center  sticky-top"
    >
      <Navbar.Brand href="#home">
        {/* <Logo
          alt=""
          width="30"
          height="30"
          className="d-inline-block align-top"
        /> */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " className="m-2 " />
      <Navbar.Collapse
        className="  justify-content-end "
        id="responsive-navbar-nav"
      >
        <div className="brackets ">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>

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
