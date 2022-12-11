import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../image/logos.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  const cssStyle = {
    width :"60px" ,
  }
   
  const myStyle ={
    textDecoration: 'none',
    margin : '8px',
    color:'black'

    
  }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div >
         <NavLink to="/">
         <img style= {cssStyle} src={Logo} alt ="logo"/>
         </NavLink>
          
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink style = {myStyle} to="/about"> About</NavLink>

            <NavLink style ={myStyle} to ="/contact"> Contact</NavLink>

          </Nav>
          <Form className="d-flex">


            <NavLink to="/register">
            <Button variant="primary"> Sign in </Button>{' '}

            </NavLink>
          </Form>
          

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
