import React from 'react';
import { Carousel, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
  <div>

    {/*-------------------- navbar----------------- */}

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
    </Navbar.Collapse>
  </Container>
</Navbar>

      {/* --------------slider----------------- */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://image.freepik.com/free-photo/i-did-it_1098-17972.jpg'
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1596495717764-bf85c4721e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/young-smiling-african-man-standing-using-laptop_171337-12867.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    );
};

export default Header;