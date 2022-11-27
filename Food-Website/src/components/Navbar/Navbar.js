import React from "react";
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white'
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/" >My Food Website</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <Link to="/" style={linkStyle}>
                {" "} Home
              </Link>
              <Link to="/categories" style={linkStyle}>
                {" "} Categories
              </Link>
              <Link to="/random" style={linkStyle}>
                {" "} Random Food
              </Link>
              <Link to="/aboutus" style={linkStyle}>
               {" "} About Us
              </Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;