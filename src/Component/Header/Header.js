import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"> 
    <img className='logo' src={`https://purepng.com/public/uploads/large/laptop-symbol-azy.png`} alt="" /> ITHome</Navbar.Brand>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink className='m-2 text-decoration-none' to="/home">Home</NavLink>
        <NavLink className='m-2 text-decoration-none' to="/about">About</NavLink>
        <NavLink className='m-2 text-decoration-none' to="/service">Services</NavLink>
        <NavLink className='m-2 text-decoration-none' to="/donate">Donate</NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;