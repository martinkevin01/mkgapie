import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className= "n-wrapper" >
      <div className="n-left">
        <div className="n-name">Martin Kevin</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experiences</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">
          Contact us
        </button>
      </div>
    </div>

  );
};

export default Navbar;
