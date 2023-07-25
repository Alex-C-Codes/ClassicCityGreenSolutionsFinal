import React from 'react';

import image from '../../assets/images/grass-trees-2304w.webp';

export default function Homepage() {
  return (
    <div style={{backgroundImage:`url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover', padding: '10%'}}>
      
      <div className='homePageContent'>
        <h3>Let us customize a sustainable solution for your mobile energy and utility needs.</h3>
        <p>Our experts can provide a customized mobile power, water purification, and telecommunications platform that meets your specifications.</p>
      </div>
    </div>
  );
}
