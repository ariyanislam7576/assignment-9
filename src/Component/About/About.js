import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
    <div className='about-container'>
        <img src={'https://images.generated.photos/jdk_vfOIkbQOkkNgNsJQ4EiAV4bvxiMy1NMLMbN9wRA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk1NTA3LmpwZw.jpg'} alt="" />
        <h1>Mohammad Ali</h1>
        <h3>CEO of ITHome</h3>
        <p>ICT permeates all aspects of life, providing newer, better, and quicker ways for people to interact, network, seek help, gain access to information, and learn. Besides its presence everywhere, Information and Communication Technology has an immense economic significance.</p>
    </div>
    );
};

export default About;