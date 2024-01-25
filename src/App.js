import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/S.png';
import banner from './images/Untitled design.png';
import star from './images/Untitled_design-removebg-preview.png'
import img1 from './images/Real Estate Agent Granville, OH _ Aaron Graves KW Realty.jpg'
import { Link } from 'react-router-dom';

const App = () => {
    const phoneNumber = '9845810182';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
  
    const openWhatsAppChat = () => {
      window.open(whatsappLink, '_blank');
    };
  return (
<Fragment>
  <div className='main-div'>
    <div className='header'>
      <header>
        <div className='logo'>
          <img src={logo} alt='Saz PG' />
        </div>
        <div className='header-btns'>
          <button className='header-btn'>About us</button>
          <button className='header-btn'>Details</button>
          <button className='header-btn' onClick={openWhatsAppChat}>Book now</button>
          <button className='contact-us-btn-spcbtn' onClick={openWhatsAppChat}>Contact us</button>
        </div>
      </header>
    </div>
  <div className='banner'>
    <div className='banner-txt'>
      <h2>Book your room<br/> now!</h2>
      <button onClick={openWhatsAppChat}>Book Now</button>
    </div>
  </div>
  <div className='some-breif-description'>
    <section className='box-sbd'>
        <h3>500+<br/>
        Stays
        </h3>
    </section>
    <section className='box-sbd'>
        <h3>4.6 <img src={star} style={{width: '20px'}}/><br/>
        Rating
        </h3>
    </section>
    <section className='box-sbd'>
        <h3>15+<br/>
            Years old
        </h3>
    </section>
   </div>
   <div className='aboutUs'>
        <section className='abtusimg'></section>
        <section className='abtus-text'>
          <h2>About us</h2>
          <p>
Welcome to Saz PG, an exclusive
 space crafted for men seeking camaraderie and
  comfort. Enjoy savory meals, 2-4 sharing rooms
   with attached bathrooms, a washing machine,
    speedy WiFi, and more. It's not just
     accommodation; it's brotherhood. Welcome 
     to your home away from home!</p>
        </section>
   </div>
   </div>
</Fragment>
  );
};

export default App;