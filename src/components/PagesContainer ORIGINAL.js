import React from 'react';

import Homepage from './pages/Homepage';
import Story from './pages/Story';
import Services  from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import BookNow from './pages/BookNow';

export default function PortfolioContainer() {
  return (
    <div className="App-header">
      <nav className='nav-bar'>
        <div className='top-row'>
          <div className='contact-links'>
            <a href='tel:6782312922' className='contact-link'>
              <i className="bi bi-telephone-fill"></i> 678-231-2922
            </a>
            <a href='mailto:info@exmaple.com' className='contact-link'>
              <i className="bi bi-envelope-fill"></i> info@example.com
            </a>
          </div>
          <div className='nav-buttons'>
            <a href="https://www.timetopet.com/portal/leash-me-out-test/create-account" target="_blank" rel="noopener noreferrer">
              <button className="nav-button">
              <i className="bi bi-unlock-fill"></i> <b>New Clients</b>
              </button>
            </a>
            <a href="https://www.timetopet.com/portal/leash-me-out-test" target="_blank" rel="noopener noreferrer">
              <button className="nav-button">
              <i className="bi bi-lock-fill"></i> <b>Returning Clients</b>
              </button>
            </a>
          </div>
        </div>
        <div className='nav-header'>
          <h1 className='nav-title'>
            <div className='logo'>
              <a href="#home">Leash Me Out</a>
            </div>
          </h1>
          <ul className='nav-list'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href='#services'>Services</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="home" className="content"><Homepage /></div>
      <div id="story" className="content"><Story /></div>
      <div id='services' className="content"><Services /></div>
      <div id='about' className="content"><About /></div>
      <div id='contact' className="content"><Contact /></div>
      <div id='booknow' className='content'><BookNow /></div>
      <div id='footer' className="content"><Footer /></div>

    </div>
  );
}