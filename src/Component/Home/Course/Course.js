import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Course = (props) => {
    // console.log(props);
    const {name,cname,img,id,discription,price,rating} = props.course
    return (
        <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{cname} by {name}</Card.Title>
          <Card.Text>
           {discription.slice(0,150)}
           <Card.Text>
               price: {price} <br />
               <Rating readonly
               initialRating={rating}
               fullSymbol='text-warning fas fa-star'
                emptySymbol="text-warning far fa-star"></Rating>
           </Card.Text>
          </Card.Text>
          <button className="btn-danger p-2 rounded">Enroll now</button>
        </Card.Body>
      </Card>
    </Col>
    </div>
    );
};

export default Course;