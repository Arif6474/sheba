import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleLogout =() => {
        signOut(auth);
        navigate('/login')
    }
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
    <Nav>{ user ? <button onClick={handleLogout} className="logout-btn">Logout</button>
        :
      <Nav.Link className="login" as={Link} to="/login">Login</Nav.Link>
    }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;