import React from 'react';
// import image from '../../assets/images/grass-trees-2304w.webp';
// import image from '../../assets/images/IMG_1927.jpg';
import image from '../../assets/images/grass-trees-2304w.webp';
// import image from '../../assets/images/71124377633__CE1FCF33-A1B9-452F-B8C9-B880E80BC885.mov';
// import image from '../../assets/images/70784152145__33E60A9A-28DD-440D-898C-157212743443.jpg'

export default function Homepage() {
  return (
    <div className='homepageBackgroundImage' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize:'cover', 
      padding: '18.5%',
    }}>
      <div className='homePageContent'>
        {/* <i className="bi bi-geo-alt-fill"></i>
        <h3>Based in Atlanta, GA</h3> */}
        <p>Let us customize a sustainable solution for your mobile energy and utility needs</p>
        <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" rel="noopener noreferrer">
          <button className="purchase-button-homepage">
            <b>Buy a Solar Panel Kit Today</b>
          </button>
        </a>
      </div>
    </div>
  );
}