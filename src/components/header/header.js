import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  if (window.location.pathname === "/") return null;
  return (
    <Navbar bg="dark" expand="lg" variant="dark" id="main-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="px-lg-3" to="/game">
            Jogo
          </NavLink>
          <NavLink className="px-lg-3" to="/quests">
            Missões
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
