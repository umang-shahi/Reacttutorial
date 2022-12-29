import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {toast} from "react-toastify"
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../image/logos.png";
import { NavLink,useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate()
  const auth = localStorage.getItem("user")
  const cssStyle = {
    width :"60px" ,
  }
   
  const myStyle ={
    textDecoration: 'none',
    margin : '8px',
    color:'black'
    
  }

  const handleLogout =()=>{
    toast.success("logout successfully!")
    localStorage.clear();
    navigate("/login")
   
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


            {auth ? (
              <>
              <img style={{borderRadius:"50%", width:"30px"}} src={`http://localhost:5000/gallery/${JSON.parse(auth).avatar}`} alt="my profile"/>
              <NavLink style={{textDecoration:"none"}}>{JSON.parse(auth).fullName}</NavLink>
              <button className='myLogout'  onClick={handleLogout}>Logout</button>

              </>
            ):(
              <>
              <NavLink to="/login">
                <Button variant='primary'>Sign In </Button>
              </NavLink>
              </>
            )}
          </Form>
          

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
