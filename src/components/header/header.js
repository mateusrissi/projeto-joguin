import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return location.pathname === "/" ? (
    <Navbar bg="dark" expand="lg" variant="dark" id="main-navbar">.
    </Navbar>
  ) : (
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
