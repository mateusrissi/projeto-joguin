import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink to="/game">Jogo</NavLink>
          <NavLink to="/quests">Missões</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
