import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleService from './SingleService/SingleService';
import './Serivice.css'

const Service = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/person.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    },[])
    return (
   <Container className='my-5 img-size'>
       <h3>Our Availble Courses</h3>
        <Row xs={1} md={3} className="g-4">
        {
            services.map(service => <SingleService
            key={service.id}
            service={service}></SingleService>)
        }
    </Row>
   </Container>
    );
};

export default Service;