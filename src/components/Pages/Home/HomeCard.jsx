import React from 'react';
import Card from "react-bootstrap/Card";
import { NavLink } from 'react-router-dom';

const HomeCard = ({food}) => {
  const {foodTitle,foodImage} = food
  return (
    <>
    <div className="col-md-3 col-10 mx-auto">
   <Card >
    
    <NavLink to="/services">
      <Card.Img variant="top" src={`http://localhost:5000/gallery/${foodImage}`} alt="Dealimg"/>
      </NavLink>

      <Card.Body>

        <Card.Title>{foodTitle}</Card.Title>

       
      </Card.Body>
    </Card>
   
    
</div>
</>
  )
}

export default HomeCard
