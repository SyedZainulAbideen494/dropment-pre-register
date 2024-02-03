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
        <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{textDecoration: 'none', color: 'white'}}>
        <button onClick={openWhatsAppChat}>Location</button>
        </a>
      </div>
    </div>
    <div className="container-section-1">
      <div className="text-section-1">
        <h1 className="title-section-1">Your Home Away From Home!</h1>
        <p className="description-section-1">
          with our shared accommodation options tailored for working professionals and students.
          At <span className="business-name-section-1">Saz PG</span>, we prioritize comfort, convenience, and community,
          providing you with an ideal living space for your extended stays.
        </p>
      </div>
      <div className="section-1-img"></div>
    </div>
</div>
</Fragment>
  );
};

export default App;