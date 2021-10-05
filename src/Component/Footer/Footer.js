import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        // footer component
         <div>
             <div className='row mx-auto'>
            <div className="col-md-4 text-start m-5">
                <h2>ITHome</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum laudantium distinctio?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt magni repudiandae, a nihil obcaecati quaerat beatae ratione distinctio dolores omnis nam quos, dolore quibusdam possimus doloremque expedita consectetur, amet quae!
                </p>
            </div>
            <div className="col-md-5 m-3">
            <div className='input'>
                    <h3>Contact us</h3>
                    <form>
                        <input type="text" placeholder='Enter your name' /><br />
                        <input type="email" name="" id="" placeholder='Enter Your E-mail' /><br />

                        <textarea name="" id="" cols="25" rows="6" placeholder='say somethig about our service'>
                        </textarea><br />
                        <button className='btn-danger p-2 rounded' type="submit" >Submit</button>
                    </form>
                </div>
            </div>
            <p>All right reserved by ITHome</p>
             </div>
             
         </div>
        
    );
};

export default Footer;