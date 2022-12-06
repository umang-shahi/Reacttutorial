import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Customer from '../../../image/Customerservice.png';
import Deliver from '../../../image/Fastdeliver.png';

const Services = () => {
  return (
    <>
    <div className="my-5">
        <h1 className="text-center"> Our Services</h1>
        </div>

        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        <div className ="col-md-3 col-10 mx-auto">
                        <Card >
      <Card.Img variant="top" src={Customer}/>
      <Card.Body>
        <Card.Title>Customer Service</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                        </div>


                        <div className ="col-md-3 col-10 mx-auto">
                        <Card >
      <Card.Img variant="top" src={Deliver}/>
      <Card.Body>
        <Card.Title>Fast Delivery</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                        </div>



                        <div className ="col-md-3 col-10 mx-auto">
                        <Card >
      <Card.Img variant="top" src={Customer}/>
      <Card.Body>
        <Card.Title>Customer Service</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                        </div>


                        <div className ="col-md-3 col-10 mx-auto">
                        <Card >
      <Card.Img variant="top" src={Customer}/>
      <Card.Body>
        <Card.Title>Customer Service</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                        </div>



         
                    </div>

                </div>

            </div>

        </div>
    </>
  );
};

export default Services;
