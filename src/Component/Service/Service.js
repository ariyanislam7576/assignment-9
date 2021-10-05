import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from './SingleService/SingleService';
import './Serivice.css'
//  secvice component 
const Service = () => {
    // hooks

    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/person.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
   <div>
        <h3>Our Availble Courses</h3>
       <Container className='my-5 img-size'>
        <Row xs={1} md={3} className="g-4">
        {
            services.map(service => <SingleService
            key={service.id}
            service={service}></SingleService>)
        }
    </Row>
   </Container>
   </div>
    );
};

export default Service;