import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

export default function NavigationBar() {
  return (
    <Navbar bg="light" expand="md" fixed="bottom" collapseOnSelect>
      <LinkContainer to="/">
        <Nav.Link>Orange Cafe</Nav.Link>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="menu">
            <Nav.Link>Menu</Nav.Link>
          </LinkContainer>
          <LinkContainer to="gallery">
            <Nav.Link>Gallery</Nav.Link>
          </LinkContainer>
          <LinkContainer to="contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
