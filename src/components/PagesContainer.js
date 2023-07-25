import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Products  from './pages/Products';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    // <Router>
    <div className="App-header">
      <nav className='nav-bar'>
        <div className='nav-header'>
          <h1 className='nav-title'>
            <div 
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => handleTabChange('home')}
            >
              Classic City Green Solutions
            </div>
          </h1>
          <ul className='nav-list'>
            <li>
              <a href="#home">Home</a>
            </li>
            {/* <li
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => handleTabChange('about')}
            > */}
            <li>
              {/* <Link to="/about">About</Link> */}
              <a href='#about'>About</a>
            </li>
            {/* <li
              className={activeTab === 'products' ? 'active' : ''}
              onClick={() => handleTabChange('products')}
            > */}
            <li>
              {/* <Link to="/products">Products</Link> */}
              <a href='#products'>Products</a>
            </li>
            {/* <li
              className={activeTab === 'contact' ? 'active' : ''}
              onClick={() => handleTabChange('contact')}
            > */}
            <li>
            {/* <Link to="/contact">Contact</Link> */}
            <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <div className='content-wrapper'>
        <div className='column-left'></div>

        <div className="content">
          {activeTab === '' && <Homepage />}
          {activeTab === 'home' && <Homepage />}
          {activeTab === 'about' && <About />}
        </div>
        
        <div className='column-right'></div>
      </div> */}

      {/* <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
      </Routes> */}

      <div id="home" className="content"><Homepage /></div>
      <div id='about' className="content"><About /></div>
      <div id='products' className="content"><Products /></div>
      <div id='contact' className="content"><Contact /></div>

      <footer className='footer'>
        {/* <ul className='nav-list'>
          <li>Phone: <a>404-790-3995</a></li>
          <li>Email: <a>adsff</a></li>
        </ul> */}
          <p>
            Phone:
            <a target="_blank" rel="noopener noreferrer" href="tel:4044297980"> (404) 429-7980</a>
          </p>
          <p>
            Email:
            <a target="_blank" rel="noopener noreferrer" href="mailto:jmsteven28@live.com"> jmsteven28@live.com</a>
          </p>
      </footer>
      
      <div className='alexSignature'>
        <p>Website designed and made with &#x2764; by <a href='https://portfoliopage.herokuapp.com/#about'>Alex C.</a></p>
      </div>
    </div>
    // </Router>
  );
}