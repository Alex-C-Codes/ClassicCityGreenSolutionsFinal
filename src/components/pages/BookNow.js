import React from "react";

export default function BookNow() {
    return (
        <div className="bookNowPage, content">
            <h1>Book Now</h1>
            <i className="fas fa-paw"></i>
            <h3>Your Pets Happiness Is Our Business</h3>
            <br></br>
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
            </div>
        </div>
    )
}