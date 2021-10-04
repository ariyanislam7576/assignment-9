import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const Course = (props) => {

  /*---------------------distructure----------------------*/

    const {name,cname,img,discription,price,rating} = props.course
    return (
    <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='text-start'>{cname} by 
          <br /> <br />
          {name} <br /> <br />
          price: {price} <br /> <br />
          </Card.Title>

          <Card.Text className='text-start'>

           Rating:  
           <Rating readonly
               initialRating={rating}
               fullSymbol='text-warning fas fa-star'
                emptySymbol="text-warning far fa-star">
              </Rating> <br /> <br />

             <Card.Text className='text-start'>
           discription: {discription.slice(0,150)}
           </Card.Text>
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

export default Course;