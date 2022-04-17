import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky="top"  collapseOnSelect expand="lg" className="navbar-container">
  <Container>
  <Navbar.Brand as={Link} to="/">Sheba</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/services">Services</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    
    </Nav>
    <Nav>
      <Nav.Link className="login" as={Link} to="/login">Login</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;