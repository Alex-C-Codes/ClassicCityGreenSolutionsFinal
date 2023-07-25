import React from 'react';
import solarPanelKitImage from '../../assets/images/solarPanelKit.png';

export default function ProductCards() {

  const handlePurchase = () => 
  {
    // alert('Purchase button clicked!');

  };

  return (
    <div>
      {/* <h1>ProductCards</h1> */}
      <div className="card">
        <img
          src={solarPanelKitImage}
          alt="Card Thumbnail"
          className="card-thumbnail"
        />

        <div className="card-content">
          <h3>Solar Panel Kit</h3>
          <p>A kit with solar panels, water, power reader, and more.</p>
          <div className="price-tag">$499.99</div>

          <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" target="_blank" rel="noopener noreferrer">
            <button onClick={handlePurchase} className="purchase-button">
              Purchase
            </button>
          </a>
        </div>
        
      </div>
    </div>
  );
}
