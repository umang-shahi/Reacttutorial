import React from 'react';
import Card from "react-bootstrap/Card";
import { NavLink } from 'react-router-dom';

const HomeCard = (props) => {
  return (
    <>
    <div className="col-md-3 col-10 mx-auto">
   <Card >
    
    <NavLink to="/services">
      <Card.Img variant="top" src={props.url} alt="Dealimg"/>
      </NavLink>

      <Card.Body>

        <Card.Title>{props.title}</Card.Title>

       
      </Card.Body>
    </Card>
   
    
</div>
</>
  )
}

export default HomeCard
