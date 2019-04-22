import React from 'react';
import './Footer.css';
import Facebook from './facebook.svg';
import Twitter from './twitter.svg';
import Youtube from './youtube.svg';
import Chat from './chat.svg';
import Email from './email.svg';
import Location from './location.svg';
import Phone from './phone.svg';

function Footer() {
    return (
      <div className="containerFluid footer">
      <div className="row justify-content-around">
    <div className="col-12 col-md-6 col-lg-4 mb-5">
    <h3>Toucans</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et finibus mi. Sed at imperdiet sem, eget facilisis velit. Quisque lacus sem, efficitur eget libero eu, pretium blandit dui. Sed vel euismod odio, sollicitudin bibendum est. </p>
          <div className="row justify-content-center pt-2">
    <div className="col-3 col-sm-2">
    <img src={Facebook} className="img-fluid" alt="Facebook"></img>
    </div>
    <div className="col-3 col-sm-2">
    <img src={Twitter} className="img-fluid" alt="Twitter"></img>
    </div>
    <div className="col-3 col-sm-2">
    <img src={Youtube} className="img-fluid" alt="Youtube"></img>
    </div>
  </div>
    </div>
    <div className="col-12 col-lg-4 col-xl-4 col-md-6">
    <h3>Contact Information</h3>
  <div className="row py-2 align-items-center justify-content-center">
    <div className="col-md-2">
    <img src={Email} className="img-fluid" alt="Email"></img>
    </div>
    <div className="col-md-6 col-lg-5 text-lg-right">
      <a href="#">info@toucans.com</a>
    </div>
  </div>
  <div className="row py-2 align-items-center justify-content-center">
    <div className="col-md-2">
    <img src={Phone} className="img-fluid" alt="Phone"></img>
    </div>
    <div className="col-md-6 col-lg-5 text-lg-right">
      +1-555-555-5555
    </div>
  </div>
  <div className="row py-2 align-items-center justify-content-center">
    <div className="col-md-2">
    <img src={Chat} className="img-fluid" alt="Chat"></img>
    </div>
    <div className="col-md-6 col-lg-5 text-lg-right">
      <a href="#">Live Chat</a>
      </div>
  </div>
  <div className="row py-2 align-items-center justify-content-center">
    <div className="col-md-2">
    <img src={Location} className="img-fluid" alt="Location"></img>
    </div>
    <div className="col-md-6 col-lg-5 text-lg-right">
      123 Anywhere Street<br></br>
      Somewhere, SC 30837<br></br>
      USA
    </div>
  </div>
    </div>
  </div>
      </div>
    );
  }

export default Footer;
