import React from 'react';

import Homepage from './pages/Homepage';
import Story from './pages/Story';
import Services  from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details';
// import Slideshow from './pages/Slideshow';

export default function PortfolioContainer() {
  return (
    <div className="App-header">
      
      {/* <Navbar /> */}
      <div id="home" className="content"><Homepage /></div>
      <div id="story" className="content"><Story /></div>
      <div id='details' className="content"><Details /></div>
      <div id='services' className="content"><Services /></div>
      {/* <div id='slideshow' className="content"><Slideshow /></div> */}
      <div id='about' className="content"><About /></div>
      <div id='contact' className="content"><Contact /></div>
      <div className='content'>
        <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" rel="noopener noreferrer">
          <button className="purchase-button-homepage">
            <b>Buy a Solar Panel Kit Today</b>
          </button>
        </a>
      </div>
    </div>
  );
}