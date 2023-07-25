import React from 'react';
import image from '../../assets/images/view-green-913w.webp';

export default function About() {
  return (
    <div>
      <div>
        <h1>About</h1>
        {/* <div 
          style={{
            textAlign: 'center',
            backgroundImage:`url(${image})`, 
            backgroundRepeat: 'no-repeat', 
            padding: '250px'
          }}>
        </div> */}
        <img
        src={image}
        alt="About Thumbnail"
        className="card-thumbnail"
        />
        <div className='aboutSection'>
          <p>
          We all enjoy the conveniences of modern life. But in today's world, those conveniences are just a catastrophic event away from being out of reach. Our solutions are intended for disaster relief, off the grid living, RV independence, or simply insurance in case you have to "bug out."
          </p>
        </div>
      </div>
    </div>
  );
}
