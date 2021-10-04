import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleService = (props) => {
    console.log(props);
    const {cname,name,id,discription,img,price,rating} = props.service
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{cname} by <br /> {name} <br /> price: {price}</Card.Title>
          <Card.Text> <br />
            {discription.slice(0,160)}
            Rating: <Rating readonly
            initialRating={rating}
            fullSymbol='text-warning fas fa-star'
            emptySymbol="text-warning far fa-star"></Rating>
          </Card.Text>
          <button className="btn-danger p-2 rounded">Enroll Now</button>
        </Card.Body>
      </Card>
    </Col>
    </div>
    );
};

export default SingleService;