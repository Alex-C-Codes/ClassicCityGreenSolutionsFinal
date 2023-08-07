// import React from "react";

// export default function Details() {
//     return (
//         <div className="storyPage">
//             <p>We all enjoy the conveniences of modern life. But in today's world, those conveniences are just a catastrophic event away from being out of reach. Our solutions are intended for disaster relief, off the grid living, RV independence, or simply insurance in case you have to "bug out."</p>
//         </div>
//     )
// };

import React from 'react';
// import image from '../../assets/images/grass-trees-2304w.webp';
// import image from '../../assets/images/IMG_1927.jpg';
import image from '../../assets/images/view-green-913w.webp';
// import image from '../../assets/images/71124377633__CE1FCF33-A1B9-452F-B8C9-B880E80BC885.mov';
// import image from '../../assets/images/70784152145__33E60A9A-28DD-440D-898C-157212743443.jpg'

export default function Details() {
  return (
    <div className='homepageBackgroundImage' style={{
      backgroundImage:`url(${image})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize:'cover', 
      padding: '18.5%',
    }}>
      <div className='homePageContent'>
        <i className="bi bi-geo-alt-fill"></i>
        <h3>Based in Atlanta, GA</h3>
        <p>We all enjoy the conveniences of modern life. But in today's world, those conveniences are just a catastrophic event away from being out of reach. Our solutions are intended for disaster relief, off the grid living, RV independence, or simply insurance in case you have to "bug out."</p>
      </div>
    </div>
  );
}