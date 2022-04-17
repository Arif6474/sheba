import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
        <div className="footer">
           <div>
               <h1 className="text-center text-info mt-5">Sheba</h1>
           </div>
           <div className="about">
               <p>About online service</p>
               <p>Read our blog</p>
               <p>Contact for more information</p>
               
           </div>
           <div className="contact">
           <p>Get help</p>
               <p>Read FAQs</p>
               <p>See Reviews</p>
               <p>Communicate with me</p>
           </div>
        </div>

        <div >
            <p className="copyright text-center">copyright <span className="copyright-icon"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></span> 2022 </p>
            </div>
        </div>
        
    );
};

export default Footer;