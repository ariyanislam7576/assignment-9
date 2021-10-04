import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <div className='footer-right'><h1>IThome</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='input'>
                    <h3>Contact us</h3>
                    <form>
                        <input type="text" placeholder='Enter your name' /><br />
                        <input type="email" name="" id="" placeholder='Enter Your E-mail' /><br />
                        <textarea name="" id="" cols="25" rows="10" placeholder='say somethig about our service'></textarea>
                    </form>
                </div>
                
                <p>all right reserved by ITHome</p>
            </footer>
        </div>
    );
};

export default Footer;