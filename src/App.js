import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/S.png';
import banner from './images/Untitled design.png';

const App = () => {
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
              <button className='header-btn'>Book now</button>
              <button className='contact-us-btn-spcbtn'>Contact us</button>
            </div>
          </header>
        </div>
      </div>
      <div className='banner'>
      </div>
    </Fragment>
  );
};

export default App;