import React from "react";
// import logo from '../../assets/images/solar-panel-vector.png';

import Signature from './Signature';

export default function FooterPage() {
    return (
        <div>
            <footer className='footer'>
                <a href='tel:4044297980' className='contact-link'>
                    <i className="bi bi-telephone-fill"></i> (404) 429-7980
                </a>
                <a href='mailto:jmsteven28@live.com' className='contact-link'>
                    <i className="bi bi-envelope-fill"></i> jmsteven28@live.com
                </a>
                {/* <p>
                <i className="bi bi-building-fill"></i> 1683 Austin Dr, Decatur, GA 30032
                </p> */}
                <div className='logo'>
                    <a href="/#home">
                        {/* <img src={logo} alt="logo"></img> */}
                        <i className="fas fa-solar-panel"></i>
                    </a>
                </div>

                <Signature />

            </footer>
    </div>
    )
};