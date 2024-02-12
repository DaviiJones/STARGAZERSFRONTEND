import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "/Users/davonbridgett/Documents/STARGAZERS/STARGAZERSFRONTEND/src/components/navBarCss/NavBar.css"

const NavBar = () => {

    return (
      <div>
        <div className="navbar">
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">STARGAZERS</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/nasaPhotos" className="navbarlink">
            <Button  variant="outline-warning">NASA POTD Archive</Button>
          </Link>
          <Link to="/"className="navbarlink">
          <Button  variant="outline-warning">Home</Button>
          </Link>
          <Link to='/solarSearch' className="navbarlink">
            <Button  variant="outline-warning">Solar Search</Button>
          </Link>
          </Nav>
          </Container>
          </Navbar>
          </div>
      </div>
    );
  };


export default NavBar;