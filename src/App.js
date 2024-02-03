import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/S.png';
import banner from './images/Untitled design.png';
import star from './images/Untitled_design-removebg-preview.png'
import img1 from './images/Real Estate Agent Granville, OH _ Aaron Graves KW Realty.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const App = () => {
    const phoneNumber = '9845810182';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
  
    const openWhatsAppChat = () => {
      window.open(whatsappLink, '_blank');
    };
    


  return (
<Fragment>
<div className='main-div'>
  <div className='top-section'>
    <section>
      <div className='btn-top-section'>
        <button className='location-btn-top-section'>
          <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{textDecoration: 'none', color: 'white'}}>
          <span className='location-icon'>⚲</span> Banglore, vasanthnagar 560001
          </a>
        </button>
      </div>
    </section>
  </div>
  <div className='header'>
      <header className='header-container'>
        <div className='center-content'>
          <div className='left-buttons'>
            <button className='header-button' onClick={openWhatsAppChat}>Contact Us</button>
            <button className='header-button'>About us</button>
          </div>
          <div className='logo'>
            {/* Your logo goes here */}
            <img src={logo} alt="Logo" className='logo-image' />
          </div>
          <div className='right-buttons'>
          <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{textDecoration: 'none', color: 'black'}}>
            <button className='header-button'>Location</button>
            </a>
            <button className='header-button'>availability</button>
          </div>
        </div>
      </header>
    </div>
    <div className='banner-hero-section'>
      <h1>LUXURY LIVING</h1>
      <div className='button-container'>
        <button onClick={openWhatsAppChat}>Contact Us</button>
        <button onClick={openWhatsAppChat}>Book Now</button>
      </div>
    </div>
</div>
</Fragment>
  );
};

export default App;