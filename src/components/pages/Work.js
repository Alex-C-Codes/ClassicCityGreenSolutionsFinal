import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Work() {
  return (
    <div>
        <h1>Work</h1>
        <Carousel>
        <Carousel.Item>
                
            <div className="card">
            <div className="card-content">
                <h3>Web Development</h3>
                <p>We will custom build a website based on your specific needs</p>
                <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" target="_blank" rel="noopener noreferrer">
                <button className="purchase-button">
                    Get a Quote Today
                </button>
                </a>
            </div>
            </div>

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>

            <div className="card">
            <div className="card-content">
                <h3>Web Development</h3>
                <p>We will custom build a website based on your specific needs</p>
                <a href="https://buy.stripe.com/test_eVa6p87bXfx3d8I4gg" target="_blank" rel="noopener noreferrer">
                <button className="purchase-button">
                    Get a Quote Today
                </button>
                </a>
            </div>
            </div>

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>

        </Carousel>
    </div>
  )
}