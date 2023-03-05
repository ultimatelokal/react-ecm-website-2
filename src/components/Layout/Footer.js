
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import Pin from "./icons/pin.png"
import Phone from "./icons/phone.png"
import Mail from "./icons/envelope.png"

import './Footer.css'

function Footer() {
  return <footer className='footer-section'>
    <div className='footer-contact-row'>

      <div className='contact-div'>
        <img src={Pin} alt="" />
        <div className='contact-details'>
          <h4>Find us</h4>
          <span>1010 Avenue, sw 54321, chandigarh</span>
        </div>
      </div>

      <div className="contact-div">
        <img src={Phone} alt="" />
        <div className='contact-details'>
          <h4>Call us</h4>
          <span>+1(403)-307-8375</span>
        </div>
      </div>

      <div className="contact-div">
        <img src={Mail} alt="" />
        <div className='contact-details'>
          <h4>Mail us</h4>
          <span>mmmalalay@gmail.com</span>
        </div>
      </div>

    </div>

    <div className="copyright-area" >
      <div className="copyright-area-row">
        <div className="copyright-divs copyright-text">
          <p>Copyright &copy; 2023, All Right Reserved  <Link to='/' className=' ' >ECM</Link></p>
        </div>

        <div className="copyright-divs footer-menu">
          <Link to='/' className='footer-menu-links' >
            Home
          </Link>
          <Link to='/About-us' className='footer-menu-links' >
            Terms
          </Link>
          <Link to='/Events' className='footer-menu-links' >
            Privacy
          </Link>
          <Link to='/Contact-us' className='footer-menu-links' >
            Contact Us
          </Link>
        </div>
      </div>
    </div>

  </footer>;
}

export default Footer