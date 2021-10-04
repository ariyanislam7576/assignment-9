import React from 'react';
import './About.css'

// about component 

const About = () => {
    return (
    <div className='about-container'>
        <div className='Founder'>
        <img src={'https://images.generated.photos/jdk_vfOIkbQOkkNgNsJQ4EiAV4bvxiMy1NMLMbN9wRA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODk1NTA3LmpwZw.jpg'} alt="" />

            <h1>Mohammad Ali</h1>

            <h3>Founder of ITHome</h3>

            <p>ICT permeates all aspects of life, providing newer, better, and quicker ways for people to interact, network, seek help, gain access to information, and learn. Besides its presence everywhere, Information and Communication Technology has an immense economic significance.</p>
            </div>      
        <div className='Co-Founder'>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaOpu_PkBDmzBgUa5SCr4ml1WGjc3LmDDSWdlR0HIQknNDx3f7Fuf179aRAPFYzxKk34&usqp=CAU'} alt="" />

            <h1>Mohammad yasin</h1>

            <h3>Co-Founder of ITHome</h3>

            <p>ICT permeates all aspects of life, providing newer, better, and quicker ways for people to interact, network, seek help, gain access to information, and learn. Besides its presence everywhere, Information and Communication Technology has an immense economic significance.</p>
        </div>
    </div>
    );
};

export default About;