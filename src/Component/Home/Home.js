import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Course from './Course/Course';
import './Home.css'
//home component
const Home = () => {
    // hooks
    const [courses,setcourses] = useState([])
    useEffect(()=> {
        fetch('/Person.json')
        .then(res => res.json())
        .then(data => {
            setcourses(data);
        })
    },[])
    return (
        <div>
           <Container className='my-5 img'>
                <Row xs={1} md={2} className="g-4">
                    {
                        courses.slice(2,6).map(course => <Course key={course.id}course={course}></Course>)
                    }
                </Row>
                <Link to='/service'>More Course</Link>
           </Container>
        </div>
    );
};

export default Home;