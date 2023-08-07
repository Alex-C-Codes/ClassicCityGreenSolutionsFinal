import React from 'react';
import PagesContainer from "./components/PagesContainer";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/pages/Footer';
// import BookNow from './components/pages/BookNow';

// import Story from './components/pages/Story';
// import Services  from './components/pages/Services';
// import About from './components/pages/About';
// import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
    <div className='app'>
      <div id='content-wrapper'>

      <div className='sticky'><Navbar /></div>

        <Routes>
          <Route path='/' exact Component={PagesContainer} />
          {/* <Route path='/booknow' exact Component={BookNow} /> */}
          {/* <Route path='/#about' Component={About} /> */}
        </Routes>

        <div id='footer' className="content"><Footer /></div>

      </div>
      
    </div>
  </Router>

  );
}

// const App = () => <PagesContainer />;

export default App;
