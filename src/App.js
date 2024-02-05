import React, { Fragment, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/S.png';
import banner from './images/Untitled design.png';
import star from './images/Untitled_design-removebg-preview.png'
import img1 from './images/Real Estate Agent Granville, OH _ Aaron Graves KW Realty.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import wifi from './images/wifi-sign.png';
import basicimu from './images/icons8-smart-home-shield-64.png'
import washingmachine from './images/washing-machine-removebg-preview.png'
import dinner from './images/dinner.png'
import instagram from './images/instagram_logo.png'

const App = () => {
    const phoneNumber = '9845810182';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    const openWhatsAppChat = () => {
        window.open(whatsappLink, '_blank');
    };

    const accommodationsRef = useRef(null);
    const aboutusref = useRef(null);

    const scrollToAccommodations = () => {
        accommodationsRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const handleCallButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
      };
    const scrollToAboutus = () => {
      aboutusref.current.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <Fragment>
            <div className='main-div'>
                <div className='top-section'>
                    <section>
                        <div className='btn-top-section'>
                            <button className='location-btn-top-section'>
                                <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{ textDecoration: 'none', color: 'white' }}>
                                    <span className='location-icon'>⚲</span> Banglore, vasanthnagar 560001
                                </a>
                            </button><br/>
                            <button className='location-btn-top-section' onClick={handleCallButtonClick}>
                              Call 9845810182
                            </button>
                        </div>
                    </section>
                </div>
                <div className='header'>
                    <header className='header-container'>
                        <div className='center-content'>
                            <div className='left-buttons'>
                                <button className='header-button-dis' onClick={openWhatsAppChat}>Contact Us</button>
                                <button className='header-button' onClick={scrollToAboutus}>About us</button>
                            </div>
                            <div className='logo'>
                                <img src={logo} alt="Logo" className='logo-image' />
                            </div>
                            <div className='right-buttons'>
                                <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{ textDecoration: 'none', color: 'black' }}>
                                    <button className='header-button'>Location</button>
                                </a>
                                <button className='header-button-dis' onClick={scrollToAccommodations}>Availability</button>
                            </div>
                        </div>
                    </header>
                </div>
                <div className='banner-hero-section'>
                    <h1>Home Away From home</h1>
                    <div className='button-container'>
                        <button onClick={openWhatsAppChat}>Contact Us</button>
                        <a href='https://maps.app.goo.gl/DVDUtJAu9ZKtNSDB8' style={{ textDecoration: 'none', color: 'white' }}>
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
                <div className='section-2' ref={accommodationsRef}>
                    <h2>Accommodation Options</h2>
                    <section className='accommodation-opt'>
                        <h3>2 Sharing Rooms</h3>
                        <p>Experience privacy and comfort in our 2
                            sharing rooms, perfect for those who prefer
                            a more intimate setting while enjoying
                            the benefits of shared living.</p>
                            <button onClick={openWhatsAppChat}>Book Now</button>
                    </section>
                    <section className='accommodation-opt'>
                        <h3>3 Sharing Rooms</h3>
                        <p>Foster connections and build friendships
                            in our spacious 3 sharing rooms, designed
                            to create a dynamic and interactive living
                            environment</p>
                            <button onClick={openWhatsAppChat}>Book Now</button>
                    </section>
                    <section className='accommodation-opt'>
                        <h3>4 Sharing Rooms</h3>
                        <p>Embrace a lively atmosphere in our 4
                            sharing rooms, where you can thrive in
                            a vibrant community while having your
                            own personal space.</p>
                            <button onClick={openWhatsAppChat}>Book Now</button>
                    </section>
                </div>
                <div className='section-3' ref={aboutusref}>
                  <h2 style={{marginBottom: '30px'}}>Amenities You Can Count On</h2>
                  <section className='section-3-amenities'>
                    <img src={dinner}/>
                    <h3>Daily Dinner:</h3>
                    <p>Savor the convenience of a delicious and 
                      nutritious dinner every day, specially 
                      prepared to cater to your dietary preferences.
                       On Sundays, we go the extra mile by providing
                        both lunch and dinner.</p>
                  </section>
                  <section className='section-3-amenities'>
                    <img src={wifi}/>
                    <h3>WiFi:</h3>
                    <p>Stay connected with high-speed WiFi throughout 
                      our premises, ensuring you have a reliable internet
                       connection for work, studies, and entertainment.</p>
                  </section>
                  <section className='section-3-amenities'>
                    <img src={washingmachine}/>
                    <h3>Washing Machine:</h3>
                    <p>Say goodbye to laundry hassles with our fully
                       equipped washing machines, offering the convenience
                        of clean clothes whenever you need them</p>
                  </section>
                  <section className='section-3-amenities'>
                    <img src={basicimu}/>
                    <h3>Basic Amenities:</h3>
                    <p>Enjoy a comfortable stay with essential 
                      amenities provided, making your experience 
                      at Saz PG stress-free and enjoyable.</p>
                  </section>
                </div>
                <div className='section-4'>
                  <section className='section-4-img'></section>
                  <section className='section-4-text'>
                    <h2>Flexible Stays</h2>
                    <p>Whether you require a long-term arrangement
                       or a short-term stay, our flexible rental 
                       options cater to your needs. Choose our daily
                        basis rooms for a temporary stay without 
                        compromising on quality.</p>
                        <button onClick={openWhatsAppChat}>Book Now</button>
                  </section>
                </div>
                <div className="dropment-main-blog-page-footer">
         <footer>
              <section className="dropment-main-blog-page-footer-links-section">
                <h2 style={{color: 'black'}}>Links</h2>
                <p onClick={scrollToAboutus}>About us</p>
                <p onClick={scrollToAccommodations}>accommodations</p>
              </section>
              <section className="dropment-main-blog-page-footer-follow-section">
                <h2 style={{color: 'black'}}>Social media</h2>
                <a href="https://www.instagram.com/dropment.online/">
                <img src={instagram}/>
                </a>
              </section>
              <section className="dropment-main-blog-page-footer-contact-section">
                <h2 style={{color: 'black'}}>contact</h2>
                <p>Email: dropment.saz@gmail.com</p>
                <p onClick={openWhatsAppChat}>Phone no: 9845810182</p>
              </section>
              <section className="dropment-main-blog-page-footer-follow-section">
                <h2 style={{color: 'black'}}>Other businesses</h2>
                <a href="https://dropment.online/" style={{textDecoration: 'none'}}>
                <p>Dropment</p>
                </a>
                <a href="https://saz-infotech.vercel.app/" style={{textDecoration: 'none'}}>
                <p>Saz-infotech</p>
                </a>
              </section>
         </footer>
        </div>
        <div className='copyrights' style={{textAlign: 'center'}}>
        &copy; {new Date().getFullYear()} Saz. All rights reserved.
        </div>
            </div>
        </Fragment>
    );
};

export default App;