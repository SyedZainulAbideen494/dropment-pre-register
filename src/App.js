import React, { useRef, useState, useEffect, Fragment } from 'react';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import logo from './images/drop2_logo.png';
import insta from './images/icons8-instagram-50.png';
import './App.css'

const App = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yoweeji', 'template_mn6lzho', form.current, 'TA4h9XhSeUYLdyJz2')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
      const timer = setTimeout(() => {
        const newTimeLeft = calculateTimeLeft();
        setTimeLeft(newTimeLeft);

        if (newTimeLeft.days === undefined) {
          setTimerDone(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    });

    return (
      <div>
        {timeLeft.days !== undefined ? (
          <div className="countdown-div">
            <span className="countdown-timer">{timeLeft.days}</span>{' '}
            <span className="countdown-timer">{timeLeft.hours}</span>{' '}
            <span className="countdown-timer">{timeLeft.minutes}</span>{' '}
            <span className="countdown-timer">{timeLeft.seconds}</span>
            <br />
          </div>
        ) : (
          <div className='after-timer-effect'>
            <button onClick={() => setTimerDone(true)}>Start</button>
            {timerDone && (
              <Fragment>
                <Confetti />
                <h1>Start your journey<br/>with Dropment!</h1>
              </Fragment>
            )}
          </div>
        )}
      </div>
    );
  };

  const targetLaunchDate = '2023-12-15T00:00:00';

  return (
    <div className="app-container">
      <div className="header">
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="btnsheader">
            <button>Pre-register</button>
          </div>
          <div className="socials">
            <h3>Follow us</h3>
            <a href={`https://www.instagram.com/saz_494/`}>
              <img src={insta} alt="Instagram" />
            </a>
          </div>
        </header>
      </div>
      <div className="countdown-main">
        <div className="countdown-container">
          <h1 className="timer-txt">Timer:</h1>
          <CountdownTimer targetDate={targetLaunchDate} />
          <h1 className="ul-txt">Until launch!</h1>
        </div>
      </div>
      <div className="form">
        <h2>Pre-Register</h2>
        {isSubmitted ? (
          <p className="success-message"><h3>Form submitted successfully! Thank you.</h3></p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label><br />
            <input type="text" name="to_name" className="normal" required placeholder="Name" style={{ color: 'white' }} /><br />
            <label>Email</label><br />
            <input type="email" name="from_name" className="normal" required placeholder="email" style={{ color: 'white' }} /><br />
            <input type="submit" value="Send" className="btnininput" />
          </form>
        )}
      </div>
      <h2 className="mnth-r-f-n">Get 3 months free premium<br />pre-register now!</h2>
      
    </div>
  );
};

export default App;