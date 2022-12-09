import React from 'react';
import Card from "react-bootstrap/Card";

const HomeCard = (props) => {
  return (
    <>
    <div className="col-md-3 col-10 mx-auto">
   <Card >
      <Card.Img variant="top" src={props.url} alt="Dealimg"/>
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>

       
      </Card.Body>
    </Card>
   
    
</div>
</>
  )
}

export default HomeCard
