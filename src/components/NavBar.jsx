// src/components/NavBar.js
import React from "react";
import CartWidget from "./CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap"; // If using Bootstrap

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
// hola
