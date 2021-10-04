import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const SingleService = (props) => {
  /*-------------distructure--------------*/
  
    const {cname,name,discription,img,price,rating} = props.service
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='text-start'>{cname} by <br /> <br />{name} <br /> <br /> price: ${price}</Card.Title>
          <Card.Text className='text-start'> <br />

          Rating: <Rating readonly
            initialRating={rating}
            fullSymbol='text-warning fas fa-star'
            emptySymbol="text-warning far fa-star"></Rating> <br /><br />
            <p>
              <strong>discription:</strong> {discription.slice(0,160)}
            </p>
            
           
          </Card.Text>
          <NavLink to='/notfound'>
            <button className="btn-danger p-2 rounded">Enroll Now</button>
          </NavLink>
         
        </Card.Body>
      </Card>
    </Col>
    </div>
    );
};

export default SingleService;