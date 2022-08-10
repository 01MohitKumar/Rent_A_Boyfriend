import "bootstrap/dist/css/bootstrap.min.css";

import { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        className="py-3 fixed-top"
      >
        <Container>
          <Navbar.Brand href="#home">Rent Boyfriend</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar">
            <Nav className="mr-auto text-dark"></Nav>
            <Nav>
              <Nav.Link href="#boyfriends">Boyfriends</Nav.Link>
              <Nav.Link href="#security">Security</Nav.Link>
              <Nav.Link href="#rules">Rules</Nav.Link>
              <Nav.Link href="#contactUs">Contact us</Nav.Link>
              <Nav.Link href="#questions">Questions</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavigationBar;
