import React, { useState } from "react";
// import { Link } from 'react-router-dom';

// import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

    return (
        <div className="App-header">
        <nav className={`nav-bar ${isNavOpen ? 'active' : ''}`}>
        {/* <nav> */}
          <div className='top-row'>
            <div className='contact-links'>
              <a href='tel:4044297980' className='contact-link'>
                <i className="bi bi-telephone-fill"></i> (404) 429-7980
              </a>
              <a href='mailto:jmsteven28@live.com' className='contact-link'>
                <i className="bi bi-envelope-fill"></i>  jmsteven28@live.com
              </a>
            </div>
{/* 
            <div className='nav-buttons'>
              <a href="https://www.timetopet.com/portal/leash-me-out/create-account" target="_blank" rel="noopener noreferrer">
                <button className="nav-button">
                <i className="bi bi-unlock-fill"></i> <b>New Clients</b>
                </button>
              </a>
              <a href="https://www.timetopet.com/portal/leash-me-out" target="_blank" rel="noopener noreferrer">
                <button className="nav-button">
                <i className="bi bi-lock-fill"></i> <b>Returning Clients</b>
                </button>
              </a>
            </div> */}

          </div>

          <div className='nav-header'>
            <h1 className='nav-title'>
              <div className='logo'>
                {/* <a href="/#home">Leash Me Out</a> */}

                <a href="/#home">
                  {/* <img src={logo} alt="logo"></img> */}
                  Classic City Green Solutions
                </a>

              </div>
            </h1>

            <ul className={`nav-list ${isNavOpen ? 'active' : ''}`}>
              <li>
                <a href="/#home">Home</a>
              </li>
              <li>
                <a href='/#services'>Products</a>
              </li>
              <li>
                <a href='/#about'>About</a>
                {/* <Link to='/#about'>About</Link> */}
              </li>
              <li>
                <a href='/#contact'>Contact</a>
              </li>
            </ul>

            <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={handleToggleNav}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

          </div>

        </nav>

      </div>
    )
}