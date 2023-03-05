/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import church_logo from '../pages/images/ECM-logo.gif'
import './Navbar.css'

function Navbar() {

  // const [slideNavbar, setSlideNavbar] = useState(false);
  // const handleSlide = () => setSlideNavbar(!slideNavbar);

  const closeMobileMenu = () => setClick(true);
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const windowResize = () => {
    if (window.innerWidth >= 767) {
      setClick(true)
    } else {
      setClick(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  window.addEventListener('innerWidth', windowResize)

  console.log(windowResize);
  console.log(changeBackground);

  return (

    <nav className={navbar ? 'sticky-nav nav-change-bg' : 'sticky-nav'}>
      <div className="nav-inner">
        {/* <div>
          <img className="logo-img" src={church_logo} />
        </div> */}

        <span className="logo"><Link to='/' onClick={closeMobileMenu}>Everyday Christ Ministries</Link></span>
        <div className="reg-links">
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to='/About-us' className='nav-links' onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link to='/Events' className='nav-links' onClick={closeMobileMenu}>
            Events
          </Link>
          <Link to='/Contact-us' className='nav-links' onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </div>
        <div className="menu-btn" onClick={handleClick}>
          <div className={click ? `menu-btn_burger` : `menu-btn_burger open`}>
          </div>
        </div>
      </div>
      <div className={click ? `SlideNavbar Slide-off` : `SlideNavbar`}>
        <div className="mobile-list">
          <Link to='/' className='mobile-links' onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to='/About-us' className='mobile-links' onClick={closeMobileMenu}>
            About Us
          </Link>
          <Link to='/Events' className='mobile-links' onClick={closeMobileMenu}>
            Events
          </Link>
          <Link to='/Contact-us' className='mobile-links' onClick={closeMobileMenu}>
            Contact Us
          </Link>
          <img className="logo-img" src={church_logo} />
        </div>
      </div>
    </nav>

  );
}

export default Navbar;