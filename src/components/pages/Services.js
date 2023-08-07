import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import solarPanelKitImage from '../../assets/images/solarPanelKit.png';

// NOTES: use barn as icons for the green cards

export default function Services() {

  const servicesList = [
    {
      id: 1,
      serviceType: 'Solar Panel Kit',
      serviceDescription: 'Kit includes solar panel, battery, and water purification',
      priceTag: '$499.99',
      cardImage: require('../../assets/images/view-green-913w.webp')
    },
  ]

  return (
    <div>
      <h1>Products</h1>     
      <div className="services-page">
        {servicesList.map((data) =>
          <div key={data.id} className="card">
            <img
              src={data.cardImage}
              alt="Card Thumbnail"
              className="card-thumbnail"
            />
    
            <div className="card-content">
              <h3>{data.serviceType}</h3>
              <p>{data.serviceDescription}</p>
              <div className="price-tag">{data.priceTag}</div>
              <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" rel="noopener noreferrer">
                <button className="purchase-button">
                  <b>Buy Now</b>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
      <hr id='services-hr'></hr>
    </div>
  )
}