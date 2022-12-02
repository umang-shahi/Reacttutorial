import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../logo.jpeg';
import { NavLink } from "react-router-dom";


const Header = () => {
  const cssStyle = {
    width :"60px" ,
  }
   
  const myStyle ={
    textDecoration: 'none',
    margin : '8px',
    color:'gray'

    
  }
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div >
         <NavLink to="/">
         <img style= {cssStyle} src={logo} alt ="logo"/>
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


            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">


            <NavLink to="/login">
            <Button variant="primary"> Login </Button>{' '}

            </NavLink>
          </Form>
          

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
