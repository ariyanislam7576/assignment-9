import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // footer component
         
        <div className='footer'>
            <footer>
                <div className='input'>
                    <h3>Contact us</h3>
                    <form>
                        <input type="text" placeholder='Enter your name' /><br />
                        <input type="email" name="" id="" placeholder='Enter Your E-mail' /><br />
                        <textarea name="" id="" cols="25" rows="6" placeholder='say somethig about our service'></textarea><br />
                        <button className='btn-danger p-2 rounded' type="submit">Submit</button>
                    </form>
                </div>
                
                <p>All right reserved by ITHome</p>
            </footer>
        </div>
    );
};

export default Footer;