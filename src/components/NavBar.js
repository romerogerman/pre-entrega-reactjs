// src/components/NavBar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget"; // Make sure you have CartWidget.js

import "./NavBar.css"; // Optionally add custom styles here

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">🏈 Tienda NFL</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#">Camisetas</Nav.Link>
          <Nav.Link href="#">Cascos</Nav.Link>
          <Nav.Link href="#">Balones</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
